import type { CommunityCta, CommunitySource } from "../communities/_types";

/** Date stamp for the first full publish of every city brief. */
export const CITY_PUBLISH_DATE = "2026-09-04";

/** Standard seller-first CTA used on every city page unless the city overrides it. */
export function cityCta(cityName: string): CommunityCta {
  return {
    eyebrow: "Next step",
    title: `Curious what your ${cityName} home could sell for in today's market?`,
    body: `Craig and Justin Ratowsky are happy to put together a quick private home value review. No pressure, just useful information. Buying instead? Tell us the timeline and we will pull active and off-market Compass inventory for ${cityName} before you tour anything.`,
    primaryHref: "/home-value",
    primaryLabel: "Request a private home value review",
  };
}

/** Sources that apply to every Orange County market page. */
export const countySources: CommunitySource[] = [
  {
    label: "California Regional Multiple Listing Service (CRMLS), the MLS that feeds our listing data",
    url: "https://www.crmls.org/",
  },
  {
    label: "California Coastal Commission, Local Coastal Programs and coastal development permits",
    url: "https://www.coastal.ca.gov/",
  },
  {
    label: "FEMA Flood Map Service Center, address-level flood zone lookup",
    url: "https://msc.fema.gov/portal/home",
  },
  {
    label: "Orange County Treasurer-Tax Collector, property tax and Mello-Roos line items",
    url: "https://www.octreasurer.com/",
  },
];
