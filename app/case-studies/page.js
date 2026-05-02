'use client'
import { motion } from 'framer-motion'

const caseStudies = [
  {
    title: '3.5x ROAS in 30 Days',
    brand: 'D2C Skincare Brand',
    category: 'Influencer Marketing',
    challenge: 'Struggling to scale beyond organic social with flat revenue at $50K/month.',
    solution: 'Deployed 30 micro-influencers with performance-based contracts and creative testing.',
    result: 'Scaled to $175K MRR with 3.5x blended ROAS across Meta and TikTok.',
    stats: { roas: '3.5x', creators: '30', reach: '4.2M', revenue: '+250%' },
  },
  {
    title: '2M+ Organic Reach in 60 Days',
    brand: 'SaaS Productivity Tool',
    category: 'UGC + Paid Ads',
    challenge: 'Low brand awareness in a crowded market with CPCs climbing 40% YoY.',
    solution: 'Built a creator-led demo content engine and amplified top performers with paid.',
    result: '2M+ organic impressions, 45% lower CPA, and 3x demo sign-ups.',
    stats: { roas: '5.1x', creators: '15', reach: '2.1M', revenue: '+180%' },
  },
  {
    title: '400% Engagement Lift',
    brand: 'Global Fashion Retailer',
    category: 'Social Media Amplification',
    challenge: 'Declining organic engagement across Instagram and TikTok despite large following.',
    solution: 'Launched a 60-creator UGC campaign with trending audio and format optimization.',
    result: '400% engagement increase, 2x follower growth, and 28% boost in site traffic.',
    stats: { roas: '4.2x', creators: '60', reach: '8.5M', revenue: '+95%' },
  },
  {
    title: 'Twitter Trending #1 for 48 Hours',
    brand: 'Fintech App Launch',
    category: 'Twitter Trending',
    challenge: 'Zero brand presence on Twitter with an upcoming product launch in 2 weeks.',
    solution: 'Orchestrated a coordinated trend campaign with 50+ tech creators and strategic timing.',
    result: 'Reached #1 trending in India for 48 hours, 500K+ app installs in launch week.',
    stats: { roas: '6.8x', creators: '50', reach: '12M', revenue: '+340%' },
  },
  {
    title: 'Brand Turnaround in 90 Days',
    brand: 'Health & Wellness D2C',
    category: 'Crisis Management + Branding',
    challenge: 'Negative PR crisis causing 60% drop in sales and brand trust erosion.',
    solution: 'Executed reputation recovery with authentic creator testimonials and rebrand.',
    result: 'Restored brand sentiment to positive in 90 days, recovered 85% of lost revenue.',
    stats: { roas: '3.1x', creators: '25', reach: '5.8M', revenue: '+85%' },
  },
  {
    title: '10K UGC Assets in 6 Months',
    brand: 'E-commerce Marketplace',
    category: 'Content Management',
    challenge: 'Product catalog of 5K+ SKUs needed consistent content at scale across channels.',
    solution: 'Built a managed content pipeline with 100+ creators producing platform-specific assets.',
    result: '10K+ UGC assets delivered, 60% reduction in content production cost per asset.',
    stats: { roas: '4.7x', creators: '100', reach: '15M', revenue: '+210%' },
  },
]

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold text-center mb-4"
        >
          Case Studies
        </motion.h1>
        <p className="text-gray-400 text-center mb-16 max-w-xl mx-auto">
          From challenge to conversion — results that speak louder than promises
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map(({ title, brand, category, challenge, solution, result, stats }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden flex flex-col"
            >
              <div className="p-6 flex flex-col gap-4 flex-1">
                <span className="text-xs text-purple-400 uppercase tracking-wider">{category}</span>
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="text-sm text-purple-300">{brand}</p>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="text-gray-500 text-xs uppercase mb-1">Challenge</p>
                    <p className="text-gray-400">{challenge}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs uppercase mb-1">Solution</p>
                    <p className="text-gray-400">{solution}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs uppercase mb-1">Result</p>
                    <p className="text-gray-300">{result}</p>
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-3 mt-auto pt-4 border-t border-zinc-800">
                  {Object.entries(stats).map(([key, val]) => (
                    <div key={key} className="text-center">
                      <p className="text-lg font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                        {val}
                      </p>
                      <p className="text-[10px] text-gray-500 uppercase">{key}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
