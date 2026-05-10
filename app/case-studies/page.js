'use client'
import { BlurFade } from '@/components/ui/blur-fade'
import { NumberTicker } from '@/components/ui/number-ticker'

const caseStudies = [
  {
    company: 'ideaForge', title: 'Global content for deep-tech credibility',
    category: 'B2B Tech & Industrial',
    color: '#0F75BC',
    challenge: 'One of India\'s leading drone and defence-tech companies needed US and India-facing content that aligned complex product narratives with investor, enterprise and policy stakeholders.',
    solution: 'Built technical blog cadence, HubSpot-based web journeys, and thought-leadership content calibrated for different audience tiers—investors, government, enterprise buyers and engineering talent.',
    result: 'Consistent content pipeline supporting global credibility, investor communication and enterprise funnel across both markets.',
    stats: [{ val: 40, label: 'Content' }, { val: 'Monthly', label: 'Blogs' }, { val: 2, label: 'Markets' }, { val: 'Global', label: 'Audience' }],
  },
  {
    company: 'Emcure & healthcare brands', title: 'Creator-safe storytelling at scale',
    category: 'Healthcare, Pharma & Hospitals',
    color: '#F7941D',
    challenge: 'Healthcare brands operate under strict regulatory constraints. Traditional influencer content often crosses compliance lines or feels inauthentic to patients and doctors.',
    solution: 'Designed a creator-safe framework with medically vetted scripts, compliant UGC pipelines and campaigns that humanise health conversations without breaching regulations.',
    result: 'Scalable influencer and UGC programs that bridge medical accuracy and everyday understanding, building trust across patient and doctor communities.',
    stats: [{ val: 50, label: 'Creators' }, { val: 12, label: 'Campaigns' }, { val: 4, label: 'Platforms' }, { val: '100%', label: 'Compliance' }],
  },
  {
    company: 'Just Herbs', title: 'UGC-first growth',
    category: 'D2C & Consumer Brands',
    color: '#7C3AED',
    challenge: 'An ayurvedic beauty brand built on transparency and ingredients needed to scale content for ads, social channels and marketplaces without losing authenticity.',
    solution: 'Built UGC-driven content pipelines—scripting, production and quality control—feeding ads, organic social and marketplace product pages simultaneously.',
    result: 'High-volume content engine supporting multi-channel growth while maintaining ingredient-led authenticity and long-term brand trust.',
    stats: [{ val: 500, label: 'Videos' }, { val: 5, label: 'Channels' }, { val: 3.2, label: 'ROAS', dec: 1 }, { val: 4.6, label: 'Rating', dec: 1 }],
  },
  {
    company: 'On-demand home services', title: 'Reviews, crisis & community',
    category: 'New-Age & On-Demand Services',
    color: '#00D4FF',
    challenge: 'A 10-minute on-demand home help platform faced the reality that every rating directly affects demand. Negative reviews or slow crisis response could cascade across LinkedIn, X and Instagram.',
    solution: 'Implemented always-on feedback loops, review management across platforms and rapid-response crisis protocols tied to social listening.',
    result: 'Protected trust in a category where speed and perception drive growth, with measurable improvements in average ratings and response times.',
    stats: [{ val: '<15m', label: 'Response' }, { val: 4.4, label: 'Rating', dec: 1 }, { val: 3, label: 'Platforms' }, { val: 85, label: '% Recovery' }],
  },
  {
    company: 'Institutions & campaigns', title: 'From campuses to public communication',
    category: 'Government, Public Sector & Impact',
    color: '#F7941D',
    challenge: 'Colleges, real-estate brands and issue-based campaigns needed communication that respected cultural context while navigating high-visibility public scrutiny.',
    solution: 'Handled college reputation and crisis scenarios, real-estate social media with strategic comment seeding, and meme-driven campaigns for music and issue-based narratives.',
    result: 'Demonstrated speed, tone precision and cultural fluency across education, real-estate and public-interest campaigns where missteps carry immediate consequences.',
    stats: [{ val: 5, label: 'Institutions' }, { val: 8, label: 'Campaigns' }, { val: '+', label: 'Sentiment' }, { val: 10, label: 'M+ Reach' }],
  },
]

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-surface-deepest py-section-y px-6">
      <div className="max-w-7xl mx-auto">
        <BlurFade delay={0.1}>
          <span className="text-xs text-brand-orange uppercase tracking-[0.2em] font-semibold mb-4 block text-center">Case Studies</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-white tracking-tight">Where it really mattered</h1>
        </BlurFade>
        <BlurFade delay={0.2}>
          <p className="text-text-secondary text-center mb-16 max-w-2xl mx-auto text-lg leading-relaxed">
            We\'re often called when stakes are high—regulated industries, public institutions,
            fast-scaling D2C, and government or impact campaigns.
          </p>
        </BlurFade>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {caseStudies.map(({ company, title, category, challenge, solution, result, stats, color }, i) => (
            <BlurFade key={company} delay={0.1 + i * 0.05}>
              <div className="group bg-surface-elevated/30 border border-white/[0.06] rounded-xl overflow-hidden flex flex-col hover:border-white/[0.12] transition-all duration-base">
                <div className="p-6 flex flex-col gap-4 flex-1 relative">
                  <div
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-base pointer-events-none"
                    style={{ background: `radial-gradient(400px circle at 50% 0%, ${color}08, transparent 50%)` }}
                  />
                  <div className="flex items-center justify-between relative z-10">
                    <span className="text-xs uppercase tracking-wider font-semibold" style={{ color }}>{category}</span>
                    <span className="text-sm font-semibold" style={{ color }}>{company}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white relative z-10">{title}</h3>
                  <div className="space-y-3 text-sm relative z-10">
                    <div>
                      <p className="text-text-muted text-xs uppercase mb-1 font-semibold">Challenge</p>
                      <p className="text-text-secondary leading-relaxed">{challenge}</p>
                    </div>
                    <div>
                      <p className="text-text-muted text-xs uppercase mb-1 font-semibold">Solution</p>
                      <p className="text-text-secondary leading-relaxed">{solution}</p>
                    </div>
                    <div>
                      <p className="text-text-muted text-xs uppercase mb-1 font-semibold">Result</p>
                      <p className="text-white leading-relaxed">{result}</p>
                    </div>
                  </div>
                  <div className="mt-auto pt-4 border-t border-white/[0.06] relative z-10">
                    <div className="grid grid-cols-4 gap-2">
                      {stats.map(({ val, label, dec }) => (
                        <div key={label} className="text-center">
                          <p className="text-2xl font-extrabold leading-tight" style={{ color }}>
                            {typeof val === 'number' ? <NumberTicker value={val} decimalPlaces={dec || 0} delay={0.3 + i * 0.1} /> : val}
                          </p>
                          <p className="text-[10px] text-text-muted uppercase tracking-wide mt-1">{label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </div>
  )
}
