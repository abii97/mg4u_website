'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

const IconShield = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    <path d="M9 12l2 2 4-4"/>
  </svg>
)
const IconSpark = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M13 2L4.093 12.688c-.348.418-.523.627-.48.808.034.159.145.29.302.352.185.073.474.003 1.052-.138L11 12l-3.5 7.5"/>
    <path d="M13 2l2.5 10.5L11 12l2.5-5.5"/>
  </svg>
)
const IconChat = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
    <path d="M8 9h8M8 13h4"/>
  </svg>
)
const IconPin = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
)

const pillars = [
  {
    num: '01',
    icon: <IconShield />,
    title: 'Reputation, Crisis & Sustainability Communication',
    desc: 'Real‑time listening, rapid response and narrative repair for high‑trust sectors.',
    accent: 'border-l-primary/40',
  },
  {
    num: '02',
    icon: <IconSpark />,
    title: 'Creator & Meme‑Led Campaigns',
    desc: 'Full‑funnel influencer, UGC and regional creator programs that drive real action.',
    accent: 'border-l-purple-400/40',
  },
  {
    num: '03',
    icon: <IconChat />,
    title: 'WhatsApp, SMS & Full‑Stack Communication',
    desc: 'Leveraging 90%+ open rates for D2C, institutions and stakeholder communication.',
    accent: 'border-l-green-500/40',
  },
  {
    num: '04',
    icon: <IconPin />,
    title: 'On‑Ground, Events & Digital Foundations',
    desc: 'Activations, content and high‑trust sites engineered for clarity and conversion.',
    accent: 'border-l-amber-500/40',
  },
]

export default function ServicesSection() {
  return (
    <section className="bg-surface-base py-section-y px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl font-bold mb-4 text-text-primary">What we do</h2>
          <p className="text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Four pillars designed for a world where a tweet, reel or review can move markets.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
          {pillars.map(({ num, icon, title, desc, accent }, i) => (
            <motion.div
              key={num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`bg-surface-alt border border-gray-100 border-l-2 rounded-md p-6 lg:p-8 flex gap-5 shadow-1 ${accent}`}
            >
              <div className="text-primary shrink-0 mt-0.5">{icon}</div>
              <div className="flex flex-col gap-2">
                <span className="text-xs font-mono text-primary tracking-wider font-semibold">{num}</span>
                <h3 className="text-xl font-bold text-text-primary">{title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary-hover transition-colors duration-fast font-medium"
          >
            Explore all services
            <span className="text-lg">&rarr;</span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
