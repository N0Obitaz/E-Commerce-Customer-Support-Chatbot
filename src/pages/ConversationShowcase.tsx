import { useEffect, useState, type ReactNode } from 'react'
import { BrutalButton } from '../components/BrutalButton'
import { BrutalCard } from '../components/BrutalCard'
import { ChatMessage } from '../components/ChatMessage'
import { ChatWindow, type ChatWindowProps } from '../components/ChatWindow'
import { CodeChip, TelemetryBar } from '../components/TelemetryBar'
import { PillBadge, type Tone } from '../components/PillBadge'
import { SiteFooter } from '../components/SiteFooter'
import { SiteHeader } from '../components/SiteHeader'
import { TextField } from '../components/TextField'

type Msg = {
  side: 'customer' | 'bot'
  author: string
  time: string
  avatar: string
  avatarTone?: Tone
  badge?: { label: string; tone: Tone }
  actions?: ReactNode
  body: ReactNode
}

type Scenario = {
  id: string
  tabLabel: string
  dotClass: string
  hoverClass: string
  accent: NonNullable<ChatWindowProps['accent']>
  title: string
  titleIcon: string
  session: string
  latency: string
  status: { label: string; tone: Tone }
  messages: Msg[]
  telemetry: { left: ReactNode; right: ReactNode }
  prompt: string
  toast: string
}

/* ------------------------------------------------------------------ */
/* Scenario content (faithful to the Stitch screenshots)               */
/* ------------------------------------------------------------------ */

const scenarios: Scenario[] = [
  {
    id: 'tab1',
    tabLabel: '01. Order & Stock',
    dotClass: 'bg-primary-container',
    hoverClass: 'hover:bg-primary-fixed',
    accent: 'primary',
    title: '01. Order & Stock Inquiries',
    titleIcon: '🚚',
    session: 'Session #8491',
    latency: 'Latency: 38ms',
    status: { label: 'Resolved', tone: 'success' },
    prompt: 'Customer prompt: Track my FedEx package & check stock inventory',
    toast: 'Scenario 1: Live order and stock API simulation verified!',
    messages: [
      {
        side: 'customer',
        author: 'Alex M.',
        time: '10:14 AM',
        avatar: 'A',
        body: (
          <>
            Hey! Can you track package for order <strong>#US-98211</strong>? Also is the Cyber Hoodie in Medium back in
            stock at the Seattle hub?
          </>
        ),
      },
      {
        side: 'bot',
        author: 'AI Copilot',
        time: '10:14 AM',
        avatar: '🤖',
        avatarTone: 'primary',
        badge: { label: 'Carrier Hook', tone: 'primary' },
        actions: (
          <>
            <BrutalButton tone="neutral" size="sm" className="shadow-brutal-xs">
              🚚 Track FedEx Live
            </BrutalButton>
            <BrutalButton tone="primary" size="sm" className="shadow-brutal-xs">
              ⚡ Reserve Cyber Hoodie (M)
            </BrutalButton>
          </>
        ),
        body: (
          <>
            <p>
              Hey Alex! 👋 Checked your order right now: Your order <strong>#US-98211</strong> (Apex Cargo Jacket) is out
              for delivery via FedEx (ETA: <strong>3:30 PM today</strong>, tracking ID:{' '}
              <CodeChip>FX-9920148</CodeChip>).
            </p>
            <p className="mt-2">
              Regarding the <strong>Cyber Hoodie (M - Onyx)</strong>: Good news! It was restocked 14 minutes ago with{' '}
              <strong>6 units</strong> at our Pacific NW hub.
            </p>
          </>
        ),
      },
      {
        side: 'customer',
        author: 'Alex M.',
        time: '10:15 AM',
        avatar: 'A',
        body: <>Awesome! Reserve 1x Medium for me right now.</>,
      },
      {
        side: 'bot',
        author: 'AI Copilot',
        time: '10:15 AM',
        avatar: '🤖',
        avatarTone: 'primary',
        badge: { label: 'Stock Locked', tone: 'success' },
        body: (
          <>
            Done! ✅ 1x <strong>Cyber Hoodie (M - Onyx)</strong> is reserved under your profile for the next 45 minutes.
            A 1-click cart checkout link has been sent to your SMS (<CodeChip>***-***-8419</CodeChip>).
          </>
        ),
      },
    ],
    telemetry: {
      left: (
        <>
          <span className="font-display text-label-sm font-bold uppercase text-on-surface-variant">{} API:</span>
          <CodeChip>Shopify_GraphQL + FedEx_ShipManager</CodeChip>
        </>
      ),
      right: (
        <>
          <span className="font-display text-label-sm font-bold uppercase text-on-surface-variant">
            Execution: <strong className="text-on-surface">0.8s</strong>
          </span>
          <span className="flex items-center gap-1 font-display text-label-sm font-bold uppercase text-success-strong">
            <span className="h-2 w-2 rounded-full bg-success-strong" /> 200 OK
          </span>
        </>
      ),
    },
  },
  {
    id: 'tab2',
    tabLabel: '02. Returns & Refunds',
    dotClass: 'bg-tertiary-container',
    hoverClass: 'hover:bg-tertiary-fixed',
    accent: 'tertiary',
    title: '02. Returns & Refunds Automation',
    titleIcon: '💱',
    session: 'Session #8504',
    latency: 'Latency: 42ms',
    status: { label: 'Auto-Refunded', tone: 'tertiary' },
    prompt: 'Customer prompt: Verify order #US-97804 and issue $128.50 refund',
    toast: 'Scenario 2: Automated return ledger & QR label generated!',
    messages: [
      {
        side: 'customer',
        author: 'Marcus Vance',
        time: '11:02 AM',
        avatar: 'M',
        body: (
          <>
            I got the wrong size shoes on order <strong>#US-97804</strong> last week. Am I eligible for a full refund or
            exchange?
          </>
        ),
      },
      {
        side: 'bot',
        author: 'AI Copilot',
        time: '11:02 AM',
        avatar: '🤖',
        avatarTone: 'tertiary',
        badge: { label: 'Policy Check', tone: 'tertiary' },
        body: (
          <>
            <p>
              Hi Marcus! Let me verify your purchase details. 🕵 Checking order <strong>#US-97804</strong>:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-body-sm font-medium">
              <li>
                Delivered: <strong>6 days ago</strong> (Within official 30-day window)
              </li>
              <li>Condition: Unworn / Tags attached verified via return portal</li>
            </ul>
            <p className="mt-2">
              You are <strong>100% eligible</strong> for an immediate full refund of <strong>$128.50</strong> or a free
              priority size exchange!
            </p>
          </>
        ),
      },
      {
        side: 'customer',
        author: 'Marcus Vance',
        time: '11:03 AM',
        avatar: 'M',
        body: <>I'd prefer a full refund to my Visa please.</>,
      },
      {
        side: 'bot',
        author: 'AI Copilot',
        time: '11:03 AM',
        avatar: '🤖',
        avatarTone: 'tertiary',
        badge: { label: 'Ledger Settled', tone: 'success' },
        actions: (
          <>
            <BrutalButton tone="neutral" size="sm" className="shadow-brutal-xs">
              📄 Download Prepaid UPS Label
            </BrutalButton>
            <BrutalButton tone="tertiary" size="sm" className="shadow-brutal-xs">
              ▦ View Mobile QR Code
            </BrutalButton>
          </>
        ),
        body: (
          <>
            <p>
              Approved! 💸 We've initiated a direct refund of <strong>$128.50</strong> back to your Visa ending in{' '}
              <CodeChip>4102</CodeChip>.
            </p>
            <p className="mt-2">
              A prepaid return shipping label and mobile QR code has been generated. No printer required — just show the
              QR code at any UPS drop-off!
            </p>
          </>
        ),
      },
    ],
    telemetry: {
      left: (
        <>
          <span className="font-display text-label-sm font-bold uppercase text-on-surface-variant">🛡 Policy:</span>
          <CodeChip>Tier-1 Auto-Refund &lt; $150 // Stripe_Reversal</CodeChip>
        </>
      ),
      right: (
        <>
          <span className="font-display text-label-sm font-bold uppercase text-on-surface-variant">
            Fraud Score: <strong className="text-on-surface">0.02 (Low / Passed)</strong>
          </span>
          <span className="flex items-center gap-1 font-display text-label-sm font-bold uppercase text-success-strong">
            <span className="h-2 w-2 rounded-full bg-success-strong" /> Stripe Settled
          </span>
        </>
      ),
    },
  },
  {
    id: 'tab3',
    tabLabel: '03. Policy & RAG',
    dotClass: 'bg-secondary-container',
    hoverClass: 'hover:bg-secondary-fixed',
    accent: 'secondary',
    title: '03. Policy Citations & RAG Engine',
    titleIcon: '📖',
    session: 'Session #8519',
    latency: 'Latency: 51ms',
    status: { label: 'Doc Verified', tone: 'secondary' },
    prompt: 'Customer prompt: Rain damage policy & 8-month battery degradation coverage',
    toast: 'Scenario 3: Vector similarity matching & citation audit successful!',
    messages: [
      {
        side: 'customer',
        author: 'Elena Rostova',
        time: '1:40 PM',
        avatar: 'E',
        body: (
          <>
            What is your policy if my electronics get damaged by rain during transit? Also does warranty cover battery
            degradation after 8 months?
          </>
        ),
      },
      {
        side: 'bot',
        author: 'AI Copilot',
        time: '1:40 PM',
        avatar: '🤖',
        avatarTone: 'secondary',
        badge: { label: 'RAG Verified', tone: 'secondary' },
        body: (
          <>
            <p>Great question! Here are the verified clauses from our official policy documents:</p>

            <div className="mt-3 flex flex-col gap-2">
              <div className="rounded-lg border-[2px] border-ink bg-surface-container p-space-sm">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-display text-label-sm font-bold uppercase text-on-surface">
                    Transit Damage (Section 4.3)
                  </span>
                  <span className="font-display text-label-sm font-bold text-on-surface-variant">MATCH: 99.4%</span>
                </div>
                <p className="mt-1 text-body-sm text-on-surface">
                  All packages are fully insured against environmental or weather damage during transit. If damaged,
                  submit a photo within 48 hours for immediate same-day replacement dispatch.
                </p>
                <span className="mt-2 inline-flex items-center gap-1 rounded border border-ink bg-white px-1.5 py-0.5 text-[11px] font-bold">
                  📎 Cited: Transit_Protection_Policy_v4.pdf #Sec4.3
                </span>
              </div>

              <div className="rounded-lg border-[2px] border-ink bg-surface-container p-space-sm">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-display text-label-sm font-bold uppercase text-on-surface">
                    Battery Health Warranty (Section 7.1)
                  </span>
                  <span className="font-display text-label-sm font-bold text-on-surface-variant">MATCH: 98.9%</span>
                </div>
                <p className="mt-1 text-body-sm text-on-surface">
                  Our 1-year limited hardware warranty covers any battery capacity degradation dropping below 80% of
                  original design capacity within 12 months. Since you are at 8 months, diagnostics and replacement are
                  100% covered at zero cost.
                </p>
                <span className="mt-2 inline-flex items-center gap-1 rounded border border-ink bg-white px-1.5 py-0.5 text-[11px] font-bold">
                  📎 Cited: Hardware_Warranty_2025.pdf #Sec7.1
                </span>
              </div>
            </div>

            <p className="mt-3 text-body-sm font-semibold text-on-surface-variant">
              Zero guesswork: Extracted directly from official legal and hardware manuals.
            </p>
          </>
        ),
      },
    ],
    telemetry: {
      left: (
        <>
          <span className="font-display text-label-sm font-bold uppercase text-on-surface-variant">🔎 RAG Engine:</span>
          <CodeChip>Pinecone_Vector_v3 + ZeroHallucination_Guard</CodeChip>
        </>
      ),
      right: (
        <>
          <span className="font-display text-label-sm font-bold uppercase text-on-surface-variant">
            Hallucination Risk: <strong className="text-success-strong">0.00%</strong>
          </span>
          <span className="flex items-center gap-1 font-display text-label-sm font-bold uppercase text-secondary">
            <span className="h-2 w-2 rounded-full bg-secondary-container" /> Vector Match 99.4%
          </span>
        </>
      ),
    },
  },
  {
    id: 'tab4',
    tabLabel: '04. Brand Voice',
    dotClass: 'bg-success',
    hoverClass: 'hover:bg-success/40',
    accent: 'success',
    title: '04. Empathetic Brand Voice & De-escalation',
    titleIcon: '💚',
    session: 'Session #8530',
    latency: 'Latency: 32ms',
    status: { label: 'CSAT 5.0 / 5.0', tone: 'success' },
    prompt: 'Customer prompt: Anniversary gift delay anxiety de-escalation test',
    toast: 'Scenario 4: Empathy guardrail calibrated at 99.8% warmth!',
    messages: [
      {
        side: 'customer',
        author: 'Samantha Reed',
        time: '4:18 PM',
        avatar: 'S',
        body: <>I was super stressed because my anniversary gift hasn't arrived and our party is tomorrow evening! 😥</>,
      },
      {
        side: 'bot',
        author: 'AI Copilot',
        time: '4:18 PM',
        avatar: '🤖',
        avatarTone: 'success',
        badge: { label: 'Empathy Engine', tone: 'success' },
        body: (
          <>
            <p>
              Oh no! 😟 Samantha, I completely understand how stressful that is — anniversary surprises need to be
              absolutely perfect! Let's get this sorted out right this second so you don't have to worry another minute.
            </p>
            <p className="mt-2">
              I just checked the driver route for your gift order <strong>#US-99120</strong>: The courier is currently in
              your neighborhood (Stop #14, you are Stop #18). Guaranteed delivery is by{' '}
              <strong>2:15 PM tomorrow</strong>, well before your party!
            </p>
            <p className="mt-2">I have also appended an urgent high-priority dispatch note to the route driver. 📌</p>
          </>
        ),
      },
      {
        side: 'customer',
        author: 'Samantha Reed',
        time: '4:19 PM',
        avatar: 'S',
        body: <>You are an absolute lifesaver, thank you so much for the quick reassurance!</>,
      },
      {
        side: 'bot',
        author: 'AI Copilot',
        time: '4:19 PM',
        avatar: '🤖',
        avatarTone: 'success',
        badge: { label: 'Sentiment: Delight', tone: 'success' },
        body: <>Anytime! Have the happiest anniversary celebration tomorrow! 🎉 If you need anything else, I'm right here 24/7.</>,
      },
    ],
    telemetry: {
      left: (
        <>
          <span className="font-display text-label-sm font-bold uppercase text-on-surface-variant">
            😊 Sentiment Trajectory:
          </span>
          <CodeChip>Severe_Stress (-0.84) → Delighted (+0.96)</CodeChip>
        </>
      ),
      right: (
        <>
          <span className="font-display text-label-sm font-bold uppercase text-on-surface-variant">
            Warmth Index: <strong className="text-success-strong">99.8%</strong>
          </span>
          <span className="flex items-center gap-1 font-display text-label-sm font-bold uppercase text-success-strong">
            <span className="h-2 w-2 rounded-full bg-success-strong" /> Zero Escalation
          </span>
        </>
      ),
    },
  },
]

const matrixColumns = [
  'Scenario Domain',
  'Core Connectors',
  'Policy Constraint',
  'Telemetry Latency',
  'Human Escalation',
]

const matrixRows = [
  {
    dot: 'bg-primary-container',
    hover: 'hover:bg-primary-container/10',
    domain: '01. Order & Stock Tracking',
    connectors: 'Shopify Plus GraphQL, FedEx ShipManager v2',
    constraint: 'Inventory hold limit: max 45 min per SKU',
    latency: '38ms ± 4ms',
    escalation: '0.4% (Autonomous)',
  },
  {
    dot: 'bg-tertiary-container',
    hover: 'hover:bg-tertiary-container/10',
    domain: '02. Returns & Auto-Refunds',
    connectors: 'Stripe Issuing, UPS API, ReturnLogic Engine',
    constraint: 'Autonomous approval for order value < $150',
    latency: '42ms ± 6ms',
    escalation: '1.1% (Autonomous)',
  },
  {
    dot: 'bg-secondary-container',
    hover: 'hover:bg-secondary-container/10',
    domain: '03. Policy Citations & RAG',
    connectors: 'Pinecone Vector v3, Official PDF Indexer',
    constraint: 'Strict quote assertion, 0% hallucination guard',
    latency: '51ms ± 8ms',
    escalation: '0.0% (Deterministic)',
  },
  {
    dot: 'bg-success',
    hover: 'hover:bg-surface-container',
    domain: '04. Empathetic De-escalation',
    connectors: 'VADER & RoBERTa Sentiment Stream, Driver GPS',
    constraint: 'Real-time tone adjustment, driver note dispatch',
    latency: '32ms ± 3ms',
    escalation: '0.2% (De-escalated)',
  },
]

/* ------------------------------------------------------------------ */
/* Scenario window                                                     */
/* ------------------------------------------------------------------ */

function ScenarioWindow({
  scenario,
  compact,
  onSimulate,
}: {
  scenario: Scenario
  compact?: boolean
  onSimulate: (message: string) => void
}) {
  return (
    <ChatWindow
      accent={scenario.accent}
      title={scenario.title}
      icon={<span aria-hidden>{scenario.titleIcon}</span>}
      badges={
        <>
          <PillBadge tone="neutral" shape="square" className="px-2 py-1 text-[10px]">
            {scenario.session}
          </PillBadge>
          <PillBadge tone="neutral" shape="square" className="px-2 py-1 text-[10px]">
            {scenario.latency}
          </PillBadge>
          <PillBadge tone={scenario.status.tone} shape="square" className="px-2 py-1 text-[10px]">
            {scenario.status.label}
          </PillBadge>
        </>
      }
      footer={
        <>
          <TelemetryBar left={scenario.telemetry.left} right={scenario.telemetry.right} />
          <div className="flex flex-col gap-space-sm border-t-brutal border-ink bg-white p-space-md sm:flex-row sm:items-center">
            <div className="flex-1">
              <TextField readOnly value={scenario.prompt} tabIndex={-1} className="h-11 cursor-default" />
            </div>
            <BrutalButton
              tone={scenario.accent === 'success' ? 'success' : scenario.accent}
              size="md"
              onClick={() => onSimulate(scenario.toast)}
            >
              Simulate Again
            </BrutalButton>
          </div>
        </>
      }
    >
      <div
        className={`chat-stream flex flex-col gap-space-lg overflow-y-auto bg-canvas-chat p-space-lg ${
          compact ? 'max-h-72' : 'max-h-[580px]'
        }`}
      >
        {scenario.messages.map((message, index) => (
          <ChatMessage
            key={index}
            side={message.side}
            author={message.author}
            time={message.time}
            avatar={message.avatar}
            avatarTone={message.avatarTone}
            badge={message.badge}
            actions={message.actions}
          >
            {message.body}
          </ChatMessage>
        ))}
      </div>
    </ChatWindow>
  )
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

/** Screen 6 — 24/7 Support Bot · 4 Core Conversation Showcase. */
export default function ConversationShowcase() {
  const [activeTab, setActiveTab] = useState<string>('tab1')
  const [showGrid, setShowGrid] = useState(false)
  const [toast, setToast] = useState<string | null>(null)

  useEffect(() => {
    if (!toast) return
    const timer = setTimeout(() => setToast(null), 2600)
    return () => clearTimeout(timer)
  }, [toast])

  const active = scenarios.find((scenario) => scenario.id === activeTab) ?? scenarios[0]

  return (
    <div className="min-h-screen bg-canvas">
      <SiteHeader />

      <main className="mx-auto w-full max-w-[1440px] px-gutter pb-16 pt-space-xl">
        {/* hero: title (8 cols) + system spec (4 cols) */}
        <div className="grid grid-cols-1 items-stretch gap-space-lg lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="flex flex-wrap items-center justify-between gap-space-sm">
              <PillBadge tone="primary">● 24/7 Autonomous Interaction Matrix</PillBadge>
              <div className="flex flex-wrap items-center gap-space-sm">
                <PillBadge tone="neutral" shape="square">
                  Avg Latency: 38.2ms
                </PillBadge>
                <PillBadge tone="success" shape="square">
                  Zero-Hallucination: 100.0% Verified
                </PillBadge>
              </div>
            </div>

            <h1 className="mt-space-lg font-display text-display-hero-mobile font-bold uppercase leading-none tracking-tight text-on-surface lg:text-display-hero">
              Conversation Benchmark{' '}
              <span className="mt-2 inline-block -rotate-1 border-brutal-strong border-ink bg-primary-container px-space-xs shadow-brutal-md">
                4 Core Scenarios
              </span>
            </h1>
          </div>

          <div className="flex flex-col justify-center gap-space-sm lg:col-span-4">
            <BrutalCard className="p-space-lg" shadow="lg">
              <span className="font-display text-label-lg font-bold uppercase text-ink">
                🖥 System Specification
              </span>
              <p className="mt-2 font-body text-body-md leading-relaxed text-on-surface-variant">
                Explore live autonomous dialogues across all 4 operational tiers. Each scenario demonstrates
                deterministic policy constraints, live telemetry webhooks, and brand fidelity.
              </p>
            </BrutalCard>
          </div>
        </div>

        {/* scenario tabs */}
        <div className="mt-space-xl flex flex-wrap items-center gap-space-sm">
          {scenarios.map((scenario) => {
            const isActive = !showGrid && activeTab === scenario.id
            return (
              <button
                key={scenario.id}
                type="button"
                onClick={() => {
                  setActiveTab(scenario.id)
                  setShowGrid(false)
                }}
                className={`flex items-center gap-space-xs rounded-lg border-brutal border-ink px-space-md py-space-sm font-display text-label-lg font-semibold uppercase shadow-brutal-sm transition-all active:translate-x-[2px] active:translate-y-[2px] active:shadow-brutal-press ${
                  isActive ? 'bg-primary-container' : `bg-white ${scenario.hoverClass}`
                }`}
              >
                <span className={`h-3 w-3 rounded-full border border-ink ${scenario.dotClass}`} />
                {scenario.tabLabel}
              </button>
            )
          })}

          <button
            type="button"
            onClick={() => setShowGrid(true)}
            className={`ml-auto flex items-center gap-space-xs rounded-lg border-brutal border-ink px-space-md py-space-sm font-display text-label-lg font-semibold uppercase shadow-brutal-sm transition-all active:translate-x-[2px] active:translate-y-[2px] active:shadow-brutal-press ${
              showGrid ? 'bg-primary-container' : 'bg-white hover:bg-surface-container'
            }`}
          >
            ▦ Grid View (All 4)
          </button>
        </div>

        {/* scenario windows */}
        <div className="mt-space-lg">
          {showGrid ? (
            <div className="grid grid-cols-1 items-start gap-space-xl xl:grid-cols-2">
              {scenarios.map((scenario) => (
                <ScenarioWindow key={scenario.id} scenario={scenario} compact onSimulate={setToast} />
              ))}
            </div>
          ) : (
            <ScenarioWindow scenario={active} onSimulate={setToast} />
          )}
        </div>

        {/* operational matrix */}
        <section className="mt-space-2xl flex flex-col gap-space-md">
          <div className="flex flex-wrap items-center justify-between gap-space-sm">
            <div className="flex items-center gap-space-xs">
              <span className="text-xl" aria-hidden>
                🔗
              </span>
              <h2 className="font-display text-headline-md font-semibold uppercase tracking-tight text-on-surface">
                Operational Matrix Comparison
              </h2>
            </div>
            <PillBadge tone="neutral" shape="square">
              Benchmark data: 10,000 concurrent dialogues
            </PillBadge>
          </div>

          <div className="overflow-x-auto rounded-xl border-brutal border-ink bg-white shadow-brutal">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b-brutal border-ink bg-surface-container">
                  {matrixColumns.map((column) => (
                    <th
                      key={column}
                      className="p-space-md font-display text-label-lg font-semibold uppercase text-on-surface"
                    >
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y-[2px] divide-ink/20">
                {matrixRows.map((row) => (
                  <tr key={row.domain} className={`transition-colors ${row.hover}`}>
                    <td className="p-space-md">
                      <span className="flex items-center gap-2 font-display text-headline-sm font-semibold text-on-surface">
                        <span className={`h-3 w-3 shrink-0 rounded-full border border-ink ${row.dot}`} />
                        {row.domain}
                      </span>
                    </td>
                    <td className="p-space-md font-body text-body-sm font-semibold text-on-surface">
                      {row.connectors}
                    </td>
                    <td className="p-space-md font-body text-body-sm text-on-surface">{row.constraint}</td>
                    <td className="p-space-md font-mono text-body-sm font-bold text-on-surface">{row.latency}</td>
                    <td className="p-space-md">
                      <span className="rounded border border-ink bg-success/20 px-2 py-0.5 font-display text-label-sm font-bold text-success-strong">
                        {row.escalation}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>

      <SiteFooter />

      {/* interaction toast */}
      <div
        role="status"
        className={`fixed bottom-6 right-6 z-50 flex items-center gap-space-sm rounded-lg border-brutal border-ink bg-primary-container px-space-md py-space-sm font-display text-label-lg font-bold text-on-surface shadow-brutal-md transition-all duration-300 ${
          toast ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
        }`}
      >
        <span aria-hidden>✅</span>
        {toast ?? 'Simulation Updated'}
      </div>
    </div>
  )
}
