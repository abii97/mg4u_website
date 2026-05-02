'use client'
import { motion } from 'framer-motion'

const floatingCards = [
  { label: '250+', sub: 'Campaigns', delay: 0 },
  { label: '10K+', sub: 'Creators', delay: 0.3 },
  { label: '3.5x', sub: 'Avg ROAS', delay: 0.6 },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-zinc-950">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 blur-3xl" />
      </div>

      {floatingCards.map((card, i) => (
        <motion.div
          key={card.label}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: [0, -15, 0] }}
          transition={{
            opacity: { duration: 0.8, delay: card.delay + 0.5 },
            y: { repeat: Infinity, duration: 6, delay: card.delay, ease: 'easeInOut' },
          }}
          className="absolute hidden md:block bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-xl px-5 py-3"
          style={{
            top: i === 0 ? '15%' : i === 1 ? '75%' : '20%',
            left: i === 0 ? '10%' : i === 1 ? '75%' : undefined,
            right: i === 2 ? '10%' : undefined,
          }}
        >
          <p className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            {card.label}
          </p>
          <p className="text-xs text-gray-400">{card.sub}</p>
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center max-w-3xl px-6"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
          We Engineer Influence{' '}
          <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            That Converts
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-xl mx-auto">
          Scaling D2C, SaaS, and global brands through performance-driven influencer campaigns
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            href="/contact"
            className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold"
          >
            Get Campaign Plan
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            href="/case-studies"
            className="border border-zinc-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-zinc-800 transition-colors"
          >
            View Case Studies
          </motion.a>
        </div>
      </motion.div>
    </section>
  )
}
