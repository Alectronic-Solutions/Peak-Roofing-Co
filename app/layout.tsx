import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/navbar'
import LocalSeoSchema from '@/components/local-seo-schema'
import EmergencyBar from '@/components/emergency-bar'
import ScrollProgressBar from '@/components/scroll-progress-bar'

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

export const metadata: Metadata = {
  title: 'Peak Roofing Co | Expert Roofing Since 1987',
  description:
    'Licensed roofing contractors serving the region. Storm damage, replacements, inspections. 24/7 emergency line.',
  keywords: ['roofing contractor', 'roof replacement', 'storm damage', 'roof repair'],
  icons: {
    icon: '/Peak-Roofing-Co/favicon.svg',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased">
        <LocalSeoSchema pageType="home" />
        <ScrollProgressBar />
        <Navbar />
        {children}
        <EmergencyBar />
      </body>
    </html>
  )
}
