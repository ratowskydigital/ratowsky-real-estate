import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Fair Housing & Equal Opportunity",
  description:
    "Ratowsky Group at Compass is committed to fair housing. We comply with all federal, state, and local fair housing laws and the National Association of REALTORS® Code of Ethics.",
};

export default function FairHousingPage() {
  return (
    <section className="border-b border-hairline">
      <div className="max-w-prose mx-auto px-6 lg:px-10 py-section">
        <p className="eyebrow">Equal opportunity</p>
        <h1 className="mt-4 font-serif text-2xl tracking-tightest leading-[1.1]">
          Fair Housing &amp; Equal Opportunity
        </h1>

        <div className="mt-10 space-y-6 text-base text-ink-soft leading-relaxed">
          <p>
            Ratowsky Group at Compass is fully committed to the letter and the spirit of the
            United States policy for the achievement of equal housing opportunity throughout the
            nation. We comply with the Federal Fair Housing Act, the California Fair Employment and
            Housing Act, and all applicable state and local fair housing laws.
          </p>

          <p>
            We do not discriminate against any person because of race, color, religion, sex
            (including gender, gender identity, gender expression, sexual orientation, and
            pregnancy), national origin, ancestry, familial status, marital status, source of
            income (including housing vouchers), disability, veteran or military status, genetic
            information, age, or any other classification protected by law.
          </p>

          <h2 className="font-serif text-lg text-ink mt-10">REALTOR® Code of Ethics</h2>
          <p>
            Justin and Craig Ratowsky are REALTORS® and members of the National Association of
            REALTORS®. We are bound by the NAR Code of Ethics, which requires us to provide equal
            professional service to all clients and prospects, and to refrain from any activity that
            would be inconsistent with fair housing principles.
          </p>

          <h2 className="font-serif text-lg text-ink mt-10">If you experience discrimination</h2>
          <p>
            If you believe you have experienced housing discrimination, you have the right to file a
            complaint with the U.S. Department of Housing and Urban Development (HUD) at{" "}
            <a
              href="https://www.hud.gov/fairhousing"
              rel="noopener noreferrer"
              target="_blank"
              className="text-accent underline underline-offset-[3px] hover:text-accent-deep"
            >
              hud.gov/fairhousing
            </a>{" "}
            or with the California Civil Rights Department at{" "}
            <a
              href="https://calcivilrights.ca.gov/housing/"
              rel="noopener noreferrer"
              target="_blank"
              className="text-accent underline underline-offset-[3px] hover:text-accent-deep"
            >
              calcivilrights.ca.gov/housing
            </a>
            .
          </p>

          <h2 className="font-serif text-lg text-ink mt-10">Brokerage</h2>
          <p>
            Ratowsky Group is a team of real estate agents affiliated with Compass. Compass is a
            licensed real estate broker (License #01991628) and abides by Equal Housing Opportunity
            laws.
          </p>

          <h2 className="font-serif text-lg text-ink mt-10">Contact</h2>
          <p>
            Questions or concerns about how we apply these principles? Reach Justin Ratowsky at{" "}
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
