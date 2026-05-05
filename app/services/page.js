'use client'
import { motion } from 'framer-motion'

const pillars = [
  {
    num: '01',
    title: 'Reputation, Crisis & Sustainability Communication',
    items: [
      {
        heading: 'Crisis desks & reputation management',
        desc: 'Real‑time listening, rapid issue response and narrative repair across LinkedIn, X, Instagram, review sites and search—built for brands, institutions and public figures that can&rsquo;t afford missteps.',
      },
      {
        heading: 'Sustainability & CSR storytelling',
        desc: 'We turn CSR and ESG work into authentic stories—films, reports, campaigns and creator collaborations—that stand up to stakeholder scrutiny and resonate with communities.',
      },
      {
        heading: 'Search‑result & knowledge authority',
        desc: 'Strategic content, profiles and knowledge‑panel‑friendly assets that improve what appears when someone searches your brand or leadership, including discreet support around encyclopaedic and high‑authority web properties.',
      },
    ],
  },
  {
    num: '02',
    title: 'Creator & Meme‑Led Campaigns',
    items: [
      {
        heading: 'Influencer & regional creator programs',
        desc: 'Full‑funnel campaigns using national and regional creators across India and APAC, with vernacular storytelling that drives real action—not just impressions.',
      },
      {
        heading: 'UGC and content at scale (1000+ videos)',
        desc: 'Structured pipelines for scripting, producing and quality‑controlling hundreds of short‑form videos for launches, D2C funnels, apps and citizen initiatives.',
      },
      {
        heading: 'Meme marketing & content seeding',
        desc: 'Culture‑aware meme narratives, comment seeding and community conversations that place your message organically in the timelines and comment sections that matter.',
      },
      {
        heading: 'Hashtag & moment amplification',
        desc: 'Planned trend‑hijacks and hashtag pushes around key moments—product drops, announcements, events and campaigns—stacked on top of solid, always‑on communication.',
      },
    ],
  },
  {
    num: '03',
    title: 'WhatsApp, SMS & Full‑Stack Communication',
    items: [
      {
        heading: 'WhatsApp & SMS marketing',
        desc: 'Flows for D2C, institutions and services—from cart recovery and admission journeys to appointment reminders and crisis updates—leveraging WhatsApp&rsquo;s 90%+ open rates in India and APAC.',
      },
      {
        heading: 'Community, email & stakeholder communication',
        desc: 'Integrated calendars for parents, patients, students, employees and investors so each group gets the right information, in the right tone, on the right channel.',
      },
    ],
  },
  {
    num: '04',
    title: 'On‑Ground, Events & Digital Foundations',
    items: [
      {
        heading: 'On‑ground activations & events',
        desc: 'Bloggers&rsquo; meets, creator summits, campus activations and hospital/community events that tie seamlessly into your digital, PR and CSR narratives.',
      },
      {
        heading: 'Websites & content for high‑trust sectors',
        desc: 'Content writing, UX and HubSpot‑based builds for corporate, product and CSR sites—engineered for clarity, compliance and conversion across India, APAC and global audiences.',
      },
    ],
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen py-section-y px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-4 text-text-primary"
        >
          Our Services
        </motion.h1>
        <p className="text-text-secondary text-center mb-16 max-w-2xl mx-auto text-lg leading-relaxed">
          Four pillars designed for a world where a tweet, reel or review can move markets.
          We specialise in mission‑critical communication and creator work where trust, compliance and speed matter as much as views.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {pillars.map(({ num, title, items }, i) => (
            <motion.div
              key={num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-surface-alt border border-gray-100 rounded-md p-6 lg:p-8 shadow-1"
            >
              <span className="text-xs font-mono text-primary tracking-wider font-semibold">{num}</span>
              <h3 className="text-xl font-bold mt-2 mb-5 text-text-primary">{title}</h3>
              <ul className="space-y-5">
                {items.map(({ heading, desc }) => (
                  <li key={heading}>
                    <h4 className="text-sm font-semibold text-text-primary mb-1">{heading}</h4>
                    <p className="text-sm text-text-secondary leading-relaxed">{desc}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
