import Link from "next/link";
import { Arrow, ArticleCard, CtaBand, Eyebrow, PageHero, Section, SectionHead } from "@/components/ui";
import { articles } from "@/content/library";
import { breadcrumbSchema, pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Resources — plain-English financing guides",
  description:
    "Practical guides on construction draws, lender diligence, bridge versus construction debt, land basis, and writing a renovation scope a lender can fund.",
  path: "/resources",
});

const categories = ["Guides", "Process", "Market education"];

export default function ResourcesPage() {
  const schema = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Resources", path: "/resources" },
  ]);

  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Understand the decision before you make it"
        intro="Short, practical guides written around the questions that actually come up in underwriting. No gated PDFs, no lead-capture walls, and no invented statistics."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Resources" }]}
        primary={
          <Link href="/faq" className="btn btn-primary">
            Read the FAQs
            <Arrow />
          </Link>
        }
        secondary={
          <Link href="/contact#estimate-form" className="btn btn-outline">
            Book an estimate
          </Link>
        }
        facts={[
          { label: "Format", value: "Open access, no gate" },
          { label: "Audience", value: "Builders and sponsors" },
          { label: "Claims", value: "No invented data" },
        ]}
      />

      <Section>
        <div className="container-std">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end lg:gap-16">
            <SectionHead
              eyebrow="Library"
              title="Five guides worth the time"
              body="Each answers a question that changes how a project is structured. If a topic is missing, ask through the contact form and it may be added."
            />
            <ul className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <li key={category} className="border border-border-strong bg-surface px-3 py-1.5 text-xs font-semibold tracking-[0.06em] text-heading uppercase">
                  {category}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </Section>

      <Section tone="alt">
        <div className="container-std grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <Eyebrow>Editorial standard</Eyebrow>
            <h2 className="display-section mt-4">What we will not publish</h2>
            <p className="mt-5 measure text-muted">
              Educational content is only useful if it is honest about what cannot be known before underwriting.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { title: "No universal eligibility numbers", body: "Credit thresholds, LTV, and minimums vary by program and file. Content explains what is reviewed, not a fictional standard." },
              { title: "No delivery-time promises", body: "Timelines depend on documentation and third-party reports. We do not publish a number we cannot stand behind." },
              { title: "No client outcome claims", body: "No testimonials, approval rates, or transaction volumes are presented as fact without verified evidence." },
              { title: "No legal advice", body: "These guides are general information for investment-property borrowers, not legal, tax, or investment advice." },
            ].map((item) => (
              <div key={item.title} className="border-t border-border pt-4">
                <h3 className="font-sans text-sm font-semibold text-heading">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <CtaBand
        title="Reading is useful. A fit call is faster."
        body="If you already know the project stage, skip ahead — four fields is enough for us to tell you whether it is in scope."
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}
