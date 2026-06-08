import { signatureCaseStudy } from "@/lib/site";
import { ButtonLink } from "./Button";
import { StatCard } from "./StatCard";

export function SignatureCaseStudy() {
  const cs = signatureCaseStudy;
  return (
    <section className="border-b border-hairline">
      <div className="max-w-landing mx-auto px-6 lg:px-10 py-section grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <p className="eyebrow">Signature case study</p>
          <h2 className="mt-4 font-serif text-2xl leading-tight tracking-tightest">
            Zillow estimated {cs.zillowEstimate}.
            <span className="block text-muted">We sold it for {cs.soldPrice}.</span>
          </h2>
          <p className="mt-6 text-md text-ink-soft max-w-md">
            A waterfront home on {cs.neighborhood}. Started with a Compass Private Exclusive to
            test demand, then ran a targeted campaign to high-net-worth buyers, and timed the
            public release to create competition.
          </p>
          <div className="mt-8">
            <ButtonLink href="/sold-stories" variant="secondary">
              Read the full breakdown
            </ButtonLink>
          </div>
        </div>

        <div className="lg:col-span-7 grid grid-cols-2 gap-4">
          <StatCard label="Sold price" value={cs.soldPrice} />
          <StatCard label="Over asking" value={cs.overAsking} />
          <StatCard label="Offers received" value={String(cs.offers)} hint={`${cs.allCash} all cash`} />
          <StatCard label="Days on market" value={String(cs.daysOnMarket)} />
        </div>
      </div>
    </section>
  );
}
