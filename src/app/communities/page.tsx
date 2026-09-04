import type { Metadata } from "next";
import Link from "next/link";
import { CtaBlock } from "@/components/CtaBlock";
import { JsonLd, buildBreadcrumbSchema } from "@/components/JsonLd";
import { cities } from "@/content/cities";
import { communities, getChildren, getTopLevelInCity } from "@/content/communities";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Communities — Huntington Beach Neighborhood Briefs",
  description:
    "Ratowsky Group community briefs for Huntington Beach: Huntington Harbour and all five islands plus the Mainland, Seacliff, Edwards Hill, Brightwater, Bolsa Landmark, the Downtown Pier District, Sunset Beach, and Dutch Haven Marina. Local diligence, market dynamics, and the playbook we use on every transaction.",
  alternates: { canonical: `${site.url}/communities` },
};

export default function CommunitiesHubPage() {
  const citiesWithCommunities = cities.filter((c) => getTopLevelInCity(c.slug).length > 0);
  const total = communities.length;

  const breadcrumb = buildBreadcrumbSchema([
    { name: "Home", url: site.url },
    { name: "Communities", url: `${site.url}/communities` },
  ]);

  const listSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Huntington Beach community briefs by Ratowsky Group at Compass",
    itemListElement: communities.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      url: `${site.url}/communities/${c.slug}`,
    })),
  };

  return (
    <>
      <JsonLd data={breadcrumb} />
      <JsonLd data={listSchema} />

      <section className="border-b border-hairline">
        <div className="max-w-prose mx-auto px-6 lg:px-10 py-section">
          <p className="eyebrow">Communities</p>
          <h1 className="mt-4 font-serif text-2xl tracking-tightest leading-[1.1]">
            {total} Huntington Beach communities, in detail.
          </h1>
          <p className="mt-6 text-md text-ink-soft">
            Each brief below is the consolidated local-knowledge document we hand a serious buyer or
            seller before the first walkthrough. Where the data is verifiable, we cite the source. Where
            it is qualitative, we mark it as agent insight. Where we do not know, we say so. Every
            community here also carries a mapped coverage area, so the listings that appear on its page
            are the listings that actually sit inside the boundary the page describes.
          </p>
          <p className="mt-4 text-sm text-muted">
            Looking for a city rather than a neighborhood?{" "}
            <Link href="/cities" className="text-accent hover:text-accent-deep underline underline-offset-[3px]">
              See all {cities.length} Orange County cities we work.
            </Link>
          </p>
        </div>
      </section>

      {citiesWithCommunities.map((city) => {
        const topLevel = getTopLevelInCity(city.slug);
        return (
          <section key={city.slug} className="border-b border-hairline">
            <div className="max-w-landing mx-auto px-6 lg:px-10 py-section">
              <div className="flex flex-wrap items-baseline justify-between gap-4">
                <p className="eyebrow">{city.name}</p>
                <Link href={`/cities/${city.slug}`} className="text-sm text-accent hover:text-accent-deep">
                  {city.name} city brief →
                </Link>
              </div>
              <ul className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {topLevel.map((c) => {
                  const children = getChildren(c.slug);
                  return (
                    <li key={c.slug} className="flex flex-col">
                      <Link
                        href={`/communities/${c.slug}`}
                        className="flex-1 rounded-card border border-hairline bg-surface-warm p-7 hover:border-accent/40 transition-colors"
                      >
                        <h2 className="font-serif text-lg leading-tight tracking-tightest">{c.name}</h2>
                        <p className="mt-3 text-sm text-ink-soft">{c.oneLine}</p>
                        <p className="mt-6 text-sm text-accent">
                          {c.status === "published" ? "Read the full brief →" : "See current status →"}
                        </p>
                      </Link>
                      {children.length > 0 && (
                        <ul className="mt-3 flex flex-wrap gap-2 px-1">
                          {children.map((k) => (
                            <li key={k.slug}>
                              <Link
                                href={`/communities/${k.slug}`}
                                className="inline-block rounded-full border border-hairline px-3 py-1 text-xs text-ink-soft hover:border-accent/40 hover:text-ink"
                              >
                                {k.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </section>
        );
      })}

      <CtaBlock
        title="Looking at a specific community? Tell us which one."
        body="If your timeline is the next 6 to 12 months, the conversation starts now, not at listing day. We will pull active and off-market Compass inventory for the right water orientation, the right school zone, or the right vessel size."
      />
    </>
  );
}
