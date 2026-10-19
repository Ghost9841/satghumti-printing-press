import './globals.css'
import { Inter } from 'next/font/google'
import TransitionEffect from '@/components/TransitionEffect'
import { Metadata } from 'next'
import SatGhumtiPrintingPressLogo from '@/../public/SatGhumtiPrintingPressLogo.png'

const inter = Inter({ subsets: ['latin'] })

const siteUrl = 'https://satghumtipress.com.np/'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: 'Satghumti Printing Press | Professional Printing in Kathmandu',
    template: '%s | Satghumti Printing Press',
  },

  description:
    'Satghumti Printing Press provides professional printing services in Kathmandu, Nepal, including business cards, brochures, flyers, banners, posters, and custom printing solutions.',

  applicationName: 'Satghumti Printing Press',

  keywords: [
    'Satghumti Printing Press',
    'printing press in Kathmandu',
    'printing press in Bagbazar',
    'printing services Nepal',
    'commercial printing Kathmandu',
    'business card printing Nepal',
    'brochure printing Kathmandu',
    'flyer printing Nepal',
    'banner printing Kathmandu',
    'poster printing Nepal',
    'custom printing services',
  ],

  authors: [{ name: 'Satghumti Printing Press' }],
  creator: 'Satghumti Printing Press',
  publisher: 'Satghumti Printing Press',

  category: 'business',

  alternates: {
    canonical: '/',
    languages: {
      'en-NP': '/',
    },
  },

  openGraph: {
    type: 'website',
    locale: 'en_NP',
    url: '/',
    siteName: 'Satghumti Printing Press',
    title: 'Satghumti Printing Press | Professional Printing in Kathmandu',
    description:
      'Your trusted printing partner in Kathmandu, Nepal. Quality printing for businesses, events, and personal needs.',
    images: [
      {
        url: '/SatGhumtiPrintingPressLogo.png',
        width: 1200,
        height: 630,
        alt: 'Satghumti Printing Press - Professional Printing Services',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Satghumti Printing Press | Professional Printing in Kathmandu',
    description:
      'Professional printing services in Kathmandu, Nepal. Quality prints for every business and occasion.',
    images: ['/SatGhumtiPrintingPressLogo.png'],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },

  icons: {
    icon: [
      { url: SatGhumtiPrintingPressLogo.src, type: 'image/png' },
    ],
    apple: '/apple-icon.png',
  },

  manifest: '/manifest.webmanifest',

  referrer: 'origin-when-cross-origin',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-NP">
      <head>
        <meta name="google-site-verification" content="oWDb_xFTLRcdr7zYgeMhGD2IcsOgXfKhzD6oGRdwzPk" />
      </head>
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen bg-white text-black">
          <main className="grow">{children}</main>
        </div>
      </body>
    </html>
  )
}