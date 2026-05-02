'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-zinc-950/90 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        <Link href="/" className="text-2xl font-bold tracking-tight">
          Mediaguide<span className="text-purple-500">4u</span>
        </Link>
        <ul className="flex gap-6 text-sm text-gray-300">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} className="hover:text-white transition-colors">
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  )
}
