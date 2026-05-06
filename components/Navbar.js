'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  const links = [
    { href: '/services', label: 'Services' },
    { href: '/case-studies', label: 'Case Studies' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`sticky top-0 z-50 transition-all duration-base ${
        scrolled ? 'bg-surface-base/95 backdrop-blur-sm shadow-1' : 'bg-surface-base'
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        <Link href="/" className="flex items-center gap-2.5 group">
          <Image
            src="/logo.png"
            alt="Mediaguide4u"
            width={36}
            height={36}
            priority
            className="transition-opacity duration-fast"
          />
          <span className="text-xl font-bold tracking-tight text-text-primary">
            Mediaguide<span className="text-primary">4u</span>
          </span>
        </Link>

        <ul className="hidden md:flex gap-6 text-sm text-text-secondary">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} className="hover:text-primary transition-colors duration-fast">
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className="hidden md:inline-flex bg-primary text-text-inverse px-5 py-2.5 rounded-md font-semibold text-sm hover:bg-primary-hover transition-colors duration-fast"
        >
          Get Started
        </Link>

        <button
          className="md:hidden p-2 text-text-primary"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12" /></svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6h16M4 12h16M4 18h16" /></svg>
          )}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-surface-base border-t border-gray-200 px-6 py-4 flex flex-col gap-3">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="text-text-secondary hover:text-primary transition-colors text-base py-2"
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="bg-primary text-text-inverse px-5 py-2.5 rounded-md font-semibold text-sm text-center hover:bg-primary-hover transition-colors"
          >
            Get Started
          </Link>
        </div>
      )}
    </motion.nav>
  )
}
