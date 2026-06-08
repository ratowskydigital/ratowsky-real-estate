import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Callout } from "@/components/Callout";
import { CtaBlock } from "@/components/CtaBlock";
import { DroneBreak } from "@/components/DroneBreak";
import { JsonLd, buildFaqPageSchema, buildBreadcrumbSchema } from "@/components/JsonLd";
import { pickDroneImage } from "@/lib/drone";
import {
  communities,
  getCommunity,
  getCommunitySlugs,
} from "@/content/communities";
import { site } from "@/lib/site";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getCommunitySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = getCommunity(slug);
  if (!c) return {};
  const title = `${c.name} — ${c.parentCity} Community Brief`;
  return {
    title,
    description: c.oneLine,
    alternates: { canonical: `${site.url}/communities/${c.slug}` },
    openGraph: {
      title,
      description: c.oneLine,
      url: `${site.url}/communities/${c.slug}`,
      type: "article",
      images: c.heroImage ? [{ url: c.heroImage }] : undefined,
    },
  };
}

export default async function CommunityDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const c = getCommunity(slug);
  if (!c) notFound();

  const related = c.related
    .map((s) => communities.find((other) => other.slug === s))
    .filter((x): x is (typeof communities)[number] => Boolean(x))
    .slice(0, 3);

  const breadcrumb = buildBreadcrumbSchema([
    { name: "Home", url: site.url },
    { name: "Communities", url: `${site.url}/communities` },
    { name: c.name, url: `${site.url}/communities/${c.slug}` },
  ]);

  const faqSchema = c.faqs.length > 0 ? buildFaqPageSchema(c.faqs) : null;

  // Hero image: explicit per-community heroImage if defined, otherwise a mood-matched drone shot.
  const heroBg = c.heroImage
    ? { src: c.heroImage, alt: c.heroAlt ?? `${c.name}, Huntington Beach.` }
    : pickDroneImage(`community-${c.slug}`, c.slug === "huntington-harbour" ? "harbour" : "ocean");

  return (
    <>
      <JsonLd data={breadcrumb} />
      {faqSchema && <JsonLd data={faqSchema} />}

      {/* Hero with drone or explicit photo background */}
      <section className="relative isolate overflow-hidden border-b border-hairline bg-surface-deep">
        <Image
          src={heroBg.src}
          alt={heroBg.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-55"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-surface-deep/85 via-surface-deep/55 to-surface-deep/95"
        />
        <div className="relative max-w-prose mx-auto px-6 lg:px-10 py-section text-white min-h-[420px] md:min-h-[520px] flex flex-col justify-end">
          <p className="font-sans font-medium uppercase text-xs tracking-label text-white/80">
            <Link href="/communities" className="hover:text-white">
              Communities
            </Link>{" "}
            &middot; {c.parentCity}
          </p>
          <h1 className="mt-4 font-serif text-2xl tracking-tightest leading-[1.05]">{c.name}</h1>
          <p className="mt-6 text-md text-white/85 italic">{c.oneLine}</p>
        </div>
      </section>

      {/* Direct-answer block (LLM-citation friendly, light surface) */}
      <section className="border-b border-hairline">
        <div className="max-w-prose mx-auto px-6 lg:px-10 py-section">
          <p className="eyebrow">Direct answer</p>
          <p className="mt-4 text-md text-ink-soft leading-relaxed">{c.directAnswer}</p>
          <p className="mt-8 text-xs text-muted tabular">
            Last updated {c.lastUpdated} &middot; Status: {c.status}
          </p>
        </div>
      </section>

      {/* Sections */}
      {c.sections.map((sec) => (
        <section key={sec.id} id={sec.id} className="border-b border-hairline scroll-mt-20">
          <div className="max-w-prose mx-auto px-6 lg:px-10 py-section">
            {sec.eyebrow && <p className="eyebrow">{sec.eyebrow}</p>}
            <h2 className="mt-4 font-serif text-xl tracking-tightest leading-tight">
              {sec.heading}
            </h2>
            <div className="mt-6 space-y-5 text-base text-ink-soft leading-relaxed">
              {sec.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            {sec.bullets && (
              <div className="mt-8">
                {sec.bullets.title && (
                  <p className="font-sans font-medium text-ink mb-3">{sec.bullets.title}</p>
                )}
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

      {/* Island / sub-area table */}
      {c.islandTable && c.islandTable.length > 0 && (
        <section className="border-b border-hairline">
          <div className="max-w-prose mx-auto px-6 lg:px-10 py-section">
            <p className="eyebrow">Sub-areas at a glance</p>
            <h2 className="mt-4 font-serif text-xl tracking-tightest">
              {c.name}, by sub-neighborhood.
            </h2>
            <ul className="mt-8 divide-y divide-hairline">
              {c.islandTable.map((row) => (
                <li key={row.name} className="py-5 grid gap-2 md:grid-cols-[200px_1fr] md:gap-8">
                  <p className="font-sans font-medium text-ink">{row.name}</p>
                  <p className="text-base text-ink-soft">{row.profile}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* FAQ */}
      {c.faqs.length > 0 && (
        <section className="border-b border-hairline">
          <div className="max-w-prose mx-auto px-6 lg:px-10 py-section">
            <p className="eyebrow">Frequently asked</p>
            <h2 className="mt-4 font-serif text-xl tracking-tightest">
              {c.name} — answers to the questions buyers and sellers ask first.
            </h2>
            <div className="mt-8 divide-y divide-hairline">
              {c.faqs.map((f, i) => (
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
      {c.sources.length > 0 && (
        <section className="border-b border-hairline">
          <div className="max-w-prose mx-auto px-6 lg:px-10 py-section">
            <p className="eyebrow">Sources &amp; local citations</p>
            <h2 className="mt-4 font-serif text-xl tracking-tightest">
              Where the verifiable claims on this page come from.
            </h2>
            <ul className="mt-6 space-y-3 text-sm text-ink-soft">
              {c.sources.map((s, i) => (
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
              Qualitative claims framed as agent insight reflect Ratowsky Group&rsquo;s direct
              experience working this market and are not represented as third-party verified data.
            </p>
          </div>
        </section>
      )}

      {/* Related communities */}
      {related.length > 0 && (
        <section className="border-b border-hairline">
          <div className="max-w-landing mx-auto px-6 lg:px-10 py-section">
            <p className="eyebrow">Adjacent communities</p>
            <ul className="mt-8 grid gap-6 md:grid-cols-3">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link
                    href={`/communities/${r.slug}`}
                    className="block rounded-card border border-hairline bg-surface-warm p-6 hover:border-accent/40 transition-colors"
                  >
                    <p className="font-serif text-lg text-ink">{r.name}</p>
                    <p className="mt-2 text-sm text-muted">{r.oneLine}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <CtaBlock
        eyebrow={c.cta.eyebrow}
        title={c.cta.title}
        body={c.cta.body}
        primaryHref={c.cta.primaryHref}
        primaryLabel={c.cta.primaryLabel}
      />
    </>
  );
}
