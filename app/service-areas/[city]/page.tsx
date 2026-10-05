import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Reveal } from '@/components/ui/reveal'
import { Icon3D } from '@/components/ui/icon-3d'
import { StarRow } from '@/components/testimonials-section'
import PageHero from '@/components/page-hero'
import InlineCta from '@/components/inline-cta'
import ServiceCardLink from '@/components/service-card-link'
import FaqAccordion from '@/components/faq-accordion'
import LocalSeoSchema from '@/components/local-seo-schema'
import { Footer } from '@/components/footer'
import { CITIES, getCity } from '@/lib/cities'
import { SERVICES } from '@/lib/services'
import { REVIEWS, initialsOf } from '@/lib/reviews'
import { EMAIL, PHONE_DISPLAY, PHONE_HREF, asset } from '@/lib/company'

export function generateStaticParams() {
  return CITIES.map((c) => ({ city: c.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city: citySlug } = await params
  const city = getCity(citySlug)
  if (!city) return { title: 'Not Found' }
  return {
    title: `${city.name} Roofing Contractor | Peak Roofing Co | Since 1987`,
    description: `Licensed roofing contractor in ${city.name}, ${city.state}. Storm damage repair, roof replacement, free drone inspection. ${city.roofsCompleted} roofs completed. Call ${PHONE_DISPLAY}.`,
    alternates: { canonical: `/service-areas/${city.slug}/` },
  }
}

export default async function CityPage({ params }: { params: Promise<{ city: string }> }) {
  const { city: citySlug } = await params
  const city = getCity(citySlug)
  if (!city) notFound()

  const localReviews = REVIEWS.filter((r) => r.city === city.slug).slice(0, 2)

  const cityFaqs = [
    {
      q: `Do you serve all of ${city.name}?`,
      a: `Yes, every neighborhood and ZIP code in and around ${city.name}. We have completed ${city.roofsCompleted} roofs there so far.`,
    },
    {
      q: `How quickly can you get to ${city.name} in an emergency?`,
      a: `Our average response time to ${city.name} is about ${city.avgResponseMinutes} minutes. After a big storm we stage crews in the hardest-hit towns so we are not driving out from Springfield each time.`,
    },
    {
      q: `Do you handle insurance claims in ${city.name}?`,
      a: `Yes. Most Illinois policies give you one to two years from the storm date to file, though your policy sets the exact deadline. We work with every major carrier writing policies in ${city.county}.`,
    },
    {
      q: `What roofing materials hold up best in ${city.name}?`,
      a: `Central Illinois gets hail, high wind, and ice. We usually recommend GAF Timberline AS II, a Class 4 impact-rated shingle. Some insurers give a premium discount for Class 4 roofs, so it is worth asking yours.`,
    },
  ]

  return (
    <>
      <LocalSeoSchema pageType="city" cityName={city.name} />

      <PageHero
        eyebrow={`Serving ${city.name} since 1987`}
        title={`${city.name} Roofing Contractor`}
        subtitle={`${city.roofsCompleted} roofs completed in ${city.name}, ${city.county}. Free drone inspections and written estimates.`}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Service Areas', href: '/service-areas/' },
          { label: city.name, href: `/service-areas/${city.slug}/` },
        ]}
        bgImage={asset('/images/hero-areas.jpg')}
        ctaLabel="Get Free Estimate"
        ctaHref="/#contact"
        showPhone
      />

      {/* Local credibility panel */}
      <section className="bg-forest-950 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="grid sm:grid-cols-3 gap-5">
            <div className="flex items-center gap-4 bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6">
              <Icon3D name="house" size={52} />
              <div>
                <p className="font-display font-bold text-gold-400 text-3xl leading-none">{city.roofsCompleted}</p>
                <p className="mt-1.5 text-slate-400 text-sm">Roofs completed in {city.name}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6">
              <Icon3D name="clock" size={52} />
              <div>
                <p className="font-display font-bold text-white text-3xl leading-none">~{city.avgResponseMinutes} min</p>
                <p className="mt-1.5 text-slate-400 text-sm">Average response time</p>
              </div>
            </div>
            <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6">
              <p className="text-slate-400 text-xs mb-2">
                {city.county} · {city.state} {city.zip}
                {city.milesFromHQ > 0 && ` · ${city.milesFromHQ} mi from our yard`}
              </p>
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
                <Icon3D name="alert" size={24} />
                <p className="text-red-400 text-xs font-bold uppercase tracking-widest">
                  Recent storms in {city.name}
                </p>
              </div>
              <ul className="flex flex-wrap gap-3">
                {city.recentStorms.map((storm) => (
                  <li
                    key={storm}
                    className="text-xs text-slate-300 bg-red-950/40 border border-red-500/20 rounded-xl px-4 py-2"
                  >
                    {storm}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>
      )}

      {/* Services */}
      <section className="bg-forest-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="font-display font-bold text-white text-3xl sm:text-4xl mb-10">
              Services in {city.name}
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
      {localReviews.length > 0 && (
        <section className="bg-forest-950 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal>
              <p className="text-gold-400 text-xs font-bold uppercase tracking-widest mb-3">
                From {city.name} homeowners
              </p>
              <h2 className="font-display font-bold text-white text-3xl mb-10">What your neighbors say</h2>
            </Reveal>
            <Reveal className="grid sm:grid-cols-2 gap-5 max-w-4xl">
              {localReviews.map((r) => (
                <figure key={r.name} className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6">
                  <StarRow rating={r.rating} />
                  <blockquote className="mt-4 mb-5 text-slate-300 text-sm leading-relaxed">{r.body}</blockquote>
                  <figcaption className="flex items-center gap-3">
                    <span
                      className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-forest-700 font-display text-xs font-bold text-gold-300"
                      aria-hidden="true"
                    >
                      {initialsOf(r.name)}
                    </span>
                    <span>
                      <span className="block text-white font-semibold text-sm">{r.name}</span>
                      <span className="block text-slate-400 text-xs">{r.serviceLabel} · {r.date}</span>
                    </span>
                  </figcaption>
                </figure>
              ))}
            </Reveal>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="bg-forest-900 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="font-display font-bold text-white text-3xl mb-10">{city.name} roofing questions</h2>
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
              <div className="flex items-center gap-3 mb-4">
                <Icon3D name="pin" size={32} />
                <h3 className="font-semibold text-white">Our yard</h3>
              </div>
              <p className="text-slate-300 text-sm">123 Industrial Blvd</p>
              <p className="text-slate-300 text-sm mb-3">Springfield, IL 62701</p>
              <p className="text-slate-400 text-xs">Mon–Fri 7am–6pm · Sat 8am–2pm</p>
              <p className="text-red-400 text-xs font-semibold mt-1">Storm line answered 24/7</p>
            </div>
            <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Icon3D name="phone" size={32} />
                <h3 className="font-semibold text-white">Reach us</h3>
              </div>
              <a href={PHONE_HREF} className="block text-white font-bold text-lg hover:text-gold-400 transition-colors mb-1">
                {PHONE_DISPLAY}
              </a>
              <p className="text-slate-400 text-xs mb-4">Same number for the 24/7 storm line</p>
              <a href={`mailto:${EMAIL}`} className="text-slate-300 text-sm hover:text-gold-400 transition-colors">
                {EMAIL}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <InlineCta
        heading={`In ${city.name}? Get a free estimate.`}
        subtext={`We have roofed ${city.roofsCompleted} homes and businesses in ${city.name}.`}
        primaryLabel="Get Free Estimate"
        primaryHref="/#contact"
      />

      <Footer />
    </>
  )
}
