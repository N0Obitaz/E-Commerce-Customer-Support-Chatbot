import type { ReactNode } from 'react'

type TelemetryBarProps = {
  left: ReactNode
  right: ReactNode
  className?: string
}

/** Bottom system bar of a chat window: connector info left, execution status right. */
export function TelemetryBar({ left, right, className = '' }: TelemetryBarProps) {
  return (
    <div
      className={`flex flex-wrap items-center justify-between gap-space-sm border-t-brutal border-ink bg-surface-container px-space-md py-space-sm text-body-sm ${className}`}
    >
      <div className="flex flex-wrap items-center gap-space-xs">{left}</div>
      <div className="flex flex-wrap items-center gap-space-md">{right}</div>
    </div>
  )
}

/** Inline code/policy chip used inside telemetry bars and chat bubbles. */
export function CodeChip({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <code
      className={`rounded border border-ink bg-white px-1.5 py-0.5 font-display text-label-sm font-bold text-on-surface ${className}`}
    >
      {children}
    </code>
  )
}
