import type { ReactNode } from 'react'
import { toneClasses, type Tone } from './PillBadge'

type MetricPillProps = {
  children: ReactNode
  tone?: Tone
  className?: string
}

/** Hero metric strip chip: icon + bold stat, ink border, hard shadow. */
export function MetricPill({ children, tone = 'neutral', className = '' }: MetricPillProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-lg border-brutal border-ink px-space-sm py-1.5 font-display text-label-sm font-bold uppercase leading-none shadow-brutal-sm transition-transform hover:-translate-y-0.5 ${toneClasses[tone]} ${className}`}
    >
      {children}
    </span>
  )
}
