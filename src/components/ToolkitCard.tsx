import type { ReactNode } from 'react'
import { BrutalButton } from './BrutalButton'
import { PillBadge, type Tone } from './PillBadge'

type ToolkitCardProps = {
  index: string
  tag: string
  tone: Tone
  mediaIcon: ReactNode
  mediaLabel: string
  title: string
  body: string
  action: string
  actionTone: Tone
}

/** "Modular Toolkits" feature card from the Neo-Brutalist wireframe screen. */
export function ToolkitCard({
  index,
  tag,
  tone,
  mediaIcon,
  mediaLabel,
  title,
  body,
  action,
  actionTone,
}: ToolkitCardProps) {
  return (
    <article className="flex h-full flex-col justify-between rounded-3xl border-brutal-pop border-ink bg-white p-6 shadow-brutal-xl transition-all hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-brutal-2xl">
      <div>
        <div className="mb-4 flex items-center justify-between">
          <PillBadge tone={tone} className="px-3 py-1 text-[11px]">
            {tag}
          </PillBadge>
          <span className="font-display text-xs font-black">{index}</span>
        </div>

        {/* dashed wireframe media slot */}
        <div className="mb-5 flex h-40 w-full flex-col items-center justify-center gap-1 rounded-2xl border-2 border-dashed border-ink bg-canvas-wire">
          <span className="text-2xl">{mediaIcon}</span>
          <span className="font-display text-xs font-black uppercase tracking-[0.08em] text-ink">{mediaLabel}</span>
        </div>

        <h3 className="mb-2 font-display text-2xl font-black text-ink">{title}</h3>
        <p className="mb-6 font-body text-sm font-medium leading-relaxed text-neutral-700">{body}</p>
      </div>

      <BrutalButton tone={actionTone} className="w-full rounded-xl py-3.5">
        {action} <span aria-hidden>→</span>
      </BrutalButton>
    </article>
  )
}
