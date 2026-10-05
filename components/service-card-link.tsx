import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Icon3D, type IconName } from '@/components/ui/icon-3d'

interface ServiceCardLinkProps {
  slug: string
  title: string
  description: string
  price: string
  icon: IconName
  badge?: string
}

export default function ServiceCardLink({ slug, title, description, price, icon, badge }: ServiceCardLinkProps) {
  return (
    <Link
      href={`/services/${slug}/`}
      className="group relative flex flex-col bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6 hover:bg-white/[0.07] hover:border-gold-500/30 transition-all duration-300"
    >
      {badge && (
        <span className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-widest bg-red-500/20 text-red-400 border border-red-500/30 rounded-full px-2.5 py-0.5">
          {badge}
        </span>
      )}
      <Icon3D name={icon} size={52} className="-ml-1 mb-3 transition-transform duration-300 group-hover:-translate-y-0.5" />
      <h3 className="font-display font-bold text-white text-lg mb-2 group-hover:text-gold-400 transition-colors">
        {title}
      </h3>
      <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-4">{description}</p>
      <div className="flex items-center justify-between">
        <span className="text-gold-400 text-xs font-semibold">{price}</span>
        <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-gold-400 group-hover:translate-x-0.5 transition-all" />
      </div>
    </Link>
  )
}
