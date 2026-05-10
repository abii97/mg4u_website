'use client'
import Link from 'next/link'
import { BlurFade } from '@/components/ui/blur-fade'

const industries = [
  { label: 'D2C & Consumer Brands', color: '#0F75BC' },
  { label: 'Healthcare, Pharma & Hospitals', color: '#F7941D' },
  { label: 'Schools, Colleges & Universities', color: '#7C3AED' },
  { label: 'Government, Public Sector & Impact', color: '#00D4FF' },
  { label: 'New‑Age & On‑Demand Services', color: '#F7941D' },
  { label: 'B2B Tech & Industrial', color: '#0F75BC' },
]

export default function IndustriesSection() {
  return (
    <section className="relative bg-surface-base py-section-y px-6" id="industries">
      <div className="max-w-7xl mx-auto">
        <BlurFade delay={0.1}>
          <div className="text-center mb-16">
            <span className="text-xs text-brand-orange uppercase tracking-[0.2em] font-semibold mb-4 block">
              Industries
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-5 text-white tracking-tight">
              Partners in{' '}
              <span className="text-gradient">mission‑critical sectors.</span>
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
              We specialise where trust, compliance and speed matter as much as reach.
            </p>
          </div>
        </BlurFade>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {industries.map(({ label, color }, i) => (
            <BlurFade key={label} delay={0.08 + i * 0.06}>
              <span
                className="px-5 py-3 rounded-xl text-sm font-medium transition-all duration-base border cursor-default"
                style={{
                  background: `${color}0D`,
                  color,
                  borderColor: `${color}25`,
                }}
              >
                {label}
              </span>
            </BlurFade>
          ))}
        </div>

        <BlurFade delay={0.5}>
          <div className="text-center">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm text-brand-orange hover:text-[#e08515] transition-colors duration-fast font-medium group"
            >
              Learn about our industry expertise
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-0.5 transition-transform"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </BlurFade>
      </div>
    </section>
  )
}
