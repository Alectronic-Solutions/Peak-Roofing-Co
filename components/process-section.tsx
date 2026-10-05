import { PhoneCall, Aperture, ClipboardCheck, Hammer, BadgeCheck, ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/ui/reveal'

const STEPS = [
  { icon: PhoneCall, when: 'Day 1', title: 'Call or request online', body: 'A real person calls you back within 2 business hours to book a time that suits you.' },
  { icon: Aperture, when: 'Day 1–2', title: 'Drone inspection', body: 'A 30-minute flight covers every plane of your roof. No ladders, no foot traffic on your shingles.' },
  { icon: ClipboardCheck, when: 'Within 24 hrs', title: 'Itemized proposal', body: 'Annotated photos, a line-by-line scope, and a fixed price. Material samples brought to your door.' },
  { icon: Hammer, when: 'Install day', title: 'One-day install', body: 'Crew arrives at 7 AM. Most homes are torn off, re-decked where needed, and roofed by sundown.' },
  { icon: BadgeCheck, when: 'Same day', title: 'Walkthrough & warranty', body: 'We walk the job with you, sweep for nails, and register your manufacturer warranty on the spot.' },
]

export function ProcessSection() {
  return (
    <section id="process" className="bg-forest-950 py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <Reveal className="mx-auto mb-12 max-w-2xl text-center lg:mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-gold-400">How It Works</span>
          <h2 className="mt-4 font-display text-4xl font-bold leading-[1.08] tracking-tight text-white lg:text-[3.25rem]">
            From first call to final nail.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-300">
            A clear, five-step process with no surprises. Most replacements go from inspection to finished roof in under two weeks.
          </p>
        </Reveal>

        <ol className="relative grid gap-4 lg:grid-cols-5 lg:gap-5">
          {/* Connector line (desktop) */}
          <div
            className="absolute left-[10%] right-[10%] top-7 hidden h-px bg-gradient-to-r from-gold-400/0 via-gold-400/40 to-gold-400/0 lg:block"
            aria-hidden="true"
          />
          {/* Connector line (mobile) */}
          <div className="absolute bottom-8 left-7 top-8 w-px bg-gradient-to-b from-gold-400/40 via-gold-400/20 to-transparent lg:hidden" aria-hidden="true" />

          {STEPS.map(({ icon: Icon, when, title, body }, i) => (
            <Reveal as="li" key={title} delay={i * 90} className="relative flex gap-5 lg:flex-col lg:gap-0 lg:text-center">
              <span className="relative z-10 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl border border-gold-400/35 bg-forest-850 shadow-[0_0_0_6px_#04140E] lg:mx-auto">
                <Icon className="h-6 w-6 text-gold-400" aria-hidden="true" />
                <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-gold-500 font-display text-[11px] font-bold text-forest-950">
                  {i + 1}
                </span>
              </span>
              <div className="flex-1 rounded-2xl border border-white/[0.07] bg-white/[0.03] p-5 lg:mt-6 lg:bg-transparent lg:border-transparent lg:p-0">
                <p className="text-[11px] font-bold uppercase tracking-widest text-gold-300">{when}</p>
                <h3 className="mt-1.5 font-display text-lg font-bold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{body}</p>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-12 flex justify-center">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-xl border border-gold-400/40 px-6 py-3.5 text-sm font-bold text-gold-300 transition-colors hover:bg-gold-400/10"
          >
            Start with step one
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
