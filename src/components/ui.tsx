import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { services, type Service } from "@/content/services";
import type { Article, Scenario } from "@/content/library";

export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      aria-hidden="true"
      focusable="false"
      className={`h-[0.9em] w-[0.9em] ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3.5 10h13M11 4.5 16.5 10 11 15.5" />
    </svg>
  );
}

export function Check({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      aria-hidden="true"
      focusable="false"
      className={`h-[1em] w-[1em] ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3.5 10.5 4 4 9-9" />
    </svg>
  );
}

export function PhoneIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      aria-hidden="true"
      focusable="false"
      className={`h-[1em] w-[1em] ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5.2 2.8h2.3l1.2 3-1.7 1.2a10.4 10.4 0 0 0 5 5l1.2-1.7 3 1.2v2.3c0 1.1-.9 2-2 2A13.5 13.5 0 0 1 3.2 4.8c0-1.1.9-2 2-2Z" />
    </svg>
  );
}

export function Eyebrow({ children, invert = false }: { children: ReactNode; invert?: boolean }) {
  return <p className={`eyebrow ${invert ? "eyebrow-invert" : ""}`}>{children}</p>;
}

export function Section({
  children,
  className = "",
  id,
  tone = "default",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: "default" | "alt" | "dark" | "surface";
}) {
  const tones: Record<string, string> = {
    default: "",
    alt: "bg-background-alt",
    surface: "bg-surface",
    dark: "bg-primary text-on-primary",
  };
  return (
    <section id={id} className={`py-16 sm:py-20 lg:py-28 ${tones[tone]} ${className}`}>
      {children}
    </section>
  );
}

export function SectionHead({
  eyebrow,
  title,
  body,
  cta,
  align = "left",
  invert = false,
  as: Heading = "h2",
}: {
  eyebrow?: string;
  title: ReactNode;
  body?: ReactNode;
  cta?: ReactNode;
  align?: "left" | "split";
  invert?: boolean;
  as?: "h2" | "h3";
}) {
  return (
    <div
      className={
        align === "split"
          ? "flex flex-col gap-8 md:flex-row md:items-end md:justify-between"
          : "max-w-3xl"
      }
    >
      <div className={align === "split" ? "max-w-2xl" : ""}>
        {eyebrow ? <Eyebrow invert={invert}>{eyebrow}</Eyebrow> : null}
        <Heading className={`display-section mt-4 ${invert ? "text-on-primary" : ""}`}>{title}</Heading>
        {body ? (
          <div className={`mt-5 measure text-[1.0625rem] leading-relaxed ${invert ? "text-on-primary/80" : "text-muted"}`}>
            {body}
          </div>
        ) : null}
      </div>
      {cta ? <div className="shrink-0">{cta}</div> : null}
    </div>
  );
}

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-[0.8125rem] text-muted">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => (
          <li key={`${item.label}-${index}`} className="flex items-center gap-2">
            {index > 0 ? <span aria-hidden="true">/</span> : null}
            {item.href ? (
              <Link className="underline decoration-border-strong underline-offset-4 hover:text-heading" href={item.href}>
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-heading">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  breadcrumbs,
  primary,
  secondary,
  facts,
  invert = false,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  image?: { src: string; alt: string; position?: string };
  breadcrumbs?: { label: string; href?: string }[];
  primary?: ReactNode;
  secondary?: ReactNode;
  facts?: { label: string; value: string }[];
  invert?: boolean;
}) {
  return (
    <section className={`relative overflow-hidden ${invert ? "bg-primary text-on-primary" : "bg-background-alt"}`}>
      <div className="container-std pt-8 pb-14 sm:pt-10 sm:pb-20 lg:pt-12 lg:pb-24">
        {breadcrumbs ? (
          <div className={invert ? "[&_*]:text-on-primary/70 [&_a:hover]:text-white mb-8" : "mb-8"}>
            <Breadcrumbs items={breadcrumbs} />
          </div>
        ) : null}
        <div className={`grid gap-10 lg:gap-16 ${image ? "lg:grid-cols-[1.05fr_0.95fr] lg:items-center" : ""}`}>
          <div className={image ? "" : "max-w-4xl"}>
            <Eyebrow invert={invert}>{eyebrow}</Eyebrow>
            <h1 className={`display-page mt-5 ${invert ? "text-on-primary" : ""}`}>{title}</h1>
            <p className={`mt-6 measure text-[1.0625rem] leading-relaxed sm:text-lg ${invert ? "text-on-primary/80" : "text-muted"}`}>
              {intro}
            </p>
            {primary || secondary ? (
              <div className="mt-8 flex flex-wrap items-center gap-3">
                {primary}
                {secondary}
              </div>
            ) : null}
            {facts && facts.length > 0 ? (
              <dl className={`mt-10 grid grid-cols-1 gap-x-8 gap-y-4 border-t pt-6 sm:grid-cols-3 ${invert ? "border-on-primary/25" : "border-border"}`}>
                {facts.map((fact) => (
                  <div key={fact.label}>
                    <dt className={`text-[0.6875rem] font-semibold uppercase tracking-[0.14em] ${invert ? "text-on-primary/60" : "text-muted"}`}>
                      {fact.label}
                    </dt>
                    <dd className={`mt-1.5 text-sm font-medium ${invert ? "text-on-primary" : "text-heading"}`}>{fact.value}</dd>
                  </div>
                ))}
              </dl>
            ) : null}
          </div>
          {image ? (
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm sm:aspect-[16/11] lg:aspect-[4/3.4]">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority
                sizes="(min-width: 1024px) 46vw, 100vw"
                className="object-cover"
                style={image.position ? { objectPosition: image.position } : undefined}
              />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export function ServiceCard({ service, index }: { service: Service; index?: number }) {
  return (
    <article className="card card-interactive group flex h-full flex-col p-6 sm:p-7">
      <div className="flex items-start justify-between gap-4">
        <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-accent-strong">{service.category}</p>
        {typeof index === "number" ? (
          <span aria-hidden="true" className="font-display text-2xl leading-none text-border-strong">
            {String(index + 1).padStart(2, "0")}
          </span>
        ) : null}
      </div>
      <h3 className="mt-4 text-[1.35rem] leading-tight sm:text-[1.45rem]">{service.name}</h3>
      <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted">{service.tagline}</p>
      <div className="mt-5 border-t border-border pt-4">
        <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-muted">Ideal fit</p>
        <p className="mt-1.5 text-sm leading-relaxed text-text">{service.bestFor}</p>
      </div>
      <Link
        href={`/services/${service.slug}`}
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary underline-offset-4 hover:underline"
      >
        Explore {service.navLabel.toLowerCase()}
        <span className="sr-only"> financing</span>
        <Arrow className="transition-transform duration-200 group-hover:translate-x-1" />
      </Link>
    </article>
  );
}

export function ScenarioCard({ scenario }: { scenario: Scenario }) {
  const service = services.find((item) => item.slug === scenario.serviceSlug);
  return (
    <article className="card card-interactive group flex h-full flex-col overflow-hidden">
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-background-alt">
        <Image
          src={scenario.image.src}
          alt={scenario.image.alt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-accent-strong">
          {service?.navLabel ?? scenario.profileType}
        </p>
        <h3 className="mt-3 text-[1.3rem] leading-snug">{scenario.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{scenario.summary}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {scenario.metrics.slice(0, 2).map((metric) => (
            <span key={metric.label} className="rounded-xs border border-border bg-background px-2.5 py-1 text-xs text-text">
              {metric.label}: {metric.value}
            </span>
          ))}
        </div>
        <Link
          href={`/case-studies/${scenario.slug}`}
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary underline-offset-4 hover:underline"
        >
          View project profile
          <Arrow className="transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}

export function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="card card-interactive group flex h-full flex-col p-6">
      <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-accent-strong">{article.category}</p>
      <h3 className="mt-3 text-[1.25rem] leading-snug">
        <Link href={`/resources/${article.slug}`} className="hover:text-accent-strong">
          {article.title}
        </Link>
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{article.description}</p>
      <div className="mt-5 flex items-center justify-between border-t border-border pt-4 text-xs text-muted">
        <span>{article.minutes} min read</span>
        <Arrow className="text-primary transition-transform duration-200 group-hover:translate-x-1" />
      </div>
    </article>
  );
}

export function KeyDetails({ items, title = "Key details" }: { items: { label: string; value: string }[]; title?: string }) {
  return (
    <div className="card overflow-hidden">
      <h2 className="border-b border-border bg-background-alt/70 px-6 py-4 font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-heading">
        {title}
      </h2>
      <dl className="divide-y divide-border">
        {items.map((item) => (
          <div key={item.label} className="grid gap-1 px-6 py-4 sm:grid-cols-[0.8fr_1.2fr] sm:gap-6">
            <dt className="text-[0.8125rem] font-semibold text-heading">{item.label}</dt>
            <dd className="text-sm leading-relaxed text-muted">{item.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export function ProcessTimeline({
  steps,
  invert = false,
}: {
  steps: { title: string; body: string; step?: string }[];
  invert?: boolean;
}) {
  // Six (or more) steps need a balanced 3-column grid; fewer keep the
  // original 5-column row so no empty divider cells are left behind.
  const columns =
    steps.length >= 6
      ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-5";

  return (
    <ol className={`grid gap-px overflow-hidden rounded-sm ${columns} ${invert ? "bg-on-primary/20" : "bg-border"}`}>
      {steps.map((step, index) => (
        <li key={step.title} className={`flex flex-col p-6 ${invert ? "bg-primary" : "bg-surface"}`}>
          <span
            className={`font-display text-3xl leading-none ${invert ? "text-accent-soft" : "text-accent"}`}
            aria-hidden="true"
          >
            {step.step ?? String(index + 1).padStart(2, "0")}
          </span>
          <h3 className={`mt-4 text-[1.15rem] leading-snug ${invert ? "text-on-primary" : ""}`}>{step.title}</h3>
          <p className={`mt-2 text-sm leading-relaxed ${invert ? "text-on-primary/75" : "text-muted"}`}>{step.body}</p>
        </li>
      ))}
    </ol>
  );
}

export function Checklist({ groups }: { groups: { title: string; items: string[] }[] }) {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {groups.map((group) => (
        <div key={group.title} className="border-t-2 border-primary pt-5">
          <h3 className="font-sans text-sm font-semibold text-heading">{group.title}</h3>
          <ul className="mt-4 space-y-3">
            {group.items.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted">
                <Check className="mt-1 shrink-0 text-accent-strong" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export function RelatedServices({ slugs, current }: { slugs: string[]; current?: string }) {
  const related = services.filter((service) => slugs.includes(service.slug) && service.slug !== current);
  if (related.length === 0) return null;
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {related.map((service, index) => (
        <ServiceCard key={service.slug} service={service} index={index} />
      ))}
    </div>
  );
}

export function CtaBand({
  title,
  body,
  primaryLabel = "Book an estimate",
  secondaryLabel = "How it works",
  primaryHref = "/contact#estimate-form",
  secondaryHref = "/how-it-works",
  note,
}: {
  title: string;
  body: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  primaryHref?: string;
  secondaryHref?: string;
  note?: string;
}) {
  return (
    <section className="bg-primary text-on-primary">
      <div className="container-std grid gap-8 py-16 sm:py-20 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:py-24">
        <div>
          <Eyebrow invert>Next step</Eyebrow>
          <h2 className="display-page mt-4 max-w-2xl text-on-primary">{title}</h2>
          <p className="mt-5 max-w-xl text-[1.0625rem] leading-relaxed text-on-primary/80">{body}</p>
        </div>
        <div className="lg:justify-self-end">
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Link href={primaryHref} className="btn btn-invert">
              {primaryLabel}
              <Arrow />
            </Link>
            <Link href={secondaryHref} className="btn btn-ghost-invert">
              {secondaryLabel}
            </Link>
          </div>
          {note ? <p className="mt-4 max-w-xs text-xs leading-relaxed text-on-primary/60">{note}</p> : null}
        </div>
      </div>
    </section>
  );
}

export function Disclosure({ children }: { children: ReactNode }) {
  return (
    <aside className="border-l-2 border-accent bg-background-alt/80 px-5 py-4 text-[0.8125rem] leading-relaxed text-muted">
      {children}
    </aside>
  );
}

export function IconList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted">
          <Check className="mt-1 shrink-0 text-accent-strong" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
