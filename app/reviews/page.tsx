import type { Metadata } from 'next'
import { Star, BadgeCheck } from 'lucide-react'
import { CartProvider, CartDrawer } from '@/components/cart'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Reveal } from '@/components/reveal'
import { REVIEWS, REVIEW_STATS } from '@/lib/reviews'

export const metadata: Metadata = {
  title: 'Customer Reviews | Bolly Perfumes',
  description:
    'Read verified reviews from Bolly Perfumes customers around the world — from Mumbai to New York, Dubai to Milan.',
}

function Stars({ rating, className }: { rating: number; className?: string }) {
  return (
    <div className={className} aria-label={`${rating} out of 5 stars`} role="img">
      <div className="flex items-center gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={
              i < rating
                ? 'h-4 w-4 fill-gold text-gold'
                : 'h-4 w-4 fill-transparent text-foreground/25'
            }
            aria-hidden="true"
          />
        ))}
      </div>
    </div>
  )
}

const breakdown = [
  { label: '5 stars', value: REVIEW_STATS.fiveStar },
  { label: '4 stars', value: REVIEW_STATS.fourStar },
  { label: '3 stars', value: REVIEW_STATS.threeStar },
]

export default function ReviewsPage() {
  return (
    <CartProvider>
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-5 pb-24 pt-28 lg:px-10 lg:pt-32">
        {/* Header */}
        <Reveal>
          <p className="text-xs uppercase tracking-luxe text-gold sm:text-sm">
            Loved Worldwide
          </p>
          <h1 className="mt-4 font-heading text-4xl leading-tight text-foreground text-balance sm:text-5xl lg:text-6xl">
            What Our Clients{' '}
            <span className="gold-gradient-text italic">Are Saying</span>
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-foreground/70">
            From Mumbai to New York, our fragrances have become signatures. Here
            is what the Bolly community thinks.
          </p>
        </Reveal>

        {/* Stats */}
        <Reveal delay={100}>
          <div className="mt-12 grid gap-8 border-y border-border py-10 sm:grid-cols-[auto_1fr] sm:gap-16">
            <div className="flex flex-col items-start justify-center">
              <div className="flex items-end gap-2">
                <span className="font-heading text-6xl leading-none text-foreground">
                  {REVIEW_STATS.average}
                </span>
                <span className="mb-1 text-lg text-foreground/50">/ 5</span>
              </div>
              <Stars rating={5} className="mt-3" />
              <p className="mt-3 text-sm text-foreground/60">
                Based on {REVIEW_STATS.total.toLocaleString()} verified reviews
              </p>
            </div>

            <div className="flex flex-col justify-center gap-3">
              {breakdown.map((b) => (
                <div key={b.label} className="flex items-center gap-4">
                  <span className="w-16 shrink-0 text-sm text-foreground/60">
                    {b.label}
                  </span>
                  <div className="h-2 flex-1 overflow-hidden rounded-full bg-border">
                    <div
                      className="h-full rounded-full bg-gold"
                      style={{ width: `${b.value}%` }}
                    />
                  </div>
                  <span className="w-10 shrink-0 text-right text-sm text-foreground/60">
                    {b.value}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Review grid */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((review, i) => (
            <Reveal key={`${review.name}-${i}`} delay={(i % 3) * 80}>
              <article className="flex h-full flex-col border border-border bg-card p-7 transition-colors hover:border-gold/40">
                <div className="flex items-center justify-between">
                  <Stars rating={review.rating} />
                  <span className="text-xs uppercase tracking-luxe text-gold">
                    {review.product}
                  </span>
                </div>

                <h2 className="mt-5 font-heading text-xl text-foreground">
                  {review.title}
                </h2>
                <p className="mt-3 flex-1 leading-relaxed text-foreground/70">
                  {review.body}
                </p>

                <div className="mt-6 flex items-center justify-between border-t border-border pt-5">
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {review.name}
                    </p>
                    <p className="text-xs text-foreground/55">{review.location}</p>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    {review.verified && (
                      <span className="flex items-center gap-1 text-xs text-gold">
                        <BadgeCheck className="h-3.5 w-3.5" aria-hidden="true" />
                        Verified
                      </span>
                    )}
                    <span className="text-xs text-foreground/45">{review.date}</span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </main>
      <SiteFooter />
      <CartDrawer />
    </CartProvider>
  )
}
