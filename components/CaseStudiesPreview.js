'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

const studies = [
  {
    title: '3.5x ROAS in 30 Days',
    brand: 'D2C Skincare Brand',
    desc: 'Scaled from $50K to $175K monthly revenue through micro-influencer campaigns.',
    stat: '3.5x',
    statLabel: 'ROAS',
  },
  {
    title: '2M+ Organic Reach',
    brand: 'SaaS Productivity Tool',
    desc: 'Generated 2M+ organic impressions via creator-led demo content across platforms.',
    stat: '2M+',
    statLabel: 'Impressions',
  },
  {
    title: '400% Engagement Lift',
    brand: 'Global Fashion Retailer',
    desc: 'Boosted social engagement by 400% with a 60-creator UGC campaign.',
    stat: '400%',
    statLabel: 'Engagement',
  },
]

export default function CaseStudiesPreview() {
  return (
    <section className="bg-surface-alt py-section-y px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-4 text-text-primary"
        >
          Case Studies
        </motion.h2>
        <p className="text-text-secondary text-center mb-12 max-w-xl mx-auto">
          Real campaigns. Real results. Real revenue.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {studies.map(({ title, brand, desc, stat, statLabel }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="bg-surface-base border border-gray-100 p-6 rounded-md flex flex-col gap-3 shadow-1"
            >
              <span className="text-3xl font-bold text-primary">
                {stat}
              </span>
              <p className="text-xs text-text-secondary uppercase tracking-wider font-semibold">{statLabel}</p>
              <h3 className="text-lg font-semibold text-text-primary">{title}</h3>
              <p className="text-xs text-primary font-semibold">{brand}</p>
              <p className="text-sm text-text-secondary leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="/case-studies" className="text-sm text-primary hover:text-primary-hover transition-colors duration-fast font-medium">
            View all case studies →
          </Link>
        </div>
      </div>
    </section>
  )
}
