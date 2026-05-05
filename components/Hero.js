'use client'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-zinc-950">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[700px] h-[700px] rounded-full bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-transparent blur-3xl" />
      </div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-500/5 blur-2xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-blue-500/5 blur-2xl" />

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
          className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight tracking-tight mb-8"
        >
          Reputation, creators and communication that{' '}
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            stand up to real‑world scrutiny.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed"
        >
          We are a global communications and creator‑led growth agency with deep India &amp; APAC roots—helping
          brands, institutions and governments manage reputation, navigate crises, and scale content across
          languages and platforms. From sustainability and CSR storytelling to meme‑driven creator campaigns and
          always‑on crisis desks, we design narratives people trust and remember.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            href="https://wa.me/your-number"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-base transition-shadow hover:shadow-lg hover:shadow-purple-500/20"
          >
            Chat with us on WhatsApp
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            href="/contact"
            className="border border-zinc-700 text-white px-8 py-4 rounded-lg font-semibold text-base hover:bg-zinc-800 hover:border-zinc-600 transition-all"
          >
            Submit a brief or query
          </motion.a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-sm text-gray-600 max-w-2xl mx-auto leading-relaxed"
        >
          Trusted by leaders like ideaForge, Emcure, Kaya, Just Herbs and high‑stakes institutions across
          healthcare, education, government and consumer services.
        </motion.p>
      </motion.div>
    </section>
  )
}
