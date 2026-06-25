import Image from 'next/image'
import { Reveal } from '@/components/reveal'

export function Campaign() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 lg:px-10 lg:py-28">
      <Reveal className="mb-14 text-center">
        <p className="mb-4 text-xs uppercase tracking-luxe text-gold sm:text-sm">
          The Campaign
        </p>
        <h2 className="mx-auto max-w-3xl text-balance font-heading text-4xl leading-tight text-foreground sm:text-5xl lg:text-6xl">
          A Scene Stays. A{' '}
          <span className="gold-gradient-text italic">Scent</span> Lingers.
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-12">
        <Reveal className="md:col-span-7">
          <figure className="group relative aspect-[16/11] overflow-hidden">
            <Image
              src="/campaign/woman-car.png"
              alt="Elegant woman stepping from a luxury car amid paparazzi flashes"
              fill
              className="object-cover transition-transform duration-[1200ms] group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 58vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            <figcaption className="absolute bottom-6 left-6">
              <p className="text-xs uppercase tracking-luxe text-gold">
                Red Carpet
              </p>
              <p className="font-heading text-2xl text-foreground">
                The Arrival
              </p>
            </figcaption>
          </figure>
        </Reveal>

        <Reveal delay={120} className="md:col-span-5">
          <figure className="group relative aspect-[16/11] h-full overflow-hidden">
            <Image
              src="/campaign/male-model.png"
              alt="Male model in a sharp black suit, luxury fashion campaign"
              fill
              className="object-cover transition-transform duration-[1200ms] group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 42vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            <figcaption className="absolute bottom-6 left-6">
              <p className="text-xs uppercase tracking-luxe text-gold">
                The Icon
              </p>
              <p className="font-heading text-2xl text-foreground">
                Quiet Power
              </p>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  )
}
