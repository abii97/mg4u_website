import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './globals.css'

export const metadata = {
  title: 'Mediaguide4u — Reputation, Creators & Communication Agency',
  description: 'Global communications and creator-led growth agency helping brands, institutions and governments manage reputation, navigate crises, and scale content across languages, platforms and cities.',
  icons: { icon: '/favicon.png' },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-surface-deepest text-white min-h-screen antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:px-4 focus:py-3 focus:bg-brand-orange focus:text-white focus:rounded-xl focus:font-semibold focus:text-sm"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
