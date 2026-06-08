import type { Metadata } from "next";
import { CtaBlock } from "@/components/CtaBlock";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Craig and Justin Ratowsky — a father-son team at Compass with nearly 50 years of combined experience selling Huntington Beach and the Orange County coast.",
};

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-hairline">
        <div className="max-w-prose mx-auto px-6 lg:px-10 py-section">
          <p className="eyebrow">About</p>
          <h1 className="mt-4 font-serif text-2xl tracking-tightest leading-[1.1]">
            A father-son team. Two sets of eyes on every contract.
          </h1>
          <p className="mt-6 text-md text-ink-soft">
            Ratowsky Group is Craig and Justin Ratowsky — third-generation Southern California
            Realtors operating out of Compass&rsquo; Huntington Beach office at {" "}
            {site.address.street}. Combined, the team carries nearly 50 years of coastal Orange
            County experience, with deep relationships in Huntington Harbour, downtown HB, Sunset
            Beach, Seal Beach, and Newport Coast.
          </p>
        </div>
      </section>

      <section className="border-b border-hairline">
        <div className="max-w-prose mx-auto px-6 lg:px-10 py-section grid gap-12 md:grid-cols-2">
          <article>
            <p className="eyebrow">Craig Ratowsky</p>
            <h2 className="mt-3 font-serif text-xl tracking-tightest">Selling HB since 1977.</h2>
            <p className="mt-4 text-base text-ink-soft">
              Craig has been licensed in California since 1977 — 47-plus years of contracts,
              negotiations, market cycles, and quiet relationships that move properties before
              they ever hit the public market. His institutional memory is the team&rsquo;s deepest
              asset. DRE# {site.agents.craig.dre}.
            </p>
          </article>
          <article>
            <p className="eyebrow">Justin Ratowsky</p>
            <h2 className="mt-3 font-serif text-xl tracking-tightest">
              The marketing and tech side of the team.
            </h2>
            <p className="mt-4 text-base text-ink-soft">
              Justin has been licensed since 2017 and runs the team&rsquo;s digital strategy:
              Compass Private Exclusives, demand campaigns, AI-driven content systems, and the
              modern marketing reach that turns a listing into a market. Born and raised in
              Huntington Beach, with a wife and two kids in town. DRE# {site.agents.justin.dre}.
            </p>
          </article>
        </div>
      </section>

      <CtaBlock
        title="Want to put both of us to work on your sale?"
        body="The fastest first step is a 30-minute call. We will walk your home, your timing, and what the data says is realistic — before any commitment."
      />
    </>
  );
}
