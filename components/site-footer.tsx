import Link from 'next/link'
import { Logo } from '@/components/logo'
import { LEGAL_LINKS } from '@/lib/legal'

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

const columns = [
  {
    heading: 'Shop',
    links: [
      { label: 'Home', href: '/#home' },
      { label: 'Men', href: '/#men' },
      { label: 'Women', href: '/#women' },
      { label: 'Signature', href: '/#signature' },
      { label: 'Gift Sets', href: '/#kiosk' },
    ],
  },
  {
    heading: 'House',
    links: [
      { label: 'Retail / Kiosk', href: '/#kiosk' },
      { label: 'Reviews', href: '/reviews' },
      { label: 'Contact', href: '/#contact' },
      { label: 'Instagram', href: '#' },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background pt-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="grid gap-12 pb-16 lg:grid-cols-12">
          {/* Brand + VIP */}
          <div className="lg:col-span-5">
            <Logo />
            <p className="mt-6 max-w-sm text-lg leading-relaxed text-foreground/65">
              The signature of presence. Join the VIP Club for private launches,
              early access, and invitations to Bolly Perfumes experiences.
            </p>

            <form
              className="mt-7 flex max-w-md items-center gap-3"
              aria-label="Join the VIP Club"
            >
              <input
                type="email"
                required
                placeholder="Your email"
                aria-label="Email address"
                className="h-12 flex-1 border border-border bg-card px-4 text-base text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none"
              />
              <button
                type="submit"
                className="h-12 bg-primary px-6 text-xs font-semibold uppercase tracking-luxe text-primary-foreground transition-opacity hover:opacity-90"
              >
                Join VIP
              </button>
            </form>

            <address className="mt-8 not-italic">
              <h3 className="mb-3 text-xs uppercase tracking-luxe text-gold">
                Head Office
              </h3>
              <p className="text-base leading-relaxed text-foreground/65">
                Bolly Perfumes
                <br />
                13322 Thomasville Circle
                <br />
                Florida, USA 32163
              </p>
            </address>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-6 lg:col-start-7">
            {columns.map((col) => (
              <nav key={col.heading} aria-label={col.heading}>
                <h3 className="mb-5 text-xs uppercase tracking-luxe text-gold">
                  {col.heading}
                </h3>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-base text-foreground/70 transition-colors hover:text-gold"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}

            <nav aria-label="Legal">
              <h3 className="mb-5 text-xs uppercase tracking-luxe text-gold">Legal</h3>
              <ul className="space-y-3">
                {LEGAL_LINKS.map((link) => (
                  <li key={link.slug}>
                    <Link
                      href={`/legal/${link.slug}`}
                      className="text-base text-foreground/70 transition-colors hover:text-gold"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-border py-8 sm:flex-row">
          <p className="max-w-xl text-sm text-muted-foreground text-pretty">
            © {new Date().getFullYear()} Bolly Perfumes™. All rights reserved. Bolly
            Perfumes™ and the BB emblem are trademarks of Bolly Perfumes. Fragrances
            are alcohol-based; use as directed.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              aria-label="Bolly Perfumes on Instagram"
              className="flex h-10 w-10 items-center justify-center border border-border text-foreground/70 transition-colors hover:border-gold hover:text-gold"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
            <span className="text-xs uppercase tracking-luxe text-muted-foreground">
              Cinematic · Luxurious · Unforgettable
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
