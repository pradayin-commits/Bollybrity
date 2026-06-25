'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'

/**
 * Wraps the app in Lenis momentum scrolling for the buttery, "Apple-like"
 * feel. Anchor links (#men, #women, etc.) are intercepted so they glide
 * instead of jumping. Respects prefers-reduced-motion.
 */
export function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    if (prefersReduced) return

    const lenis = new Lenis({
      duration: 1.1,
      // Apple's signature ease-out curve
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
      touchMultiplier: 1.6,
    })

    let frame = 0
    function raf(time: number) {
      lenis.raf(time)
      frame = requestAnimationFrame(raf)
    }
    frame = requestAnimationFrame(raf)

    // Glide to an in-page target by hash (e.g. "#men")
    function scrollToHash(hash: string) {
      if (!hash || hash === '#') return false
      const el = document.querySelector(hash)
      if (!el) return false
      lenis.scrollTo(el as HTMLElement, { offset: -80, duration: 1.3 })
      return true
    }

    // Intercept both same-page ("#men") and root-relative ("/#men") anchors.
    // When already on the homepage we glide; otherwise we let the browser
    // navigate to the homepage and the on-load handler below finishes the job.
    function onClick(e: MouseEvent) {
      const target = e.target as HTMLElement
      const link = target.closest(
        'a[href^="#"], a[href^="/#"]',
      ) as HTMLAnchorElement | null
      if (!link) return
      const href = link.getAttribute('href') ?? ''
      const hashIndex = href.indexOf('#')
      if (hashIndex === -1) return
      const hash = href.slice(hashIndex)
      const path = href.slice(0, hashIndex) || '/'

      // Different page: allow normal navigation.
      if (path !== '/' && path !== window.location.pathname) return
      if (path === '/' && window.location.pathname !== '/') return

      if (scrollToHash(hash)) e.preventDefault()
    }
    document.addEventListener('click', onClick)

    // If we arrive on a page with a hash (e.g. from /reviews → "/#men"),
    // glide to it once the DOM is ready.
    if (window.location.hash) {
      requestAnimationFrame(() => scrollToHash(window.location.hash))
    }

    return () => {
      cancelAnimationFrame(frame)
      document.removeEventListener('click', onClick)
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}
