import Link from 'next/link'
import { Shield, Star, Award, ArrowRight, CheckCircle, PhoneCall } from 'lucide-react'
import { LeadCaptureForm } from '@/components/lead-capture-form'
import { HeroVideoBackground } from '@/components/hero-video-background'
import { YEARS_IN_BUSINESS, PHONE_DISPLAY, PHONE_HREF, RATING, REVIEW_COUNT, LICENSE } from '@/lib/company'

const TRUST_ITEMS = [
  { icon: Shield, label: 'Licensed & Insured', sub: LICENSE },
  { icon: Award, label: 'GAF Master Elite®', sub: 'Top 2% nationally' },
  { icon: Star, label: `${YEARS_IN_BUSINESS} Years Local`, sub: 'Family owned since 1987' },
]

const QUICK_FACTS = [
  'Free drone inspection with every estimate',
  '10-year written workmanship warranty',
  'Storm crews on site in under 2 hours',
]

/** Load-time entrance (CSS only) so hero copy paints with the first frame instead of waiting on hydration. */
const rise = (delay: number) => ({ style: { animationDelay: `${delay}ms` } })

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-forest-900" aria-labelledby="hero-heading">
      <HeroVideoBackground className="absolute inset-x-0 top-0 h-[100svh] min-h-[640px] lg:inset-y-0 lg:h-auto lg:min-h-0">
        {/* Mobile: video owns the first screen, then dissolves into the form below. */}
        <div className="absolute inset-0 bg-gradient-to-b from-forest-950/75 via-forest-950/45 to-forest-900 lg:hidden" />
        {/* Desktop: copy side darkened, video side open. */}
        <div className="absolute inset-0 hidden bg-gradient-to-r from-forest-950/95 via-forest-950/70 to-forest-950/25 lg:block" />
        <div className="absolute inset-x-0 bottom-0 hidden h-48 bg-gradient-to-t from-forest-900 to-transparent lg:block" />
        <div className="grain absolute inset-0 pointer-events-none" />
      </HeroVideoBackground>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 pt-[136px] sm:px-8 sm:pt-36 lg:flex lg:min-h-[100svh] lg:items-center lg:px-10 lg:pb-24 lg:pt-40">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[1fr_440px] lg:gap-16 xl:gap-20">
          {/* Copy */}
          <div className="max-w-2xl">
            <a
              href="#reviews"
              {...rise(0)}
              className="animate-rise inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-forest-950/40 py-1.5 pl-2 pr-4 text-xs text-slate-200 backdrop-blur-md transition-colors hover:border-gold-400/40"
            >
              <span className="flex items-center gap-0.5 rounded-full bg-gold-400/15 px-2 py-0.5" aria-hidden="true">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="h-3 w-3 fill-gold-400 text-gold-400" />
                ))}
              </span>
              <span>
                <strong className="font-semibold text-white">{RATING}/5</strong> from {REVIEW_COUNT} Springfield homeowners
              </span>
            </a>

            <h1
              id="hero-heading"
              {...rise(80)}
              className="animate-rise mt-6 font-display text-[clamp(2.6rem,7vw,4.5rem)] font-bold leading-[1.02] tracking-tight text-white"
            >
              Your Roof, Done{' '}
              <span className="relative inline-block whitespace-nowrap text-gold-400">
                Right.
                <svg
                  viewBox="0 0 200 12"
                  preserveAspectRatio="none"
                  className="absolute -bottom-1.5 left-0 h-2.5 w-full text-gold-400/60"
                  aria-hidden="true"
                >
                  <path d="M2 9 C 50 3, 150 3, 198 8" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="animate-draw" />
                </svg>
              </span>
              <span className="block text-slate-300">The First Time.</span>
            </h1>

            <p {...rise(160)} className="animate-rise mt-6 max-w-xl text-base leading-relaxed text-slate-200 sm:text-lg sm:leading-[1.7]">
              Storm damage or a planned replacement, Springfield has trusted Peak for{' '}
              <span className="font-medium text-white">{YEARS_IN_BUSINESS} years</span>. One named foreman, a drone-documented
              estimate, and a warranty in writing.
            </p>

            <div {...rise(240)} className="animate-rise mt-8 flex flex-col gap-3 min-[420px]:flex-row min-[420px]:items-center">
              <a
                href="#estimate"
                className="group inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xl bg-gold-500 px-6 text-[15px] font-bold text-forest-950 shadow-[0_8px_30px_rgba(245,158,11,0.35)] transition hover:-translate-y-0.5 hover:bg-gold-400 hover:shadow-[0_12px_38px_rgba(245,158,11,0.5)]"
              >
                Get my free estimate
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </a>
              <a
                href={PHONE_HREF}
                className="inline-flex min-h-[52px] items-center justify-center gap-2.5 rounded-xl border border-white/20 bg-white/[0.08] px-6 text-[15px] font-semibold text-white backdrop-blur-md transition hover:border-white/35 hover:bg-white/[0.14]"
              >
                <PhoneCall className="h-4 w-4 text-gold-400" aria-hidden="true" />
                {PHONE_DISPLAY}
              </a>
            </div>

            <ul {...rise(320)} className="animate-rise mt-8 grid gap-2.5 sm:grid-cols-1" aria-label="Key benefits">
              {QUICK_FACTS.map((fact) => (
                <li key={fact} className="flex items-center gap-3">
                  <CheckCircle className="h-4 w-4 flex-shrink-0 text-gold-400" aria-hidden="true" />
                  <span className="text-sm text-slate-200">{fact}</span>
                </li>
              ))}
            </ul>

            <ul {...rise(400)} className="animate-rise mt-10 grid grid-cols-1 gap-3 min-[480px]:grid-cols-3" aria-label="Credentials">
              {TRUST_ITEMS.map((item) => (
                <li
                  key={item.label}
                  className="flex items-center gap-3 rounded-xl border border-white/[0.1] bg-forest-950/40 px-3.5 py-3 backdrop-blur-md"
                >
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg border border-gold-400/25 bg-gold-400/10">
                    <item.icon className="h-4 w-4 text-gold-400" aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[13px] font-semibold leading-tight text-white">{item.label}</span>
                    <span className="mt-0.5 block truncate text-[11px] text-slate-400">{item.sub}</span>
                  </span>
                </li>
              ))}
            </ul>

            <p {...rise(460)} className="animate-rise mt-6 hidden text-sm text-slate-300 lg:block">
              Prefer to look first?{' '}
              <Link href="/gallery/" className="font-semibold text-gold-300 underline-offset-4 hover:underline">
                Browse recent projects
              </Link>
            </p>
          </div>

          {/* Lead form */}
          <div id="estimate" {...rise(200)} className="animate-rise w-full scroll-mt-28">
            <LeadCaptureForm />
          </div>
        </div>
      </div>
    </section>
  )
}
