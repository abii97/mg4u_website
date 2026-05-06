'use client'
import { BlurFade } from '@/components/ui/blur-fade'
import { AnimatedGridPattern } from '@/components/ui/animated-grid-pattern'
import { cn } from '@/lib/utils'

const industries = [
  { label: 'D2C & Consumer Brands', desc: 'Beauty, personal care, fashion, F&B and home—scaling UGC, WhatsApp and influencer-led growth while protecting ratings and reputation.' },
  { label: 'Healthcare, Pharma & Hospitals', desc: 'Sensitive, regulation-aware communication for pharma, hospitals and healthtech across patient education, doctor engagement, CSR and crisis scenarios.' },
  { label: 'Schools, Colleges & Universities', desc: 'Admissions campaigns, reputation management and crisis playbooks for institutions that live in the public eye.' },
  { label: 'Government, Public Sector & Impact', desc: 'Citizen-facing campaigns, regional influencer programs and narrative management for policy, schemes and public interest initiatives.' },
  { label: 'New-Age & On-Demand Services', desc: 'Platforms like 10-minute home help, logistics and other on-demand models where reviews, responsiveness and community sentiment directly impact growth.' },
  { label: 'B2B Tech & Industrial', desc: 'High-credibility content, thought leadership and global communication for advanced tech sectors like drones, defence and industrial automation.' },
]

const reasons = [
  { title: 'High-trust sectors are our default', desc: 'Pharma, hospitals, education, government, defence tech and at-scale D2C—sectors where a single misstep can trigger legal, media or social fallout.' },
  { title: 'Regional & vernacular first, not as an afterthought', desc: 'We bake in regional creators, languages and cultural nuance because over 70% of India&rsquo;s digital audience engages mainly with regional content and vernacular creators.' },
  { title: 'Sustainability, CSR & impact with depth', desc: 'We align your sustainability and CSR narratives with global ESG expectations while keeping them rooted in real, local impact stories.' },
  { title: 'From tweet-speed crises to 12-month roadmaps', desc: 'We are as comfortable in a 48-hour crisis war-room as we are designing year-long, multi-country communication programs.' },
]

const processSteps = [
  { num: '01', title: 'Listen & map risk vs. opportunity', desc: 'We audit your current reputation, creator footprint, internal communication and stakeholder landscape—identifying where you&rsquo;re vulnerable and where you can win.' },
  { num: '02', title: 'Design the narrative & guardrails', desc: 'Together, we define core narratives, red lines and escalation paths for D2C buyers, patients, students, citizens, regulators and employees across India and APAC.' },
  { num: '03', title: 'Build creator & communication engines', desc: 'We assemble regional creators, memes, UGC pipelines, WhatsApp/SMS flows, web content and on-ground touchpoints into one cohesive system rather than scattered campaigns.' },
  { num: '04', title: 'Monitor, optimise & protect', desc: 'Always-on listening, reporting and scenario planning help us continuously improve performance while staying ready for crises, misinformation spikes or policy-driven changes.' },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <div className="relative py-section-y px-6 overflow-hidden" style={{ background: 'linear-gradient(180deg, #f4f7fc 0%, #ffffff 50%)' }}>
        <AnimatedGridPattern
          numSquares={20}
          maxOpacity={0.08}
          duration={2}
          className={cn('[mask-image:radial-gradient(ellipse_at_center,white_40%,transparent_80%)]')}
        />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-[500px] h-[500px] opacity-[0.04]" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=60)', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '50%', filter: 'blur(40px)' }} />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <BlurFade delay={0.1}>
            <h1 className="text-4xl font-bold text-center mb-4 text-text-primary">About Us</h1>
          </BlurFade>
          <BlurFade delay={0.2}>
            <p className="text-text-secondary text-center mb-16 max-w-2xl mx-auto text-lg leading-relaxed">
              We are a global communications and creator-led growth agency with deep India &amp; APAC roots—helping
              brands, institutions and governments manage reputation, navigate crises, and scale content across
              languages and platforms. From sustainability and CSR storytelling to meme-driven creator campaigns and
              always-on crisis desks, we design narratives people trust and remember.
            </p>
          </BlurFade>

          <BlurFade delay={0.3}>
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-center mb-4 text-text-primary">Who we partner with</h2>
              <p className="text-text-secondary text-center mb-10 max-w-2xl mx-auto leading-relaxed">
                We specialise in mission-critical communication and creator work where trust, compliance and speed matter as much as views.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {industries.map(({ label, desc }, i) => (
                  <BlurFade key={label} delay={0.35 + i * 0.06}>
                    <div className="bg-surface-alt border border-gray-100 p-6 rounded-md shadow-1 hover:shadow-2 transition-shadow duration-base">
                      <h3 className="text-base font-semibold mb-2 text-text-primary">{label}</h3>
                      <p className="text-sm text-text-secondary leading-relaxed">{desc}</p>
                    </div>
                  </BlurFade>
                ))}
              </div>
            </div>
          </BlurFade>

          <BlurFade delay={0.4}>
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-center mb-4 text-text-primary">Why teams like yours call us</h2>
              <p className="text-text-secondary text-center mb-10 max-w-2xl mx-auto leading-relaxed">
                In a world where a single tweet, reel or review can move markets, you need a team that understands your sector, your audience and your stakes.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {reasons.map(({ title, desc }, i) => (
                  <BlurFade key={title} delay={0.45 + i * 0.08}>
                    <div className="bg-surface-alt border border-gray-100 p-6 rounded-md shadow-1 hover:shadow-2 transition-shadow duration-base">
                      <h3 className="text-base font-semibold mb-2 text-text-primary">{title}</h3>
                      <p className="text-sm text-text-secondary leading-relaxed">{desc}</p>
                    </div>
                  </BlurFade>
                ))}
              </div>
            </div>
          </BlurFade>

          <BlurFade delay={0.5}>
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-center mb-4 text-text-primary">How we work when stakes are high</h2>
              <p className="text-text-secondary text-center mb-10 max-w-2xl mx-auto leading-relaxed">
                A process designed for sensitive sectors, fast-moving platforms and multi-stakeholder environments.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {processSteps.map(({ num, title, desc }, i) => (
                  <BlurFade key={num} delay={0.55 + i * 0.08}>
                    <div className="bg-surface-alt border border-gray-100 p-6 rounded-md flex flex-col gap-3 shadow-1 hover:shadow-2 transition-shadow duration-base">
                      <span className="text-xs font-mono text-primary tracking-wider font-semibold">{num}</span>
                      <h3 className="text-base font-semibold text-text-primary">{title}</h3>
                      <p className="text-sm text-text-secondary leading-relaxed">{desc}</p>
                    </div>
                  </BlurFade>
                ))}
              </div>
            </div>
          </BlurFade>
        </div>
      </div>
    </div>
  )
}
