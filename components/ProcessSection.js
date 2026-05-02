'use client'
import { motion } from 'framer-motion'

const steps = [
  { step: '01', title: 'Discover', desc: 'Deep-dive into your brand DNA, audience, and growth bottlenecks.' },
  { step: '02', title: 'Match', desc: 'AI-powered creator matching with verified engagement and audience data.' },
  { step: '03', title: 'Create', desc: 'High-converting content crafted by vetted creators and our creative team.' },
  { step: '04', title: 'Amplify', desc: 'Multi-platform distribution with performance ad spend optimization.' },
  { step: '05', title: 'Scale', desc: 'Continuous A/B testing and iterative scaling to compound ROI.' },
]

export default function ProcessSection() {
  return (
    <section className="bg-zinc-950 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-4"
        >
          Our Process
        </motion.h2>
        <p className="text-gray-400 text-center mb-12 max-w-xl mx-auto">
          A proven framework that turns influence into revenue
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {steps.map(({ step, title, desc }, i) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="bg-zinc-900 border border-zinc-800 p-5 rounded-xl flex flex-col gap-2"
            >
              <span className="text-xs text-purple-500 font-mono">{step}</span>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
