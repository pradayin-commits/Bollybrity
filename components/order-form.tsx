'use client'

import { useState } from 'react'
import { products } from '@/lib/products'
import { Reveal } from '@/components/reveal'

const ORDER_EMAIL = 'manager@tt-enterprises.com'

export function OrderForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    const name = String(data.get('name') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()
    const phone = String(data.get('phone') ?? '').trim()
    const fragrance = String(data.get('fragrance') ?? '').trim()
    const quantity = String(data.get('quantity') ?? '1').trim()
    const message = String(data.get('message') ?? '').trim()

    const subject = `Bolly Perfumes Order — ${fragrance || 'Inquiry'}`
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || '—'}`,
      '',
      `Fragrance: ${fragrance || '—'}`,
      `Quantity: ${quantity}`,
      '',
      'Message:',
      message || '—',
    ].join('\n')

    const href = `mailto:${ORDER_EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`

    window.location.href = href
    setSubmitted(true)
  }

  return (
    <section id="contact" className="border-t border-border bg-background py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-start gap-14 px-5 lg:grid-cols-2 lg:px-10">
        <Reveal>
          <p className="mb-5 text-xs uppercase tracking-luxe text-gold sm:text-sm">
            Orders · Private Concierge
          </p>
          <h2 className="font-heading text-4xl leading-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
            Place Your{' '}
            <span className="gold-gradient-text italic">Order</span>
          </h2>
          <p className="mt-6 max-w-md text-xl leading-relaxed text-foreground/70">
            While our secure online checkout is launching soon, our concierge is
            ready to fulfill your order personally. Choose your fragrance and send
            your details — we&apos;ll confirm availability, shipping, and payment
            within one business day.
          </p>
          <div className="mt-9 flex flex-col gap-2 text-base text-foreground/65">
            <p>
              <span className="text-gold">Email</span> — {ORDER_EMAIL}
            </p>
            <p>
              <span className="text-gold">Head Office</span> — 13322 Thomasville
              Circle, Florida, USA 32163
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          {submitted ? (
            <div
              role="status"
              className="flex h-full min-h-72 flex-col items-center justify-center border border-gold/40 bg-card p-10 text-center"
            >
              <h3 className="font-heading text-2xl text-foreground">
                Your email is ready
              </h3>
              <p className="mt-4 max-w-sm leading-relaxed text-foreground/65">
                We&apos;ve opened your email app with the order details. If nothing
                appeared, write to us directly at{' '}
                <a
                  href={`mailto:${ORDER_EMAIL}`}
                  className="text-gold underline-offset-2 hover:underline"
                >
                  {ORDER_EMAIL}
                </a>
                .
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-8 border border-gold/60 px-7 py-3 text-xs font-semibold uppercase tracking-luxe text-gold transition-all hover:bg-gold/10"
              >
                Send Another
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 border border-border bg-card p-8 lg:p-10"
              aria-label="Order request form"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="flex flex-col gap-2">
                  <span className="text-xs uppercase tracking-luxe text-foreground/70">
                    Full Name
                  </span>
                  <input
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    className="h-12 border border-border bg-background px-4 text-base text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none"
                  />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="text-xs uppercase tracking-luxe text-foreground/70">
                    Email
                  </span>
                  <input
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="h-12 border border-border bg-background px-4 text-base text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none"
                  />
                </label>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="flex flex-col gap-2">
                  <span className="text-xs uppercase tracking-luxe text-foreground/70">
                    Phone <span className="text-muted-foreground">(optional)</span>
                  </span>
                  <input
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    className="h-12 border border-border bg-background px-4 text-base text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none"
                  />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="text-xs uppercase tracking-luxe text-foreground/70">
                    Quantity
                  </span>
                  <input
                    name="quantity"
                    type="number"
                    min="1"
                    defaultValue="1"
                    className="h-12 border border-border bg-background px-4 text-base text-foreground focus:border-gold focus:outline-none"
                  />
                </label>
              </div>

              <label className="flex flex-col gap-2">
                <span className="text-xs uppercase tracking-luxe text-foreground/70">
                  Fragrance
                </span>
                <select
                  name="fragrance"
                  required
                  defaultValue=""
                  className="h-12 border border-border bg-background px-4 text-base text-foreground focus:border-gold focus:outline-none"
                >
                  <option value="" disabled>
                    Select a fragrance
                  </option>
                  <optgroup label="Men — Uomini Della Corona">
                    {products
                      .filter((p) => p.collection === 'men')
                      .map((p) => (
                        <option key={p.id} value={`${p.name} (${p.size}) — $${p.price}`}>
                          {p.name} — ${p.price}
                        </option>
                      ))}
                  </optgroup>
                  <optgroup label="Women — La Dinastia d'Oro">
                    {products
                      .filter((p) => p.collection === 'women')
                      .map((p) => (
                        <option key={p.id} value={`${p.name} (${p.size}) — $${p.price}`}>
                          {p.name} — ${p.price}
                        </option>
                      ))}
                  </optgroup>
                </select>
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-xs uppercase tracking-luxe text-foreground/70">
                  Message <span className="text-muted-foreground">(optional)</span>
                </span>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Shipping address, gift notes, or any questions…"
                  className="resize-none border border-border bg-background px-4 py-3 text-base text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none"
                />
              </label>

              <button
                type="submit"
                className="mt-2 bg-primary py-4 text-sm font-semibold uppercase tracking-luxe text-primary-foreground transition-opacity hover:opacity-90"
              >
                Send Order Request
              </button>
              <p className="text-center text-xs leading-relaxed text-muted-foreground">
                This opens your email app with your order details pre-filled. No
                payment is taken here — we&apos;ll confirm everything by email.
              </p>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
}
