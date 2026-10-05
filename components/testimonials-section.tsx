import { Reveal } from '@/components/ui/reveal'
import { CountUp } from '@/components/ui/count-up'
import { Icon3D } from '@/components/ui/icon-3d'
import { REVIEWS, initialsOf } from '@/lib/reviews'
import { RATING, REVIEW_COUNT } from '@/lib/company'

const FEATURED = ['Margaret T.', 'Robert K.', 'Linda & James W.', 'David P.', 'Susan M.', 'Thomas & Carol N.']
const SHOWN = FEATURED.map((name) => REVIEWS.find((r) => r.name === name)!)

const PLATFORMS = [
  { label: 'Google', rating: '4.9' },
  { label: 'BBB', rating: '4.9' },
  { label: 'Angi', rating: '4.8' },
]

export function StarRow({ rating, size = 16 }: { rating: number; size?: number }) {
  return (
    <span className="flex items-center gap-px" role="img" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Icon3D key={i} name="star" size={size} className={i < rating ? undefined : 'opacity-25 grayscale'} />
      ))}
    </span>
  )
}

export function TestimonialsSection() {
  return (
    <section id="reviews" className="py-16 sm:py-20 lg:py-28 bg-forest-900">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* Header */}
        <Reveal className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-10 lg:mb-16">
          <div>
            <span className="text-gold-400 text-xs font-bold uppercase tracking-[0.18em]">Reviews</span>
            <h2 className="mt-4 font-display text-4xl lg:text-[3.25rem] font-bold text-white leading-[1.08] tracking-tight">
              What homeowners say
            </h2>
            <p className="mt-4 text-slate-300 text-base leading-relaxed max-w-md">
              {REVIEW_COUNT} reviews across Google, the BBB, and Angi, averaging {RATING} stars. A few recent ones:
            </p>
          </div>

          {/* Aggregate rating */}
          <div className="flex items-center gap-4 sm:gap-6 bg-white/[0.04] border border-white/[0.08] rounded-2xl px-5 sm:px-7 py-5 lg:flex-shrink-0 w-full sm:w-auto">
            <div>
              <p className="font-display text-5xl font-bold text-white leading-none">
                <CountUp value={RATING} />
              </p>
              <div className="mt-2 mb-1">
                <StarRow rating={5} size={18} />
              </div>
              <p className="text-slate-300 text-xs">{REVIEW_COUNT} reviews</p>
            </div>
            <div className="h-14 w-px bg-white/[0.08]" aria-hidden="true" />
            <dl className="space-y-1 text-sm text-slate-300">
              {PLATFORMS.map((p) => (
                <div key={p.label} className="flex items-center justify-between gap-4">
                  <dt>{p.label}</dt>
                  <dd className="flex items-center gap-1 font-semibold text-white">
                    <Icon3D name="star" size={14} />
                    {p.rating}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>

        {/* Review grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SHOWN.map((review, i) => (
            <Reveal
              as="article"
              key={review.name}
              delay={(i % 3) * 80}
              className="group bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6 hover:bg-white/[0.06] hover:border-white/[0.14] hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className="flex items-center justify-between gap-3">
                <StarRow rating={review.rating} />
                <span className="text-[11px] font-medium text-slate-400">{review.source}</span>
              </div>

              <p className="mt-4 text-slate-200 text-[15px] leading-relaxed flex-1">{review.body}</p>

              <div className="mt-5 mb-5">
                <span className="text-[11px] font-semibold text-gold-300 bg-gold-400/10 border border-gold-400/20 rounded-full px-2.5 py-1">
                  {review.serviceLabel}
                </span>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-white/[0.08]">
                <span
                  className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-forest-700 font-display text-sm font-bold text-gold-300"
                  aria-hidden="true"
                >
                  {initialsOf(review.name)}
                </span>
                <div className="min-w-0">
                  <p className="text-white text-sm font-semibold leading-none">{review.name}</p>
                  <p className="text-slate-400 text-xs mt-1">{review.town} · {review.date}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
