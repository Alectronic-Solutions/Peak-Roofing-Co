import { Icon3D } from '@/components/ui/icon-3d'
import { StarRow } from '@/components/testimonials-section'
import { Reveal } from '@/components/ui/reveal'
import PageHero from '@/components/page-hero'
import InlineCta from '@/components/inline-cta'
import ServiceCardLink from '@/components/service-card-link'
import FaqAccordion from '@/components/faq-accordion'
import LocalSeoSchema from '@/components/local-seo-schema'
import { Footer } from '@/components/footer'
import { SERVICES, type Service } from '@/lib/services'
import { reviewsFor, initialsOf } from '@/lib/reviews'

interface ServicePageTemplateProps {
  service: Service
  children?: React.ReactNode
}

export default function ServicePageTemplate({ service, children }: ServicePageTemplateProps) {
  const related = SERVICES.filter((s) => service.relatedSlugs.includes(s.slug))
  const reviews = reviewsFor((r) => r.service === service.slug, 2)

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
              <p className="text-gold-400 text-xs font-bold uppercase tracking-widest mb-3">What We Do</p>
              <h2 className="font-display font-bold text-white text-3xl sm:text-4xl mb-8 leading-tight">
                What’s included
              </h2>
              <ul className="space-y-3">
                {service.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Icon3D name="check" size={20} />
                    <span className="text-slate-300 text-sm">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-7">
              <Icon3D name={service.icon} size={60} className="-ml-1 mb-3" />
              <p className="text-gold-400 text-xs font-bold uppercase tracking-widest mb-3">Pricing & expectations</p>
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
            <p className="text-gold-400 text-xs font-bold uppercase tracking-widest mb-3 text-center">How It Works</p>
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
            <p className="text-gold-400 text-xs font-bold uppercase tracking-widest mb-3 text-center">
              Reviews
            </p>
            <h2 className="font-display font-bold text-white text-3xl text-center mb-10">
              From homeowners we’ve worked for
            </h2>
          </Reveal>
          <Reveal className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
            {reviews.map((r) => (
              <figure key={r.name} className="w-full sm:w-[calc(50%-0.75rem)] bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6">
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
                    <span className="block text-slate-400 text-xs">{r.town} · {r.source} review</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-forest-950 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-gold-400 text-xs font-bold uppercase tracking-widest mb-3 text-center">
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

      {children}

      <InlineCta
        heading={`Ready to get started with ${service.shortTitle.toLowerCase()}?`}
        subtext="The estimate and drone inspection are free. We call back within 2 business hours."
        primaryLabel="Get Free Estimate"
        primaryHref="/#contact"
      />

      <Footer />
    </>
  )
}
