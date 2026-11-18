import Link from "next/link";
import { Arrow, CtaBand, Disclosure, Eyebrow, PageHero, ScenarioCard, Section, SectionHead } from "@/components/ui";
import { services } from "@/content/services";
import { scenarios } from "@/content/library";
import { breadcrumbSchema, pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Scenario library — illustrative project profiles",
  description:
    "Illustrative financing scenarios by project stage: infill assembly, adaptive reuse, land entitlement, and bridge to stabilization. No client claims or transaction values.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  const schema = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Scenario library", path: "/case-studies" },
  ]);

  return (
    <>
      <PageHero
        eyebrow="Scenario library"
        title="Proof of thinking, not a wall of logos"
        intro="These are illustrative project profiles written to show how we evaluate risk at each stage. They are not client testimonials, and they deliberately contain no transaction values, names, or performance claims."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Scenario library" }]}
        image={{ src: "/images/facade.jpg", alt: "Facade detail of a modern residential building" }}
        primary={
          <Link href="/contact#estimate-form" className="btn btn-primary">
            Discuss your project
            <Arrow />
          </Link>
        }
        secondary={
          <Link href="/services" className="btn btn-outline">
            Compare services
          </Link>
        }
        facts={[
          { label: "Profiles", value: "Four scenarios" },
          { label: "Status", value: "Illustrative only" },
          { label: "Values", value: "None published" },
        ]}
      />

      <Section>
        <div className="container-std">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end lg:gap-16">
            <SectionHead
              eyebrow="How to read these"
              title="The situation, the constraints, the structure"
              body="Each profile follows the same logic: what the sponsor had, what made it difficult, how the structure responded, and what the lesson was. That is more useful than a logo strip."
            />
            <div className="border border-border bg-background-alt p-6">
              <p className="text-[0.6875rem] font-semibold tracking-[0.14em] text-accent-strong uppercase">Important</p>
              <p className="mt-3 text-sm leading-relaxed text-text">
                Kestrel Ridge has not supplied verified transactions, clients, or completed-project data for this build. Rather than
                inventing them, the library uses clearly labelled illustrative profiles. Verified case studies will replace these before
                any claim of real-world execution is made.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {scenarios.map((scenario) => (
              <ScenarioCard key={scenario.slug} scenario={scenario} />
            ))}
          </div>

          <div className="mt-10">
            <Disclosure>
              Illustrative profiles describe a plausible sequence of underwriting decisions. They are not evidence of completed
              transactions, returns, or outcomes, and must not be presented as client testimonials.
            </Disclosure>
          </div>
        </div>
      </Section>

      <Section tone="alt">
        <div className="container-std">
          <SectionHead
            eyebrow="Browse by service"
            title="Every profile maps to a financing structure"
            body="Start with the structure if you already know what you need."
          />
          <div className="mt-9 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
            {services.map((service) => {
              const count = scenarios.filter((scenario) => scenario.serviceSlug === service.slug).length;
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group flex flex-col justify-between bg-surface p-5 transition-colors hover:bg-background"
                >
                  <div>
                    <Eyebrow>{service.category}</Eyebrow>
                    <h3 className="mt-3 text-[1.1rem] leading-snug">{service.navLabel}</h3>
                  </div>
                  <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-accent-strong">
                    {count} {count === 1 ? "profile" : "profiles"}
                    <Arrow className="transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </Section>

      <CtaBand
        title="Bring the real project. We will ask the same questions."
        body="Share the address, the stage, and what you are trying to accomplish. The fit conversation covers basis, budget, sponsorship, and exit."
        secondaryLabel="How it works"
        secondaryHref="/how-it-works"
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}
