import Link from "next/link";
import {
  Arrow,
  Check,
  CtaBand,
  Disclosure,
  PageHero,
  ProcessTimeline,
  Section,
  SectionHead,
  ServiceCard,
} from "@/components/ui";
import { FaqAccordion } from "@/components/faq-accordion";
import { HelpMeChoose } from "@/components/help-me-choose";
import { services } from "@/content/services";
import { differentiators, processSteps } from "@/content/site";
import { faqGroups } from "@/content/library";
import { breadcrumbSchema, pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Services — financing for each stage of a project",
  description:
    "Compare ground-up construction, land and acquisition, bridge, multifamily and mixed-use, and renovation financing. Fit guidance, requirements, and a service chooser.",
  path: "/services",
});

const servicesFaq = faqGroups.find((group) => group.id === "services")?.items ?? [];

const schema = breadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
]);

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Solutions designed around your next move"
        intro="Capital is not one product. A site under contract, a permitted build, a building that needs time, and a property that needs work all carry different risk. Start with the stage you are in, then confirm fit on a call."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
        image={{ src: "/images/process.jpg", alt: "Aerial view of an active residential construction site" }}
        primary={
          <Link href="/contact#estimate-form" className="btn btn-primary">
            Book an estimate
            <Arrow />
          </Link>
        }
        secondary={
          <Link href="#chooser" className="btn btn-outline">
            Help me choose
          </Link>
        }
        facts={[
          { label: "Structures", value: "Five financing programs" },
          { label: "Approach", value: "Underwritten per project" },
          { label: "Terms", value: "Set per transaction" },
        ]}
      />

      <Section>
        <div className="container-std">
          <SectionHead
            eyebrow="Compare"
            title="Which structure fits the work?"
            body="A quick comparison. Every service links to a dedicated page with its own requirements, process, and questions."
          />

          <div className="mt-10 hidden overflow-hidden border border-border md:block">
            <table className="w-full border-collapse text-left">
              <caption className="sr-only">Comparison of Kestrel Ridge financing services</caption>
              <thead className="bg-primary text-on-primary">
                <tr>
                  <th scope="col" className="px-5 py-4 text-[0.6875rem] font-semibold tracking-[0.14em] uppercase">Service</th>
                  <th scope="col" className="px-5 py-4 text-[0.6875rem] font-semibold tracking-[0.14em] uppercase">Best for</th>
                  <th scope="col" className="px-5 py-4 text-[0.6875rem] font-semibold tracking-[0.14em] uppercase">Typical situation</th>
                  <th scope="col" className="px-5 py-4 text-[0.6875rem] font-semibold tracking-[0.14em] uppercase">Key advantage</th>
                  <th scope="col" className="px-5 py-4 text-[0.6875rem] font-semibold tracking-[0.14em] uppercase">Detail</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-surface">
                {services.map((service) => (
                  <tr key={service.slug} className="align-top transition-colors hover:bg-background-alt/60">
                    <th scope="row" className="px-5 py-5 text-sm font-semibold text-heading">
                      <Link href={`/services/${service.slug}`} className="hover:text-accent-strong">
                        {service.navLabel}
                      </Link>
                      <span className="mt-1 block text-[0.6875rem] font-medium tracking-[0.08em] text-muted uppercase">{service.category}</span>
                    </th>
                    <td className="px-5 py-5 text-sm leading-relaxed text-muted">{service.bestFor}</td>
                    <td className="px-5 py-5 text-sm leading-relaxed text-muted">{service.tagline}</td>
                    <td className="px-5 py-5 text-sm leading-relaxed text-muted">{service.supports[0]?.body}</td>
                    <td className="px-5 py-5">
                      <Link
                        href={`/services/${service.slug}`}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-strong hover:text-heading"
                      >
                        View
                        <Arrow />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-10 grid gap-5 md:hidden">
            {services.map((service, index) => (
              <ServiceCard key={service.slug} service={service} index={index} />
            ))}
          </div>

          <div className="mt-8">
            <Disclosure>
              Numeric terms — rates, leverage, minimums, fees, and timing — are not published because they are only meaningful when
              underwritten against a specific project. Anything stated on a service page is descriptive, not an offer to lend.
            </Disclosure>
          </div>
        </div>
      </Section>

      <Section tone="alt" id="chooser-section">
        <div className="container-std">
          <HelpMeChoose />
        </div>
      </Section>

      <Section>
        <div className="container-std">
          <SectionHead
            eyebrow="Process overview"
            title="The same five steps, whichever structure you choose"
            body="Program-specific nuances appear on each service page. This is the shape of the relationship."
            cta={
              <Link href="/how-it-works" className="btn btn-outline">
                Detailed walkthrough
                <Arrow />
              </Link>
            }
            align="split"
          />
          <div className="mt-10">
            <ProcessTimeline steps={processSteps.map((step) => ({ ...step }))} />
          </div>
        </div>
      </Section>

      <Section tone="surface" className="border-y border-border">
        <div className="container-std grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <SectionHead
            eyebrow="Why work with us"
            title="What stays consistent across every program"
            body="The product changes with the project. The operating standard does not."
          />
          <ul className="grid gap-5 sm:grid-cols-2">
            {differentiators.map((item) => (
              <li key={item.title} className="border-l-2 border-accent pl-4">
                <h3 className="font-sans text-[0.95rem] font-semibold text-heading">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section>
        <div className="container-std grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <SectionHead
              eyebrow="Fit questions"
              title="Choosing a service"
              body="If the answer is not here, the fit call is the fastest route to clarity."
            />
            <Link href="/faq" className="btn btn-outline mt-6">
              All questions
              <Arrow />
            </Link>
            <ul className="mt-8 space-y-3">
              {["No package needed to start", "One consolidated diligence list", "A clear no beats a slow maybe"].map((item) => (
                <li key={item} className="flex gap-3 text-sm text-text">
                  <Check className="mt-1 shrink-0 text-accent-strong" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <FaqAccordion items={servicesFaq} />
        </div>
      </Section>

      <CtaBand
        title="Pick the closest fit. We will confirm the rest."
        body="Send the project stage and a short description. If a different structure or lender is the better answer, that is what you will hear."
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}
