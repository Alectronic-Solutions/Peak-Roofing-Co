import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/service-page-template'
import { getService } from '@/lib/services'

export const metadata: Metadata = {
  title: 'Roof Replacement Springfield IL | GAF Master Elite | Peak Roofing Co',
  description:
    'Full roof replacement in Springfield IL. GAF Timberline shingles, 30-year warranty, drone post-install inspection. From $4.50/sq ft. Free estimate.',
}

export default function RoofReplacementPage() {
  const service = getService('roof-replacement')!
  return <ServicePageTemplate service={service} />
}
