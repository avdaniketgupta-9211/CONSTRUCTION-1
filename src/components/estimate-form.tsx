"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type ChangeEvent, type FormEvent } from "react";
import { site } from "@/content/site";
import { Arrow, Check, PhoneIcon } from "@/components/ui";
import { track } from "@/lib/analytics";

type FieldName = "name" | "phone" | "email" | "message";
type Errors = Partial<Record<FieldName | "form", string>>;

const fieldIds: Record<FieldName, string> = {
  name: "estimate-name",
  phone: "estimate-phone",
  email: "estimate-email",
  message: "estimate-message",
};

const initialValues: Record<FieldName, string> = { name: "", phone: "", email: "", message: "" };

function clientValidate(values: Record<FieldName, string>): Errors {
  const errors: Errors = {};
  const name = values.name.trim();
  const phone = values.phone.trim();
  const email = values.email.trim();
  const message = values.message.trim();

  if (name.length < 2) errors.name = "Enter the name we should use when we call you.";
  if (name.length > 120) errors.name = "Please shorten this to 120 characters or fewer.";

  const digits = phone.replace(/\D/g, "");
  if (digits.length < 7) errors.phone = "Enter a phone number we can reach you on, including area code.";
  else if (digits.length > 15) errors.phone = "That phone number is too long. Please check the digits.";

  if (email.length > 0 && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    errors.email = "That email address does not look complete. You can also leave it blank.";
  }
  if (email.length > 254) errors.email = "Please use an email address under 254 characters.";

  if (message.length < 10) errors.message = "Add a sentence or two about the project so we can review it properly.";
  if (message.length > 2000) errors.message = "Please keep this under 2,000 characters. Detail can follow by email.";

  return errors;
}

export function EstimateForm({ headingLevel = "h2", compact = false }: { headingLevel?: "h2" | "h3"; compact?: boolean }) {
  const pathname = usePathname();
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [attempts, setAttempts] = useState(0);
  const startedAt = useRef<number>(0);
  const hasStarted = useRef(false);
  const summaryRef = useRef<HTMLDivElement>(null);
  const honeypotRef = useRef<HTMLInputElement>(null);
  const Heading = headingLevel;

  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  const update = (field: FieldName) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues((current) => ({ ...current, [field]: event.target.value }));
    if (!hasStarted.current) {
      hasStarted.current = true;
      track("estimate_form_start", { page: pathname });
    }
    if (errors[field]) {
      setErrors((current) => {
        const next = { ...current };
        delete next[field];
        return next;
      });
    }
  };

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting") return;

    const nextErrors = clientValidate(values);
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus("idle");
      track("estimate_form_validation_error", { page: pathname, fields: Object.keys(nextErrors).join(",") });
      window.requestAnimationFrame(() => summaryRef.current?.focus());
      return;
    }

    setStatus("submitting");
    setErrors({});

    try {
      const response = await fetch("/api/estimate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          companyWebsite: honeypotRef.current?.value ?? "",
          startedAt: startedAt.current,
          sourcePath: pathname,
        }),
      });

      const data = (await response.json().catch(() => null)) as { ok?: boolean; errors?: Errors } | null;

      if (!response.ok || !data?.ok) {
        const serverErrors = data?.errors ?? {
          form: "We could not send your request. Check your connection and try again, or call us.",
        };
        setErrors(serverErrors);
        setStatus("error");
        setAttempts((count) => count + 1);
        track("estimate_form_error", { page: pathname, status: response.status });
        window.requestAnimationFrame(() => summaryRef.current?.focus());
        return;
      }

      setStatus("success");
      track("estimate_form_success", { page: pathname });
      setValues(initialValues);
      startedAt.current = Date.now();
    } catch {
      setErrors({
        form: "We could not reach the server. Check your connection and try again, or call us and we will take the details by phone.",
      });
      setStatus("error");
      setAttempts((count) => count + 1);
      track("estimate_form_error", { page: pathname, status: "network" });
      window.requestAnimationFrame(() => summaryRef.current?.focus());
    }
  }

  if (status === "success") {
    return (
      <div
        id="estimate-form"
        role="status"
        aria-live="polite"
        className="scroll-mt-24 border border-border bg-surface p-6 sm:p-8"
      >
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-success/10 text-success">
          <Check className="text-xl" />
        </span>
        <Heading className="mt-5 text-[1.65rem] leading-tight">Your request is with us.</Heading>
        <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted">
          {values.name ? `${values.name.split(" ")[0]}, your` : "Your"} details were saved and sent to the project team. We review
          requests in the order they arrive and only use the contact details you provided to respond.
        </p>
        <ul className="mt-5 space-y-2.5 text-sm text-text">
          <li className="flex gap-3">
            <Check className="mt-1 shrink-0 text-accent-strong" />
            <span>Keep any plans, budgets, or entity documents ready — we will ask only for what is relevant.</span>
          </li>
          <li className="flex gap-3">
            <Check className="mt-1 shrink-0 text-accent-strong" />
            <span>If you need to add detail, reply to the confirmation or call us directly.</span>
          </li>
        </ul>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a href={site.phone.href} className="btn btn-primary">
            <PhoneIcon />
            Call {site.phone.display}
          </a>
          <button
            type="button"
            className="btn btn-outline"
            onClick={() => {
              setStatus("idle");
              setValues(initialValues);
              setErrors({});
              window.requestAnimationFrame(() => document.getElementById("estimate-name")?.focus());
            }}
          >
            Send another request
          </button>
        </div>
      </div>
    );
  }

  const errorEntries = Object.entries(errors).filter(([, value]) => Boolean(value)) as [string, string][];

  return (
    <form
      id="estimate-form"
      onSubmit={onSubmit}
      noValidate
      className={`scroll-mt-24 ${compact ? "" : "border border-border bg-surface p-6 sm:p-8"}`}
      aria-labelledby="estimate-form-heading"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="eyebrow">Project estimate</p>
          <Heading id="estimate-form-heading" className="mt-3 text-[1.5rem] leading-tight sm:text-[1.75rem]">
            Tell us what you are working on
          </Heading>
        </div>
        <span className="hidden shrink-0 border border-border px-2 py-1 text-[0.625rem] font-semibold tracking-[0.12em] text-muted uppercase sm:inline">
          4 fields
        </span>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-muted">
        Name, phone, and a sentence or two. No uploads, no service dropdown, no financial documents at this stage.
      </p>

      {errorEntries.length > 0 ? (
        <div
          ref={summaryRef}
          tabIndex={-1}
          role="alert"
          className="mt-5 border border-error/40 bg-error/5 p-4"
        >
          <p className="text-sm font-semibold text-error">
            {errors.form ? "Your request was not sent" : "Check the highlighted fields"}
          </p>
          <ul className="mt-2 space-y-1 text-sm text-text">
            {errors.form ? <li>{errors.form}</li> : null}
            {errorEntries
              .filter(([key]) => key !== "form")
              .map(([key, message]) => (
                <li key={key}>
                  <a href={`#${fieldIds[key as FieldName]}`} className="link-inline">
                    {message}
                  </a>
                </li>
              ))}
          </ul>
          {status === "error" ? (
            <p className="mt-3 text-xs leading-relaxed text-muted">
              Nothing is lost on your end. Fix anything flagged or submit again to retry{attempts > 1 ? " — if this keeps happening, calling is faster" : ""}.
            </p>
          ) : null}
        </div>
      ) : null}

      <div className="mt-6 grid gap-5">
        <div>
          <label htmlFor={fieldIds.name} className="block text-sm font-semibold text-heading">
            Name <span className="text-error" aria-hidden="true">*</span>
            <span className="sr-only">(required)</span>
          </label>
          <input
            id={fieldIds.name}
            name="name"
            type="text"
            autoComplete="name"
            required
            aria-required="true"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "estimate-name-error" : undefined}
            className="field mt-2"
            value={values.name}
            onChange={update("name")}
            placeholder="First and last name"
          />
          {errors.name ? (
            <p id="estimate-name-error" className="field-error mt-1.5">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor={fieldIds.phone} className="block text-sm font-semibold text-heading">
            Phone number <span className="text-error" aria-hidden="true">*</span>
            <span className="sr-only">(required)</span>
          </label>
          <input
            id={fieldIds.phone}
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            required
            aria-required="true"
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "estimate-phone-error" : "estimate-phone-hint"}
            className="field mt-2"
            value={values.phone}
            onChange={update("phone")}
            placeholder="(555) 010-0199"
          />
          <p id="estimate-phone-hint" className="mt-1.5 text-xs text-muted">
            The fastest way to reach you. We do not share it.
          </p>
          {errors.phone ? (
            <p id="estimate-phone-error" className="field-error mt-1.5">
              {errors.phone}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor={fieldIds.email} className="block text-sm font-semibold text-heading">
            Email <span className="font-normal text-muted">(optional)</span>
          </label>
          <input
            id={fieldIds.email}
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "estimate-email-error" : "estimate-email-hint"}
            className="field mt-2"
            value={values.email}
            onChange={update("email")}
            placeholder="you@company.com"
          />
          <p id="estimate-email-hint" className="mt-1.5 text-xs text-muted">
            Only needed if you want a written follow-up.
          </p>
          {errors.email ? (
            <p id="estimate-email-error" className="field-error mt-1.5">
              {errors.email}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor={fieldIds.message} className="block text-sm font-semibold text-heading">
            How can we help you? <span className="text-error" aria-hidden="true">*</span>
            <span className="sr-only">(required)</span>
          </label>
          <textarea
            id={fieldIds.message}
            name="message"
            rows={4}
            required
            aria-required="true"
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "estimate-message-error" : "estimate-message-hint"}
            className="field mt-2 resize-y"
            value={values.message}
            onChange={update("message")}
            placeholder="Project address, what you are building or refinancing, and where you are in the process."
          />
          <div className="mt-1.5 flex items-start justify-between gap-4">
            <p id="estimate-message-hint" className="text-xs text-muted">
              Keep it short — a sentence or two is enough to start.
            </p>
            <p className={`shrink-0 text-xs ${values.message.length > 2000 ? "text-error" : "text-muted"}`} aria-hidden="true">
              {values.message.length}/2000
            </p>
          </div>
          {errors.message ? (
            <p id="estimate-message-error" className="field-error mt-1.5">
              {errors.message}
            </p>
          ) : null}
        </div>
      </div>

      {/* Hidden anti-spam field: not visible, not focusable, ignored by assistive tech. */}
      <div className="absolute h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="estimate-company-website">Company website</label>
        <input
          ref={honeypotRef}
          id="estimate-company-website"
          name="companyWebsite"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="mt-6">
        <button type="submit" className="btn btn-primary w-full" disabled={status === "submitting"}>
          {status === "submitting" ? (
            <>
              <span aria-hidden="true" className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-on-primary/40 border-t-on-primary" />
              Sending request…
            </>
          ) : (
            <>
              Request my estimate
              <Arrow />
            </>
          )}
        </button>
        <p className="mt-3 text-xs leading-relaxed text-muted">
          By sending this request you agree to be contacted about it. Do not include account numbers or sensitive financial documents.
          Read our <Link href="/privacy-policy" className="link-inline">privacy policy</Link>.
        </p>
        {status === "error" ? (
          <p className="mt-3 border border-error/30 bg-error/5 px-3 py-2 text-xs text-text">
            Tip: your message is kept on this page while you retry, so nothing needs to be re-typed.
          </p>
        ) : null}
      </div>
    </form>
  );
}
