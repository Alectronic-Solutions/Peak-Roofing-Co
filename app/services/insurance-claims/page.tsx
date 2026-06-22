import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/service-page-template'
import { getService } from '@/lib/services'

export const metadata: Metadata = {
  title: 'Roof Insurance Claims Assistance | 100% Approval Rate | Peak Roofing Co',
  description:
    'Let us handle your roofing insurance claim. On-staff licensed adjuster, 1,200 claims filed with 100% approval rate. No extra fee. Springfield IL.',
}

export default function InsuranceClaimsPage() {
  const service = getService('insurance-claims')!
  return <ServicePageTemplate service={service} />
}
