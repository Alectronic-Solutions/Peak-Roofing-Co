import { CITIES } from './cities'

// TODO: this is demo/placeholder business data. Before going live, replace:
//  - Phone number: (555) 555-0100 / tel:+15555550100, search-and-replace across the codebase
//  - Web3Forms access key in lib/forms.ts (forms run in demo mode until it's set)
//  - i.pravatar.cc fake avatars in testimonials-section.tsx, about/page.tsx
//  - Recycled stock photos in lib/projects.ts (before/after pairs currently reused across projects)
//  - Placeholder social links (footer.tsx `href: '#'`) and generic sameAs URLs (local-seo-schema.tsx)
//  - public/og-default.jpg is a cropped hero poster used as a placeholder OG/Twitter share image, replace with real branded creative

export const BASE_PATH = process.env.NODE_ENV === 'production' ? '/Peak-Roofing-Co' : ''

/** Prefix a /public asset path with the basePath. next/image and raw <img>/<video> don't do this for string srcs. */
export const asset = (path: string) => `${BASE_PATH}${path}`

export const PHONE_DISPLAY = '(555) 555-0100'
export const PHONE_HREF = 'tel:+15555550100'
export const EMAIL = 'info@peakroofingco.com'
export const LICENSE = 'IL Lic. #RC-20847'
export const RATING = '4.9'
export const REVIEW_COUNT = '847'

export const SITE_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://alectronic-solutions.github.io/Peak-Roofing-Co'
    : 'http://localhost:3000'

export const FOUNDING_YEAR = 1987

export const YEARS_IN_BUSINESS = new Date().getFullYear() - FOUNDING_YEAR

const TOTAL_ROOFS_COMPLETED = CITIES.reduce(
  (sum, city) => sum + parseInt(city.roofsCompleted.replace(/\D/g, ''), 10),
  0
)

export const ROOFS_COMPLETED_DISPLAY = `${(Math.floor(TOTAL_ROOFS_COMPLETED / 100) * 100).toLocaleString('en-US')}+`
