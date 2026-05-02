'use client'
import { motion } from 'framer-motion'

const stats = [
  { label: 'Campaigns', value: '250+' },
  { label: 'Creators', value: '10K+' },
  { label: 'Avg ROAS', value: '3.5x' },
  { label: 'Brands Served', value: '80+' },
]

const values = [
  { title: 'Revenue-First', desc: 'Every campaign is measured by its impact on your bottom line, not vanity metrics.' },
  { title: 'Creator-First', desc: 'We invest in long-term creator relationships to deliver authentic, high-performing content.' },
  { title: 'Data-Driven', desc: 'Decision-making powered by real-time analytics, A/B testing, and attribution modeling.' },
  { title: 'Transparent', desc: 'Full visibility into campaign performance, spend allocation, and creator selection.' },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold text-center mb-4"
        >
          About Mediaguide4u
        </motion.h1>
        <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto text-lg leading-relaxed">
          We&apos;re an influence engineering company that bridges the gap between brand ambition and measurable revenue.
          Founded on the belief that influencer marketing should be a performance channel — not a guessing game.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-20">
          {stats.map(({ label, value }) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 text-center"
            >
              <p className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                {value}
              </p>
              <p className="text-sm text-gray-500 mt-1">{label}</p>
            </motion.div>
          ))}
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          What We Stand For
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {values.map(({ title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-6"
            >
              <h3 className="text-lg font-semibold mb-2">{title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
