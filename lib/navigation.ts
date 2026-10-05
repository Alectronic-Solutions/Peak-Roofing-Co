import type { IconName } from '@/components/ui/icon-3d'
import { CITIES } from './cities'

export type NavItem = {
  label: string
  href: string
  description?: string
  icon?: IconName
}

export type NavMenu = {
  label: string
  href: string
  layout: 'services' | 'list' | 'areas'
  items: NavItem[]
}

export const SERVICE_NAV: NavItem[] = [
  { label: 'Roof Replacement', href: '/services/roof-replacement/', description: 'Full tear-off & GAF install, usually in one day', icon: 'house' },
  { label: 'Storm Damage Repair', href: '/services/storm-damage/', description: 'Hail & wind repair with same-day tarping', icon: 'storm' },
  { label: 'Drone Inspections', href: '/services/drone-inspections/', description: '4K roof report in 24 hours, free with estimate', icon: 'drone' },
  { label: 'Insurance Claims', href: '/services/insurance-claims/', description: 'On-staff adjuster files and negotiates for you', icon: 'shield' },
  { label: 'Commercial Roofing', href: '/services/commercial-roofing/', description: 'TPO, EPDM & flat-roof systems', icon: 'building' },
  { label: 'Financing', href: '/services/financing/', description: 'From 6.9% APR, no credit impact to check', icon: 'card' },
]

export const NAV_MENUS: NavMenu[] = [
  { label: 'Services', href: '/services/', layout: 'services', items: SERVICE_NAV },
  {
    label: 'Our Work',
    href: '/gallery/',
    layout: 'list',
    items: [
      { label: 'Project Gallery', href: '/gallery/', description: 'Recent jobs, filterable by type', icon: 'images' },
      { label: 'Before & After', href: '/#gallery', description: 'Worn roofs next to what we install', icon: 'compare' },
      { label: 'Customer Reviews', href: '/#reviews', description: '4.9 stars across 847 reviews', icon: 'star' },
    ],
  },
  {
    label: 'Service Areas',
    href: '/service-areas/',
    layout: 'areas',
    items: CITIES.map((city) => ({
      label: city.name,
      href: `/service-areas/${city.slug}/`,
      description: `~${city.avgResponseMinutes} min response`,
    })),
  },
  {
    label: 'Company',
    href: '/about/',
    layout: 'list',
    items: [
      { label: 'About Peak', href: '/about/', description: 'Family owned in Springfield since 1987', icon: 'team' },
      { label: 'FAQ', href: '/faq/', description: 'Storm claims, financing, warranties', icon: 'help' },
      { label: 'Contact', href: '/#contact', description: 'Call back within 2 business hours', icon: 'mail' },
    ],
  },
]
