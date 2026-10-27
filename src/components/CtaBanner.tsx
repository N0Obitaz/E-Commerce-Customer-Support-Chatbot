import type { ReactNode } from 'react'

type CtaBannerProps = {
  children: ReactNode
  /** optional floating corner badge (rendered top-right, rotated) */
  badge?: ReactNode
  className?: string
}

/** Big sun-yellow conversion panel used by the template + landing screens. */
export function CtaBanner({ children, badge, className = '' }: CtaBannerProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-3xl border-brutal-strong border-ink bg-primary-container p-8 shadow-brutal-2xl sm:p-12 ${className}`}
    >
      {badge}
      {children}
    </div>
  )
}
