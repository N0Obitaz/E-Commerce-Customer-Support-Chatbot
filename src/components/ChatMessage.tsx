import type { ReactNode } from 'react'
import { PillBadge, toneClasses, type Tone } from './PillBadge'

type ChatMessageProps = {
  side: 'customer' | 'bot'
  author: string
  time: string
  avatar: string
  avatarTone?: Tone
  badge?: { label: string; tone: Tone }
  actions?: ReactNode
  className?: string
  children: ReactNode
}

/** Customer (left, neutral avatar) / bot (right, accent avatar) chat bubble. */
export function ChatMessage({
  side,
  author,
  time,
  avatar,
  avatarTone = 'neutral',
  badge,
  actions,
  className = '',
  children,
}: ChatMessageProps) {
  const isBot = side === 'bot'

  return (
    <div className={`flex max-w-2xl items-start gap-space-md ${isBot ? 'flex-row-reverse self-end' : ''} ${className}`}>
      <span
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border-[2px] border-ink font-display text-headline-sm font-bold shadow-brutal-xs ${toneClasses[avatarTone]}`}
      >
        {avatar}
      </span>

      <div className={`flex min-w-0 flex-col gap-1 ${isBot ? 'items-end' : ''}`}>
        <div className="flex flex-wrap items-center gap-space-xs text-body-sm text-on-surface-variant">
          {isBot ? (
            <span>
              {time} • {author}
            </span>
          ) : (
            <span className="font-label-lg font-semibold text-on-surface">{author}</span>
          )}
          {!isBot && <span>{time}</span>}
          {badge && (
            <PillBadge tone={badge.tone} shape="square" className="px-1.5 py-0.5 text-[10px]">
              {badge.label}
            </PillBadge>
          )}
        </div>

        <div className="rounded-xl border-brutal border-ink bg-white p-space-md font-body text-body leading-relaxed text-on-surface shadow-brutal-md">
          {children}
        </div>

        {actions && <div className="flex flex-wrap gap-space-xs pt-1">{actions}</div>}
      </div>
    </div>
  )
}
