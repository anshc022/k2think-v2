import { motion, useInView } from 'framer-motion'
import { useRef, useState, type FormEvent, type ReactNode } from 'react'

/* ─── Animation wrapper ─── */
function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

/* ─── Section wrapper ─── */
function Section({ id, children, className = '' }: { id?: string; children: ReactNode; className?: string }) {
  return (
    <section id={id} className={`max-w-6xl mx-auto px-6 py-24 ${className}`}>
      {children}
    </section>
  )
}

function SectionTitle({ children, sub }: { children: ReactNode; sub?: string }) {
  return (
    <Reveal>
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
          {children}
        </h2>
        {sub && <p className="text-slate-400 max-w-2xl mx-auto">{sub}</p>}
      </div>
    </Reveal>
  )
}

/* ─── NAV ─── */
function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#0a0a0f]/80 border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-bold text-lg tracking-tight">K2Think <span className="text-indigo-400">v2</span></span>
        <a href="#register" className="text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors">
          Register →
        </a>
      </div>
    </nav>
  )
}

/* ─── HERO ─── */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/15 rounded-full blur-[100px]" />

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-sm font-medium">
            7 Days · Build · Ship · Win
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight mb-6">
            K2Think v2
            <br />
            <span className="bg-gradient-to-r from-indigo-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Build Week
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            An intense 7-day sprint where the best AI engineers, hackers, and builders come together to create autonomous agents that push the frontier.
          </p>
          <a href="#register" className="btn-glow inline-block">
            Register Now
          </a>
        </motion.div>
      </div>
    </section>
  )
}

/* ─── WHAT IS K2THINK ─── */
function About() {
  const items = [
    { icon: '⚡', title: 'Build', desc: 'Design and ship AI agents from scratch in just 7 days.' },
    { icon: '🤝', title: 'Collaborate', desc: 'Work alongside top-tier engineers and AI researchers.' },
    { icon: '🚀', title: 'Ship', desc: 'Demo day on Day 7 — present to investors and the community.' },
  ]
  return (
    <Section id="about">
      <SectionTitle sub="K2Think v2 is a high-intensity, invite-curated sprint for builders who want to push the boundaries of autonomous AI agents.">
        What is K2Think v2?
      </SectionTitle>
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((item, i) => (
          <Reveal key={i} delay={i * 0.1}>
            <div className="glass p-8 transition-all duration-300">
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

/* ─── TIMELINE ─── */
function Timeline() {
  const days = [
    { day: 1, title: 'Kickoff & Team Formation', desc: 'Opening ceremony, problem statements revealed, teams form.' },
    { day: 2, title: 'Architecture & Design', desc: 'System design, agent architecture, tool integration planning.' },
    { day: 3, title: 'Core Build', desc: 'Heads-down building. Core agent logic and capabilities.' },
    { day: 4, title: 'Integration & Testing', desc: 'Connect components, stress test, iterate on failures.' },
    { day: 5, title: 'Polish & Edge Cases', desc: 'Handle edge cases, improve reliability, add monitoring.' },
    { day: 6, title: 'Final Sprint', desc: 'Last push. Documentation, demo prep, final fixes.' },
    { day: 7, title: 'Demo Day 🎤', desc: 'Present to judges, investors, and the community. Winners announced.' },
  ]
  return (
    <Section id="timeline">
      <SectionTitle sub="Seven days of focused building, from ideation to demo.">
        The Timeline
      </SectionTitle>
      <div className="relative max-w-3xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-purple-500/30 to-transparent" />
        <div className="space-y-8">
          {days.map((d, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className="flex gap-6 items-start">
                <div className="relative z-10 flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center font-bold text-sm md:text-base shadow-lg shadow-indigo-500/20">
                  D{d.day}
                </div>
                <div className="glass p-6 flex-1">
                  <h3 className="font-semibold text-lg mb-1">{d.title}</h3>
                  <p className="text-slate-400 text-sm">{d.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}

/* ─── WHO SHOULD JOIN ─── */
function WhoShouldJoin() {
  const personas = [
    { emoji: '🧠', title: 'AI Engineers', desc: 'You build LLM-powered systems and want to go deeper.' },
    { emoji: '🛠️', title: 'Full-Stack Builders', desc: 'You ship fast and want to apply your skills to AI agents.' },
    { emoji: '💀', title: 'Hackers', desc: 'You break things, find exploits, and push boundaries.' },
    { emoji: '🔬', title: 'Researchers', desc: 'You have ideas about agent architectures and want to test them.' },
  ]
  return (
    <Section id="who">
      <SectionTitle sub="If you build things that think, this is your week.">
        Who Should Join
      </SectionTitle>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {personas.map((p, i) => (
          <Reveal key={i} delay={i * 0.08}>
            <div className="glass p-6 text-center transition-all duration-300">
              <div className="text-4xl mb-4">{p.emoji}</div>
              <h3 className="font-semibold mb-2">{p.title}</h3>
              <p className="text-slate-400 text-sm">{p.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

/* ─── PRIZES ─── */
function Prizes() {
  const prizes = [
    { icon: '🏆', title: '1st Place', value: '$10,000 + GPU Credits', desc: 'Plus direct intros to top AI investors.' },
    { icon: '🥈', title: '2nd Place', value: '$5,000 + API Credits', desc: 'Cloud compute and mentorship package.' },
    { icon: '🥉', title: '3rd Place', value: '$2,500', desc: 'Plus swag and community recognition.' },
    { icon: '🎁', title: 'All Participants', value: 'Exclusive Access', desc: 'K2Think alumni network, merch, and future event priority.' },
  ]
  return (
    <Section id="prizes">
      <SectionTitle sub="Build something great — get rewarded.">
        Prizes & Benefits
      </SectionTitle>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {prizes.map((p, i) => (
          <Reveal key={i} delay={i * 0.08}>
            <div className="glass p-6 text-center transition-all duration-300">
              <div className="text-4xl mb-3">{p.icon}</div>
              <h3 className="font-semibold mb-1">{p.title}</h3>
              <p className="text-indigo-300 font-medium text-sm mb-2">{p.value}</p>
              <p className="text-slate-500 text-xs">{p.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

/* ─── FAQ ─── */
function FAQ() {
  const faqs = [
    { q: 'Do I need a team?', a: 'No — you can join solo and form a team on Day 1, or bring your own squad (max 4 per team).' },
    { q: 'What can I build?', a: 'Any autonomous AI agent — coding agents, research agents, multi-agent systems, tool-using agents, and more.' },
    { q: 'Is it remote or in-person?', a: 'Fully remote. We use Discord for coordination, with optional co-working spaces in select cities.' },
    { q: 'What\'s the cost?', a: 'Free to participate. We provide API credits, compute, and tools.' },
    { q: 'What\'s the time commitment?', a: 'Expect 6-10 hours per day for 7 days. This is a sprint — intensity is the point.' },
    { q: 'Who judges?', a: 'A panel of AI researchers, founders, and engineers from top labs and startups.' },
  ]
  const [open, setOpen] = useState<number | null>(null)
  return (
    <Section id="faq">
      <SectionTitle sub="Everything you need to know.">FAQ</SectionTitle>
      <div className="max-w-3xl mx-auto space-y-3">
        {faqs.map((f, i) => (
          <Reveal key={i} delay={i * 0.05}>
            <div
              className="glass p-5 cursor-pointer transition-all duration-300"
              onClick={() => setOpen(open === i ? null : i)}
            >
              <div className="flex justify-between items-center">
                <h3 className="font-medium">{f.q}</h3>
                <span className="text-indigo-400 text-xl ml-4 transition-transform duration-300" style={{ transform: open === i ? 'rotate(45deg)' : '' }}>+</span>
              </div>
              <motion.div
                initial={false}
                animate={{ height: open === i ? 'auto' : 0, opacity: open === i ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="text-slate-400 text-sm mt-3 leading-relaxed">{f.a}</p>
              </motion.div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

/* ─── REGISTRATION ─── */
function Registration() {
  const [submitted, setSubmitted] = useState(false)
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }
  return (
    <Section id="register">
      <SectionTitle sub="Spots are limited. Secure yours now.">Register</SectionTitle>
      <Reveal>
        <div className="glass p-8 md:p-12 max-w-2xl mx-auto">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8"
            >
              <div className="text-5xl mb-4">🎉</div>
              <h3 className="text-2xl font-bold mb-2">You're in!</h3>
              <p className="text-slate-400">We'll be in touch with next steps. Get ready to build.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium mb-2 text-slate-300">Full Name</label>
                <input type="text" required className="form-input" placeholder="Ada Lovelace" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-slate-300">Email</label>
                <input type="email" required className="form-input" placeholder="ada@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-slate-300">GitHub</label>
                <input type="text" className="form-input" placeholder="github.com/ada" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-slate-300">Experience Level</label>
                <select required className="form-input" defaultValue="">
                  <option value="" disabled>Select your level</option>
                  <option value="beginner">Beginner — Learning AI/ML</option>
                  <option value="intermediate">Intermediate — Built a few projects</option>
                  <option value="advanced">Advanced — Shipping AI in production</option>
                  <option value="expert">Expert — Leading AI teams/research</option>
                </select>
              </div>
              <button type="submit" className="btn-glow w-full mt-4">
                Register Now
              </button>
            </form>
          )}
        </div>
      </Reveal>
    </Section>
  )
}

/* ─── FOOTER ─── */
function Footer() {
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <span className="font-bold tracking-tight">K2Think <span className="text-indigo-400">v2</span></span>
        <div className="flex gap-6 text-slate-500 text-sm">
          <a href="https://twitter.com/k2think" target="_blank" rel="noopener" className="hover:text-indigo-400 transition-colors">Twitter</a>
          <a href="https://discord.gg/k2think" target="_blank" rel="noopener" className="hover:text-indigo-400 transition-colors">Discord</a>
          <a href="https://github.com/k2think" target="_blank" rel="noopener" className="hover:text-indigo-400 transition-colors">GitHub</a>
        </div>
        <p className="text-slate-600 text-xs">© 2026 K2Think. All rights reserved.</p>
      </div>
    </footer>
  )
}

/* ─── APP ─── */
export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Timeline />
      <WhoShouldJoin />
      <Prizes />
      <FAQ />
      <Registration />
      <Footer />
    </>
  )
}
