import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for Ratowsky Group at Compass — how we collect, use, and protect personal information submitted through ratowskyrealestate.com.",
};

export default function PrivacyPage() {
  return (
    <section className="border-b border-hairline">
      <div className="max-w-prose mx-auto px-6 lg:px-10 py-section">
        <p className="eyebrow">Legal</p>
        <h1 className="mt-4 font-serif text-2xl tracking-tightest leading-[1.1]">
          Privacy Policy
        </h1>
        <p className="mt-3 text-xs text-muted tabular">Last updated: April 2026</p>

        <div className="mt-10 space-y-6 text-base text-ink-soft leading-relaxed">
          <p>
            Ratowsky Group is a team of licensed California real estate agents affiliated with
            Compass. This privacy policy explains how we collect, use, and protect the information
            you provide through {site.url}.
          </p>

          <h2 className="font-serif text-lg text-ink mt-10">Information we collect</h2>
          <p>
            We collect information you voluntarily provide through our contact, newsletter, and
            home valuation forms — typically your name, email, phone, and details about a property
            or market interest. We do not buy or scrape personal information from third parties.
          </p>

          <h2 className="font-serif text-lg text-ink mt-10">How we use it</h2>
          <p>
            We use the information you submit to respond to your inquiry, send the market briefings
            you requested, and provide real estate services. We do not sell or rent your contact
            information to third parties. We may share information with our brokerage (Compass) and
            licensed service partners (e.g., escrow, lenders) when directly required to facilitate
            a transaction at your request.
          </p>

          <h2 className="font-serif text-lg text-ink mt-10">Cookies and analytics</h2>
          <p>
            This site uses minimal analytics to understand which pages are useful and how visitors
            arrive. We do not use cross-site tracking pixels or sell behavioral data.
          </p>

          <h2 className="font-serif text-lg text-ink mt-10">Your choices</h2>
          <p>
            You can unsubscribe from our newsletter at any time using the link in any issue. You
            can request access, correction, or deletion of your personal information at any time
            by emailing{" "}
            <a
              href={`mailto:${site.email}`}
              className="text-accent underline underline-offset-[3px] hover:text-accent-deep"
            >
              {site.email}
            </a>
            . California residents have additional rights under the California Consumer Privacy
            Act (CCPA) including the right to know, delete, and opt out of any sale or sharing of
            personal information.
          </p>

          <h2 className="font-serif text-lg text-ink mt-10">Contact</h2>
          <p>
            Questions about this policy? Reach Justin Ratowsky at{" "}
            <a
              href={`mailto:${site.email}`}
              className="text-accent underline underline-offset-[3px] hover:text-accent-deep"
            >
              {site.email}
            </a>{" "}
            or call{" "}
            <a
              href={site.phoneHref}
              className="text-accent underline underline-offset-[3px] hover:text-accent-deep tabular"
            >
              {site.phone}
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
