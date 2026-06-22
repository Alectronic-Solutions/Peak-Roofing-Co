import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/service-page-template'
import { getService } from '@/lib/services'

export const metadata: Metadata = {
  title: 'Storm Damage Roof Repair Springfield IL | Free Drone Inspection | Peak Roofing Co',
  description:
    'Hail or wind damage? Free drone inspection within 2 hours. We handle your insurance claim start to finish. $0 average out-of-pocket. Call (555) 555-0100.',
}

export default function StormDamageServicePage() {
  const service = getService('storm-damage')!
  return <ServicePageTemplate service={service} />
}
