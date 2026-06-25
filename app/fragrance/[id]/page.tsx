import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { CartProvider, CartDrawer } from '@/components/cart'
import { GoldDust } from '@/components/gold-dust'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { FragranceDetail } from '@/components/fragrance-detail'
import { products, getProductById } from '@/lib/products'

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params
  const product = getProductById(id)
  if (!product) return { title: 'Fragrance · Bolly Perfumes' }
  return {
    title: `${product.name} — ${product.subtitle ?? 'Bolly Perfumes'}`,
    description: product.description,
  }
}

export default async function FragrancePage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const product = getProductById(id)
  if (!product) notFound()

  return (
    <CartProvider>
      <GoldDust />
      <SiteHeader />
      <main>
        <FragranceDetail product={product} />
      </main>
      <SiteFooter />
      <CartDrawer />
    </CartProvider>
  )
}
