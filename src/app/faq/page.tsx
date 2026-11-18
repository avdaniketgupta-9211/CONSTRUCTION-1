import Link from "next/link";
import { Arrow, CtaBand, Disclosure, Eyebrow, PageHero, Section, SectionHead } from "@/components/ui";
import { FaqAccordion } from "@/components/faq-accordion";
import { faqGroups } from "@/content/library";
import { breadcrumbSchema, faqSchema, pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Questions and answers",
  description:
    "Answers about services, fit, process, documents, costs, terms, and privacy — including why Kestrel Ridge does not publish rates or turnaround claims.",
  path: "/faq",
});

export default function FaqPage() {
  const allItems = faqGroups.flatMap((group) => group.items);
  const schema = faqSchema(allItems);
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "FAQ", path: "/faq" },
  ]);

  return (
    <>
      <PageHero
        eyebrow="Questions"
        title="Answers before you send anything"
        intro="Grouped by what people actually ask: who we work with, which structure fits, what diligence involves, and why rates and turnaround times are not published."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "FAQ" }]}
        primary={
          <Link href="/contact#estimate-form" className="btn btn-primary">
            Ask us directly
            <Arrow />
          </Link>
        }
        secondary={
          <Link href="/how-it-works" className="btn btn-outline">
            Process detail
          </Link>
        }
      />

      <Section>
        <div className="container-std grid gap-10 lg:grid-cols-[0.26fr_0.74fr] lg:gap-16">
          <aside className="lg:sticky lg:top-28 lg:h-fit">
            <p className="text-[0.6875rem] font-semibold tracking-[0.14em] text-muted uppercase">Jump to a group</p>
            <ul className="mt-4 space-y-2 text-sm">
              {faqGroups.map((group) => (
                <li key={group.id}>
                  <a href={`#${group.id}`} className="text-muted hover:text-accent-strong">
                    {group.title}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-8 border border-border bg-surface p-5">
              <p className="text-[0.6875rem] font-semibold tracking-[0.14em] text-accent-strong uppercase">No answer here?</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Send the question with the project context. It is usually faster than searching for a policy that may not apply to your
                situation.
              </p>
              <Link href="/contact#estimate-form" className="btn btn-primary mt-4 w-full px-4 text-[0.8125rem]">
                Book an estimate
                <Arrow />
              </Link>
            </div>
          </aside>

          <div className="space-y-12">
            {faqGroups.map((group) => (
              <div key={group.id} id={group.id} className="scroll-mt-28">
                <Eyebrow>{group.title}</Eyebrow>
                <h2 className="mt-3 display-section text-[1.6rem] sm:text-[2rem]">{group.intro}</h2>
                <div className="mt-4">
                  <FaqAccordion items={group.items} />
                </div>
              </div>
            ))}

            <div>
              <SectionHead eyebrow="Disclosures" title="Important context" />
              <div className="mt-5">
                <Disclosure>
                  All content is general information about investment-property financing. It is not an offer to lend, a commitment to
                  fund, or legal, tax, or investment advice. Rate, leverage, term, fees, and eligibility are set per transaction and
                  subject to underwriting, appraisal, title review, and credit approval. Consumer-purpose and owner-occupied lending is
                  not offered through this site.
                </Disclosure>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <CtaBand
        title="A question is a reasonable starting point."
        body="Four fields. Name, phone, optional email, and what you are working on. We will take it from there."
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
    </>
  );
}
