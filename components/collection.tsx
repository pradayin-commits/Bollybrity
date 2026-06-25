import { ProductCard } from '@/components/product-card'
import { Reveal } from '@/components/reveal'
import type { Product } from '@/lib/products'

export function Collection({
  id,
  eyebrow,
  title,
  highlight,
  description,
  products,
}: {
  id: string
  eyebrow: string
  title: string
  highlight: string
  description: string
  products: Product[]
}) {
  return (
    <section id={id} className="mx-auto max-w-7xl px-5 py-24 lg:px-10 lg:py-28">
      <Reveal className="mb-14 max-w-2xl">
        <p className="mb-4 text-xs uppercase tracking-luxe text-gold sm:text-sm">
          {eyebrow}
        </p>
        <h2 className="font-heading text-4xl leading-tight text-foreground sm:text-5xl lg:text-6xl">
          {title} <span className="gold-gradient-text italic">{highlight}</span>
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-foreground/65">
          {description}
        </p>
      </Reveal>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product, i) => (
          <Reveal key={product.id} delay={i * 90}>
            <ProductCard product={product} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
