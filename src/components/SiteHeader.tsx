import { BrutalButton } from './BrutalButton'

const navLinks = ['Core Capabilities', 'Live Logs', 'Integrations']

/** Fixed/sticky product header shared by the Support Bot screens. */
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b-brutal border-ink bg-white">
      <div className="mx-auto flex w-full max-w-[1440px] items-center gap-space-md px-gutter py-3">
        {/* logo block */}
        <div className="flex h-12 shrink-0 items-center rounded-md border-brutal border-ink bg-primary-container px-3 font-display text-[13px] font-bold uppercase leading-[1.05] tracking-tight shadow-brutal-xs">
          AI Customer
          <br />
          Support
        </div>

        <span className="hidden items-center rounded-lg border-brutal border-ink bg-white px-3 py-2 font-display text-label-sm font-bold uppercase leading-tight shadow-brutal-xs xl:inline-flex">
          24/7 AI Agent •
          <br />
          Autonomous Support
        </span>

        <span className="hidden items-center gap-2 rounded-lg border-brutal border-ink bg-white px-3 py-2 font-label-sm font-semibold uppercase shadow-brutal-xs lg:inline-flex">
          <span className="h-2 w-2 rounded-full bg-success-strong" />
          System: Online
          <br />
          99.98% Uptime
        </span>

        <nav className="ml-auto hidden items-center gap-space-lg font-body text-body-sm text-on-surface lg:flex">
          <span className="rounded-md border-brutal border-ink bg-primary-container px-3 py-2 font-display text-label-sm font-bold uppercase shadow-brutal-xs">
            Interactive Demo
          </span>
          {navLinks.map((link) => (
            <a key={link} href="#" className="font-medium hover:underline">
              {link}
            </a>
          ))}
        </nav>

        <BrutalButton tone="secondary" size="md" className="ml-auto shrink-0 lg:ml-0">
          Deploy
          <br />
          Agent
        </BrutalButton>

        <span className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full border-brutal border-ink bg-success shadow-brutal-xs sm:flex">
          <span className="text-sm">👤</span>
        </span>
      </div>
    </header>
  )
}
