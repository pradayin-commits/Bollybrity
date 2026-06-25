'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useCart } from '@/components/cart'
import { BottleLabel } from '@/components/bottle-label'
import type { Product } from '@/lib/products'

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart()

  return (
    <article className="group relative flex flex-col overflow-hidden border border-border bg-card transition-colors duration-500 hover:border-gold/60">
      <Link
        href={`/fragrance/${product.id}`}
        className="relative block aspect-square overflow-hidden bg-background"
        aria-label={`Discover ${product.name}`}
      >
        <span
          aria-hidden
          className="absolute inset-0 opacity-50 transition-opacity duration-500 group-hover:opacity-70"
          style={{
            background: `radial-gradient(circle at 50% 40%, ${product.swatch}, transparent 70%)`,
          }}
        />
        <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
          <Image
            src={product.image || '/placeholder.svg'}
            alt={`${product.name} perfume bottle`}
            fill
            className="object-contain"
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 24vw"
          />
          {!product.hasBakedLabel && (
            <BottleLabel
              name={product.name}
              concentration={product.concentration}
              tint={product.swatch}
            />
          )}
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <Link href={`/fragrance/${product.id}`} className="group/title">
          <h3 className="font-heading text-xl tracking-wide text-foreground text-balance transition-colors group-hover/title:text-gold">
            {product.name}
          </h3>
          {product.subtitle && (
            <p className="mt-1 text-sm italic text-foreground/55">{product.subtitle}</p>
          )}
        </Link>
        <p className="mt-2 text-xs uppercase tracking-[0.18em] text-gold">
          {product.tagline}
        </p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground/65">
          {product.description}
        </p>

        <div className="mt-5 flex items-center justify-between">
          <span className="font-heading text-2xl text-gold">${product.price}</span>
          <Link
            href={`/fragrance/${product.id}`}
            className="text-xs uppercase tracking-[0.16em] text-foreground/60 underline-offset-4 transition-colors hover:text-gold hover:underline"
          >
            Discover
          </Link>
        </div>

        <div className="mt-5 flex gap-3">
          <button
            onClick={() => addItem(product)}
            className="flex-1 border border-gold/50 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-gold transition-colors hover:bg-gold/10"
          >
            Add to Cart
          </button>
          <button
            onClick={() => addItem(product, { openCart: true })}
            className="flex-1 bg-primary py-3 text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground transition-opacity hover:opacity-90"
          >
            Buy Now
          </button>
        </div>
      </div>
    </article>
  )
}
