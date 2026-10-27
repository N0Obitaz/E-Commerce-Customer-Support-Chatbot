import { BrutalButton } from '../components/BrutalButton'
import { CtaBanner } from '../components/CtaBanner'
import { PillBadge } from '../components/PillBadge'
import { TextField } from '../components/TextField'
import { ToolkitCard } from '../components/ToolkitCard'

const stats = [
  { value: '50+', label: 'Curated Tools', tone: 'success' as const },
  { value: '12k', label: 'Builders', tone: 'primary' as const },
  { value: '100%', label: 'Free Stack', tone: 'tertiary' as const },
  { value: '4.9★', label: 'Community Rating', tone: 'secondary' as const },
]

const toolkits = [
  {
    index: '#01',
    tag: 'Generator',
    tone: 'tertiary' as const,
    mediaIcon: '⚡',
    mediaLabel: 'Dynamic Prompt Engine',
    title: 'AI Prompt Matrix',
    body: 'Handcrafted prompt scaffolds for product marketing, micro-copy, and instant prototype generation.',
    action: 'Explore Matrix',
    actionTone: 'primary' as const,
  },
  {
    index: '#02',
    tag: 'Templates',
    tone: 'secondary' as const,
    mediaIcon: '▣',
    mediaLabel: 'UI Wireframe Kit',
    title: 'Brutalist UI Kit',
    body: 'Component-based layout system with high-contrast borders, tactile drop shadows, and lively accents.',
    action: 'Download Kit',
    actionTone: 'tertiary' as const,
  },
  {
    index: '#03',
    tag: 'Directory',
    tone: 'success' as const,
    mediaIcon: '▤',
    mediaLabel: 'Stack Curation',
    title: 'Zero-Code Stacks',
    body: 'Vetted modern tools allowing solopreneurs to launch live revenue-generating digital stores in 48h.',
    action: 'Browse Directory',
    actionTone: 'secondary' as const,
  },
]

/** Hero tile: miniature recreation of the uploaded reference image (screen "image.png"). */
function HeroLogoTile() {
  return (
    <div className="relative h-48 w-48 rounded-3xl border-brutal-pop border-ink bg-white p-3 shadow-brutal-xl sm:h-56 sm:w-56">
      <div className="flex h-full w-full flex-col items-center gap-1.5 overflow-hidden rounded-2xl border-2 border-black/10 bg-canvas-wire p-2">
        <span className="rounded-full border border-ink bg-pop-yellow px-2 py-0.5 text-[5px] font-bold uppercase">
          ⚡ AI Tools • Digital Products • Curations
        </span>
        <span className="flex h-10 w-10 items-center justify-center rounded-md border border-ink bg-[#0b1020] text-sm">
          ☀
        </span>
        <span className="flex items-center gap-1 font-display text-[9px] font-black leading-none">
          Build <span className="rounded border border-ink bg-pop-pink px-1 py-0.5">Smarter</span> .
          <span className="rounded border border-ink bg-pop-blue px-1 py-0.5">Faster</span>
        </span>
        <span className="w-full rounded-md border border-ink bg-white p-1 text-[4px] leading-[1.4] text-neutral-600">
          To democratize the best of AI and modern technology for creators. To build tools that actually help. To share
          knowledge that actually matters.
        </span>
      </div>
    </div>
  )
}

/** Screen 1 — Neo-Brutalist Wireframe Template (2560×4992). */
export default function NeoBrutalistTemplate() {
  return (
    <div className="min-h-screen bg-canvas-wire pb-24 text-ink">
      {/* top announcement */}
      <header className="flex flex-col items-center justify-center px-4 pb-4 pt-8">
        <PillBadge tone="primary" className="px-5 py-2 text-xs shadow-brutal-sm">
          ⚡ AI Tools • Digital Products • Curations
        </PillBadge>
      </header>

      <main className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* hero brand */}
        <section className="mt-4 flex justify-center">
          <HeroLogoTile />
        </section>

        {/* headline with tilted highlight boxes */}
        <section className="mt-10 text-center sm:mt-12">
          <h1 className="flex flex-wrap items-center justify-center gap-x-4 gap-y-3 font-display text-4xl font-black leading-none tracking-tight text-ink sm:gap-x-5 sm:text-6xl md:text-7xl lg:text-8xl">
            <span>Build</span>
            <span className="inline-block -rotate-[1.5deg] rounded-2xl border-brutal-pop border-ink bg-tertiary-container px-4 py-1.5 shadow-brutal transition-all hover:-translate-y-0.5 hover:shadow-brutal-xl sm:rounded-3xl sm:px-6 sm:py-2">
              Smarter
            </span>
            <span className="mr-1 sm:mr-3">.</span>
            <span>Ship</span>
            <span className="inline-block rotate-[1.2deg] rounded-2xl border-brutal-pop border-ink bg-secondary-container px-4 py-1.5 shadow-brutal transition-all hover:-translate-y-0.5 hover:shadow-brutal-xl sm:rounded-3xl sm:px-6 sm:py-2">
              Faster
            </span>
            <span>.</span>
          </h1>
        </section>

        {/* mission */}
        <section className="mx-auto mt-10 max-w-4xl sm:mt-14">
          <div className="rounded-3xl border-brutal-pop border-ink bg-white p-6 shadow-brutal-xl sm:p-10">
            <PillBadge tone="primary">◎ The Mission</PillBadge>
            <p className="mt-6 font-display text-xl font-extrabold leading-snug tracking-tight text-ink sm:text-2xl md:text-3xl">
              To democratize the best of AI and modern technology for creators. To build tools that actually help. To
              share knowledge that actually matters. And to prove that one person with the right tools can build
              something extraordinary.
            </p>
          </div>
        </section>

        {/* stats strip */}
        <section className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className={`rounded-2xl border-brutal-pop border-ink p-4 text-center shadow-brutal transition-all hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-brutal-xl sm:p-5 ${
                stat.tone === 'success'
                  ? 'bg-pop-green'
                  : stat.tone === 'primary'
                    ? 'bg-pop-yellow'
                    : stat.tone === 'tertiary'
                      ? 'bg-pop-pink'
                      : 'bg-pop-blue'
              }`}
            >
              <span className="block font-display text-3xl font-black text-ink sm:text-4xl">{stat.value}</span>
              <span className="font-display text-xs font-extrabold uppercase tracking-wide text-ink sm:text-sm">
                {stat.label}
              </span>
            </div>
          ))}
        </section>

        {/* modular toolkits */}
        <section className="mt-16 sm:mt-20">
          <div className="mb-8 flex flex-col justify-between gap-3 border-b-4 border-ink pb-3 sm:flex-row sm:items-baseline">
            <div>
              <h2 className="font-display text-3xl font-black uppercase tracking-tight sm:text-4xl">
                Modular Toolkits
              </h2>
              <p className="mt-1 font-body text-sm font-bold text-neutral-600">
                Ready-to-deploy modules and brutalist wireframes.
              </p>
            </div>
            <span className="self-start rounded-lg border-brutal-sm border-ink bg-white px-3 py-1 font-display text-xs font-black uppercase shadow-brutal-xs">
              v2.4 Ready
            </span>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3">
            {toolkits.map((toolkit) => (
              <ToolkitCard key={toolkit.title} {...toolkit} />
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-16 sm:mt-24">
          <CtaBanner
            badge={
              <span className="absolute right-6 top-6 hidden -rotate-6 rounded border-brutal-sm border-ink bg-white px-3 py-1 font-display text-xs font-black uppercase shadow-brutal-xs sm:inline-block">
                100% Open & Modular
              </span>
            }
          >
            <div className="text-center">
              <h2 className="font-display text-3xl font-black uppercase tracking-tight text-ink sm:text-5xl">
                Ready to build something extraordinary?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl font-body text-base font-medium text-ink/90 sm:text-xl">
                Get weekly curated tool drops, customizable templates, and full access to our builder library.
              </p>
              <div className="mx-auto mt-8 flex max-w-lg flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
                <TextField type="email" placeholder="enter your email..." className="h-[46px] sm:flex-1" />
                <BrutalButton tone="ink" size="lg" className="whitespace-nowrap">
                  Join 12,000+ Builders
                </BrutalButton>
              </div>
            </div>
          </CtaBanner>
        </section>

        {/* footer pill */}
        <footer className="mt-24 flex justify-center">
          <span className="inline-flex items-center gap-3 rounded-full border-brutal-sm border-ink bg-white px-6 py-2 font-display text-xs font-black uppercase shadow-brutal-sm">
            ⚡ Sunstroke OS <span>•</span> Crafted for Builders
          </span>
        </footer>
      </main>
    </div>
  )
}
