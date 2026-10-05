import { Icon3D, type IconName } from '@/components/ui/icon-3d'
import { Reveal } from '@/components/ui/reveal'
import { CountUp } from '@/components/ui/count-up'
import { YEARS_IN_BUSINESS, ROOFS_COMPLETED_DISPLAY, asset } from '@/lib/company'

const REASONS: { icon: IconName; title: string; body: string }[] = [
  {
    icon: 'hardhat',
    title: 'One named foreman, start to finish',
    body: 'The person who quotes your roof is on site the day it’s installed. You get their cell number, not a call center.',
  },
  {
    icon: 'drone',
    title: 'Every estimate is drone-documented',
    body: '4K imagery of every plane of your roof, so you see exactly what we see before you spend a dollar.',
  },
  {
    icon: 'doc',
    title: 'Warranty in writing, registered on the spot',
    body: '10-year workmanship warranty from us, plus your GAF manufacturer warranty registered in your name at the walkthrough.',
  },
  {
    icon: 'magnet',
    title: 'Cleaner than we found it',
    body: 'Tarps over the landscaping, a magnetic nail sweep of the whole lot, and the old roof hauled off the same day.',
  },
]

export function WhyUsSection() {
  return (
    <section id="why-peak" className="relative overflow-hidden bg-forest-950 py-16 sm:py-20 lg:py-28">
      <div
        className="pointer-events-none absolute -left-40 top-1/3 h-[480px] w-[480px] rounded-full bg-gold-500/[0.06] blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-10">
        {/* Imagery */}
        <Reveal className="relative order-2 lg:order-1">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/[0.08] sm:aspect-[5/4] lg:aspect-[4/5]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={asset('/videos/hero-2-poster.jpg')}
              alt="Peak Roofing crew member installing synthetic underlayment on a steep roof"
              loading="lazy"
              className="h-full w-full object-cover object-[30%_center]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-transparent to-transparent" />
            <figure className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/10 bg-forest-950/70 p-5 backdrop-blur-md sm:inset-x-6 sm:bottom-6">
              <Icon3D name="quote" size={30} />
              <blockquote className="mt-2 text-sm leading-relaxed text-slate-200 sm:text-[15px]">
                “I still review every estimate myself. If I wouldn’t put it on my own house, it doesn’t go on yours.”
              </blockquote>
              <figcaption className="mt-3 text-xs font-semibold text-white">
                James Harlow <span className="font-normal text-slate-400">· Founder, since 1987</span>
              </figcaption>
            </figure>
          </div>

          {/* Floating stat */}
          <div className="absolute -right-2 -top-6 rounded-2xl border border-gold-400/30 bg-forest-900/95 px-5 py-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur sm:-right-6">
            <p className="font-display text-3xl font-bold leading-none text-gold-400">
              <CountUp value={ROOFS_COMPLETED_DISPLAY} />
            </p>
            <p className="mt-1 text-xs text-slate-300">roofs over {YEARS_IN_BUSINESS} years</p>
          </div>
        </Reveal>

        {/* Copy */}
        <div className="order-1 lg:order-2">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-gold-400">Why Peak</span>
            <h2 className="mt-4 font-display text-4xl font-bold leading-[1.08] tracking-tight text-white lg:text-[3.25rem]">
              The roofer your neighbors
              <span className="text-gold-400"> actually recommend.</span>
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-300">
              Most bad roofing experiences come down to hand-offs, hidden costs, and crews you never see again. We built
              Peak to remove all three.
            </p>
          </Reveal>

          <ul className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2">
            {REASONS.map(({ icon, title, body }, i) => (
              <Reveal as="li" key={title} delay={(i % 2) * 80} className="flex gap-4 sm:block">
                <Icon3D name={icon} size={52} className="sm:mb-3" />
                <span>
                  <span className="block font-display text-base font-bold text-white">{title}</span>
                  <span className="mt-1.5 block text-sm leading-relaxed text-slate-300">{body}</span>
                </span>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
