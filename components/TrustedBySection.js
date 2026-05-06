'use client'
import Image from 'next/image'
import { BlurFade } from '@/components/ui/blur-fade'

const logos = [
  { name: 'ideaForge', src: '/logos/ideaforge.svg' },
  { name: 'Emcure', src: '/logos/emcure.svg' },
  { name: 'Kaya', src: '/logos/kaya.svg' },
  { name: 'Just Herbs', src: '/logos/just-herbs.svg' },
]

export default function TrustedBySection() {
  return (
    <section className="bg-surface-base py-section-y px-6">
      <div className="max-w-6xl mx-auto">
        <BlurFade delay={0.1}>
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold mb-4 text-text-primary">Trusted where there&rsquo;s no room for error</h2>
            <p className="text-text-secondary max-w-2xl mx-auto leading-relaxed">
              We work with organisations that carry public trust, regulatory scrutiny and community
              expectations—alongside ambitious new-age brands rewriting their categories.
            </p>
          </div>
        </BlurFade>

        <BlurFade delay={0.2}>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 mb-16">
            {logos.map(({ name, src }, i) => (
              <div
                key={name}
                className="grayscale opacity-40 hover:opacity-70 hover:grayscale-0 transition-all duration-base"
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

        <BlurFade delay={0.4}>
          <p className="text-center text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed italic">
            If your work is too important to be reduced to &ldquo;just another campaign&rdquo;, we should talk.
          </p>
        </BlurFade>
      </div>
    </section>
  )
}
