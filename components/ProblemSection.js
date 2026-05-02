'use client'
import { motion } from 'framer-motion'

export default function ProblemSection() {
  return (
    <section className="bg-zinc-950 text-center py-24 px-6">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-2xl md:text-4xl font-light text-gray-300 max-w-2xl mx-auto leading-relaxed"
      >
        Most brands chase reach.{' '}
        <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent font-semibold">
          We build revenue.
        </span>
      </motion.p>
    </section>
  )
}
