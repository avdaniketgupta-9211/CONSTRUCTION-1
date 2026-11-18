import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  Arrow,
  Breadcrumbs,
  CtaBand,
  Disclosure,
  Eyebrow,
  IconList,
  ScenarioCard,
  Section,
  SectionHead,
} from "@/components/ui";
import { scenarios, scenarioBySlug } from "@/content/library";
import { services } from "@/content/services";
import { breadcrumbSchema, pageMeta } from "@/lib/seo";

export function generateStaticParams() {
  return scenarios.map((scenario) => ({ slug: scenario.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const scenario = scenarioBySlug(slug);
  if (!scenario) return { title: "Profile not found" };
  return pageMeta({
    title: scenario.seo.title,
    description: scenario.seo.description,
    path: `/case-studies/${scenario.slug}`,
    image: scenario.image.src,
  });
}

export default async function ScenarioPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const scenario = scenarioBySlug(slug);
  if (!scenario) notFound();

  const service = services.find((item) => item.slug === scenario.serviceSlug);
  const others = scenarios.filter((item) => item.slug !== scenario.slug).slice(0, 3);

  const schema = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Scenario library", path: "/case-studies" },
    { name: scenario.title, path: `/case-studies/${scenario.slug}` },
  ]);

  return (
    <>
      <section className="border-b border-border bg-background-alt">
        <div className="container-std pt-8 pb-12 sm:pb-16 lg:pt-10">
          <Breadcrumbs
            items={[{ label: "Home", href: "/" }, { label: "Scenario library", href: "/case-studies" }, { label: scenario.profileType }]}
          />
          <div className="mt-8 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
            <div>
              <Eyebrow>{scenario.profileType}</Eyebrow>
              <h1 className="display-page mt-5">{scenario.title}</h1>
              <p className="mt-6 measure text-[1.0625rem] leading-relaxed text-muted">{scenario.summary}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="border border-border-strong bg-surface px-3 py-1.5 text-xs font-semibold tracking-[0.06em] text-heading uppercase">
                  Illustrative — not a client story
                </span>
                {service ? (
                  <Link
                    href={`/services/${service.slug}`}
                    className="border border-primary bg-primary px-3 py-1.5 text-xs font-semibold tracking-[0.06em] text-on-primary uppercase hover:bg-primary-hover"
                  >
                    {service.navLabel}
                  </Link>
                ) : null}
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden bg-background">
              <Image
                src={scenario.image.src}
                alt={scenario.image.alt}
                fill
                priority
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <Section>
        <div className="container-std grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          <aside>
            <div className="card overflow-hidden">
              <h2 className="border-b border-border bg-background-alt/70 px-5 py-3.5 font-sans text-[0.6875rem] font-semibold tracking-[0.14em] text-heading uppercase">
                Profile summary
              </h2>
              <dl className="divide-y divide-border">
                {scenario.metrics.map((metric) => (
                  <div key={metric.label} className="flex items-baseline justify-between gap-4 px-5 py-3.5">
                    <dt className="text-xs font-semibold tracking-[0.08em] text-muted uppercase">{metric.label}</dt>
                    <dd className="text-right text-sm font-medium text-heading">{metric.value}</dd>
                  </div>
                ))}
                <div className="flex items-baseline justify-between gap-4 px-5 py-3.5">
                  <dt className="text-xs font-semibold tracking-[0.08em] text-muted uppercase">Market</dt>
                  <dd className="text-right text-sm font-medium text-heading">{scenario.market}</dd>
                </div>
              </dl>
            </div>
            <div className="mt-5">
              <Disclosure>
                This is an illustrative scenario written to demonstrate review logic. It is not a testimonial, not a completed
                transaction, and contains no verified outcome data.
              </Disclosure>
            </div>
            <Link href="/contact#estimate-form" className="btn btn-primary mt-5 w-full">
              Discuss a similar project
              <Arrow />
            </Link>
          </aside>

          <div className="space-y-10">
            <div>
              <SectionHead eyebrow="Situation" title="Where the project started" as="h2" />
              <div className="mt-5 space-y-4 text-[1rem] leading-relaxed text-muted">
                {scenario.situation.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              <div className="border-t-2 border-accent-strong pt-5">
                <h2 className="display-sub">Constraints</h2>
                <IconList items={scenario.constraints} />
              </div>
              <div className="border-t-2 border-primary pt-5">
                <h2 className="display-sub">Structure reviewed</h2>
                <IconList items={scenario.structure} />
              </div>
            </div>

            <div>
              <SectionHead eyebrow="Execution" title="How the file was handled" as="h2" />
              <ol className="mt-5 space-y-3">
                {scenario.execution.map((item, index) => (
                  <li key={item} className="flex gap-4 border border-border bg-surface p-4">
                    <span aria-hidden="true" className="font-display text-xl text-accent">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="text-sm leading-relaxed text-text">{item}</p>
                  </li>
                ))}
              </ol>
            </div>

            <div className="border-l-2 border-accent bg-background-alt p-6">
              <p className="text-[0.6875rem] font-semibold tracking-[0.14em] text-accent-strong uppercase">What this shows</p>
              <p className="mt-3 font-display text-[1.4rem] leading-snug text-heading">{scenario.lesson}</p>
            </div>

            <div>
              <h2 className="display-sub">Related service</h2>
              {service ? (
                <div className="mt-4 flex flex-col gap-3 border border-border bg-surface p-5 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm font-semibold text-heading">{service.name}</p>
                    <p className="mt-1 text-sm text-muted">{service.tagline}</p>
                  </div>
                  <Link href={`/services/${service.slug}`} className="btn btn-outline shrink-0 px-4 text-[0.8125rem]">
                    View service
                    <Arrow />
                  </Link>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </Section>

      <Section tone="alt">
        <div className="container-std">
          <SectionHead eyebrow="More profiles" title="Other stages, other structures" />
          <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((item) => (
              <ScenarioCard key={item.slug} scenario={item} />
            ))}
          </div>
        </div>
      </Section>

      <CtaBand
        title="Every project has a constraint. Name it early."
        body="Tell us the stage, the basis, and what has to happen next. We will tell you what we would need to review."
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}
