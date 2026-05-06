'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ShimmerButton } from '@/components/ui/shimmer-button'
import { Particles } from '@/components/ui/particles'

export default function CTASection() {
  return (
    <section className="relative bg-surface-dark py-24 px-6 text-center overflow-hidden">
      <Particles
        className="absolute inset-0"
        quantity={60}
        staticity={30}
        ease={70}
        size={0.4}
        color="#0B72FF"
        vx={0.1}
        vy={0.1}
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto relative z-10"
      >
        <h2 className="text-4xl font-bold mb-4 text-text-inverse">Ready to Convert?</h2>
        <p className="text-white/60 mb-8">
          Let&apos;s engineer an influence strategy that turns views into revenue.
        </p>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
          <Link href="/contact">
            <ShimmerButton
              shimmerColor="#ffffff"
              background="#0B72FF"
              className="!px-10 !py-4 !rounded-md !text-lg !font-semibold"
            >
              Get Started
            </ShimmerButton>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}
