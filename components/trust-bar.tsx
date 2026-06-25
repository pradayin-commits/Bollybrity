import { BadgeCheck, ShieldCheck, Rabbit, Truck } from 'lucide-react'
import { TRUST_BADGES } from '@/lib/compliance'

const ICONS = [BadgeCheck, ShieldCheck, Rabbit, Truck]

export function TrustBar({ className = '' }: { className?: string }) {
  return (
    <ul
      className={`grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-border bg-border lg:grid-cols-4 ${className}`}
    >
      {TRUST_BADGES.map((badge, i) => {
        const Icon = ICONS[i % ICONS.length]
        return (
          <li
            key={badge.title}
            className="flex items-center gap-3 bg-card px-5 py-5"
          >
            <Icon className="h-6 w-6 shrink-0 text-gold" aria-hidden="true" />
            <div>
              <p className="text-sm font-semibold uppercase tracking-luxe text-foreground">
                {badge.title}
              </p>
              <p className="mt-0.5 text-xs text-foreground/55">{badge.desc}</p>
            </div>
          </li>
        )
      })}
    </ul>
  )
}
