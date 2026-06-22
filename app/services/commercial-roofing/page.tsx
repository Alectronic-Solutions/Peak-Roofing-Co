import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/service-page-template'
import { getService } from '@/lib/services'

export const metadata: Metadata = {
  title: 'Commercial Roofing Springfield IL | TPO, EPDM, Flat Roofs | Peak Roofing Co',
  description:
    'Commercial and flat roof installation in Springfield IL. TPO, EPDM, modified bitumen systems. Preventive maintenance contracts. OSHA-certified crews.',
}

export default function CommercialRoofingPage() {
  const service = getService('commercial-roofing')!
  return <ServicePageTemplate service={service} />
}
