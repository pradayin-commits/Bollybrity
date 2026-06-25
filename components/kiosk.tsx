import Image from 'next/image'
import { Reveal } from '@/components/reveal'

const features = [
  {
    title: 'Personal Consultation',
    desc: 'Sit with a Bolly Specialist who reads your taste and guides your scent journey.',
  },
  {
    title: 'Guided Scent Testing',
    desc: 'Explore the collection on blotters, unhurried, until your signature finds you.',
  },
  {
    title: 'The Signature Card',
    desc: 'Leave with a hand-finished card noting the scents made for you.',
  },
  {
    title: 'Gift & Packaging',
    desc: 'Every purchase wrapped in signature black and gold — a keepsake in itself.',
  },
]

export function Kiosk() {
  return (
    <section
      id="kiosk"
      className="relative overflow-hidden border-y border-border bg-card py-24 lg:py-32"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-10">
        <Reveal>
          <p className="mb-5 text-xs uppercase tracking-luxe text-gold sm:text-sm">
            Retail · The Bolly Experience
          </p>
          <h2 className="font-heading text-4xl leading-tight text-foreground sm:text-5xl lg:text-6xl">
            Meet Your{' '}
            <span className="gold-gradient-text italic">Bolly Specialist</span>
          </h2>
          <p className="mt-6 text-xl leading-relaxed text-foreground/70">
            Our kiosk is more than a counter — it is an invitation to slow down.
            Our trained fragrance specialists welcome you into a sanctuary of
            black lacquer and champagne gold, where you can take your time,
            explore the collection, and discover the scent that becomes yours.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-foreground/60">
            Enjoy the moment. Talk fragrance, family, and memory — and leave with
            a signature card chosen just for you.
          </p>

          <ul className="mt-9 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            {features.map((f) => (
              <li key={f.title} className="border-l border-gold/40 pl-4">
                <p className="font-heading text-lg text-foreground">
                  {f.title}
                </p>
                <p className="text-sm text-foreground/60">{f.desc}</p>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="mt-10 inline-block border border-gold/60 px-9 py-4 text-sm font-semibold uppercase tracking-luxe text-gold transition-all hover:-translate-y-0.5 hover:bg-gold/10"
          >
            Book a Consultation
          </a>
        </Reveal>

        <Reveal delay={120} className="flex flex-col gap-4">
          <div className="relative aspect-[16/10] overflow-hidden">
            <Image
              src="/kiosk-main-clean.png"
              alt="Bolly Perfumes mall kiosk in black and gold with illuminated display cases of bottles"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 90vw, 45vw"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-gold/20" />
          </div>
          <div className="relative aspect-[16/10] overflow-hidden">
            <Image
              src="/kiosk-experience-final.png"
              alt="A Bolly Perfumes specialist in a black blazer presenting a fragrance card to a couple at the kiosk counter"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 90vw, 45vw"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-gold/20" />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
