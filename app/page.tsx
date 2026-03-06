import Image from 'next/image'
import { FadeIn, Stagger, StaggerItem, HeroEntrance, FadeInSpan, CardHover } from './motion'

const credibilitySignals = [
  'macOS-native runtime',
  'Slack mention intake',
  'PR review + bug fix',
  'Owner autopilot',
  'Traceable execution',
  'Learning memory',
]

const proofStats = [
  { value: '4', label: 'operating modes', detail: 'PR review, bug fix, owner autopilot, and dev assist.' },
  { value: '1', label: 'control surface', detail: 'Slack stays familiar while Watchtower does the routing.' },
  { value: '0', label: 'invisible handoffs', detail: 'Every run leaves a trace instead of turning into folklore.' },
]

const pillars = [
  {
    label: 'Slack-native intake',
    title: 'Engineering work arrives where your team already lives.',
    body: 'Mentions become missions. Watchtower reads the room, detects intent, and picks the right workflow without making people open another dashboard.',
  },
  {
    label: 'Visible autonomy',
    title: 'Automation with receipts, not mystery smoke.',
    body: 'Runs, traces, failures, and sidecar output stay inspectable. Leaders see action and evidence in the same place instead of trusting a black box.',
  },
  {
    label: 'Mac-local control',
    title: 'A desktop operator, not another cloud tab asking for your soul.',
    body: 'Watchtower sits on a Mac, supervises the sidecar locally, and keeps the control plane close to the people responsible for shipping.',
  },
  {
    label: 'Learning loop',
    title: 'The system gets sharper as the team teaches it.',
    body: 'Failure diagnosis, personality memory, and corrections learned from real usage make the next run less noisy and more aligned.',
  },
]

const workflowSteps = [
  {
    index: '01',
    title: 'Slack thread becomes an intake lane.',
    body: 'A mention lands. Watchtower parses the ask, detects whether it is review, bug fix, owner override, or dev assist, then frames the job before chaos can spread.',
    meta: 'Input: real team language, not ceremony.',
  },
  {
    index: '02',
    title: 'The right autonomous path takes the wheel.',
    body: 'PR review, bug fixing, owner autopilot, and operational assistance are treated like different instruments, not one giant hammer pretending to be intelligence.',
    meta: 'Output: action matched to intent.',
  },
  {
    index: '03',
    title: 'Every outcome leaves evidence behind.',
    body: 'Runs stream into traces, recommendations, failures, heat maps, and learning signals so engineering leadership can inspect the system instead of guessing what it did.',
    meta: 'Proof: observable automation instead of folklore.',
  },
]

const learningCards = [
  {
    eyebrow: 'Failure Doctor',
    title: 'When a run stumbles, the diagnosis is part of the product.',
    body: 'Watchtower exposes what failed, why it likely failed, and what to tune next. The postmortem is built into the loop.',
  },
  {
    eyebrow: 'Personality memory',
    title: 'Different channels can feel different without turning inconsistent.',
    body: 'Reply modes and learned tone profiles let the assistant stay human while remaining governable.',
  },
  {
    eyebrow: 'Ops pulse',
    title: 'You get a live sense of where the system is helping and where it is getting dragged.',
    body: 'Channel heat, active jobs, success streaks, and recommendations make the product feel operational, not decorative.',
  },
]

const faqItems = [
  {
    question: 'Is Watchtower another cloud dashboard?',
    answer:
      'No. The core product lives on a Mac and listens from there. The point is not to add another browser tab. The point is to turn Slack requests into governed execution where the owner can still see the machine work.',
  },
  {
    question: 'What kind of work is it designed to handle?',
    answer:
      'Today the shape is clear: PR review, bug-fix runs, owner-directed autopilot work, and developer-assist commands for traces, diagnostics, learning stats, and operational control.',
  },
  {
    question: 'How does a leader stay in control once autonomy starts?',
    answer:
      'By design, Watchtower leaves a paper trail. The app shows runs, traces, failures, live sidecar logs, recommendations, and learning signals so supervision is native to the product.',
  },
  {
    question: 'Why market a Mac-only product?',
    answer:
      'Because constraint can be a feature. The desktop runtime is part of the point: local supervision, clear ownership, and less distributed fog around what is actually operating on your repos.',
  },
]

const traceLines = [
  '[12:08:11] mention.detected owner=eng-lead channel=#release-ops',
  '[12:08:12] intent=BUG_FIX repo=newton-web confidence=0.94',
  '[12:08:14] codex.run start mode=guided',
  '[12:08:21] git.branch codex/hotfix-thread-2217 created',
  '[12:08:36] slack.reply thread updated with progress marker',
  '[12:08:47] learning.signal correction_applied=true',
]

type SectionHeadingProps = {
  eyebrow: string
  title: string
  body: string
}

function SectionHeading({ eyebrow, title, body }: SectionHeadingProps) {
  return (
    <FadeIn className="section-heading">
      <p className="section-eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{body}</p>
    </FadeIn>
  )
}

export default function Home() {
  return (
    <div className="page-shell">
      <a className="skip-link" href="#content">
        Skip to content
      </a>
      <div className="page-shell__noise" />
      <div className="page-shell__beam page-shell__beam--left" />
      <div className="page-shell__beam page-shell__beam--right" />

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Watchtower home">
          <Image
            className="brand__mark"
            src="/watchtower-mark.svg"
            alt=""
            aria-hidden="true"
            width={26}
            height={26}
            priority
          />
          <span>Watchtower</span>
        </a>

        <nav className="site-nav" aria-label="Primary">
          <a href="#why-watchtower">Why</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#proof">Proof</a>
          <a href="#faq">FAQ</a>
          <a href="#demo">Demo</a>
        </nav>

        <a
          className="button button--ghost header-cta"
          href="https://calendly.com/dipeshrajoria"
          target="_blank"
          rel="noreferrer"
        >
          Request demo
        </a>
      </header>

      <main id="content">
        <section className="hero" id="top">
          <div className="hero-copy">
            <HeroEntrance>
              <p className="hero-eyebrow">AUTONOMOUS ENGINEERING OPS FOR LEADERS WHO HATE BLIND AUTOMATION</p>
            </HeroEntrance>
            <HeroEntrance delay={0.1}>
              <h1>Slack is where requests appear. Watchtower is where they stop becoming chaos.</h1>
            </HeroEntrance>
            <HeroEntrance delay={0.2}>
              <p className="hero-body">
                Watchtower listens for engineering asks, routes the right autonomous workflow, opens a visible path
                from thread to action, and keeps every run observable on a Mac your team actually controls.
              </p>
            </HeroEntrance>

            <HeroEntrance delay={0.3}>
              <div className="hero-actions">
                <a
                  className="button button--solid"
                  href="https://calendly.com/dipeshrajoria"
                  target="_blank"
                  rel="noreferrer"
                >
                  Request demo
                </a>
                <a
                  className="button button--ghost"
                  href="https://github.com/DipeshRajoria007/watchtower"
                  target="_blank"
                  rel="noreferrer"
                >
                  See the code
                </a>
              </div>
            </HeroEntrance>

            <Stagger className="proof-stat-grid" stagger={0.1}>
              {proofStats.map((stat) => (
                <StaggerItem as="article" className="proof-stat-card" key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                  <p>{stat.detail}</p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          <HeroEntrance className="hero-stage" delay={0.25}>
            <div aria-label="Conceptual Watchtower product theater">
              <div className="stage-card stage-card--thread">
                <div className="stage-label">Slack intake</div>
                <p className="stage-title">#release-ops</p>
                <div className="message-stack">
                  <div className="message message--user">&quot;Can someone review this PR before lunch?&quot;</div>
                  <div className="message message--system">Intent detected: PR_REVIEW</div>
                  <div className="message message--user">
                    &quot;Also fix the production toast bug if it is obvious.&quot;
                  </div>
                  <div className="message message--system">Forking a BUG_FIX lane with trace enabled.</div>
                </div>
              </div>

              <div className="stage-card stage-card--trace">
                <div className="stage-label">Execution trace</div>
                <div className="trace-lines">
                  {traceLines.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </div>
              </div>

              <div className="stage-card stage-card--ops">
                <div className="stage-label">Operator stance</div>
                <p className="stage-title">Owner autopilot when it matters. Guardrails when it should.</p>
                <ul className="ops-badges">
                  <li>PR_REVIEW</li>
                  <li>BUG_FIX</li>
                  <li>OWNER_AUTOPILOT</li>
                  <li>DEV_ASSIST</li>
                </ul>
              </div>

              <div className="stage-ring">
                <div className="stage-ring__core">
                  <span>WATCH</span>
                  <strong>TRACE</strong>
                  <span>LEARN</span>
                </div>
              </div>
            </div>
          </HeroEntrance>
        </section>

        <Stagger as="section" className="signal-strip" ariaLabel="Watchtower product signals" stagger={0.05}>
          {credibilitySignals.map((signal) => (
            <FadeInSpan key={signal}>{signal}</FadeInSpan>
          ))}
        </Stagger>

        <FadeIn as="section" className="section-grid" id="why-watchtower">
          <SectionHeading
            eyebrow="WHY WATCHTOWER"
            title="Most tools automate the action. Watchtower automates the operating model."
            body="This is not just a bot that replies in Slack. It is a system for turning fast-moving engineering requests into visible, governed work with enough personality to feel human and enough evidence to satisfy adults."
          />

          <FadeIn className="manifesto-card" delay={0.15}>
            <p className="manifesto-card__eyebrow">The pitch, minus the perfume</p>
            <p className="manifesto-card__quote">
              If Slack is where work arrives, Watchtower is the calm machine that catches it, chooses the right move,
              and leaves the lights on so leadership can inspect what happened.
            </p>
            <p className="manifesto-card__body">
              It gives engineering leaders a tighter loop between request, execution, and proof without asking the team
              to learn a brand-new ritual just to get help.
            </p>
          </FadeIn>
        </FadeIn>

        <Stagger as="section" className="pillar-grid" ariaLabel="Watchtower pillars" stagger={0.1}>
          {pillars.map((pillar) => (
            <CardHover className="pillar-card" key={pillar.title}>
              <p className="pillar-card__label">{pillar.label}</p>
              <h3>{pillar.title}</h3>
              <p>{pillar.body}</p>
            </CardHover>
          ))}
        </Stagger>

        <FadeIn as="section" className="workflow-section" id="how-it-works">
          <SectionHeading
            eyebrow="HOW IT WORKS"
            title="Three moves. No magic act."
            body="The product experience is deliberately legible. Inputs are captured, the right workflow acts, and the whole system leaves enough exhaust for supervision, debugging, and trust."
          />

          <Stagger className="workflow-grid" stagger={0.12}>
            {workflowSteps.map((step) => (
              <CardHover className="workflow-card" key={step.index}>
                <div className="workflow-card__index">{step.index}</div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
                <span>{step.meta}</span>
              </CardHover>
            ))}
          </Stagger>
        </FadeIn>

        <FadeIn as="section" className="proof-section" id="proof">
          <SectionHeading
            eyebrow="PROOF, CONTROL, MEMORY"
            title="The real differentiator is not that it acts. It is that you can see it think."
            body="Watchtower keeps the operator&apos;s nervous system in the product: traces, live sidecar output, recommendations, heat signals, and learned corrections."
          />

          <div className="proof-layout">
            <FadeIn as="article" className="control-room-card" delay={0.1}>
              <div className="control-room-card__header">
                <span>Observable execution</span>
                <strong>Live run telemetry</strong>
              </div>
              <div className="control-room-grid">
                <div className="control-room-panel">
                  <p>Execution Trace</p>
                  <ul>
                    <li>job selected</li>
                    <li>context fetched</li>
                    <li>codex run started</li>
                    <li>slack reply posted</li>
                    <li>learning signal persisted</li>
                  </ul>
                </div>
                <div className="control-room-panel">
                  <p>Ops Pulse</p>
                  <dl>
                    <div>
                      <dt>Active jobs</dt>
                      <dd>02</dd>
                    </div>
                    <div>
                      <dt>Success streak</dt>
                      <dd>17</dd>
                    </div>
                    <div>
                      <dt>Chaos index</dt>
                      <dd>low</dd>
                    </div>
                  </dl>
                </div>
                <div className="control-room-panel control-room-panel--wide">
                  <p>Why leaders care</p>
                  <span>
                    Because the system is inspectable before it is impressive. That is the difference between a demo
                    toy and a tool you can actually run around real repositories.
                  </span>
                </div>
              </div>
            </FadeIn>

            <Stagger className="learning-grid" stagger={0.1}>
              {learningCards.map((card) => (
                <CardHover className="learning-card" key={card.title}>
                  <p>{card.eyebrow}</p>
                  <h3>{card.title}</h3>
                  <span>{card.body}</span>
                </CardHover>
              ))}
            </Stagger>
          </div>
        </FadeIn>

        <FadeIn as="section" className="faq-section" id="faq">
          <SectionHeading
            eyebrow="FAQ"
            title="The practical questions, not the brochure questions."
            body="A good product page should answer what serious buyers are actually going to ask once the adrenaline wears off."
          />

          <Stagger className="faq-list" stagger={0.08}>
            {faqItems.map((item) => (
              <StaggerItem key={item.question}>
                <details>
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              </StaggerItem>
            ))}
          </Stagger>
        </FadeIn>

        <FadeIn as="section" className="demo-section" id="demo">
          <p className="demo-section__eyebrow">READY FOR A CALMER OPERATING MODEL?</p>
          <h2>Give your engineering org a command room instead of one more bot.</h2>
          <p>
            Watchtower is for leaders who want autonomous developer workflows without giving up inspection,
            intentionality, or taste.
          </p>

          <div className="hero-actions hero-actions--centered">
            <a
              className="button button--solid"
              href="https://calendly.com/dipeshrajoria"
              target="_blank"
              rel="noreferrer"
            >
              Request demo
            </a>
            <a
              className="button button--ghost"
              href="https://github.com/DipeshRajoria007/watchtower"
              target="_blank"
              rel="noreferrer"
            >
              Explore the product repo
            </a>
          </div>
        </FadeIn>
      </main>

      <FadeIn as="footer" className="site-footer">
        <div className="footer-left">
          <p>Watchtower</p>
          <span>Slack-native developer workflows with visible control, sharp edges, and no cloud costume.</span>
        </div>
        <div className="footer-social">
          <a
            href="https://github.com/DipeshRajoria007"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/dipeshrajoria/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>
        </div>
      </FadeIn>
    </div>
  )
}
