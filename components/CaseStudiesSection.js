'use client'
import Link from 'next/link'
import Image from 'next/image'
import { BlurFade } from '@/components/ui/blur-fade'
import { NumberTicker } from '@/components/ui/number-ticker'

const cases = [
  {
    company: 'ideaForge',
    title: 'Global content for deep‑tech credibility',
    desc: 'US and India-facing content, technical blogs and HubSpot-based journeys for one of India\'s leading drone and defence‑tech companies.',
    logo: '/logos/ideaforge.svg',
    stat: 40,
    statLabel: 'Content Pieces',
    color: '#0F75BC',
  },
  {
    company: 'Emcure & healthcare brands',
    title: 'Creator‑safe storytelling at scale',
    desc: 'Influencer and UGC campaigns that respect regulations while humanising health conversations — bridging medical accuracy and everyday understanding.',
    logo: '/logos/emcure.svg',
    stat: 50,
    statLabel: 'Creators',
    color: '#F7941D',
  },
  {
    company: 'Just Herbs',
    title: 'UGC‑first growth',
    desc: 'UGC-driven content pipelines feeding ads, social and marketplaces, supporting an ayurvedic beauty brand built on transparency and long‑term trust.',
    logo: '/logos/just-herbs.svg',
    stat: 3.2,
    statLabel: 'ROAS',
    decimal: true,
    color: '#7C3AED',
  },
]

export default function CaseStudiesSection() {
  return (
    <section className="relative bg-surface-deepest py-section-y px-6" id="case-studies">
      <div className="max-w-7xl mx-auto">
        <BlurFade delay={0.1}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-5 text-white tracking-tight">
              Where it{' '}
              <span className="text-gradient-blue font-extrabold">really mattered.</span>
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
              Called when stakes are high: regulated industries, public institutions,
              fast‑scaling D2C, and government campaigns.
            </p>
          </div>
        </BlurFade>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {cases.map(({ company, title, desc, logo, stat, statLabel, decimal, color }, i) => (
            <BlurFade key={company} delay={0.15 + i * 0.1}>
              <div className="group relative bg-surface-elevated/40 border border-white/[0.06] rounded-xl p-6 flex flex-col gap-5 transition-all duration-base hover:border-white/[0.12] hover:bg-surface-elevated/80">
                <div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-base pointer-events-none"
                  style={{
                    background: `radial-gradient(400px circle at 50% 0%, ${color}10, transparent 50%)`,
                  }}
                />
                <div className="h-8 flex items-center relative z-10">
                  <Image
                    src={logo}
                    alt={company}
                    width={100}
                    height={20}
                    className="opacity-40 group-hover:opacity-70 transition-all duration-base brightness-0 invert"
                    style={{ objectFit: 'contain', height: 20 }}
                  />
                </div>
                <h3 className="text-lg font-bold text-white relative z-10">{title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed flex-1 relative z-10">{desc}</p>
                <div className="pt-4 border-t border-white/[0.06] flex items-baseline gap-2 relative z-10">
                  <span className="text-4xl font-extrabold" style={{ color }}>
                    <NumberTicker value={stat} decimalPlaces={decimal ? 1 : 0} delay={0.3 + i * 0.1} />
                  </span>
                  <span className="text-xs text-text-muted uppercase tracking-wider font-medium">
                    {statLabel}
                  </span>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>

        <BlurFade delay={0.5}>
          <div className="text-center">
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-sm text-brand-orange hover:text-[#e08515] transition-colors duration-fast font-medium group"
            >
              View all case studies
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-0.5 transition-transform" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </BlurFade>
      </div>
    </section>
  )
}
