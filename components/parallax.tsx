'use client'

import { useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'

/**
 * Translates its children vertically as it scrolls through the viewport for a
 * subtle, Apple-like sense of depth. `speed` is the fraction of scroll travel:
 * positive moves slower than the page (recedes), negative moves faster.
 */
export function Parallax({
  children,
  speed = 0.12,
  className,
}: {
  children: React.ReactNode
  speed?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    if (prefersReduced) return

    let frame = 0
    function update() {
      frame = 0
      if (!node) return
      const rect = node.getBoundingClientRect()
      const viewportH = window.innerHeight
      // progress: -1 (below) -> 0 (centered) -> 1 (above)
      const progress = (rect.top + rect.height / 2 - viewportH / 2) / viewportH
      const shift = -progress * speed * 100
      node.style.transform = `translate3d(0, ${shift}px, 0)`
    }

    function onScroll() {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      if (frame) cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [speed])

  return (
    <div ref={ref} className={cn('will-change-transform', className)}>
      {children}
    </div>
  )
}
