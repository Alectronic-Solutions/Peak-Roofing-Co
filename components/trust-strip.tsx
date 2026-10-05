import { Award, BadgeCheck, ShieldCheck, Star, Aperture, HardHat, Medal, FileCheck2 } from 'lucide-react'

const CREDENTIALS = [
  { icon: Award, label: 'GAF Master Elite®', sub: 'Top 2% of U.S. roofers' },
  { icon: BadgeCheck, label: 'BBB Accredited', sub: 'A+ rating since 2001' },
  { icon: Star, label: '4.9 Google Rating', sub: '847 verified reviews' },
  { icon: ShieldCheck, label: '$2M Liability', sub: "Full workers' comp" },
  { icon: Aperture, label: 'FAA Part 107', sub: 'Certified drone pilots' },
  { icon: HardHat, label: 'OSHA Trained', sub: '10-hour certified crews' },
  { icon: Medal, label: 'Angi Super Service', sub: '6 years running' },
  { icon: FileCheck2, label: 'Licensed Adjuster', sub: 'On staff, no extra fee' },
]

function Track({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul className="flex flex-shrink-0 items-center gap-4 pr-4" aria-hidden={hidden || undefined}>
      {CREDENTIALS.map(({ icon: Icon, label, sub }) => (
        <li
          key={label}
          className="flex items-center gap-3 whitespace-nowrap rounded-xl border border-white/[0.07] bg-white/[0.03] px-4 py-3"
        >
          <Icon className="h-5 w-5 flex-shrink-0 text-gold-400" aria-hidden="true" />
          <span>
            <span className="block text-sm font-semibold leading-tight text-white">{label}</span>
            <span className="block text-[11px] text-slate-400">{sub}</span>
          </span>
        </li>
      ))}
    </ul>
  )
}

export function TrustStrip() {
  return (
    <section aria-label="Credentials and certifications" className="relative border-y border-white/[0.06] bg-forest-950 py-5">
      <div className="marquee relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="marquee-track flex w-max">
          <Track />
          <Track hidden />
        </div>
      </div>
    </section>
  )
}
