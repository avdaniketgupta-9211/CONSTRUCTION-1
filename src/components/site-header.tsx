"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { services } from "@/content/services";
import { primaryNav, site } from "@/content/site";
import { Arrow } from "@/components/ui";

function Wordmark({ invert = false }: { invert?: boolean }) {
  return (
    <span className={`flex items-center gap-3 ${invert ? "text-on-primary" : "text-heading"}`}>
      <svg viewBox="0 0 40 40" aria-hidden="true" focusable="false" className="h-9 w-9 shrink-0">
        <rect x="0.75" y="0.75" width="38.5" height="38.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7 27.5 20 11l13 16.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="M12.5 27.5 20 18l7.5 9.5" fill="none" stroke="var(--color-accent)" strokeWidth="1.8" />
        <path d="M7 32.5h26" stroke="currentColor" strokeWidth="1.5" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="text-[0.95rem] font-semibold tracking-[0.16em] uppercase">Kestrel Ridge</span>
        <span className={`mt-1 text-[0.5625rem] font-medium tracking-[0.32em] uppercase ${invert ? "text-on-primary/60" : "text-muted"}`}>
          Capital
        </span>
      </span>
    </span>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const servicesButtonRef = useRef<HTMLButtonElement>(null);
  const servicesPanelRef = useRef<HTMLDivElement>(null);
  const mobileTriggerRef = useRef<HTMLButtonElement>(null);
  const mobilePanelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Close open menus when the user navigates with browser back/forward.
    const onPopState = () => {
      setServicesOpen(false);
      setMobileOpen(false);
    };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const panel = mobilePanelRef.current;
    panel?.querySelector<HTMLElement>("a, button")?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileOpen]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      if (servicesOpen) {
        setServicesOpen(false);
        servicesButtonRef.current?.focus();
      }
      if (mobileOpen) {
        setMobileOpen(false);
        mobileTriggerRef.current?.focus();
      }
    }
    function onPointerDown(event: PointerEvent) {
      if (!servicesOpen) return;
      const target = event.target as Node;
      if (servicesPanelRef.current?.contains(target) || servicesButtonRef.current?.contains(target)) return;
      setServicesOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [servicesOpen, mobileOpen]);

  const closeMenus = () => {
    setServicesOpen(false);
    setMobileOpen(false);
  };

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
  const servicesActive = pathname.startsWith("/services");

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-primary focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-on-primary"
      >
        Skip to main content
      </a>

      <div className="hidden border-b border-border bg-background-alt lg:block">
        <div className="container-wide flex h-9 items-center justify-between text-[0.7rem] font-medium tracking-[0.08em] text-muted uppercase">
          <p>{site.category} · {site.markets.label}</p>
          <div className="flex items-center gap-6">
            <a href={site.phone.href} className="inline-flex items-center gap-2 hover:text-heading">
              <span className="sr-only">Call us at</span>
              {site.phone.display}
            </a>
            <Link href="/content-status" className="hover:text-heading">
              Verification &amp; sources
            </Link>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 border-b bg-background/95 backdrop-blur transition-shadow ${
          scrolled ? "border-border shadow-[0_10px_30px_-24px_rgba(15,28,35,0.6)]" : "border-transparent"
        }`}
      >
        <div className="container-wide flex h-16 items-center justify-between gap-4 lg:h-[4.75rem]">
          <Link href="/" aria-label="Kestrel Ridge Capital — home" className="shrink-0">
            <Wordmark />
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
            <div className="relative">
              <button
                ref={servicesButtonRef}
                type="button"
                aria-expanded={servicesOpen}
                aria-controls="desktop-services-menu"
                onClick={() => setServicesOpen((open) => !open)}
                className={`inline-flex min-h-11 items-center gap-2 px-3 text-sm font-medium transition-colors hover:text-accent-strong ${
                  servicesActive ? "text-accent-strong" : "text-heading"
                }`}
              >
                Services
                <svg
                  viewBox="0 0 12 12"
                  aria-hidden="true"
                  className={`h-2.5 w-2.5 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path d="m2 4.5 4 4 4-4" />
                </svg>
              </button>
              {/* Mega-menu is rendered full-bleed below the header, outside this relative wrapper. */}
            </div>

            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenus}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`inline-flex min-h-11 items-center px-3 text-sm font-medium transition-colors hover:text-accent-strong ${
                  isActive(item.href) ? "text-accent-strong" : "text-heading"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={closeMenus}
              aria-current={isActive("/contact") ? "page" : undefined}
              className={`inline-flex min-h-11 items-center px-3 text-sm font-medium transition-colors hover:text-accent-strong ${
                isActive("/contact") ? "text-accent-strong" : "text-heading"
              }`}
            >
              Contact
            </Link>
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a href={site.phone.href} className="text-sm font-medium text-heading hover:text-accent-strong">
              {site.phone.display}
            </a>
            <Link href="/contact#estimate-form" className="btn btn-primary">
              Book an estimate
              <Arrow />
            </Link>
          </div>

          <button
            ref={mobileTriggerRef}
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center gap-2 border border-border-strong px-3 text-sm font-semibold text-heading lg:hidden"
            aria-label="Menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMobileOpen((open) => !open)}
          >
            <span className="flex flex-col gap-[3px]" aria-hidden="true">
              <span className={`block h-[1.5px] w-4 bg-current transition-transform ${mobileOpen ? "translate-y-[4.5px] rotate-45" : ""}`} />
              <span className={`block h-[1.5px] w-4 bg-current transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`block h-[1.5px] w-4 bg-current transition-transform ${mobileOpen ? "-translate-y-[4.5px] -rotate-45" : ""}`} />
            </span>
            {mobileOpen ? "Close" : "Menu"}
          </button>
        </div>

        {servicesOpen ? (
          <div
            ref={servicesPanelRef}
            id="desktop-services-menu"
            className="absolute inset-x-0 top-full z-50 hidden border-y border-border bg-surface shadow-[0_30px_60px_-30px_rgba(15,28,35,0.45)] lg:block"
          >
            <div className="container-wide grid grid-cols-[1.65fr_1fr]">
              <div className="py-6 pr-8">
                <p className="text-[0.6875rem] font-semibold tracking-[0.16em] text-muted uppercase">Financing by project stage</p>
                <ul className="mt-4 grid gap-1 sm:grid-cols-2 lg:grid-cols-1">
                  {services.map((service) => (
                    <li key={service.slug}>
                      <Link
                        href={`/services/${service.slug}`}
                        onClick={closeMenus}
                        className="group flex items-start gap-3 rounded-xs p-2.5 transition-colors hover:bg-background-alt"
                      >
                        <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-accent" />
                        <span>
                          <span className="block text-sm font-semibold text-heading group-hover:text-accent-strong">
                            {service.navLabel}
                          </span>
                          <span className="mt-0.5 block text-[0.8125rem] leading-snug text-muted">{service.tagline}</span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/services"
                  onClick={closeMenus}
                  className="mt-4 inline-flex items-center gap-2 border-t border-border pt-4 text-sm font-semibold text-primary hover:text-accent-strong"
                >
                  Compare all services <Arrow />
                </Link>
              </div>
              <div className="border-l border-border bg-background-alt py-6 pl-8">
                <p className="text-[0.6875rem] font-semibold tracking-[0.16em] text-muted uppercase">Helpful next</p>
                <ul className="mt-4 space-y-3 text-sm">
                  <li>
                    <Link href="/how-it-works" className="font-medium text-heading hover:text-accent-strong">
                      How the process works
                    </Link>
                    <p className="mt-1 text-[0.8125rem] leading-snug text-muted">What we ask for, and what happens after you submit.</p>
                  </li>
                  <li>
                    <Link href="/services#chooser" className="font-medium text-heading hover:text-accent-strong">
                      Not sure which fits?
                    </Link>
                    <p className="mt-1 text-[0.8125rem] leading-snug text-muted">Two questions narrow it down.</p>
                  </li>
                  <li>
                    <Link href="/case-studies" className="font-medium text-heading hover:text-accent-strong">
                      Scenario library
                    </Link>
                    <p className="mt-1 text-[0.8125rem] leading-snug text-muted">Illustrative profiles by project stage.</p>
                  </li>
                  <li>
                    <Link href="/faq" className="font-medium text-heading hover:text-accent-strong">
                      Common questions
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ) : null}

        {mobileOpen ? (
          <div
            ref={mobilePanelRef}
            id="mobile-navigation"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            className="absolute inset-x-0 top-full z-40 h-[calc(100dvh-4rem)] overflow-y-auto overscroll-contain border-t border-border bg-background pb-32 lg:hidden"
          >
            <div className="container-std py-6">
              <nav aria-label="Mobile primary">
                <ul className="divide-y divide-border border-y border-border">
                  <li>
                    <Link href="/services" onClick={closeMenus} className="flex min-h-14 items-center justify-between py-3 text-lg font-medium text-heading">
                      All services
                      <Arrow />
                    </Link>
                  </li>
                  <li>
                    <button
                      type="button"
                      aria-expanded={mobileServicesOpen}
                      aria-controls="mobile-services-panel"
                      onClick={() => setMobileServicesOpen((open) => !open)}
                      className="flex min-h-14 w-full items-center justify-between py-3 text-left text-lg font-medium text-heading"
                    >
                      Services by stage
                      <svg
                        viewBox="0 0 12 12"
                        aria-hidden="true"
                        className={`h-3 w-3 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                      >
                        <path d="m2 4.5 4 4 4-4" />
                      </svg>
                    </button>
                    <div id="mobile-services-panel" hidden={!mobileServicesOpen} className="pb-3">
                      <ul className="space-y-1">
                        {services.map((service) => (
                          <li key={service.slug}>
                            <Link
                              href={`/services/${service.slug}`}
                              onClick={closeMenus}
                              className="flex min-h-11 flex-col justify-center border-l-2 border-border px-4 py-2.5 text-sm hover:border-accent hover:text-accent-strong"
                            >
                              <span className="block font-semibold text-heading">{service.navLabel}</span>
                              <span className="mt-1 block text-[0.8125rem] leading-snug text-muted">{service.tagline}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                  {primaryNav.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={closeMenus}
                        aria-current={isActive(item.href) ? "page" : undefined}
                        className={`flex min-h-14 items-center justify-between py-3 text-lg font-medium ${
                          isActive(item.href) ? "text-accent-strong" : "text-heading"
                        }`}
                      >
                        {item.label}
                        <Arrow />
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link
                      href="/contact"
                      onClick={closeMenus}
                      aria-current={isActive("/contact") ? "page" : undefined}
                      className={`flex min-h-14 items-center justify-between py-3 text-lg font-medium ${
                        isActive("/contact") ? "text-accent-strong" : "text-heading"
                      }`}
                    >
                      Contact
                      <Arrow />
                    </Link>
                  </li>
                </ul>
              </nav>

              <div className="mt-6 grid gap-3">
                <Link href="/contact#estimate-form" onClick={closeMenus} className="btn btn-primary w-full">
                  Book an estimate
                  <Arrow />
                </Link>
                <a href={site.phone.href} className="btn btn-outline w-full">
                  Call {site.phone.display}
                </a>
              </div>

              <p className="mt-6 text-xs leading-relaxed text-muted">
                {site.category}. {site.markets.label}. Program details are illustrative and not an offer to lend.
              </p>
            </div>
          </div>
        ) : null}
      </header>
    </>
  );
}
