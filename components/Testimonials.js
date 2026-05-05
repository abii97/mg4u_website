'use client'
import { motion } from 'framer-motion'

const testimonials = [
  {
    quote: 'Mediaguide4u transformed our influencer strategy. We went from guessing to predictable ROI in 60 days.',
    name: 'Priya Sharma',
    role: 'CMO, D2C Beauty Brand',
  },
  {
    quote: 'The creator matching algorithm is spot-on. Every campaign consistently delivers above benchmark ROAS.',
    name: 'Raj Malhotra',
    role: 'Growth Lead, SaaS Platform',
  },
  {
    quote: 'They built our entire UGC engine from scratch. 10K+ pieces of content, all conversion-tested.',
    name: 'Ananya Patel',
    role: 'Head of Marketing, Fashion Retail',
  },
]

export default function Testimonials() {
  return (
    <section className="bg-surface-alt py-section-y px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 text-text-primary"
        >
          Trusted by Industry Leaders
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map(({ quote, name, role }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="bg-surface-base border border-gray-100 p-6 rounded-md flex flex-col gap-4 shadow-1"
            >
              <p className="text-text-secondary leading-relaxed italic">&ldquo;{quote}&rdquo;</p>
              <div>
                <p className="text-sm font-semibold text-text-primary">{name}</p>
                <p className="text-xs text-text-secondary">{role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
