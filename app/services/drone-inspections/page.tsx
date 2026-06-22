import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/service-page-template'
import { getService } from '@/lib/services'

export const metadata: Metadata = {
  title: 'Drone Roof Inspections Springfield IL | FAA Certified | Peak Roofing Co',
  description:
    'FAA Part 107 certified drone roof inspections in Springfield IL. Full 4K report in 24 hours. Free with estimate. Standalone: $149.',
}

export default function DroneInspectionsPage() {
  const service = getService('drone-inspections')!
  return <ServicePageTemplate service={service} />
}
