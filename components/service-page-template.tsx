import { CheckCircle2 } from 'lucide-react'
import { Reveal } from '@/components/ui/reveal'
import PageHero from '@/components/page-hero'
import InlineCta from '@/components/inline-cta'
import ServiceCardLink from '@/components/service-card-link'
import FaqAccordion from '@/components/faq-accordion'
import LocalSeoSchema from '@/components/local-seo-schema'
import { Footer } from '@/components/footer'
import { SERVICES, type Service } from '@/lib/services'

const REVIEWS = [
  { name: 'Margaret T.', location: 'Springfield', quote: 'Peak had a drone over my house within 90 minutes. Claim approved, new roof installed. I paid my deductible and nothing else.', service: 'storm-damage' },
  { name: 'Robert K.', location: 'Springfield', quote: '37 years in Springfield and they still answer the phone themselves. Best contractor experience I\'ve had in decades.', service: 'roof-replacement' },
  { name: 'David P.', location: 'Westbrook', quote: 'The financing process was painless. Approved same day, crew showed up next week. Incredible experience.', service: 'financing' },
  { name: 'Linda W.', location: 'Chatham', quote: 'They were the only company that showed us drone footage of exactly what needed fixing. No question who to hire.', service: 'drone-inspections' },
  { name: 'Susan M.', location: 'Westbrook', quote: 'They handled our insurance claim completely. We signed one document and everything else was taken care of.', service: 'insurance-claims' },
  { name: 'Thomas N.', location: 'Sherman', quote: 'Commercial TPO install done over a weekend. Zero disruption to our tenants. Spotless crew.', service: 'commercial-roofing' },
]

interface ServicePageTemplateProps {
  service: Service
}

export default function ServicePageTemplate({ service }: ServicePageTemplateProps) {
  const related = SERVICES.filter((s) => service.relatedSlugs.includes(s.slug))
  const reviews = REVIEWS.filter((r) => r.service === service.slug).slice(0, 2)
  if (reviews.length === 0) reviews.push(REVIEWS[0], REVIEWS[1])

  return (
    <>
      <LocalSeoSchema pageType="service" serviceName={service.title} />

      <PageHero
        eyebrow={service.eyebrow}
        title={service.title}
        subtitle={service.tagline}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services/' },
          { label: service.shortTitle, href: `/services/${service.slug}/` },
        ]}
        bgImage={service.heroImage}
        ctaLabel="Get Free Estimate"
        ctaHref="/#contact"
        showPhone
      />

      {/* Features */}
      <section className="bg-forest-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-gold-500 text-xs font-bold uppercase tracking-widest mb-3">What We Do</p>
              <h2 className="font-display font-bold text-white text-3xl sm:text-4xl mb-8 leading-tight">
                Everything included. Nothing hidden.
              </h2>
              <ul className="space-y-3">
                {service.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-7">
              <p className="text-gold-500 text-xs font-bold uppercase tracking-widest mb-3">Pricing & Expectations</p>
              <h3 className="font-display font-bold text-white text-xl mb-4">{service.price}</h3>
              <p className="text-slate-300 text-sm leading-relaxed">{service.pricingNote}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Process */}
      <section className="bg-forest-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-gold-500 text-xs font-bold uppercase tracking-widest mb-3 text-center">How It Works</p>
            <h2 className="font-display font-bold text-white text-3xl sm:text-4xl text-center mb-12">
              Your {service.shortTitle.toLowerCase()}, step by step
            </h2>
          </Reveal>
          <Reveal className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.processSteps.map((step, i) => (
              <div key={i} className="relative bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6">
                <div className="font-display font-bold text-gold-500/20 text-5xl mb-4 leading-none">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="font-display font-bold text-white text-lg mb-2">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-forest-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-gold-500 text-xs font-bold uppercase tracking-widest mb-3 text-center">
              What Homeowners Say
            </p>
            <h2 className="font-display font-bold text-white text-3xl text-center mb-10">
              Real results. Real customers.
            </h2>
          </Reveal>
          <Reveal className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {reviews.map((r) => (
              <div key={r.name} className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-gold-400 text-sm">★</span>
                  ))}
                </div>
                <p className="text-slate-300 text-sm leading-relaxed mb-4 italic">{r.quote}</p>
                <div>
                  <p className="text-white font-semibold text-sm">{r.name}</p>
                  <p className="text-slate-500 text-xs">{r.location}</p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-forest-950 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-gold-500 text-xs font-bold uppercase tracking-widest mb-3 text-center">
              Common Questions
            </p>
            <h2 className="font-display font-bold text-white text-3xl text-center mb-10">
              {service.shortTitle} FAQ
            </h2>
          </Reveal>
          <Reveal>
            <FaqAccordion items={service.faqs} outputSchema schemaPageName={`${service.title} FAQ`} />
          </Reveal>
        </div>
      </section>

      {/* Related Services */}
      <section className="bg-forest-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="font-display font-bold text-white text-2xl sm:text-3xl mb-8">
              Related services
            </h2>
          </Reveal>
          <Reveal className="grid sm:grid-cols-3 gap-5">
            {related.map((s) => (
              <ServiceCardLink
                key={s.slug}
                slug={s.slug}
                title={s.title}
                description={s.description}
                price={s.price}
                icon={s.icon}
              />
            ))}
          </Reveal>
        </div>
      </section>

      <InlineCta
        heading={`Ready to get started with ${service.shortTitle.toLowerCase()}?`}
        subtext="Free estimate. No obligation. We respond within 2 hours."
        primaryLabel="Get Free Estimate"
        primaryHref="/#contact"
      />

      <Footer />
    </>
  )
}
