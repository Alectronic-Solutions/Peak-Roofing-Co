import { Shield, Star, Award, ArrowRight, CheckCircle } from 'lucide-react'
import { LeadCaptureForm } from '@/components/lead-capture-form'
import { Reveal } from '@/components/ui/reveal'

const TRUST_ITEMS = [
  { icon: Shield, label: 'Licensed & Insured', sub: 'State Lic. #RC-20847' },
  { icon: Star, label: '4.9 / 5 Stars', sub: '847 Google Reviews' },
  { icon: Award, label: 'GAF Master Elite®', sub: 'Top 2% Nationally' },
]

const QUICK_FACTS = [
  '20-Year Craftsmanship Warranty',
  '$0 avg. out-of-pocket on insurance claims',
  'Same-day storm inspections available',
]

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-forest-900">

      {/* Full-bleed background photo */}
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1800&q=90&fit=crop&crop=top"
          alt="Expert roofing team working on a residential home"
          className="w-full h-full object-cover object-center"
        />
        {/* Layered overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-forest-900 via-forest-900/85 to-forest-900/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-900 via-transparent to-forest-900/40" />
      </div>

      {/* Grain texture for premium feel */}
      <div
        className="absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
        }}
        aria-hidden="true"
      />

      {/* Left gold border accent */}
      <div className="absolute left-0 top-[15%] bottom-[15%] w-[3px] bg-gradient-to-b from-transparent via-gold-400 to-transparent opacity-60" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 w-full pt-24 sm:pt-28 pb-16 lg:pt-32 lg:pb-24">
        <div className="grid lg:grid-cols-[1fr_440px] gap-10 lg:gap-20 items-center">

          {/* Left: Copy */}
          <div className="max-w-2xl">

            {/* Eyebrow */}
            <Reveal className="flex items-center gap-3 mb-6">
              <span className="text-gold-400 text-xs font-bold uppercase tracking-[0.18em]">
                Springfield's #1 Rated Roofer Since 1987
              </span>
            </Reveal>

            {/* Headline */}
            <Reveal as="h1" delay={80} className="font-display font-bold text-white leading-[1.05] tracking-tight">
              <span className="block text-[clamp(2.4rem,5.5vw,4.25rem)]">Your Roof,</span>
              <span className="block text-[clamp(2.4rem,5.5vw,4.25rem)]">
                Done{' '}
                <span className="relative inline-block">
                  <span className="text-gold-400">Right.</span>
                  <span
                    className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gold-400/40 rounded-full"
                    aria-hidden="true"
                  />
                </span>
              </span>
              <span className="block text-[clamp(2.4rem,5.5vw,4.25rem)] text-slate-300">The First Time.</span>
            </Reveal>

            <Reveal as="p" delay={160} className="mt-7 text-slate-300 text-lg leading-[1.75] max-w-xl">
              Storm damage or planned replacement - we deliver{' '}
              <span className="text-white font-medium">industry-leading results</span> backed
              by 37 years of craftsmanship and a warranty that actually means something.
            </Reveal>

            {/* Quick fact checklist */}
            <Reveal as="ul" delay={240} className="mt-7 space-y-2.5" aria-label="Key benefits">
              {QUICK_FACTS.map((fact) => (
                <li key={fact} className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-gold-400 flex-shrink-0" aria-hidden="true" />
                  <span className="text-slate-200 text-sm">{fact}</span>
                </li>
              ))}
            </Reveal>

            {/* Trust badges */}
            <Reveal delay={320} className="mt-10 flex flex-wrap gap-3" role="list" aria-label="Credentials">
              {TRUST_ITEMS.map((item) => (
                <div
                  key={item.label}
                  role="listitem"
                  className="flex items-center gap-3 bg-white/[0.05] border border-white/[0.08]
                             rounded-xl px-4 py-3 backdrop-blur-sm hover:bg-white/[0.08]
                             hover:border-gold-400/30 hover:-translate-y-0.5 transition-all duration-300 cursor-default"
                >
                  <div className="w-8 h-8 rounded-lg bg-gold-400/10 border border-gold-400/25 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-4 h-4 text-gold-400" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold leading-none">{item.label}</p>
                    <p className="text-slate-400 text-xs mt-0.5">{item.sub}</p>
                  </div>
                </div>
              ))}
            </Reveal>

            {/* Secondary CTA row */}
            <Reveal delay={400} className="mt-8 flex items-center gap-6">
              <a
                href="#gallery"
                className="flex items-center gap-2 text-slate-300 hover:text-gold-300 text-sm font-medium transition-colors group"
              >
                View our work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </a>
              <div className="h-4 w-px bg-white/10" aria-hidden="true" />
              <a
                href="tel:+15555550100"
                className="flex items-center gap-2 px-4 py-2 rounded-md border border-white/20 bg-white/10 text-white text-sm font-medium hover:bg-white/20 transition-colors"
              >
                Or call us now
              </a>
            </Reveal>
          </div>

          {/* Right: Lead form */}
          <Reveal delay={200} className="w-full">
            <LeadCaptureForm />
          </Reveal>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-forest-900 to-transparent"
        aria-hidden="true"
      />
    </section>
  )
}
