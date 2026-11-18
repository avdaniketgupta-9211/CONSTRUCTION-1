const memory: Record<string, unknown>[] = [];

type TrackPayload = Record<string, string | number | boolean | undefined>;

/**
 * Lightweight, privacy-safe event tracking.
 * - No cookies, no third-party script, no form contents.
 * - Pushes to window.dataLayer when an analytics container is later approved.
 * - Also dispatches a DOM event so a future listener can be wired without changes here.
 */
export function track(event: string, payload: TrackPayload = {}) {
  if (typeof window === "undefined") return;

  const detail = { event, ...payload, timestamp: Date.now() };

  try {
    const w = window as typeof window & { dataLayer?: unknown[] };
    if (Array.isArray(w.dataLayer)) {
      w.dataLayer.push(detail);
    } else {
      memory.push(detail);
      if (memory.length > 40) memory.shift();
    }
    window.dispatchEvent(new CustomEvent("krc:track", { detail }));
  } catch {
    // Tracking must never interrupt a conversion flow.
  }
}
