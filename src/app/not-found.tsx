import Link from "next/link";
import type { Metadata } from "next";
import { Arrow, Eyebrow } from "@/components/ui";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "Page not found",
  description: "This page does not exist. Use the site index to find services, process details, or the estimate form.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="bg-background">
      <div className="container-std py-20 sm:py-28">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <Eyebrow>404 — page not found</Eyebrow>
            <h1 className="display-page mt-5">That page is not on this site.</h1>
            <p className="mt-5 measure text-[1.0625rem] leading-relaxed text-muted">
              The link may be outdated or mistyped. Everything below is a real page — no placeholder anchors.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/" className="btn btn-primary">
                Back to home
                <Arrow />
              </Link>
              <Link href="/contact#estimate-form" className="btn btn-outline">
                Book an estimate
              </Link>
            </div>
          </div>
          <nav aria-label="Site sections" className="border border-border bg-surface p-6">
            <p className="text-[0.6875rem] font-semibold tracking-[0.14em] text-muted uppercase">Services</p>
            <ul className="mt-3 space-y-2">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link href={`/services/${service.slug}`} className="flex items-center justify-between py-1.5 text-sm text-heading hover:text-accent-strong">
                    {service.navLabel}
                    <Arrow />
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[0.6875rem] font-semibold tracking-[0.14em] text-muted uppercase">More</p>
            <ul className="mt-3 grid grid-cols-2 gap-2 text-sm">
              {[
                { label: "Services overview", href: "/services" },
                { label: "How it works", href: "/how-it-works" },
                { label: "Scenario library", href: "/case-studies" },
                { label: "Resources", href: "/resources" },
                { label: "FAQ", href: "/faq" },
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
                { label: "Verification log", href: "/content-status" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-muted hover:text-accent-strong">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
}
