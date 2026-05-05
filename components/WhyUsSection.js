'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

const reasons = [
  { title: 'High‑trust sectors are our default' },
  { title: 'Regional & vernacular first, not as an afterthought' },
  { title: 'From tweet‑speed crises to 12‑month roadmaps' },
]

export default function WhyUsSection() {
  return (
    <section className="bg-zinc-900 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl font-bold mb-4">Why teams like yours call us</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
          {reasons.map(({ title }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ scale: 1.02, borderColor: 'rgba(168,85,247,0.3)' }}
              className="bg-zinc-950 border border-zinc-800 p-6 rounded-xl transition-all text-center"
            >
              <h3 className="text-base font-semibold">{title}</h3>
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
            href="/about"
            className="inline-flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition-colors"
          >
            More about us
            <span className="text-lg">&rarr;</span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
