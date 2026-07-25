import type { Metadata } from 'next'
import FaqPageClient from '@/components/faq-page-client'
import LocalSeoSchema from '@/components/local-seo-schema'

export const metadata: Metadata = {
  title: 'FAQ | Peak Roofing Co | Roofing, Storm & Financing Questions Answered',
  description:
    'Answers on licensing, storm and insurance claims, financing terms, the installation process, and warranties from Peak Roofing Co.',
  alternates: { canonical: '/faq/' },
}

export default function FaqPage() {
  return (
    <>
      <LocalSeoSchema pageType="home" />
      <FaqPageClient />
    </>
  )
}
