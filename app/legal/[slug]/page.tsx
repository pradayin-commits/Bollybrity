import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { CartProvider, CartDrawer } from '@/components/cart'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { LEGAL_DOCS } from '@/lib/legal'

export function generateStaticParams() {
  return Object.keys(LEGAL_DOCS).map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const doc = LEGAL_DOCS[slug]
  if (!doc) return { title: 'Not Found · Bolly Perfumes' }
  return {
    title: `${doc.title} · Bolly Perfumes`,
    description: doc.intro,
  }
}

export default async function LegalPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const doc = LEGAL_DOCS[slug]
  if (!doc) notFound()

  return (
    <CartProvider>
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-5 pb-24 pt-28 lg:px-10 lg:pt-32">
        <Link
          href="/"
          className="mb-10 inline-flex items-center gap-2 text-xs uppercase tracking-luxe text-foreground/60 transition-colors hover:text-gold"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <h1 className="font-heading text-4xl text-foreground text-balance sm:text-5xl">
          {doc.title}
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-foreground/70">{doc.intro}</p>

        <div className="mt-12 flex flex-col gap-10">
          {doc.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="font-heading text-2xl text-foreground">{section.heading}</h2>
              <div className="mt-4 flex flex-col gap-3">
                {section.body.map((para, i) => (
                  <p key={i} className="leading-relaxed text-foreground/70">
                    {para}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <p className="mt-14 border-t border-border pt-8 text-sm text-muted-foreground">
          This document is provided as general information and does not constitute legal advice.
          Last updated {new Date().getFullYear()}.
        </p>
      </main>
      <SiteFooter />
      <CartDrawer />
    </CartProvider>
  )
}
