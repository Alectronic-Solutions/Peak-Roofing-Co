'use client'

import Link from 'next/link'
import { ChevronRight, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface BreadcrumbItem {
  label: string
  href: string
}

interface PageHeroProps {
  eyebrow: string
  title: string
  subtitle?: string
  breadcrumbs: BreadcrumbItem[]
  ctaLabel?: string
  ctaHref?: string
  bgImage?: string
  variant?: 'default' | 'emergency'
  showPhone?: boolean
}

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  breadcrumbs,
  ctaLabel,
  ctaHref,
  bgImage = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80',
  variant = 'default',
  showPhone = false,
}: PageHeroProps) {
  const isEmergency = variant === 'emergency'

  return (
    <section className="relative min-h-[52vh] flex items-center overflow-hidden pt-20">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${bgImage}')` }}
      />
      <div className={`absolute inset-0 ${isEmergency ? 'bg-red-950/85' : 'bg-forest-950/85'}`} />
      <div className="absolute inset-0 bg-gradient-to-r from-forest-950/60 via-forest-950/30 to-transparent" />

      {/* Subtle grain */}
      <div className="grain absolute inset-0 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-1.5 text-sm text-slate-400 mb-6" aria-label="Breadcrumb">
          {breadcrumbs.map((crumb, i) => (
            <span key={crumb.href} className="flex items-center gap-1.5">
              {i < breadcrumbs.length - 1 ? (
                <>
                  <Link href={crumb.href} className="hover:text-gold-400 transition-colors">
                    {crumb.label}
                  </Link>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                </>
              ) : (
                <span className="text-gold-400 font-medium">{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>

        {/* Eyebrow */}
        <div className="flex items-center gap-2 mb-4">
          {isEmergency && (
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500" />
            </span>
          )}
          <span
            className={`text-xs font-bold tracking-widest uppercase ${
              isEmergency ? 'text-red-400' : 'text-gold-500'
            }`}
          >
            {eyebrow}
          </span>
        </div>

        {/* Title */}
        <h1 className="font-display font-bold text-white text-4xl sm:text-5xl lg:text-6xl leading-[1.08] tracking-tight max-w-3xl mb-4">
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="text-slate-300 text-lg sm:text-xl max-w-2xl mb-8 leading-relaxed">
            {subtitle}
          </p>
        )}

        {/* CTAs */}
        {(ctaLabel || showPhone) && (
          <div className="flex flex-wrap items-center gap-4 mt-6">
            {ctaLabel && ctaHref && (
              <Button
                asChild
                size="lg"
                className={`font-bold rounded-xl px-8 h-12 text-base ${
                  isEmergency
                    ? 'bg-red-500 hover:bg-red-400 text-white'
                    : 'bg-gold-500 hover:bg-gold-400 text-forest-950'
                }`}
              >
                <Link href={ctaHref}>{ctaLabel}</Link>
              </Button>
            )}
            {showPhone && (
              <a
                href="tel:+15555550100"
                className="flex items-center gap-2 text-white font-semibold hover:text-gold-400 transition-colors"
              >
                <Phone className="w-4 h-4" />
                (555) 555-0100
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
