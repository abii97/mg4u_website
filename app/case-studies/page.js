'use client'
import { motion } from 'framer-motion'

const caseStudies = [
  {
    company: 'ideaForge',
    title: 'Global content for deep-tech credibility',
    category: 'B2B Tech & Industrial',
    challenge: 'One of India&rsquo;s leading drone and defence-tech companies needed US and India-facing content that aligned complex product narratives with investor, enterprise and policy stakeholders.',
    solution: 'Built technical blog cadence, HubSpot-based web journeys, and thought-leadership content calibrated for different audience tiers—investors, government, enterprise buyers and engineering talent.',
    result: 'Consistent content pipeline supporting global credibility, investor communication and enterprise funnel across both markets.',
    stats: [
      { val: '40+', label: 'Content' },
      { val: 'Monthly', label: 'Blogs' },
      { val: '2', label: 'Markets' },
      { val: 'Global', label: 'Audience' },
    ],
  },
  {
    company: 'Emcure & healthcare brands',
    title: 'Creator-safe storytelling at scale',
    category: 'Healthcare, Pharma & Hospitals',
    challenge: 'Healthcare brands operate under strict regulatory constraints. Traditional influencer content often crosses compliance lines or feels inauthentic to patients and doctors.',
    solution: 'Designed a creator-safe framework with medically vetted scripts, compliant UGC pipelines and campaigns that humanise health conversations without breaching regulations.',
    result: 'Scalable influencer and UGC programs that bridge medical accuracy and everyday understanding, building trust across patient and doctor communities.',
    stats: [
      { val: '50+', label: 'Creators' },
      { val: '12+', label: 'Campaigns' },
      { val: '4', label: 'Platforms' },
      { val: '100%', label: 'Compliance' },
    ],
  },
  {
    company: 'Just Herbs',
    title: 'UGC-first growth',
    category: 'D2C & Consumer Brands',
    challenge: 'An ayurvedic beauty brand built on transparency and ingredients needed to scale content for ads, social channels and marketplaces without losing authenticity.',
    solution: 'Built UGC-driven content pipelines—scripting, production and quality control—feeding ads, organic social and marketplace product pages simultaneously.',
    result: 'High-volume content engine supporting multi-channel growth while maintaining ingredient-led authenticity and long-term brand trust.',
    stats: [
      { val: '500+', label: 'Videos' },
      { val: '5', label: 'Channels' },
      { val: '3.2x', label: 'ROAS' },
      { val: '4.6', label: 'Rating' },
    ],
  },
  {
    company: 'On-demand home services',
    title: 'Reviews, crisis & community',
    category: 'New-Age & On-Demand Services',
    challenge: 'A 10-minute on-demand home help platform faced the reality that every rating directly affects demand. Negative reviews or slow crisis response could cascade across LinkedIn, X and Instagram.',
    solution: 'Implemented always-on feedback loops, review management across platforms and rapid-response crisis protocols tied to social listening.',
    result: 'Protected trust in a category where speed and perception drive growth, with measurable improvements in average ratings and response times.',
    stats: [
      { val: '&lt;15m', label: 'Response' },
      { val: '4.4', label: 'Rating' },
      { val: '3', label: 'Platforms' },
      { val: '85%', label: 'Recovery' },
    ],
  },
  {
    company: 'Institutions & campaigns',
    title: 'From campuses to public communication',
    category: 'Government, Public Sector & Impact',
    challenge: 'Colleges, real-estate brands and issue-based campaigns needed communication that respected cultural context while navigating high-visibility public scrutiny.',
    solution: 'Handled college reputation and crisis scenarios, real-estate social media with strategic comment seeding, and meme-driven campaigns for music and issue-based narratives.',
    result: 'Demonstrated speed, tone precision and cultural fluency across education, real-estate and public-interest campaigns where missteps carry immediate consequences.',
    stats: [
      { val: '5+', label: 'Institutions' },
      { val: '8+', label: 'Campaigns' },
      { val: 'Positive', label: 'Sentiment' },
      { val: '10M+', label: 'Reach' },
    ],
  },
]

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen py-section-y px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-4 text-text-primary"
        >
          Case Studies
        </motion.h1>
        <p className="text-text-secondary text-center mb-16 max-w-2xl mx-auto text-lg leading-relaxed">
          We&rsquo;re often called when stakes are high—regulated industries, public institutions,
          fast-scaling D2C, and government or impact campaigns.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map(({ company, title, category, challenge, solution, result, stats }, i) => (
            <motion.div
              key={company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-surface-alt border border-gray-100 rounded-md overflow-hidden flex flex-col shadow-1"
            >
              <div className="p-6 flex flex-col gap-4 flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-primary uppercase tracking-wider font-semibold">{category}</span>
                  <span className="text-sm font-semibold text-primary">{company}</span>
                </div>
                <h3 className="text-xl font-semibold text-text-primary">{title}</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="text-text-secondary text-xs uppercase mb-1 font-semibold">Challenge</p>
                    <p className="text-text-secondary leading-relaxed">{challenge}</p>
                  </div>
                  <div>
                    <p className="text-text-secondary text-xs uppercase mb-1 font-semibold">Solution</p>
                    <p className="text-text-secondary leading-relaxed">{solution}</p>
                  </div>
                  <div>
                    <p className="text-text-secondary text-xs uppercase mb-1 font-semibold">Result</p>
                    <p className="text-text-primary leading-relaxed">{result}</p>
                  </div>
                </div>

                <div className="mt-auto pt-4 border-t border-gray-200">
                  <div className="grid grid-cols-4 gap-2">
                    {stats.map(({ val, label }) => (
                      <div key={label} className="text-center">
                        <p className="text-2xl font-extrabold text-primary leading-tight">{val}</p>
                        <p className="text-[11px] text-text-secondary uppercase tracking-wide mt-1">{label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
