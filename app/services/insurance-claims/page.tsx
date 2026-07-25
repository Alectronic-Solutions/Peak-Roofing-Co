import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/service-page-template'
import { getService } from '@/lib/services'

export const metadata: Metadata = {
  title: 'Roof Insurance Claims Assistance | Licensed Adjuster On Staff | Peak Roofing Co',
  description:
    'Let us handle your roofing insurance claim. On-staff licensed adjuster, 1,200+ claims filed. No extra fee. Springfield IL.',
  alternates: { canonical: '/services/insurance-claims/' },
}

export default function InsuranceClaimsPage() {
  const service = getService('insurance-claims')!
  return <ServicePageTemplate service={service} />
}
