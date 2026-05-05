'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

const steps = [
  { num: '01', title: 'Listen & map risk vs. opportunity' },
  { num: '02', title: 'Design the narrative & guardrails' },
  { num: '03', title: 'Build creator & communication engines' },
  { num: '04', title: 'Monitor, optimise & protect' },
]

export default function ProcessSection() {
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
          <h2 className="text-4xl font-bold mb-4 text-text-primary">How we work when stakes are high</h2>
          <p className="text-text-secondary max-w-2xl mx-auto leading-relaxed">
            A process designed for sensitive sectors, fast‑moving platforms and multi‑stakeholder environments.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {steps.map(({ num, title }, i) => (
            <motion.div
              key={num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="bg-surface-alt border border-gray-100 p-6 rounded-md flex flex-col gap-3 shadow-1"
            >
              <span className="text-xs font-mono text-primary tracking-wider font-semibold">{num}</span>
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
            Learn about our process
            <span className="text-lg">&rarr;</span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
