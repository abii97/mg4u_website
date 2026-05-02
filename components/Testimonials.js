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
    <section className="bg-zinc-900 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12"
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
              className="bg-zinc-950 border border-zinc-800 p-6 rounded-xl flex flex-col gap-4"
            >
              <p className="text-gray-300 leading-relaxed italic">&ldquo;{quote}&rdquo;</p>
              <div>
                <p className="text-sm font-semibold">{name}</p>
                <p className="text-xs text-gray-500">{role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
