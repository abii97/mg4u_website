'use client'
import { BlurFade } from '@/components/ui/blur-fade'

const industries = [
  { label: 'D2C & Consumer Brands', desc: 'Beauty, personal care, fashion, F&B and home—scaling UGC, WhatsApp and influencer-led growth while protecting ratings and reputation.', color: '#0F75BC' },
  { label: 'Healthcare, Pharma & Hospitals', desc: 'Sensitive, regulation-aware communication for pharma, hospitals and healthtech across patient education, doctor engagement, CSR and crisis scenarios.', color: '#F7941D' },
  { label: 'Schools, Colleges & Universities', desc: 'Admissions campaigns, reputation management and crisis playbooks for institutions that live in the public eye.', color: '#7C3AED' },
  { label: 'Government, Public Sector & Impact', desc: 'Citizen-facing campaigns, regional influencer programs and narrative management for policy, schemes and public interest initiatives.', color: '#00D4FF' },
  { label: 'New-Age & On-Demand Services', desc: 'Platforms like 10-minute home help, logistics and other on-demand models where reviews directly impact growth.', color: '#F7941D' },
  { label: 'B2B Tech & Industrial', desc: 'High-credibility content, thought leadership and global communication for advanced tech sectors like drones, defence and industrial automation.', color: '#0F75BC' },
]

const reasons = [
  { title: 'High-trust sectors are our default', desc: 'Pharma, hospitals, education, government, defence tech and at-scale D2C—sectors where a single misstep can trigger legal, media or social fallout.' },
  { title: 'Regional & vernacular first, not as an afterthought', desc: 'We bake in regional creators, languages and cultural nuance because over 70% of India\'s digital audience engages mainly with regional content and vernacular creators.' },
  { title: 'Sustainability, CSR & impact with depth', desc: 'We align your sustainability and CSR narratives with global ESG expectations while keeping them rooted in real, local impact stories.' },
  { title: 'From tweet-speed crises to 12-month roadmaps', desc: 'We are as comfortable in a 48-hour crisis war-room as we are designing year-long, multi-country communication programs.' },
]

const processSteps = [
  { num: '01', title: 'Listen & map risk vs. opportunity', desc: 'We audit your current reputation, creator footprint, internal communication and stakeholder landscape—identifying where you\'re vulnerable and where you can win.' },
  { num: '02', title: 'Design the narrative & guardrails', desc: 'Together, we define core narratives, red lines and escalation paths for D2C buyers, patients, students, citizens, regulators and employees across India and APAC.' },
  { num: '03', title: 'Build creator & communication engines', desc: 'We assemble regional creators, memes, UGC pipelines, WhatsApp/SMS flows, web content and on-ground touchpoints into one cohesive system rather than scattered campaigns.' },
  { num: '04', title: 'Monitor, optimise & protect', desc: 'Always-on listening, reporting and scenario planning help us continuously improve performance while staying ready for crises, misinformation spikes or policy-driven changes.' },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-surface-deepest">
      <section className="relative py-section-y px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-blue/5 blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <BlurFade delay={0.1}>
            <span className="text-xs text-brand-orange uppercase tracking-[0.2em] font-semibold mb-4 block text-center">About</span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-6 text-white tracking-tight">We engineer influence that converts</h1>
          </BlurFade>
          <BlurFade delay={0.2}>
            <p className="text-text-secondary text-center mb-20 max-w-3xl mx-auto text-lg leading-relaxed">
              A global communications and creator-led growth agency with deep India &amp; APAC roots—helping
              brands, institutions and governments manage reputation, navigate crises, and scale content across
              languages and platforms. From sustainability storytelling to meme-driven creator campaigns and
              always-on crisis desks, we design narratives people trust and remember.
            </p>
          </BlurFade>

          <BlurFade delay={0.3}>
            <div className="mb-24">
              <h2 className="text-3xl font-extrabold text-center mb-4 text-white">Who we partner with</h2>
              <p className="text-text-secondary text-center mb-12 max-w-2xl mx-auto leading-relaxed">
                We specialise in mission-critical communication and creator work where trust, compliance and speed matter as much as views.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {industries.map(({ label, desc, color }, i) => (
                  <BlurFade key={label} delay={0.35 + i * 0.06}>
                    <div className="bg-surface-elevated/30 border border-white/[0.06] rounded-xl p-6 hover:border-white/[0.12] transition-all duration-base">
                      <h3 className="text-base font-semibold mb-2 text-white" style={{ color }}>{label}</h3>
                      <p className="text-sm text-text-secondary leading-relaxed">{desc}</p>
                    </div>
                  </BlurFade>
                ))}
              </div>
            </div>
          </BlurFade>

          <BlurFade delay={0.4}>
            <div className="mb-24">
              <h2 className="text-3xl font-extrabold text-center mb-4 text-white">Why teams like yours call us</h2>
              <p className="text-text-secondary text-center mb-12 max-w-2xl mx-auto leading-relaxed">
                In a world where a single tweet, reel or review can move markets, you need a team that understands your sector, your audience and your stakes.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {reasons.map(({ title, desc }, i) => (
                  <BlurFade key={title} delay={0.45 + i * 0.08}>
                    <div className="glass rounded-xl p-7 hover:bg-surface-elevated/80 transition-all duration-base">
                      <h3 className="text-base font-semibold mb-2 text-white">{title}</h3>
                      <p className="text-sm text-text-secondary leading-relaxed">{desc}</p>
                    </div>
                  </BlurFade>
                ))}
              </div>
            </div>
          </BlurFade>

          <BlurFade delay={0.5}>
            <div className="mb-20">
              <h2 className="text-3xl font-extrabold text-center mb-4 text-white">How we work when stakes are high</h2>
              <p className="text-text-secondary text-center mb-12 max-w-2xl mx-auto leading-relaxed">
                A process designed for sensitive sectors, fast-moving platforms and multi-stakeholder environments.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {processSteps.map(({ num, title, desc }, i) => (
                  <BlurFade key={num} delay={0.55 + i * 0.08}>
                    <div className="bg-surface-elevated/30 border border-white/[0.06] rounded-xl p-6 flex flex-col gap-3 hover:border-white/[0.12] transition-all duration-base">
                      <span className="text-xs font-mono text-brand-orange tracking-wider font-semibold">{num}</span>
                      <h3 className="text-base font-semibold text-white">{title}</h3>
                      <p className="text-sm text-text-secondary leading-relaxed">{desc}</p>
                    </div>
                  </BlurFade>
                ))}
              </div>
            </div>
          </BlurFade>
        </div>
      </section>
    </div>
  )
}
