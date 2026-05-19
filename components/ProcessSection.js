'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { BlurFade } from '@/components/ui/blur-fade'

const steps = [
  {
    num: '01',
    title: 'Listen & map risk vs. opportunity',
    desc: 'Deep-dive into your communication landscape — social listening, stakeholder mapping, and risk auditing.',
    color: '#0F75BC',
  },
  {
    num: '02',
    title: 'Design narrative & guardrails',
    desc: 'Craft messaging architecture, crisis playbooks, and creator briefs aligned to your brand\'s truth.',
    color: '#F7941D',
  },
  {
    num: '03',
    title: 'Build creator & comms engines',
    desc: 'Deploy teams, tools, and creative pipelines — from WhatsApp chatbots to UGC factories.',
    color: '#7C3AED',
  },
  {
    num: '04',
    title: 'Monitor, optimise & protect',
    desc: 'Real‑time dashboards, sentiment tracking, and rapid response — because the next tweet is the next crisis.',
    color: '#00D4FF',
  },
]

export default function ProcessSection() {
  return (
    <section className="relative bg-surface-base py-section-y px-6" id="process">
      <div className="max-w-7xl mx-auto">
        <BlurFade delay={0.1}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-5 text-white tracking-tight">
              A process designed for{' '}
              <span className="text-gradient font-extrabold">high‑stakes environments.</span>
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
              Sensitive sectors, fast-moving platforms and multi‑stakeholder worlds.
            </p>
          </div>
        </BlurFade>

        <div className="relative mb-12">
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-white/[0.06]" />
          {steps.map(({ num, title, desc, color }, i) => (
            <div key={num} className="relative lg:absolute lg:top-0" style={{ left: `${(i / (steps.length - 1)) * 100}%`, transform: 'translateX(-50%)' }}>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-[calc((100vw-12rem)/3-2rem)] h-px bg-white/[0.04]" />
              )}
              <div className="lg:flex lg:flex-col lg:items-center lg:absolute lg:top-0 lg:-translate-x-1/2">
                <BlurFade delay={0.1 + i * 0.1}>
                  <div className="flex lg:flex-col items-center gap-5 lg:gap-4 py-6 lg:py-0">
                    <motion.div
                      whileHover={{ scale: 1.1, boxShadow: `0 0 30px ${color}30` }}
                      className="shrink-0 w-16 h-16 lg:w-14 lg:h-14 rounded-2xl flex items-center justify-center text-xl font-extrabold transition-all duration-base relative z-10"
                      style={{ background: `${color}18`, color, border: `1px solid ${color}30` }}
                    >
                      {num}
                    </motion.div>
                    <div className="lg:text-center lg:max-w-[200px] lg:mt-4 relative z-10">
                      <h3 className="text-lg font-bold text-white mb-1.5">{title}</h3>
                      <p className="text-sm text-text-secondary leading-relaxed">{desc}</p>
                    </div>
                  </div>
                </BlurFade>
              </div>
            </div>
          ))}

          <div className="lg:hidden mt-6 flex flex-col gap-6">
            {steps.map(({ num, title, desc, color }, i) => (
              <BlurFade key={num} delay={0.1 + i * 0.1}>
                <div className="flex items-start gap-5">
                  <div
                    className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-lg font-extrabold"
                    style={{ background: `${color}18`, color, border: `1px solid ${color}30` }}
                  >
                    {num}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">{title}</h3>
                    <p className="text-sm text-text-secondary leading-relaxed">{desc}</p>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>

        <BlurFade delay={0.55}>
          <div className="text-center mt-16">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm text-brand-orange hover:text-[#e08515] transition-colors duration-fast font-medium group"
            >
              Learn about our process
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-0.5 transition-transform" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </BlurFade>
      </div>
    </section>
  )
}
