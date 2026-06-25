'use client'

import Image from 'next/image'
import { Reveal } from '@/components/reveal'
import { useCart } from '@/components/cart'
import type { Product } from '@/lib/products'

const signature: Product = {
  id: 'lultima-medici',
  name: "L'ULTIMA MEDICI",
  subtitle: 'The Last Medici',
  tagline: 'The Bloodline Ends. The Legacy Lives Forever.',
  description:
    "L'Ultima Medici is not a fragrance. It is an inheritance — a tribute to power earned, beauty preserved, and legacy remembered. Every note unfolds like a chapter of a forgotten dynasty.",
  price: 420,
  size: '100ml',
  image: '/products/lultima-medici.png',
  swatch: '#1a1408',
  collection: 'men',
  labelTone: 'light',
  concentration: 'EXTRAIT DE PARFUM',
  hasBakedLabel: true,
}

export function SignatureProduct() {
  const { addItem } = useCart()

  return (
    <section
      id="signature"
      className="relative overflow-hidden border-y border-border bg-card py-24 lg:py-32"
    >
      <div className="absolute inset-0 opacity-30">
        <Image
          src={signature.image || '/placeholder.svg'}
          alt=""
          fill
          aria-hidden
          className="scale-125 object-cover blur-2xl"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/50" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:px-10">
        <Reveal className="order-2 lg:order-1">
          <p className="mb-5 text-xs uppercase tracking-luxe text-gold sm:text-sm">
            The Signature Fragrance
          </p>
          <h2 className="font-heading text-4xl leading-[1.1] text-foreground sm:text-5xl lg:text-6xl">
            L&apos;Ultima{' '}
            <span className="gold-gradient-text inline-block pr-2 italic">Medici</span>
          </h2>
          <p className="mt-3 text-sm uppercase tracking-luxe text-foreground/55">
            {signature.subtitle}
          </p>
          <p className="mt-6 font-heading text-xl italic text-gold/90">
            {signature.tagline}
          </p>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-foreground/75">
            {signature.description}
          </p>
          <p className="mt-5 text-sm uppercase tracking-luxe text-foreground/55">
            Regal · Timeless · Unforgettable
          </p>

          <div className="mt-8 flex items-center gap-6">
            <span className="font-heading text-3xl text-gold">${signature.price}</span>
            <span className="text-base uppercase tracking-luxe text-muted-foreground">
              {signature.size} · Extrait de Parfum
            </span>
          </div>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <button
              onClick={() => addItem(signature, { openCart: true })}
              className="bg-primary px-9 py-4 text-sm font-semibold uppercase tracking-luxe text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Buy Now
            </button>
            <button
              onClick={() => addItem(signature)}
              className="border border-gold/60 px-9 py-4 text-sm font-semibold uppercase tracking-luxe text-gold transition-all hover:-translate-y-0.5 hover:bg-gold/10"
            >
              Add to Cart
            </button>
          </div>
        </Reveal>

        <Reveal delay={150} className="order-1 flex justify-center lg:order-2">
          <div className="relative aspect-square w-full max-w-md animate-float">
            <Image
              src={signature.image || '/placeholder.svg'}
              alt="L'Ultima Medici signature perfume bottle"
              fill
              className="object-contain drop-shadow-[0_20px_60px_rgba(200,162,75,0.3)]"
              sizes="(max-width: 1024px) 80vw, 40vw"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
