import { Star, Quote } from 'lucide-react'
import { Reveal } from '@/components/ui/reveal'
import { CountUp } from '@/components/ui/count-up'

const REVIEWS = [
  {
    id: 1,
    name: 'Margaret T.',
    location: 'Westbrook Estates',
    avatar: 'https://i.pravatar.cc/64?img=47',
    rating: 5,
    date: 'November 2024',
    title: 'Absolutely zero stress from start to finish',
    body: 'After the October hail storm I was dreading the whole process. Peak Roofing handled everything - my insurance adjuster, the scheduling, the cleanup. I paid nothing out of pocket and have a brand new roof. I cannot recommend them enough.',
    service: 'Storm Damage + Insurance Claim',
    verified: true,
  },
  {
    id: 2,
    name: 'Robert K.',
    location: 'Maple Ridge',
    avatar: 'https://i.pravatar.cc/64?img=12',
    rating: 5,
    date: 'September 2024',
    title: 'Professional crew, stunning result',
    body: 'The crew showed up exactly when they said, protected my landscaping, and finished a 2,400 sq ft job in one day. The drone inspection report they gave me was more thorough than I expected. The roof looks incredible and the warranty gives real peace of mind.',
    service: 'Full Roof Replacement',
    verified: true,
  },
  {
    id: 3,
    name: 'Linda & James W.',
    location: 'Lakeview Heights',
    avatar: 'https://i.pravatar.cc/64?img=33',
    rating: 5,
    date: 'August 2024',
    title: 'The financing made it possible for us',
    body: 'We had been putting off the replacement for two years because of the cost. Their finance team walked us through everything, got us approved in minutes, and our monthly payment is lower than what we were paying to patch the old roof every year. Wish we had done this sooner.',
    service: 'Roof Replacement + Financing',
    verified: true,
  },
  {
    id: 4,
    name: 'David P.',
    location: 'Springfield',
    avatar: 'https://i.pravatar.cc/64?img=51',
    rating: 5,
    date: 'July 2024',
    title: '37 years in business shows in every detail',
    body: 'You can tell immediately this is a company with real experience. Every crew member knew exactly what they were doing. The foreman walked me through every stage, explained what they found, and why every decision was made. Old-school professionalism you just don\'t see anymore.',
    service: 'Complete Tear-Off & Install',
    verified: true,
  },
  {
    id: 5,
    name: 'Susan M.',
    location: 'North Springfield',
    avatar: 'https://i.pravatar.cc/64?img=29',
    rating: 5,
    date: 'June 2024',
    title: '24-hour emergency response saved my ceiling',
    body: 'Called at 9pm after a branch punched through my roof during a storm. A crew was there by 11pm with tarps and had it stabilized within an hour. Permanent fix scheduled for the following week. That response time is exactly what you need in an emergency.',
    service: 'Emergency Storm Repair',
    verified: true,
  },
  {
    id: 6,
    name: 'Thomas & Carol N.',
    location: 'Eastwood',
    avatar: 'https://i.pravatar.cc/64?img=61',
    rating: 5,
    date: 'May 2024',
    title: 'Second home done - as perfect as the first',
    body: 'We used Peak Roofing for our primary home three years ago and just had them replace the roof on our vacation property. Same quality, same professionalism, same result. That consistency over time is why they are the only roofer we will ever call.',
    service: 'Full Roof Replacement',
    verified: true,
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-3.5 h-3.5 ${i < rating ? 'fill-gold-400 text-gold-400' : 'fill-slate-700 text-slate-700'}`}
          aria-hidden="true"
        />
      ))}
    </div>
  )
}

export function TestimonialsSection() {
  return (
    <section id="reviews" className="py-16 sm:py-20 lg:py-28 bg-forest-950">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* Header */}
        <Reveal className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-10 lg:mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-gold-400 text-xs font-bold uppercase tracking-[0.18em]">
                Reviews
              </span>
            </div>
            <h2 className="font-display text-4xl lg:text-[3.25rem] font-bold text-white leading-[1.08] tracking-tight">
              What Homeowners Say
            </h2>
            <p className="mt-4 text-slate-300 text-base leading-relaxed max-w-md">
              847 five-star reviews across Google, Yelp, and the BBB.
            </p>
          </div>

          {/* Aggregate rating */}
          <div className="flex items-center gap-4 sm:gap-5 bg-white/[0.04] border border-white/[0.08] rounded-2xl px-5 sm:px-7 py-5 lg:flex-shrink-0 w-full sm:w-auto">
            <div>
              <p className="font-display text-5xl font-bold text-white leading-none">
                <CountUp value="4.9" />
              </p>
              <div className="flex gap-0.5 mt-1.5 mb-1">
                {[1,2,3,4,5].map((s) => (
                  <Star key={s} className="w-4 h-4 fill-gold-400 text-gold-400" aria-hidden="true" />
                ))}
              </div>
              <p className="text-slate-300 text-xs">847 reviews</p>
            </div>
            <div className="h-12 w-px bg-white/[0.08]" aria-hidden="true" />
            <div className="text-slate-300 text-sm leading-relaxed">
              <p>⭐ Google - 4.9</p>
              <p>⭐ BBB - 4.9</p>
              <p>⭐ Yelp - 4.8</p>
            </div>
          </div>
        </Reveal>

        {/* Review grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {REVIEWS.map((review, i) => (
            <Reveal
              as="article"
              key={review.id}
              delay={(i % 3) * 80}
              className="group bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6 hover:bg-white/[0.06] hover:border-white/[0.14] hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Quote icon */}
              <Quote className="w-7 h-7 text-gold-400/30 mb-4 flex-shrink-0" aria-hidden="true" />

              <StarRating rating={review.rating} />

              <h3 className="font-display text-base font-bold text-white mt-3 mb-2 leading-snug">
                "{review.title}"
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed flex-1">
                {review.body}
              </p>

              {/* Service tag */}
              <div className="mt-4 mb-5">
                <span className="text-[11px] font-semibold text-gold-300 bg-gold-400/10 border border-gold-400/20 rounded-full px-2.5 py-1">
                  {review.service}
                </span>
              </div>

              {/* Reviewer */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/[0.08]">
                <img
                  src={review.avatar}
                  alt={`${review.name} profile photo`}
                  className="w-10 h-10 rounded-full object-cover border-2 border-white/[0.08]"
                  loading="lazy"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-white text-sm font-semibold leading-none">{review.name}</p>
                  <p className="text-slate-400 text-xs mt-0.5">{review.location} · {review.date}</p>
                </div>
                {review.verified && (
                  <span className="text-[10px] text-green-400 font-semibold border border-green-500/30 rounded px-1.5 py-0.5 flex-shrink-0">
                    Verified
                  </span>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://g.page/r/peakroofingco/review"
            className="inline-flex items-center gap-2 text-slate-300 hover:text-white text-sm font-medium transition-colors"
          >
            View all 847 reviews on Google →
          </a>
        </div>
      </div>
    </section>
  )
}
