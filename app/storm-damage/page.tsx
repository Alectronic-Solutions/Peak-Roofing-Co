import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, CheckCircle2, AlertTriangle, Clock, Shield, DollarSign } from 'lucide-react'
import { Reveal } from '@/components/ui/reveal'
import FaqAccordion from '@/components/faq-accordion'
import { LeadCaptureForm } from '@/components/lead-capture-form'
import LocalSeoSchema from '@/components/local-seo-schema'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Storm Damage Roof Repair | Free Drone Inspection in 2 Hours | Peak Roofing Co',
  description:
    'Storm damage to your roof? Peak Roofing Co responds within 2 hours with a free drone inspection. We handle your claim. Average out-of-pocket: $0. Call (555) 555-0100.',
}

const FAQS = [
  { q: 'How quickly can you respond after a storm?', a: 'We dispatch within 2 hours of your call, 7 days a week. We keep crews on standby during and after severe weather events in the Springfield area.' },
  { q: 'What does the drone inspection include?', a: '4K imagery of every square foot of your roof, annotated hail impact mapping, flashing condition report, and a full PDF you can submit directly to your insurer.' },
  { q: 'Will filing a storm claim raise my insurance rates?', a: 'Storm damage claims are weather-related events and typically don\'t raise your personal rate. We\'ve never seen a client\'s policy cancelled or rate increased for filing a legitimate hail claim.' },
  { q: 'What does $0 out-of-pocket actually mean?', a: 'Insurance pays the full replacement cost. Your deductible is built into the claim settlement in most cases. You write one check (your deductible) and we handle the rest.' },
  { q: 'What if my insurance adjuster says there\'s no damage?', a: 'We supplement denied or underpaid claims routinely. Our licensed adjuster will re-document, escalate, and appeal with additional drone evidence. We don\'t walk away from a valid claim.' },
  { q: 'Do you offer emergency tarping?', a: 'Yes. Same day, any time. If your home is exposed to weather, we tarp it immediately while the claim processes. No one should be sleeping under a damaged roof.' },
]

const STEPS = [
  { icon: Clock, title: 'Free Drone Inspection', subtitle: 'Within 2 hours', description: 'We dispatch immediately and fly your entire roof in 4K. You receive a full damage report.' },
  { icon: Shield, title: 'Damage Report & Estimate', subtitle: 'Within 24 hours', description: 'Annotated photo report with all damage documented, formatted for direct insurer submission.' },
  { icon: CheckCircle2, title: 'We Handle Your Claim', subtitle: 'Start to finish', description: 'Our on-staff adjuster files, attends the inspection, and negotiates your full settlement.' },
  { icon: DollarSign, title: '$0 Out of Pocket', subtitle: 'For approved claims', description: 'Insurance pays. We build. You pay your deductible. No hidden fees, no upsells.' },
]

const CARRIERS = ['State Farm', 'Allstate', 'USAA', 'Farmers', 'Liberty Mutual', 'Nationwide']

const RECENT_STORMS = [
  { date: 'April 2024', event: 'Sangamon County Hailstorm', severity: 'Severe', hail: '2.5" hailstones', claims: '400+' },
  { date: 'August 2023', event: 'Straight-Line Wind Event', severity: 'High', hail: '75 mph gusts', claims: '180+' },
  { date: 'June 2022', event: 'Springfield Derecho', severity: 'Extreme', hail: '90 mph gusts', claims: '320+' },
]

export default function StormDamageLandingPage() {
  return (
    <>
      <LocalSeoSchema pageType="service" serviceName="Storm Damage Roof Repair" />

      {/* Emergency Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-20 bg-red-950">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=1600&q=80')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-red-950/80 via-red-950/60 to-transparent" />
        <div className="grain absolute inset-0 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
          <div className="grid lg:grid-cols-[1fr_420px] gap-12 items-center">
            {/* Left */}
            <div>
              <div className="flex items-center gap-2 mb-5">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500" />
                </span>
                <span className="text-red-400 text-xs font-bold uppercase tracking-widest">
                  Storm Alert: Act Before Your Claim Window Closes
                </span>
              </div>

              <h1 className="font-display font-bold text-white text-4xl sm:text-5xl lg:text-6xl leading-[1.06] tracking-tight mb-6">
                Hail Hit Your Roof?<br />
                <span className="text-red-400">Don&apos;t Wait.</span>
              </h1>

              <p className="text-slate-200 text-lg sm:text-xl max-w-xl mb-8 leading-relaxed">
                Drone inspection within 2 hours. We file your insurance claim, negotiate the settlement,
                and replace your roof. Average out-of-pocket: <strong className="text-white">$0</strong>.
              </p>

              <div className="flex flex-wrap gap-6 mb-8">
                {[
                  { value: '<2 hrs', label: 'Response Time' },
                  { value: '100%', label: 'Claim Approval Rate' },
                  { value: '$0', label: 'Avg Out-of-Pocket' },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="font-display font-bold text-white text-2xl">{s.value}</p>
                    <p className="text-red-300 text-xs font-semibold">{s.label}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="tel:+15555550100"
                  className="inline-flex items-center gap-2.5 bg-red-500 hover:bg-red-400 text-white font-bold rounded-xl px-8 h-14 text-base transition-colors shadow-lg shadow-red-500/30"
                >
                  <Phone className="w-5 h-5" />
                  Call Storm Hotline Now
                </a>
                <Button
                  asChild
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/5 rounded-xl h-14 px-8 text-base"
                >
                  <Link href="#form">Schedule Free Inspection</Link>
                </Button>
              </div>
            </div>

            {/* Form */}
            <div id="form" className="bg-white/[0.06] border border-white/[0.12] rounded-2xl p-6 backdrop-blur-sm">
              <p className="font-display font-bold text-white text-xl mb-1">Get Your Free Drone Inspection</p>
              <p className="text-slate-400 text-sm mb-5">We dispatch within 2 hours.</p>
              <LeadCaptureForm />
            </div>
          </div>
        </div>
      </section>

      {/* Recent Storms */}
      <section className="bg-forest-950 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex items-center gap-2 mb-6">
              <AlertTriangle className="w-4 h-4 text-red-400" />
              <p className="text-red-400 text-xs font-bold uppercase tracking-widest">Recent Storm Events in Your Area</p>
            </div>
          </Reveal>
          <Reveal className="grid sm:grid-cols-3 gap-4">
            {RECENT_STORMS.map((storm) => (
              <div key={storm.date} className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-5">
                <p className="text-gold-400 text-xs font-bold mb-1">{storm.date}</p>
                <h3 className="text-white font-semibold text-sm mb-2">{storm.event}</h3>
                <div className="flex flex-col gap-1">
                  <p className="text-slate-400 text-xs">Severity: <span className="text-red-400 font-semibold">{storm.severity}</span></p>
                  <p className="text-slate-400 text-xs">{storm.hail}</p>
                  <p className="text-slate-400 text-xs">{storm.claims} homes affected</p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Process Steps */}
      <section className="bg-forest-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="font-display font-bold text-white text-3xl sm:text-4xl text-center mb-12">
              Four steps. Zero stress.
            </h2>
          </Reveal>
          <Reveal className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map((step, i) => (
              <div key={i} className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6">
                <div className="w-11 h-11 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-5">
                  <step.icon className="w-5 h-5 text-red-400" />
                </div>
                <h3 className="font-display font-bold text-white text-lg mb-1">{step.title}</h3>
                <p className="text-red-400 text-xs font-semibold mb-2">{step.subtitle}</p>
                <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Insurance Carriers */}
      <section className="bg-forest-800 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest text-center mb-8">
              We work with all major insurance carriers
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {CARRIERS.map((carrier) => (
                <div
                  key={carrier}
                  className="bg-white/[0.04] border border-white/[0.08] rounded-xl px-6 py-3"
                >
                  <span className="text-white/50 text-sm font-semibold">{carrier}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-forest-950 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="font-display font-bold text-white text-3xl text-center mb-10">
              Storm damage questions, answered
            </h2>
          </Reveal>
          <Reveal>
            <FaqAccordion items={FAQS} outputSchema schemaPageName="Storm Damage FAQ" />
          </Reveal>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="bg-red-950 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <h2 className="font-display font-bold text-white text-3xl sm:text-4xl mb-4">
              Don&apos;t let a small claim become a $40,000 repair.
            </h2>
            <p className="text-slate-300 mb-8">The sooner we document damage, the stronger your claim.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="tel:+15555550100"
                className="inline-flex items-center gap-2.5 bg-red-500 hover:bg-red-400 text-white font-bold rounded-xl px-8 h-14 text-base transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call Storm Hotline: (555) 555-0100
              </a>
              <Button asChild className="bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-xl h-14 px-8 text-base">
                <Link href="#form">Schedule Free Drone Inspection</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </>
  )
}
