import { Icon3D, type IconName } from '@/components/ui/icon-3d'

const CREDENTIALS: { icon: IconName; label: string; sub: string }[] = [
  { icon: 'medal', label: 'GAF Master Elite®', sub: 'Top 2% of U.S. roofers' },
  { icon: 'seal', label: 'BBB Accredited', sub: 'A+ rating since 2001' },
  { icon: 'star', label: '4.9 Google Rating', sub: '847 reviews' },
  { icon: 'shield', label: '$2M Liability', sub: "Full workers' comp" },
  { icon: 'drone', label: 'FAA Part 107', sub: 'Certified drone pilots' },
  { icon: 'hardhat', label: 'OSHA Trained', sub: '10-hour certified crews' },
  { icon: 'trophy', label: 'Angi Super Service', sub: '6 years running' },
  { icon: 'doc', label: 'Licensed Adjuster', sub: 'On staff, no extra fee' },
]

function Track({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul className="flex flex-shrink-0 items-center gap-4 pr-4" aria-hidden={hidden || undefined}>
      {CREDENTIALS.map(({ icon, label, sub }) => (
        <li
          key={label}
          className="flex items-center gap-3 whitespace-nowrap rounded-xl border border-white/[0.07] bg-white/[0.03] px-4 py-3"
        >
          <Icon3D name={icon} size={30} />
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
