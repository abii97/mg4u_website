import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './globals.css'

export const metadata = {
  title: 'Reputation, Creators & Communication Agency — India & APAC',
  description: 'Global communications and creator-led growth agency helping brands, institutions and governments manage reputation, navigate crises, and scale content across languages, platforms and cities.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-zinc-950 text-white min-h-screen antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
