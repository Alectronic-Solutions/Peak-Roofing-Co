import type { Metadata } from 'next'
import { CheckCircle2 } from 'lucide-react'
import { Reveal } from '@/components/ui/reveal'
import PageHero from '@/components/page-hero'
import InlineCta from '@/components/inline-cta'
import FaqAccordion from '@/components/faq-accordion'
import { FinancingHub } from '@/components/financing-hub'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Roof Financing | From $189/Month | No Credit Impact | Peak Roofing Co',
  description:
    'Finance your new roof in Springfield IL. Check your rate in 60 seconds. No credit impact. From 6.9% APR. Same-day approval. 12-lender network.',
}

const TIERS = [
  {
    name: 'Starter Protection',
    apr: '12.9%',
    term: '60 months',
    credit: '580+',
    payment: '$189',
    desc: 'Best for lower credit scores or short-term financing preference.',
  },
  {
    name: 'Homeowner Choice',
    apr: '9.9%',
    term: '120 months',
    credit: '640+',
    desc: 'Most popular: balanced rate and term for the average homeowner.',
    popular: true,
    payment: '$132',
  },
  {
    name: 'Elite Finance',
    apr: '6.9%',
    term: '180 months',
    credit: '720+',
    desc: 'Best available rate for homeowners with strong credit.',
    payment: '$112',
  },
]

const PROCESS = [
  { step: '01', title: 'Check Your Rate', description: 'Fill out a 2-minute form online or in person. Soft credit pull. Zero impact to your score.' },
  { step: '02', title: 'Review Options', description: 'We present all available offers from our 12-lender network side by side. No pressure.' },
  { step: '03', title: 'Get Approved', description: 'Most approvals come through same-day. Sign and we schedule your install immediately.' },
  { step: '04', title: 'Work Begins', description: 'Payments start 30 days after project completion, not before.' },
]

const FAQS = [
  { q: 'Will checking my rate hurt my credit?', a: 'No. Rate checks use a soft pull with zero impact to your score. A hard inquiry only occurs if you accept and close a loan.' },
  { q: 'What credit score do I need?', a: 'We have options for scores as low as 580. Elite rates (6.9% APR) require 720+. Even with challenged credit, we\'ll find something.' },
  { q: 'How quickly can I get approved?', a: 'Most approvals come back within minutes during business hours. Same-day is the norm.' },
  { q: 'Can I pay off my loan early?', a: 'Yes. No prepayment penalty on any of our financing products.' },
  { q: 'What if I\'m denied?', a: 'We\'ll work with you on an alternative. We\'ve never turned away a homeowner who genuinely needed a roof.' },
  { q: 'When do payments start?', a: 'Monthly payments begin 30 days after project completion.' },
]

const BENEFITS = [
  'No prepayment penalty',
  'Deferred interest options available',
  'Same-day approval in most cases',
  '12-lender network: best available rate',
  'Financing from $2,500 to $75,000',
  'Soft pull only to check rate',
]

export default function FinancingPage() {
  return (
    <>
      <PageHero
        eyebrow="Flexible Payment Plans"
        title="A New Roof for Less Than You Think."
        subtitle="From $189/month. Check your rate in 60 seconds. No credit impact."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Financing', href: '/financing/' }]}
        ctaLabel="Check My Rate"
        ctaHref="/#contact"
      />

      {/* Calculator */}
      <FinancingHub />

      {/* Tier Comparison */}
      <section className="bg-forest-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-gold-500 text-xs font-bold uppercase tracking-widest mb-3 text-center">
              Financing Options
            </p>
            <h2 className="font-display font-bold text-white text-3xl sm:text-4xl text-center mb-12">
              Three tiers. One right for you.
            </h2>
          </Reveal>
          <Reveal className="grid sm:grid-cols-3 gap-6">
            {TIERS.map((tier) => (
              <div
                key={tier.name}
                className={`relative bg-white/[0.04] border rounded-2xl p-7 ${
                  tier.popular ? 'border-gold-500/40' : 'border-white/[0.08]'
                }`}
              >
                {tier.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-bold uppercase tracking-widest bg-gold-500 text-forest-950 rounded-full px-4 py-1">
                    Most Popular
                  </span>
                )}
                <h3 className="font-display font-bold text-white text-xl mb-1">{tier.name}</h3>
                <p className="text-slate-400 text-sm mb-5 leading-relaxed">{tier.desc}</p>
                <div className="space-y-2 mb-5">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">APR</span>
                    <span className="text-white font-semibold">{tier.apr}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Term</span>
                    <span className="text-white font-semibold">{tier.term}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Min. Credit</span>
                    <span className="text-white font-semibold">{tier.credit}</span>
                  </div>
                  <div className="flex justify-between text-sm border-t border-white/10 pt-2 mt-2">
                    <span className="text-slate-400">Est. Monthly*</span>
                    <span className="text-gold-400 font-bold">{tier.payment}/mo</span>
                  </div>
                </div>
                <p className="text-slate-600 text-xs">*Based on $10,000 project estimate.</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-forest-950 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {BENEFITS.map((b) => (
              <div key={b} className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-gold-500 shrink-0" />
                <span className="text-slate-300 text-sm">{b}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Process */}
      <section className="bg-forest-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="font-display font-bold text-white text-3xl sm:text-4xl text-center mb-12">
              Getting approved is fast
            </h2>
          </Reveal>
          <Reveal className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS.map((step) => (
              <div key={step.step} className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6">
                <div className="font-display font-bold text-gold-500/25 text-5xl mb-4 leading-none">{step.step}</div>
                <h3 className="font-display font-bold text-white text-lg mb-2">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-forest-950 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="font-display font-bold text-white text-3xl text-center mb-10">
              Financing FAQ
            </h2>
          </Reveal>
          <Reveal>
            <FaqAccordion items={FAQS} outputSchema schemaPageName="Roof Financing FAQ" />
          </Reveal>
        </div>
      </section>

      <InlineCta
        heading="Check your rate in 60 seconds."
        subtext="Soft pull only. Same-day decisions. No commitment required."
        primaryLabel="Check My Rate"
        primaryHref="/#contact"
      />

      <Footer />
    </>
  )
}
