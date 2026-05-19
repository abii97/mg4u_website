'use client'
import Link from 'next/link'
import { BlurFade } from '@/components/ui/blur-fade'

const IconShield = () => (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>)
const IconSpark = () => (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L4.093 12.688c-.348.418-.523.627-.48.808.034.159.145.29.302.352.185.073.474.003 1.052-.138L11 12l-3.5 7.5"/><path d="M13 2l2.5 10.5L11 12l2.5-5.5"/></svg>)
const IconChat = () => (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/><path d="M8 9h8M8 13h4"/></svg>)
const IconPin = () => (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>)

const pillars = [
  { num: '01', icon: <IconShield />, color: '#0F75BC', title: 'Reputation, Crisis & Sustainability Communication', items: [
    { heading: 'Crisis desks & reputation management', desc: 'Real-time listening, rapid issue response and narrative repair across LinkedIn, X, Instagram, review sites and search—built for brands, institutions and public figures that can\'t afford missteps.' },
    { heading: 'Sustainability & CSR storytelling', desc: 'We turn CSR and ESG work into authentic stories—films, reports, campaigns and creator collaborations—that stand up to stakeholder scrutiny and resonate with communities.' },
    { heading: 'Search-result & knowledge authority', desc: 'Strategic content, profiles and knowledge-panel-friendly assets that improve what appears when someone searches your brand or leadership.' },
  ]},
  { num: '02', icon: <IconSpark />, color: '#F7941D', title: 'Creator & Meme-Led Campaigns', items: [
    { heading: 'Influencer & regional creator programs', desc: 'Full-funnel campaigns using national and regional creators across India and APAC, with vernacular storytelling that drives real action—not just impressions.' },
    { heading: 'UGC and content at scale (1000+ videos)', desc: 'Structured pipelines for scripting, producing and quality-controlling hundreds of short-form videos for launches, D2C funnels, apps and citizen initiatives.' },
    { heading: 'Meme marketing & content seeding', desc: 'Culture-aware meme narratives, comment seeding and community conversations that place your message organically in the timelines and comment sections that matter.' },
    { heading: 'Hashtag & moment amplification', desc: 'Planned trend-hijacks and hashtag pushes around key moments—product drops, announcements, events and campaigns.' },
  ]},
  { num: '03', icon: <IconChat />, color: '#7C3AED', title: 'WhatsApp, SMS & Full-Stack Communication', items: [
    { heading: 'WhatsApp & SMS marketing', desc: 'Flows for D2C, institutions and services—from cart recovery and admission journeys to appointment reminders and crisis updates—leveraging WhatsApp\'s 90%+ open rates in India and APAC.' },
    { heading: 'Community, email & stakeholder communication', desc: 'Integrated calendars for parents, patients, students, employees and investors so each group gets the right information, in the right tone, on the right channel.' },
  ]},
  { num: '04', icon: <IconPin />, color: '#00D4FF', title: 'On-Ground, Events & Digital Foundations', items: [
    { heading: 'On-ground activations & events', desc: 'Bloggers\' meets, creator summits, campus activations and hospital/community events that tie seamlessly into your digital, PR and CSR narratives.' },
    { heading: 'Websites & content for high-trust sectors', desc: 'Content writing, UX and HubSpot-based builds for corporate, product and CSR sites—engineered for clarity, compliance and conversion across India, APAC and global audiences.' },
  ]},
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-surface-deepest py-section-y px-6">
      <div className="max-w-7xl mx-auto">
        <BlurFade delay={0.1}>
          <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-white tracking-tight">What we do</h1>
        </BlurFade>
        <BlurFade delay={0.2}>
          <p className="text-text-secondary text-center mb-16 max-w-2xl mx-auto text-lg leading-relaxed">
            Four pillars designed for a world where a tweet, reel or review can move markets.
            We specialise in mission-critical communication and creator work where trust, compliance and speed matter as much as views.
          </p>
        </BlurFade>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {pillars.map(({ num, icon, title, items, color }, i) => (
            <BlurFade key={num} delay={0.15 + i * 0.1}>
              <div className="group bg-surface-elevated/30 border border-white/[0.06] rounded-xl p-6 lg:p-8 hover:border-white/[0.12] transition-all duration-base">
                <div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-base pointer-events-none"
                  style={{ background: `radial-gradient(400px circle at 0% 0%, ${color}08, transparent 50%)` }}
                />
                <div className="flex items-center gap-3 mb-5 relative z-10">
                  <span style={{ color }} className="shrink-0">{icon}</span>
                  <span className="text-xs font-mono tracking-wider font-semibold" style={{ color }}>{num}</span>
                  <h3 className="text-xl font-bold text-white">{title}</h3>
                </div>
                <ul className="space-y-5 relative z-10">
                  {items.map(({ heading, desc }) => (
                    <li key={heading}>
                      <h4 className="text-sm font-semibold text-white mb-1">{heading}</h4>
                      <p className="text-sm text-text-secondary leading-relaxed">{desc}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </div>
  )
}
