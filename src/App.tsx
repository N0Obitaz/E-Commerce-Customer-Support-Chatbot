import { useState } from 'react'
import NeoBrutalistTemplate from './pages/NeoBrutalistTemplate'
import SupportBotLanding from './pages/SupportBotLanding'
import ConversationShowcase from './pages/ConversationShowcase'

const screens = [
  { id: 'template', label: '01 · Neo-Brutalist Template' },
  { id: 'support', label: '02 · Support Bot Landing' },
  { id: 'showcase', label: '03 · Conversation Showcase' },
] as const

type ScreenId = (typeof screens)[number]['id']

export default function App() {
  const [active, setActive] = useState<ScreenId>('template')

  return (
    <div className="min-h-screen bg-canvas">
      <nav className="border-b-brutal border-ink bg-white">
        <div className="mx-auto flex max-w-[1440px] flex-wrap items-center gap-2 px-gutter py-3">
          <span className="mr-2 font-display text-label-lg font-bold uppercase tracking-[0.08em] text-ink">
            Stitch Screens
          </span>
          {screens.map((screen) => (
            <button
              key={screen.id}
              onClick={() => setActive(screen.id)}
              className={`rounded-lg border-brutal border-ink px-3 py-2 font-display text-label-sm font-bold uppercase tracking-[0.04em] transition-all active:translate-x-[2px] active:translate-y-[2px] ${
                active === screen.id
                  ? 'bg-primary-container shadow-brutal-sm'
                  : 'bg-white shadow-brutal-xs hover:bg-primary-fixed'
              }`}
            >
              {screen.label}
            </button>
          ))}
        </div>
      </nav>

      {active === 'template' && <NeoBrutalistTemplate />}
      {active === 'support' && <SupportBotLanding />}
      {active === 'showcase' && <ConversationShowcase />}
    </div>
  )
}
