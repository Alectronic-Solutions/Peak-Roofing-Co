import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/service-page-template'
import { getService } from '@/lib/services'

export const metadata: Metadata = {
  title: 'Roof Financing | From 6.9% APR | No Credit Impact | Peak Roofing Co',
  description:
    'Flexible roof financing in Springfield IL. Check your rate in 60 seconds. No credit impact. From 6.9% APR. Same-day approval. 12 lenders.',
}

export default function FinancingServicePage() {
  const service = getService('financing')!
  return <ServicePageTemplate service={service} />
}
