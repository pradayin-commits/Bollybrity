import Image from 'next/image'
import { cn } from '@/lib/utils'

type BottleLabelProps = {
  name: string
  concentration: string
  /** Bottle liquid color, used to subtly tint the label. */
  tint?: string
  size?: 'sm' | 'lg'
}

/**
 * Gold-bordered perfume label overlaid on the blank glass, matching the
 * BollyBrity reference: the BB monogram on top, the BOLLY PERFUMES wordmark,
 * the fragrance name, the concentration, and the volume — all inside a thin
 * gold frame. Rendered as real DOM (not AI-baked text) so every bottle has
 * crisp, identical, perfectly legible branding.
 *
 * Place inside a square (aspect-square) container that the bottle image fills
 * with object-contain so the label lands on the front of the glass.
 */
export function BottleLabel({
  name,
  concentration,
  tint = '#1c1c1c',
  size = 'sm',
}: BottleLabelProps) {
  const large = size === 'lg'

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 flex items-center justify-center"
    >
      <div
        className={cn(
          'flex flex-col items-center rounded-[2px] border border-[#c9a24b]/70 text-center shadow-[0_2px_12px_rgba(0,0,0,0.5)] ring-1 ring-inset ring-[#c9a24b]/30 backdrop-blur-[1px]',
          large
            ? 'w-[46%] gap-2 px-5 py-5'
            : 'w-[52%] gap-1 px-3 py-3',
        )}
        style={{
          // subtle tint of the liquid over a dark base keeps text legible
          backgroundColor: `${tint}66`,
          backgroundImage:
            'linear-gradient(rgba(0,0,0,0.42), rgba(0,0,0,0.42))',
        }}
      >
        {/* BB monogram */}
        <Image
          src="/bb-monogram.png"
          alt=""
          width={120}
          height={120}
          className={cn('object-contain', large ? 'h-12 w-12' : 'h-7 w-7')}
        />

        {/* Brand wordmark */}
        <span
          className={cn(
            'whitespace-nowrap font-heading uppercase leading-none text-[#e6c878]',
            large
              ? 'text-sm tracking-[0.3em]'
              : 'text-[0.5rem] tracking-[0.22em] sm:text-[0.6rem]',
          )}
        >
          Bolly Perfumes
        </span>

        {/* Gold divider */}
        <span
          className={cn(
            'block bg-[#c9a24b]/60',
            large ? 'my-1 h-px w-10' : 'h-px w-6',
          )}
        />

        {/* Fragrance name */}
        <span
          className={cn(
            'whitespace-nowrap font-heading uppercase leading-none text-[#f0d693]',
            large
              ? 'text-xl tracking-[0.18em]'
              : 'text-[0.7rem] tracking-[0.12em] sm:text-sm',
          )}
        >
          {name}
        </span>

        {/* Concentration */}
        <span
          className={cn(
            'whitespace-nowrap uppercase leading-none text-[#d9bd78]',
            large
              ? 'text-[0.65rem] tracking-[0.3em]'
              : 'text-[0.38rem] tracking-[0.2em] sm:text-[0.48rem]',
          )}
        >
          {concentration}
        </span>

        {/* Volume */}
        <span
          className={cn(
            'whitespace-nowrap uppercase leading-none text-[#d9bd78]',
            large
              ? 'text-[0.6rem] tracking-[0.32em]'
              : 'text-[0.36rem] tracking-[0.22em] sm:text-[0.45rem]',
          )}
        >
          100 ML
        </span>
      </div>
    </div>
  )
}
