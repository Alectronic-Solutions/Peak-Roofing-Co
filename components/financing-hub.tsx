'use client'

import { useState } from 'react'
import { Slider } from '@/components/ui/slider'
import { ArrowRight } from 'lucide-react'
import { Icon3D } from '@/components/ui/icon-3d'
import { Reveal } from '@/components/ui/reveal'

const FINANCING_TIERS = [
  {
    name: '5-year plan',
    apr: 12.9,
    aprDisplay: '12.9%',
    term: '60 mo.',
    termFull: '60 months / 5 years',
    minCredit: '580+',
    badge: null,
    highlight: false,
  },
  {
    name: '10-year plan',
    apr: 9.9,
    aprDisplay: '9.9%',
    term: '120 mo.',
    termFull: '120 months / 10 years',
    minCredit: '640+',
    badge: 'Most Popular',
    highlight: true,
  },
  {
    name: '15-year plan',
    apr: 6.9,
    aprDisplay: '6.9%',
    term: '180 mo.',
    termFull: '180 months / 15 years',
    minCredit: '720+',
    badge: 'Best Rate',
    highlight: false,
  },
]

const COST_PER_SQFT = 4.5

function calcMonthlyPayment(principal: number, annualRate: number, months: number): number {
  if (annualRate === 0) return principal / months
  const r = annualRate / 100 / 12
  return (principal * r * Math.pow(1 + r, months)) / (Math.pow(1 + r, months) - 1)
}

export function FinancingHub() {
  const [sqft, setSqft] = useState([1800])
  const [selectedTier, setSelectedTier] = useState(1)

  const principal = sqft[0] * COST_PER_SQFT
  const tier = FINANCING_TIERS[selectedTier]
  const monthly = calcMonthlyPayment(principal, tier.apr, parseInt(tier.term))

  return (
    <section id="financing" className="py-16 sm:py-20 lg:py-28 bg-forest-950">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* Header */}
        <Reveal className="max-w-2xl mb-10 lg:mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-gold-400 text-xs font-bold uppercase tracking-[0.18em]">
              Flexible Financing
            </span>
          </div>
          <h2 className="font-display text-4xl lg:text-[3.25rem] font-bold text-white leading-[1.08] tracking-tight">
            A New Roof for{' '}
            <span className="text-gold-400">${Math.round(monthly)}/month</span>
          </h2>
          <p className="mt-5 text-slate-300 text-lg leading-relaxed">
            We compare offers from 12 lenders and show you all of them side by side. Checking your rate is a soft pull
            and does not affect your credit score.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-[1fr_400px] gap-8 lg:gap-12 items-start">

          {/* Left: Calculator + tiers */}
          <div className="space-y-6">

            {/* Calculator */}
            <Reveal className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-7 lg:p-8">
              <div className="flex items-center gap-2 mb-8">
                <Icon3D name="calculator" size={34} />
                <span className="text-white font-semibold">Payment Estimator</span>
              </div>

              <div className="flex justify-between items-baseline mb-5">
                <span className="text-slate-300 text-sm">Roof Size</span>
                <span className="font-display text-3xl font-bold text-white">
                  {sqft[0].toLocaleString()}{' '}
                  <span className="text-lg text-slate-400 font-normal">sq ft</span>
                </span>
              </div>

              <Slider
                value={sqft}
                onValueChange={setSqft}
                min={500}
                max={5000}
                step={100}
                className="mb-3 [&_[role=slider]]:bg-gold-500 [&_[role=slider]]:border-gold-600 [&_[role=slider]]:w-5 [&_[role=slider]]:h-5 [&_[role=slider]]:shadow-[0_0_12px_rgba(245,158,11,0.5)] [&_[role=slider]]:cursor-pointer [&_.bg-primary]:bg-gold-500"
                aria-label="Roof size in square feet"
              />
              <div className="flex justify-between text-slate-400 text-xs mb-8">
                <span>500 sq ft</span>
                <span>5,000 sq ft</span>
              </div>

              {/* Metric row */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                <div className="bg-white/[0.04] rounded-xl p-4 text-center">
                  <p className="text-slate-400 text-[11px] mb-1.5 uppercase tracking-wider">Project Cost</p>
                  <p className="font-display text-lg font-bold text-white">
                    ${principal.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                  </p>
                </div>
                <div className="bg-white/[0.04] rounded-xl p-4 text-center ring-1 ring-inset ring-gold-400/30">
                  <p className="text-slate-400 text-[11px] mb-1.5 uppercase tracking-wider">Monthly</p>
                  <p className="font-display text-lg font-bold text-gold-400">
                    ${Math.round(monthly)}/mo
                  </p>
                </div>
                <div className="bg-white/[0.04] rounded-xl p-4 text-center">
                  <p className="text-slate-400 text-[11px] mb-1.5 uppercase tracking-wider">APR (OAC)</p>
                  <p className="font-display text-lg font-bold text-white">{tier.aprDisplay}</p>
                </div>
              </div>

              <p className="text-slate-400 text-[11px] text-center mt-4">
                Estimates only. Final rates based on credit approval. $4.50/sq ft avg. {tier.termFull} shown.
              </p>
            </Reveal>

            {/* Tier selector */}
            <Reveal delay={100} className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {FINANCING_TIERS.map((t, i) => (
                <button
                  key={t.name}
                  onClick={() => setSelectedTier(i)}
                  aria-pressed={i === selectedTier}
                  className={`relative rounded-xl p-4 text-left border transition-all duration-300 ${
                    i === selectedTier
                      ? 'bg-gold-400/10 border-gold-400/50 shadow-[0_0_24px_rgba(245,158,11,0.12)]'
                      : 'bg-white/[0.04] border-white/[0.08] hover:bg-white/[0.06] hover:border-white/[0.14]'
                  }`}
                >
                  {t.badge && (
                    <span className="absolute -top-2.5 left-3 text-[10px] font-bold uppercase tracking-wider bg-gold-500 text-forest-950 px-2 py-0.5 rounded-full">
                      {t.badge}
                    </span>
                  )}
                  <p className="font-display text-xl font-bold text-gold-400 mt-1">{t.aprDisplay}</p>
                  <p className="text-slate-400 text-xs mt-0.5">APR</p>
                  <p className="text-white text-sm font-semibold mt-2">{t.name}</p>
                  <p className="text-slate-400 text-xs">Credit {t.minCredit}</p>
                </button>
              ))}
            </Reveal>
          </div>

          {/* Right: Trust panel */}
          <div className="space-y-5">

            {/* Benefits */}
            <Reveal delay={150} className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-7">
              <h3 className="font-display text-lg font-bold text-white mb-5">Every Plan Includes</h3>
              <ul className="space-y-4">
                {[
                  { title: 'No prepayment penalty', desc: 'Pay the loan off early whenever you like, with no fee.' },
                  { title: 'Payments start after the job', desc: 'Your first payment is due 30 days after the roof is finished.' },
                  { title: 'Same-day decisions', desc: 'Most applications get an answer within minutes during business hours.' },
                  { title: '12 lenders compared', desc: 'You see every offer we get back, side by side, and pick the one that fits.' },
                ].map((item) => (
                  <li key={item.title} className="flex gap-4">
                    <Icon3D name="check" size={22} className="mt-px" />
                    <div>
                      <p className="text-white text-sm font-semibold">{item.title}</p>
                      <p className="text-slate-300 text-xs mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* CTA */}
            <Reveal delay={220}>
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 w-full bg-gold-500 hover:bg-gold-400 text-forest-950 font-bold
                           min-h-[56px] rounded-xl shadow-[0_4px_24px_rgba(245,158,11,0.3)]
                           hover:shadow-[0_4px_32px_rgba(245,158,11,0.5)] transition-all duration-300 text-[15px]"
              >
                Check my rate (no credit impact)
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
              <p className="text-slate-400 text-[11px] text-center mt-4">
                Loans are made by third-party lenders, not Peak Roofing Co. All financing is subject to credit approval. Rates and payments shown are examples.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
