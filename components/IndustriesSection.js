'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

const industries = [
  'D2C & Consumer Brands',
  'Healthcare, Pharma & Hospitals',
  'Schools, Colleges & Universities',
  'Government, Public Sector & Impact',
  'New‑Age & On‑Demand Services',
  'B2B Tech & Industrial',
]

export default function IndustriesSection() {
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
          <h2 className="text-4xl font-bold mb-4 text-text-primary">Who we partner with</h2>
          <p className="text-text-secondary max-w-2xl mx-auto leading-relaxed">
            We specialise in mission‑critical communication and creator work where trust, compliance and speed
            matter as much as views.
          </p>
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {industries.map((label, i) => (
            <motion.span
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ scale: 1.03, borderColor: '#0B72FF' }}
              className="bg-surface-base border border-gray-200 px-5 py-3 rounded-md text-sm font-medium text-text-primary transition-all shadow-1"
            >
              {label}
            </motion.span>
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
            Learn more about our industry expertise
            <span className="text-lg">&rarr;</span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
