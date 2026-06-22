import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Clock, ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/ui/reveal'
import PageHero from '@/components/page-hero'
import InlineCta from '@/components/inline-cta'
import LocalSeoSchema from '@/components/local-seo-schema'
import { Footer } from '@/components/footer'
import { CITIES } from '@/lib/cities'

export const metadata: Metadata = {
  title: 'Roofing Service Areas | Springfield IL & Surrounding Communities | Peak Roofing Co',
  description:
    'Peak Roofing Co serves Springfield, Westbrook, Chatham, Sherman, Auburn, Rochester, Riverton, and Lakeview Heights. Licensed roofing contractors since 1987.',
}

export default function ServiceAreasPage() {
  return (
    <>
      <LocalSeoSchema pageType="home" />

      <PageHero
        eyebrow="Where We Work"
        title="Serving Springfield & Surrounding Communities."
        subtitle="Residential and commercial. 35-mile radius from Springfield."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Service Areas', href: '/service-areas/' }]}
        ctaLabel="Get Free Estimate"
        ctaHref="/#contact"
      />

      {/* Coverage Area */}
      <section className="bg-forest-950 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="bg-white/[0.04] border border-white/[0.08] rounded-2xl overflow-hidden p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-10">
              {/* Radius graphic */}
              <div className="shrink-0 relative w-56 h-56">
                {/* Outer ring */}
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-gold-500/20" />
                {/* Mid ring */}
                <div className="absolute inset-6 rounded-full border border-gold-500/15" />
                {/* Inner ring */}
                <div className="absolute inset-14 rounded-full border border-gold-500/30 bg-gold-500/5" />
                {/* Center pin */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex flex-col items-center gap-1">
                    <MapPin className="w-7 h-7 text-gold-500" />
                    <span className="text-white text-xs font-bold font-display">Springfield</span>
                  </div>
                </div>
                {/* 35 mi label */}
                <div className="absolute bottom-1 right-0 left-0 flex justify-end pr-2">
                  <span className="text-gold-500/60 text-[10px] font-medium">35 mi radius</span>
                </div>
              </div>

              {/* Coverage details */}
              <div className="flex-1 min-w-0">
                <p className="text-gold-500 text-xs font-bold uppercase tracking-widest mb-2">Coverage Zone</p>
                <h2 className="font-display font-bold text-white text-2xl sm:text-3xl mb-3">
                  Springfield Metro &amp; Central Illinois
                </h2>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  We serve residential and commercial properties within a 35-mile radius of Springfield —
                  covering Sangamon, Morgan, Menard, Logan, and Christian Counties.
                </p>
                {/* Cities grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {CITIES.map((city) => (
                    <Link
                      key={city.slug}
                      href={`/service-areas/${city.slug}/`}
                      className="flex items-center gap-1.5 text-slate-300 hover:text-gold-400 transition-colors text-sm group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-500/60 group-hover:bg-gold-400 transition-colors shrink-0" />
                      {city.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* City Grid */}
      <section className="bg-forest-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-gold-500 text-xs font-bold uppercase tracking-widest mb-3 text-center">
              Communities We Serve
            </p>
            <h2 className="font-display font-bold text-white text-3xl sm:text-4xl text-center mb-12">
              Find your city
            </h2>
          </Reveal>
          <Reveal className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CITIES.map((city) => (
              <Link
                key={city.slug}
                href={`/service-areas/${city.slug}/`}
                className="group bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6 hover:bg-white/[0.07] hover:border-gold-500/30 transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-2 mb-3">
                  <h3 className="font-display font-bold text-white text-xl group-hover:text-gold-400 transition-colors">
                    {city.name}
                  </h3>
                  <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-gold-400 group-hover:translate-x-0.5 transition-all shrink-0 mt-1" />
                </div>
                <p className="text-slate-500 text-xs mb-4">{city.county}</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-500/60" />
                    {city.roofsCompleted} roofs completed
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <Clock className="w-3 h-3" />
                    ~{city.avgResponseMinutes} min avg response
                  </div>
                  {city.milesFromHQ > 0 && (
                    <div className="flex items-center gap-2 text-xs text-slate-400">
                      <MapPin className="w-3 h-3" />
                      {city.milesFromHQ} miles from HQ
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Coverage Description */}
      <section className="bg-forest-950 py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <h2 className="font-display font-bold text-white text-2xl sm:text-3xl mb-5">
              Don&apos;t see your city?
            </h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              We serve homeowners and businesses within a 35-mile radius of Springfield, including residential and
              commercial properties in Sangamon, Morgan, Menard, Logan, and Christian counties. If you&apos;re in
              central Illinois, there&apos;s a good chance we cover your area. Call us and we&apos;ll confirm.
            </p>
            <a
              href="tel:+15555550100"
              className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 font-semibold transition-colors"
            >
              Call (555) 555-0100 to check coverage →
            </a>
          </Reveal>
        </div>
      </section>

      <InlineCta
        heading="Ready to protect your home?"
        subtext="We serve your area. Response within 2 hours, guaranteed."
        primaryLabel="Get Free Estimate"
        primaryHref="/#contact"
      />

      <Footer />
    </>
  )
}
