import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/page-hero'
import { Footer } from '@/components/footer'
import { BASE_PATH } from '@/lib/company'
import { CITIES } from '@/lib/cities'

export const metadata: Metadata = {
  title: 'Sitemap | Peak Roofing Co',
  description: 'A complete directory of all pages on the Peak Roofing Co website.',
  robots: { index: false },
  alternates: { canonical: '/sitemap/' },
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
      { label: 'About Us', href: '/about/' },
      { label: 'Gallery', href: '/gallery/' },
      { label: 'FAQ', href: '/faq/' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'All Services', href: '/services/' },
      { label: 'Roof Replacement', href: '/services/roof-replacement/' },
      { label: 'Storm Damage Repair', href: '/services/storm-damage/' },
      { label: 'Drone Inspections', href: '/services/drone-inspections/' },
      { label: 'Insurance Claims', href: '/services/insurance-claims/' },
      { label: 'Commercial Roofing', href: '/services/commercial-roofing/' },
      { label: 'Financing Options', href: '/services/financing/' },
    ],
  },
  {
    title: 'Service Areas',
    links: [
      { label: 'All Service Areas', href: '/service-areas/' },
      ...CITIES.map((city) => ({ label: city.name, href: `/service-areas/${city.slug}/` })),
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy-policy/' },
      { label: 'Terms of Service', href: '/terms/' },
      { label: 'Photo Credits', href: '/photo-credits/' },
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
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Sitemap', href: '/sitemap/' }]}
      />

      <section className="bg-forest-900 py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {SECTIONS.map((section) => (
              <div key={section.title}>
                <h2 className="font-display text-lg font-semibold text-white mb-4 pb-2 border-b border-white/10">
                  {section.title}
                </h2>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-slate-400 hover:text-gold-400 transition-colors text-sm"
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
              href={`${BASE_PATH}/sitemap.xml`}
              className="underline hover:text-slate-300 transition-colors"
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
