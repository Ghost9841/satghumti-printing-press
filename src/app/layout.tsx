import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/NavBar'
import Footer from '@/components/Footer'
import TransitionEffect from '@/components/TransitionEffect'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Satghumti Printing Press',
  description: 'Professional printing services in Kathmandu, Nepal',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TransitionEffect/>
        <div className="flex flex-col min-h-screen bg-white text-black">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}