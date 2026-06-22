import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { CheckCircle2, Clock, MapPin, Phone, AlertTriangle } from 'lucide-react'
import { Reveal } from '@/components/ui/reveal'
import PageHero from '@/components/page-hero'
import InlineCta from '@/components/inline-cta'
import ServiceCardLink from '@/components/service-card-link'
import FaqAccordion from '@/components/faq-accordion'
import LocalSeoSchema from '@/components/local-seo-schema'
import { Footer } from '@/components/footer'
import { CITIES, getCity } from '@/lib/cities'
import { SERVICES } from '@/lib/services'

export function generateStaticParams() {
  return CITIES.map((c) => ({ city: c.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city: citySlug } = await params
  const city = getCity(citySlug)
  if (!city) return { title: 'Not Found' }
  return {
    title: `${city.name} Roofing Contractor | Peak Roofing Co | Since 1987`,
    description: `Licensed roofing contractor in ${city.name}, ${city.state}. Storm damage repair, roof replacement, free drone inspection. ${city.roofsCompleted} roofs completed. Call (555) 555-0100.`,
  }
}

export default async function CityPage({ params }: { params: Promise<{ city: string }> }) {
  const { city: citySlug } = await params
  const city = getCity(citySlug)
  if (!city) notFound()

  const cityFaqs = [
    { q: `Do you serve all of ${city.name}?`, a: `Yes. We serve all neighborhoods and zip codes within ${city.name} and the surrounding area. We have completed ${city.roofsCompleted} roofs in ${city.name} alone.` },
    { q: `How quickly can you respond to an emergency in ${city.name}?`, a: `Our average response time to ${city.name} is approximately ${city.avgResponseMinutes} minutes. We keep crews staged in central locations to reach the entire service area quickly.` },
    { q: `Do you handle insurance claims in ${city.name}?`, a: `Absolutely. Illinois homeowners have 1–2 years from the storm date to file. We work with all major carriers serving ${city.county} and can file your claim on your behalf.` },
    { q: `What roofing materials are best for ${city.name}'s climate?`, a: `Central Illinois sees hail, high winds, and ice. We recommend GAF Timberline AS II (impact-resistant) shingles with a Class 4 rating. They can reduce your insurance premium and withstand the storm systems that frequently pass through ${city.name}.` },
  ]

  return (
    <>
      <LocalSeoSchema pageType="city" cityName={city.name} />

      <PageHero
        eyebrow={`Serving ${city.name} Since 1987`}
        title={`${city.name} Roofing Contractor`}
        subtitle={`${city.roofsCompleted} roofs completed in ${city.name}. ${city.servingSlogan}.`}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Service Areas', href: '/service-areas/' },
          { label: city.name, href: `/service-areas/${city.slug}/` },
        ]}
        ctaLabel="Get Free Estimate"
        ctaHref="/#contact"
        showPhone
      />

      {/* Local credibility panel */}
      <section className="bg-forest-950 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="grid sm:grid-cols-3 gap-5">
            <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6">
              <p className="font-display font-bold text-gold-400 text-4xl mb-1">{city.roofsCompleted}</p>
              <p className="text-slate-400 text-sm">Roofs completed in {city.name}</p>
            </div>
            <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-1">
                <Clock className="w-4 h-4 text-gold-500" />
                <p className="font-display font-bold text-white text-2xl">~{city.avgResponseMinutes} min</p>
              </div>
              <p className="text-slate-400 text-sm">Average response time to {city.name}</p>
            </div>
            <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6">
              <p className="text-slate-400 text-xs mb-2">{city.county} · {city.state} {city.zip}</p>
              <p className="text-slate-300 text-sm leading-relaxed">{city.localFact}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Recent storms */}
      {city.recentStorms.length > 0 && (
        <section className="bg-forest-900 py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div className="flex items-center gap-2 mb-5">
                <AlertTriangle className="w-4 h-4 text-red-400" />
                <p className="text-red-400 text-xs font-bold uppercase tracking-widest">
                  Recent Storm History: {city.name}
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                {city.recentStorms.map((storm, i) => (
                  <span
                    key={i}
                    className="text-xs text-slate-300 bg-red-950/40 border border-red-500/20 rounded-xl px-4 py-2"
                  >
                    {storm}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* Services */}
      <section className="bg-forest-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="font-display font-bold text-white text-3xl sm:text-4xl mb-10">
              Services available in {city.name}
            </h2>
          </Reveal>
          <Reveal className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((service) => (
              <ServiceCardLink
                key={service.slug}
                slug={service.slug}
                title={service.title}
                description={service.description}
                price={service.price}
                icon={service.icon}
              />
            ))}
          </Reveal>
        </div>
      </section>

      {/* Local reviews */}
      {city.testimonialNames.length > 0 && (
        <section className="bg-forest-950 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal>
              <p className="text-gold-500 text-xs font-bold uppercase tracking-widest mb-3">
                From {city.name} Homeowners
              </p>
              <h2 className="font-display font-bold text-white text-3xl mb-10">
                What your neighbors say
              </h2>
            </Reveal>
            <Reveal className="grid sm:grid-cols-2 gap-5 max-w-4xl">
              {city.testimonialNames.map((name, i) => (
                <div key={i} className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6">
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <span key={j} className="text-gold-400">★</span>
                    ))}
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed italic mb-4">
                    {city.testimonialQuotes[i]}
                  </p>
                  <p className="text-white font-semibold text-sm">{name}</p>
                </div>
              ))}
            </Reveal>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="bg-forest-900 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="font-display font-bold text-white text-3xl mb-10">
              {city.name} roofing questions
            </h2>
          </Reveal>
          <Reveal>
            <FaqAccordion items={cityFaqs} outputSchema schemaPageName={`${city.name} Roofing FAQ`} />
          </Reveal>
        </div>
      </section>

      {/* Contact / Directions */}
      <section className="bg-forest-950 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="grid sm:grid-cols-2 gap-6 max-w-3xl">
            <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-4 h-4 text-gold-500" />
                <h3 className="font-semibold text-white">Our Location</h3>
              </div>
              <p className="text-slate-300 text-sm">123 Industrial Blvd</p>
              <p className="text-slate-300 text-sm mb-3">Springfield, IL 62701</p>
              <p className="text-slate-400 text-xs">Mon–Fri 7am–6pm · Sat 8am–4pm</p>
              <p className="text-red-400 text-xs font-semibold mt-1">● 24/7 Storm Hotline</p>
            </div>
            <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Phone className="w-4 h-4 text-gold-500" />
                <h3 className="font-semibold text-white">Reach Us</h3>
              </div>
              <a href="tel:+15555550100" className="block text-white font-bold text-lg hover:text-gold-400 transition-colors mb-1">
                (555) 555-0100
              </a>
              <p className="text-slate-400 text-xs mb-4">24/7 storm emergency line</p>
              <a href="mailto:info@peakroofingco.com" className="text-slate-300 text-sm hover:text-gold-400 transition-colors">
                info@peakroofingco.com
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <InlineCta
        heading={`${city.name} homeowner? Get a free estimate today.`}
        subtext={`We've completed ${city.roofsCompleted} roofs in ${city.name}. You're in good hands.`}
        primaryLabel="Get Free Estimate"
        primaryHref="/#contact"
      />

      <Footer />
    </>
  )
}
