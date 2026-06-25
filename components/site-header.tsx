'use client'

import { useEffect, useState } from 'react'
import { Menu, ShoppingBag, X } from 'lucide-react'
import { Logo } from '@/components/logo'
import { useCart } from '@/components/cart'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Home', href: '/#home' },
  { label: 'Men', href: '/#men' },
  { label: 'Women', href: '/#women' },
  { label: 'Signature', href: '/#signature' },
  { label: 'Retail', href: '/#kiosk' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'Contact', href: '/#contact' },
]

export function SiteHeader() {
  const { count, openCart } = useCart()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-40 transition-all duration-500',
        // Always a soft top-down gradient that fades to transparent, so the
        // hero image (her face) is never hidden behind a solid bar on scroll.
        scrolled
          ? 'bg-gradient-to-b from-background via-background/70 to-transparent backdrop-blur-[2px]'
          : 'bg-gradient-to-b from-background/80 to-transparent',
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-10">
        <Logo />

        <nav className="hidden items-center gap-9 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative text-sm uppercase tracking-[0.18em] text-foreground/80 transition-colors hover:text-gold"
            >
              {link.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={openCart}
            aria-label="Open shopping bag"
            className="relative flex h-10 w-10 items-center justify-center text-foreground transition-colors hover:text-gold"
          >
            <ShoppingBag className="h-5 w-5" />
            {count > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-gold text-[11px] font-semibold text-primary-foreground">
                {count}
              </span>
            )}
          </button>
          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            className="flex h-10 w-10 items-center justify-center text-foreground transition-colors hover:text-gold lg:hidden"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'overflow-hidden border-t border-border bg-background/95 backdrop-blur-md transition-[max-height] duration-500 lg:hidden',
          mobileOpen ? 'max-h-96' : 'max-h-0 border-t-0',
        )}
      >
        <nav className="flex flex-col px-6 py-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="border-b border-border/60 py-4 text-sm uppercase tracking-[0.18em] text-foreground/80 transition-colors hover:text-gold"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
