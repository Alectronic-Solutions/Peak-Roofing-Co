import type { Metadata } from 'next'
import { CheckCircle2, X } from 'lucide-react'
import { Reveal } from '@/components/ui/reveal'
import PageHero from '@/components/page-hero'
import InlineCta from '@/components/inline-cta'
import ServiceCardLink from '@/components/service-card-link'
import LocalSeoSchema from '@/components/local-seo-schema'
import { Footer } from '@/components/footer'
import { SERVICES } from '@/lib/services'

export const metadata: Metadata = {
  title: 'Roofing Services | Replacement, Storm Repair, Inspections | Peak Roofing Co',
  description:
    'Roof replacement, storm damage repair, drone inspections, insurance claim assistance, financing, and commercial roofing in Springfield IL. Licensed since 1987.',
}

const COMPARISON = [
  { feature: 'Written Warranty', peak: true, other: false },
  { feature: 'Licensed In-House Adjuster', peak: true, other: false },
  { feature: 'Free Drone Inspection', peak: true, other: false },
  { feature: '24/7 Emergency Line', peak: true, other: false },
  { feature: 'In-House Financing', peak: true, other: false },
  { feature: 'GAF Master Elite® Certified', peak: true, other: false },
  { feature: '$0 Out-of-Pocket Storm Claims', peak: true, other: false },
  { feature: 'FAA-Certified Drone Pilots', peak: true, other: false },
]

const PROCESS = [
  { step: '01', title: 'Free Drone Inspection', description: 'We assess your roof from every angle. No ladders, no guessing. You receive a full PDF report.' },
  { step: '02', title: 'Written Estimate', description: 'Itemized, no-surprises quote delivered within 24 hours. We walk you through every line item.' },
  { step: '03', title: 'Work Begins', description: 'Project scheduled on your timeline. Named foreman, daily progress updates, and zero-mess cleanup.' },
  { step: '04', title: 'Final Walkthrough', description: 'We walk the job with you, register your warranty on the spot, and don\'t leave until you\'re satisfied.' },
]

export default function ServicesPage() {
  return (
    <>
      <LocalSeoSchema pageType="service" serviceName="Roofing Services" />

      <PageHero
        eyebrow="What We Do"
        title="Every Roofing Service Under One Roof."
        subtitle="Replacement, storm repair, drone inspections, insurance claims, financing, and commercial. All from one licensed team."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services/' }]}
        ctaLabel="Get Free Estimate"
        ctaHref="/#contact"
      />

      {/* Services Grid */}
      <section className="bg-forest-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((service) => (
              <ServiceCardLink
                key={service.slug}
                slug={service.slug}
                title={service.title}
                description={service.description}
                price={service.price}
                icon={service.icon}
                badge={service.badge}
              />
            ))}
          </Reveal>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-forest-950 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-gold-500 text-xs font-bold uppercase tracking-widest mb-3 text-center">
              Why Peak Roofing
            </p>
            <h2 className="font-display font-bold text-white text-3xl sm:text-4xl text-center mb-12">
              Us vs. the other guy
            </h2>
          </Reveal>
          <Reveal className="bg-white/[0.04] border border-white/[0.08] rounded-2xl overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-3 bg-white/[0.04] border-b border-white/[0.08] px-6 py-4">
              <div className="col-span-1" />
              <div className="text-center">
                <span className="text-gold-400 font-bold text-sm">Peak Roofing Co</span>
              </div>
              <div className="text-center">
                <span className="text-slate-500 font-semibold text-sm">The Other Guy</span>
              </div>
            </div>
            {COMPARISON.map((row, i) => (
              <div
                key={row.feature}
                className={`grid grid-cols-3 px-6 py-4 items-center ${
                  i < COMPARISON.length - 1 ? 'border-b border-white/[0.05]' : ''
                }`}
              >
                <span className="text-slate-300 text-sm">{row.feature}</span>
                <div className="flex justify-center">
                  <CheckCircle2 className="w-5 h-5 text-gold-500" />
                </div>
                <div className="flex justify-center">
                  <X className="w-5 h-5 text-slate-600" />
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Process */}
      <section className="bg-forest-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-gold-500 text-xs font-bold uppercase tracking-widest mb-3 text-center">
              How It Works
            </p>
            <h2 className="font-display font-bold text-white text-3xl sm:text-4xl text-center mb-12">
              Simple. Transparent. Done right.
            </h2>
          </Reveal>
          <Reveal className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS.map((step) => (
              <div key={step.step} className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6">
                <div className="font-display font-bold text-gold-500/30 text-5xl mb-4 leading-none">{step.step}</div>
                <h3 className="font-display font-bold text-white text-lg mb-2">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <InlineCta
        heading="Not sure what you need?"
        subtext="Schedule a free drone inspection and we'll tell you exactly what's going on up there."
        primaryLabel="Schedule Free Assessment"
        primaryHref="/#contact"
      />

      <Footer />
    </>
  )
}
