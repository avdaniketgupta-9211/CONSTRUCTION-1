import Link from "next/link";
import { Arrow, Check, Disclosure, Eyebrow, IconList, PageHero, PhoneIcon, Section, SectionHead } from "@/components/ui";
import { EstimateForm } from "@/components/estimate-form";
import { services } from "@/content/services";
import { site } from "@/content/site";
import { breadcrumbSchema, pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Contact — tell us what you are working on",
  description:
    "Start a project review with four fields: name, phone, optional email, and a short description. Phone and email contact details, process expectations, and privacy information.",
  path: "/contact",
});

export default function ContactPage() {
  const schema = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
  ]);

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us what you are working on"
        intro="Four fields is enough to start. We use them to check coverage and fit, then tell you what the next conversation should cover — including if the answer is no."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        primary={
          <a href="#estimate-form" className="btn btn-primary">
            Go to the form
            <Arrow />
          </a>
        }
        secondary={
          <a href={site.phone.href} className="btn btn-outline">
            <PhoneIcon />
            Call {site.phone.display}
          </a>
        }
      />

      <Section>
        <div className="container-std grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-16">
          <div>
            <SectionHead
              eyebrow="Direct contact"
              title="Ways to reach the team"
              body="A phone call is fastest for an active deadline. The form is best when you want to explain a project in writing."
            />

            <dl className="mt-8 divide-y divide-border border-y border-border">
              <div className="grid gap-1 py-4 sm:grid-cols-[0.4fr_0.6fr]">
                <dt className="text-[0.6875rem] font-semibold tracking-[0.14em] text-muted uppercase">Phone</dt>
                <dd>
                  <a href={site.phone.href} className="font-medium text-heading hover:text-accent-strong">
                    {site.phone.display}
                  </a>
                  <p className="mt-1 text-xs leading-relaxed text-muted">{site.phone.note}</p>
                </dd>
              </div>
              <div className="grid gap-1 py-4 sm:grid-cols-[0.4fr_0.6fr]">
                <dt className="text-[0.6875rem] font-semibold tracking-[0.14em] text-muted uppercase">Email</dt>
                <dd>
                  <a href={`mailto:${site.email.display}`} className="font-medium text-heading hover:text-accent-strong">
                    {site.email.display}
                  </a>
                  <p className="mt-1 text-xs leading-relaxed text-muted">{site.email.note}</p>
                </dd>
              </div>
              <div className="grid gap-1 py-4 sm:grid-cols-[0.4fr_0.6fr]">
                <dt className="text-[0.6875rem] font-semibold tracking-[0.14em] text-muted uppercase">Coverage</dt>
                <dd>
                  <p className="font-medium text-heading">{site.markets.label}</p>
                  <p className="mt-1 text-xs leading-relaxed text-muted">
                    Coverage is confirmed during intake rather than assumed from a city list.
                  </p>
                </dd>
              </div>
              <div className="grid gap-1 py-4 sm:grid-cols-[0.4fr_0.6fr]">
                <dt className="text-[0.6875rem] font-semibold tracking-[0.14em] text-muted uppercase">Form handling</dt>
                <dd>
                  <p className="font-medium text-heading">Secure server-side capture</p>
                  <p className="mt-1 text-xs leading-relaxed text-muted">
                    Validated on the server and stored in a database so the request is not lost. Optional webhook forwarding is
                    configured server-side.
                  </p>
                </dd>
              </div>
            </dl>

            <div className="mt-8 border border-border bg-background-alt p-5">
              <p className="text-[0.6875rem] font-semibold tracking-[0.14em] text-accent-strong uppercase">What to expect</p>
              <ul className="mt-3 space-y-2.5">
                {[
                  "Your request is reviewed by a person, not auto-approved.",
                  "If it is in scope, the next step is a fit call covering coverage, basis, and timing.",
                  "If it is not a fit, you get a direct answer and the reason.",
                  "Documents are requested in one consolidated list, not drip-fed.",
                ].map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-text">
                    <Check className="mt-1 shrink-0 text-accent-strong" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-xs leading-relaxed text-muted">
                We do not publish a callback window because no verified service level has been supplied. If timing is critical, call and
                say so.
              </p>
            </div>

            <div className="mt-6">
              <Disclosure>
                Demonstration build: the phone number uses a reserved 555 range and the email uses a reserved .example domain. Replace
                both with verified, monitored contact details before launch. See the{" "}
                <Link href="/content-status" className="link-inline">
                  verification log
                </Link>
                .
              </Disclosure>
            </div>

            <div className="mt-8">
              <p className="text-[0.6875rem] font-semibold tracking-[0.14em] text-muted uppercase">Looking for a specific service?</p>
              <ul className="mt-3 grid gap-2">
                {services.map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={`/services/${service.slug}`}
                      className="flex items-center justify-between border border-border bg-surface px-4 py-3 text-sm font-medium text-heading transition-colors hover:border-border-strong hover:text-accent-strong"
                    >
                      {service.navLabel}
                      <Arrow />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div id="estimate-form-wrapper">
            <EstimateForm />
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="border border-border bg-surface p-5">
                <p className="text-[0.6875rem] font-semibold tracking-[0.14em] text-heading uppercase">Privacy</p>
                <p className="mt-2 text-xs leading-relaxed text-muted">
                  Submissions are stored to review your request and are not sold. Do not include account numbers or sensitive financial
                  documents.
                </p>
                <Link href="/privacy-policy" className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-accent-strong hover:text-heading">
                  Read the policy <Arrow />
                </Link>
              </div>
              <div className="border border-border bg-surface p-5">
                <p className="text-[0.6875rem] font-semibold tracking-[0.14em] text-heading uppercase">Brokers</p>
                <p className="mt-2 text-xs leading-relaxed text-muted">
                  Submitting for a client? Include the sponsor&apos;s contact details in the message and confirm you have their permission.
                </p>
              </div>
            </div>
            <div className="mt-6">
              <IconList
                items={[
                  "No service dropdown — describe the project in your own words.",
                  "Email stays optional; phone is required so we can reach you.",
                  "Hidden anti-spam controls and server-side validation protect the destination.",
                ]}
              />
            </div>
          </div>
        </div>
      </Section>

      <section className="border-t border-border bg-primary text-on-primary">
        <div className="container-std grid gap-6 py-12 sm:grid-cols-[1fr_auto] sm:items-center">
          <div>
            <Eyebrow invert>Prefer a conversation?</Eyebrow>
            <p className="mt-3 max-w-2xl font-display text-[1.6rem] leading-snug text-on-primary">
              Call with the address and the stage. We can usually tell you whether it is worth a full review.
            </p>
          </div>
          <a href={site.phone.href} className="btn btn-invert">
            <PhoneIcon />
            Call {site.phone.display}
          </a>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}
