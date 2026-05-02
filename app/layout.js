import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './globals.css'

export const metadata = {
  title: 'Mediaguide4u — We Engineer Influence That Converts',
  description: 'Scaling D2C, SaaS, and global brands through performance-driven influencer campaigns.',
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
