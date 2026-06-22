import Link from 'next/link'
import { Phone, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface InlineCtaProps {
  heading?: string
  subtext?: string
  primaryLabel?: string
  primaryHref?: string
  variant?: 'gold' | 'emergency'
}

export default function InlineCta({
  heading = 'Ready for a free estimate?',
  subtext = "We respond within 2 hours. No obligation, no pressure.",
  primaryLabel = 'Get Free Estimate',
  primaryHref = '/#contact',
  variant = 'gold',
}: InlineCtaProps) {
  const isEmergency = variant === 'emergency'

  return (
    <section
      className={`relative py-16 overflow-hidden ${
        isEmergency ? 'bg-red-950' : 'bg-forest-800'
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="font-display font-bold text-white text-2xl sm:text-3xl mb-1">
              {heading}
            </h2>
            <p className="text-slate-300 text-sm">{subtext}</p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Button
              asChild
              size="lg"
              className={`font-bold rounded-xl h-12 px-7 text-base ${
                isEmergency
                  ? 'bg-red-500 hover:bg-red-400 text-white'
                  : 'bg-gold-500 hover:bg-gold-400 text-forest-950'
              }`}
            >
              <Link href={primaryHref}>
                {primaryLabel}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <a
              href="tel:+15555550100"
              className="flex items-center gap-2 text-white font-semibold hover:text-gold-400 transition-colors text-sm"
            >
              <Phone className="w-4 h-4" />
              (555) 555-0100
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
