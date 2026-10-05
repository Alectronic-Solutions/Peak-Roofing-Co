import type { Metadata } from 'next'
import { AlertTriangle } from 'lucide-react'
import { Reveal } from '@/components/ui/reveal'
import ServicePageTemplate from '@/components/service-page-template'
import { getService } from '@/lib/services'

export const metadata: Metadata = {
  title: 'Storm Damage Roof Repair Springfield IL | Free Drone Inspection | Peak Roofing Co',
  description:
    'Hail or wind damage? Free drone inspection within 2 hours. We handle your insurance claim start to finish. On approved claims you pay only your deductible. Call (555) 555-0100.',
  alternates: { canonical: '/services/storm-damage/' },
}

const RECENT_STORMS = [
  { date: 'April 2024', event: 'Sangamon County Hailstorm', severity: 'Severe', hail: '2.5" hailstones', claims: '400+' },
  { date: 'August 2023', event: 'Straight-Line Wind Event', severity: 'High', hail: '75 mph gusts', claims: '180+' },
  { date: 'June 2022', event: 'Springfield Derecho', severity: 'Extreme', hail: '90 mph gusts', claims: '320+' },
]

const CARRIERS = ['State Farm', 'Allstate', 'USAA', 'Farmers', 'Liberty Mutual', 'Nationwide']

export default function StormDamageServicePage() {
  const service = getService('storm-damage')!
  return (
    <ServicePageTemplate service={service}>
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

      {/* Insurance Carriers */}
      <section className="bg-forest-900 py-14">
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
    </ServicePageTemplate>
  )
}
