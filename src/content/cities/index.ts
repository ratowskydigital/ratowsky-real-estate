import type { City } from "../communities/_types";
import { huntingtonBeach } from "./huntington-beach";
import { newportBeach } from "./newport-beach";
import { newportCoast } from "./newport-coast";
import { coronaDelMar } from "./corona-del-mar";
import { sealBeach } from "./seal-beach";
import { fountainValley } from "./fountain-valley";
import { costaMesa } from "./costa-mesa";
import { irvine } from "./irvine";
import { westminster } from "./westminster";
import { danaPoint } from "./dana-point";
import { sanClemente } from "./san-clemente";
import { lagunaBeach } from "./laguna-beach";
import { sanJuanCapistrano } from "./san-juan-capistrano";

// -----------------------------------------------------------------------------
// All 13 Orange County cities Ratowsky Group covers. Every city is a full,
// published brief: overview, sub-areas, how it trades, diligence, the HB
// connection, FAQs, and sources. HB is the primary market and gets the
// featured treatment on /cities.
//
// Adding a city: create ./<slug>.ts exporting a City, import it here, add a
// matching GeoArea in src/content/geo (the geo:check script enforces that),
// and the /cities/[slug] route, sitemap, and hub pick it up automatically.
//
// Keep `status` honest. Anything that is not "published" is noindexed by the
// route and left out of the sitemap, so a half-written page never deranks
// the site again.
// -----------------------------------------------------------------------------
export const cities: City[] = [
  huntingtonBeach,
  newportBeach,
  newportCoast,
  coronaDelMar,
  sealBeach,
  fountainValley,
  costaMesa,
  irvine,
  westminster,
  danaPoint,
  sanClemente,
  lagunaBeach,
  sanJuanCapistrano,
];

// -----------------------------------------------------------------------------
// Lookup helpers
// -----------------------------------------------------------------------------
export function getCitySlugs(): string[] {
  return cities.map((c) => c.slug);
}

export function getCity(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}

export function listPublishedCities(): City[] {
  return cities.filter((c) => c.status === "published");
}

export function getPrimaryMarket(): City | undefined {
  return cities.find((c) => c.isPrimaryMarket);
}
