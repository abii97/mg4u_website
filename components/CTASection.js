'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="bg-zinc-950 py-24 px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-4">Ready to Convert?</h2>
        <p className="text-gray-400 mb-8">
          Let&apos;s engineer an influence strategy that turns views into revenue.
        </p>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
          <Link
            href="/contact"
            className="inline-block bg-gradient-to-r from-purple-500 to-blue-500 text-white px-10 py-4 rounded-lg font-semibold text-lg"
          >
            Get Started
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}
