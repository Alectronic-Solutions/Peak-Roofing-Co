'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Clock, MapPin } from 'lucide-react'
import { Reveal } from '@/components/ui/reveal'
import { CITIES } from '@/lib/cities'

/** Bearing in degrees (0 = east, -90 = north) for placing each town on the coverage diagram. */
const BEARING: Record<string, number> = {
  springfield: 0,
  westbrook: 195,
  chatham: 118,
  sherman: -82,
  auburn: 100,
  rochester: 12,
  riverton: -35,
  'lakeview-heights': 48,
}

const MAX_MILES = 35
const R = 175
/** Offset scale keeps close-in towns from crowding the HQ marker. */
const radius = (miles: number) => 45 + (miles / MAX_MILES) * (R - 45)

function position(slug: string, miles: number) {
  const r = radius(miles)
  const a = (BEARING[slug] * Math.PI) / 180
  return { x: 200 + r * Math.cos(a), y: 200 + r * Math.sin(a) }
}

export function ServiceAreasSection() {
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <section id="service-areas" className="relative overflow-hidden bg-forest-900 py-16 sm:py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_480px] lg:gap-16 lg:px-10">
        <div>
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-gold-400">Service Areas</span>
            <h2 className="mt-4 font-display text-4xl font-bold leading-[1.08] tracking-tight text-white lg:text-[3.25rem]">
              Local crews,
              <span className="block text-slate-400">minutes from your door.</span>
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-300">
              We work within 35 miles of Springfield across Sangamon County and its neighbors. Crews are staged so a storm
              call never waits on a cross-county drive.
            </p>
          </Reveal>

          <Reveal as="ul" delay={100} className="mt-8 grid grid-cols-1 gap-2 min-[400px]:grid-cols-2">
            {CITIES.map((city) => (
              <li key={city.slug}>
                <Link
                  href={`/service-areas/${city.slug}/`}
                  onMouseEnter={() => setHovered(city.slug)}
                  onMouseLeave={() => setHovered(null)}
                  onFocus={() => setHovered(city.slug)}
                  onBlur={() => setHovered(null)}
                  className={`group flex min-h-[52px] items-center justify-between gap-3 rounded-xl border px-4 py-2.5 transition-all ${
                    hovered === city.slug
                      ? 'border-gold-400/40 bg-gold-400/10'
                      : 'border-white/[0.08] bg-white/[0.03] hover:border-white/20'
                  }`}
                >
                  <span className="flex items-center gap-2.5">
                    <MapPin className="h-4 w-4 flex-shrink-0 text-gold-400" aria-hidden="true" />
                    <span className="text-sm font-semibold text-white">{city.name}</span>
                  </span>
                  <span className="flex items-center gap-1 text-xs text-slate-400">
                    <Clock className="h-3 w-3" aria-hidden="true" />
                    {city.avgResponseMinutes} min
                  </span>
                </Link>
              </li>
            ))}
          </Reveal>

          <Reveal delay={160} className="mt-6">
            <Link
              href="/service-areas/"
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-gold-300 hover:text-gold-400"
            >
              Full coverage map &amp; county list
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>

        {/* Coverage diagram */}
        <Reveal delay={120} className="relative mx-auto w-full max-w-[480px]">
          <svg viewBox="0 0 400 400" className="w-full" role="img" aria-label="Coverage diagram: towns served within 35 miles of Springfield">
            <defs>
              <radialGradient id="sa-glow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.18" />
                <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="sa-sweep" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#FBBF24" stopOpacity="0" />
                <stop offset="100%" stopColor="#FBBF24" stopOpacity="0.14" />
              </linearGradient>
            </defs>
            <circle cx="200" cy="200" r="195" fill="url(#sa-glow)" />
            {[10, 20, 35].map((mi) => (
              <g key={mi}>
                <circle
                  cx="200"
                  cy="200"
                  r={radius(mi)}
                  fill="none"
                  stroke="rgba(251,191,36,0.22)"
                  strokeDasharray={mi === 35 ? '4 6' : undefined}
                />
                {/* Ring labels sit on the empty north-west diagonal. */}
                <text
                  x={200 - radius(mi) * Math.SQRT1_2 + 3}
                  y={200 - radius(mi) * Math.SQRT1_2 - 3}
                  className="fill-slate-500 text-[9px]"
                >
                  {mi} mi
                </text>
              </g>
            ))}
            <line x1="200" y1="20" x2="200" y2="380" stroke="rgba(255,255,255,0.05)" />
            <line x1="20" y1="200" x2="380" y2="200" stroke="rgba(255,255,255,0.05)" />

            {/* Radar sweep */}
            <g className="origin-center motion-safe:animate-[spin_8s_linear_infinite]" style={{ transformOrigin: '200px 200px' }}>
              <path d={`M200 200 L${200 + R} 200 A${R} ${R} 0 0 0 ${200 + R * Math.cos(-0.6)} ${200 + R * Math.sin(-0.6)} Z`} fill="url(#sa-sweep)" />
            </g>

            {CITIES.filter((c) => c.slug !== 'springfield').map((city) => {
              const { x, y } = position(city.slug, city.milesFromHQ)
              const active = hovered === city.slug
              return (
                <g key={city.slug}>
                  <line x1="200" y1="200" x2={x} y2={y} stroke={active ? 'rgba(251,191,36,0.6)' : 'rgba(251,191,36,0.12)'} />
                  <circle cx={x} cy={y} r={active ? 11 : 0} fill="rgba(245,158,11,0.2)" className="transition-all duration-300" />
                  <circle cx={x} cy={y} r={active ? 5.5 : 4} fill={active ? '#FCD34D' : '#FBBF24'} className="transition-all duration-300" />
                  <text
                    x={x}
                    y={y - 11}
                    textAnchor="middle"
                    className={`text-[11px] font-semibold transition-colors ${active ? 'fill-white' : 'fill-slate-300'}`}
                  >
                    {city.name}
                  </text>
                </g>
              )
            })}

            {/* HQ */}
            <circle cx="200" cy="200" r="16" fill="rgba(245,158,11,0.15)" className="motion-safe:animate-pulse" />
            <circle cx="200" cy="200" r="7" fill="#F59E0B" stroke="#04140E" strokeWidth="3" />
            <text x="200" y="180" textAnchor="middle" className="fill-white text-[12px] font-bold">
              Springfield HQ
            </text>
          </svg>
        </Reveal>
      </div>
    </section>
  )
}
