import type { Metadata } from 'next'
import { CheckCircle2, Award, Users, Heart } from 'lucide-react'
import { Reveal } from '@/components/ui/reveal'
import { CountUp } from '@/components/ui/count-up'
import PageHero from '@/components/page-hero'
import InlineCta from '@/components/inline-cta'
import LocalSeoSchema from '@/components/local-seo-schema'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'About Peak Roofing Co | Springfield\'s Trusted Roofer Since 1987',
  description:
    'Learn about Peak Roofing Co: 37 years of roofing craftsmanship in Springfield, IL. GAF Master Elite certified, BBB A+, family owned.',
}

const STATS = [
  { value: '37 yrs', label: 'In Business' },
  { value: '1,200+', label: 'Roofs Completed' },
  { value: '4.9★', label: 'Average Rating' },
  { value: '847', label: 'Reviews' },
]

const VALUES = [
  {
    icon: CheckCircle2,
    title: 'Accountability',
    description:
      'Every project has a named foreman who is your single point of contact from estimate to final walkthrough. No hand-offs, no excuses.',
  },
  {
    icon: Award,
    title: 'Craftsmanship',
    description:
      'We use GAF Timberline® shingles, ice & water barriers on every eave, and conduct a post-install drone inspection on every job.',
  },
  {
    icon: Heart,
    title: 'Transparency',
    description:
      'Detailed written estimates before any work begins. If the scope changes, you know before we do anything. No hidden fees. Ever.',
  },
]

const CREDENTIALS = [
  'Illinois Contractor License #RC-20847',
  'GAF Master Elite® Certified (Top 2% Nationally)',
  '$2M General Liability Insurance',
  "Workers' Compensation: Full Coverage",
  'BBB Accredited, A+ Rating Since 2001',
  'OSHA 10-Hour Safety Certified Crews',
  'FAA Part 107 Drone Pilots',
]

const TEAM = [
  {
    name: 'James Harlow',
    title: 'Founder & Owner',
    tenure: '37 years',
    bio: 'Started Peak Roofing with one truck and a three-person crew. Still personally reviews every estimate.',
    image: 'https://i.pravatar.cc/256?img=57',
  },
  {
    name: 'Maria Santos',
    title: 'Office Manager',
    tenure: '14 years',
    bio: 'Coordinates every job from scheduling to final payment. The reason our 2-hour response time is actually true.',
    image: 'https://i.pravatar.cc/256?img=47',
  },
  {
    name: 'Tyler Brooks',
    title: 'Lead Foreman',
    tenure: '11 years',
    bio: 'GAF-certified installer with 11 years on Peak crews. Personally inspects every completed roof before sign-off.',
    image: 'https://i.pravatar.cc/256?img=33',
  },
]

const TIMELINE = [
  { year: 1987, event: 'Founded by James Harlow with one truck and three crew members.' },
  { year: 1995, event: 'First commercial roofing project: Springfield Business Park.' },
  { year: 2001, event: 'Earned BBB A+ Accreditation. Crew grows to 12.' },
  { year: 2008, event: 'Achieved GAF Master Elite® certification. Top 2% of U.S. contractors.' },
  { year: 2015, event: 'Launched FAA-certified drone inspection fleet.' },
  { year: 2020, event: 'Added in-house licensed insurance adjuster for storm claim assistance.' },
  { year: 2024, event: 'Surpassed 1,200 completed roofs. 4.9-star average across 847 reviews.' },
]

export default function AboutPage() {
  return (
    <>
      <LocalSeoSchema pageType="about" />

      <PageHero
        eyebrow="Our Story"
        title="37 Years. One Promise."
        subtitle="Family-owned since 1987. We still answer the phone ourselves."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'About', href: '/about/' }]}
        bgImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80"
      />

      {/* Origin Story */}
      <section className="bg-forest-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Copy */}
            <div>
              <p className="text-gold-500 text-xs font-bold uppercase tracking-widest mb-3">How We Got Here</p>
              <h2 className="font-display font-bold text-white text-3xl sm:text-4xl mb-6 leading-tight">
                One truck. Three crew. 37 years later.
              </h2>
              <div className="space-y-4 text-slate-300 text-base leading-relaxed">
                <p>
                  In 1987, James Harlow loaded a pickup truck with tools, hired two friends, and started knocking on
                  doors in Springfield. The pitch was simple: honest work, fair prices, and showing up when you said
                  you would.
                </p>
                <p>
                  It worked. Word spread. The crew grew. By 2001, Peak Roofing had earned its BBB A+ accreditation. By
                  2008, GAF awarded us Master Elite® status, held by fewer than 2% of roofing contractors
                  nationwide.
                </p>
                <p>
                  Today we operate a 20-person crew with a full drone fleet, an in-house insurance adjuster, and 1,200+
                  completed roofs across Springfield and the surrounding region. James still reviews every estimate.
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
                    <span className="text-gold-500 text-xs font-bold">{item.year}</span>
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
            <p className="text-gold-500 text-xs font-bold uppercase tracking-widest mb-3 text-center">
              What We Stand For
            </p>
            <h2 className="font-display font-bold text-white text-3xl sm:text-4xl text-center mb-12">
              Three values. No exceptions.
            </h2>
          </Reveal>
          <Reveal className="grid sm:grid-cols-3 gap-6">
            {VALUES.map((v) => (
              <div key={v.title} className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-7">
                <div className="w-11 h-11 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center mb-5">
                  <v.icon className="w-5 h-5 text-gold-500" />
                </div>
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
              <p className="text-gold-500 text-xs font-bold uppercase tracking-widest mb-3">Licensed & Certified</p>
              <h2 className="font-display font-bold text-white text-3xl sm:text-4xl mb-6">
                Every credential. No shortcuts.
              </h2>
              <ul className="space-y-3">
                {CREDENTIALS.map((c) => (
                  <li key={c} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm">{c}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-8">
              <p className="text-xs font-bold uppercase tracking-widest text-gold-500 mb-6">Recognition & Awards</p>
              <div className="grid grid-cols-3 gap-5">
                {['GAF Master Elite®', 'BBB A+', 'Angi Top Pro', 'HomeAdvisor Elite', "OSHA Certified", 'FAA Part 107'].map(
                  (award) => (
                    <div
                      key={award}
                      className="aspect-square rounded-xl bg-white/5 border border-white/10 flex items-center justify-center"
                    >
                      <span className="text-white/40 text-[10px] font-bold text-center px-2 leading-tight">{award}</span>
                    </div>
                  )
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Team */}
      <section className="bg-forest-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-gold-500 text-xs font-bold uppercase tracking-widest mb-3 text-center">
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
                <div className="aspect-[4/3] bg-forest-800 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover opacity-80"
                    width={256}
                    height={256}
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div>
                      <h3 className="font-display font-bold text-white text-lg">{member.name}</h3>
                      <p className="text-gold-500 text-xs font-semibold">{member.title}</p>
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
            <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center shrink-0">
              <Users className="w-5 h-5 text-gold-500" />
            </div>
            <div>
              <p className="text-gold-500 text-xs font-bold uppercase tracking-widest mb-2">Giving Back</p>
              <h3 className="font-display font-bold text-white text-2xl mb-3">Rooted in Springfield</h3>
              <p className="text-slate-300 leading-relaxed max-w-2xl">
                Every fall, we partner with Habitat for Humanity to donate crew time and materials for low-income
                housing roofs. We also host an annual &quot;Free Inspection Day&quot; for veterans and active military
                families. Springfield built Peak Roofing, and we invest right back.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <InlineCta
        heading="Ready to work with Springfield's most trusted roofer?"
        subtext="Call us or submit online. We'll have someone out within 2 hours."
        primaryLabel="Get Free Estimate"
        primaryHref="/#contact"
      />

      <Footer />
    </>
  )
}
