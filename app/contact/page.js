'use client'
import { useState } from 'react'
import Link from 'next/link'
import { BlurFade } from '@/components/ui/blur-fade'

const IconCheck = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
    <polyline points="22 4 12 14.01 9 11.01"/>
  </svg>
)

const IconSpinner = () => (
  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
  </svg>
)

const SERVICES = [
  'Influencer Marketing',
  'UGC Content',
  'Paid Ads',
  'Social Media Management',
  'Branding',
  'Crisis Management',
  'Twitter Trending',
  'Social Media Amplification',
  'Content Management',
  'Multiple Services',
]

const initialErrors = { name: '', email: '', message: '' }

function validate(form) {
  const errors = { name: '', email: '', message: '' }
  if (!form.name.trim()) errors.name = 'Name is required'
  if (!form.email.trim()) {
    errors.email = 'Email is required'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Enter a valid email address'
  }
  return errors
}

const inputClasses =
  'w-full bg-surface-elevated/30 border rounded-xl px-4 py-3 text-white placeholder:text-text-muted focus:outline-none focus:border-brand-blue/50 transition-colors duration-fast'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', company: '', service: SERVICES[0], message: '' })
  const [errors, setErrors] = useState(initialErrors)
  const [touched, setTouched] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [serverError, setServerError] = useState('')

  const handleChange = (e) => {
    const { id, value } = e.target
    setForm((prev) => ({ ...prev, [id]: value }))
    if (touched[id]) {
      setErrors((prev) => ({ ...prev, [id]: '' }))
    }
  }

  const handleBlur = (e) => {
    const { id } = e.target
    setTouched((prev) => ({ ...prev, [id]: true }))
    const current = validate(form)
    if (current[id]) {
      setErrors((prev) => ({ ...prev, [id]: current[id] }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setServerError('')
    const validation = validate(form)
    const hasErrors = Object.values(validation).some(Boolean)
    setErrors(validation)
    setTouched({ name: true, email: true })

    if (hasErrors) return

    setLoading(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setSubmitted(true)
    } catch {
      setServerError('Something went wrong. Please try again or email us directly.')
    } finally {
      setLoading(false)
    }
  }

  const errorBorder = (field) =>
    errors[field] && touched[field] ? 'border-red-500/50' : 'border-white/[0.08]'

  return (
    <div className="min-h-screen bg-surface-deepest py-section-y px-6 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-brand-blue/5 blur-[80px]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <BlurFade delay={0.1}>
          <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-white tracking-tight">Let&apos;s Build Together</h1>
        </BlurFade>
        <BlurFade delay={0.2}>
          <p className="text-text-secondary text-center mb-16 max-w-xl mx-auto text-lg leading-relaxed">
            Tell us about your brand and goals. We&apos;ll craft a campaign plan that converts.
          </p>
        </BlurFade>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <BlurFade delay={0.3}>
            <div>
              {submitted ? (
                <div className="glass rounded-xl p-10 text-center">
                  <div className="text-brand-blue mb-4 flex justify-center"><IconCheck /></div>
                  <p className="text-2xl font-semibold mb-2 text-white">Thank you!</p>
                  <p className="text-text-secondary">We&apos;ll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {serverError && (
                    <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-sm text-red-400">
                      {serverError}
                    </div>
                  )}

                  <div>
                    <label htmlFor="name" className="block text-sm text-text-secondary mb-1.5 font-medium">
                      Full Name <span className="text-brand-orange">*</span>
                    </label>
                    <input
                      id="name" type="text" required value={form.name}
                      onChange={handleChange} onBlur={handleBlur}
                      className={`${inputClasses} ${errorBorder('name')}`}
                      placeholder="John Doe"
                      aria-invalid={!!(errors.name && touched.name)}
                      aria-describedby={errors.name && touched.name ? 'name-error' : undefined}
                    />
                    {errors.name && touched.name && (
                      <p id="name-error" className="mt-1.5 text-xs text-red-400">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm text-text-secondary mb-1.5 font-medium">
                      Email <span className="text-brand-orange">*</span>
                    </label>
                    <input
                      id="email" type="email" required value={form.email}
                      onChange={handleChange} onBlur={handleBlur}
                      className={`${inputClasses} ${errorBorder('email')}`}
                      placeholder="john@company.com"
                      aria-invalid={!!(errors.email && touched.email)}
                      aria-describedby={errors.email && touched.email ? 'email-error' : undefined}
                    />
                    {errors.email && touched.email && (
                      <p id="email-error" className="mt-1.5 text-xs text-red-400">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm text-text-secondary mb-1.5 font-medium">Company</label>
                    <input
                      id="company" type="text" value={form.company}
                      onChange={handleChange}
                      className={`${inputClasses} border-white/[0.08]`}
                      placeholder="Your Company"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm text-text-secondary mb-1.5 font-medium">What are you looking for?</label>
                    <select
                      id="service" value={form.service}
                      onChange={handleChange}
                      className={inputClasses + ' border-white/[0.08]'}
                    >
                      {SERVICES.map((s) => (
                        <option key={s} className="bg-surface-deepest" value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm text-text-secondary mb-1.5 font-medium">Message</label>
                    <textarea
                      id="message" rows={4} value={form.message}
                      onChange={handleChange}
                      className={`${inputClasses} border-white/[0.08] resize-none`}
                      placeholder="Tell us about your goals..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 text-base font-semibold text-white rounded-xl shadow-glow-orange transition-shadow duration-base hover:shadow-glow-lg disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    style={{ background: 'var(--gradient-brand)' }}
                  >
                    {loading ? <><IconSpinner />Sending...</> : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </BlurFade>

          <BlurFade delay={0.4}>
            <div className="flex flex-col justify-center gap-6">
              <div className="glass rounded-xl p-8">
                <h3 className="text-xl font-bold mb-3 text-white">Prefer WhatsApp?</h3>
                <p className="text-text-secondary mb-6 text-sm leading-relaxed">
                  Skip the form and message us directly. We typically respond within 2 hours during business hours.
                </p>
                <a
                  href="https://wa.me/919XXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-xl transition-shadow duration-base hover:shadow-glow-orange"
                  style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)' }}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                  Chat on WhatsApp
                </a>
              </div>
              <div className="glass rounded-xl p-8">
                <h3 className="text-xl font-bold mb-2 text-white">Email Us</h3>
                <a href="mailto:hello@mediaguide4u.com" className="text-brand-orange hover:text-[#e08515] transition-colors duration-fast font-medium">
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
