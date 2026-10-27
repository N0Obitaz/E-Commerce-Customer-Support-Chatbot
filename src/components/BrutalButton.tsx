import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { toneClasses, type Tone } from './PillBadge'

type BrutalButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  tone?: Tone
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
}

const sizes: Record<NonNullable<BrutalButtonProps['size']>, string> = {
  sm: 'px-3 py-1.5 text-[11px]',
  md: 'px-5 py-2.5 text-xs',
  lg: 'px-6 py-3 text-sm',
}

/**
 * The one button in the system: ink border + hard offset shadow,
 * hover lifts the shadow, active press translates 2px like a mechanical switch.
 */
export function BrutalButton({ tone = 'primary', size = 'md', className = '', children, ...rest }: BrutalButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-lg border-brutal border-ink font-display font-bold uppercase leading-none tracking-[0.06em] shadow-brutal-sm transition-all hover:-translate-y-0.5 hover:shadow-brutal-md active:translate-x-[2px] active:translate-y-[2px] active:shadow-brutal-press disabled:opacity-50 ${sizes[size]} ${toneClasses[tone]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  )
}
