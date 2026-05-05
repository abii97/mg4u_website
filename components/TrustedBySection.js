'use client'
import { motion } from 'framer-motion'

const logos = [
  'ideaForge',
  'Emcure',
  'Kaya',
  'Just Herbs',
]

export default function TrustedBySection() {
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
          <h2 className="text-4xl font-bold mb-4 text-text-primary">Trusted where there&rsquo;s no room for error</h2>
          <p className="text-text-secondary max-w-2xl mx-auto leading-relaxed">
            We work with organisations that carry public trust, regulatory scrutiny and community
            expectations—alongside ambitious new‑age brands rewriting their categories.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-16 mb-16"
        >
          {logos.map((logo, i) => (
            <motion.span
              key={logo}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="text-xl md:text-2xl font-bold text-text-secondary hover:text-primary transition-colors duration-fast cursor-default"
            >
              {logo}
            </motion.span>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed italic"
        >
          If your work is too important to be reduced to &ldquo;just another campaign&rdquo;, we should talk.
        </motion.p>
      </div>
    </section>
  )
}
