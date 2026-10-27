/** Bordered footer shared by the Support Bot screens. */
export function SiteFooter() {
  return (
    <footer className="mt-space-2xl w-full border-t-brutal border-ink bg-white">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center justify-between gap-space-md px-gutter py-space-xl md:flex-row">
        <div className="flex flex-wrap items-center gap-space-md">
          <span className="rounded-md border-[2px] border-ink bg-surface-container px-space-sm py-space-xs font-display text-label-sm font-bold uppercase shadow-brutal-xs">
            Version 2.4.0-prod
          </span>
          <span className="rounded-md border-[2px] border-ink bg-white px-space-sm py-space-xs font-display text-label-sm font-bold uppercase shadow-brutal-xs">
            Cluster: US-East-Edge-01
          </span>
          <span className="font-body text-body-sm text-on-surface-variant">
            Autonomous customer engineering engine
          </span>
        </div>
        <span className="font-display text-label-sm font-semibold uppercase text-on-surface">
          © 2025 SupportBot.AI Systems Inc.
        </span>
      </div>
    </footer>
  )
}
