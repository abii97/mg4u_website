'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

const pillars = [
  {
    num: '01',
    title: 'Reputation, Crisis & Sustainability Communication',
    desc: 'Real‑time listening, rapid response and narrative repair for high‑trust sectors.',
  },
  {
    num: '02',
    title: 'Creator & Meme‑Led Campaigns',
    desc: 'Full‑funnel influencer, UGC and regional creator programs that drive real action.',
  },
  {
    num: '03',
    title: 'WhatsApp, SMS & Full‑Stack Communication',
    desc: 'Leveraging 90%+ open rates for D2C, institutions and stakeholder communication.',
  },
  {
    num: '04',
    title: 'On‑Ground, Events & Digital Foundations',
    desc: 'Activations, content and high‑trust sites engineered for clarity and conversion.',
  },
]

export default function ServicesSection() {
  return (
    <section className="bg-zinc-950 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl font-bold mb-4">What we do</h2>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Four pillars designed for a world where a tweet, reel or review can move markets.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
          {pillars.map(({ num, title, desc }, i) => (
            <motion.div
              key={num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 lg:p-8 flex flex-col gap-4"
            >
              <span className="text-xs font-mono text-purple-400 tracking-wider">{num}</span>
              <h3 className="text-xl font-bold">{title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
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
            className="inline-flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition-colors"
          >
            Explore all services
            <span className="text-lg">&rarr;</span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
