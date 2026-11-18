import Image from "next/image";
import Link from "next/link";
import { HeroVideo } from "@/components/hero-video";
import {
  Arrow,
  Check,
  CtaBand,
  Eyebrow,
  IconList,
  ProcessTimeline,
  ScenarioCard,
  Section,
  SectionHead,
  ServiceCard,
} from "@/components/ui";
import { FaqAccordion } from "@/components/faq-accordion";
import { EstimateForm } from "@/components/estimate-form";
import { services } from "@/content/services";
import { audiences, differentiators, processSteps, roles, operatingPrinciples } from "@/content/site";
import { faqGroups, homepageFaqIds, scenarios } from "@/content/library";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Kestrel Ridge Capital — real estate capital for builders and developers",
  description:
    "Kestrel Ridge Capital finances ground-up construction, land, bridge, multifamily, and repositioning projects for builders, developers, and sponsors in select U.S. markets.",
  path: "/",
  suffixBrand: false,
});

const allFaqs = faqGroups.flatMap((group) => group.items.map((item, index) => ({ ...item, id: `${group.id}-${index}` })));
const homeFaqs = allFaqs.filter((item) => homepageFaqIds.includes(item.id));

export default function HomePage() {
  return (
    <>
      {/* 1 — HERO */}
      <section className="relative overflow-hidden border-b border-border bg-background">
        <div className="hairline-grid pointer-events-none absolute inset-y-0 left-0 hidden w-1/2 opacity-40 lg:block" aria-hidden="true" />
        <div className="container-wide relative grid gap-12 pt-10 pb-14 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-16 lg:pt-16 lg:pb-20">
          <div className="max-w-2xl">
            <Eyebrow>Private real estate capital · Select U.S. markets</Eyebrow>
            <h1 className="display-hero mt-6 text-heading">
              Capital that keeps
              <br />
              pace with the <em className="font-display italic text-accent-strong">build</em>.
            </h1>
            <p className="lead mt-6 max-w-xl">
              Kestrel Ridge structures ground-up, land, bridge, and repositioning debt for builders and developers who need a
              decisive answer — from people who read the plan, not just the spreadsheet.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact#estimate-form" className="btn btn-primary">
                Book an estimate
                <Arrow />
              </Link>
              <Link href="/services" className="btn btn-outline">
                Explore services
              </Link>
            </div>
            <div className="mt-8 border-t border-border pt-5">
              <ul className="flex flex-wrap gap-x-6 gap-y-2 text-[0.8125rem] font-medium text-text">
                <li className="flex items-center gap-2">
                  <Check className="text-accent-strong" /> One accountable contact
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-accent-strong" /> Draws tied to inspections
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-accent-strong" /> Terms set per transaction
                </li>
              </ul>
            </div>
          </div>

          <div>
            <HeroVideo />
            <div className="mt-4 flex flex-col gap-3 border border-border bg-surface px-4 py-3.5 sm:flex-row sm:items-center sm:justify-between sm:px-5">
              <p className="text-sm leading-snug text-heading">
                <span className="mr-2 text-[0.625rem] font-semibold tracking-[0.14em] text-muted uppercase">Starting point</span>
                Four fields. No uploads. A fit conversation, not a sales call.
              </p>
              <Link
                href="#estimate-form"
                className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-accent-strong hover:text-heading"
              >
                Go to the form <Arrow />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2 — PROOF STRIP */}
      <section aria-label="How we operate" className="border-b border-border bg-primary text-on-primary">
        <div className="container-wide py-9 lg:py-12">
          <dl className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { value: "Project-level", label: "underwriting", detail: "Every request reviewed against the specific build, basis, and exit." },
              { value: "Direct", label: "decision access", detail: "You speak with the people reviewing the file, not a queue." },
              { value: "Draw-based", label: "funding", detail: "Released against inspected progress and your contractor's billing cycle." },
              { value: "Select", label: "U.S. markets", detail: "Coverage confirmed at intake before a full package is assembled." },
            ].map((item) => (
              <div key={item.label} className="border-l border-on-primary/20 pl-4 first:border-l-0 first:pl-0 sm:first:border-l sm:first:pl-4 lg:[&:first-child]:border-l-0 lg:[&:first-child]:pl-0">
                <dd className="font-display text-[1.6rem] leading-none text-on-primary">{item.value}</dd>
                <dt className="mt-1.5 text-[0.6875rem] font-semibold tracking-[0.16em] text-accent-soft uppercase">{item.label}</dt>
                <p className="mt-2 text-[0.8125rem] leading-relaxed text-on-primary/70">{item.detail}</p>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* 3 — SERVICES */}
      <Section id="services">
        <div className="container-std">
          <SectionHead
            eyebrow="Services"
            title={<>Solutions built around how you operate</>}
            body="Five financing structures mapped to the stage of the project. Each has a defined purpose, a real fit conversation, and its own detail page — no homepage-only anchors."
            cta={
              <Link href="/services" className="btn btn-outline">
                Compare all services
                <Arrow />
              </Link>
            }
            align="split"
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard key={service.slug} service={service} index={index} />
            ))}
            <article className="flex h-full flex-col justify-between border border-primary/25 bg-primary p-6 text-on-primary sm:p-7">
              <div>
                <p className="text-[0.6875rem] font-semibold tracking-[0.14em] text-accent-soft uppercase">Unsure where you fit?</p>
                <h3 className="mt-3 text-[1.4rem] leading-tight text-on-primary">Two questions narrow it down.</h3>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-on-primary/75">
                  Use the service chooser, or send the project and we will point you to the right structure — including when the
                  answer is a different lender.
                </p>
              </div>
              <div className="mt-6 flex flex-col gap-2">
                <Link href="/services#chooser" className="btn btn-invert">
                  Help me choose
                  <Arrow />
                </Link>
                <Link href="/how-it-works" className="text-sm font-medium text-on-primary/80 underline underline-offset-4 hover:text-white">
                  See the process first
                </Link>
              </div>
            </article>
          </div>
        </div>
      </Section>

      {/* 4 — WHY US */}
      <Section tone="alt">
        <div className="container-std grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-start lg:gap-16">
          <div className="lg:sticky lg:top-28">
            <SectionHead
              eyebrow="Why Kestrel Ridge"
              title={<>A lender that can explain its own decision</>}
              body="Private capital should feel accountable. Our operating standard is simple: clear reasoning, documented expectations, and a named person who stays with the file."
            />
            <div className="relative mt-8 aspect-[16/11] overflow-hidden bg-background lg:aspect-[4/3]">
              <Image
                src="/images/documents.jpg"
                alt="Plans and project figures being reviewed at a desk"
                fill
                loading="lazy"
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
            <IconList
              items={[
                "Written indicative structure before a full package",
                "One consolidated diligence request list",
                "Draw administration handled by the same team",
              ]}
            />
          </div>
          <ul className="divide-y divide-border border-y border-border">
            {differentiators.map((item, index) => (
              <li key={item.title} className="grid gap-3 py-6 sm:grid-cols-[3rem_1fr] sm:gap-5">
                <span aria-hidden="true" className="font-display text-2xl leading-none text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-[1.3rem] leading-snug">{item.title}</h3>
                  <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">{item.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* 5 — PROCESS */}
      <Section>
        <div className="container-std">
          <SectionHead
            eyebrow="How it works"
            title="From first message to first draw"
            body="No package required to start, and no invented turnaround promises. Here is the actual sequence — and what we need from you at each stage."
            cta={
              <Link href="/how-it-works" className="btn btn-outline">
                Full process detail
                <Arrow />
              </Link>
            }
            align="split"
          />
          <div className="mt-10">
            <ProcessTimeline steps={processSteps.map((step) => ({ ...step }))} />
          </div>
          <p className="mt-5 text-xs leading-relaxed text-muted">
            Timing depends on documentation quality, third-party reports, and market conditions. Every stage is confirmed in writing
            after the fit call.
          </p>
        </div>
      </Section>

      {/* 6 — SCENARIO LIBRARY */}
      <Section tone="alt">
        <div className="container-std">
          <SectionHead
            eyebrow="Scenario library"
            title="How the review actually plays out"
            body="Illustrative project profiles that show the questions we ask and the structures we test. These are working examples, not client testimonials — and they contain no transaction values or performance claims."
            cta={
              <Link href="/case-studies" className="btn btn-outline">
                All project profiles
                <Arrow />
              </Link>
            }
            align="split"
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {scenarios.slice(0, 3).map((scenario) => (
              <ScenarioCard key={scenario.slug} scenario={scenario} />
            ))}
          </div>
        </div>
      </Section>

      {/* 7 — AUDIENCES */}
      <Section>
        <div className="container-std">
          <SectionHead
            eyebrow="Who we work with"
            title="Find your starting point"
            body="The right structure depends on where you sit in the project, not just the asset type."
          />
          <div className="mt-10 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
            {audiences.map((audience) => (
              <Link
                key={audience.title}
                href={audience.href}
                className="group flex flex-col justify-between bg-surface p-6 transition-colors hover:bg-background-alt"
              >
                <div>
                  <h3 className="text-[1.2rem] leading-snug">{audience.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted">{audience.body}</p>
                </div>
                <span className="mt-6 inline-flex items-center gap-2 text-[0.8125rem] font-semibold text-accent-strong">
                  {audience.cta}
                  <Arrow className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      {/* 8 — TRUST / PEOPLE */}
      <Section tone="surface" className="border-y border-border">
        <div className="container-std grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:gap-16">
          <div>
            <SectionHead
              eyebrow="How we operate"
              title="Four standards we will not trade away"
              body="No testimonials or invented credentials here. What we can describe is how a file is handled from intake to final draw."
            />
            <div className="mt-9 grid gap-6 sm:grid-cols-2">
              {operatingPrinciples.map((item) => (
                <div key={item.title} className="border-t border-border pt-4">
                  <h3 className="text-[1.1rem] leading-snug">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 grid gap-4 border border-dashed border-border-strong bg-background p-5 sm:grid-cols-3">
              {roles.map((role) => (
                <div key={role.title}>
                  <p className="text-[0.6875rem] font-semibold tracking-[0.12em] text-heading uppercase">{role.title}</p>
                  <p className="mt-2 text-xs leading-relaxed text-muted">{role.body}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs leading-relaxed text-muted">
              Verified names, biographies, and headshots are pending. We do not publish team profiles we cannot substantiate.{" "}
              <Link href="/about" className="link-inline">
                More on how we work
              </Link>
              .
            </p>
          </div>
          <div className="relative min-h-[18rem]">
            <div className="relative aspect-[4/4.6] overflow-hidden bg-background-alt">
              <Image
                src="/images/advisory.jpg"
                alt="An architect drawing layouts at a drafting desk"
                fill
                loading="lazy"
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="card absolute -bottom-5 -left-5 max-w-[15rem] p-4">
              <p className="text-[0.625rem] font-semibold tracking-[0.14em] text-muted uppercase">Selection criteria</p>
              <p className="mt-1.5 text-[0.8125rem] leading-relaxed text-heading">
                Basis, budget, sponsorship, contractor, entitlements, exit.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* 9 — FAQ PREVIEW */}
      <Section>
        <div className="container-std grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <SectionHead
              eyebrow="Questions"
              title="Before you send the first message"
              body="Straight answers about scope, process, documents, and why we do not publish rates."
            />
            <Link href="/faq" className="btn btn-outline mt-6">
              All questions &amp; answers
              <Arrow />
            </Link>
          </div>
          <FaqAccordion items={homeFaqs} />
        </div>
      </Section>

      {/* 10 — CONVERSION */}
      <section className="border-t border-border bg-background-alt" id="estimate">
        <div className="container-std grid gap-10 py-16 sm:py-20 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-16 lg:py-24">
          <div className="lg:sticky lg:top-28">
            <Eyebrow>Start here</Eyebrow>
            <h2 className="display-section mt-4">Tell us what you are working on.</h2>
            <p className="mt-5 max-w-lg text-[1.0625rem] leading-relaxed text-muted">
              Four fields. We use them to decide whether the project fits our appetite and who should call you. If it does not fit, we
              will tell you that instead of leaving you waiting.
            </p>
            <ul className="mt-7 space-y-3">
              {[
                "No documents requested at this stage",
                "No service dropdown or budget questionnaire",
                "Server-side validation and secure storage",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm text-text">
                  <Check className="mt-1 shrink-0 text-accent-strong" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 border-t border-border pt-5">
              <p className="text-[0.6875rem] font-semibold tracking-[0.14em] text-muted uppercase">Prefer to talk?</p>
              <Link href="/contact" className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent-strong">
                Contact options and expectations
                <Arrow />
              </Link>
            </div>
          </div>
          <EstimateForm />
        </div>
      </section>

      <CtaBand
        title="Know your options before you commit."
        body="A short conversation should tell you whether this is worth pursuing — and what would need to be true for it to close."
        primaryLabel="Book an estimate"
        secondaryLabel="Compare services"
        secondaryHref="/services"
        note="Program descriptions are illustrative and not an offer to lend. Terms are set per transaction."
      />
    </>
  );
}
