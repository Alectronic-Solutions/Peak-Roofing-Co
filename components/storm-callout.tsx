'use client'

import { useRef, useEffect } from 'react'
import { Phone, ArrowRight, Clock, Shield, DollarSign } from 'lucide-react'
import { Reveal } from '@/components/ui/reveal'
import { CountUp } from '@/components/ui/count-up'

const STEPS = [
  {
    num: '01',
    title: 'Free Drone Inspection',
    desc: 'We deploy an FAA-certified drone within 2 hours of your call. Full roof scan, no ladders, no obligation.',
  },
  {
    num: '02',
    title: 'Damage Report & Estimate',
    desc: 'You receive a detailed photo report and itemized estimate - the same documentation your insurer needs.',
  },
  {
    num: '03',
    title: 'We Handle Your Claim',
    desc: 'Our licensed adjusters file and negotiate your claim directly with your insurance company.',
  },
  {
    num: '04',
    title: '$0 Out of Pocket',
    desc: 'We complete the repairs. On average, our homeowners pay nothing out of pocket. We absorb the deductible gap.',
  },
]

export function StormCallout() {
  const imgRef = useRef<HTMLImageElement>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const img = imgRef.current
    const section = sectionRef.current
    if (!img || !section) return

    let rafId: number
    const onScroll = () => {
      rafId = requestAnimationFrame(() => {
        const rect = section.getBoundingClientRect()
        const viewH = window.innerHeight
        // progress: 0 when bottom of section enters viewport, 1 when top leaves
        const progress = 1 - (rect.bottom / (viewH + rect.height))
        const offset = progress * 120 // px shift range
        img.style.transform = `translateY(${offset}px)`
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <section
      id="storm"
      ref={sectionRef}
      className="relative py-0 overflow-hidden"
      aria-label="Storm damage emergency response"
    >
      {/* Parallax background */}
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          ref={imgRef}
          src="https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=1800&q=80&fit=crop"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-[120%] object-cover object-center will-change-transform -top-[10%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-950/97 via-forest-950/92 to-forest-950/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-transparent to-forest-950/60" />
        <div className="absolute inset-0 bg-forest-950/40" />
      </div>

      {/* Top red accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-red-500/70 to-transparent" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-16 sm:py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">

          {/* Left: Copy */}
          <Reveal>
            {/* Alert badge */}
            <div className="inline-flex items-center gap-2.5 bg-red-500/10 border border-red-500/30 rounded-full px-4 py-2 mb-8 max-w-full">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse flex-shrink-0" aria-hidden="true" />
              <span className="text-red-400 font-bold text-xs uppercase tracking-[0.12em] sm:tracking-[0.18em] leading-snug">
                Storm Damage Alert: Act Before Your Claim Window Closes
              </span>
            </div>

            <h2 className="font-display text-4xl lg:text-[3.25rem] font-bold text-white leading-[1.08] tracking-tight mb-6">
              Did the Last Storm{' '}
              <span className="text-red-400">Hit Your Roof?</span>
            </h2>

            <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-xl">
              Hail and wind damage isn't always visible from the ground. Our drone
              inspection finds hidden structural damage before it becomes a{' '}
              <span className="text-white font-semibold">$40,000 leak</span> - and before
              your insurance claim window expires.
            </p>

            {/* Key stats */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-10">
              {[
                { icon: Clock, stat: '< 2 hrs', label: 'Response Time' },
                { icon: Shield, stat: '100%', label: 'Claims Handled' },
                { icon: DollarSign, stat: '$0', label: 'Avg. Out-of-Pocket' },
              ].map(({ icon: Icon, stat, label }) => (
                <div key={label} className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-4 text-center">
                  <Icon className="w-4 h-4 text-red-400 mx-auto mb-2" aria-hidden="true" />
                  <p className="font-display text-xl font-bold text-white">
                    <CountUp value={stat} />
                  </p>
                  <p className="text-slate-300 text-xs mt-0.5">{label}</p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-500
                           text-white font-bold px-7 py-4 rounded-xl shadow-[0_4px_24px_rgba(220,38,38,0.35)]
                           hover:shadow-[0_4px_32px_rgba(220,38,38,0.5)] transition-all duration-300 text-sm"
              >
                Schedule Free Drone Inspection
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href="tel:+15555550100"
                className="inline-flex items-center justify-center gap-2 border border-white/20 text-white
                           hover:bg-white/[0.06] hover:border-white/30 font-semibold px-7 py-4 rounded-xl
                           transition-all duration-200 text-sm"
              >
                <Phone className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                Call Storm Hotline
              </a>
            </div>
          </Reveal>

          {/* Right: Process steps */}
          <Reveal delay={150}>
            <p className="text-slate-200 text-xs font-bold uppercase tracking-[0.18em] mb-6">
              How the Process Works
            </p>
            <div className="space-y-0">
              {STEPS.map((step, i) => (
                <div key={step.num} className="relative flex gap-5 pb-8 last:pb-0">
                  {/* Connecting line */}
                  {i < STEPS.length - 1 && (
                    <div
                      className="absolute left-5 top-10 bottom-0 w-px bg-gradient-to-b from-red-500/40 to-transparent"
                      aria-hidden="true"
                    />
                  )}
                  {/* Step number circle */}
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-950/60 border border-red-500/40 flex items-center justify-center z-10">
                    <span className="font-display text-xs font-bold text-red-400">{step.num}</span>
                  </div>
                  <div className="pt-1.5">
                    <h3 className="font-display text-base font-bold text-white mb-1.5">{step.title}</h3>
                    <p className="text-slate-200 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Disclaimer */}
            <div className="mt-8 p-4 bg-white/[0.04] border border-white/[0.08] rounded-xl">
              <p className="text-slate-200 text-xs leading-relaxed">
                <span className="text-white font-semibold">Free 30-Point Inspection. No obligation.</span>{' '}
                Most insurance policies have a 1–2 year claim window for storm damage.
                Don't wait until it's too late.
              </p>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-red-500/50 to-transparent" aria-hidden="true" />
    </section>
  )
}
