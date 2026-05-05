'use client'
import { motion } from 'framer-motion'

const industries = [
  {
    label: 'D2C & Consumer Brands',
    desc: 'Beauty, personal care, fashion, F&B and home—scaling UGC, WhatsApp and influencer‑led growth while protecting ratings and reputation.',
  },
  {
    label: 'Healthcare, Pharma & Hospitals',
    desc: 'Sensitive, regulation‑aware communication for pharma, hospitals and healthtech across patient education, doctor engagement, CSR and crisis scenarios.',
  },
  {
    label: 'Schools, Colleges & Universities',
    desc: 'Admissions campaigns, reputation management and crisis playbooks for institutions that live in the public eye.',
  },
  {
    label: 'Government, Public Sector & Impact',
    desc: 'Citizen‑facing campaigns, regional influencer programs and narrative management for policy, schemes and public interest initiatives.',
  },
  {
    label: 'New‑Age & On‑Demand Services',
    desc: 'Platforms like 10‑minute home help, logistics and other on‑demand models where reviews, responsiveness and community sentiment directly impact growth.',
  },
  {
    label: 'B2B Tech & Industrial',
    desc: 'High‑credibility content, thought leadership and global communication for advanced tech sectors like drones, defence and industrial automation.',
  },
]

const reasons = [
  {
    title: 'High‑trust sectors are our default',
    desc: 'Pharma, hospitals, education, government, defence tech and at‑scale D2C—sectors where a single misstep can trigger legal, media or social fallout.',
  },
  {
    title: 'Regional & vernacular first, not as an afterthought',
    desc: 'We bake in regional creators, languages and cultural nuance because over 70% of India&rsquo;s digital audience engages mainly with regional content and vernacular creators.',
  },
  {
    title: 'Sustainability, CSR & impact with depth',
    desc: 'We align your sustainability and CSR narratives with global ESG expectations while keeping them rooted in real, local impact stories.',
  },
  {
    title: 'From tweet‑speed crises to 12‑month roadmaps',
    desc: 'We are as comfortable in a 48‑hour crisis war‑room as we are designing year‑long, multi‑country communication programs.',
  },
]

const processSteps = [
  {
    num: '01',
    title: 'Listen & map risk vs. opportunity',
    desc: 'We audit your current reputation, creator footprint, internal communication and stakeholder landscape—identifying where you&rsquo;re vulnerable and where you can win.',
  },
  {
    num: '02',
    title: 'Design the narrative & guardrails',
    desc: 'Together, we define core narratives, red lines and escalation paths for D2C buyers, patients, students, citizens, regulators and employees across India and APAC.',
  },
  {
    num: '03',
    title: 'Build creator & communication engines',
    desc: 'We assemble regional creators, memes, UGC pipelines, WhatsApp/SMS flows, web content and on‑ground touchpoints into one cohesive system rather than scattered campaigns.',
  },
  {
    num: '04',
    title: 'Monitor, optimise & protect',
    desc: 'Always‑on listening, reporting and scenario planning help us continuously improve performance while staying ready for crises, misinformation spikes or policy‑driven changes.',
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold text-center mb-4"
        >
          About Us
        </motion.h1>
        <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto text-lg leading-relaxed">
          We are a global communications and creator‑led growth agency with deep India &amp; APAC roots—helping
          brands, institutions and governments manage reputation, navigate crises, and scale content across
          languages and platforms. From sustainability and CSR storytelling to meme‑driven creator campaigns and
          always‑on crisis desks, we design narratives people trust and remember.
        </p>

        {/* Industries */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-4">Who we partner with</h2>
          <p className="text-gray-400 text-center mb-10 max-w-2xl mx-auto leading-relaxed">
            We specialise in mission‑critical communication and creator work where trust, compliance and speed
            matter as much as views.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {industries.map(({ label, desc }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl"
              >
                <h3 className="text-base font-semibold mb-2 text-white">{label}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Us */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-4">Why teams like yours call us</h2>
          <p className="text-gray-400 text-center mb-10 max-w-2xl mx-auto leading-relaxed">
            In a world where a single tweet, reel or review can move markets, you need a team that understands
            your sector, your audience and your stakes.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {reasons.map(({ title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl"
              >
                <h3 className="text-base font-semibold mb-2">{title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Process */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-4">How we work when stakes are high</h2>
          <p className="text-gray-400 text-center mb-10 max-w-2xl mx-auto leading-relaxed">
            A process designed for sensitive sectors, fast‑moving platforms and multi‑stakeholder environments.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {processSteps.map(({ num, title, desc }, i) => (
              <motion.div
                key={num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl flex flex-col gap-3"
              >
                <span className="text-xs font-mono text-purple-400 tracking-wider">{num}</span>
                <h3 className="text-base font-semibold">{title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
