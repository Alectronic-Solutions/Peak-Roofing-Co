import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Icon3D } from '@/components/ui/icon-3d'
import { Reveal } from '@/components/ui/reveal'
import FaqAccordion from '@/components/faq-accordion'
import { PHONE_DISPLAY, PHONE_HREF } from '@/lib/company'

const FAQS = [
  {
    q: 'How much does a new roof cost in Springfield?',
    a: 'Most residential replacements we install run $8,500–$18,000, depending on size, pitch, and shingle grade. You get a fixed, itemized price after a free drone inspection. Financing starts around $189/month.',
  },
  {
    q: 'How do I know if the last storm damaged my roof?',
    a: 'Hail and wind damage is rarely visible from the ground. Granules in your gutters, dented gutters or AC fins, and lifted shingle edges are the usual tells. A free drone inspection shows you exactly what’s there in 4K.',
  },
  {
    q: 'What will I pay if insurance covers my roof?',
    a: 'Your deductible. Your insurer pays the rest of the approved claim, and our on-staff adjuster makes sure nothing is missed. We never waive or absorb deductibles; reputable contractors don’t.',
  },
  {
    q: 'How long does a roof replacement take?',
    a: 'Most homes are finished in a single day. Larger or steeper roofs can take two. We confirm the timeline in writing before work starts and clean up the same day.',
  },
  {
    q: 'What warranty do I get?',
    a: 'A 10-year written workmanship warranty from Peak, plus GAF’s lifetime limited shingle warranty registered in your name. As a GAF Master Elite® contractor we can also offer GAF’s extended System Plus and Golden Pledge coverage.',
  },
]

export function HomeFaq() {
  return (
    <section id="faq" className="bg-forest-950 py-16 sm:py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[380px_1fr] lg:gap-16 lg:px-10">
        <Reveal className="lg:sticky lg:top-32 lg:self-start">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-gold-400">Questions</span>
          <h2 className="mt-4 font-display text-4xl font-bold leading-[1.08] tracking-tight text-white lg:text-[3.25rem]">
            Straight answers.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-300">
            The questions homeowners ask us most. Something else on your mind? Call and talk to a person.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
            <a
              href={PHONE_HREF}
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.05] px-5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              <Icon3D name="phone" size={22} />
              {PHONE_DISPLAY}
            </a>
            <Link
              href="/faq/"
              className="group inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl px-5 text-sm font-semibold text-gold-300 hover:text-gold-400"
            >
              All 30+ FAQs
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <FaqAccordion items={FAQS} outputSchema schemaPageName="Peak Roofing Co: Common Questions" />
        </Reveal>
      </div>
    </section>
  )
}
