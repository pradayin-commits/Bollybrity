'use client'

import { useEffect, useRef } from 'react'

type Particle = {
  x: number
  y: number
  vx: number
  vy: number
  life: number
  maxLife: number
  size: number
  hue: number
}

const GOLD_TONES = ['#f3d27a', '#d4af37', '#c9a24b', '#fbe9b0', '#e8c96a']

export function GoldDust() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Respect reduced-motion preference
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    if (prefersReduced) return

    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)
    let dpr = Math.min(window.devicePixelRatio || 1, 2)

    const resize = () => {
      width = window.innerWidth
      height = window.innerHeight
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()
    window.addEventListener('resize', resize)

    const particles: Particle[] = []
    let lastX = 0
    let lastY = 0
    let hasPointer = false

    const spawn = (x: number, y: number, count: number) => {
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2
        const speed = Math.random() * 0.4 + 0.05
        const maxLife = Math.random() * 45 + 30
        particles.push({
          x: x + (Math.random() - 0.5) * 10,
          y: y + (Math.random() - 0.5) * 10,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 0.18,
          life: 0,
          maxLife,
          // fine specks of gold dust
          size: Math.random() * 0.9 + 0.25,
          hue: Math.floor(Math.random() * GOLD_TONES.length),
        })
      }
      // cap total particles for performance
      if (particles.length > 500) particles.splice(0, particles.length - 500)
    }

    const onMove = (e: MouseEvent) => {
      const x = e.clientX
      const y = e.clientY
      if (!hasPointer) {
        lastX = x
        lastY = y
        hasPointer = true
      }
      const dist = Math.hypot(x - lastX, y - lastY)
      const count = Math.min(6, 1 + Math.floor(dist / 6))
      spawn(x, y, count)
      lastX = x
      lastY = y
    }

    const onTouch = (e: TouchEvent) => {
      const t = e.touches[0]
      if (t) spawn(t.clientX, t.clientY, 3)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('touchmove', onTouch, { passive: true })

    let raf = 0
    const render = () => {
      ctx.clearRect(0, 0, width, height)
      ctx.globalCompositeOperation = 'lighter'

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]
        p.life++
        if (p.life >= p.maxLife) {
          particles.splice(i, 1)
          continue
        }
        p.x += p.vx
        p.y += p.vy
        p.vy += 0.012 // gentle gravity
        p.vx *= 0.98
        p.vy *= 0.98

        const t = p.life / p.maxLife
        const alpha = (1 - t) * 0.9
        const twinkle = 0.6 + Math.sin((p.life + i) * 0.4) * 0.4
        const radius = p.size * (1 - t * 0.4)

        const color = GOLD_TONES[p.hue]
        const glow = ctx.createRadialGradient(
          p.x,
          p.y,
          0,
          p.x,
          p.y,
          radius * 2.6,
        )
        glow.addColorStop(0, color)
        glow.addColorStop(1, 'rgba(0,0,0,0)')

        ctx.globalAlpha = alpha * twinkle * 0.4
        ctx.fillStyle = glow
        ctx.beginPath()
        ctx.arc(p.x, p.y, radius * 2.6, 0, Math.PI * 2)
        ctx.fill()

        ctx.globalAlpha = alpha * twinkle
        ctx.fillStyle = color
        ctx.beginPath()
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2)
        ctx.fill()
      }

      ctx.globalAlpha = 1
      ctx.globalCompositeOperation = 'source-over'
      raf = requestAnimationFrame(render)
    }
    raf = requestAnimationFrame(render)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('touchmove', onTouch)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[100]"
    />
  )
}
