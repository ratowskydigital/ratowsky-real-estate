import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBlock } from "@/components/CtaBlock";
import { getInsight, getInsightSlugs, listInsights } from "@/content/insights";

type Params = { slug: string };

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

export function generateStaticParams(): Params[] {
  return getInsightSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getInsight(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.dek,
  };
}

function renderBody(body: string) {
  return body.split(/\n\n+/).map((para, i) => {
    const trimmed = para.trim();
    if (!trimmed) return null;
    if (trimmed.startsWith("**") && trimmed.endsWith("**") && !trimmed.slice(2, -2).includes("**")) {
      return (
        <h3 key={i} className="font-serif text-lg text-ink mt-10 mb-2">
          {trimmed.slice(2, -2)}
        </h3>
      );
    }
    const segments = trimmed.split(/(\*\*[^*]+\*\*)/g);
    return (
      <p key={i} className="text-base text-ink-soft mb-5 leading-relaxed">
        {segments.map((seg, j) =>
          seg.startsWith("**") && seg.endsWith("**") ? (
            <strong key={j} className="font-medium text-ink">
              {seg.slice(2, -2)}
            </strong>
          ) : (
            <span key={j}>{seg}</span>
          ),
        )}
      </p>
    );
  });
}

export default async function InsightDetailPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = getInsight(slug);
  if (!post) notFound();

  const others = listInsights()
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2);

  return (
    <>
      <article>
        <section className="border-b border-hairline">
          <div className="max-w-prose mx-auto px-6 lg:px-10 py-section">
            <p className="eyebrow">
              <Link href="/insights" className="hover:text-ink">
                Insights
              </Link>{" "}
              &middot; {post.category}
            </p>
            <h1 className="mt-4 font-serif text-2xl tracking-tightest leading-[1.1]">
              {post.title}
            </h1>
            <p className="mt-6 text-md text-ink-soft">{post.dek}</p>
            <p className="mt-8 text-xs text-muted tabular">
              {dateFormatter.format(new Date(post.publishedAt))} &middot; {post.readMinutes} min
              read
            </p>
          </div>
        </section>

        <section className="border-b border-hairline">
          <div className="max-w-prose mx-auto px-6 lg:px-10 py-section">{renderBody(post.body)}</div>
        </section>
      </article>

      {others.length > 0 && (
        <section className="border-b border-hairline">
          <div className="max-w-landing mx-auto px-6 lg:px-10 py-section">
            <p className="eyebrow">More insights</p>
            <ul className="mt-8 grid gap-6 md:grid-cols-2">
              {others.map((other) => (
                <li key={other.slug}>
                  <Link
                    href={`/insights/${other.slug}`}
                    className="block rounded-card border border-hairline bg-surface p-6 hover:bg-surface-warm hover:border-ink/20 transition-colors"
                  >
                    <p className="eyebrow">{other.category}</p>
                    <p className="mt-3 font-serif text-lg text-ink">{other.title}</p>
                    <p className="mt-2 text-sm text-muted">{other.dek}</p>
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
