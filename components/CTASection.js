'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Particles } from '@/components/ui/particles'

export default function CTASection() {
  return (
    <section className="relative overflow-hidden py-32 px-6 text-center" style={{ background: 'var(--surface-deepest)' }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-blue/5 blur-[80px]" />
      </div>

      <Particles
        className="absolute inset-0"
        quantity={80}
        staticity={30}
        ease={70}
        size={0.4}
        color="#0F75BC"
        vx={0.08}
        vy={0.08}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="max-w-3xl mx-auto relative z-10"
      >
        <h2 className="text-4xl md:text-6xl font-extrabold mb-6 text-white tracking-tight leading-[1.1]">
          Ready to{' '}
          <span className="text-gradient font-extrabold">engineer influence</span>
          {' '}that converts?
        </h2>
        <p className="text-lg text-text-secondary mb-10 max-w-xl mx-auto leading-relaxed">
          Let&apos;s build a communication strategy that turns attention into action and views into revenue.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-10 py-4 text-base font-semibold text-white rounded-xl shadow-glow-orange transition-shadow duration-base hover:shadow-glow-lg"
              style={{ background: 'var(--gradient-brand)' }}
            >
              Start a conversation
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            <a
              href="https://wa.me/your-number"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 text-base font-semibold text-white/80 rounded-xl border border-white/[0.12] hover:bg-white/[0.04] hover:text-white hover:border-white/[0.2] transition-all duration-base"
            >
              Chat on WhatsApp
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
