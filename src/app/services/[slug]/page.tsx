import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  Arrow,
  Check,
  Checklist,
  CtaBand,
  Disclosure,
  Eyebrow,
  KeyDetails,
  PageHero,
  ProcessTimeline,
  RelatedServices,
  ScenarioCard,
  Section,
  SectionHead,
} from "@/components/ui";
import { FaqAccordion } from "@/components/faq-accordion";
import { services, serviceBySlug } from "@/content/services";
import { differingDetail } from "@/content/service-copy";
import { scenarios } from "@/content/library";
import { breadcrumbSchema, faqSchema, pageMeta, serviceSchema } from "@/lib/seo";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  if (!service) return { title: "Service not found" };
  return pageMeta({
    title: service.seo.title,
    description: service.seo.description,
    path: `/services/${service.slug}`,
    image: service.image.src,
  });
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  if (!service) notFound();

  const relatedScenarios = scenarios.filter((scenario) => service.scenarioSlugs.includes(scenario.slug));
  const notFit = differingDetail(service.slug);

  const schemas = [
    serviceSchema({ name: service.name, description: service.seo.description, path: `/services/${service.slug}` }),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" },
      { name: service.navLabel, path: `/services/${service.slug}` },
    ]),
    faqSchema(service.faqs),
  ];

  return (
    <>
      {/* A — Service hero */}
      <PageHero
        eyebrow={service.category}
        title={service.heroTitle}
        intro={service.heroIntro}
        image={service.image}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: service.navLabel }]}
        primary={
          <Link href="/contact#estimate-form" className="btn btn-primary">
            Book an estimate
            <Arrow />
          </Link>
        }
        secondary={
          <Link href="#service-details" className="btn btn-outline">
            Key details
          </Link>
        }
        facts={[
          { label: "Program", value: service.navLabel },
          { label: "Ideal fit", value: service.bestFor },
          { label: "Terms", value: "Set per transaction" },
        ]}
      />

      {/* B + C — Key details and who this is for */}
      <Section id="service-details">
        <div className="container-std grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <div>
            <SectionHead
              eyebrow="Key service details"
              title="What this program does — and does not do"
              body={service.summary}
            />
            <div className="mt-8">
              <KeyDetails items={service.keyDetails} title={`${service.navLabel} at a glance`} />
            </div>
            <div className="mt-5">
              <Disclosure>
                Rates, leverage, minimums, fees, and timing are set per transaction and are not published. Nothing on this page is an
                offer to lend or a commitment to fund.
              </Disclosure>
            </div>
          </div>
          <div>
            <SectionHead eyebrow="Who this is for" title="You will recognise the situation" as="h2" />
            <ul className="mt-8 divide-y divide-border border-y border-border">
              {service.forWhom.map((block) => (
                <li key={block.title} className="py-5">
                  <h3 className="text-[1.15rem] leading-snug">{block.title}</h3>
                  <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">{block.body}</p>
                </li>
              ))}
            </ul>
            <div className="mt-6 border border-border bg-background-alt p-5">
              <p className="text-[0.6875rem] font-semibold tracking-[0.14em] text-muted uppercase">Not the right stage?</p>
              <p className="mt-2 text-sm leading-relaxed text-text">{notFit}</p>
              <Link href="/services#chooser" className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-accent-strong hover:text-heading">
                Use the service chooser <Arrow />
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* D — What it can support */}
      <Section tone="alt">
        <div className="container-std">
          <SectionHead
            eyebrow="What it can support"
            title="Project situations this structure is built for"
            body="If your scenario is not listed, that is a question for the fit call — not an automatic no."
          />
          <div className="mt-10 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {service.supports.map((block, index) => (
              <div key={block.title} className="bg-surface p-6">
                <span aria-hidden="true" className="font-display text-xl text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-[1.15rem] leading-snug">{block.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{block.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* E — Why this service */}
      <Section>
        <div className="container-std grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <SectionHead eyebrow="Why this structure" title={service.whyTitle} body={service.whyBody} />
            <div className="mt-7 flex flex-col gap-2">
              <Link href="/contact#estimate-form" className="btn btn-primary w-fit">
                Discuss this project
                <Arrow />
              </Link>
              <Link href="/how-it-works" className="text-sm font-medium text-accent-strong underline underline-offset-4 hover:text-heading">
                See what diligence involves
              </Link>
            </div>
          </div>
          <ul className="space-y-5">
            {service.why.map((reason) => (
              <li key={reason.title} className="border-l-2 border-accent bg-surface p-5">
                <h3 className="font-sans text-[1rem] font-semibold text-heading">{reason.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{reason.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* F — Process */}
      <Section tone="dark">
        <div className="container-std">
          <SectionHead
            eyebrow="Process"
            title="How this financing runs, start to finish"
            body="The steps below are the standard sequence. Specific documents and third-party reports are confirmed after the fit call."
            invert
          />
          <div className="mt-10">
            <ProcessTimeline steps={service.process} invert />
          </div>
          <p className="mt-5 text-xs text-on-primary/60">
            No turnaround times are published. Sequence and open items are documented in writing so progress is visible.
          </p>
        </div>
      </Section>

      {/* G — Qualification */}
      <Section>
        <div className="container-std">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <SectionHead
              eyebrow="Requirements"
              title="What to prepare before a term sheet"
              body="This is a preparation checklist, not a published credit policy. Requirements are confirmed per transaction, and open items are named rather than hidden."
            />
            <div>
              <Checklist groups={service.qualifications} />
              <div className="mt-8 border border-border bg-background-alt p-5">
                <p className="flex items-start gap-3 text-sm leading-relaxed text-text">
                  <Check className="mt-1 shrink-0 text-accent-strong" />
                  <span>
                    Missing something on this list? Say so in the form. Plans, contractor selection, or entity structure are often
                    works in progress, and that is a conversation — not a disqualification.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* H — Relevant scenarios */}
      {relatedScenarios.length > 0 ? (
        <Section tone="alt">
          <div className="container-std">
            <SectionHead
              eyebrow="Scenario library"
              title="Relevant project profiles"
              body="Illustrative profiles showing how this type of request is reviewed. They are not client stories and contain no performance claims."
              cta={
                <Link href="/case-studies" className="btn btn-outline">
                  All profiles
                  <Arrow />
                </Link>
              }
              align="split"
            />
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {relatedScenarios.map((scenario) => (
                <ScenarioCard key={scenario.slug} scenario={scenario} />
              ))}
            </div>
          </div>
        </Section>
      ) : null}

      {/* I — Why Kestrel Ridge, service-specific */}
      <Section tone="surface" className="border-y border-border">
        <div className="container-std grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <Eyebrow>Working with us</Eyebrow>
            <h2 className="display-section mt-4">Execution detail is the product.</h2>
            <p className="mt-5 measure text-[1.0625rem] leading-relaxed text-muted">
              {service.name} is not just a rate and a term sheet. The difference is in how the budget is tested, how draws are
              administered, and whether anyone answers the phone when the scope changes.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              { title: "Project-level underwriting", body: "Basis, budget, sponsorship, contractor, and exit reviewed as one picture." },
              { title: "Documented expectations", body: "Open items and responsibility are written down before closing." },
              { title: "One accountable contact", body: "The person who took your first call remains on the file through draws." },
              { title: "Inspection-based funding", body: "Release of funds is tied to verified progress, not a schedule request." },
            ].map((item) => (
              <div key={item.title} className="border-t border-border pt-4">
                <h3 className="font-sans text-sm font-semibold text-heading">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* J — Service FAQ */}
      <Section>
        <div className="container-std grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <SectionHead
              eyebrow="Questions"
              title={`${service.navLabel}: common questions`}
              body="Short answers to the questions that usually determine fit."
            />
            <div className="mt-6 border border-border bg-surface p-5">
              <p className="text-[0.6875rem] font-semibold tracking-[0.14em] text-muted uppercase">Still deciding?</p>
              <p className="mt-2 text-sm leading-relaxed text-text">
                Send the address and the stage. A fit conversation is faster than reading twelve more pages.
              </p>
              <Link href="/contact#estimate-form" className="btn btn-primary mt-4 px-4 text-[0.8125rem]">
                Book an estimate
                <Arrow />
              </Link>
            </div>
          </div>
          <FaqAccordion items={service.faqs} />
        </div>
      </Section>

      {/* K — Related services */}
      <Section tone="alt">
        <div className="container-std">
          <SectionHead
            eyebrow="Related services"
            title="Not sure this is the right fit?"
            body="Adjacent structures handle adjacent stages. Compare them before you send a package."
          />
          <div className="mt-9">
            <RelatedServices slugs={service.related} current={service.slug} />
          </div>
        </div>
      </Section>

      {/* L — Conversion */}
      <CtaBand
        title={service.ctaTitle}
        body={service.ctaBody}
        primaryLabel="Book an estimate"
        secondaryLabel="How it works"
        note="Four fields only. Server-side validation and secure storage; no documents at this stage."
      />

      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
    </>
  );
}
