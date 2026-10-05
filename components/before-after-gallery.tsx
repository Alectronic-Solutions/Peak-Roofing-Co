'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/ui/reveal'
import { CountUp } from '@/components/ui/count-up'
import { BeforeAfterSlider } from '@/components/ui/before-after-slider'
import { YEARS_IN_BUSINESS, ROOFS_COMPLETED_DISPLAY, RATING, asset } from '@/lib/company'

/** Each pair shows the kind of roof we tear off next to what we install in its place. */
const PROJECTS = [
  {
    id: 1,
    label: 'Shingle replacement',
    type: 'Curled 3-tab → architectural shingles',
    detail: 'Cracked, curling shingles that let water under the laps. Replaced with GAF Timberline HDZ.',
    before: asset('/images/ba-shingle-before.jpg'),
    after: asset('/images/ba-shingle-after.jpg'),
    beforeAlt: 'Old brown asphalt shingles, curled and cracked along the edges',
    afterAlt: 'Close-up of new dark architectural asphalt shingles',
  },
  {
    id: 2,
    label: 'Flat roof replacement',
    type: 'Split membrane → new membrane',
    detail: 'A cracked, patched flat roof with an open hole, replaced with a new fully adhered membrane.',
    before: asset('/images/ba-flat-before.jpg'),
    after: asset('/images/ba-flat-after.jpg'),
    beforeAlt: 'Cracked flat roof membrane with a hole worn through',
    afterAlt: 'Roofer unrolling a new membrane across a flat roof',
  },
  {
    id: 3,
    label: 'Re-roof after moss damage',
    type: 'Moss-worn shingles → fresh install',
    detail: 'Moss holds moisture against the shingles and lifts the edges. Tear-off, new underlayment, new roof.',
    before: asset('/images/ba-moss-before.jpg'),
    after: asset('/images/ba-moss-after.jpg'),
    beforeAlt: 'Moss growing across an old asphalt shingle roof',
    afterAlt: 'Roofer nailing new shingles over synthetic underlayment',
  },
]

const STATS = [
  { value: ROOFS_COMPLETED_DISPLAY, label: 'Roofs Completed' },
  { value: String(YEARS_IN_BUSINESS), label: 'Years in Business' },
  { value: '1,200+', label: 'Insurance Claims Filed' },
  { value: RATING, label: 'Average rating (of 5)' },
]

function SliderCard({
  project,
  tall = false,
}: {
  project: (typeof PROJECTS)[0]
  tall?: boolean
}) {
  const heightClass = tall ? 'h-full min-h-[340px] sm:min-h-[420px] lg:min-h-[520px]' : 'h-64 lg:h-72'

  return (
    <div className={`relative overflow-hidden rounded-2xl group ${tall ? 'row-span-2' : ''}`}>
      <div className={`relative w-full ${heightClass}`}>
        {/* Absolute so the slider fills the card even when its height comes from min-height (tall card). */}
        <div className="absolute inset-0">
          <BeforeAfterSlider
            beforeSrc={project.before}
            afterSrc={project.after}
            beforeAlt={project.beforeAlt}
            afterAlt={project.afterAlt}
            ariaLabel={`Compare: ${project.type}`}
            initialPosition={55}
          />
        </div>

        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none" />

        {/* Before/After labels */}
        <div className="absolute top-4 left-4 pointer-events-none">
          <span className="text-xs font-bold uppercase tracking-wider text-white/80 bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-md">
            What we find
          </span>
        </div>
        <div className="absolute top-4 right-4 pointer-events-none">
          <span className="text-xs font-bold uppercase tracking-wider text-gold-400 bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-md border border-gold-400/30">
            What we install
          </span>
        </div>

        {/* Project info */}
        <div className="absolute bottom-0 left-0 right-0 p-5 pointer-events-none">
          <p className="text-[10px] text-gold-400 font-bold uppercase tracking-widest mb-1">{project.type}</p>
          <p className="text-white font-display font-semibold text-base leading-tight">{project.label}</p>
          <p className="text-slate-300 text-xs mt-1 leading-relaxed max-w-sm">{project.detail}</p>
        </div>
      </div>
    </div>
  )
}

export function BeforeAfterGallery() {
  return (
    <section id="gallery" className="py-16 sm:py-20 lg:py-28 bg-forest-900">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* Header */}
        <Reveal className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 lg:mb-14">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-gold-400 text-xs font-bold uppercase tracking-[0.18em]">
                Our Work
              </span>
            </div>
            <h2 className="font-display text-4xl lg:text-[3.25rem] font-bold text-white leading-[1.08] tracking-tight">
              Before &amp; After
            </h2>
            <p className="mt-4 text-slate-300 max-w-md text-base leading-relaxed">
              Drag the slider to compare the roofs we tear off with what goes back on. Every install carries our{' '}
              <span className="text-white font-medium">10-year workmanship warranty</span>.
            </p>
          </div>
          <Link
            href="/gallery/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gold-400 hover:text-gold-300 transition-colors group flex-shrink-0"
          >
            See all projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </Link>
        </Reveal>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
          <Reveal className="lg:col-span-1 lg:row-span-2 h-full">
            <SliderCard project={PROJECTS[0]} tall />
          </Reveal>
          <Reveal delay={100} className="lg:col-span-1">
            <SliderCard project={PROJECTS[1]} />
          </Reveal>
          <Reveal delay={200} className="lg:col-span-1">
            <SliderCard project={PROJECTS[2]} />
          </Reveal>

          {/* Stats bar */}
          <Reveal delay={120} className="md:col-span-2 lg:col-span-2 h-full">
            <div className="h-full bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6 lg:p-8 flex flex-wrap items-center justify-around gap-6">
              {STATS.map(({ value, label }) => (
                <div key={label} className="text-center min-w-[120px] flex-1">
                  <p className="font-display text-[2.25rem] font-bold text-gold-400 leading-none">
                    <CountUp value={value} />
                  </p>
                  <p className="text-slate-300 text-sm mt-2 leading-tight">{label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
