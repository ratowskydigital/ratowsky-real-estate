import { Hero } from "@/components/Hero";
import { ProofStrip } from "@/components/ProofStrip";
import { SignatureCaseStudy } from "@/components/CaseStudy";
import { Neighborhoods } from "@/components/Neighborhoods";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { CtaBlock } from "@/components/CtaBlock";
import { Callout } from "@/components/Callout";
import { DroneBreak } from "@/components/DroneBreak";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProofStrip />

      <section className="border-b border-hairline">
        <div className="max-w-prose mx-auto px-6 lg:px-10 py-section">
          <p className="eyebrow">Strategy over effort</p>
          <h2 className="mt-4 font-serif text-2xl leading-tight tracking-tightest">
            Most homes are listed.
            <span className="block text-muted">Ours are launched.</span>
          </h2>
          <div className="mt-8 space-y-6 text-md text-ink-soft">
            <p>
              Ratowsky Group runs every listing through the same three-phase Compass marketing
              system that took a Trinidad Island waterfront from a $2.45M Zillow estimate to a
              $3,925,000 sale in eight days, with twelve offers on the table and eight of them all
              cash.
            </p>
            <p>
              Phase one is a Compass Private Exclusive — a quiet test of the market with our
              high-net-worth network before a single public dollar is spent. Phase two is a
              targeted demand campaign across Compass, paid social, and the local agent network.
              Phase three is a timed public release that converts demand into competition.
            </p>
            <p>
              The internet gives sellers an estimate. We build the audience that turns it into a
              result.
            </p>
          </div>

          <div className="mt-10">
            <Callout title="What we tell sellers">
              The first seven days on market are the most expensive days you will ever own. Get
              pricing, presentation, and exposure right or pay for it later. We plan all three
              before a single photo is taken.
            </Callout>
          </div>
        </div>
      </section>

      <DroneBreak
        seed="home-strategy-break"
        mood="harbour"
        eyebrow="The Ratowsky Group case file"
        quote="Zillow said $2.45M. We sold it for $3,925,000 — twelve offers, eight all cash, eight days on market."
        attribution="Trinidad Island, Huntington Harbour"
        height="md"
      />

      <SignatureCaseStudy />

      <DroneBreak
        seed="home-neighborhoods-break"
        mood="sand"
        eyebrow="Where we work"
        quote="Born and raised in HB. We know which dock fits a 50-foot boat and which streets take water in a king tide."
        height="sm"
      />

      <Neighborhoods />
      <NewsletterSignup />

      <CtaBlock
        title="Thinking about selling? Let's talk strategy first."
        body="A 30-minute call to walk your home, your timing, and what the current Huntington Beach market is actually paying for what you have."
        secondaryHref="/about"
        secondaryLabel="Meet the team"
      />
    </>
  );
}
