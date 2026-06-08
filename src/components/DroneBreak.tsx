import Image from "next/image";
import { pickDroneImage, type DroneImage } from "@/lib/drone";

type DroneBreakProps = {
  /** stable string used to pick a drone image deterministically per section */
  seed: string;
  mood?: DroneImage["mood"];
  eyebrow?: string;
  quote?: string;
  attribution?: string;
  /** set to true on the homepage hero — tells next/image to prioritize the LCP load */
  priority?: boolean;
  height?: "sm" | "md" | "lg";
};

const heightMap: Record<NonNullable<DroneBreakProps["height"]>, string> = {
  sm: "min-h-[280px] md:min-h-[360px]",
  md: "min-h-[420px] md:min-h-[520px]",
  lg: "min-h-[560px] md:min-h-[680px]",
};

export function DroneBreak({
  seed,
  mood,
  eyebrow,
  quote,
  attribution,
  priority = false,
  height = "md",
}: DroneBreakProps) {
  const img = pickDroneImage(seed, mood);
  return (
    <section
      aria-label={img.alt}
      className={`relative overflow-hidden border-y border-hairline ${heightMap[height]}`}
    >
      <Image
        src={img.src}
        alt={img.alt}
        fill
        priority={priority}
        sizes="100vw"
        className="object-cover"
      />
      {/* Soft tint for text legibility — kept light so the ocean color reads through */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/10 to-black/35"
      />
      {(eyebrow || quote) && (
        <div className="relative max-w-prose mx-auto px-6 lg:px-10 h-full flex flex-col justify-center py-section text-white">
          {eyebrow && (
            <p className="font-sans font-medium uppercase text-xs tracking-label text-white/80">
              {eyebrow}
            </p>
          )}
          {quote && (
            <p className="mt-4 font-serif text-2xl tracking-tightest leading-tight max-w-3xl">
              {quote}
            </p>
          )}
          {attribution && (
            <p className="mt-6 text-xs uppercase tracking-label text-white/70">{attribution}</p>
          )}
        </div>
      )}
    </section>
  );
}
