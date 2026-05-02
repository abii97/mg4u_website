import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Mediaguide4u. All rights reserved.
        </p>
        <div className="flex gap-6 text-sm text-gray-500">
          <Link href="/services" className="hover:text-white transition-colors">Services</Link>
          <Link href="/case-studies" className="hover:text-white transition-colors">Case Studies</Link>
          <Link href="/about" className="hover:text-white transition-colors">About</Link>
          <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
        </div>
      </div>
    </footer>
  )
}
