import type { Metadata } from "next";
import Link from "next/link";
import { CtaBlock } from "@/components/CtaBlock";
import { JsonLd, buildBreadcrumbSchema } from "@/components/JsonLd";
import { cities, getPrimaryMarket } from "@/content/cities";
import { getCommunitiesByCity } from "@/content/communities";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cities — Orange County Markets We Work",
  description:
    "Ratowsky Group at Compass market briefs for Huntington Beach and the Orange County cities around it: Newport Beach, Newport Coast, Corona del Mar, Seal Beach, Laguna Beach, Dana Point, San Clemente, and more.",
  alternates: { canonical: `${site.url}/cities` },
};

export default function CitiesHubPage() {
  const primary = getPrimaryMarket();
  const coastal = cities.filter((c) => !c.isPrimaryMarket && c.isCoastal);
  const inland = cities.filter((c) => !c.isPrimaryMarket && !c.isCoastal);

  const breadcrumb = buildBreadcrumbSchema([
    { name: "Home", url: site.url },
    { name: "Cities", url: `${site.url}/cities` },
  ]);

  const listSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Orange County cities served by Ratowsky Group at Compass",
    itemListElement: cities.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      url: `${site.url}/cities/${c.slug}`,
    })),
  };

  const Card = ({ c }: { c: (typeof cities)[number] }) => {
    const count = getCommunitiesByCity(c.slug).length;
    return (
      <Link
        href={`/cities/${c.slug}`}
        className="block h-full rounded-card border border-hairline bg-surface-warm p-7 hover:border-accent/40 transition-colors"
      >
        <p className="eyebrow">
          {c.county}
          {c.isPrimaryMarket && " · Home market"}
        </p>
        <h2 className="mt-3 font-serif text-lg leading-tight tracking-tightest">{c.name}</h2>
        <p className="mt-3 text-sm text-ink-soft">{c.oneLine}</p>
        <p className="mt-6 text-sm text-accent">
          {count > 0 ? `Read the brief · ${count} community pages →` : "Read the brief →"}
        </p>
      </Link>
    );
  };

  return (
    <>
      <JsonLd data={breadcrumb} />
      <JsonLd data={listSchema} />

      <section className="border-b border-hairline">
        <div className="max-w-prose mx-auto px-6 lg:px-10 py-section">
          <p className="eyebrow">Cities</p>
          <h1 className="mt-4 font-serif text-2xl tracking-tightest leading-[1.1]">
            Huntington Beach first. {cities.length - 1} Orange County cities around it.
          </h1>
          <p className="mt-6 text-md text-ink-soft">
            Huntington Beach is home. It is where Craig has worked since 1977 and where Justin was born
            and raised. The cities below are where our clients move to, move from, and ask us about
            every week. Each page is the same kind of brief we hand a serious buyer or seller before the
            first showing: what the market actually is, how it trades, and what to check before you
            commit.
          </p>
        </div>
      </section>

      {primary && (
        <section className="border-b border-hairline">
          <div className="max-w-landing mx-auto px-6 lg:px-10 py-section">
            <p className="eyebrow">Home market</p>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <Card c={primary} />
              <div className="rounded-card border border-hairline p-7">
                <p className="font-serif text-lg text-ink">Community pages inside Huntington Beach</p>
                <ul className="mt-4 grid gap-2 text-sm text-ink-soft sm:grid-cols-2">
                  {getCommunitiesByCity(primary.slug).map((k) => (
                    <li key={k.slug}>
                      <Link href={`/communities/${k.slug}`} className="hover:text-accent">
                        {k.parentCommunitySlug ? "— " : ""}
                        {k.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="border-b border-hairline">
        <div className="max-w-landing mx-auto px-6 lg:px-10 py-section">
          <p className="eyebrow">Coastal Orange County</p>
          <ul className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {coastal.map((c) => (
              <li key={c.slug}>
                <Card c={c} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-hairline">
        <div className="max-w-landing mx-auto px-6 lg:px-10 py-section">
          <p className="eyebrow">Inland Orange County</p>
          <ul className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {inland.map((c) => (
              <li key={c.slug}>
                <Card c={c} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBlock
        title="Not sure which city fits? That is the conversation we have most."
        body="Tell Craig and Justin Ratowsky what you want the next five years to look like. We will tell you which two or three markets actually deliver it, and what each one costs to get into."
        primaryLabel="Start the conversation"
      />
    </>
  );
}
