import type { Metadata } from 'next'
import { Icon3D } from '@/components/ui/icon-3d'
import { Reveal } from '@/components/ui/reveal'
import ServicePageTemplate from '@/components/service-page-template'
import { getService } from '@/lib/services'
import { STORM_EVENTS } from '@/lib/cities'

export const metadata: Metadata = {
  title: 'Storm Damage Roof Repair Springfield IL | Free Drone Inspection | Peak Roofing Co',
  description:
    'Hail or wind damage? Free drone inspection within 2 hours. We handle your insurance claim start to finish. On approved claims you pay only your deductible. Call (555) 555-0100.',
  alternates: { canonical: '/services/storm-damage/' },
}

const RECENT_STORMS = [
  { date: 'April 2024', event: 'Sangamon County hailstorm', detail: STORM_EVENTS.hail2024.split(': ')[1], jobs: '400+' },
  { date: 'August 2023', event: 'Straight-line wind event', detail: STORM_EVENTS.wind2023.split(': ')[1], jobs: '180+' },
  { date: 'July 2022', event: 'Severe thunderstorms', detail: STORM_EVENTS.storm2022.split(': ')[1], jobs: '320+' },
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
              <Icon3D name="alert" size={26} />
              <p className="text-red-400 text-xs font-bold uppercase tracking-widest">Recent storms we responded to</p>
            </div>
          </Reveal>
          <Reveal className="grid sm:grid-cols-3 gap-4">
            {RECENT_STORMS.map((storm) => (
              <div key={storm.date} className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-5">
                <p className="text-gold-400 text-xs font-bold mb-1">{storm.date}</p>
                <h3 className="text-white font-semibold text-sm mb-2">{storm.event}</h3>
                <div className="flex flex-col gap-1">
                  <p className="text-slate-300 text-xs">{storm.detail}</p>
                  <p className="text-slate-400 text-xs">{storm.jobs} Peak inspections afterward</p>
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
