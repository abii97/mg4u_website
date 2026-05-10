'use client'
import Link from 'next/link'
import { BlurFade } from '@/components/ui/blur-fade'

const reasons = [
  {
    title: 'High‑trust sectors are our default',
    desc: 'Pharma, defence, government, education — we don\'t just understand regulated environments, we thrive in them.',
  },
  {
    title: 'Regional & vernacular first',
    desc: 'India and APAC aren\'t afterthoughts. We build for languages, cultures and platforms that global agencies miss.',
  },
  {
    title: 'From tweet‑speed crises to 12‑month roadmaps',
    desc: 'Whether it\'s a 2 AM escalation or a year‑long reputation build, we have the muscle for both.',
  },
]

export default function WhyUsSection() {
  return (
    <section className="relative bg-surface-base py-section-y px-6" id="why-us">
      <div className="max-w-7xl mx-auto">
        <BlurFade delay={0.1}>
          <div className="text-center mb-16">
            <span className="text-xs text-brand-orange uppercase tracking-[0.2em] font-semibold mb-4 block">
              Why us
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-5 text-white tracking-tight">
              Why teams like yours{' '}
              <span className="text-gradient-blue">call us.</span>
            </h2>
          </div>
        </BlurFade>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {reasons.map(({ title, desc }, i) => (
            <BlurFade key={title} delay={0.1 + i * 0.1}>
              <div className="group glass rounded-xl p-7 transition-all duration-base glass-hover text-center">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-5 text-xl font-bold"
                  style={{ background: 'rgba(15,117,188,0.12)', color: '#0F75BC' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{desc}</p>
              </div>
            </BlurFade>
          ))}
        </div>

        <BlurFade delay={0.5}>
          <div className="text-center">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm text-brand-orange hover:text-[#e08515] transition-colors duration-fast font-medium group"
            >
              More about us
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-0.5 transition-transform"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </BlurFade>
      </div>
    </section>
  )
}
