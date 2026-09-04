import type { City } from "../communities/_types";
import { CITY_PUBLISH_DATE, cityCta, countySources } from "./_shared";

export const sanJuanCapistrano: City = {
  slug: "san-juan-capistrano",
  name: "San Juan Capistrano",
  county: "Orange County",
  state: "California",
  stateCode: "CA",
  isCoastal: false,
  oneLine:
    "Mission-town heritage, equestrian estates in the Hunt Club, and a historic core a few minutes from the Dana Point coast.",
  directAnswer:
    "San Juan Capistrano is an inland city in southern Orange County, California, directly east of Dana Point and anchored by Mission San Juan Capistrano and the Los Rios Historic District, the oldest residential street in California. Inventory includes equestrian estates in the gated Hunt Club, hillside custom homes in Connemara, Hidden Mountain, and Marbella, master-planned tracts in Rancho San Juan and Pacifica San Juan, and condos and Spanish-style homes near the historic downtown and the Metrolink station.",
  status: "published",
  lastUpdated: CITY_PUBLISH_DATE,
  sections: [
    {
      id: "overview",
      eyebrow: "Overview",
      heading: "What San Juan Capistrano is, and why coastal owners keep discovering it.",
      paragraphs: [
        "San Juan Capistrano is the mission town at the south end of Orange County, a few minutes inland from Dana Point Harbor along Del Obispo and the 5. The historic core around the Mission and Los Rios Street is one of the most distinctive downtowns in Southern California, with a Metrolink station, restaurants, and the weekly farmers market. Around it, the city climbs into equestrian estates, gated hillside communities, and master-planned tracts, with a long-standing equestrian culture and open space on all sides.",
        "For our Huntington Beach clients, San Juan Capistrano is where land and privacy become affordable again without leaving the coast behind. It draws Harbour and Seacliff sellers who want acreage, horses, or a gated hillside estate, and downsizers who want a walkable historic town near the beach with a lower price tier than Dana Point or Laguna.",
      ],
    },
    {
      id: "sub-areas",
      eyebrow: "Sub-areas",
      heading: "The San Juan Capistrano neighborhoods and how each trades.",
      bullets: {
        items: [
          "The Hunt Club. A guard-gated equestrian estate community with large lots, custom homes, riding trails, and the top of the city's price stack.",
          "Marbella. A gated golf-course community around the Marbella Country Club with custom and semi-custom homes.",
          "Connemara, Hidden Mountain, and Peppertree Bend. Gated and semi-rural hillside enclaves with custom homes on large lots and equestrian zoning on some parcels.",
          "Pacifica San Juan and Rancho San Juan. Master-planned tracts from the 2000s with newer construction, ocean-breeze hillsides, and special assessments.",
          "The historic core, Los Rios, and Mission area. Spanish-style homes, condos, and older cottages within walking distance of the Mission and the train.",
          "Ortega Highway corridor and the Capistrano Valley tracts. Established 1970s and 1980s neighborhoods with a range of single-family homes and townhomes, the city's entry tier.",
        ],
      },
    },
    {
      id: "how-it-trades",
      eyebrow: "How the market trades",
      heading: "What moves value in San Juan Capistrano.",
      paragraphs: [
        "Lot size and usable land lead, which is unusual in coastal Orange County. Equestrian zoning, flat pad area, and trail access carry premiums in the Hunt Club and the hillside enclaves. Gate status and view are next. In the master plans, floor plan, condition, and assessment burden decide the comp, as they do in Talega and Irvine.",
        "The city's historic and rural character is protected by planning rules that limit density, which keeps inventory tight and supports long-term values. Days on market on the estate tier run longer because the buyer pool for a specific equestrian or acreage property is small and often out of area.",
      ],
      callout: {
        title: "Agent insight",
        body: "Equestrian properties carry their own diligence: barn and arena permits, manure management and drainage, trail easements, and the zoning that allows horses at all. We have walked buyers through every one of those on real transactions and build them into the timeline before an offer.",
      },
    },
    {
      id: "diligence",
      eyebrow: "Before you commit",
      heading: "What to verify on a San Juan Capistrano property.",
      bullets: {
        items: [
          "Equestrian zoning, animal limits, and trail easements on any property marketed as horse-friendly.",
          "Mello-Roos and community facilities district assessments in Pacifica San Juan and other master plans. We are not tax professionals; confirm on the county tax bill and with your tax advisor.",
          "Flood zone status along San Juan Creek and Trabuco Creek.",
          "Slope and geotechnical history on hillside lots.",
          "Historic district rules for properties near Los Rios and the Mission.",
          "Association rules, dues, and gate access in the guard-gated communities.",
          "Capistrano Unified attendance boundaries, verified at the address.",
        ],
      },
    },
    {
      id: "hb-connection",
      eyebrow: "The HB connection",
      heading: "From Huntington Beach to San Juan Capistrano.",
      paragraphs: [
        "This move usually starts with a question about land. A Huntington Harbour or Seacliff owner wants acreage, horses, or a gated hillside estate that Huntington Beach cannot offer at any price, and San Juan Capistrano is where the equity buys it. We sequence the Huntington Beach sale for certainty, then work the Compass South County network for Hunt Club, Marbella, and hillside inventory that often trades before it is public.",
      ],
    },
  ],
  faqs: [
    {
      q: "What is the Hunt Club in San Juan Capistrano?",
      a: "A guard-gated equestrian estate community with large lots, custom homes, private riding trails, and equestrian facilities. It sits at the top of the city's price stack and draws buyers from across Southern California who want horses and privacy near the coast.",
    },
    {
      q: "Can I keep horses in San Juan Capistrano?",
      a: "On properties with the appropriate zoning, yes. The city has a long equestrian tradition and several neighborhoods are zoned for horses with trail access. Confirm zoning, animal limits, and facility permits for any specific property before purchase.",
    },
    {
      q: "How far is San Juan Capistrano from the beach?",
      a: "Dana Point Harbor and Doheny State Beach are a few minutes down Del Obispo Street. Many residents treat the coast as part of daily life while living inland with more land.",
    },
    {
      q: "Does San Juan Capistrano have Mello-Roos?",
      a: "Older neighborhoods generally do not. Newer master plans such as Pacifica San Juan carry community facilities district assessments. Confirm on the county tax bill for the specific parcel. We are not tax professionals; verify with your tax advisor.",
    },
    {
      q: "Which school district serves San Juan Capistrano?",
      a: "Capistrano Unified School District. Confirm attendance boundaries with the district for any specific address.",
    },
  ],
  sources: [
    { label: "City of San Juan Capistrano, official website", url: "https://sanjuancapistrano.org/" },
    { label: "Mission San Juan Capistrano", url: "https://www.missionsjc.com/" },
    { label: "Capistrano Unified School District", url: "https://capousd.org/" },
    ...countySources,
  ],
  cta: cityCta("San Juan Capistrano"),
};
