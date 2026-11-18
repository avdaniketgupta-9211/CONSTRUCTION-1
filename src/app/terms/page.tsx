import Link from "next/link";
import { Disclosure, PageHero, Section } from "@/components/ui";
import { site } from "@/content/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Terms of use",
  description:
    "Terms governing use of the Kestrel Ridge Capital website, including the no-offer disclosure, informational content, and limitations. Development draft.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of use"
        intro="The rules for using this website and the limits of the information it contains. This is a development draft pending review by qualified counsel."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Terms of use" }]}
      />
      <Section>
        <div className="container-std max-w-3xl">
          <Disclosure>
            DRAFT — pending legal review. Governing-law, limitation-of-liability, and entity-identification provisions must be finalized
            by counsel for the operating jurisdiction before launch.
          </Disclosure>

          <div className="mt-10 space-y-9">
            <section>
              <h2 className="display-section text-[1.6rem]">1. Informational purpose only</h2>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-text">
                This website describes proposed financing programs for general information. Nothing on it is an offer to lend, a
                solicitation, a commitment to fund, or a guarantee of approval. Program availability, eligibility, and structure are
                determined only through a written proposal and underwriting.
              </p>
            </section>

            <section>
              <h2 className="display-section text-[1.6rem]">2. No financial, legal, or tax advice</h2>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-text">
                Content on this site, including guides and scenario profiles, is not legal, tax, accounting, or investment advice. You
                should consult your own professional advisors before entering into any financing transaction.
              </p>
            </section>

            <section>
              <h2 className="display-section text-[1.6rem]">3. Illustrative content</h2>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-text">
                The scenario library contains illustrative project profiles. They are not testimonials, not descriptions of completed
                transactions, and contain no verified performance data. Any figures, where present, describe the scenario only.
              </p>
            </section>

            <section>
              <h2 className="display-section text-[1.6rem]">4. Eligibility and regulated activity</h2>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-text">
                The programs described are intended for investment-property transactions involving business entities or experienced
                investors. Consumer-purpose and owner-occupied lending is not offered through this website. Licensing, registration, and
                disclosure requirements depend on the jurisdiction in which the operating business is authorized, and those details have
                not been supplied for publication.
              </p>
            </section>

            <section>
              <h2 className="display-section text-[1.6rem]">5. Use of the site</h2>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-text">
                You agree not to misuse the site, submit false or misleading information, attempt to disrupt the service, or use automated
                means to submit the contact form. Submissions may be rate limited or rejected.
              </p>
            </section>

            <section>
              <h2 className="display-section text-[1.6rem]">6. Intellectual property</h2>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-text">
                Site design, copy, and original graphics belong to the site operator. Photography is licensed from third parties and used
                under those licenses; it may not be extracted and reused. See the{" "}
                <Link href="/content-status" className="link-inline">
                  verification and sources log
                </Link>{" "}
                for image credits.
              </p>
            </section>

            <section>
              <h2 className="display-section text-[1.6rem]">7. Availability and changes</h2>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-text">
                The site is provided as-is. Content, programs, and these terms may change without notice. Demonstration contact details
                published here are placeholders and may not connect to a monitored inbox or line.
              </p>
            </section>

            <section>
              <h2 className="display-section text-[1.6rem]">8. Contact</h2>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-text">
                Questions about these terms can be sent to{" "}
                <a href={`mailto:${site.email.display}`} className="link-inline">
                  {site.email.display}
                </a>
                . Verified business identity, registered address, and any required licensing disclosures must be inserted before this site
                is used commercially.
              </p>
            </section>
          </div>
        </div>
      </Section>
    </>
  );
}
