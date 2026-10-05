'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Reveal } from '@/components/ui/reveal'
import { CountUp } from '@/components/ui/count-up'
import { Icon3D, type IconName } from '@/components/ui/icon-3d'
import PageHero from '@/components/page-hero'
import InlineCta from '@/components/inline-cta'
import { Footer } from '@/components/footer'
import { PROJECTS, type Project } from '@/lib/projects'
import { YEARS_IN_BUSINESS, ROOFS_COMPLETED_DISPLAY, RATING, asset } from '@/lib/company'

type FilterType = 'all' | Project['type']

const FILTERS: { value: FilterType; label: string }[] = [
  { value: 'all', label: 'All projects' },
  { value: 'replacement', label: 'Roof replacement' },
  { value: 'storm', label: 'Storm repair' },
  { value: 'commercial', label: 'Commercial' },
  { value: 'insurance', label: 'Insurance claims' },
]

const TYPE_META: Record<Project['type'], { label: string; icon: IconName; tone: string }> = {
  replacement: { label: 'Replacement', icon: 'house', tone: 'text-gold-300 border-gold-400/30 bg-gold-400/10' },
  storm: { label: 'Storm', icon: 'storm', tone: 'text-red-300 border-red-400/30 bg-red-500/10' },
  commercial: { label: 'Commercial', icon: 'building', tone: 'text-slate-200 border-white/20 bg-white/[0.06]' },
  insurance: { label: 'Insurance', icon: 'shield', tone: 'text-emerald-300 border-emerald-400/30 bg-emerald-500/10' },
}

const STATS = [
  { value: ROOFS_COMPLETED_DISPLAY, label: 'Roofs completed' },
  { value: `${YEARS_IN_BUSINESS} yrs`, label: 'In business' },
  { value: '1,200+', label: 'Insurance claims filed' },
  { value: RATING, label: 'Average rating (of 5)' },
]

function ProjectCard({ project }: { project: Project }) {
  const meta = TYPE_META[project.type]
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.04]">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950/70 via-transparent to-transparent" />
        <span
          className={`absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider backdrop-blur-sm ${meta.tone}`}
        >
          <Icon3D name={meta.icon} size={16} />
          {meta.label}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-base font-bold text-white">{project.title}</h3>
        <p className="mt-1 text-xs text-slate-400">
          {project.location} · {project.year} · {project.sqft.toLocaleString()} sq ft · {project.duration}
        </p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-300">{project.description}</p>
        <p className="mt-4 text-xs font-semibold text-gold-300">{project.material}</p>
      </div>
    </article>
  )
}

export default function GalleryPageClient() {
  const [filter, setFilter] = useState<FilterType>('all')

  const filtered = filter === 'all' ? PROJECTS : PROJECTS.filter((p) => p.type === filter)

  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title="Recent projects"
        subtitle="A sample of jobs from the last few years across Springfield and the surrounding towns, from storm tarps to full commercial re-roofs."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Our Work', href: '/gallery/' }]}
        bgImage={asset('/images/hero-gallery.jpg')}
        ctaLabel="Get Free Estimate"
        ctaHref="/#contact"
      />

      {/* Filter Bar */}
      <section className="bg-forest-950 py-6 sticky top-[68px] lg:top-[76px] z-40 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:px-0"
            role="group"
            aria-label="Filter projects"
          >
            {FILTERS.map((f) => (
              <button
                key={f.value}
                onClick={() => setFilter(f.value)}
                aria-pressed={filter === f.value}
                className={`shrink-0 text-sm font-semibold rounded-xl px-5 py-2.5 transition-all ${
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
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
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

      <InlineCta
        heading="Want to know where your roof stands?"
        subtext="We'll fly a drone over it, mark up what we find, and send a written estimate within 24 hours."
        primaryLabel="Get Free Estimate"
        primaryHref="/#contact"
      />

      <Footer />
    </>
  )
}
