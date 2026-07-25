import type { Metadata } from 'next'
import GalleryPageClient from '@/components/gallery-page-client'
import LocalSeoSchema from '@/components/local-seo-schema'

export const metadata: Metadata = {
  title: 'Project Gallery | Before & After Roofing Photos | Peak Roofing Co',
  description:
    'Browse before-and-after photos of completed roof replacements, storm repairs, and commercial roofing projects by Peak Roofing Co.',
  alternates: { canonical: '/gallery/' },
}

export default function GalleryPage() {
  return (
    <>
      <LocalSeoSchema pageType="home" />
      <GalleryPageClient />
    </>
  )
}
