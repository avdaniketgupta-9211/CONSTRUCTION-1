import Link from "next/link";
import { services } from "@/content/services";
import { site } from "@/content/site";
import { Arrow } from "@/components/ui";

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "How it works", href: "/how-it-works" },
  { label: "Scenario library", href: "/case-studies" },
  { label: "Contact", href: "/contact" },
];

const resourceLinks = [
  { label: "Resource center", href: "/resources" },
  { label: "Questions & answers", href: "/faq" },
  { label: "Verification & sources", href: "/content-status" },
];

const legalLinks = [
  { label: "Privacy policy", href: "/privacy-policy" },
  { label: "Terms of use", href: "/terms" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="container-wide py-14 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <p className="flex items-center gap-3">
              <svg viewBox="0 0 40 40" aria-hidden="true" className="h-10 w-10 text-heading">
                <rect x="0.75" y="0.75" width="38.5" height="38.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <path d="M7 27.5 20 11l13 16.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
                <path d="M12.5 27.5 20 18l7.5 9.5" fill="none" stroke="var(--color-accent)" strokeWidth="1.8" />
                <path d="M7 32.5h26" stroke="currentColor" strokeWidth="1.5" />
              </svg>
              <span className="flex flex-col leading-none">
                <span className="text-base font-semibold tracking-[0.16em] uppercase">Kestrel Ridge</span>
                <span className="mt-1 text-[0.5625rem] font-medium tracking-[0.32em] text-muted uppercase">Capital</span>
              </span>
            </p>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">{site.description}</p>
            <div className="mt-6 space-y-2 text-sm">
              <p>
                <span className="text-muted">Phone: </span>
                <a href={site.phone.href} className="font-medium text-heading hover:text-accent-strong">
                  {site.phone.display}
                </a>
              </p>
              <p>
                <span className="text-muted">Email: </span>
                <a href={`mailto:${site.email.display}`} className="font-medium text-heading hover:text-accent-strong">
                  {site.email.display}
                </a>
              </p>
              <p className="text-muted">{site.markets.label}</p>
            </div>
            <a href="/contact#estimate-form" className="btn btn-primary mt-7">
              Book an estimate
              <Arrow />
            </a>
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            <nav aria-label="Services">
              <h2 className="font-sans text-[0.6875rem] font-semibold tracking-[0.16em] text-heading uppercase">Services</h2>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <Link href="/services" className="font-medium text-heading hover:text-accent-strong">
                    All services
                  </Link>
                </li>
                {services.map((service) => (
                  <li key={service.slug}>
                    <Link href={`/services/${service.slug}`} className="text-muted hover:text-accent-strong">
                      {service.navLabel}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <nav aria-label="Company">
              <h2 className="font-sans text-[0.6875rem] font-semibold tracking-[0.16em] text-heading uppercase">Company</h2>
              <ul className="mt-4 space-y-3 text-sm">
                {companyLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-muted hover:text-accent-strong">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <h2 className="mt-8 font-sans text-[0.6875rem] font-semibold tracking-[0.16em] text-heading uppercase">
                Resources
              </h2>
              <ul className="mt-4 space-y-3 text-sm">
                {resourceLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-muted hover:text-accent-strong">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <nav aria-label="Legal">
              <h2 className="font-sans text-[0.6875rem] font-semibold tracking-[0.16em] text-heading uppercase">Legal</h2>
              <ul className="mt-4 space-y-3 text-sm">
                {legalLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-muted hover:text-accent-strong">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-8 border border-border bg-background p-4">
                <p className="text-[0.6875rem] font-semibold tracking-[0.14em] text-heading uppercase">Site status</p>
                <p className="mt-2 text-xs leading-relaxed text-muted">
                  Demonstration build. Contact details and legal copy are placeholders pending verification.
                </p>
                <Link href="/content-status" className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-accent-strong hover:text-heading">
                  Review verification log <Arrow />
                </Link>
              </div>
            </nav>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <p className="max-w-4xl text-xs leading-relaxed text-muted">{site.disclosure}</p>
          <div className="mt-6 flex flex-col gap-3 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} {site.legalName}. All rights reserved.
            </p>
            <p>Photography and video licensed via Pexels. Credited in the verification log.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
