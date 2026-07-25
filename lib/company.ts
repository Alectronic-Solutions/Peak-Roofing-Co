import { CITIES } from './cities'

// TODO: this is demo/placeholder business data. Before going live, replace:
//  - Phone number: (555) 555-0100 / tel:+15555550100, search-and-replace across the codebase
//  - Web3Forms `access_key: 'YOUR_ACCESS_KEY_HERE'` in contact-form.tsx, footer.tsx, lead-capture-form.tsx
//  - i.pravatar.cc fake avatars in testimonials-section.tsx, lead-capture-form.tsx, about/page.tsx
//  - Recycled stock photos in lib/projects.ts (before/after pairs currently reused across projects)
//  - Placeholder social links (footer.tsx `href: '#'`) and generic sameAs URLs (local-seo-schema.tsx)
//  - public/og-default.jpg is a cropped hero poster used as a placeholder OG/Twitter share image, replace with real branded creative

export const BASE_PATH = process.env.NODE_ENV === 'production' ? '/Peak-Roofing-Co' : ''

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
