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
    <section className="bg-surface-alt py-section-y px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl font-bold mb-4 text-text-primary">Why teams like yours call us</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
          {reasons.map(({ title }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ scale: 1.02, borderColor: '#0B72FF' }}
              className="bg-surface-base border border-gray-100 p-6 rounded-md transition-all text-center shadow-1"
            >
              <h3 className="text-base font-semibold text-text-primary">{title}</h3>
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
            className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary-hover transition-colors duration-fast font-medium"
          >
            More about us
            <span className="text-lg">&rarr;</span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
