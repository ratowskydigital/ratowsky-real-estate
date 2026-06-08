import Image from "next/image";
import { ButtonLink } from "./Button";
import { pickDroneImage } from "@/lib/drone";

export function Hero() {
  const bg = pickDroneImage("homepage-hero", "ocean");
  return (
    <section className="relative isolate overflow-hidden border-b border-hairline bg-surface-deep">
      <Image
        src={bg.src}
        alt={bg.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-60"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-surface-deep/85 via-surface-deep/55 to-surface-deep/95"
      />
      <div className="relative max-w-landing mx-auto px-6 lg:px-10 pt-24 pb-28 md:pt-32 md:pb-36 min-h-[min(88vh,820px)] flex flex-col justify-center text-white">
        <p className="font-sans font-medium uppercase text-xs tracking-label text-white/80">
          Huntington Beach &middot; Huntington Harbour &middot; Coastal OC
        </p>
        <h1 className="mt-6 font-serif text-3xl tracking-tightest leading-[1.05] max-w-4xl">
          The internet gives you an estimate.
          <span className="block text-white/70">We create a result.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-md text-white/85">
          Ratowsky Group is a father-son team at Compass with nearly 50 years of combined
          experience selling along the Orange County coast. Strategy over effort. Two sets of eyes
          on every contract. The marketing reach to make a market — not just list a home.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <ButtonLink href="/contact">Schedule a strategy call</ButtonLink>
          <ButtonLink href="/sold-stories" variant="secondary">
            See the case studies
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
