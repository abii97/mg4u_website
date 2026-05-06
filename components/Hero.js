'use client'
import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ShimmerButton } from '@/components/ui/shimmer-button'
import { Particles } from '@/components/ui/particles'

const GLOW_LAYERS = [
  { ease: 0.08, opacity: 0.18, blur: 60,  scale: 0.60, size: 400 },
  { ease: 0.06, opacity: 0.14, blur: 80,  scale: 0.80, size: 500 },
  { ease: 0.05, opacity: 0.11, blur: 100, scale: 1.00, size: 600 },
]

const GLOW_COLOR = '5,30,80'

const TRUSTED_BRANDS = [
  { name: 'ideaForge', logo: '/logos/ideaforge.svg' },
  { name: 'Emcure', logo: '/logos/emcure.svg' },
  { name: 'Kaya', logo: '/logos/kaya.svg' },
  { name: 'Just Herbs', logo: '/logos/just-herbs.svg' },
]

function useReducedMotion() {
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    const mql = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(mql.matches)
    const onChange = (e) => setReduced(e.matches)
    mql.addEventListener('change', onChange)
    return () => mql.removeEventListener('change', onChange)
  }, [])
  return reduced
}

function useIsMobile() {
  const [mobile, setMobile] = useState(false)
  useEffect(() => {
    const check = () => setMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])
  return mobile
}

function GlowLayer({ index, targetRef, currentRef, active }) {
  const elRef = useRef(null)
  const layer = GLOW_LAYERS[index]

  useEffect(() => {
    if (!active) return
    const el = elRef.current
    if (!el) return

    let raf
    const animate = () => {
      const curr = currentRef.current[index]
      const tgt = targetRef.current
      const nx = curr.x + (tgt.x - curr.x) * layer.ease
      const ny = curr.y + (tgt.y - curr.y) * layer.ease
      curr.x = nx
      curr.y = ny
      const tx = nx * layer.scale
      const ty = ny * layer.scale
      el.style.transform = `translate3d(${tx.toFixed(2)}px, ${ty.toFixed(2)}px, 0)`
      raf = requestAnimationFrame(animate)
    }
    raf = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(raf)
  }, [active, index, targetRef, currentRef])

  return (
    <div
      ref={elRef}
      className="absolute rounded-full will-change-transform pointer-events-none"
      style={{
        width: layer.size,
        height: layer.size,
        background: `radial-gradient(circle, rgba(${GLOW_COLOR},${layer.opacity}) 0%, transparent 70%)`,
        filter: `blur(${layer.blur}px)`,
        boxShadow: `0 0 ${layer.blur * 2}px ${layer.blur / 3}px rgba(${GLOW_COLOR},0.06)`,
        left: '50%',
        top: '50%',
        marginLeft: -layer.size / 2,
        marginTop: -layer.size / 2,
        transform: 'translate3d(0px, 0px, 0)',
      }}
    />
  )
}

function StaticGlow() {
  return (
    <>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[700px] h-[700px] rounded-full bg-primary/5 blur-3xl" />
      </div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/3 blur-2xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-primary/3 blur-2xl" />
    </>
  )
}

function TrustStrip() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1 }}
      className="flex flex-col items-center gap-4"
    >
      <p className="text-xs text-text-secondary uppercase tracking-widest font-medium">
        Trusted by
      </p>
      <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
        {TRUSTED_BRANDS.map(({ name, logo }) => (
          <Image
            key={name}
            src={logo}
            alt={name}
            width={100}
            height={28}
            className="opacity-50 hover:opacity-80 transition-opacity duration-fast grayscale"
            style={{ objectFit: 'contain', height: 24 }}
          />
        ))}
      </div>
    </motion.div>
  )
}

function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      className="relative z-10 text-center max-w-4xl px-6 py-24"
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-3xl md:text-4xl lg:text-4xl font-extrabold leading-tight tracking-tight mb-8 text-text-primary"
      >
        Reputation, creators and communication that{' '}
        <span className="text-primary">
          stand up to real‑world scrutiny.
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-lg md:text-xl text-text-secondary mb-10 max-w-3xl mx-auto leading-relaxed"
      >
        Global communications and creator-led growth—built in India &amp; APAC for reputation, crisis, and scale.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
      >
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          href="https://wa.me/your-number"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ShimmerButton
            shimmerColor="#ffffff"
            background="#0B72FF"
            className="!px-8 !py-4 !rounded-md !text-base !font-semibold"
          >
            Chat with us on WhatsApp
          </ShimmerButton>
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          href="/contact"
          className="border border-primary/30 text-primary px-8 py-4 rounded-md font-semibold text-base hover:bg-primary/5 transition-all duration-fast"
        >
          Submit a brief or query
        </motion.a>
      </motion.div>

      <TrustStrip />
    </motion.div>
  )
}

export default function Hero() {
  const heroRef = useRef(null)
  const targetRef = useRef({ x: 0, y: 0 })
  const currentRef = useRef(GLOW_LAYERS.map(() => ({ x: 0, y: 0 })))

  const reducedMotion = useReducedMotion()
  const isMobile = useIsMobile()
  const glowActive = !reducedMotion && !isMobile

  useEffect(() => {
    if (!glowActive) return
    const el = heroRef.current
    if (!el) return

    const handleMove = (e) => {
      const rect = el.getBoundingClientRect()
      targetRef.current.x = e.clientX - rect.left - rect.width / 2
      targetRef.current.y = e.clientY - rect.top - rect.height / 2
    }

    const handleLeave = () => {
      targetRef.current.x = 0
      targetRef.current.y = 0
    }

    el.addEventListener('mousemove', handleMove, { passive: true })
    el.addEventListener('mouseleave', handleLeave)
    return () => {
      el.removeEventListener('mousemove', handleMove)
      el.removeEventListener('mouseleave', handleLeave)
    }
  }, [glowActive])

  return (
    <section
      ref={heroRef}
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #ffffff 0%, #f4f7fc 100%)' }}
    >
      {glowActive ? (
        GLOW_LAYERS.map((_, i) => (
          <GlowLayer
            key={i}
            index={i}
            targetRef={targetRef}
            currentRef={currentRef}
            active={glowActive}
          />
        ))
      ) : (
        <StaticGlow />
      )}

      <Particles
        className="absolute inset-0"
        quantity={40}
        staticity={40}
        ease={60}
        size={0.5}
        color="#0B72FF"
        vx={0.05}
        vy={0.05}
      />

      <HeroContent />
    </section>
  )
}
