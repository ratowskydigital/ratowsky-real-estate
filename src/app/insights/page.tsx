import type { Metadata } from "next";
import Link from "next/link";
import { CtaBlock } from "@/components/CtaBlock";
import { listInsights } from "@/content/insights";

export const metadata: Metadata = {
  title: "Insights — Coastal OC market intelligence",
  description:
    "Strategy briefs, market notes, and buyer/seller guides for Huntington Beach, Huntington Harbour, and the Orange County coast. Written by Ratowsky Group at Compass.",
};

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

export default function InsightsIndexPage() {
  const posts = listInsights();
  return (
    <>
      <section className="border-b border-hairline">
        <div className="max-w-prose mx-auto px-6 lg:px-10 py-section">
          <p className="eyebrow">Insights</p>
          <h1 className="mt-4 font-serif text-2xl tracking-tightest leading-[1.1]">
            Coastal Orange County market intelligence.
          </h1>
          <p className="mt-6 text-md text-ink-soft">
            Strategy briefs, neighborhood-level market notes, and the buyer/seller guides we wish
            existed when we were starting out. Written by humans, not algorithms — and updated as
            the market actually moves.
          </p>
        </div>
      </section>

      <section className="border-b border-hairline">
        <div className="max-w-prose mx-auto px-6 lg:px-10 py-section">
          {posts.length === 0 ? (
            <p className="text-base text-ink-soft">
              The first issues are publishing soon. Sign up for The Tides to get them in your inbox.
            </p>
          ) : (
            <ul className="space-y-12">
              {posts.map((post) => (
                <li key={post.slug} className="border-b border-hairline pb-12 last:border-0">
                  <p className="eyebrow">
                    {post.category} &middot;{" "}
                    <span className="tabular">{dateFormatter.format(new Date(post.publishedAt))}</span>{" "}
                    &middot; {post.readMinutes} min read
                  </p>
                  <h2 className="mt-3 font-serif text-xl tracking-tightest">
                    <Link href={`/insights/${post.slug}`} className="hover:text-accent-deep">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-3 text-base text-ink-soft">{post.dek}</p>
                  <p className="mt-4">
                    <Link
                      href={`/insights/${post.slug}`}
                      className="text-accent underline underline-offset-[3px] hover:text-accent-deep"
                    >
                      Read the brief &rarr;
                    </Link>
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <CtaBlock
        eyebrow="The Tides"
        title="One monthly read. No fluff."
        body="Subscribe to The Tides — our monthly market brief for the OC coast. Sent the first week of every month."
        primaryHref="/the-tides"
        primaryLabel="Subscribe"
        secondaryHref="/contact"
        secondaryLabel="Contact us"
      />
    </>
  );
}
