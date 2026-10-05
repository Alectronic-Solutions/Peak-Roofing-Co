'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Phone, ArrowRight } from 'lucide-react'
import { PHONE_HREF } from '@/lib/company'

/**
 * Sticky call / estimate bar for phones. Appears after the first screen and hides
 * while any `[data-hide-action-bar]` element (the contact form) is on screen.
 */
export function MobileActionBar() {
  const [pastHero, setPastHero] = useState(false)
  const [blocked, setBlocked] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setPastHero(window.scrollY > window.innerHeight * 0.6)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    const targets = document.querySelectorAll('[data-hide-action-bar]')
    const inView = new Set<Element>()
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => (e.isIntersecting ? inView.add(e.target) : inView.delete(e.target)))
      setBlocked(inView.size > 0)
    })
    targets.forEach((t) => observer.observe(t))

    return () => {
      window.removeEventListener('scroll', onScroll)
      observer.disconnect()
      setBlocked(false)
    }
  }, [pathname])

  const visible = pastHero && !blocked

  return (
    <div
      className={`safe-area-bottom fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-forest-950/90 px-3 pt-3 backdrop-blur-xl transition-transform duration-300 ease-out lg:hidden ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
      aria-hidden={!visible}
    >
      <div className="mx-auto grid max-w-lg grid-cols-[auto_1fr] gap-2.5">
        <a
          href={PHONE_HREF}
          tabIndex={visible ? 0 : -1}
          className="flex min-h-[50px] items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.06] px-5 text-sm font-bold text-white"
        >
          <span className="relative flex h-2 w-2" aria-hidden="true">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
          </span>
          <Phone className="h-4 w-4" aria-hidden="true" />
          Call 24/7
        </a>
        <Link
          href="/#contact"
          tabIndex={visible ? 0 : -1}
          className="flex min-h-[50px] items-center justify-center gap-2 rounded-xl bg-gold-500 text-sm font-bold text-forest-950 shadow-[0_4px_20px_rgba(245,158,11,0.35)]"
        >
          Get Free Estimate
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </div>
  )
}
