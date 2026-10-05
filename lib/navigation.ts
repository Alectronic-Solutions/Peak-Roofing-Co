import {
  Home,
  CloudLightning,
  Aperture,
  ShieldCheck,
  CreditCard,
  Building2,
  Images,
  Star,
  SlidersHorizontal,
  Users,
  HelpCircle,
  Mail,
  type LucideIcon,
} from 'lucide-react'
import { CITIES } from './cities'

export type NavItem = {
  label: string
  href: string
  description?: string
  icon?: LucideIcon
}

export type NavMenu = {
  label: string
  href: string
  layout: 'services' | 'list' | 'areas'
  items: NavItem[]
}

export const SERVICE_NAV: NavItem[] = [
  { label: 'Roof Replacement', href: '/services/roof-replacement/', description: 'Full tear-off & GAF install, usually in one day', icon: Home },
  { label: 'Storm Damage Repair', href: '/services/storm-damage/', description: 'Hail & wind repair with same-day tarping', icon: CloudLightning },
  { label: 'Drone Inspections', href: '/services/drone-inspections/', description: '4K roof report in 24 hours, free with estimate', icon: Aperture },
  { label: 'Insurance Claims', href: '/services/insurance-claims/', description: 'On-staff adjuster files and negotiates for you', icon: ShieldCheck },
  { label: 'Commercial Roofing', href: '/services/commercial-roofing/', description: 'TPO, EPDM & flat-roof systems', icon: Building2 },
  { label: 'Financing', href: '/services/financing/', description: 'From 6.9% APR, no credit impact to check', icon: CreditCard },
]

export const NAV_MENUS: NavMenu[] = [
  { label: 'Services', href: '/services/', layout: 'services', items: SERVICE_NAV },
  {
    label: 'Our Work',
    href: '/gallery/',
    layout: 'list',
    items: [
      { label: 'Project Gallery', href: '/gallery/', description: '12 recent projects, filterable by type', icon: Images },
      { label: 'Before & After', href: '/#gallery', description: 'Drag the slider on real transformations', icon: SlidersHorizontal },
      { label: 'Customer Reviews', href: '/#reviews', description: '4.9 stars across 847 reviews', icon: Star },
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
      { label: 'About Peak', href: '/about/', description: 'Family owned in Springfield since 1987', icon: Users },
      { label: 'FAQ', href: '/faq/', description: 'Storm claims, financing, warranties', icon: HelpCircle },
      { label: 'Contact', href: '/#contact', description: 'Call back within 2 business hours', icon: Mail },
    ],
  },
]
