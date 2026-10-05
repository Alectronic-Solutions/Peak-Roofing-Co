'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Phone,
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Star,
  Clock,
  ShieldCheck,
  MapPin,
  BadgeCheck,
} from 'lucide-react'
import { NAV_MENUS, type NavMenu } from '@/lib/navigation'
import { PHONE_DISPLAY, PHONE_HREF, LICENSE, RATING, REVIEW_COUNT, asset } from '@/lib/company'

const CLOSE_DELAY_MS = 140

const MENU_INTRO: Record<string, { eyebrow: string; title: string; body: string; cta: string }> = {
  Services: {
    eyebrow: 'What we do',
    title: 'Every roofing service, one licensed crew.',
    body: 'From a single leak to a full commercial re-roof, with a named foreman on every job.',
    cta: 'All services',
  },
  'Our Work': {
    eyebrow: 'Proof, not promises',
    title: 'See the work before you hire us.',
    body: 'Real projects across Sangamon County, documented from tear-off to final walkthrough.',
    cta: 'Browse the gallery',
  },
  'Service Areas': {
    eyebrow: 'Where we work',
    title: 'Local crews within 35 miles of Springfield.',
    body: 'Crews are staged across the county so storm response stays under 70 minutes.',
    cta: 'All service areas',
  },
  Company: {
    eyebrow: 'Since 1987',
    title: 'Family owned. Still answering our own phone.',
    body: 'Three generations of Springfield homeowners have trusted Peak with their roof.',
    cta: 'Our story',
  },
}

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3 group flex-shrink-0" aria-label="Peak Roofing Co home">
      <span className="relative w-9 h-9 flex-shrink-0">
        <span className="absolute inset-0 bg-gold-500 rounded-[7px] rotate-[8deg] opacity-30 group-hover:rotate-[14deg] transition-transform duration-300" />
        <span className="relative w-9 h-9 bg-gold-500 rounded-[7px] flex items-center justify-center shadow-[0_4px_16px_rgba(245,158,11,0.35)]">
          <svg viewBox="0 0 32 32" className="w-[18px] h-[18px] fill-forest-950" aria-hidden="true">
            <polygon points="16,3 30,17 2,17" />
            <rect x="9" y="17" width="14" height="12" rx="1" />
          </svg>
        </span>
      </span>
      <span>
        <span className="font-display font-bold text-white text-[17px] tracking-tight leading-none block">
          Peak Roofing Co<span className="text-gold-500">.</span>
        </span>
        <span className="text-slate-400 text-[10px] tracking-[0.14em] uppercase font-medium">Since 1987</span>
      </span>
    </Link>
  )
}

function FeatureCard({ menu }: { menu: NavMenu }) {
  if (menu.layout === 'services') {
    return (
      <Link
        href="/services/storm-damage/"
        className="group/feat relative flex h-full min-h-[260px] flex-col justify-end overflow-hidden rounded-xl border border-white/10 p-5"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset('/videos/hero-2-mobile-poster.jpg')}
          alt=""
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover/feat:scale-105"
        />
        <span className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/70 to-forest-950/10" />
        <span className="relative">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-red-500/15 border border-red-400/30 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-red-300">
            <span className="h-1.5 w-1.5 rounded-full bg-red-400 animate-pulse" />
            Storm season
          </span>
          <span className="mt-3 block font-display text-lg font-bold leading-snug text-white">
            Free drone inspection within 2 hours.
          </span>
          <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-300">
            Book an inspection
            <ArrowRight className="h-4 w-4 transition-transform group-hover/feat:translate-x-1" aria-hidden="true" />
          </span>
        </span>
      </Link>
    )
  }

  if (menu.label === 'Our Work') {
    return (
      <Link
        href="/gallery/"
        className="group/feat relative flex h-full min-h-[260px] flex-col justify-end overflow-hidden rounded-xl border border-white/10 p-5"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset('/videos/hero-3-mobile-poster.jpg')}
          alt=""
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover/feat:scale-105"
        />
        <span className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/60 to-transparent" />
        <span className="relative">
          <span className="text-[10px] font-bold uppercase tracking-widest text-gold-400">Featured project</span>
          <span className="mt-1.5 block font-display text-lg font-bold leading-snug text-white">
            Westbrook Estates: 47 roofs after the April hail.
          </span>
          <span className="mt-1 block text-xs text-slate-300">Insurance-funded · Deductible only</span>
        </span>
      </Link>
    )
  }

  if (menu.layout === 'areas') {
    return (
      <div className="flex h-full flex-col justify-between rounded-xl border border-white/10 bg-forest-950/60 p-5">
        <div>
          <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-gold-400/25 bg-gold-400/10">
            <MapPin className="h-5 w-5 text-gold-400" aria-hidden="true" />
          </span>
          <p className="mt-4 font-display text-lg font-bold text-white leading-snug">Not sure if you&apos;re in range?</p>
          <p className="mt-1.5 text-sm text-slate-300 leading-relaxed">
            Give us your ZIP and we&apos;ll confirm coverage on the call.
          </p>
        </div>
        <a
          href={PHONE_HREF}
          className="mt-5 inline-flex items-center justify-center gap-2 rounded-lg bg-gold-500 px-4 py-2.5 text-sm font-bold text-forest-950 transition hover:bg-gold-400"
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          {PHONE_DISPLAY}
        </a>
      </div>
    )
  }

  return (
    <div className="flex h-full flex-col rounded-xl border border-white/10 bg-forest-950/60 p-5">
      <p className="text-[10px] font-bold uppercase tracking-widest text-gold-400">Credentials</p>
      <ul className="mt-3 space-y-3">
        {['GAF Master Elite® (top 2%)', 'BBB A+ since 2001', LICENSE, '$2M liability + full workers’ comp'].map(
          (item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm text-slate-200">
              <BadgeCheck className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold-400" aria-hidden="true" />
              {item}
            </li>
          )
        )}
      </ul>
    </div>
  )
}

function MegaPanel({ menu, isActive }: { menu: NavMenu; isActive: (href: string) => boolean }) {
  const intro = MENU_INTRO[menu.label]
  const itemGrid =
    menu.layout === 'services'
      ? 'grid-cols-2'
      : menu.layout === 'areas'
        ? 'grid-cols-2'
        : 'grid-cols-1'

  return (
    <div className="grid grid-cols-[230px_1fr_260px] gap-8 rounded-2xl border border-white/10 bg-forest-800/95 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.55)] backdrop-blur-xl">
      <div className="flex flex-col border-r border-white/[0.08] pr-8">
        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gold-400">{intro.eyebrow}</p>
        <p className="mt-2 font-display text-xl font-bold leading-snug text-white">{intro.title}</p>
        <p className="mt-2 text-sm leading-relaxed text-slate-300">{intro.body}</p>
        <Link
          href={menu.href}
          className="group/cta mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-gold-300 hover:text-gold-400"
        >
          {intro.cta}
          <ArrowRight className="h-4 w-4 transition-transform group-hover/cta:translate-x-1" aria-hidden="true" />
        </Link>
      </div>

      <ul className={`grid ${itemGrid} content-start gap-1.5`}>
        {menu.items.map((item) => {
          const active = isActive(item.href)
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={active ? 'page' : undefined}
                className={`group/item flex items-start gap-3 rounded-xl p-3 transition-colors ${
                  active ? 'bg-white/[0.07]' : 'hover:bg-white/[0.06]'
                }`}
              >
                {item.icon ? (
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border border-gold-400/20 bg-gold-400/10 transition-colors group-hover/item:border-gold-400/45 group-hover/item:bg-gold-400/20">
                    <item.icon className="h-4 w-4 text-gold-400" aria-hidden="true" />
                  </span>
                ) : (
                  <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold-400/70" aria-hidden="true" />
                )}
                <span className="min-w-0">
                  <span
                    className={`block text-sm font-semibold transition-colors ${
                      active ? 'text-gold-300' : 'text-white group-hover/item:text-gold-300'
                    }`}
                  >
                    {item.label}
                  </span>
                  {item.description && (
                    <span className="mt-0.5 block text-xs leading-snug text-slate-400">{item.description}</span>
                  )}
                </span>
              </Link>
            </li>
          )
        })}
      </ul>

      <FeatureCard menu={menu} />
    </div>
  )
}

function Accordion({ open, children }: { open: boolean; children: ReactNode }) {
  return (
    <div
      className={`grid transition-[grid-template-rows] duration-300 ease-out ${
        open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
      }`}
    >
      <div className={`overflow-hidden ${open ? '' : 'invisible'}`}>{children}</div>
    </div>
  )
}

export function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileSection, setMobileSection] = useState<string | null>('Services')
  const [openedOnce, setOpenedOnce] = useState<Record<string, boolean>>({})

  const closeTimer = useRef<number | undefined>(undefined)
  const triggerRefs = useRef<Record<string, HTMLButtonElement | null>>({})
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const drawerCloseRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpenMenu(null)
    setMobileOpen(false)
  }, [pathname])

  useEffect(() => {
    if (openMenu) setOpenedOnce((prev) => (prev[openMenu] ? prev : { ...prev, [openMenu]: true }))
  }, [openMenu])

  // Escape closes whichever menu is open and returns focus to its trigger.
  useEffect(() => {
    if (!openMenu && !mobileOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return
      if (openMenu) {
        triggerRefs.current[openMenu]?.focus()
        setOpenMenu(null)
      }
      if (mobileOpen) {
        setMobileOpen(false)
        menuButtonRef.current?.focus()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [openMenu, mobileOpen])

  // Lock page scroll behind the mobile drawer and move focus into it.
  useEffect(() => {
    if (!mobileOpen) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    drawerCloseRef.current?.focus()
    return () => {
      document.body.style.overflow = previous
    }
  }, [mobileOpen])

  useEffect(() => () => window.clearTimeout(closeTimer.current), [])

  const openNow = (label: string) => {
    window.clearTimeout(closeTimer.current)
    setOpenMenu(label)
  }
  const closeSoon = () => {
    window.clearTimeout(closeTimer.current)
    closeTimer.current = window.setTimeout(() => setOpenMenu(null), CLOSE_DELAY_MS)
  }

  const isActive = (href: string) => {
    if (href.includes('#')) return false
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href.replace(/\/$/, ''))
  }
  const menuActive = (menu: NavMenu) => isActive(menu.href) || menu.items.some((item) => isActive(item.href))

  const solid = scrolled || openMenu !== null

  return (
    <>
      {/* Page dim behind an open mega menu */}
      <div
        aria-hidden="true"
        onClick={() => setOpenMenu(null)}
        className={`fixed inset-0 z-40 hidden bg-forest-950/50 backdrop-blur-[2px] transition-opacity duration-300 lg:block ${
          openMenu ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      />

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,border-color] duration-500 border-b ${
          solid
            ? 'bg-forest-900/90 backdrop-blur-xl border-white/[0.08] shadow-[0_1px_40px_rgba(0,0,0,0.5)]'
            : 'bg-gradient-to-b from-forest-950/70 to-transparent border-transparent'
        }`}
      >
        {/* Utility bar (desktop) */}
        <div
          className={`hidden lg:block overflow-hidden transition-[max-height,opacity] duration-500 ${
            scrolled ? 'max-h-0 opacity-0' : 'max-h-10 opacity-100'
          }`}
        >
          <div className="border-b border-white/[0.07]">
            <div className="max-w-7xl mx-auto px-10 h-9 flex items-center justify-between text-xs text-slate-300">
              <div className="flex items-center gap-5">
                <a href={PHONE_HREF} className="group flex items-center gap-2 font-semibold text-white hover:text-gold-300">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
                  </span>
                  24/7 Storm Hotline: {PHONE_DISPLAY}
                </a>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5 text-gold-400" aria-hidden="true" />
                  Mon–Fri 7a–6p · Sat 8a–2p
                </span>
              </div>
              <div className="flex items-center gap-5">
                <a href="/#reviews" className="flex items-center gap-1.5 hover:text-white">
                  <span className="flex" aria-hidden="true">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <Star key={i} className="h-3 w-3 fill-gold-400 text-gold-400" />
                    ))}
                  </span>
                  <span>
                    <strong className="text-white">{RATING}</strong> from {REVIEW_COUNT} reviews
                  </span>
                </a>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="h-3.5 w-3.5 text-gold-400" aria-hidden="true" />
                  Licensed &amp; insured · {LICENSE}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Main bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-10">
          <div className="flex h-[68px] items-center justify-between gap-4 lg:h-[76px]">
            <Logo />

            {/* Desktop nav */}
            <nav
              className="hidden lg:flex items-center gap-0.5"
              aria-label="Main"
              onPointerLeave={(e) => e.pointerType === 'mouse' && closeSoon()}
              onBlur={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setOpenMenu(null)
              }}
            >
              {NAV_MENUS.map((menu) => {
                const open = openMenu === menu.label
                const panelId = `mega-${menu.label.toLowerCase().replace(/\s+/g, '-')}`
                return (
                  <div key={menu.label}>
                    <button
                      ref={(el) => {
                        triggerRefs.current[menu.label] = el
                      }}
                      type="button"
                      aria-expanded={open}
                      aria-controls={panelId}
                      onPointerEnter={(e) => e.pointerType === 'mouse' && openNow(menu.label)}
                      onClick={() => setOpenMenu(open ? null : menu.label)}
                      className={`relative flex items-center gap-1 rounded-lg px-3.5 py-2.5 text-sm font-medium transition-colors xl:px-4 ${
                        open || menuActive(menu) ? 'text-white' : 'text-slate-300 hover:text-white'
                      }`}
                    >
                      {menu.label}
                      <ChevronDown
                        className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? 'rotate-180 text-gold-400' : ''}`}
                        aria-hidden="true"
                      />
                      <span
                        className={`absolute inset-x-3.5 -bottom-0.5 h-0.5 rounded-full bg-gold-400 transition-transform duration-300 origin-left ${
                          open || menuActive(menu) ? 'scale-x-100' : 'scale-x-0'
                        }`}
                        aria-hidden="true"
                      />
                    </button>

                    {/* Panel is positioned against the header, but sits right after its trigger in DOM order for keyboard users. */}
                    <div
                      id={panelId}
                      onPointerEnter={(e) => e.pointerType === 'mouse' && openNow(menu.label)}
                      className={`absolute inset-x-0 top-full pt-2 transition-[opacity,transform,visibility] duration-200 ease-out ${
                        open ? 'visible opacity-100 translate-y-0' : 'invisible opacity-0 -translate-y-2 pointer-events-none'
                      }`}
                    >
                      <div className="max-w-7xl mx-auto px-10">
                        {openedOnce[menu.label] && <MegaPanel menu={menu} isActive={isActive} />}
                      </div>
                    </div>
                  </div>
                )
              })}
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-2 sm:gap-3">
              <a
                href={PHONE_HREF}
                className="hidden xl:flex items-center gap-2.5 group"
                aria-label={`Call ${PHONE_DISPLAY}`}
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gold-400/30 bg-gold-400/10 transition-colors group-hover:bg-gold-400/20">
                  <Phone className="h-4 w-4 text-gold-400" aria-hidden="true" />
                </span>
                <span className="leading-none">
                  <span className="block text-[10px] font-semibold uppercase tracking-wider text-slate-400">Call or text</span>
                  <span className="mt-1 block text-sm font-bold text-white">{PHONE_DISPLAY}</span>
                </span>
              </a>

              <Link
                href="/#contact"
                className="hidden sm:inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-gold-500 px-5 text-sm font-bold text-forest-950 shadow-[0_0_24px_rgba(245,158,11,0.3)] transition-all duration-300 hover:bg-gold-400 hover:shadow-[0_0_36px_rgba(245,158,11,0.5)]"
              >
                Free Estimate
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>

              <a
                href={PHONE_HREF}
                className="flex sm:hidden h-11 w-11 items-center justify-center rounded-full border border-gold-400/30 bg-gold-400/10 text-gold-400"
                aria-label={`Call ${PHONE_DISPLAY}`}
              >
                <Phone className="h-[18px] w-[18px]" aria-hidden="true" />
              </a>

              <button
                ref={menuButtonRef}
                type="button"
                className="lg:hidden flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-white transition-colors hover:bg-white/10"
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
                aria-expanded={mobileOpen}
                aria-controls="mobile-menu"
              >
                <Menu className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile drawer. Rendered outside <header>: its backdrop-filter would otherwise trap position:fixed. */}
      <div
        className={`lg:hidden fixed inset-0 z-[60] transition-[visibility] duration-300 ${mobileOpen ? 'visible' : 'invisible'}`}
      >
        <div
          aria-hidden="true"
          onClick={() => setMobileOpen(false)}
          className={`absolute inset-0 bg-forest-950/70 backdrop-blur-sm transition-opacity duration-300 ${
            mobileOpen ? 'opacity-100' : 'opacity-0'
          }`}
        />
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className={`absolute inset-y-0 right-0 flex w-full max-w-md flex-col bg-forest-900 shadow-2xl transition-transform duration-300 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] sm:border-l sm:border-white/10 ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex h-[68px] flex-shrink-0 items-center justify-between border-b border-white/[0.08] px-4 sm:px-6">
            <Logo />
            <button
              ref={drawerCloseRef}
              type="button"
              onClick={() => {
                setMobileOpen(false)
                menuButtonRef.current?.focus()
              }}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-white"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <nav aria-label="Mobile" className="flex-1 overflow-y-auto overscroll-contain px-4 py-4 sm:px-6">
            <ul className="space-y-2">
              {NAV_MENUS.map((menu) => {
                const open = mobileSection === menu.label
                const sectionId = `m-${menu.label.toLowerCase().replace(/\s+/g, '-')}`
                return (
                  <li
                    key={menu.label}
                    className={`rounded-2xl border transition-colors ${
                      open ? 'border-white/10 bg-white/[0.04]' : 'border-transparent'
                    }`}
                  >
                    <button
                      type="button"
                      aria-expanded={open}
                      aria-controls={sectionId}
                      onClick={() => setMobileSection(open ? null : menu.label)}
                      className="flex min-h-[52px] w-full items-center justify-between px-4 text-left font-display text-lg font-bold text-white"
                    >
                      <span className={menuActive(menu) ? 'text-gold-300' : ''}>{menu.label}</span>
                      <ChevronDown
                        className={`h-5 w-5 text-slate-400 transition-transform duration-300 ${open ? 'rotate-180 text-gold-400' : ''}`}
                        aria-hidden="true"
                      />
                    </button>
                    <div id={sectionId}>
                      <Accordion open={open}>
                        <ul
                          className={`grid gap-1 px-2 pb-3 ${
                            menu.layout === 'areas' ? 'grid-cols-2' : 'grid-cols-1'
                          }`}
                        >
                          {menu.items.map((item) => (
                            <li key={item.href}>
                              <Link
                                href={item.href}
                                onClick={() => setMobileOpen(false)}
                                className={`flex min-h-[48px] items-center gap-3 rounded-xl px-2.5 py-2 transition-colors active:bg-white/10 ${
                                  isActive(item.href) ? 'bg-gold-400/10' : ''
                                }`}
                              >
                                {item.icon && (
                                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border border-gold-400/20 bg-gold-400/10">
                                    <item.icon className="h-4 w-4 text-gold-400" aria-hidden="true" />
                                  </span>
                                )}
                                <span className="min-w-0">
                                  <span
                                    className={`block text-[15px] font-semibold leading-tight ${
                                      isActive(item.href) ? 'text-gold-300' : 'text-slate-100'
                                    }`}
                                  >
                                    {item.label}
                                  </span>
                                  {item.description && (
                                    <span className="mt-0.5 block text-xs leading-snug text-slate-400">
                                      {item.description}
                                    </span>
                                  )}
                                </span>
                              </Link>
                            </li>
                          ))}
                          <li className={menu.layout === 'areas' ? 'col-span-2' : ''}>
                            <Link
                              href={menu.href}
                              onClick={() => setMobileOpen(false)}
                              className="flex min-h-[44px] items-center gap-1.5 px-2.5 text-sm font-semibold text-gold-300"
                            >
                              {MENU_INTRO[menu.label].cta}
                              <ArrowRight className="h-4 w-4" aria-hidden="true" />
                            </Link>
                          </li>
                        </ul>
                      </Accordion>
                    </div>
                  </li>
                )
              })}
            </ul>

            <div className="mt-6 grid grid-cols-2 gap-3 rounded-2xl border border-white/[0.08] bg-forest-950/50 p-4 text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <Star className="h-4 w-4 flex-shrink-0 fill-gold-400 text-gold-400" aria-hidden="true" />
                <span>
                  <strong className="text-white">{RATING}</strong> · {REVIEW_COUNT} reviews
                </span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <ShieldCheck className="h-4 w-4 flex-shrink-0 text-gold-400" aria-hidden="true" />
                {LICENSE}
              </div>
              <div className="col-span-2 flex items-center gap-2 text-slate-300">
                <Clock className="h-4 w-4 flex-shrink-0 text-gold-400" aria-hidden="true" />
                Office Mon–Fri 7a–6p · Sat 8a–2p · Storm line 24/7
              </div>
            </div>
          </nav>

          <div className="safe-area-bottom grid flex-shrink-0 grid-cols-2 gap-3 border-t border-white/[0.08] bg-forest-950/80 px-4 pt-3 sm:px-6">
            <a
              href={PHONE_HREF}
              className="flex min-h-[52px] items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.06] text-sm font-bold text-white"
            >
              <Phone className="h-4 w-4 text-gold-400" aria-hidden="true" />
              Call now
            </a>
            <Link
              href="/#contact"
              onClick={() => setMobileOpen(false)}
              className="flex min-h-[52px] items-center justify-center gap-2 rounded-xl bg-gold-500 text-sm font-bold text-forest-950"
            >
              Free Estimate
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
