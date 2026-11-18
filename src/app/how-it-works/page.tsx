import Link from "next/link";
import {
  Arrow,
  Checklist,
  CtaBand,
  Disclosure,
  PageHero,
  ProcessTimeline,
  Section,
  SectionHead,
} from "@/components/ui";
import { FaqAccordion } from "@/components/faq-accordion";
import { processSteps } from "@/content/site";
import { faqGroups } from "@/content/library";
import { breadcrumbSchema, pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "How it works — from first message to first draw",
  description:
    "The actual financing sequence: intake, fit call, indicative structure, underwriting, approval, closing, and draw administration. What we ask for and what happens next.",
  path: "/how-it-works",
});

const processFaqs = (faqGroups.find((group) => group.id === "process")?.items ?? []).concat(
  faqGroups.find((group) => group.id === "documents")?.items.slice(0, 3) ?? [],
);

const obstacles = [
  {
    title: "“I do not have final plans yet”",
    body: "That is fine for an initial conversation. We need enough scope to test order of magnitude. Final plans become a requirement before a term sheet, not before a first call.",
  },
  {
    title: "“My contractor is not selected”",
    body: "Common. Contractor experience, licensing, capacity, and insurance become part of underwriting. Until one is named, that is an open item with a deadline.",
  },
  {
    title: "“The site is under contract with a deadline”",
    body: "Say so at intake. Timelines that cannot be met are worse than a clear no, so we will tell you early whether the window is realistic.",
  },
  {
    title: "“This is a first ground-up project for me”",
    body: "Experience is assessed in context: team, contractor, market, and liquidity all matter. We will not pretend the risk does not exist, and we will not invent an eligibility threshold either.",
  },
  {
    title: "“I need to know the rate now”",
    body: "Pricing is only meaningful after the asset, sponsor, and structure are reviewed. What you can get early is a clear view of process, requirements, and whether the project is in appetite.",
  },
  {
    title: "“A previous lender declined it”",
    body: "Bring the reason. A declined file can be a fit problem, a documentation problem, or a real risk. Knowing which one changes the conversation.",
  },
];

export default function HowItWorksPage() {
  const schema = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "How it works", path: "/how-it-works" },
  ]);

  return (
    <>
      <PageHero
        eyebrow="Process"
        title="Remove the uncertainty before you send documents"
        intro="Financing is a sequence, not a black box. Here is what happens after the four-field form, what we will ask you for, and how decisions are communicated. No invented turnaround times."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "How it works" }]}
        image={{ src: "/images/documents.jpg", alt: "Project plans and figures reviewed at a desk" }}
        primary={
          <Link href="/contact#estimate-form" className="btn btn-primary">
            Book an estimate
            <Arrow />
          </Link>
        }
        secondary={
          <Link href="/services" className="btn btn-outline">
            Compare services
          </Link>
        }
        facts={[
          { label: "Starting form", value: "Four fields" },
          { label: "First contact", value: "Fit and coverage" },
          { label: "Outcome", value: "Written next steps" },
        ]}
      />

      <Section>
        <div className="container-std">
          <SectionHead
            eyebrow="Overview"
            title="Five stages, one accountable contact"
            body="The programme changes with the project. The sequence does not."
          />
          <div className="mt-10">
            <ProcessTimeline steps={processSteps.map((step) => ({ ...step }))} />
          </div>
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {processSteps.map((step, index) => (
              <article key={step.step} className="card p-6">
                <div className="flex items-baseline gap-3">
                  <span aria-hidden="true" className="font-display text-2xl text-accent">
                    {step.step}
                  </span>
                  <h3 className="text-[1.2rem] leading-snug">{step.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">{step.body}</p>
                <p className="mt-3 text-[0.6875rem] font-semibold tracking-[0.12em] text-heading uppercase">{step.detail}</p>
                {index === 4 ? (
                  <p className="mt-3 border-t border-border pt-3 text-xs leading-relaxed text-muted">
                    Draws continue through the build. Changes are reviewed against the approved budget and documented before work
                    proceeds.
                  </p>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="alt">
        <div className="container-std grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <SectionHead
              eyebrow="What to prepare"
              title="Bring these when the fit call happens"
              body="Not all of it. The first call only needs the project story and the numbers you already trust."
            />
            <div className="mt-6">
              <Disclosure>
                This is a preparation guide, not a published credit policy. Final requirements depend on the programme, asset, and
                market, and are confirmed in writing.
              </Disclosure>
            </div>
          </div>
          <Checklist
            groups={[
              {
                title: "Project basics",
                items: ["Address or market", "Asset type and unit or square footage count", "Stage: site, permits, vertical, stabilization", "Intended exit and timing"],
              },
              {
                title: "The numbers",
                items: ["Purchase price or basis", "Line-item budget or contractor estimate", "Sources and uses", "Contingency and reserves"],
              },
              {
                title: "The team",
                items: ["Sponsor and entity structure", "Comparable completed projects", "Contractor or general contractor", "Key consultants already engaged"],
              },
            ]}
          />
        </div>
      </Section>

      <Section>
        <div className="container-std grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <SectionHead
              eyebrow="After you submit"
              title="What actually happens next"
              body="No automated approval. No invented callback window. Your request is reviewed, and the next message tells you whether the project is in scope and what would be needed."
            />
            <ol className="mt-8 space-y-5">
              {[
                { title: "Your form is validated and stored", body: "Name, phone, optional email, and your description. Hidden anti-spam controls and server-side validation protect the destination." },
                { title: "A person reviews the request", body: "We check market coverage, asset type, and stage against appetite before asking for anything else." },
                { title: "You get a clear next step", body: "Either a fit call, a request for a small amount of additional information, or a direct no with the reason." },
                { title: "Diligence is issued in one pass", body: "If the project advances, the document request list is consolidated so you are not answering new requests every week." },
              ].map((item, index) => (
                <li key={item.title} className="flex gap-4">
                  <span
                    aria-hidden="true"
                    className="flex h-8 w-8 shrink-0 items-center justify-center border border-border-strong text-sm font-semibold text-accent-strong"
                  >
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-sans text-[0.95rem] font-semibold text-heading">{item.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">{item.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <SectionHead eyebrow="Decisions" title="How proposals and decisions work" />
            <div className="mt-8 space-y-4">
              {[
                { title: "Indicative structure", body: "A written outline of how the transaction could be sized and structured, with open items. It is not a commitment to fund." },
                { title: "Term sheet", body: "After core diligence, terms are documented: amount, pricing, fees, term, conditions, and required approvals. Confirm every assumption before signing." },
                { title: "Approval and closing", body: "Approval is subject to underwriting, appraisal, title, and credit review. Closing conditions are listed rather than implied." },
                { title: "No surprises language", body: "If something changes materially — scope, valuation, structure — we say so. Material changes are re-underwritten, not quietly absorbed." },
              ].map((item) => (
                <div key={item.title} className="border border-border bg-surface p-5">
                  <h3 className="font-sans text-sm font-semibold text-heading">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section tone="surface" className="border-y border-border">
        <div className="container-std">
          <SectionHead
            eyebrow="Common obstacles"
            title="What usually gets in the way"
            body="Most delays are predictable. Naming them early is cheaper than discovering them in diligence."
          />
          <div className="mt-10 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {obstacles.map((item) => (
              <div key={item.title} className="bg-surface p-6">
                <h3 className="text-[1.1rem] leading-snug">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="container-std grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <SectionHead eyebrow="Questions" title="Process questions" body="If yours is not here, ask it in the form." />
            <Link href="/faq" className="btn btn-outline mt-6">
              All questions
              <Arrow />
            </Link>
          </div>
          <FaqAccordion items={processFaqs} />
        </div>
      </Section>

      <CtaBand
        title="Start with what you already know."
        body="The address, the stage, and a sentence about the project is enough for us to tell you whether to keep going."
        secondaryLabel="Read the FAQs"
        secondaryHref="/faq"
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}
