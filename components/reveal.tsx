'use client'

import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

type Direction = 'up' | 'down' | 'left' | 'right' | 'none'

const OFFSCREEN: Record<Direction, string> = {
  up: 'translate3d(0, 40px, 0)',
  down: 'translate3d(0, -40px, 0)',
  left: 'translate3d(40px, 0, 0)',
  right: 'translate3d(-40px, 0, 0)',
  none: 'translate3d(0, 0, 0)',
}

/**
 * Scroll-reveal wrapper with Apple-style motion: an expo-out easing curve,
 * a gentle rise, a subtle scale-up, and a brief blur that resolves into focus.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  direction = 'up',
  as: Tag = 'div',
}: {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: Direction
  as?: React.ElementType
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      style={{
        transitionDelay: `${delay}ms`,
        // Apple's signature expo-out curve
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        transform: visible ? 'translate3d(0,0,0) scale(1)' : `${OFFSCREEN[direction]} scale(0.97)`,
        opacity: visible ? 1 : 0,
        filter: visible ? 'blur(0px)' : 'blur(6px)',
      }}
      className={cn(
        'transition-[transform,opacity,filter] duration-[1100ms] will-change-transform',
        className,
      )}
    >
      {children}
    </Tag>
  )
}
