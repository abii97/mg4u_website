'use client'
import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Particles } from '@/components/ui/particles'

const TRUSTED_BRANDS = [
  { name: 'ideaForge', logo: '/logos/ideaforge.svg' },
  { name: 'Emcure', logo: '/logos/emcure.svg' },
  { name: 'Kaya', logo: '/logos/kaya.svg' },
  { name: 'Just Herbs', logo: '/logos/just-herbs.svg' },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

export default function Hero() {
  const ref = useRef(null)

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-surface-deepest"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(15,117,188,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(15,117,188,0.04) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%, black 40%, transparent 70%)',
        }}
      />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 -left-32 w-[600px] h-[600px] rounded-full bg-brand-blue/5 blur-[120px]" />
        <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] rounded-full bg-brand-orange/4 blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-brand-navy/10 blur-[80px]" />
      </div>

      <Particles
        className="absolute inset-0"
        quantity={50}
        staticity={50}
        ease={50}
        size={0.4}
        color="#0F75BC"
        vx={0.05}
        vy={0.05}
      />

      <div className="relative z-10 text-center max-w-5xl px-6 py-32">
        <motion.div {...fadeUp(0)} className="mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.02] text-xs text-text-secondary">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
            India &amp; APAC communications
          </span>
        </motion.div>

        <motion.h1
          {...fadeUp(0.15)}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.08] tracking-tight mb-8"
        >
          Reputation, creators <br />
          and communication that{' '}
          <span className="text-gradient">
            stand up to real‑world scrutiny.
          </span>
        </motion.h1>

        <motion.p
          {...fadeUp(0.3)}
          className="text-lg md:text-xl text-text-secondary mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Global communications and creator‑led growth — built in India &amp; APAC
          for reputation, crisis, and scale across languages and platforms.
        </motion.p>

        <motion.div
          {...fadeUp(0.5)}
          className="flex flex-col sm:flex-row items-center gap-4 justify-center mb-16"
        >
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white rounded-xl shadow-glow-orange transition-shadow duration-base hover:shadow-glow-lg"
              style={{ background: 'var(--gradient-brand)' }}
            >
              Start a conversation
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/services"
              className="px-8 py-4 text-base font-semibold text-white/80 rounded-xl border border-white/[0.12] hover:bg-white/[0.04] hover:text-white hover:border-white/[0.2] transition-all duration-base"
            >
              Explore services
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col items-center gap-5"
        >
          <p className="text-xs text-text-muted uppercase tracking-[0.2em] font-medium">
            Trusted by
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {TRUSTED_BRANDS.map(({ name, logo }) => (
              <Image
                key={name}
                src={logo}
                alt={name}
                width={100}
                height={28}
                className="opacity-30 hover:opacity-60 transition-all duration-base brightness-0 invert"
                style={{ objectFit: 'contain', height: 24 }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
