'use client'

import { useState, useRef, useCallback } from 'react'
import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/ui/reveal'
import { CountUp } from '@/components/ui/count-up'

const PROJECTS = [
  {
    id: 1,
    label: 'Full Shingle Replacement',
    location: 'Westbrook Estates',
    year: '2024',
    type: 'GAF Timberline HDZ - Weathered Wood',
    before: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=85&fit=crop',
    after: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200&q=85&fit=crop',
    featured: true,
  },
  {
    id: 2,
    label: 'Hail Storm Repair',
    location: 'Maple Ridge',
    year: '2024',
    type: 'Insurance Claim - $0 Out-of-Pocket',
    before: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=85&fit=crop',
    after: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=900&q=85&fit=crop',
    featured: false,
  },
  {
    id: 3,
    label: 'Complete Tear-Off & Install',
    location: 'Lakeview Heights',
    year: '2023',
    type: 'Architectural Shingles + New Decking',
    before: 'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=900&q=85&fit=crop',
    after: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=900&q=85&fit=crop',
    featured: false,
  },
]

const STATS = [
  { value: '1,200+', label: 'Roofs Completed' },
  { value: '37', label: 'Years in Business' },
  { value: '$0', label: 'Avg. Out-of-Pocket' },
  { value: '4.9★', label: 'Google Rating' },
]

function SliderCard({
  project,
  tall = false,
}: {
  project: (typeof PROJECTS)[0]
  tall?: boolean
}) {
  const [sliderPos, setSliderPos] = useState(55)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const updateSlider = useCallback((clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const pos = Math.max(5, Math.min(95, ((clientX - rect.left) / rect.width) * 100))
    setSliderPos(pos)
  }, [])

  const onMouseDown = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsDragging(true)
    const onMove = (ev: MouseEvent) => updateSlider(ev.clientX)
    const onUp = () => {
      setIsDragging(false)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseup', onUp)
    }
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseup', onUp)
  }

  const onTouchStart = (e: React.TouchEvent) => {
    const onMove = (ev: TouchEvent) => updateSlider(ev.touches[0].clientX)
    const onEnd = () => {
      window.removeEventListener('touchmove', onMove)
      window.removeEventListener('touchend', onEnd)
    }
    window.addEventListener('touchmove', onMove, { passive: true })
    window.addEventListener('touchend', onEnd)
  }

  const heightClass = tall ? 'h-full min-h-[520px]' : 'h-64 lg:h-72'

  return (
    <div className={`relative overflow-hidden rounded-2xl group ${tall ? 'row-span-2' : ''}`}>
      <div
        ref={containerRef}
        className={`relative w-full overflow-hidden select-none ${heightClass}`}
        style={{ cursor: isDragging ? 'ew-resize' : 'col-resize' }}
      >
        {/* After image (full) */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.after}
          alt={`${project.label} - after Peak Roofing Co`}
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
        />

        {/* Before image (clipped by parent div width) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPos}%` }}
        >
          <div className="absolute inset-0" style={{ width: `${100 * 100 / sliderPos}%` }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.before}
              alt={`${project.label} - before Peak Roofing Co`}
              className="absolute inset-0 w-full h-full object-cover"
              draggable={false}
            />
          </div>
        </div>

        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none" />

        {/* Before/After labels */}
        <div className="absolute top-4 left-4 pointer-events-none">
          <span className="text-xs font-bold uppercase tracking-wider text-white/80 bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-md">
            Before
          </span>
        </div>
        <div className="absolute top-4 right-4 pointer-events-none">
          <span className="text-xs font-bold uppercase tracking-wider text-gold-400 bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-md border border-gold-400/30">
            After
          </span>
        </div>

        {/* Slider handle */}
        <div
          className="absolute top-0 bottom-0 z-20 flex items-center justify-center"
          style={{ left: `${sliderPos}%`, transform: 'translateX(-50%)' }}
          onMouseDown={onMouseDown}
          onTouchStart={onTouchStart}
        >
          <div className="w-0.5 h-full bg-white/60 absolute" />
          <div className="relative w-9 h-9 bg-white rounded-full shadow-[0_2px_16px_rgba(0,0,0,0.6)] flex items-center justify-center border border-white/20 z-10">
            <svg viewBox="0 0 20 20" className="w-4 h-4 fill-slate-800" aria-hidden="true">
              <path d="M7 4l-4 6 4 6M13 4l4 6-4 6" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        {/* Project info */}
        <div className="absolute bottom-0 left-0 right-0 p-5 pointer-events-none">
          <p className="text-[10px] text-gold-400 font-bold uppercase tracking-widest mb-1">{project.type}</p>
          <p className="text-white font-display font-semibold text-base leading-tight">{project.label}</p>
          <p className="text-slate-400 text-xs mt-0.5">{project.location} · {project.year}</p>
        </div>
      </div>
    </div>
  )
}

export function BeforeAfterGallery() {
  return (
    <section id="gallery" className="py-16 sm:py-20 lg:py-28 bg-forest-950">
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
              Drag the slider to compare. Every project is backed by our{' '}
              <span className="text-white font-medium">20-Year Craftsmanship Warranty</span>.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gold-400 hover:text-gold-300 transition-colors group flex-shrink-0"
          >
            See all projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </a>
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
                <div key={label} className="text-center min-w-[100px]">
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
