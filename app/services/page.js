'use client'
import { motion } from 'framer-motion'

const services = [
  {
    title: 'Influencer Marketing',
    desc: 'End-to-end influencer campaign management with data-driven creator selection, contract negotiation, and performance tracking.',
    bullets: ['Vetted creator network', 'Performance-based pricing', 'Real-time dashboards'],
  },
  {
    title: 'UGC Content',
    desc: 'Scalable user-generated content production that fuels your paid ads, organic social, and product pages.',
    bullets: ['60+ content formats', 'Conversion-optimized scripts', 'Rights-managed delivery'],
  },
  {
    title: 'Paid Ads',
    desc: 'Full-funnel paid media management across Meta, TikTok, YouTube, and Google with creative testing frameworks.',
    bullets: ['Creative testing at scale', 'Audience segmentation', 'ROAS optimization'],
  },
  {
    title: 'Social Media Management',
    desc: 'Strategy-led social media management including content calendar, community management, and analytics.',
    bullets: ['Monthly content strategy', 'Community engagement', 'Performance reports'],
  },
  {
    title: 'Branding',
    desc: 'Building distinctive brand identities with positioning strategy, visual design, and messaging frameworks.',
    bullets: ['Brand positioning', 'Visual identity', 'Messaging playbook'],
  },
  {
    title: 'Crisis Management',
    desc: 'Proactive reputation management and rapid-response protocols to handle brand crises effectively.',
    bullets: ['24/7 monitoring', 'Response playbooks', 'Sentiment recovery'],
  },
  {
    title: 'Twitter Trending',
    desc: 'Strategic campaigns to dominate Twitter/X trending topics through coordinated creator amplification.',
    bullets: ['Trend hijacking', 'Creator amplification', 'Hashtag strategy'],
  },
  {
    title: 'Social Media Amplification',
    desc: 'Cross-platform content amplification strategies to maximize reach and engagement for every post.',
    bullets: ['Platform optimization', 'Boosting strategies', 'Viral frameworks'],
  },
  {
    title: 'Content Management',
    desc: 'End-to-end content operations including planning, production, publishing, and performance analysis.',
    bullets: ['Content calendars', 'Production pipelines', 'Analytics dashboards'],
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold text-center mb-4"
        >
          Our Services
        </motion.h1>
        <p className="text-gray-400 text-center mb-16 max-w-xl mx-auto">
          Full-stack influence engineering for brands that demand ROI
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ title, desc, bullets }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 flex flex-col gap-4"
            >
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
              <ul className="space-y-1">
                {bullets.map((b) => (
                  <li key={b} className="text-xs text-gray-500 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-purple-500 shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
