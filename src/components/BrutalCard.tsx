import type { ReactNode } from 'react'

type BrutalCardProps = {
  children: ReactNode
  className?: string
  tone?: 'white' | 'canvas' | 'surface' | 'yellow'
  radius?: 'md' | 'lg' | 'xl' | '2xl' | '3xl'
  shadow?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
}

const tones = {
  white: 'bg-white',
  canvas: 'bg-canvas-wire',
  surface: 'bg-surface-container',
  yellow: 'bg-primary-container',
}

const radii = {
  md: 'rounded',
  lg: 'rounded-lg',
  xl: 'rounded-xl',
  '2xl': 'rounded-2xl',
  '3xl': 'rounded-3xl',
}

const shadows = {
  sm: 'shadow-brutal-sm',
  md: 'shadow-brutal-md',
  lg: 'shadow-brutal-lg',
  xl: 'shadow-brutal-xl',
  '2xl': 'shadow-brutal-2xl',
}

/** Framed module: solid surface, 2.5px ink border, hard offset shadow. */
export function BrutalCard({ children, className = '', tone = 'white', radius = 'xl', shadow = 'lg' }: BrutalCardProps) {
  return (
    <div className={`border-brutal border-ink ${tones[tone]} ${radii[radius]} ${shadows[shadow]} ${className}`}>
      {children}
    </div>
  )
}
