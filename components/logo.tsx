import Image from 'next/image'
import { cn } from '@/lib/utils'

export function Monogram({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        'relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full ring-1 ring-gold/40 shadow-[0_0_22px_-6px_rgba(201,162,75,0.6)]',
        className,
      )}
    >
      <Image
        src="/bolly-logo.png"
        alt="Bolly Perfumes emblem"
        width={200}
        height={200}
        priority
        className="h-full w-full scale-[1.18] object-cover"
      />
    </span>
  )
}

export function Logo({
  className,
  showMonogram = true,
}: {
  className?: string
  showMonogram?: boolean
}) {
  return (
    <a
      href="/#home"
      className={cn('group flex items-center gap-3', className)}
      aria-label="Bolly Perfumes home"
    >
      {showMonogram && (
        <Monogram className="h-11 w-11 transition-transform duration-500 group-hover:scale-105 sm:h-14 sm:w-14 lg:h-16 lg:w-16" />
      )}
      <span className="font-heading text-base font-semibold leading-none tracking-[0.12em] text-foreground sm:text-lg sm:tracking-[0.2em] lg:text-xl">
        BOLLY
        <span className="ml-1 gold-gradient-text">PERFUMES</span>
      </span>
    </a>
  )
}
