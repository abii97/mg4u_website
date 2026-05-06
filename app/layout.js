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
    <html lang="en">
      <body className="bg-surface-base text-text-primary min-h-screen antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
