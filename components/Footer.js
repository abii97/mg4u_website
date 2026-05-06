import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-surface-dark text-text-inverse py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-3">
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src="/logo-bw.png"
              alt="Mediaguide4u"
              width={32}
              height={32}
              className="opacity-90"
            />
            <span className="text-lg font-bold tracking-tight">
              Mediaguide<span className="text-primary">4u</span>
            </span>
          </Link>
          <p className="text-sm text-white/50">
            &copy; {new Date().getFullYear()} Mediaguide4u. All rights reserved.
          </p>
        </div>
        <div className="flex gap-6 text-sm text-white/60">
          <Link href="/services" className="hover:text-white transition-colors duration-fast">Services</Link>
          <Link href="/case-studies" className="hover:text-white transition-colors duration-fast">Case Studies</Link>
          <Link href="/about" className="hover:text-white transition-colors duration-fast">About</Link>
          <Link href="/contact" className="hover:text-white transition-colors duration-fast">Contact</Link>
        </div>
      </div>
    </footer>
  )
}
