import { Fragment, useRef, useState, type ReactNode } from 'react'
import { BrutalButton } from '../components/BrutalButton'
import { BrutalCard } from '../components/BrutalCard'
import { ChatMessage } from '../components/ChatMessage'
import { ChatWindow } from '../components/ChatWindow'
import { CtaBanner } from '../components/CtaBanner'
import { MetricPill } from '../components/MetricPill'
import { ModuleCard } from '../components/ModuleCard'
import { PillBadge } from '../components/PillBadge'
import { SiteFooter } from '../components/SiteFooter'
import { SiteHeader } from '../components/SiteHeader'
import { TextField } from '../components/TextField'

const testPrompts = [
  'Ask about return policy?',
  'Track order #US-98211?',
  'Check Cyber Hoodie stock',
]

const modules = [
  {
    step: '01',
    tag: 'Order & Stock',
    tone: 'primary' as const,
    icon: '🗺',
    title: 'Real-Time Inventory & Shipping',
    body: 'Instantly checks real-time inventory and delivery logistics via live ERP & carrier webhooks. Customers get exact tracking numbers, package status, warehouse holds, and pre-order dates without queueing.',
    meta: 'Sync interval: <500ms',
  },
  {
    step: '02',
    tag: 'Returns & Refunds',
    tone: 'tertiary' as const,
    icon: '💲',
    title: 'Automated Financial Validation',
    body: 'Automates validation against your exact business rules, issuing instant return shipping labels, printable QR codes, and balance credits while automatically freezing fraudulent multi-claim attempts.',
    meta: 'Fraud guard: Active',
  },
  {
    step: '03',
    tag: 'Policy Verification',
    tone: 'secondary' as const,
    icon: '📖',
    title: 'Cited RAG Intelligence',
    body: 'RAG-powered intelligence citing your official refund, warranty, and Terms of Service documents with verifiable references. Hallucination-free answers anchored directly to specific PDF clauses.',
    meta: 'Zero hallucination mode',
  },
  {
    step: '04',
    tag: 'Brand-Voice Guardrails',
    tone: 'success' as const,
    icon: '🙂',
    title: 'Empathetic & Distinct Tone',
    body: 'Fine-tuned tone guardrails ensuring every reply is friendly, empathetic, and perfectly aligned with your company voice. Sounds like your top customer support engineer, not a sterile robotic script.',
    meta: 'Tone score: 99.8% match',
  },
]

function Highlight({ children, tone, className = '' }: { children: ReactNode; tone: 'secondary' | 'tertiary'; className?: string }) {
  return (
    <span
      className={`inline-block rounded-lg border-brutal-strong border-ink px-space-md py-1 shadow-brutal transition-transform hover:rotate-0 ${
        tone === 'tertiary' ? 'bg-tertiary-container' : 'bg-secondary-container'
      } ${className}`}
    >
      {children}
    </span>
  )
}

function ProgressBar({ value, tone }: { value: number; tone: 'primary' | 'secondary' }) {
  return (
    <div className="mt-1 h-3 w-full overflow-hidden rounded-full border-[2px] border-ink bg-surface-container-low">
      <div
        className={`h-full ${tone === 'primary' ? 'bg-primary-container' : 'bg-secondary-container'}`}
        style={{ width: `${value}%` }}
      />
    </div>
  )
}

/** Screen 2/3/5 — 24/7 AI Customer Support Chatbot landing page (animated chat demo). */
export default function SupportBotLanding() {
  const [draft, setDraft] = useState('')
  const [sent, setSent] = useState<{ id: number; text: string }[]>([])
  const [playKey, setPlayKey] = useState(0)
  const nextId = useRef(1)
  const streamRef = useRef<HTMLDivElement>(null)

  function send() {
    const text = draft.trim()
    if (!text) return
    setSent((prev) => [...prev, { id: nextId.current++, text }])
    setDraft('')
    requestAnimationFrame(() => {
      const el = streamRef.current
      if (el) el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' })
    })
  }

  return (
    <div className="min-h-screen bg-canvas">
      <SiteHeader />

      <main className="w-full pb-16">
        {/* hero */}
        <section className="flex w-full flex-col items-center px-gutter pb-space-2xl pt-space-xl text-center">
          <PillBadge tone="primary">⚡ 24/7 Autonomous Support Engine • Zero Wait Time</PillBadge>

          <div className="relative mt-space-lg h-24 w-24 rounded-2xl border-brutal border-ink bg-[#141414] shadow-brutal-md">
            <span className="absolute right-0 top-0 h-6 w-6 rounded-bl-lg bg-secondary-container" />
            <span className="absolute bottom-0 left-0 h-5 w-5 rounded-tr-lg bg-tertiary-container" />
            <span className="flex h-full items-center justify-center text-3xl">🤖</span>
            <span className="absolute bottom-1 left-1.5 font-mono text-[8px] uppercase text-white/70">core // v2.4</span>
          </div>

          <h1 className="mt-space-xl flex max-w-5xl flex-wrap items-center justify-center gap-x-space-md gap-y-space-sm font-display text-headline-lg font-bold uppercase leading-none tracking-tight text-on-surface sm:text-display-hero">
            <span>Your</span>
            <Highlight tone="tertiary" className="-rotate-1">
              Agent
            </Highlight>
            <span>• That Works</span>
            <Highlight tone="secondary" className="rotate-1">
              24/7
            </Highlight>
          </h1>

          <div className="mt-space-xl w-full max-w-3xl rounded-xl border-brutal border-ink bg-white p-space-lg text-left shadow-brutal-lg">
            <PillBadge tone="primary">◎ The Mission</PillBadge>
            <p className="mt-4 font-body text-body-md leading-relaxed text-on-surface">
              An always-on AI customer support agent fine-tuned to resolve orders, enforce refund rules, cite exact
              warranty documents, and speak naturally in your distinct brand voice. Real outcomes, zero escalation
              loops.
            </p>
          </div>

          <div className="mt-space-lg flex max-w-4xl flex-wrap items-center justify-center gap-space-md">
            <MetricPill tone="neutral">⚡ &lt;1.2s First Response</MetricPill>
            <MetricPill tone="secondary">▣ 94.2% Auto-Resolved</MetricPill>
            <MetricPill tone="neutral">🛡 100% Policy Compliant</MetricPill>
            <MetricPill tone="primary">★ 4.9/5 CSAT Score</MetricPill>
          </div>
        </section>

        {/* simulator + sidebar */}
        <section className="px-gutter pb-space-2xl">
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-space-xl lg:grid-cols-12">
            <ChatWindow
              className="lg:col-span-8"
              accent="primary"
              title="Bot Simulator • Session #8492"
              badges={
                <>
                  <PillBadge tone="primary" shape="square" className="px-2 py-1 text-[10px]">
                    42ms
                  </PillBadge>
                  <button
                    type="button"
                    onClick={() => setPlayKey((key) => key + 1)}
                    className="rounded-md border-hairline border-ink bg-primary-container px-2 py-1 font-display text-[11px] font-bold uppercase shadow-brutal-xs transition-transform active:translate-x-[2px] active:translate-y-[2px]"
                  >
                    ▶ Auto-Play Demo
                  </button>
                </>
              }
              subheader={
                <div className="flex flex-wrap items-center justify-between gap-space-sm border-b-[2px] border-ink bg-surface-container-low px-space-md py-1.5 font-label-sm font-semibold uppercase text-on-surface">
                  <span className="flex flex-wrap items-center gap-space-sm">
                    <span className="rounded border-hairline border-ink bg-pop-yellow px-1.5 py-0.5 text-[10px] font-bold">
                      VIP Tier
                    </span>
                    Customer: Alex Vance (Order #US-98211)
                  </span>
                  <span className="flex flex-wrap items-center gap-space-md text-on-surface-variant">
                    <span>Channel: Webhook Widget</span>
                    <button
                      type="button"
                      onClick={() => {
                        const el = streamRef.current
                        if (el) el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' })
                      }}
                      className="font-bold uppercase text-ink underline hover:text-primary"
                    >
                      ↓ Jump to latest
                    </button>
                  </span>
                </div>
              }
              footer={
                <>
                  <div className="flex flex-wrap items-center gap-space-xs border-t-brutal border-ink bg-surface-container-lowest px-space-md py-space-sm">
                    <span className="font-label-sm font-bold uppercase text-on-surface-variant">Test Prompts:</span>
                    {testPrompts.map((prompt) => (
                      <button
                        key={prompt}
                        type="button"
                        onClick={() => setDraft(prompt)}
                        className="rounded-full border-hairline border-ink bg-white px-2.5 py-1 font-display text-[11px] font-semibold text-on-surface shadow-brutal-xs transition-all hover:-translate-y-0.5 hover:bg-primary-container"
                      >
                        {prompt}
                      </button>
                    ))}
                  </div>
                  <form
                    onSubmit={(event) => {
                      event.preventDefault()
                      send()
                    }}
                    className="flex flex-col gap-space-sm border-t-brutal border-ink bg-white p-space-md sm:flex-row sm:items-center"
                  >
                    <TextField
                      value={draft}
                      onChange={(event) => setDraft(event.target.value)}
                      placeholder="Type simulated customer question (e.g. 'Can I change delivery address?')..."
                      aria-label="Simulated customer question"
                    />
                    <BrutalButton type="submit" tone="primary" size="lg" className="whitespace-nowrap">
                      Send Test <span aria-hidden>→</span>
                    </BrutalButton>
                  </form>
                </>
              }
            >
              <div
                key={playKey}
                ref={streamRef}
                className="chat-stream flex max-h-[580px] flex-col gap-space-lg overflow-y-auto scroll-smooth bg-surface p-space-lg"
              >
                <div className="chat-reveal">
                  <ChatMessage side="customer" author="Alex Vance" time="14:28:10" avatar="AV">
                    Hey! Can you check where my order #US-98211 is? Also is the Cyber Hoodie in Medium back in stock
                    yet?
                  </ChatMessage>
                </div>

                <div className="chat-reveal" style={{ animationDelay: '300ms' }}>
                  <ChatMessage
                    side="bot"
                    author="SupportBot Engine"
                    time="14:28:11"
                    avatar="🤖"
                    avatarTone="primary"
                    badge={{ label: 'Live', tone: 'secondary' }}
                    actions={
                      <>
                        <BrutalButton tone="neutral" size="sm" className="shadow-brutal-xs">
                          🚚 Track Package (Out For Delivery)
                        </BrutalButton>
                        <BrutalButton tone="primary" size="sm" className="shadow-brutal-xs">
                          ⭐ Reserve Cyber Hoodie (M)
                        </BrutalButton>
                      </>
                    }
                  >
                    Hey Alex! 👋 Checked that right now: Your order <strong>#US-98211</strong> (Apex Cargo Jacket) is out
                    for delivery today via FedEx (ETA: 3:30 PM). As for the <strong>Cyber Hoodie (M)</strong>, it just
                    restocked with <strong>14 units</strong> remaining at our West Hub!
                  </ChatMessage>
                </div>

                <div className="chat-reveal" style={{ animationDelay: '600ms' }}>
                  <ChatMessage side="customer" author="Alex Vance" time="14:28:40" avatar="AV">
                    Awesome! Also, I got the wrong size shoes on my previous order last week. Can I get a full refund?
                  </ChatMessage>
                </div>

                <div className="chat-reveal" style={{ animationDelay: '900ms' }}>
                  <ChatMessage
                    side="bot"
                    author="SupportBot Engine"
                    time="16:20:03"
                    avatar="🤖"
                    avatarTone="primary"
                    badge={{ label: 'Policy Check', tone: 'tertiary' }}
                  >
                    Checking our 30-day return policy and your purchase record… ✅ Order <strong>#US-97804</strong> was
                    delivered 6 days ago (unworn condition). You are <strong>100% eligible</strong> for an instant full
                    refund of <strong>$128.50</strong> or free instant exchange. I've initiated the return
                    label—refund credits back to your Visa ending in 4102 as soon as the carrier scans it.
                  </ChatMessage>
                </div>

                {sent.map((message) => (
                  <Fragment key={message.id}>
                    <div className="chat-reveal">
                      <ChatMessage side="customer" author="You" time="now" avatar="YO">
                        {message.text}
                      </ChatMessage>
                    </div>
                    <div className="chat-reveal">
                      <ChatMessage
                        side="bot"
                        author="SupportBot Engine"
                        time="now"
                        avatar="🤖"
                        avatarTone="primary"
                        badge={{ label: 'Simulated', tone: 'success' }}
                      >
                        Simulated reply — connect your Shopify or Zendesk API and this answer resolves against live
                        data in <strong>1.2s</strong>. Everything else stays exactly as scripted above.
                      </ChatMessage>
                    </div>
                  </Fragment>
                ))}
              </div>
            </ChatWindow>

            {/* sidebar */}
            <div className="flex flex-col gap-space-lg lg:col-span-4">
              <BrutalCard className="p-space-md">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="font-display text-headline-sm font-semibold uppercase tracking-tight text-on-surface">
                    Agent State
                  </h3>
                  <PillBadge tone="success" shape="square" className="px-2 py-1 text-[10px]">
                    Online
                  </PillBadge>
                </div>

                <div className="font-label-sm font-bold uppercase text-on-surface">
                  <div className="flex items-center justify-between">
                    <span>Autonomous Confidence</span>
                    <span>98.4%</span>
                  </div>
                  <ProgressBar value={98.4} tone="primary" />
                </div>

                <div className="mt-4 font-label-sm font-bold uppercase text-on-surface">
                  <div className="flex items-center justify-between">
                    <span>Voice Alignment Guardrail</span>
                    <span>Pass (Strict)</span>
                  </div>
                  <ProgressBar value={100} tone="secondary" />
                </div>

                <div className="mt-4">
                  <span className="font-label-sm font-bold uppercase text-on-surface-variant">
                    Active Knowledge Store
                  </span>
                  <div className="mt-1 rounded-lg border-[2px] border-ink bg-surface-container p-2 font-mono text-[11px] leading-relaxed text-on-surface">
                    Shopify_Store_US + Zendesk_KBase_v24 + FedEx_ShipManager_API
                  </div>
                </div>
              </BrutalCard>

              <BrutalCard className="p-space-md">
                <h3 className="font-display text-headline-sm font-semibold uppercase tracking-tight text-on-surface">
                  Autonomous Policies
                </h3>
                <p className="mt-1 font-body text-body-sm text-on-surface-variant">
                  Toggle which actions SupportBot can execute without human supervisory escalation:
                </p>
                <div className="mt-4 flex flex-col gap-space-sm">
                  {['Auto-Issue Refunds <$150', 'Live Inventory Holds', 'Address Change Execution'].map((policy, i) => (
                    <label
                      key={policy}
                      className="flex items-center justify-between gap-space-sm rounded-lg border-[2px] border-ink bg-white px-space-sm py-2 font-display text-label-sm font-bold uppercase shadow-brutal-xs"
                    >
                      {policy}
                      <input
                        type="checkbox"
                        defaultChecked
                        className="h-5 w-5 border-[2px] border-ink"
                        style={{ accentColor: i === 0 ? '#fbbf24' : i === 1 ? '#38bdf8' : '#f472b6' }}
                      />
                    </label>
                  ))}
                </div>
              </BrutalCard>

              <BrutalCard tone="yellow" radius="lg" shadow="xl" className="p-space-md">
                <div className="flex items-start gap-space-sm">
                  <span className="text-xl" aria-hidden>
                    🔗
                  </span>
                  <div>
                    <h3 className="font-display text-label-lg font-bold uppercase text-ink">Zero Migration Cost</h3>
                    <p className="mt-1 font-body text-body-sm text-ink">
                      Connects directly to Gorgias, Zendesk, Intercom, or your standalone custom webhook in 4 clicks.
                    </p>
                  </div>
                </div>
              </BrutalCard>
            </div>
          </div>
        </section>

        {/* system modules */}
        <section className="px-gutter">
          <div className="mx-auto flex max-w-7xl flex-col items-center">
            <PillBadge tone="neutral">▣ System Modules</PillBadge>
            <h2 className="mt-4 font-display text-headline-lg font-bold uppercase tracking-tight text-on-surface">
              Built For Complete Automation
            </h2>
            <p className="mt-2 max-w-xl font-body text-body-md text-on-surface-variant">
              Each architectural module handles specific edge-cases with exact policy constraints and deep third-party
              system execution.
            </p>

            <div className="mt-space-xl grid w-full grid-cols-1 gap-space-lg md:grid-cols-2">
              {modules.map((module) => (
                <ModuleCard key={module.step} {...module} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-gutter pt-space-2xl">
          <div className="mx-auto max-w-5xl">
            <CtaBanner className="!p-8 sm:!p-10">
              <PillBadge tone="neutral" className="mb-5">
                ◎ 100% Autonomous • No Code Needed
              </PillBadge>
              <div className="grid grid-cols-1 items-center gap-space-xl lg:grid-cols-2">
                <div>
                  <h2 className="font-display text-3xl font-bold uppercase leading-tight tracking-tight text-ink sm:text-4xl">
                    Ready to deploy 24/7 support that actually works?
                  </h2>
                  <p className="mt-3 font-body text-body-md text-ink">
                    Connect your Shopify or Zendesk API in minutes. Cut resolution times from 8 hours to 1.2 seconds.
                  </p>
                </div>
                <div className="flex flex-col gap-space-sm">
                  <div className="flex flex-col gap-space-sm sm:flex-row">
                    <TextField type="email" placeholder="work@company.com" className="h-12 sm:flex-1" />
                    <BrutalButton tone="ink" size="lg" className="whitespace-nowrap">
                      Launch Agent ⚡
                    </BrutalButton>
                  </div>
                  <span className="font-display text-label-sm font-bold uppercase text-ink">
                    14-day free live sandbox trial • No credit card required
                  </span>
                </div>
              </div>
            </CtaBanner>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
