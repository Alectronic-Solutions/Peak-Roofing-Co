import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/navbar'
import { MobileActionBar } from '@/components/mobile-action-bar'
import ScrollProgressBar from '@/components/scroll-progress-bar'
import { Icon3DDefs } from '@/components/ui/icon-3d'
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

const TITLE = 'Peak Roofing Co | Springfield, IL Roofing Contractor Since 1987'
const DESCRIPTION =
  'GAF Master Elite roofer serving Springfield and Sangamon County since 1987. Roof replacement, storm damage repair, free drone inspections, and insurance claim help. 24/7 storm line.'

export const viewport: Viewport = {
  themeColor: '#04140E',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: ['Springfield IL roofer', 'roofing contractor', 'roof replacement', 'storm damage repair', 'hail damage', 'roof inspection'],
  formatDetection: { telephone: false },
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
      <body className="font-sans antialiased">
        <Icon3DDefs />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-gold-500 focus:text-forest-950 focus:font-bold focus:px-4 focus:py-2 focus:rounded-lg"
        >
          Skip to main content
        </a>
        <ScrollProgressBar />
        <Navbar />
        <main id="main-content">{children}</main>
        <MobileActionBar />
      </body>
    </html>
  )
}
