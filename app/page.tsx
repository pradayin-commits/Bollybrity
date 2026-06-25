import { CartProvider, CartDrawer } from '@/components/cart'
import { GoldDust } from '@/components/gold-dust'
import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { SignatureProduct } from '@/components/signature-product'
import { Collection } from '@/components/collection'
import { BrandStory } from '@/components/brand-story'
import { Campaign } from '@/components/campaign'
import { Kiosk } from '@/components/kiosk'
import { OrderForm } from '@/components/order-form'
import { TrustBar } from '@/components/trust-bar'
import { SiteFooter } from '@/components/site-footer'
import { Reveal } from '@/components/reveal'
import { mensProducts, womensProducts } from '@/lib/products'

export default function Home() {
  return (
    <CartProvider>
      <GoldDust />
      <SiteHeader />
      <main>
        <Hero />
        <SignatureProduct />
        <Collection
          id="men"
          eyebrow="Uomini Della Corona · The Men's Heritage Collection"
          title="Four Pillars of"
          highlight="Greatness"
          description="Inspired by Italian nobility, hidden power, old-money wealth, and timeless masculine elegance. Strength. Influence. Wealth. Power."
          products={mensProducts}
        />
        <BrandStory />
        <Collection
          id="women"
          eyebrow="La Dinastia d'Oro · The Women's Heritage Collection"
          title="Four Expressions of"
          highlight="Feminine Power"
          description="Inspired by the women of ancient Italian dynasties who ruled through beauty, elegance, and irresistible presence. Seduction. Mystery. Desire. Eternity."
          products={womensProducts}
        />
        <Campaign />
        <section className="border-t border-border bg-background py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-10">
            <Reveal>
              <TrustBar />
            </Reveal>
          </div>
        </section>
        <Kiosk />
        <OrderForm />
      </main>
      <SiteFooter />
      <CartDrawer />
    </CartProvider>
  )
}
