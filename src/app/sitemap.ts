import type { MetadataRoute } from "next";
import { cities } from "@/content/cities";
import { communities } from "@/content/communities";
import { insights } from "@/content/insights";
import { journalPosts } from "@/content/journal";
import { site } from "@/lib/site";

const staticPaths: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/sellers", priority: 0.9, changeFrequency: "monthly" },
  { path: "/buyers", priority: 0.9, changeFrequency: "monthly" },
  { path: "/home-value", priority: 0.9, changeFrequency: "monthly" },
  { path: "/luxury", priority: 0.8, changeFrequency: "monthly" },
  { path: "/cities", priority: 0.8, changeFrequency: "weekly" },
  { path: "/communities", priority: 0.8, changeFrequency: "weekly" },
  { path: "/insights", priority: 0.7, changeFrequency: "weekly" },
  { path: "/journal", priority: 0.6, changeFrequency: "weekly" },
  { path: "/sold-stories", priority: 0.7, changeFrequency: "monthly" },
  { path: "/about", priority: 0.7, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.7, changeFrequency: "yearly" },
  { path: "/the-tides", priority: 0.5, changeFrequency: "monthly" },
  { path: "/letter", priority: 0.4, changeFrequency: "yearly" },
  { path: "/listings", priority: 0.6, changeFrequency: "daily" },
  { path: "/fair-housing", priority: 0.2, changeFrequency: "yearly" },
  { path: "/accessibility", priority: 0.2, changeFrequency: "yearly" },
  { path: "/privacy", priority: 0.2, changeFrequency: "yearly" },
];

function dateOf(iso?: string): Date {
  const d = iso ? new Date(iso) : new Date();
  return Number.isNaN(d.getTime()) ? new Date() : d;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;

  const statics: MetadataRoute.Sitemap = staticPaths.map((s) => ({
    url: `${base}${s.path}`,
    changeFrequency: s.changeFrequency,
    priority: s.priority,
  }));

  // Only published pages go in the sitemap. Stubs and drafts are noindexed.
  const cityUrls: MetadataRoute.Sitemap = cities
    .filter((c) => c.status === "published")
    .map((c) => ({
      url: `${base}/cities/${c.slug}`,
      lastModified: dateOf(c.lastUpdated),
      changeFrequency: "monthly",
      priority: c.isPrimaryMarket ? 0.9 : 0.7,
    }));

  const communityUrls: MetadataRoute.Sitemap = communities
    .filter((c) => c.status === "published")
    .map((c) => ({
      url: `${base}/communities/${c.slug}`,
      lastModified: dateOf(c.lastUpdated),
      changeFrequency: "monthly",
      priority: c.parentCommunitySlug ? 0.6 : 0.8,
    }));

  const insightUrls: MetadataRoute.Sitemap = insights.map((i) => ({
    url: `${base}/insights/${i.slug}`,
    lastModified: dateOf(i.publishedAt),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const journalUrls: MetadataRoute.Sitemap = journalPosts.map((j) => ({
    url: `${base}/journal/${j.slug}`,
    lastModified: dateOf(j.publishedAt),
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [...statics, ...cityUrls, ...communityUrls, ...insightUrls, ...journalUrls];
}
