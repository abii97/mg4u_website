'use client'
import { motion } from 'framer-motion'

const services = [
  { title: 'Influencer Marketing', desc: 'Data-driven creator partnerships that drive real conversions, not just vanity metrics.' },
  { title: 'UGC Content', desc: 'Authentic user-generated content that builds trust and scales your brand story.' },
  { title: 'Paid Ads', desc: 'Performance-optimized ad campaigns across Meta, TikTok, and Google.' },
  { title: 'Social Media Management', desc: 'End-to-end management of your social presence with strategy-first execution.' },
  { title: 'Branding', desc: 'Crafting distinctive brand identities that resonate with your target audience.' },
  { title: 'Crisis Management', desc: 'Rapid-response strategies to protect your brand reputation in critical moments.' },
  { title: 'Twitter Trending', desc: 'Strategic campaigns to dominate Twitter conversations and trending topics.' },
  { title: 'Social Media Amplification', desc: 'Multiply your reach through intelligent cross-platform content distribution.' },
  { title: 'Content Management', desc: 'Scalable content operations from ideation to publishing and optimization.' },
]

export default function ServicesPreview() {
  return (
    <section className="bg-surface-base py-section-y px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-4 text-text-primary"
        >
          Our Services
        </motion.h2>
        <p className="text-text-secondary text-center mb-12 max-w-xl mx-auto">
          End-to-end influence engineering for D2C, SaaS, and global brands
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map(({ title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ scale: 1.03 }}
              className="bg-surface-alt border border-gray-100 p-6 rounded-md hover:border-primary/30 transition-colors duration-fast shadow-1"
            >
              <h3 className="text-lg font-semibold mb-2 text-text-primary">{title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
