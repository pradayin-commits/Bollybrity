'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ShieldCheck, FlaskConical, Leaf } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { TrustBar } from '@/components/trust-bar'
import { useCart } from '@/components/cart'
import type { Product } from '@/lib/products'
import { COMPLIANCE } from '@/lib/compliance'

function NoteColumn({ label, notes }: { label: string; notes: string[] }) {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs uppercase tracking-luxe text-gold">{label}</p>
      <ul className="flex flex-col gap-2">
        {notes.map((note) => (
          <li key={note} className="text-base text-foreground/75">
            {note}
          </li>
        ))}
      </ul>
    </div>
  )
}

export function FragranceDetail({ product }: { product: Product }) {
  const { addItem } = useCart()
  const isWomen = product.collection === 'women'
  const collectionName = isWomen ? "La Dinastia d'Oro" : 'Uomini Della Corona'

  return (
    <article className="mx-auto max-w-7xl px-5 pb-24 pt-28 lg:px-10 lg:pt-32">
      <Link
        href={isWomen ? '/#women' : '/#men'}
        className="mb-10 inline-flex items-center gap-2 text-xs uppercase tracking-luxe text-foreground/60 transition-colors hover:text-gold"
      >
        <ArrowLeft className="h-4 w-4" />
        {collectionName}
      </Link>

      <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Bottle */}
        <Reveal className="lg:sticky lg:top-28">
          <div
            className="relative aspect-square w-full overflow-hidden rounded-sm"
            style={{
              background: `radial-gradient(circle at 50% 40%, ${product.swatch}55, transparent 70%)`,
            }}
          >
            <Image
              src={product.image || '/placeholder.svg'}
              alt={`${product.name} perfume bottle`}
              fill
              priority
              className="object-contain"
              sizes="(max-width: 1024px) 90vw, 45vw"
            />
          </div>
        </Reveal>

        {/* Details */}
        <Reveal delay={120}>
          {product.pillar && (
            <p className="mb-4 text-xs uppercase tracking-luxe text-gold sm:text-sm">
              The Heritage Collection · {product.pillar}
            </p>
          )}
          <h1 className="font-heading text-4xl leading-none text-foreground text-balance sm:text-5xl lg:text-6xl">
            {product.name}
          </h1>
          {product.subtitle && (
            <p className="mt-3 text-xl italic text-foreground/55">{product.subtitle}</p>
          )}
          <p className="mt-5 font-heading text-2xl italic gold-gradient-text">
            {product.tagline}
          </p>

          <div className="mt-7 flex items-center gap-6">
            <span className="font-heading text-3xl text-gold">${product.price}</span>
            <span className="text-sm uppercase tracking-luxe text-muted-foreground">
              {product.size} · {product.concentration}
            </span>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <button
              onClick={() => addItem(product, { openCart: true })}
              className="bg-primary px-9 py-4 text-sm font-semibold uppercase tracking-luxe text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Buy Now
            </button>
            <button
              onClick={() => addItem(product)}
              className="border border-gold/60 px-9 py-4 text-sm font-semibold uppercase tracking-luxe text-gold transition-all hover:-translate-y-0.5 hover:bg-gold/10"
            >
              Add to Cart
            </button>
          </div>

          {/* Authenticity assurance */}
          <div className="mt-7 flex items-start gap-3 rounded-sm border border-gold/30 bg-gold/5 p-4">
            <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
            <p className="text-sm leading-relaxed text-foreground/75">
              {COMPLIANCE.authenticity}
            </p>
          </div>

          <TrustBar className="mt-5" />

          {/* Story */}
          {product.story && (
            <div className="mt-12 flex flex-col gap-4 border-t border-border pt-10">
              <h2 className="text-xs uppercase tracking-luxe text-gold">The Story</h2>
              {product.story.map((para, i) => (
                <p key={i} className="text-lg leading-relaxed text-foreground/75">
                  {para}
                </p>
              ))}
            </div>
          )}

          {/* Profile */}
          {product.profile && (
            <div className="mt-10 border-t border-border pt-10">
              <h2 className="text-xs uppercase tracking-luxe text-gold">
                Fragrance Profile
              </h2>
              <p className="mt-4 font-heading text-3xl text-foreground">
                {product.profile}
              </p>
            </div>
          )}

          {/* Notes */}
          {product.notes && (
            <div className="mt-10 border-t border-border pt-10">
              <h2 className="mb-6 text-xs uppercase tracking-luxe text-gold">Notes</h2>
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
                <NoteColumn label="Top Notes" notes={product.notes.top} />
                <NoteColumn label="Heart Notes" notes={product.notes.heart} />
                <NoteColumn label="Base Notes" notes={product.notes.base} />
              </div>
            </div>
          )}

          {/* Character */}
          {product.character && (
            <div className="mt-10 border-t border-border pt-10">
              <h2 className="text-xs uppercase tracking-luxe text-gold">Character</h2>
              <div className="mt-4 flex flex-col gap-1">
                {product.character.map((line) => (
                  <p key={line} className="font-heading text-2xl italic text-foreground/85">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          )}

          {/* Details */}
          <div className="mt-10 border-t border-border pt-10">
            <h2 className="text-xs uppercase tracking-luxe text-gold">Details</h2>
            <dl className="mt-5 grid grid-cols-2 gap-x-8 gap-y-4 text-sm">
              <div>
                <dt className="text-muted-foreground">Concentration</dt>
                <dd className="mt-1 text-foreground/85">{product.concentration}</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Volume</dt>
                <dd className="mt-1 text-foreground/85">{COMPLIANCE.volume}</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Origin</dt>
                <dd className="mt-1 text-foreground/85">{COMPLIANCE.madeIn}</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Family</dt>
                <dd className="mt-1 text-foreground/85">{product.profile ?? '—'}</dd>
              </div>
            </dl>
          </div>

          {/* Ingredients & Allergens */}
          <div className="mt-10 border-t border-border pt-10">
            <h2 className="flex items-center gap-2 text-xs uppercase tracking-luxe text-gold">
              <FlaskConical className="h-4 w-4" aria-hidden="true" />
              Ingredients &amp; Allergens
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-foreground/70">
              {COMPLIANCE.ingredients}
            </p>
            <p className="mt-3 flex items-start gap-2 text-sm leading-relaxed text-foreground/70">
              <Leaf className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
              {COMPLIANCE.allergenNote}
            </p>
          </div>

          {/* Safety & Care */}
          <div className="mt-10 border-t border-border pt-10">
            <h2 className="text-xs uppercase tracking-luxe text-gold">Safety &amp; Care</h2>
            <ul className="mt-4 flex flex-col gap-2">
              {COMPLIANCE.safety.map((line) => (
                <li
                  key={line}
                  className="flex items-start gap-2 text-sm leading-relaxed text-foreground/70"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                  {line}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
              {COMPLIANCE.disclaimer}
            </p>
          </div>
        </Reveal>
      </div>
    </article>
  )
}
