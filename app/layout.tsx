import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/navbar'
import EmergencyBar from '@/components/emergency-bar'
import ScrollProgressBar from '@/components/scroll-progress-bar'
import { SITE_URL, BASE_PATH } from '@/lib/company'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const TITLE = 'Peak Roofing Co | Expert Roofing Since 1987'
const DESCRIPTION =
  'Licensed roofing contractors serving the region. Storm damage, replacements, inspections. 24/7 emergency line.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: ['roofing contractor', 'roof replacement', 'storm damage', 'roof repair'],
  alternates: { canonical: '/' },
  icons: {
    icon: `${BASE_PATH}/favicon.svg`,
  },
  openGraph: {
    type: 'website',
    siteName: 'Peak Roofing Co',
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: '/og-default.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: ['/og-default.jpg'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://i.pravatar.cc" crossOrigin="" />
      </head>
      <body className="font-sans antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-gold-500 focus:text-forest-950 focus:font-bold focus:px-4 focus:py-2 focus:rounded-lg"
        >
          Skip to main content
        </a>
        <ScrollProgressBar />
        <Navbar />
        <main id="main-content">{children}</main>
        <EmergencyBar />
      </body>
    </html>
  )
}
