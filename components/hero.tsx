import Image from 'next/image'
import { Parallax } from '@/components/parallax'

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-gold/15"
    >
      {/* Centered tagline across the top, cleared below the fixed header */}
      <div className="relative z-20 flex items-center justify-center gap-3 px-5 pb-2 pt-28 text-center sm:gap-4 sm:pt-32">
        <span className="hidden h-px w-8 gold-line sm:block sm:w-12" />
        <p className="text-[0.6rem] uppercase tracking-[0.2em] text-gold sm:whitespace-nowrap sm:text-xs sm:tracking-luxe md:text-sm">
          Cinematic · Luxurious · Unforgettable
        </p>
        <span className="hidden h-px w-8 gold-line sm:block sm:w-12" />
      </div>

      <div className="relative mx-auto grid max-w-[110rem] grid-cols-1 items-stretch lg:grid-cols-2">
        {/* Left: brand copy */}
        <div className="relative z-10 order-2 flex flex-col justify-center px-5 pb-14 pt-4 sm:px-8 lg:order-1 lg:px-14 lg:py-20">
          <div className="max-w-xl animate-fade-up">
            <h1 className="font-heading text-4xl leading-[0.95] tracking-tight text-foreground sm:text-5xl xl:text-6xl">
              Not Just a Fragrance.
              <br />
              <span className="gold-gradient-text gold-gradient-animated italic">
                A Presence.
              </span>
              <br />A Statement.
            </h1>

            <p className="mt-7 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
              BOLLY PERFUMES crafts cinematic luxury fragrances for those who
              are remembered. The signature of presence, bottled.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="#men"
                className="group relative overflow-hidden bg-primary px-9 py-4 text-center text-sm font-semibold uppercase tracking-luxe text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                Shop Men
              </a>
              <a
                href="#women"
                className="border border-gold/60 px-9 py-4 text-center text-sm font-semibold uppercase tracking-luxe text-gold transition-all hover:-translate-y-0.5 hover:bg-gold/10"
              >
                Shop Women
              </a>
            </div>
          </div>
        </div>

        {/* Right: full campaign image, blended into the background */}
        <div className="relative order-1 lg:order-2">
          <div className="relative mx-auto aspect-square w-full max-w-2xl overflow-hidden lg:max-w-none lg:h-full">
            <Parallax speed={0.18} className="absolute inset-0 scale-110">
              <Image
                src="/mira-campaign.png"
                alt="Bolly Perfumes campaign model holding the signature black and gold fragrance amid paparazzi flashes"
                fill
                priority
                className="object-contain object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </Parallax>
            {/* Blend the image edges into the black background so it reads as one page */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background via-background/40 to-transparent lg:w-2/5" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-1/5 bg-gradient-to-b from-background to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/5 bg-gradient-to-t from-background to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-background to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
