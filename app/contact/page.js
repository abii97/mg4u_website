'use client'
import { useState } from 'react'
import { BlurFade } from '@/components/ui/blur-fade'
import { Button } from '@/components/ui/button'

const IconCheck = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
    <polyline points="22 4 12 14.01 9 11.01"/>
  </svg>
)

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen py-section-y px-6 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full bg-primary/[0.03] blur-3xl" />
        <div className="absolute -top-20 -right-20 w-[350px] h-[350px] rounded-full bg-primary/[0.02] blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <BlurFade delay={0.1}>
          <h1 className="text-4xl font-bold text-center mb-4 text-text-primary">Let&apos;s Build Together</h1>
        </BlurFade>
        <BlurFade delay={0.2}>
          <p className="text-text-secondary text-center mb-16 max-w-xl mx-auto">
            Tell us about your brand and goals. We&apos;ll craft a campaign plan that converts.
          </p>
        </BlurFade>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <BlurFade delay={0.3}>
            <div>
              {submitted ? (
                <div className="bg-surface-alt border border-primary/30 rounded-md p-10 text-center shadow-1">
                  <div className="text-primary mb-4 flex justify-center"><IconCheck /></div>
                  <p className="text-2xl font-semibold mb-2 text-text-primary">Thank you!</p>
                  <p className="text-text-secondary">We&apos;ll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm text-text-secondary mb-1 font-medium">Full Name</label>
                    <input id="name" type="text" required className="w-full bg-surface-base border border-gray-200 rounded-md px-4 py-3 text-text-primary focus:outline-none focus:border-primary transition-colors duration-fast" placeholder="John Doe" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm text-text-secondary mb-1 font-medium">Email</label>
                    <input id="email" type="email" required className="w-full bg-surface-base border border-gray-200 rounded-md px-4 py-3 text-text-primary focus:outline-none focus:border-primary transition-colors duration-fast" placeholder="john@company.com" />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm text-text-secondary mb-1 font-medium">Company</label>
                    <input id="company" type="text" className="w-full bg-surface-base border border-gray-200 rounded-md px-4 py-3 text-text-primary focus:outline-none focus:border-primary transition-colors duration-fast" placeholder="Your Company" />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm text-text-secondary mb-1 font-medium">What are you looking for?</label>
                    <select id="service" className="w-full bg-surface-base border border-gray-200 rounded-md px-4 py-3 text-text-primary focus:outline-none focus:border-primary transition-colors duration-fast">
                      <option>Influencer Marketing</option><option>UGC Content</option><option>Paid Ads</option><option>Social Media Management</option><option>Branding</option><option>Crisis Management</option><option>Twitter Trending</option><option>Social Media Amplification</option><option>Content Management</option><option>Multiple Services</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm text-text-secondary mb-1 font-medium">Message</label>
                    <textarea id="message" rows={4} className="w-full bg-surface-base border border-gray-200 rounded-md px-4 py-3 text-text-primary focus:outline-none focus:border-primary transition-colors duration-fast resize-none" placeholder="Tell us about your goals..." />
                  </div>
                  <Button type="submit" variant="default" className="w-full py-3 h-auto font-semibold text-base">
                    Send Message
                  </Button>
                </form>
              )}
            </div>
          </BlurFade>

          <BlurFade delay={0.4}>
            <div className="flex flex-col justify-center gap-8">
              <div className="bg-surface-alt border border-gray-100 rounded-md p-8 shadow-1">
                <h3 className="text-xl font-semibold mb-4 text-text-primary">Prefer WhatsApp?</h3>
                <p className="text-text-secondary mb-6 text-sm leading-relaxed">
                  Skip the form and message us directly. We typically respond within 2 hours during business hours.
                </p>
                <a href="https://wa.me/919XXXXXXXXX" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md font-semibold transition-colors duration-fast">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                  Chat on WhatsApp
                </a>
              </div>
              <div className="bg-surface-alt border border-gray-100 rounded-md p-8 shadow-1">
                <h3 className="text-xl font-semibold mb-2 text-text-primary">Email Us</h3>
                <a href="mailto:hello@mediaguide4u.com" className="text-primary hover:text-primary-hover transition-colors duration-fast inline-block py-1">
                  hello@mediaguide4u.com
                </a>
              </div>
            </div>
          </BlurFade>
        </div>
      </div>
    </div>
  )
}
