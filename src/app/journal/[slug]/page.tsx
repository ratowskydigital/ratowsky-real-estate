import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBlock } from "@/components/CtaBlock";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import {
  getJournalPost,
  getJournalSlugs,
  listJournalPosts,
} from "@/content/journal";

type Params = { slug: string };

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

// ---------------------------------------------------------------------------
// Static generation
// ---------------------------------------------------------------------------

export function generateStaticParams(): Params[] {
  return getJournalSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getJournalPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.dek,
    openGraph: {
      title: post.title,
      description: post.dek,
      type: "article",
      publishedTime: post.publishedAt,
      ...(post.featuredImage
        ? { images: [{ url: post.featuredImage, alt: post.featuredImageAlt ?? post.title }] }
        : {}),
    },
  };
}

// ---------------------------------------------------------------------------
// Body renderer
// Supports:
//   **heading on its own line** → <h3>
//   **inline bold**             → <strong>
//   > blockquote                → <blockquote>
//   Blank-line-separated paragraphs
// ---------------------------------------------------------------------------

function renderBody(body: string) {
  const blocks = body.split(/\n\n+/);

  return blocks.map((block, i) => {
    const trimmed = block.trim();
    if (!trimmed) return null;

    // Blockquote — line starting with >
    if (trimmed.startsWith("> ")) {
      return (
        <blockquote
          key={i}
          className="border-l-4 border-accent pl-6 py-1 my-8 text-ink font-medium text-md leading-relaxed italic"
        >
          {trimmed.slice(2)}
        </blockquote>
      );
    }

    // Standalone **heading** — entire block wrapped in **
    if (
      trimmed.startsWith("**") &&
      trimmed.endsWith("**") &&
      !trimmed.slice(2, -2).includes("**")
    ) {
      return (
        <h3
          key={i}
          className="font-serif text-xl text-ink mt-12 mb-3 leading-tight tracking-tightest"
        >
          {trimmed.slice(2, -2)}
        </h3>
      );
    }

    // Paragraph with optional inline **bold**
    const segments = trimmed.split(/(\*\*[^*]+\*\*)/g);
    return (
      <p key={i} className="text-base lg:text-[17px] text-ink-soft mb-6 leading-[1.75]">
        {segments.map((seg, j) =>
          seg.startsWith("**") && seg.endsWith("**") ? (
            <strong key={j} className="font-semibold text-ink">
              {seg.slice(2, -2)}
            </strong>
          ) : (
            <span key={j}>{seg}</span>
          )
        )}
      </p>
    );
  });
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default async function JournalPostPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = getJournalPost(slug);
  if (!post) notFound();

  const related = listJournalPosts()
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2);

  return (
    <>
      <article itemScope itemType="https://schema.org/BlogPosting">
        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline: post.title,
              description: post.dek,
              datePublished: post.publishedAt,
              author: {
                "@type": "Person",
                name: "Justin Ratowsky",
                url: "https://ratowskyrealestate.com/about",
              },
              publisher: {
                "@type": "Organization",
                name: "Ratowsky Group at Compass",
                url: "https://ratowskyrealestate.com",
              },
              ...(post.featuredImage
                ? { image: `https://ratowskyrealestate.com${post.featuredImage}` }
                : {}),
            }),
          }}
        />

        {/* Hero */}
        <section className="border-b border-hairline">
          <div className="max-w-prose mx-auto px-6 lg:px-10 py-section">
            <p className="eyebrow">
              <Link href="/journal" className="hover:text-ink transition-colors">
                Journal
              </Link>
              &nbsp;&middot;&nbsp;{post.category}
            </p>
            <h1
              itemProp="headline"
              className="mt-4 font-serif text-2xl lg:text-[2rem] tracking-tightest leading-[1.1]"
            >
              {post.title}
            </h1>
            <p className="mt-5 text-md text-ink-soft leading-relaxed" itemProp="description">
              {post.dek}
            </p>
            <p className="mt-8 text-xs text-muted tabular">
              <time dateTime={post.publishedAt} itemProp="datePublished">
                {dateFormatter.format(new Date(post.publishedAt))}
              </time>
              &nbsp;&middot;&nbsp;{post.readMinutes} min read&nbsp;&middot;&nbsp;
              <span itemProp="author">Justin Ratowsky</span>
            </p>
          </div>
        </section>

        {/* Featured image */}
        {post.featuredImage && (
          <div className="border-b border-hairline">
            <div className="max-w-[900px] mx-auto px-6 lg:px-10 py-8">
              <div className="relative aspect-[16/7] rounded-xl overflow-hidden">
                <Image
                  src={post.featuredImage}
                  alt={post.featuredImageAlt ?? post.title}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 900px) 100vw, 900px"
                />
              </div>
            </div>
          </div>
        )}

        {/* Body */}
        <section className="border-b border-hairline" itemProp="articleBody">
          <div className="max-w-prose mx-auto px-6 lg:px-10 py-section">
            {renderBody(post.body)}
          </div>
        </section>

        {/* Author byline */}
        <section className="border-b border-hairline">
          <div className="max-w-prose mx-auto px-6 lg:px-10 py-8">
            <div className="flex items-start gap-4">
              <div className="size-12 rounded-full bg-canvas-tint border border-hairline flex-shrink-0 flex items-center justify-center text-ink-soft text-lg font-serif">
                J
              </div>
              <div>
                <p className="font-medium text-ink text-sm">Justin Ratowsky</p>
                <p className="text-sm text-ink-soft mt-0.5">
                  Ratowsky Group at Compass · Huntington Beach, CA ·{" "}
                  <a
                    href="mailto:justin.ratowsky@compass.com"
                    className="underline underline-offset-[3px] hover:text-accent-deep"
                  >
                    justin.ratowsky@compass.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </article>

      {/* Inline newsletter nudge */}
      <section className="border-b border-hairline bg-canvas-tint">
        <div className="max-w-prose mx-auto px-6 lg:px-10 py-10">
          <p className="font-medium text-ink mb-1">Get the next entry in your inbox.</p>
          <p className="text-sm text-ink-soft mb-5">
            Subscribe to The Tides — one email a month, no filler.
          </p>
          <NewsletterSignup compact />
        </div>
      </section>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="border-b border-hairline">
          <div className="max-w-landing mx-auto px-6 lg:px-10 py-section">
            <p className="eyebrow mb-8">More from the journal</p>
            <ul className="grid gap-6 md:grid-cols-2">
              {related.map((other) => (
                <li key={other.slug}>
                  <Link
                    href={`/journal/${other.slug}`}
                    className="block rounded-card border border-hairline bg-surface p-6 hover:bg-surface-warm hover:border-ink/20 transition-colors"
                  >
                    <p className="eyebrow">{other.category}</p>
                    <p className="mt-3 font-serif text-lg text-ink leading-tight">
                      {other.title}
                    </p>
                    <p className="mt-2 text-sm text-muted leading-relaxed">{other.dek}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <CtaBlock
        title="Looking on the OC coast? Let's talk specifics."
        body="A 30-minute call to walk your timing, your numbers, and the markets you care about."
      />
    </>
  );
}
