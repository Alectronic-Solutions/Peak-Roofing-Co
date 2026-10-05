import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/ui/reveal'
import { SERVICE_NAV } from '@/lib/navigation'
import { SERVICES as SERVICE_DATA } from '@/lib/services'

const DETAILS: Record<string, { blurb: string; detail: string }> = {
  'roof-replacement': {
    blurb: 'Complete tear-off and install with GAF shingles, ice & water barrier, new flashing, and ridge ventilation.',
    detail: 'From $4.50/sq ft',
  },
  'storm-damage': {
    blurb: 'Hail, wind, and impact specialists. Same-day tarping, then we document everything your insurer needs.',
    detail: 'Deductible-only on approved claims',
  },
  'drone-inspections': {
    blurb: 'FAA-certified pilots cover every inch of your roof in under 30 minutes. 4K photo report in 24 hours.',
    detail: 'Free with estimate',
  },
  'insurance-claims': {
    blurb: 'Our on-staff licensed adjuster files, attends the inspection, and supplements anything that was missed.',
    detail: 'No extra fee',
  },
  'commercial-roofing': {
    blurb: 'TPO, EPDM, and modified bitumen for flat and low-slope roofs, scheduled around your business hours.',
    detail: 'All flat roof systems',
  },
  financing: {
    blurb: 'Rates from 6.9% APR across a 12-lender network. Same-day approval, and checking never touches your credit.',
    detail: 'As low as 6.9% APR',
  },
}

const slugOf = (href: string) => href.split('/').filter(Boolean).pop() ?? ''
const imageFor = (slug: string) =>
  SERVICE_DATA.find((s) => s.slug === slug)?.heroImage.replace(/w=\d+/, 'w=900') ?? ''

export function ServicesSection() {
  return (
    <section id="services" className="py-16 sm:py-20 lg:py-28 bg-forest-900">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <Reveal className="mb-10 flex flex-col gap-6 lg:mb-14 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="text-gold-400 text-xs font-bold uppercase tracking-[0.18em]">What We Do</span>
            <h2 className="mt-4 font-display text-4xl lg:text-[3.25rem] font-bold text-white leading-[1.08] tracking-tight">
              Every Roofing Service,
              <span className="block text-slate-400">One Accountable Crew.</span>
            </h2>
          </div>
          <p className="max-w-md text-slate-300 text-base leading-relaxed lg:text-right">
            Emergency tarps to full commercial re-roofs. Licensed, insured, and backed by a written warranty.
          </p>
        </Reveal>

        {/* Phones: swipeable snap carousel. Tablet and up: grid. */}
        <div className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 scroll-px-5 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3 lg:gap-5">
          {SERVICE_NAV.map((service, i) => {
            const slug = slugOf(service.href)
            const Icon = service.icon!
            const { blurb, detail } = DETAILS[slug]
            return (
              <Reveal key={service.href} delay={(i % 3) * 80} className="h-full w-[84%] flex-shrink-0 snap-start sm:w-auto">
                <Link
                  href={service.href}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-forest-850 transition-all duration-500 hover:-translate-y-1 hover:border-gold-400/30 hover:shadow-[0_24px_60px_rgba(0,0,0,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={imageFor(slug)}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-850 via-forest-850/30 to-transparent" />
                    <span className="absolute left-5 top-5 font-display text-sm font-bold text-white/70">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-forest-950/50 text-white backdrop-blur-sm transition-all duration-300 group-hover:border-gold-400 group-hover:bg-gold-500 group-hover:text-forest-950">
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </div>

                  <div className="relative -mt-7 flex flex-1 flex-col px-6 pb-6">
                    <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-gold-400/30 bg-forest-800 shadow-lg">
                      <Icon className="h-5 w-5 text-gold-400" aria-hidden="true" />
                    </span>
                    <h3 className="font-display text-xl font-bold text-white transition-colors group-hover:text-gold-300">
                      {service.label}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-300">{blurb}</p>
                    <span className="mt-5 inline-flex w-fit items-center rounded-full border border-gold-400/20 bg-gold-400/10 px-3 py-1 text-xs font-semibold text-gold-300">
                      {detail}
                    </span>
                  </div>
                </Link>
              </Reveal>
            )
          })}
        </div>

        <p className="mt-3 text-center text-xs text-slate-400 sm:hidden" aria-hidden="true">Swipe to see all 6 services →</p>

        <Reveal delay={120} className="mt-8 sm:mt-10 flex flex-col items-start justify-between gap-5 rounded-2xl border border-white/[0.08] bg-white/[0.04] p-6 sm:flex-row sm:items-center sm:p-7">
          <div>
            <p className="font-semibold text-white">Not sure what you need?</p>
            <p className="mt-0.5 text-sm text-slate-300">We&apos;ll fly a drone over your roof and tell you, free and with zero obligation.</p>
          </div>
          <a
            href="#contact"
            className="inline-flex w-full flex-shrink-0 items-center justify-center gap-2 rounded-xl bg-gold-500 px-6 py-3.5 text-sm font-bold text-forest-950 shadow-[0_4px_20px_rgba(245,158,11,0.3)] transition-all duration-300 hover:bg-gold-400 hover:shadow-[0_4px_28px_rgba(245,158,11,0.5)] sm:w-auto"
          >
            Schedule Free Assessment
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
