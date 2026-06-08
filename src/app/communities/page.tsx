import type { Metadata } from "next";
import Link from "next/link";
import { CtaBlock } from "@/components/CtaBlock";
import { communities } from "@/content/communities";

export const metadata: Metadata = {
  title: "Communities — Huntington Beach Coastal Neighborhoods",
  description:
    "Ratowsky Group community briefs for Huntington Beach: Huntington Harbour, Seacliff, Brightwater, Bolsa Landmark, Downtown Pier, and Sunset Beach. Local diligence, market dynamics, and the playbook we use on every transaction.",
};

export default function CommunitiesHubPage() {
  return (
    <>
      <section className="border-b border-hairline">
        <div className="max-w-prose mx-auto px-6 lg:px-10 py-section">
          <p className="eyebrow">Communities</p>
          <h1 className="mt-4 font-serif text-2xl tracking-tightest leading-[1.1]">
            Six coastal Huntington Beach communities, in detail.
          </h1>
          <p className="mt-6 text-md text-ink-soft">
            Each brief below is the consolidated local-knowledge document we hand a serious buyer
            or seller before the first walkthrough. Where the data is verifiable, we cite the
            source. Where it is qualitative, we mark it as agent insight. Where we do not know,
            we say so.
          </p>
        </div>
      </section>

      <section className="border-b border-hairline">
        <div className="max-w-landing mx-auto px-6 lg:px-10 py-section grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {communities.map((c) => (
            <Link
              key={c.slug}
              href={`/communities/${c.slug}`}
              className="rounded-card border border-hairline bg-surface-warm p-7 hover:border-accent/40 transition-colors"
            >
              <p className="eyebrow">
                {c.parentCity}
                {c.status === "stub" && " · Brief in progress"}
              </p>
              <h2 className="mt-3 font-serif text-lg leading-tight tracking-tightest">
                {c.name}
              </h2>
              <p className="mt-3 text-sm text-ink-soft">{c.oneLine}</p>
              <p className="mt-6 text-sm text-accent">
                {c.status === "published" ? "Read the full brief →" : "See current status →"}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <CtaBlock
        title="Looking at a specific community? Tell us which one."
        body="If your timeline is the next 6 to 12 months, the conversation starts now — not at listing day. We will pull active and off-market Compass inventory for the right water orientation, the right school zone, or the right vessel size."
      />
    </>
  );
}
