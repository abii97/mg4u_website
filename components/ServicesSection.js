'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { BlurFade } from '@/components/ui/blur-fade'

const pillars = [
  {
    num: '01',
    title: 'Reputation, Crisis & Sustainability',
    desc: 'Real‑time listening, rapid response and narrative repair for high‑trust sectors where perception is everything.',
    color: '#0F75BC',
  },
  {
    num: '02',
    title: 'Creator & Meme‑Led Campaigns',
    desc: 'Full‑funnel influencer, UGC and regional creator programs that drive measurable action across languages and platforms.',
    color: '#F7941D',
  },
  {
    num: '03',
    title: 'WhatsApp, SMS & Full‑Stack Comms',
    desc: 'Leveraging 90%+ open rates for D2C, institutions and stakeholder communication at scale.',
    color: '#7C3AED',
  },
  {
    num: '04',
    title: 'On‑Ground, Events & Digital Foundations',
    desc: 'Activations, content and high‑trust sites engineered for clarity, credibility and conversion.',
    color: '#00D4FF',
  },
]

export default function ServicesSection() {
  return (
    <section className="relative bg-surface-base py-section-y px-6" id="services">
      <div className="max-w-7xl mx-auto">
        <BlurFade delay={0.1}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-5 text-white tracking-tight">
              Four pillars for a world where{' '}
              <span className="text-gradient font-extrabold">one post can move markets.</span>
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
              Communication that is fast, credible and built for scrutiny.
            </p>
          </div>
        </BlurFade>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {pillars.map(({ num, title, desc, color }, i) => (
            <BlurFade key={num} delay={0.1 + i * 0.08}>
              <motion.div
                whileHover={{ y: -2, scale: 1.01 }}
                className="group relative overflow-hidden bg-surface-elevated/60 backdrop-blur-sm border border-white/[0.06] rounded-xl p-6 md:p-8 flex gap-5 transition-all duration-base cursor-default"
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-base pointer-events-none"
                  style={{
                    background: `radial-gradient(600px circle at 50% 50%, ${color}0D, transparent 40%)`,
                  }}
                />
                <div
                  className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-base"
                  style={{ background: `linear-gradient(90deg, transparent, ${color}40, transparent)` }}
                />
                <div
                  className="shrink-0 w-11 h-11 rounded-xl flex items-center justify-center text-lg font-bold relative z-10"
                  style={{ background: `${color}18`, color }}
                >
                  {num}
                </div>
                <div className="flex flex-col gap-2 relative z-10">
                  <h3 className="text-xl font-bold text-white group-hover:text-brand-orange transition-colors duration-base">
                    {title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            </BlurFade>
          ))}
        </div>

        <BlurFade delay={0.55}>
          <div className="text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm text-brand-orange hover:text-[#e08515] transition-colors duration-fast font-medium group"
            >
              Explore all services
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-0.5 transition-transform" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </BlurFade>
      </div>
    </section>
  )
}
