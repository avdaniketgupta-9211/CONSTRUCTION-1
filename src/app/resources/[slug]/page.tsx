import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Arrow, Breadcrumbs, Check, CtaBand, Disclosure, Eyebrow, Section, SectionHead } from "@/components/ui";
import { ArticleCard } from "@/components/ui";
import { articleBySlug, articles } from "@/content/library";
import { serviceBySlug } from "@/content/services";
import { site } from "@/content/site";
import { breadcrumbSchema, pageMeta } from "@/lib/seo";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = articleBySlug(slug);
  if (!article) return { title: "Resource not found" };
  return pageMeta({
    title: article.title,
    description: article.description,
    path: `/resources/${article.slug}`,
    image: "/images/documents.jpg",
  });
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articleBySlug(slug);
  if (!article) notFound();

  const service = serviceBySlug(article.relatedService);
  const relatedArticles = articles.filter((item) => article.related.includes(item.slug));

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    author: { "@type": "Organization", name: site.name, url: site.url },
    publisher: { "@type": "Organization", name: site.name, url: site.url },
    mainEntityOfPage: `${site.url}/resources/${article.slug}`,
    articleSection: article.category,
  };

  const schema = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Resources", path: "/resources" },
    { name: article.title, path: `/resources/${article.slug}` },
  ]);

  return (
    <>
      <section className="border-b border-border bg-background-alt">
        <div className="container-std pt-8 pb-12 sm:pb-16 lg:pt-10">
          <Breadcrumbs
            items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: article.category }]}
          />
          <div className="mt-8 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            <div>
              <Eyebrow>{article.category}</Eyebrow>
              <h1 className="display-page mt-5 max-w-3xl">{article.title}</h1>
              <p className="mt-6 measure text-[1.0625rem] leading-relaxed text-muted">{article.description}</p>
              <p className="mt-5 text-xs font-medium tracking-[0.08em] text-muted uppercase">{article.minutes} min read · Editorial review pending</p>
            </div>
            <div className="card h-fit p-6">
              <h2 className="font-sans text-[0.6875rem] font-semibold tracking-[0.16em] text-accent-strong uppercase">Key takeaways</h2>
              <ul className="mt-4 space-y-3">
                {article.takeaways.map((takeaway) => (
                  <li key={takeaway} className="flex gap-3 text-sm leading-relaxed text-text">
                    <Check className="mt-1 shrink-0 text-accent-strong" />
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Section>
        <div className="container-std grid gap-12 lg:grid-cols-[0.28fr_0.72fr] lg:gap-16">
          <aside className="lg:sticky lg:top-28 lg:h-fit">
            <nav aria-label="On this page">
              <p className="text-[0.6875rem] font-semibold tracking-[0.14em] text-muted uppercase">On this page</p>
              <ul className="mt-4 space-y-2.5 text-sm">
                {article.sections.map((section) => (
                  <li key={section.id}>
                    <a href={`#${section.id}`} className="text-muted hover:text-accent-strong">
                      {section.heading}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="mt-8 border border-border bg-surface p-5">
              <p className="text-[0.6875rem] font-semibold tracking-[0.14em] text-muted uppercase">Related service</p>
              {service ? (
                <>
                  <p className="mt-2 text-sm font-semibold text-heading">{service.name}</p>
                  <Link href={`/services/${service.slug}`} className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-accent-strong hover:text-heading">
                    View service <Arrow />
                  </Link>
                </>
              ) : null}
            </div>
          </aside>

          <article className="max-w-[46rem]">
            <p className="lead border-l-2 border-accent pl-5">{article.summary}</p>
            <div className="mt-10 space-y-10">
              {article.sections.map((section) => (
                <section key={section.id} id={section.id} className="scroll-mt-28">
                  <h2 className="display-section text-[1.65rem] sm:text-[2rem]">{section.heading}</h2>
                  <div className="mt-4 space-y-4 text-[1rem] leading-relaxed text-text">
                    {section.paragraphs?.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  {section.bullets ? (
                    <ul className="mt-5 space-y-2.5 border-l border-border pl-5">
                      {section.bullets.map((bullet) => (
                        <li key={bullet} className="text-[0.9375rem] leading-relaxed text-muted">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  {section.note ? (
                    <div className="mt-5">
                      <Disclosure>{section.note}</Disclosure>
                    </div>
                  ) : null}
                </section>
              ))}
            </div>

            <div className="mt-12 border-t border-border pt-6">
              <p className="text-xs leading-relaxed text-muted">
                This guide is general information for investment-property financing. It is not an offer to lend, legal advice, tax
                advice, or a commitment to fund. Terms are set per transaction and subject to underwriting.
              </p>
            </div>
          </article>
        </div>
      </Section>

      {relatedArticles.length > 0 ? (
        <Section tone="alt">
          <div className="container-std">
            <SectionHead eyebrow="Keep reading" title="Related guides" />
            <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {relatedArticles.map((item) => (
                <ArticleCard key={item.slug} article={item} />
              ))}
            </div>
          </div>
        </Section>
      ) : null}

      <CtaBand
        title="Apply this to a real project."
        body="If the questions above raised something specific, put it in the four-field form. We will tell you what matters for your situation."
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}
