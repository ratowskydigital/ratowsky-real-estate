import type { Metadata } from "next";
import Link from "next/link";
import { CtaBlock } from "@/components/CtaBlock";

export const metadata: Metadata = {
  title: "Sold Stories",
  description:
    "Real Ratowsky Group case studies from Huntington Beach and Huntington Harbour — what we did, why it worked, and what the numbers actually were.",
};

type Story = {
  slug: string;
  neighborhood: string;
  headline: string;
  result: string;
  blurb: string;
};

const stories: Story[] = [
  {
    slug: "trinidad-island-waterfront",
    neighborhood: "Trinidad Island, Huntington Harbour",
    headline: "Zillow said $2.45M. We sold it for $3,925,000.",
    result: "12 offers · 8 all cash · 8 days on market · $643K over asking",
    blurb:
      "A waterfront launch executed through Compass Private Exclusive, a targeted demand campaign, and a timed public release.",
  },
];

export default function SoldStoriesPage() {
  return (
    <>
      <section className="border-b border-hairline">
        <div className="max-w-prose mx-auto px-6 lg:px-10 py-section">
          <p className="eyebrow">Sold stories</p>
          <h1 className="mt-4 font-serif text-2xl tracking-tightest leading-[1.1]">
            What strategy looks like when it actually works.
          </h1>
          <p className="mt-6 text-md text-ink-soft">
            Every case study below has the same structure: what the property was, what the
            market said it was worth, what we did differently, and what the final numbers were.
            No spin, no ego — just the playbook.
          </p>
        </div>
      </section>

      <section className="border-b border-hairline">
        <div className="max-w-landing mx-auto px-6 lg:px-10 py-section grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {stories.map((s) => (
            <Link
              key={s.slug}
              href={`/sold-stories/${s.slug}`}
              className="rounded-card border border-hairline bg-surface p-7 hover:border-ink/20 hover:bg-surface-warm transition-colors"
            >
              <p className="eyebrow">{s.neighborhood}</p>
              <h2 className="mt-3 font-serif text-lg leading-tight tracking-tightest">
                {s.headline}
              </h2>
              <p className="mt-4 text-sm text-muted tabular">{s.result}</p>
              <p className="mt-4 text-sm text-ink-soft">{s.blurb}</p>
              <p className="mt-6 text-sm text-accent-deep">Read the case study →</p>
            </Link>
          ))}
        </div>
      </section>

      <CtaBlock
        title="Have a property that deserves a real launch?"
        body="If your timeline is the next 6 months, the conversation starts now — not at listing day."
      />
    </>
  );
}
