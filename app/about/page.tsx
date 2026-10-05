import type { Metadata } from 'next'
import Image from 'next/image'
import { Reveal } from '@/components/ui/reveal'
import { Icon3D, type IconName } from '@/components/ui/icon-3d'
import { CountUp } from '@/components/ui/count-up'
import PageHero from '@/components/page-hero'
import InlineCta from '@/components/inline-cta'
import LocalSeoSchema from '@/components/local-seo-schema'
import { Footer } from '@/components/footer'
import { YEARS_IN_BUSINESS, ROOFS_COMPLETED_DISPLAY, LICENSE, RATING, REVIEW_COUNT, asset } from '@/lib/company'

export const metadata: Metadata = {
  title: 'About Peak Roofing Co | Springfield\'s Trusted Roofer Since 1987',
  description: `Learn about Peak Roofing Co: ${YEARS_IN_BUSINESS} years of roofing craftsmanship in Springfield, IL. GAF Master Elite certified, BBB A+, family owned.`,
  alternates: { canonical: '/about/' },
}

const STATS = [
  { value: `${YEARS_IN_BUSINESS} yrs`, label: 'In Business' },
  { value: ROOFS_COMPLETED_DISPLAY, label: 'Roofs Completed' },
  { value: RATING, label: 'Average Rating' },
  { value: REVIEW_COUNT, label: 'Reviews' },
]

const VALUES: { icon: IconName; title: string; description: string }[] = [
  {
    icon: 'hardhat',
    title: 'Accountability',
    description:
      'Every project has a named foreman who is your single point of contact from estimate to final walkthrough. Nobody hands you off halfway through.',
  },
  {
    icon: 'hammer',
    title: 'Craftsmanship',
    description:
      'GAF Timberline® shingles, ice & water shield at every eave and valley, and a drone flight over every finished roof before we collect final payment.',
  },
  {
    icon: 'doc',
    title: 'Transparency',
    description:
      'An itemized written estimate before any work starts. If we find something that changes the scope, we call you before we touch it.',
  },
]

const CREDENTIALS = [
  `Illinois roofing contractor, ${LICENSE}`,
  'GAF Master Elite® Certified (Top 2% Nationally)',
  '$2M General Liability Insurance',
  "Workers' Compensation: Full Coverage",
  'BBB Accredited, A+ Rating Since 2001',
  'OSHA 10-Hour Safety Certified Crews',
  'FAA Part 107 Drone Pilots',
]

const RECOGNITION: { icon: IconName; label: string; sub: string }[] = [
  { icon: 'medal', label: 'GAF Master Elite®', sub: 'Since 2008' },
  { icon: 'seal', label: 'BBB A+', sub: 'Accredited since 2001' },
  { icon: 'trophy', label: 'Angi Super Service', sub: '6 years running' },
  { icon: 'star', label: `${RATING} average`, sub: `${REVIEW_COUNT} reviews` },
  { icon: 'hardhat', label: 'OSHA 10-hour', sub: 'Every crew member' },
  { icon: 'drone', label: 'FAA Part 107', sub: 'Licensed drone pilots' },
]

const TEAM = [
  {
    name: 'James Harlow',
    title: 'Founder & Owner',
    tenure: `${YEARS_IN_BUSINESS} years`,
    bio: 'Started Peak Roofing with one truck and two friends in 1987. Still reads every estimate before it goes out.',
    image: asset('/images/team-founder.jpg'),
    position: 'object-[center_30%]',
  },
  {
    name: 'Maria Santos',
    title: 'Office Manager',
    tenure: '14 years',
    bio: 'Runs the office: scheduling, permits, and insurance paperwork. If your install date moves, she is the one who calls you.',
    image: asset('/images/team-office.jpg'),
    position: 'object-[30%_center]',
  },
  {
    name: 'Tyler Brooks',
    title: 'Lead Foreman',
    tenure: '11 years',
    bio: 'GAF-certified installer and the foreman on most of our residential jobs. Walks every finished roof before sign-off.',
    image: asset('/images/team-foreman.jpg'),
    position: 'object-[center_25%]',
  },
]

const TIMELINE = [
  { year: 1987, event: 'Founded by James Harlow with one truck and three crew members.' },
  { year: 1995, event: 'First commercial roofing project: Springfield Business Park.' },
  { year: 2001, event: 'Earned BBB A+ Accreditation. Crew grows to 12.' },
  { year: 2008, event: 'Achieved GAF Master Elite® certification. Top 2% of U.S. contractors.' },
  { year: 2015, event: 'Launched FAA-certified drone inspection fleet.' },
  { year: 2020, event: 'Added in-house licensed insurance adjuster for storm claim assistance.' },
  { year: 2024, event: `Passed ${ROOFS_COMPLETED_DISPLAY.replace('+', '')} completed roofs.` },
]

export default function AboutPage() {
  return (
    <>
      <LocalSeoSchema pageType="about" />

      <PageHero
        eyebrow="Our Story"
        title="Family owned since 1987"
        subtitle="A Springfield roofing company that still answers its own phone."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'About', href: '/about/' }]}
        bgImage={asset('/images/hero-about.jpg')}
      />

      {/* Origin Story */}
      <section className="bg-forest-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Copy */}
            <div>
              <p className="text-gold-400 text-xs font-bold uppercase tracking-widest mb-3">How We Got Here</p>
              <h2 className="font-display font-bold text-white text-3xl sm:text-4xl mb-6 leading-tight">
                One truck. Three crew. {YEARS_IN_BUSINESS} years later.
              </h2>
              <div className="space-y-4 text-slate-300 text-base leading-relaxed">
                <p>
                  In 1987, James Harlow loaded a pickup with tools, hired two friends, and started knocking on doors in
                  Springfield. Most of the early work was patching leaks and re-roofing garages for neighbors.
                </p>
                <p>
                  The crew grew mostly by referral. Peak earned BBB accreditation in 2001, and in 2008 GAF certified us as
                  a Master Elite® contractor, a status held by fewer than 2% of U.S. roofers.
                </p>
                <p>
                  Today there are 20 of us, with our own drone pilots and a licensed adjuster on staff, and{' '}
                  {ROOFS_COMPLETED_DISPLAY} roofs behind us across Springfield and the surrounding towns. James still reads
                  every estimate before it goes out.
                </p>
              </div>
            </div>

            {/* Timeline */}
            <div className="space-y-4">
              {TIMELINE.map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-gold-500 mt-1 shrink-0" />
                    {i < TIMELINE.length - 1 && <div className="w-px flex-1 bg-white/10 mt-1" />}
                  </div>
                  <div className="pb-4">
                    <span className="text-gold-400 text-xs font-bold">{item.year}</span>
                    <p className="text-slate-300 text-sm mt-0.5">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-forest-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6 text-center"
              >
                <p className="font-display font-bold text-gold-400 text-4xl mb-1">
                  <CountUp value={stat.value} />
                </p>
                <p className="text-slate-400 text-sm">{stat.label}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-forest-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-gold-400 text-xs font-bold uppercase tracking-widest mb-3 text-center">
              What We Stand For
            </p>
            <h2 className="font-display font-bold text-white text-3xl sm:text-4xl text-center mb-12">
              What we hold ourselves to
            </h2>
          </Reveal>
          <Reveal className="grid sm:grid-cols-3 gap-6">
            {VALUES.map((v) => (
              <div key={v.title} className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-7">
                <Icon3D name={v.icon} size={60} className="-ml-1 mb-4" />
                <h3 className="font-display font-bold text-white text-xl mb-3">{v.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Credentials */}
      <section className="bg-forest-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gold-400 text-xs font-bold uppercase tracking-widest mb-3">Licensed & Certified</p>
              <h2 className="font-display font-bold text-white text-3xl sm:text-4xl mb-6">
                Licensed, insured, certified
              </h2>
              <ul className="space-y-3">
                {CREDENTIALS.map((c) => (
                  <li key={c} className="flex items-start gap-3">
                    <Icon3D name="check" size={20} />
                    <span className="text-slate-300 text-sm">{c}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-8">
              <p className="text-xs font-bold uppercase tracking-widest text-gold-400 mb-6">Recognition</p>
              <ul className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-7">
                {RECOGNITION.map((item) => (
                  <li key={item.label} className="flex flex-col items-center text-center">
                    <Icon3D name={item.icon} size={56} />
                    <span className="mt-2 text-sm font-semibold text-white leading-tight">{item.label}</span>
                    <span className="mt-0.5 text-xs text-slate-400">{item.sub}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Team */}
      <section className="bg-forest-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-gold-400 text-xs font-bold uppercase tracking-widest mb-3 text-center">
              The People Behind the Work
            </p>
            <h2 className="font-display font-bold text-white text-3xl sm:text-4xl text-center mb-12">
              Meet the team
            </h2>
          </Reveal>
          <Reveal className="grid sm:grid-cols-3 gap-6">
            {TEAM.map((member) => (
              <div
                key={member.name}
                className="bg-white/[0.04] border border-white/[0.08] rounded-2xl overflow-hidden"
              >
                <div className="relative aspect-[4/3] bg-forest-800 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={`${member.name}, ${member.title}`}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className={`object-cover grayscale ${member.position}`}
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div>
                      <h3 className="font-display font-bold text-white text-lg">{member.name}</h3>
                      <p className="text-gold-400 text-xs font-semibold">{member.title}</p>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest bg-gold-500/10 text-gold-400 border border-gold-500/20 rounded-full px-2.5 py-1 shrink-0">
                      {member.tenure}
                    </span>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Community */}
      <section className="bg-forest-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="flex items-start gap-6">
            <Icon3D name="heart" size={60} />
            <div>
              <p className="text-gold-400 text-xs font-bold uppercase tracking-widest mb-2">Giving Back</p>
              <h3 className="font-display font-bold text-white text-2xl mb-3">Rooted in Springfield</h3>
              <p className="text-slate-300 leading-relaxed max-w-2xl">
                Every fall our crews donate time and materials to roof a Habitat for Humanity build in Sangamon County.
                Each spring we also run a free inspection day for veterans and military families.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <InlineCta
        heading="Want to meet the crew?"
        subtext="Book a free drone inspection. The foreman who quotes your roof is the one who builds it."
        primaryLabel="Get Free Estimate"
        primaryHref="/#contact"
      />

      <Footer />
    </>
  )
}
