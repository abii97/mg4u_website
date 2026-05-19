'use client'
import Image from 'next/image'
import Link from 'next/link'
import { BlurFade } from '@/components/ui/blur-fade'

const logos = [
  { name: 'ideaForge', src: '/logos/ideaforge.svg' },
  { name: 'Emcure', src: '/logos/emcure.svg' },
  { name: 'Kaya', src: '/logos/kaya.svg' },
  { name: 'Just Herbs', src: '/logos/just-herbs.svg' },
]

const stats = [
  { value: '100+', label: 'Campaigns delivered' },
  { value: '12+', label: 'Languages & regions' },
  { value: '50+', label: 'Creator partnerships' },
  { value: '90%', label: 'Client retention' },
]

export default function TrustedBySection() {
  return (
    <section className="relative bg-surface-deepest py-section-y px-6" id="trust">
      <div className="max-w-7xl mx-auto">
        <BlurFade delay={0.1}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-5 text-white tracking-tight">
              Trusted where there&rsquo;s{' '}
              <span className="text-gradient font-extrabold">no room for error.</span>
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
              Organisations that carry public trust, regulatory scrutiny and community
              expectations — alongside ambitious brands rewriting their categories.
            </p>
          </div>
        </BlurFade>

        <BlurFade delay={0.2}>
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16 mb-16">
            {logos.map(({ name, src }) => (
              <div
                key={name}
                className="group grayscale opacity-20 hover:opacity-60 hover:grayscale-0 transition-all duration-base brightness-0 invert"
              >
                <Image
                  src={src}
                  alt={name}
                  width={140}
                  height={36}
                  style={{ objectFit: 'contain', height: 32 }}
                />
              </div>
            ))}
          </div>
        </BlurFade>

        <BlurFade delay={0.35}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {stats.map(({ value, label }, i) => (
              <div key={label} className="text-center p-6 rounded-xl border border-white/[0.06] bg-surface-elevated/30">
                <div className="text-3xl md:text-4xl font-extrabold text-brand-blue mb-1">{value}</div>
                <div className="text-xs text-text-muted uppercase tracking-wider">{label}</div>
              </div>
            ))}
          </div>
        </BlurFade>

        <BlurFade delay={0.45}>
          <p className="text-center text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed italic">
            &ldquo;If your work is too important to be reduced to just another campaign, we should talk.&rdquo;
          </p>
        </BlurFade>
      </div>
    </section>
  )
}
