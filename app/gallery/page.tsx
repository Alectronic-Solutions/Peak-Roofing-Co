'use client'

import { useState } from 'react'
import { Play } from 'lucide-react'
import { Reveal } from '@/components/ui/reveal'
import { CountUp } from '@/components/ui/count-up'
import PageHero from '@/components/page-hero'
import InlineCta from '@/components/inline-cta'
import { Footer } from '@/components/footer'
import { PROJECTS } from '@/lib/projects'

type FilterType = 'all' | 'replacement' | 'storm' | 'commercial' | 'insurance'

const FILTERS: { value: FilterType; label: string }[] = [
  { value: 'all', label: 'All Projects' },
  { value: 'replacement', label: 'Roof Replacement' },
  { value: 'storm', label: 'Storm Repair' },
  { value: 'commercial', label: 'Commercial' },
  { value: 'insurance', label: 'Insurance Claims' },
]

const STATS = [
  { value: '1,200+', label: 'Roofs Completed' },
  { value: '37 yrs', label: 'In Business' },
  { value: '$0 avg', label: 'Out-of-Pocket' },
  { value: '4.9★', label: 'Avg Rating' },
]

function SliderCard({ project }: { project: typeof PROJECTS[0] }) {
  const [pos, setPos] = useState(50)
  const [dragging, setDragging] = useState(false)

  const handleMove = (clientX: number, rect: DOMRect) => {
    const pct = Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100))
    setPos(pct)
  }

  const TYPE_COLORS: Record<string, string> = {
    replacement: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
    storm: 'bg-red-500/20 text-red-300 border-red-500/30',
    commercial: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
    insurance: 'bg-green-500/20 text-green-300 border-green-500/30',
  }

  return (
    <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl overflow-hidden group">
      <div
        className="relative aspect-[4/3] overflow-hidden cursor-ew-resize select-none"
        onMouseDown={(e) => {
          setDragging(true)
          handleMove(e.clientX, e.currentTarget.getBoundingClientRect())
        }}
        onMouseMove={(e) => dragging && handleMove(e.clientX, e.currentTarget.getBoundingClientRect())}
        onMouseUp={() => setDragging(false)}
        onMouseLeave={() => setDragging(false)}
        onTouchMove={(e) => handleMove(e.touches[0].clientX, e.currentTarget.getBoundingClientRect())}
      >
        {/* After */}
        <img src={project.afterImage} alt={`After: ${project.title}`} className="absolute inset-0 w-full h-full object-cover" />
        {/* Before */}
        <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
          <img src={project.beforeImage} alt={`Before: ${project.title}`} className="absolute inset-0 w-full h-full object-cover" style={{ width: `${10000 / pos}%`, maxWidth: 'none' }} />
        </div>
        {/* Divider */}
        <div className="absolute top-0 bottom-0 w-0.5 bg-white/70" style={{ left: `${pos}%` }}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-slate-800" aria-hidden="true">
              <path d="M8 5l-7 7 7 7M16 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
            </svg>
          </div>
        </div>
        {/* Labels */}
        <span className="absolute top-3 left-3 bg-black/50 text-white text-xs font-bold px-2.5 py-1 rounded-lg backdrop-blur-sm">Before</span>
        <span className="absolute top-3 right-3 bg-black/50 text-white text-xs font-bold px-2.5 py-1 rounded-lg backdrop-blur-sm">After</span>
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="font-display font-bold text-white text-base">{project.title}</h3>
          <span className={`text-[10px] font-bold uppercase tracking-widest border rounded-full px-2.5 py-0.5 shrink-0 ${TYPE_COLORS[project.type]}`}>
            {project.type}
          </span>
        </div>
        <p className="text-slate-500 text-xs mb-2">{project.location} · {project.year} · {project.sqft.toLocaleString()} sq ft</p>
        <p className="text-slate-400 text-xs leading-relaxed">{project.description}</p>
      </div>
    </div>
  )
}

export default function GalleryPage() {
  const [filter, setFilter] = useState<FilterType>('all')

  const filtered = filter === 'all' ? PROJECTS : PROJECTS.filter((p) => p.type === filter)

  return (
    <>
      <PageHero
        eyebrow="Project Gallery"
        title="1,200 Projects. See the Proof."
        subtitle="Every project starts with a free drone inspection and ends with a post-install walkthrough."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Our Work', href: '/gallery/' }]}
        ctaLabel="Get Free Estimate"
        ctaHref="/#contact"
      />

      {/* Filter Bar */}
      <section className="bg-forest-950 py-8 sticky top-[72px] lg:top-[80px] z-40 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 flex-wrap">
            {FILTERS.map((f) => (
              <button
                key={f.value}
                onClick={() => setFilter(f.value)}
                className={`text-sm font-semibold rounded-xl px-5 py-2.5 transition-all ${
                  filter === f.value
                    ? 'bg-gold-500 text-forest-950'
                    : 'bg-white/[0.05] text-slate-300 hover:bg-white/[0.09] hover:text-white border border-white/[0.08]'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="bg-forest-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project) => (
              <SliderCard key={project.id} project={project} />
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="text-slate-400 text-center py-20">No projects found for this filter.</p>
          )}
        </div>
      </section>

      {/* Stats */}
      <section className="bg-forest-950 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {STATS.map((s) => (
              <div key={s.label} className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6 text-center">
                <p className="font-display font-bold text-gold-400 text-4xl mb-1">
                  <CountUp value={s.value} />
                </p>
                <p className="text-slate-400 text-sm">{s.label}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Video Placeholder */}
      <section className="bg-forest-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="font-display font-bold text-white text-2xl sm:text-3xl mb-8">See us in action</h2>
          </Reveal>
          <Reveal className="grid sm:grid-cols-3 gap-5">
            {['Full Roof Replacement Timelapse', 'Drone Inspection Walkthrough', 'Before & After: Storm Claim'].map((title) => (
              <div
                key={title}
                className="bg-white/[0.04] border border-white/[0.08] rounded-2xl overflow-hidden aspect-video flex items-center justify-center cursor-pointer group hover:border-gold-500/30 transition-all"
              >
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-gold-500/10 border border-gold-500/20 flex items-center justify-center mx-auto mb-3 group-hover:bg-gold-500/20 transition-colors">
                    <Play className="w-5 h-5 text-gold-500 ml-0.5" />
                  </div>
                  <p className="text-white text-sm font-semibold px-4">{title}</p>
                  <p className="text-slate-500 text-xs mt-1">Coming soon</p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <InlineCta
        heading="Your roof could be next."
        subtext="We'll send a drone up, document everything, and give you a written estimate within 24 hours."
        primaryLabel="Get Free Estimate"
        primaryHref="/#contact"
      />

      <Footer />
    </>
  )
}
