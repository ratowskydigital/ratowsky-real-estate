import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Callout } from "@/components/Callout";
import { CtaBlock } from "@/components/CtaBlock";
import { JsonLd, buildFaqPageSchema, buildBreadcrumbSchema } from "@/components/JsonLd";
import { pickDroneImage } from "@/lib/drone";
import { cities, getCity, getCitySlugs } from "@/content/cities";
import { getCommunitiesByCity, getTopLevelInCity, getChildren } from "@/content/communities";
import { getGeoArea } from "@/content/geo";
import { site } from "@/lib/site";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getCitySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const c = getCity(slug);
  if (!c) return {};
  const title = `${c.name} Real Estate — ${c.county} Market Brief`;
  return {
    title,
    description: c.oneLine,
    alternates: { canonical: `${site.url}/cities/${c.slug}` },
    // Never let a thin page get indexed. Published pages inherit the site default.
    robots: c.status === "published" ? undefined : { index: false, follow: true },
    openGraph: {
      title,
      description: c.oneLine,
      url: `${site.url}/cities/${c.slug}`,
      type: "article",
      images: c.heroImage ? [{ url: c.heroImage }] : undefined,
    },
  };
}

export default async function CityPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const c = getCity(slug);
  if (!c) notFound();

  const topLevel = getTopLevelInCity(c.slug);
  const allInCity = getCommunitiesByCity(c.slug);
  const geo = getGeoArea(c.slug);
  const sections = c.sections ?? [];
  const faqs = c.faqs ?? [];
  const sources = c.sources ?? [];

  const otherCities = cities.filter((x) => x.slug !== c.slug && x.status === "published").slice(0, 3);

  const breadcrumb = buildBreadcrumbSchema([
    { name: "Home", url: site.url },
    { name: "Cities", url: `${site.url}/cities` },
    { name: c.name, url: `${site.url}/cities/${c.slug}` },
  ]);

  const placeSchema = {
    "@context": "https://schema.org",
    "@type": "City",
    name: c.name,
    description: c.directAnswer,
    url: `${site.url}/cities/${c.slug}`,
    containedInPlace: { "@type": "AdministrativeArea", name: `${c.county}, ${c.state}` },
    ...(geo?.postalCodes && geo.postalCodes.length > 0 ? { postalCode: geo.postalCodes.join(", ") } : {}),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: site.fullName,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      postalCode: site.address.zip,
      addressCountry: "US",
    },
    areaServed: { "@type": "City", name: c.name },
  };

  const faqSchema = faqs.length > 0 ? buildFaqPageSchema(faqs) : null;

  const heroBg = c.heroImage
    ? { src: c.heroImage, alt: c.heroAlt ?? `${c.name}, California.` }
    : pickDroneImage(`city-${c.slug}`, c.slug === "huntington-beach" ? "harbour" : "ocean");

  return (
    <>
      <JsonLd data={breadcrumb} />
      <JsonLd data={placeSchema} />
      <JsonLd data={serviceSchema} />
      {faqSchema && <JsonLd data={faqSchema} />}

      {/* Hero */}
      <section className="relative isolate overflow-hidden border-b border-hairline bg-surface-deep">
        <Image src={heroBg.src} alt={heroBg.alt} fill priority sizes="100vw" className="object-cover opacity-55" />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-surface-deep/85 via-surface-deep/55 to-surface-deep/95"
        />
        <div className="relative max-w-prose mx-auto px-6 lg:px-10 py-section text-white min-h-[420px] md:min-h-[520px] flex flex-col justify-end">
          <p className="font-sans font-medium uppercase text-xs tracking-label text-white/80">
            <Link href="/cities" className="hover:text-white">
              Cities
            </Link>{" "}
            &middot; {c.county}
            {c.isPrimaryMarket && " · Home market"}
          </p>
          <h1 className="mt-4 font-serif text-2xl tracking-tightest leading-[1.05]">
            {c.name} real estate
          </h1>
          <p className="mt-6 text-md text-white/85 italic">{c.oneLine}</p>
        </div>
      </section>

      {/* Direct answer */}
      <section className="border-b border-hairline">
        <div className="max-w-prose mx-auto px-6 lg:px-10 py-section">
          <p className="eyebrow">Direct answer</p>
          <p className="mt-4 text-md text-ink-soft leading-relaxed">{c.directAnswer}</p>
          <p className="mt-8 text-xs text-muted tabular">
            Last updated {c.lastUpdated} &middot; {site.fullName} &middot; Craig Ratowsky DRE #
            {site.agents.craig.dre} &middot; Justin Ratowsky DRE #{site.agents.justin.dre}
          </p>
        </div>
      </section>

      {/* Long-form sections */}
      {sections.map((sec) => (
        <section key={sec.id} id={sec.id} className="border-b border-hairline scroll-mt-20">
          <div className="max-w-prose mx-auto px-6 lg:px-10 py-section">
            {sec.eyebrow && <p className="eyebrow">{sec.eyebrow}</p>}
            <h2 className="mt-4 font-serif text-xl tracking-tightest leading-tight">{sec.heading}</h2>
            {sec.paragraphs && sec.paragraphs.length > 0 && (
              <div className="mt-6 space-y-5 text-base text-ink-soft leading-relaxed">
                {sec.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            )}
            {sec.bullets && (
              <div className="mt-8">
                {sec.bullets.title && <p className="font-sans font-medium text-ink mb-3">{sec.bullets.title}</p>}
                <ul className="space-y-3 text-base text-ink-soft list-disc pl-5 marker:text-accent">
                  {sec.bullets.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
            {sec.callout && (
              <div className="mt-8">
                <Callout title={sec.callout.title}>{sec.callout.body}</Callout>
              </div>
            )}
          </div>
        </section>
      ))}

      {/* Communities in this city */}
      {topLevel.length > 0 && (
        <section className="border-b border-hairline">
          <div className="max-w-landing mx-auto px-6 lg:px-10 py-section">
            <p className="eyebrow">Communities in {c.shortName ?? c.name}</p>
            <h2 className="mt-4 font-serif text-xl tracking-tightest">
              {allInCity.length} {c.name} community briefs, written street by street.
            </h2>
            <ul className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {topLevel.map((community) => {
                const children = getChildren(community.slug);
                return (
                  <li key={community.slug}>
                    <Link
                      href={`/communities/${community.slug}`}
                      className="block h-full rounded-card border border-hairline bg-surface-warm p-6 hover:border-accent/40 transition-colors"
                    >
                      <p className="font-serif text-lg text-ink">{community.name}</p>
                      <p className="mt-2 text-sm text-muted">{community.oneLine}</p>
                      {children.length > 0 && (
                        <p className="mt-3 text-xs text-muted uppercase tracking-label">
                          {children.length} sub-areas: {children.map((k) => k.name).join(", ")}
                        </p>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      )}

      {/* FAQ */}
      {faqs.length > 0 && (
        <section className="border-b border-hairline">
          <div className="max-w-prose mx-auto px-6 lg:px-10 py-section">
            <p className="eyebrow">Frequently asked</p>
            <h2 className="mt-4 font-serif text-xl tracking-tightest">
              {c.name} — the questions buyers and sellers ask us first.
            </h2>
            <div className="mt-8 divide-y divide-hairline">
              {faqs.map((f, i) => (
                <details key={i} className="group py-5">
                  <summary className="cursor-pointer list-none flex items-start justify-between gap-4 font-sans font-medium text-ink">
                    <span className="flex-1">{f.q}</span>
                    <span
                      aria-hidden="true"
                      className="mt-1 text-accent text-lg leading-none transition-transform group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <div className="mt-3 text-base text-ink-soft leading-relaxed">{f.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Sources */}
      {sources.length > 0 && (
        <section className="border-b border-hairline">
          <div className="max-w-prose mx-auto px-6 lg:px-10 py-section">
            <p className="eyebrow">Sources &amp; local citations</p>
            <h2 className="mt-4 font-serif text-xl tracking-tightest">
              Where the verifiable claims on this page come from.
            </h2>
            <ul className="mt-6 space-y-3 text-sm text-ink-soft">
              {sources.map((s, i) => (
                <li key={i}>
                  <a
                    href={s.url}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="text-accent hover:text-accent-deep underline underline-offset-[3px] break-words"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs text-muted">
              Qualitative claims framed as agent insight reflect Ratowsky Group&rsquo;s direct experience
              working this market and are not represented as third-party verified data. Price ranges are
              general observations, move with the market, and are not an appraisal or a guarantee of value.
              We are not tax, legal, or financial professionals; consult the appropriate licensed advisor
              before making decisions on those topics.
            </p>
          </div>
        </section>
      )}

      {/* Other cities */}
      {otherCities.length > 0 && (
        <section className="border-b border-hairline">
          <div className="max-w-landing mx-auto px-6 lg:px-10 py-section">
            <p className="eyebrow">Other Orange County markets</p>
            <ul className="mt-8 grid gap-6 md:grid-cols-3">
              {otherCities.map((r) => (
                <li key={r.slug}>
                  <Link
                    href={`/cities/${r.slug}`}
                    className="block h-full rounded-card border border-hairline bg-surface-warm p-6 hover:border-accent/40 transition-colors"
                  >
                    <p className="font-serif text-lg text-ink">{r.name}</p>
                    <p className="mt-2 text-sm text-muted">{r.oneLine}</p>
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm">
              <Link href="/cities" className="text-accent hover:text-accent-deep underline underline-offset-[3px]">
                All {cities.length} cities we work
              </Link>
            </p>
          </div>
        </section>
      )}

      <CtaBlock
        eyebrow={c.cta?.eyebrow ?? "Next step"}
        title={c.cta?.title ?? `Thinking about ${c.name}? Start with a conversation.`}
        body={
          c.cta?.body ??
          "Reach out to Craig and Justin Ratowsky for a local, no-pressure real estate conversation."
        }
        primaryHref={c.cta?.primaryHref ?? "/contact"}
        primaryLabel={c.cta?.primaryLabel ?? "Start the conversation"}
        secondaryHref="/home-value"
        secondaryLabel="What's my home worth?"
      />
    </>
  );
}
