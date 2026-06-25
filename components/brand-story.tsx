import Image from 'next/image'
import { Reveal } from '@/components/reveal'

export function BrandStory() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-card py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-10">
        <Reveal className="relative aspect-[4/5] overflow-hidden">
          <Image
            src="/campaign/spray.png"
            alt="Luxury perfume sprayed in slow motion against gold light"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 90vw, 45vw"
          />
          <div className="absolute inset-0 ring-1 ring-inset ring-gold/20" />
        </Reveal>

        <Reveal delay={120}>
          <p className="mb-5 text-xs uppercase tracking-luxe text-gold sm:text-sm">
            The House of Bolly
          </p>
          <h2 className="font-heading text-4xl leading-[1.05] text-foreground sm:text-5xl lg:text-6xl">
            Luxury Is Not Worn.
            <br />
            It Is{' '}
            <span className="gold-gradient-text italic">Remembered.</span>
          </h2>
          <p className="mt-7 text-xl leading-relaxed text-foreground/70">
            Bolly Perfumes was created for people who want more than fragrance.
            Each scent is designed as an identity — a signature of confidence,
            attraction, mystery, and presence.
          </p>

          <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
            {[
              { value: '24', label: 'Rare Notes' },
              { value: '100%', label: 'Eau de Parfum' },
              { value: '∞', label: 'Lasting Presence' },
            ].map((stat) => (
              <div key={stat.label}>
                <dt className="font-heading text-3xl text-gold sm:text-4xl">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-sm uppercase tracking-[0.14em] text-muted-foreground">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
