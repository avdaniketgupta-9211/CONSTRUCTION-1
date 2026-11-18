import { NextResponse } from "next/server";
import { getDb } from "@/db";
import { leads } from "@/db/schema";

export const dynamic = "force-dynamic";

type FieldErrors = Partial<Record<"name" | "phone" | "email" | "message" | "form", string>>;

const rateLimit = new Map<string, number[]>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 6;

function isRateLimited(key: string) {
  const now = Date.now();
  const recent = (rateLimit.get(key) ?? []).filter((time) => now - time < WINDOW_MS);
  recent.push(now);
  rateLimit.set(key, recent);
  if (rateLimit.size > 500) {
    for (const [entryKey, times] of rateLimit) {
      if (times.every((time) => now - time >= WINDOW_MS)) rateLimit.delete(entryKey);
    }
  }
  return recent.length > MAX_REQUESTS;
}

function validate(input: { name?: unknown; phone?: unknown; email?: unknown; message?: unknown }) {
  const errors: FieldErrors = {};
  const name = typeof input.name === "string" ? input.name.trim() : "";
  const phone = typeof input.phone === "string" ? input.phone.trim() : "";
  const email = typeof input.email === "string" ? input.email.trim() : "";
  const message = typeof input.message === "string" ? input.message.trim() : "";

  if (name.length < 2) errors.name = "Enter the name we should use when we call you.";
  if (name.length > 120) errors.name = "Please shorten this to 120 characters or fewer.";

  const digits = phone.replace(/\D/g, "");
  if (digits.length < 7) errors.phone = "Enter a phone number we can reach you on, including area code.";
  else if (digits.length > 15) errors.phone = "That phone number is too long. Please check the digits.";
  else if (!/^[+()\-.\s\d]+$/.test(phone)) errors.phone = "Use digits, spaces, and + ( ) - only.";

  if (email.length > 0 && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    errors.email = "That email address does not look complete. You can also leave it blank.";
  }
  if (email.length > 254) errors.email = "Please use an email address under 254 characters.";

  if (message.length < 10) errors.message = "Add a sentence or two about the project so we can review it properly.";
  if (message.length > 2000) errors.message = "Please keep this under 2,000 characters. Detail can follow by email.";

  return { errors, values: { name, phone, email: email.length ? email : null, message } };
}

export async function POST(request: Request) {
  let payload: Record<string, unknown>;
  try {
    payload = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ ok: false, errors: { form: "We could not read that request. Please try again." } }, { status: 400 });
  }

  // Hidden honeypot. If filled, accept silently without writing anything.
  if (typeof payload.companyWebsite === "string" && payload.companyWebsite.trim().length > 0) {
    return NextResponse.json({ ok: true });
  }

  // Timing check: legitimate users need a moment to fill four fields.
  const startedAt = typeof payload.startedAt === "number" ? payload.startedAt : 0;
  if (startedAt > 0 && Date.now() - startedAt < 1200) {
    return NextResponse.json({ ok: false, errors: { form: "That was quick. Please take a moment and submit again." } }, { status: 429 });
  }

  const forwarded = request.headers.get("x-forwarded-for") ?? "unknown";
  const ip = forwarded.split(",")[0]?.trim() || "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { ok: false, errors: { form: "Too many requests from this connection. Please try again shortly or call us." } },
      { status: 429 },
    );
  }

  const { errors, values } = validate(payload);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  const sourcePath = typeof payload.sourcePath === "string" ? payload.sourcePath.slice(0, 300) : null;
  const userAgent = request.headers.get("user-agent")?.slice(0, 400) ?? null;

  try {
    await getDb().insert(leads).values({
      name: values.name,
      phone: values.phone,
      email: values.email,
      message: values.message,
      sourcePath,
      userAgent,
    });
  } catch (error) {
    console.error("[estimate] lead persistence failed", error instanceof Error ? error.message : "unknown error");
    return NextResponse.json(
      {
        ok: false,
        errors: {
          form: "We could not save your request on our side. Nothing was lost on your end — please try again, or call us if it keeps happening.",
        },
      },
      { status: 503 },
    );
  }

  const webhookUrl = process.env.LEAD_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ source: "kestrel-ridge-estimate-form", ...values, sourcePath }),
        signal: AbortSignal.timeout(4000),
      });
    } catch (error) {
      // The lead is already persisted; delivery failure is logged, not surfaced as a failure.
      console.warn("[estimate] webhook delivery failed", error instanceof Error ? error.message : "unknown error");
    }
  }

  return NextResponse.json({ ok: true });
}

export async function GET() {
  return NextResponse.json({ ok: false, error: "Method not allowed" }, { status: 405, headers: { Allow: "POST" } });
}
