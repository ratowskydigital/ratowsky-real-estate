import type { Community } from "./_types";
import { huntingtonHarbour } from "./huntington-harbour";
import { oldSeacliff } from "./old-seacliff";
import { seacliffOnTheGreens } from "./seacliff-on-the-greens";
import { edwardsHill } from "./edwards-hill";
import { brightwater } from "./brightwater";
import { bolsaLandmark } from "./bolsa-landmark";
import { downtownPier } from "./downtown-pier";
import { sunsetBeach } from "./sunset-beach";
import { trinidadIsland } from "./trinidad-island";
import { davenportIsland } from "./davenport-island";
import { gilbertIsland } from "./gilbert-island";
import { humboldtIsland } from "./humboldt-island";
import { admiraltyIsland } from "./admiralty-island";
import { harbourMainland } from "./harbour-mainland";
import { dutchHavenMarina } from "./dutch-haven-marina";

// -----------------------------------------------------------------------------
// Stub helper — kept for future communities. A stub renders the "in-progress"
// template, is noindexed by the route, and is left out of the sitemap, so it
// can never derank the site. No stubs are live today: every community in the
// master list below is a full published brief.
// -----------------------------------------------------------------------------
export function communityStub(args: {
  slug: string;
  name: string;
  parentCity: string;
  parentCitySlug: string;
  parentCommunitySlug?: string;
  oneLine: string;
  directAnswer: string;
  related?: string[];
}): Community {
  return {
    slug: args.slug,
    name: args.name,
    parentCity: args.parentCity,
    parentCitySlug: args.parentCitySlug,
    parentCommunitySlug: args.parentCommunitySlug,
    oneLine: args.oneLine,
    directAnswer: args.directAnswer,
    status: "stub",
    lastUpdated: "2026-05-08",
    sections: [
      {
        id: "in-progress",
        eyebrow: "In progress",
        heading: `${args.name} deep-dive — coming soon.`,
        paragraphs: [
          `The full ${args.name} brief is being written by Ratowsky Group as the canonical local authority page. The short positioning above is the verified summary we are willing to publish today.`,
          "If you want a private read on this community before the long-form page is live, the contact form at the bottom of this page goes directly to Justin and Craig.",
        ],
      },
    ],
    faqs: [],
    sources: [],
    related: args.related ?? [],
    cta: {
      eyebrow: "Brief in progress",
      title: `Need a ${args.name} read before the page is published?`,
      body: "Send us the address, the timing, and the buyer or seller goal. We will respond with the current local intel within one business day.",
      primaryHref: "/contact",
      primaryLabel: "Request a private brief",
    },
  };
}

// -----------------------------------------------------------------------------
// Master list — all communities, all cities, all hierarchy levels.
// Order is for build-time only; render order is determined per-page.
// -----------------------------------------------------------------------------
export const communities: Community[] = [
  // Huntington Beach — top-level
  huntingtonHarbour,
  oldSeacliff,
  seacliffOnTheGreens,
  edwardsHill,
  brightwater,
  bolsaLandmark,
  downtownPier,
  sunsetBeach,
  dutchHavenMarina,

  // Huntington Harbour — sub-communities (islands + mainland)
  trinidadIsland,
  davenportIsland,
  gilbertIsland,
  humboldtIsland,
  admiraltyIsland,
  harbourMainland,
];

// -----------------------------------------------------------------------------
// Lookup helpers
// -----------------------------------------------------------------------------
export function getCommunitySlugs(): string[] {
  return communities.map((c) => c.slug);
}

export function getCommunity(slug: string): Community | undefined {
  return communities.find((c) => c.slug === slug);
}

export function listPublishedCommunities(): Community[] {
  return communities.filter((c) => c.status === "published");
}

// -----------------------------------------------------------------------------
// Hierarchy helpers
// -----------------------------------------------------------------------------

/** Communities whose parent is the given city slug AND have no parent community. */
export function getTopLevelInCity(citySlug: string): Community[] {
  return communities.filter(
    (c) => c.parentCitySlug === citySlug && !c.parentCommunitySlug,
  );
}

/** All communities (top-level and sub) within a city. */
export function getCommunitiesByCity(citySlug: string): Community[] {
  return communities.filter((c) => c.parentCitySlug === citySlug);
}

/** Sub-communities of a given parent community. */
export function getChildren(parentSlug: string): Community[] {
  return communities.filter((c) => c.parentCommunitySlug === parentSlug);
}

/**
 * Breadcrumb trail from city → community → (optional) sub-community.
 * Returns items ready to feed both the visual <Breadcrumb /> and JSON-LD.
 */
export function getBreadcrumb(slug: string): { name: string; href: string }[] {
  const c = getCommunity(slug);
  if (!c) return [];

  const trail: { name: string; href: string }[] = [
    { name: "Communities", href: "/communities" },
    { name: c.parentCity, href: `/cities/${c.parentCitySlug}` },
  ];

  // If this is a sub-community, insert the parent community in the trail.
  if (c.parentCommunitySlug) {
    const parent = getCommunity(c.parentCommunitySlug);
    if (parent) {
      trail.push({
        name: parent.name,
        href: `/communities/${parent.slug}`,
      });
    }
  }

  trail.push({ name: c.name, href: `/communities/${c.slug}` });
  return trail;
}

/** Convenience: communities to feature on the homepage grid. */
export function getFeaturedCommunities(limit = 6): Community[] {
  return listPublishedCommunities().slice(0, limit);
}
