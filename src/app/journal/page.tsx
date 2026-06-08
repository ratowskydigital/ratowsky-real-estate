import type { Metadata } from "next";
import Link from "next/link";
import { CtaBlock } from "@/components/CtaBlock";
import { listJournalPosts } from "@/content/journal";

export const metadata: Metadata = {
  title: "Journal — Stories from the field | Ratowsky Group",
  description:
    "Deal stories, field notes, and observations from working the Huntington Beach coast since 1977. Written by Justin and Craig Ratowsky.",
};

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

export default function JournalIndexPage() {
  const posts = listJournalPosts();

  return (
    <>
      {/* Header */}
      <section className="border-b border-hairline">
        <div className="max-w-prose mx-auto px-6 lg:px-10 py-section">
          <p className="eyebrow">Journal</p>
          <h1 className="mt-4 font-serif text-2xl lg:text-3xl tracking-tightest leading-[1.1]">
            Stories from the field.
          </h1>
          <p className="mt-6 text-md text-ink-soft">
            Deal narratives, market observations, and notes from 50 years of working the Huntington
            Beach coast. Not strategy briefs — those live in{" "}
            <Link href="/insights" className="underline underline-offset-[3px] hover:text-accent-deep">
              Insights
            </Link>
            . This is the longer read: what actually happened, and what it means.
          </p>
        </div>
      </section>

      {/* Post list */}
      <section className="border-b border-hairline">
        <div className="max-w-prose mx-auto px-6 lg:px-10 py-section">
          {posts.length === 0 ? (
            <p className="text-base text-ink-soft">First entry publishing soon.</p>
          ) : (
            <ul className="space-y-14">
              {posts.map((post) => (
                <li key={post.slug} className="border-b border-hairline pb-14 last:border-0 last:pb-0">
                  <p className="eyebrow">
                    {post.category}&nbsp;&middot;&nbsp;
                    <span className="tabular">
                      {dateFormatter.format(new Date(post.publishedAt))}
                    </span>
                    &nbsp;&middot;&nbsp;{post.readMinutes} min read
                  </p>

                  <h2 className="mt-3 font-serif text-xl lg:text-2xl tracking-tightest leading-[1.15]">
                    <Link
                      href={`/journal/${post.slug}`}
                      className="hover:text-accent-deep transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h2>

                  <p className="mt-4 text-base text-ink-soft leading-relaxed">{post.dek}</p>

                  <p className="mt-5">
                    <Link
                      href={`/journal/${post.slug}`}
                      className="text-accent underline underline-offset-[3px] hover:text-accent-deep"
                    >
                      Read the entry &rarr;
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
        title="Monthly market intel. One email."
        body="Subscribe to The Tides — Ratowsky Group's monthly letter for the Huntington Beach coast."
        primaryHref="/letter"
        primaryLabel="Subscribe"
        secondaryHref="/contact"
        secondaryLabel="Talk to Justin"
      />
    </>
  );
}
