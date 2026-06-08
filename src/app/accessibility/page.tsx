import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description:
    "Ratowsky Group accessibility statement — our commitment to WCAG 2.1 AA standards and equal access to digital information about real estate.",
};

export default function AccessibilityPage() {
  return (
    <section className="border-b border-hairline">
      <div className="max-w-prose mx-auto px-6 lg:px-10 py-section">
        <p className="eyebrow">Legal</p>
        <h1 className="mt-4 font-serif text-2xl tracking-tightest leading-[1.1]">
          Accessibility Statement
        </h1>
        <p className="mt-3 text-xs text-muted tabular">Last updated: April 2026</p>

        <div className="mt-10 space-y-6 text-base text-ink-soft leading-relaxed">
          <p>
            Ratowsky Group is committed to providing a website that is accessible to the widest
            possible audience, regardless of ability. We work to meet the Web Content Accessibility
            Guidelines (WCAG) 2.1 Level AA standard.
          </p>

          <h2 className="font-serif text-lg text-ink mt-10">Our commitments</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Color contrast ratios of at least 4.5:1 for body copy.</li>
            <li>Keyboard-navigable layouts with visible focus indicators.</li>
            <li>Alternative text on meaningful images.</li>
            <li>Semantic HTML for screen-reader compatibility.</li>
            <li>Forms with clearly labeled fields and accessible error messaging.</li>
            <li>Respect for reduced-motion preferences.</li>
          </ul>

          <h2 className="font-serif text-lg text-ink mt-10">Reporting an issue</h2>
          <p>
            If you encounter content on this site that is not accessible to you, or if you would
            like real estate information delivered in an alternative format (large print, audio, or
            in person), please reach out and we will address it promptly.
          </p>

          <p>
            Email{" "}
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
