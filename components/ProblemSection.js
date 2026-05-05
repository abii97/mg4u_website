'use client'
import { motion } from 'framer-motion'

export default function ProblemSection() {
  return (
    <section className="bg-surface-base text-center py-section-y px-6">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-2xl md:text-4xl font-light text-text-secondary max-w-2xl mx-auto leading-relaxed"
      >
        Most brands chase reach.{' '}
        <span className="text-primary font-semibold">
          We build revenue.
        </span>
      </motion.p>
    </section>
  )
}
