'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="bg-surface-dark py-24 px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-4 text-text-inverse">Ready to Convert?</h2>
        <p className="text-white/60 mb-8">
          Let&apos;s engineer an influence strategy that turns views into revenue.
        </p>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
          <Link
            href="/contact"
            className="inline-block bg-primary text-text-inverse px-10 py-4 rounded-md font-semibold text-lg hover:bg-primary-hover transition-colors duration-fast"
          >
            Get Started
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}
