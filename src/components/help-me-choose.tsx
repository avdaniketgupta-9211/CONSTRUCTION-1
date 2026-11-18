"use client";

import Link from "next/link";
import { useState } from "react";
import { services } from "@/content/services";
import { Arrow } from "@/components/ui";
import { track } from "@/lib/analytics";

type Score = Record<string, number>;

const stageOptions = [
  { value: "land", label: "We control or are buying a site; approvals or site work remain", scores: { "land-acquisition": 3, "multifamily-development": 1 } },
  { value: "build", label: "Plans are ready and vertical construction has not started", scores: { "ground-up-construction": 3, "multifamily-development": 1 } },
  { value: "multi", label: "It is a multi-unit or mixed-use development from site through stabilization", scores: { "multifamily-development": 4 } },
  { value: "existing", label: "The building exists and needs scoped work", scores: { "renovation-capital": 3, "bridge-financing": 1 } },
  { value: "stabilize", label: "The asset is complete but needs time to lease up or stabilize", scores: { "bridge-financing": 3 } },
] as const;

const capitalOptions = [
  { value: "acquisition", label: "Acquire or carry the land", scores: { "land-acquisition": 3 } },
  { value: "construction", label: "Fund the vertical build", scores: { "ground-up-construction": 3, "multifamily-development": 1 } },
  { value: "improve", label: "Renovate or reposition the property", scores: { "renovation-capital": 3 } },
  { value: "bridge", label: "Refinance, recapitalize, or bridge to an exit", scores: { "bridge-financing": 3 } },
] as const;

export function HelpMeChoose() {
  const [stage, setStage] = useState<string>("");
  const [capital, setCapital] = useState<string>("");

  const scores: Score = {};
  const add = (option?: { scores: Record<string, number> }) => {
    if (!option) return;
    for (const [slug, weight] of Object.entries(option.scores)) {
      scores[slug] = (scores[slug] ?? 0) + weight;
    }
  };
  add(stageOptions.find((option) => option.value === stage));
  add(capitalOptions.find((option) => option.value === capital));

  const complete = Boolean(stage) && Boolean(capital);
  const ranked = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  const bestSlug = ranked[0]?.[0];
  const best = services.find((service) => service.slug === bestSlug);
  const runnerUp = services.find((service) => service.slug === ranked[1]?.[0]);

  return (
    <div id="chooser" className="card scroll-mt-24 overflow-hidden">
      <div className="border-b border-border bg-primary p-6 text-on-primary sm:p-8">
        <p className="eyebrow eyebrow-invert">Decision support</p>
        <h2 className="mt-3 font-display text-[1.75rem] leading-tight text-on-primary sm:text-[2rem]">
          Not sure which service applies?
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-on-primary/75">
          Two questions. This narrows the starting point — it is not an underwriting decision, and it does not replace a fit call.
        </p>
      </div>
      <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-2">
        <fieldset>
          <legend className="text-sm font-semibold text-heading">
            1. Where is the project today? <span className="text-error" aria-hidden="true">*</span>
          </legend>
          <div className="mt-4 space-y-2">
            {stageOptions.map((option) => (
              <label
                key={option.value}
                className={`flex cursor-pointer gap-3 border p-3.5 text-sm leading-snug transition-colors ${
                  stage === option.value
                    ? "border-primary bg-primary/[0.04] text-heading"
                    : "border-border bg-surface text-text hover:border-border-strong"
                }`}
              >
                <input
                  type="radio"
                  name="stage"
                  value={option.value}
                  checked={stage === option.value}
                  onChange={() => {
                    setStage(option.value);
                    track("service_chooser_answer", { question: "stage", value: option.value });
                  }}
                  className="mt-0.5 h-4 w-4 shrink-0 accent-primary"
                />
                <span>{option.label}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <div>
          <fieldset>
            <legend className="text-sm font-semibold text-heading">
              2. What does the capital mainly need to do? <span className="text-error" aria-hidden="true">*</span>
            </legend>
            <div className="mt-4 space-y-2">
              {capitalOptions.map((option) => (
                <label
                  key={option.value}
                  className={`flex cursor-pointer gap-3 border p-3.5 text-sm leading-snug transition-colors ${
                    capital === option.value
                      ? "border-primary bg-primary/[0.04] text-heading"
                      : "border-border bg-surface text-text hover:border-border-strong"
                  }`}
                >
                  <input
                    type="radio"
                    name="capital"
                    value={option.value}
                    checked={capital === option.value}
                    onChange={() => {
                      setCapital(option.value);
                      track("service_chooser_answer", { question: "capital", value: option.value });
                    }}
                    className="mt-0.5 h-4 w-4 shrink-0 accent-primary"
                  />
                  <span>{option.label}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <div aria-live="polite" className="mt-5">
            {complete && best ? (
              <div className="border border-accent/40 bg-background-alt p-5">
                <p className="text-[0.6875rem] font-semibold tracking-[0.14em] text-accent-strong uppercase">Suggested starting point</p>
                <p className="mt-2 font-display text-[1.35rem] leading-tight text-heading">{best.name}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{best.tagline}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Link href={`/services/${best.slug}`} className="btn btn-primary px-4 text-[0.8125rem]">
                    View this service
                    <Arrow />
                  </Link>
                  <Link href="/contact#estimate-form" className="btn btn-outline px-4 text-[0.8125rem]">
                    Book an estimate
                  </Link>
                </div>
                {runnerUp ? (
                  <p className="mt-3 text-xs leading-relaxed text-muted">
                    Close call?{" "}
                    <Link href={`/services/${runnerUp.slug}`} className="link-inline">
                      {runnerUp.navLabel}
                    </Link>{" "}
                    may also apply if the project is further along.
                  </p>
                ) : null}
              </div>
            ) : (
              <p className="border border-dashed border-border-strong bg-surface p-5 text-sm leading-relaxed text-muted">
                Select one answer in each column to see a suggested starting point. You can always change it — the fit call
                confirms the right instrument.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
