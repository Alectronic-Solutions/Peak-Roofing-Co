'use client'

import { useState, useEffect } from 'react'
import { Phone, Menu, X, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NAV_LINKS = [
  {
    label: 'Services',
    href: '/services/',
    children: [
      { label: 'Roof Replacement', href: '/services/roof-replacement/' },
      { label: 'Storm Damage Repair', href: '/services/storm-damage/' },
      { label: 'Drone Inspections', href: '/services/drone-inspections/' },
      { label: 'Insurance Claims', href: '/services/insurance-claims/' },
      { label: 'Commercial Roofing', href: '/services/commercial-roofing/' },
      { label: 'Financing', href: '/services/financing/' },
    ],
  },
  { label: 'Our Work', href: '/gallery/' },
  { label: 'About', href: '/about/' },
  { label: 'Service Areas', href: '/service-areas/' },
  { label: 'FAQ', href: '/faq/' },
  { label: 'Contact', href: '/#contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href.replace(/\/$/, ''))
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-forest-900/90 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_1px_40px_rgba(0,0,0,0.6)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="flex items-center justify-between h-[72px] lg:h-[80px]">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group flex-shrink-0" aria-label="Peak Roofing Co - Home">
              <div className="relative w-9 h-9 flex-shrink-0">
                <div className="absolute inset-0 bg-gold-500 rounded-[6px] rotate-[8deg] opacity-30 group-hover:rotate-[12deg] transition-transform duration-300" />
                <div className="relative w-9 h-9 bg-gold-500 rounded-[6px] flex items-center justify-center">
                  <svg viewBox="0 0 32 32" className="w-[18px] h-[18px] fill-slate-950" aria-hidden="true">
                    <polygon points="16,3 30,17 2,17" />
                    <rect x="9" y="17" width="14" height="12" rx="1" />
                  </svg>
                </div>
              </div>
              <div>
                <span className="font-display font-bold text-white text-[17px] tracking-tight leading-none block">
                  Peak Roofing Co<span className="text-gold-500">.</span>
                </span>
                <span className="text-slate-400 text-[10px] tracking-[0.12em] uppercase font-medium">
                  Since 1987
                </span>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
              {NAV_LINKS.map((link) =>
                link.children ? (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <button
                      className="flex items-center gap-1 px-4 py-2.5 text-sm font-medium text-slate-300 hover:text-white transition-colors rounded-lg hover:bg-white/5"
                      aria-expanded={servicesOpen}
                    >
                      {link.label}
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {servicesOpen && (
                      <div className="absolute top-full left-0 pt-2 w-56 animate-fade-in">
                        <div className="bg-forest-800 border border-white/10 rounded-xl shadow-2xl shadow-black/60 overflow-hidden py-1">
                          {link.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              className={`block px-4 py-2.5 text-sm transition-colors ${
                                isActive(child.href)
                                  ? 'text-gold-400 bg-white/5'
                                  : 'text-slate-300 hover:text-white hover:bg-white/5'
                              }`}
                              onClick={() => setServicesOpen(false)}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`px-4 py-2.5 text-sm font-medium transition-colors rounded-lg hover:bg-white/5 ${
                      isActive(link.href) ? 'text-gold-400' : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-3">
              <a
                href="tel:+15555550100"
                className="hidden md:flex items-center gap-2.5 group"
                aria-label="Call our 24/7 storm hotline"
              >
                <div className="w-8 h-8 rounded-full bg-red-500/15 border border-red-500/30 flex items-center justify-center group-hover:bg-red-500/25 transition-colors">
                  <Phone className="w-3.5 h-3.5 text-red-400" />
                </div>
                <div className="hidden lg:block leading-none">
                  <p className="text-[10px] text-red-400 font-semibold uppercase tracking-wider">24/7 Emergency</p>
                  <p className="text-white font-bold text-sm">(555) 555-0100</p>
                </div>
              </a>

              <Button
                asChild
                className="hidden sm:flex bg-gold-500 hover:bg-gold-400 text-forest-950 font-bold text-sm
                           shadow-[0_0_24px_rgba(245,158,11,0.3)] hover:shadow-[0_0_36px_rgba(245,158,11,0.5)]
                           transition-all duration-300 min-h-[42px] px-5 rounded-lg"
              >
                <Link href="/#contact">Free Estimate</Link>
              </Button>

              {/* Mobile menu toggle */}
              <button
                className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden border-t border-white/[0.08] bg-forest-900/98 backdrop-blur-xl transition-all duration-300 overflow-hidden ${
            mobileOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="px-5 py-4 space-y-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`block px-4 py-3 text-sm font-medium rounded-lg hover:bg-white/5 transition-colors ${
                  isActive(link.href) ? 'text-gold-400' : 'text-slate-300 hover:text-white'
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 pb-1 border-t border-white/10 mt-3 flex flex-col gap-3">
              <a
                href="tel:+15555550100"
                className="flex items-center gap-3 px-4 py-3 bg-red-950/40 border border-red-500/30 rounded-lg"
              >
                <Phone className="w-4 h-4 text-red-400" />
                <div>
                  <p className="text-[10px] text-red-400 font-semibold uppercase tracking-wider">24/7 Emergency</p>
                  <p className="text-white font-bold text-sm">(555) 555-0100</p>
                </div>
              </a>
              <Button
                asChild
                className="w-full bg-gold-500 hover:bg-gold-400 text-slate-950 font-bold min-h-[48px]"
              >
                <Link href="/#contact" onClick={() => setMobileOpen(false)}>Get Free Estimate</Link>
              </Button>
            </div>
          </nav>
        </div>
      </header>
    </>
  )
}
