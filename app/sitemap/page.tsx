import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/page-hero'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Sitemap | Peak Roofing Co',
  description: 'A complete directory of all pages on the Peak Roofing Co website.',
  robots: { index: false },
}

type SitemapSection = {
  title: string
  links: { label: string; href: string }[]
}

const SECTIONS: SitemapSection[] = [
  {
    title: 'Main Pages',
    links: [
      { label: 'Home', href: '/' },
      { label: 'About Us', href: '/about' },
      { label: 'Gallery', href: '/gallery' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Financing', href: '/financing' },
      { label: 'Storm Damage', href: '/storm-damage' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'All Services', href: '/services' },
      { label: 'Roof Replacement', href: '/services/roof-replacement' },
      { label: 'Storm Damage Repair', href: '/services/storm-damage' },
      { label: 'Drone Inspections', href: '/services/drone-inspections' },
      { label: 'Insurance Claims', href: '/services/insurance-claims' },
      { label: 'Commercial Roofing', href: '/services/commercial-roofing' },
      { label: 'Financing Options', href: '/services/financing' },
    ],
  },
  {
    title: 'Service Areas',
    links: [
      { label: 'All Service Areas', href: '/service-areas' },
      { label: 'Springfield', href: '/service-areas/springfield' },
      { label: 'Westbrook', href: '/service-areas/westbrook' },
      { label: 'Chatham', href: '/service-areas/chatham' },
      { label: 'Sherman', href: '/service-areas/sherman' },
      { label: 'Auburn', href: '/service-areas/auburn' },
      { label: 'Rochester', href: '/service-areas/rochester' },
      { label: 'Riverton', href: '/service-areas/riverton' },
      { label: 'Lakeview Heights', href: '/service-areas/lakeview-heights' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms of Service', href: '/terms' },
    ],
  },
]

export default function SitemapPage() {
  return (
    <>
      <PageHero
        eyebrow="Navigation"
        title="Sitemap"
        subtitle="A complete directory of every page on our website."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Sitemap', href: '/sitemap' }]}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {SECTIONS.map((section) => (
              <div key={section.title}>
                <h2 className="font-display text-lg font-semibold text-slate-900 mb-4 pb-2 border-b border-slate-200">
                  {section.title}
                </h2>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-slate-600 hover:text-brand-600 transition-colors text-sm"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="mt-12 text-xs text-slate-400 text-center">
            Machine-readable sitemap:{' '}
            <a
              href="/sitemap.xml"
              className="underline hover:text-slate-600 transition-colors"
            >
              sitemap.xml
            </a>
          </p>
        </div>
      </section>

      <Footer />
    </>
  )
}
