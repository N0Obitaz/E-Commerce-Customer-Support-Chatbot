import type { ReactNode } from 'react'

type Accent = 'primary' | 'secondary' | 'tertiary' | 'success'

const accents: Record<Accent, string> = {
  primary: 'bg-primary-container',
  secondary: 'bg-secondary-container',
  tertiary: 'bg-tertiary-container',
  success: 'bg-success',
}

/** Props for the OS-window chat panel. */
export type ChatWindowProps = {
  accent?: Accent
  title: string
  icon?: ReactNode
  badges?: ReactNode
  /** rendered below the header (session/channel sub-bar) */
  subheader?: ReactNode
  children: ReactNode
  /** rendered below the stream (telemetry + input rows) */
  footer?: ReactNode
  className?: string
}

function WindowDots() {
  return (
    <span className="flex items-center gap-1.5" aria-hidden>
      <span className="h-3.5 w-3.5 rounded-full border-hairline border-ink bg-danger shadow-[1px_1px_0px_#1c1b1b]" />
      <span className="h-3.5 w-3.5 rounded-full border-hairline border-ink bg-pop-yellow shadow-[1px_1px_0px_#1c1b1b]" />
      <span className="h-3.5 w-3.5 rounded-full border-hairline border-ink bg-success shadow-[1px_1px_0px_#1c1b1b]" />
    </span>
  )
}

/** OS-window style chat panel: colored title bar, dots, badges, stream, footer. */
export function ChatWindow({ accent = 'primary', title, icon, badges, subheader, children, footer, className = '' }: ChatWindowProps) {
  return (
    <div
      className={`flex flex-col overflow-hidden rounded-xl border-brutal-strong border-ink bg-white shadow-brutal-xl ${className}`}
    >
      <div
        className={`flex flex-wrap items-center justify-between gap-space-sm border-b-brutal border-ink px-space-md py-space-sm ${accents[accent]}`}
      >
        <div className="flex min-w-0 items-center gap-space-md">
          <WindowDots />
          <span className="flex items-center gap-2 truncate font-display text-headline-sm font-semibold uppercase tracking-tight text-on-surface">
            {icon}
            {title}
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-space-xs">{badges}</div>
      </div>

      {subheader}

      {children}

      {footer}
    </div>
  )
}
