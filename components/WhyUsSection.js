'use client'
import Link from 'next/link'
import { BlurFade } from '@/components/ui/blur-fade'

const IconShield = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>
)
const IconGlobe = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>
)
const IconClock = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
)

const reasons = [
  { title: 'High-trust sectors are our default', icon: <IconShield /> },
  { title: 'Regional & vernacular first, not as an afterthought', icon: <IconGlobe /> },
  { title: 'From tweet-speed crises to 12-month roadmaps', icon: <IconClock /> },
]

export default function WhyUsSection() {
  return (
    <section className="bg-surface-alt py-section-y px-6">
      <div className="max-w-6xl mx-auto">
        <BlurFade delay={0.1}>
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold mb-4 text-text-primary">Why teams like yours call us</h2>
          </div>
        </BlurFade>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
          {reasons.map(({ title, icon }, i) => (
            <BlurFade key={title} delay={0.1 + i * 0.1}>
              <div className="bg-surface-base border border-gray-100 p-6 rounded-md transition-all text-center shadow-1 hover:shadow-2 hover:border-primary/30 duration-base">
                <div className="text-primary mb-3 flex justify-center">{icon}</div>
                <h3 className="text-base font-semibold text-text-primary">{title}</h3>
              </div>
            </BlurFade>
          ))}
        </div>

        <BlurFade delay={0.5}>
          <div className="text-center">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary-hover transition-colors duration-fast font-medium"
            >
              More about us
              <span className="text-lg">&rarr;</span>
            </Link>
          </div>
        </BlurFade>
      </div>
    </section>
  )
}
