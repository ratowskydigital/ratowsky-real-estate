import Link from "next/link";
import { listPublishedCommunities } from "@/content/communities";

const numberWords = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen"];

export function Neighborhoods() {
  const communities = listPublishedCommunities().filter((c) => !c.parentCommunitySlug);
  const count = numberWords[communities.length] ?? String(communities.length);
  return (
    <section className="border-b border-hairline">
      <div className="max-w-landing mx-auto px-6 lg:px-10 py-section">
        <div className="max-w-2xl">
          <p className="eyebrow">Where we work</p>
          <h2 className="mt-4 font-serif text-2xl leading-tight tracking-tightest">
            {count.charAt(0).toUpperCase() + count.slice(1)} Huntington Beach communities, in detail.
          </h2>
          <p className="mt-4 text-ink-soft text-md">
            Born and raised in HB. We know which dock fits a 50-foot boat, which streets flood in a
            king tide, and which buyers move when a new Compass listing hits the network first.
          </p>
        </div>
        <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {communities.map((c) => (
            <li key={c.slug}>
              <Link
                href={`/communities/${c.slug}`}
                className="block rounded-card border border-hairline bg-surface-warm p-6 hover:border-accent/40 transition-colors"
              >
                <p className="font-serif text-lg text-ink">{c.name}</p>
                <p className="mt-2 text-sm text-muted">{c.oneLine}</p>
                {c.status === "stub" && (
                  <p className="mt-3 text-xs text-muted uppercase tracking-label">
                    Brief in progress
                  </p>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
