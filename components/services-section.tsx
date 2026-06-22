import { Home, CloudLightning, Search, FileText, CreditCard, Building2, ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/ui/reveal'

const SERVICES = [
  {
    icon: Home,
    title: 'Roof Replacement',
    description: 'Complete tear-off and install with premium GAF shingles. Includes full debris removal, ice & water barrier, and ridge ventilation.',
    detail: 'Starting at $4.50/sq ft',
    href: '#contact',
  },
  {
    icon: CloudLightning,
    title: 'Storm Damage Repair',
    description: 'Hail, wind, and impact damage specialists. We work directly with your insurance adjuster to maximize your claim settlement.',
    detail: '$0 avg. out-of-pocket',
    href: '#storm',
  },
  {
    icon: Search,
    title: 'Drone Inspections',
    description: 'FAA-certified drone technology covers every inch of your roof in under 30 minutes. Detailed photo report included, no ladders required.',
    detail: 'Free with estimate',
    href: '#contact',
  },
  {
    icon: FileText,
    title: 'Insurance Claims',
    description: 'Our licensed public adjusters navigate your claim from first call to final check. Over 1,200 claims filed with 100% approval rate.',
    detail: '100% approval rate',
    href: '#contact',
  },
  {
    icon: CreditCard,
    title: 'Financing',
    description: 'Flexible payment plans from 12 lending partners. Rates as low as 6.9% APR with same-day approval and no credit impact to check.',
    detail: 'As low as 6.9% APR',
    href: '#financing',
  },
  {
    icon: Building2,
    title: 'Commercial Roofing',
    description: 'TPO, EPDM, and modified bitumen systems for flat and low-slope commercial properties. Preventive maintenance contracts available.',
    detail: 'All flat roof systems',
    href: '#contact',
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-16 sm:py-20 lg:py-28 bg-forest-900">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* Header */}
        <Reveal className="max-w-2xl mb-10 lg:mb-16">
          <div className="mb-4">
            <span className="text-gold-400 text-xs font-bold uppercase tracking-[0.18em]">
              What We Do
            </span>
          </div>
          <h2 className="font-display text-4xl lg:text-[3.25rem] font-bold text-white leading-[1.08] tracking-tight">
            Every Roofing Service<br />
            <span className="text-slate-400">Under One Roof</span>
          </h2>
          <p className="mt-5 text-slate-300 text-lg leading-relaxed">
            From emergency repairs to complete replacements. Licensed, insured, and guaranteed.
          </p>
        </Reveal>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06] rounded-2xl overflow-hidden border border-white/[0.08]">
          {SERVICES.map((service, i) => (
            <Reveal
              as="a"
              key={service.title}
              delay={(i % 3) * 80}
              href={service.href}
              className="group relative bg-forest-900 p-8 hover:bg-forest-800 transition-colors duration-300 flex flex-col"
            >
              {/* Icon */}
              <div className="w-11 h-11 rounded-xl bg-gold-400/10 border border-gold-400/25 flex items-center justify-center mb-5 group-hover:bg-gold-400/20 group-hover:border-gold-400/45 transition-all duration-300">
                <service.icon className="w-5 h-5 text-gold-400" aria-hidden="true" />
              </div>

              <h3 className="font-display text-lg font-bold text-white mb-2.5 group-hover:text-gold-300 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed flex-1">
                {service.description}
              </p>

              {/* Detail tag */}
              <div className="mt-5 flex items-center justify-between">
                <span className="text-xs font-semibold text-gold-300 bg-gold-400/10 border border-gold-400/20 rounded-full px-3 py-1">
                  {service.detail}
                </span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-gold-400 group-hover:translate-x-1 transition-all duration-200" aria-hidden="true" />
              </div>
            </Reveal>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <Reveal delay={120} className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 p-6 sm:p-7 bg-white/[0.04] border border-white/[0.08] rounded-2xl">
          <div>
            <p className="text-white font-semibold">Not sure what you need?</p>
            <p className="text-slate-300 text-sm mt-0.5">Our experts will assess your roof for free, no obligation whatsoever.</p>
          </div>
          <a
            href="#contact"
            className="w-full sm:w-auto flex-shrink-0 inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-400 text-forest-950 font-bold
                       px-6 py-3.5 rounded-xl shadow-[0_4px_20px_rgba(245,158,11,0.3)] hover:shadow-[0_4px_28px_rgba(245,158,11,0.5)]
                       transition-all duration-300 text-sm"
          >
            Schedule Free Assessment
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
