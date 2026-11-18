import Link from "next/link";
import { Arrow, CtaBand, Disclosure, Eyebrow, PageHero, Section, SectionHead } from "@/components/ui";
import { articles, scenarios } from "@/content/library";
import { services } from "@/content/services";
import { contentStatus, imageCredits, site } from "@/content/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Verification log, research & route manifest",
  description:
    "What is verified, proposed, withheld, or blocked on this site. Includes the research sources inspected, design concept scoring, route manifest, and photography credits.",
  path: "/content-status",
});

const research = [
  {
    source: "archwestcapital.com",
    page: "Ground Up service page (fetched and read)",
    observation: "Service page built from repeated conversion bands, loan highlights, project types, recently funded, and a 4-step process.",
    works: "Immediate category clarity and repeated next steps.",
    avoid: "Repetition, vague superlatives, and project cards without verifiable context.",
    adaptation: "Single decisive proof strip, unique detail per service, and labelled scenario profiles.",
    confidence: "High — page fetched",
  },
  {
    source: "privatelenderlink.com",
    page: "Residential construction loan guidelines (search extract)",
    observation: "Lender comparison content centres on experience, plans/budget, credit, reserves, and leverage.",
    works: "Surfaces the real qualification variables borrowers search for.",
    avoid: "Publishing hard thresholds as if universal.",
    adaptation: "Qualification checklists describing what is reviewed, with no invented thresholds.",
    confidence: "Medium — extract only",
  },
  {
    source: "instalend.com",
    page: "New construction loan requirements (search extract)",
    observation: "Strong answer-first structure: direct eligibility answer, then project and borrower evaluation.",
    works: "Answer-first headings useful for scanning and answer engines.",
    avoid: "Number-led promises without context.",
    adaptation: "Direct answers at the top of FAQs and resource sections.",
    confidence: "Medium — extract only",
  },
  {
    source: "privatelenderlink.com",
    page: "Builders Capital profile (search extract)",
    observation: "Product matrices with borrower entity, experience, and leverage conditions.",
    works: "Scannable, structured comparison.",
    avoid: "Dense tables that break on mobile.",
    adaptation: "Desktop comparison table, stacked service cards on mobile.",
    confidence: "Medium — extract only",
  },
  {
    source: "pexels.com",
    page: "Architectural, construction, land, and documentation photography",
    observation: "Real contextual photography available under a permissive license.",
    works: "Authentic built-environment context rather than synthetic people.",
    avoid: "Presenting stock imagery as the company's projects or team.",
    adaptation: "Self-hosted contextual imagery with a credit log; no stock faces captioned as staff.",
    confidence: "High — assets downloaded",
  },
  {
    source: "Project repository",
    page: "Next.js App Router + Drizzle + PostgreSQL scaffold",
    observation: "No brand, content, legal, phone, or asset data supplied. Health endpoint and DB client present.",
    works: "Server rendering, route handlers, and Postgres available.",
    avoid: "Replacing working infrastructure unnecessarily.",
    adaptation: "Kept the stack; added semantic tokens, components, routes, lead persistence.",
    confidence: "High — inspected",
  },
];

const concepts = [
  {
    name: "A — Architectural Authority",
    description: "Institutional editorial layout, warm white and deep petrol, copper rules, serif display type, metric panels.",
    scores: { Clarity: 5, "Conversion fit": 4, Credibility: 5, Distinctiveness: 4, Accessibility: 5, Feasibility: 4 },
    total: "91%",
    selected: true,
  },
  {
    name: "B — Modern Capital Intelligence",
    description: "Darker interface-led composition, teal accent, layered data surfaces, sharper product framing.",
    scores: { Clarity: 4, "Conversion fit": 4, Credibility: 3, Distinctiveness: 5, Accessibility: 4, Feasibility: 3 },
    total: "76%",
    selected: false,
  },
  {
    name: "C — Premium Human Partnership",
    description: "Warmer forest and sand palette, large people-led photography, softer cards, relationship-first framing.",
    scores: { Clarity: 4, "Conversion fit": 4, Credibility: 4, Distinctiveness: 3, Accessibility: 5, Feasibility: 4 },
    total: "80%",
    selected: false,
  },
];

const weights: Record<string, number> = {
  Clarity: 0.25,
  "Conversion fit": 0.25,
  Credibility: 0.2,
  Distinctiveness: 0.1,
  Accessibility: 0.1,
  Feasibility: 0.1,
};

const routes = [
  { label: "Home", path: "/", purpose: "Positioning, service discovery, proof, conversion" },
  { label: "Services", path: "/services", purpose: "Comparison matrix and service chooser" },
  ...services.map((service) => ({ label: service.navLabel, path: `/services/${service.slug}`, purpose: "Dedicated service conversion page" })),
  { label: "How it works", path: "/how-it-works", purpose: "Process, expectations, obstacles" },
  { label: "Scenario library", path: "/case-studies", purpose: "Illustrative project profiles" },
  ...scenarios.map((scenario) => ({ label: scenario.title, path: `/case-studies/${scenario.slug}`, purpose: "Profile detail" })),
  { label: "Resources", path: "/resources", purpose: "Educational library" },
  ...articles.map((article) => ({ label: article.title, path: `/resources/${article.slug}`, purpose: "Guide detail" })),
  { label: "About", path: "/about", purpose: "Operating philosophy and scope" },
  { label: "FAQ", path: "/faq", purpose: "Grouped answers with FAQ schema" },
  { label: "Contact", path: "/contact", purpose: "Contact details and four-field form" },
  { label: "Privacy", path: "/privacy-policy", purpose: "Development privacy draft" },
  { label: "Terms", path: "/terms", purpose: "Development terms draft" },
  { label: "Verification log", path: "/content-status", purpose: "This page" },
];

const blockers = [
  {
    title: "Verified phone number",
    body: "Call Now and every phone link use the reserved +1 (555) 010-0199 demonstration number via NEXT_PUBLIC_SITE_PHONE_E164. Replace with a monitored, verified number before launch.",
  },
  {
    title: "Monitored email inbox",
    body: "projects@kestrelridge.example uses the reserved .example TLD. Replace with a real inbox that a person reviews.",
  },
  {
    title: "Legal and licensing review",
    body: "Privacy and Terms are development drafts. Company identity, registered address, licensing disclosures, and governing law must be supplied and reviewed by counsel.",
  },
  {
    title: "Verified coverage list",
    body: "Markets are described qualitatively. If city-level coverage is required, supply and verify the list.",
  },
  {
    title: "Approved case studies and team assets",
    body: "The scenario library is explicitly illustrative, and no team profiles are published. Replace with approved transactions and real people, or keep the current transparent framing.",
  },
  {
    title: "Form notification routing",
    body: "Submissions persist to PostgreSQL. If lead routing to a CRM is required, set LEAD_WEBHOOK_URL to an approved endpoint, or replace the insert with the CRM integration.",
  },
];

export default function ContentStatusPage() {
  return (
    <>
      <PageHero
        eyebrow="Build transparency"
        title="What is verified, and what is still a placeholder"
        intro="This build did not come with a business brief, brand assets, verified contact details, or legal copy. Rather than inventing facts, everything supplied by the build is recorded here, alongside the research and the decisions made."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Verification log" }]}
        primary={
          <Link href="/contact#estimate-form" className="btn btn-primary">
            See the conversion flow
            <Arrow />
          </Link>
        }
        secondary={
          <Link href="/services" className="btn btn-outline">
            Review services
          </Link>
        }
        facts={[
          { label: "Brand", value: "Original, proposed" },
          { label: "Numeric claims", value: "None published" },
          { label: "Blockers listed", value: `${blockers.length} items` },
        ]}
      />

      <Section>
        <div className="container-std">
          <SectionHead
            eyebrow="Business facts"
            title="Verified, proposed, withheld, blocked"
            body="The categories below determine how every claim on the site is framed. Anything unverified is either qualitative or explicitly labelled."
          />
          <div className="mt-9 overflow-hidden border border-border">
            <table className="w-full border-collapse text-left text-sm">
              <caption className="sr-only">Verification status of business facts</caption>
              <thead className="bg-primary text-on-primary">
                <tr>
                  <th scope="col" className="px-4 py-3 text-[0.6875rem] font-semibold tracking-[0.14em] uppercase">Item</th>
                  <th scope="col" className="px-4 py-3 text-[0.6875rem] font-semibold tracking-[0.14em] uppercase">Status</th>
                  <th scope="col" className="px-4 py-3 text-[0.6875rem] font-semibold tracking-[0.14em] uppercase">Detail</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-surface">
                {contentStatus.map((item) => (
                  <tr key={item.item} className="align-top">
                    <th scope="row" className="px-4 py-3.5 font-semibold text-heading">
                      {item.item}
                    </th>
                    <td className="px-4 py-3.5">
                      <span
                        className={`inline-block border px-2 py-0.5 text-[0.625rem] font-semibold tracking-[0.1em] uppercase ${
                          item.status === "VERIFIED IN BUILD" || item.status === "LICENSED"
                            ? "border-success/40 bg-success/10 text-success"
                            : item.status === "PLACEHOLDER"
                              ? "border-error/40 bg-error/10 text-error"
                              : "border-border-strong bg-background-alt text-heading"
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td className="px-4 py-3.5 leading-relaxed text-muted">{item.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6">
            <Disclosure>{site.disclosure}</Disclosure>
          </div>
        </div>
      </Section>

      <Section tone="alt">
        <div className="container-std">
          <SectionHead
            eyebrow="Research performed"
            title="Six sources actually inspected"
            body="Four industry sources, one photography library, and the supplied repository. Search-extract sources are marked as such; they were not opened as full page visits."
          />
          <div className="mt-9 space-y-4">
            {research.map((entry) => (
              <article key={`${entry.source}-${entry.page}`} className="border border-border bg-surface p-5">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-sans text-sm font-semibold text-heading">{entry.source}</h3>
                  <span className="text-[0.625rem] font-semibold tracking-[0.1em] text-muted uppercase">{entry.confidence}</span>
                </div>
                <p className="mt-1 text-xs text-muted">{entry.page}</p>
                <dl className="mt-3 grid gap-2 text-sm sm:grid-cols-2">
                  <div>
                    <dt className="text-[0.6875rem] font-semibold tracking-[0.1em] text-heading uppercase">Observation</dt>
                    <dd className="mt-0.5 leading-relaxed text-muted">{entry.observation}</dd>
                  </div>
                  <div>
                    <dt className="text-[0.6875rem] font-semibold tracking-[0.1em] text-heading uppercase">What worked</dt>
                    <dd className="mt-0.5 leading-relaxed text-muted">{entry.works}</dd>
                  </div>
                  <div>
                    <dt className="text-[0.6875rem] font-semibold tracking-[0.1em] text-heading uppercase">Not copied</dt>
                    <dd className="mt-0.5 leading-relaxed text-muted">{entry.avoid}</dd>
                  </div>
                  <div>
                    <dt className="text-[0.6875rem] font-semibold tracking-[0.1em] text-heading uppercase">Adaptation</dt>
                    <dd className="mt-0.5 leading-relaxed text-muted">{entry.adaptation}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
          <p className="mt-5 text-xs leading-relaxed text-muted">
            No claim is made that these sites were audited comprehensively. UX pattern references were applied from established
            practice; no external pattern library was cited as visited.
          </p>
        </div>
      </Section>

      <Section>
        <div className="container-std">
          <SectionHead
            eyebrow="Design direction"
            title="Three concepts, weighted before implementation"
            body="Scored out of five per criterion, then weighted: clarity 25%, conversion fit 25%, credibility 20%, distinctiveness 10%, accessibility 10%, feasibility 10%."
          />
          <div className="mt-9 grid gap-5 lg:grid-cols-3">
            {concepts.map((concept) => (
              <article
                key={concept.name}
                className={`border p-5 ${concept.selected ? "border-primary bg-primary text-on-primary" : "border-border bg-surface"}`}
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className={`font-display text-[1.3rem] leading-tight ${concept.selected ? "text-on-primary" : "text-heading"}`}>
                    {concept.name}
                  </h3>
                  <span className={`shrink-0 text-lg font-semibold ${concept.selected ? "text-accent-soft" : "text-accent-strong"}`}>
                    {concept.total}
                  </span>
                </div>
                <p className={`mt-2 text-sm leading-relaxed ${concept.selected ? "text-on-primary/75" : "text-muted"}`}>
                  {concept.description}
                </p>
                <dl className={`mt-4 space-y-1.5 border-t pt-3 text-xs ${concept.selected ? "border-on-primary/20" : "border-border"}`}>
                  {Object.entries(concept.scores).map(([criterion, score]) => (
                    <div key={criterion} className="flex items-center justify-between gap-3">
                      <dt className={concept.selected ? "text-on-primary/70" : "text-muted"}>
                        {criterion} <span className="opacity-70">({Math.round((weights[criterion] ?? 0) * 100)}%)</span>
                      </dt>
                      <dd className={`font-semibold ${concept.selected ? "text-on-primary" : "text-heading"}`}>{score}/5</dd>
                    </div>
                  ))}
                </dl>
                {concept.selected ? (
                  <p className="mt-4 text-[0.625rem] font-semibold tracking-[0.12em] text-accent-soft uppercase">Selected direction</p>
                ) : null}
              </article>
            ))}
          </div>
          <div className="mt-6 border border-border bg-surface p-5">
            <p className="text-[0.6875rem] font-semibold tracking-[0.14em] text-accent-strong uppercase">Rationale</p>
            <p className="mt-2 text-sm leading-relaxed text-text">
              Concept A wins on clarity and credibility, which is where a private lender either earns or loses a serious inquiry. It
              borrows the warmth of Concept C through a serif display face, warm-neutral surfaces, and plain-spoken guidance, while
              rejecting the dashboard language of Concept B — a lender is not a SaaS product.
            </p>
            <div className="mt-4 grid gap-2 text-xs text-muted sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["Primary", "#14313B"],
                ["Accent", "#B87444"],
                ["Background", "#F8F6F1"],
                ["Text", "#26333A"],
              ].map(([name, hex]) => (
                <p key={name} className="flex items-center gap-2">
                  <span aria-hidden="true" className="h-4 w-4 border border-border" style={{ backgroundColor: hex }} />
                  {name}: {hex}
                </p>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section tone="alt">
        <div className="container-std">
          <SectionHead
            eyebrow="Route manifest"
            title="Every implemented page"
            body="No route in this build is a placeholder anchor. Each service, profile, and guide has its own indexable URL."
          />
          <div className="mt-9 overflow-hidden border border-border bg-surface">
            <table className="w-full border-collapse text-left text-sm">
              <caption className="sr-only">Implemented routes</caption>
              <thead className="bg-background-alt">
                <tr>
                  <th scope="col" className="px-4 py-3 text-[0.6875rem] font-semibold tracking-[0.14em] text-heading uppercase">Page</th>
                  <th scope="col" className="px-4 py-3 text-[0.6875rem] font-semibold tracking-[0.14em] text-heading uppercase">Path</th>
                  <th scope="col" className="px-4 py-3 text-[0.6875rem] font-semibold tracking-[0.14em] text-heading uppercase">Purpose</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {routes.map((route) => (
                  <tr key={route.path}>
                    <th scope="row" className="px-4 py-3 font-medium text-heading">
                      <Link href={route.path} className="hover:text-accent-strong">
                        {route.label}
                      </Link>
                    </th>
                    <td className="px-4 py-3 font-mono text-xs text-muted">{route.path}</td>
                    <td className="px-4 py-3 text-muted">{route.purpose}</td>
                  </tr>
                ))}
                <tr>
                  <th scope="row" className="px-4 py-3 font-medium text-heading">Not found</th>
                  <td className="px-4 py-3 font-mono text-xs text-muted">/404</td>
                  <td className="px-4 py-3 text-muted">Custom 404 with real navigation</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      <Section>
        <div className="container-std grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <SectionHead
              eyebrow="Launch blockers"
              title="Resolve these before calling it client-ready"
              body="A polished design does not compensate for unverified contact details or unreviewed legal copy."
            />
            <div className="mt-6">
              <Disclosure>
                This build is complete as a demonstration. It is not deployed, not legally reviewed, and not represented as
                production-ready until the items on this page are resolved.
              </Disclosure>
            </div>
          </div>
          <ol className="divide-y divide-border border-y border-border">
            {blockers.map((blocker, index) => (
              <li key={blocker.title} className="flex gap-4 py-4">
                <span aria-hidden="true" className="font-display text-lg text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-sans text-sm font-semibold text-heading">{blocker.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{blocker.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section tone="surface" className="border-y border-border">
        <div className="container-std">
          <Eyebrow>Media credits</Eyebrow>
          <h2 className="display-section mt-3">Licensed photography and video</h2>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted">
            Images and the homepage background video are licensed from Pexels and self-hosted. They show construction and built-environment
            context and are not presented as Kestrel Ridge projects, clients, or team members.
          </p>
          <ul className="mt-6 grid gap-2 text-sm sm:grid-cols-2 lg:grid-cols-3">
            {imageCredits.map((credit) => (
              <li key={credit.file} className="border border-border bg-surface p-3">
                <span className="block font-mono text-[0.6875rem] text-muted">{credit.file}</span>
                <span className="mt-1 block text-sm font-medium text-heading">{credit.creator}</span>
                <span className="block text-xs text-muted">{credit.alt}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <CtaBand
        title="Review the thing that matters: the flow."
        body="Start at the services matrix, then test the four-field form. Both were built to remove the friction a serious project inquiry usually meets."
        primaryLabel="Open the services matrix"
        primaryHref="/services"
        secondaryLabel="Test the form"
        secondaryHref="/contact#estimate-form"
      />
    </>
  );
}
