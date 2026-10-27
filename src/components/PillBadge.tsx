import type { ReactNode } from 'react'

export type Tone = 'primary' | 'secondary' | 'tertiary' | 'success' | 'neutral' | 'ink'

/** Background/foreground mapping for every accent tone used across the screens. */
export const toneClasses: Record<Tone, string> = {
  primary: 'bg-primary-container text-ink',
  secondary: 'bg-secondary-container text-ink',
  tertiary: 'bg-tertiary-container text-ink',
  success: 'bg-success text-ink',
  neutral: 'bg-white text-ink',
  ink: 'bg-ink text-white',
}

type PillBadgeProps = {
  children: ReactNode
  tone?: Tone
  /** square = rectangular status chip, pill = full-rounded category tag */
  shape?: 'pill' | 'square'
  className?: string
}

/** Small tracked label chip: pill tags, status flags, session/latency badges. */
export function PillBadge({ children, tone = 'primary', shape = 'pill', className = '' }: PillBadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 border-[2px] border-ink px-3 py-1 font-display text-label-sm font-bold uppercase leading-none tracking-[0.04em] shadow-brutal-xs ${
        shape === 'pill' ? 'rounded-full' : 'rounded'
      } ${toneClasses[tone]} ${className}`}
    >
      {children}
    </span>
  )
}
