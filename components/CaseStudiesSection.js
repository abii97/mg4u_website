'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const cases = [
  {
    company: 'ideaForge',
    title: 'Global content for deep-tech credibility',
    desc: 'US and India-facing content, technical blogs and HubSpot-based journeys for one of India&rsquo;s leading drone and defence-tech companies.',
    logo: '/logos/ideaforge.svg',
    stat: '40+',
    statLabel: 'Content Pieces',
  },
  {
    company: 'Emcure & healthcare brands',
    title: 'Creator-safe storytelling at scale',
    desc: 'Influencer and UGC campaigns that respect regulations while humanising health conversations—bridging medical accuracy and everyday understanding.',
    logo: '/logos/emcure.svg',
    stat: '50+',
    statLabel: 'Creators',
  },
  {
    company: 'Just Herbs',
    title: 'UGC-first growth',
    desc: 'UGC-driven content pipelines feeding ads, social and marketplaces, supporting an ayurvedic beauty brand built on transparency and long-term trust.',
    logo: '/logos/just-herbs.svg',
    stat: '3.2x',
    statLabel: 'ROAS',
  },
]

export default function CaseStudiesSection() {
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
          <h2 className="text-4xl font-bold mb-4 text-text-primary">Where it really mattered</h2>
          <p className="text-text-secondary max-w-2xl mx-auto leading-relaxed">
            We&rsquo;re often called when stakes are high: regulated industries, public institutions, fast-scaling
            D2C, and government or impact campaigns.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {cases.map(({ company, title, desc, logo, stat, statLabel }, i) => (
            <motion.div
              key={company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ scale: 1.02, borderColor: '#0B72FF' }}
              className="bg-surface-base border border-gray-100 p-6 rounded-md transition-all flex flex-col gap-4 shadow-1"
            >
              <div className="h-10 flex items-center">
                <Image
                  src={logo}
                  alt={company}
                  width={100}
                  height={24}
                  className="opacity-60"
                  style={{ objectFit: 'contain', height: 24 }}
                />
              </div>
              <h3 className="text-lg font-semibold text-text-primary">{title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed flex-1">{desc}</p>
              <div className="pt-3 border-t border-gray-100 flex items-baseline gap-1.5">
                <span className="text-3xl font-bold text-primary">{stat}</span>
                <span className="text-xs text-text-secondary uppercase tracking-wider font-medium">{statLabel}</span>
              </div>
            </motion.div>
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
            href="/case-studies"
            className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary-hover transition-colors duration-fast font-medium"
          >
            View all case studies
            <span className="text-lg">&rarr;</span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
