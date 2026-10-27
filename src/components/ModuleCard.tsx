import type { ReactNode } from 'react'
import { PillBadge, type Tone } from './PillBadge'

type ModuleCardProps = {
  step: string
  tag: string
  tone: Tone
  icon: ReactNode
  title: string
  body: string
  meta: string
}

/** "System module" feature card from the Support Bot landing screen (2×2 grid). */
export function ModuleCard({ step, tag, tone, icon, title, body, meta }: ModuleCardProps) {
  return (
    <article className="flex h-full flex-col rounded-xl border-brutal border-ink bg-white p-space-lg shadow-brutal-lg">
      <div className="mb-4 flex items-start justify-between gap-space-sm">
        <PillBadge tone={tone} className="px-3 py-1 text-[11px]">
          {step} · {tag}
        </PillBadge>
        <span className="text-xl" aria-hidden>
          {icon}
        </span>
      </div>

      <h3 className="mb-3 font-display text-headline-md uppercase tracking-tight text-on-surface">{title}</h3>
      <p className="font-body text-body-sm leading-relaxed text-on-surface-variant">{body}</p>

      <div className="mt-auto flex items-center justify-between gap-space-sm border-t-2 border-ink/15 pt-4 font-display text-label-sm font-bold uppercase text-on-surface">
        <span>{meta}</span>
        <span className="text-on-surface-variant" aria-hidden>
          ✓
        </span>
      </div>
    </article>
  )
}
