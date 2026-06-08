export type DroneImage = {
  src: string;
  alt: string;
  /** dominant feel — used by sections to bias selection */
  mood: "ocean" | "sand" | "harbour";
};

export const droneImages: DroneImage[] = [
  {
    src: "/images/drone/hb-pier-aerial.jpg",
    alt: "Top-down drone view of the Huntington Beach Pier with teal Pacific Ocean below.",
    mood: "ocean",
  },
  {
    src: "/images/drone/sand-overhead.jpg",
    alt: "Top-down drone view of a Huntington Beach surfer walking the sand at low tide.",
    mood: "sand",
  },
  {
    src: "/images/drone/harbour-yacht-golden-hour.jpg",
    alt: "Golden-hour view of a yacht moored in front of a waterfront Huntington Harbour home.",
    mood: "harbour",
  },
];

/** Deterministic pick — same `seed` always returns the same image. */
export function pickDroneImage(seed: string, mood?: DroneImage["mood"]): DroneImage {
  const pool = mood ? droneImages.filter((img) => img.mood === mood) : droneImages;
  const list = pool.length > 0 ? pool : droneImages;
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = (hash << 5) - hash + seed.charCodeAt(i);
    hash |= 0;
  }
  const index = Math.abs(hash) % list.length;
  return list[index];
}
