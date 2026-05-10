import Link from 'next/link'
import Image from 'next/image'

const FOOTER_LINKS = [
  { href: '/services', label: 'Services' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="bg-surface-deepest border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/Mediaguide4u_Logo.png"
                alt="Mediaguide4u"
                width={160}
                height={75}
                style={{ height: 'auto' }}
              />
            </Link>
            <p className="text-sm text-text-muted leading-relaxed max-w-xs">
              We engineer influence that converts. Reputation, creators, and communication for a world where one post can move markets.
            </p>
          </div>

          <div>
            <h4 className="text-xs text-text-muted uppercase tracking-[0.2em] font-semibold mb-5">Pages</h4>
            <ul className="flex flex-col gap-3">
              {FOOTER_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-text-secondary hover:text-white transition-colors duration-fast">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs text-text-muted uppercase tracking-[0.2em] font-semibold mb-5">Connect</h4>
            <ul className="flex flex-col gap-3 text-sm text-text-secondary">
              <li>
                <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer" className="hover:text-brand-orange transition-colors duration-fast">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="mailto:hello@mediaguide4u.com" className="hover:text-white transition-colors duration-fast">
                  hello@mediaguide4u.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted">
            &copy; {new Date().getFullYear()} Mediaguide4u. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-text-muted">
            <a href="#" className="hover:text-white transition-colors duration-fast">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors duration-fast">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
