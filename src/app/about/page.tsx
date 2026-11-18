import Image from "next/image";
import Link from "next/link";
import { Arrow, CtaBand, Disclosure, Eyebrow, PageHero, Section, SectionHead } from "@/components/ui";
import { differingDetail } from "@/content/service-copy";
import { operatingPrinciples, roles, site } from "@/content/site";
import { breadcrumbSchema, pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "About — accountability in private real estate capital",
  description:
    "How Kestrel Ridge Capital approaches underwriting, draws, and communication, and what we are deliberately not publishing until it can be verified.",
  path: "/about",
});

const values = [
  {
    title: "We underwrite the downside first",
    behaviour: "Every file is tested against a weaker exit before the upside is discussed in a term sheet.",
  },
  {
    title: "We write things down",
    behaviour: "Indicative structures, open items, and closing conditions are documented, not agreed verbally.",
  },
  {
    title: "We name the awkward facts",
    behaviour: "Utility capacity, entitlement conditions, thin contingency, and contractor capacity get raised early.",
  },
  {
    title: "We stay on the file",
    behaviour: "The person who took your first call remains accountable through closing and draw administration.",
  },
];

export default function AboutPage() {
  const schema = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
  ]);

  return (
    <>
      <PageHero
        eyebrow="About"
        title="Private capital should be explainable"
        intro="Kestrel Ridge was built on a simple frustration: real estate capital is often slow to understand a project and fast to say no. We would rather understand the project, state the risk plainly, and move quickly on the files that fit."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
        image={{ src: "/images/advisory.jpg", alt: "An architect drawing layouts at a drafting desk" }}
        primary={
          <Link href="/contact#estimate-form" className="btn btn-primary">
            Start a conversation
            <Arrow />
          </Link>
        }
        secondary={
          <Link href="/how-it-works" className="btn btn-outline">
            How it works
          </Link>
        }
        facts={[
          { label: "Focus", value: "Investment real estate" },
          { label: "Borrowers", value: "Builders, developers, sponsors" },
          { label: "Approach", value: "Project-level underwriting" },
        ]}
      />

      <Section>
        <div className="container-std grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <SectionHead
            eyebrow="Why we exist"
            title="Most delays are information problems"
            body="A project that stalls in diligence usually had the answer in the file. A budget without contingency. A site without confirmed utility capacity. A contractor with no room in the schedule. Our value is in finding those things early, before they become expensive."
          />
          <div className="space-y-5 text-[1.0625rem] leading-relaxed text-muted">
            <p>
              We work with builders, developers, and property owners in select U.S. metropolitan markets. The common thread is not
              asset type or project size — it is a sponsor who can explain the plan, the risk, and the exit without needing the
              spreadsheet to do the talking.
            </p>
            <p>
              That means we say no when a project does not fit, and we say why. It also means we do not publish approval rates,
              headline rates, or delivery timelines we cannot substantiate. A financial website should be able to survive a
              reasonable question.
            </p>
            <Disclosure>
              This page describes an operating philosophy and proposed brand positioning. Company history, leadership profiles, and
              credentials have not been supplied for verification and are therefore absent rather than invented.
            </Disclosure>
          </div>
        </div>
      </Section>

      <Section tone="alt">
        <div className="container-std">
          <SectionHead
            eyebrow="Operating philosophy"
            title="Four standards, stated as behaviour"
            body="Values are only meaningful when they describe what actually happens on a file."
          />
          <div className="mt-10 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2">
            {operatingPrinciples.map((principle, index) => (
              <div key={principle.title} className="bg-surface p-6 sm:p-8">
                <span aria-hidden="true" className="font-display text-2xl text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-[1.3rem] leading-snug">{principle.title}</h3>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">{principle.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="container-std grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <SectionHead
            eyebrow="How we work"
            title="Three accountable functions, not a hierarchy poster"
            body="Until verified bios are available, this is what we can tell you accurately: the functions that own your file."
          />
          <div className="space-y-4">
            {roles.map((role) => (
              <div key={role.title} className="border-l-2 border-accent bg-surface p-5">
                <h3 className="font-sans text-[0.95rem] font-semibold text-heading">{role.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{role.body}</p>
              </div>
            ))}
            <p className="text-xs leading-relaxed text-muted">
              Names, biographies, and headshots are pending verified client assets. We do not present stock or synthetic people as
              employees.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="surface" className="border-y border-border">
        <div className="container-std grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <Eyebrow>Values in practice</Eyebrow>
            <h2 className="display-section mt-4">What a client should be able to observe</h2>
            <p className="mt-5 measure text-muted">
              Each value is paired with behaviour you can check during a transaction, rather than an adjective on a wall.
            </p>
            <div className="relative mt-7 h-56 w-full overflow-hidden bg-background-alt">
              <Image src="/images/facade.jpg" alt="Facade detail of a modern residential building" fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
            </div>
          </div>
          <ul className="divide-y divide-border border-y border-border">
            {values.map((value) => (
              <li key={value.title} className="py-5">
                <h3 className="text-[1.15rem] leading-snug">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{value.behaviour}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section>
        <div className="container-std grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <SectionHead
            eyebrow="Where we work"
            title="Select U.S. metropolitan markets"
            body="Coverage is intentionally described as selective rather than exhaustive. Because a verified market list has not been supplied for this build, coverage is confirmed at intake."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="border border-border bg-surface p-5">
              <p className="text-[0.6875rem] font-semibold tracking-[0.14em] text-heading uppercase">How coverage is confirmed</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                The fit call checks the market, asset type, and stage against current appetite before a full package is requested.
              </p>
            </div>
            <div className="border border-border bg-surface p-5">
              <p className="text-[0.6875rem] font-semibold tracking-[0.14em] text-heading uppercase">Why we do not list cities</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                A market list is a factual claim. We would rather publish a verified list than an approximate one.
              </p>
            </div>
            <div className="border border-border bg-surface p-5 sm:col-span-2">
              <p className="text-[0.6875rem] font-semibold tracking-[0.14em] text-heading uppercase">Not the right stage?</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{differingDetail("ground-up-construction")}</p>
              <Link href="/services" className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-accent-strong hover:text-heading">
                Compare all services <Arrow />
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <CtaBand
        title="Ask us the question the website cannot answer."
        body={`Share the project and the constraint. You can also call ${site.phone.display} — note that this is a demonstration number pending verification.`}
        secondaryLabel="See the process"
        secondaryHref="/how-it-works"
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}
