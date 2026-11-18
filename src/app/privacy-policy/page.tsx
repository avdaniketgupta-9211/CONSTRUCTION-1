import Link from "next/link";
import { Disclosure, PageHero, Section } from "@/components/ui";
import { site } from "@/content/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Privacy policy",
  description:
    "How information submitted through the Kestrel Ridge Capital estimate form is collected, stored, and used. Development draft pending legal review.",
  path: "/privacy-policy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy policy"
        intro="This policy describes what this website actually does with the information you submit. It is a development draft and has not been reviewed by qualified counsel."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Privacy policy" }]}
      />
      <Section>
        <div className="container-std max-w-3xl">
          <Disclosure>
            DRAFT — pending legal review. The behaviour described below reflects the current implementation. A qualified attorney must
            review and approve this policy, and verified company details must be added, before launch.
          </Disclosure>

          <div className="mt-10 space-y-9">
            <section>
              <h2 className="display-section text-[1.6rem]">What this site collects</h2>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-text">
                The estimate form asks for four fields: name, phone number, an optional email address, and a description of what you
                need. On submission, the server also records the page path that submitted the form, a truncated browser user-agent
                string, and the request&apos;s network origin for abuse prevention.
              </p>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted">
                No payment details, government identifiers, or uploaded documents are collected through this form. Please do not include
                sensitive financial information in the message field.
              </p>
            </section>

            <section>
              <h2 className="display-section text-[1.6rem]">How it is used</h2>
              <ul className="mt-4 space-y-2.5 text-[0.9375rem] leading-relaxed text-text">
                <li>To review your request and respond using the contact details you provided.</li>
                <li>To protect the form from automated abuse, including rate limiting by network origin.</li>
                <li>To maintain an internal record of inquiries for review and follow-up.</li>
              </ul>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted">
                Submission data is not sold. Form contents are not sent to any analytics platform.
              </p>
            </section>

            <section>
              <h2 className="display-section text-[1.6rem]">Cookies and analytics</h2>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-text">
                This site does not set cookies and does not load a third-party analytics platform. Interaction events are handled by a
                local, privacy-safe helper that stores no personal data and only emits events to an in-page data layer if a future,
                approved analytics container is added.
              </p>
            </section>

            <section>
              <h2 className="display-section text-[1.6rem]">Storage, sharing, and retention</h2>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-text">
                Submissions are stored in a PostgreSQL database managed for this site. If an optional notification webhook is configured
                by the operator, the same four fields and the source path are forwarded to that endpoint. No other third parties receive
                submission data.
              </p>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted">
                A specific retention period has not been set for this demonstration environment. The operating business must define and
                document a retention and deletion policy before launch.
              </p>
            </section>

            <section>
              <h2 className="display-section text-[1.6rem]">Your choices</h2>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-text">
                Email is optional. You may ask for your submission to be corrected or deleted by contacting{" "}
                <a href={`mailto:${site.email.display}`} className="link-inline">
                  {site.email.display}
                </a>
                . Note that the published email is a placeholder on a reserved domain until a monitored inbox is verified.
              </p>
            </section>

            <section>
              <h2 className="display-section text-[1.6rem]">Children</h2>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-text">
                This site is intended for business users and is not directed to children under 13.
              </p>
            </section>

            <section>
              <h2 className="display-section text-[1.6rem]">Changes and contact</h2>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-text">
                Material changes to this policy will be published on this page. Questions can be sent to the address above. Verified
                company name, registered address, and any required regulatory identifiers are pending and must be added before launch.
                See the{" "}
                <Link href="/content-status" className="link-inline">
                  verification log
                </Link>{" "}
                and the{" "}
                <Link href="/terms" className="link-inline">
                  terms of use
                </Link>
                .
              </p>
            </section>
          </div>
        </div>
      </Section>
    </>
  );
}
