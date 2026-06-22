'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, ArrowUp } from 'lucide-react'
import { Reveal } from '@/components/ui/reveal'
import Link from 'next/link'

const SERVICES = [
  { label: 'Roof Replacement', href: '/services/roof-replacement/' },
  { label: 'Storm Damage Repair', href: '/services/storm-damage/' },
  { label: 'Drone Inspections', href: '/services/drone-inspections/' },
  { label: 'Insurance Claims', href: '/services/insurance-claims/' },
  { label: 'Financing', href: '/financing/' },
  { label: 'Commercial Roofing', href: '/services/commercial-roofing/' },
]

const SERVICE_AREAS = [
  { label: 'Springfield', slug: 'springfield' },
  { label: 'Westbrook', slug: 'westbrook' },
  { label: 'Chatham', slug: 'chatham' },
  { label: 'Sherman', slug: 'sherman' },
  { label: 'Auburn', slug: 'auburn' },
  { label: 'Rochester', slug: 'rochester' },
  { label: 'Riverton', slug: 'riverton' },
  { label: 'Lakeview Heights', slug: 'lakeview-heights' },
]

const CREDENTIALS = [
  'State Contractor Lic. #RC-20847',
  'GAF Master Elite® Certified Contractor',
  '$2M General Liability Insurance',
  "Workers' Compensation - Full Coverage",
  'BBB Accredited - A+ Rating Since 2001',
]

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'done'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setStatus('sending')
    try {
      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ access_key: 'YOUR_ACCESS_KEY_HERE', email, subject: 'Newsletter Signup' }),
      })
      setStatus('done')
    } catch {
      setStatus('done')
    }
  }

  if (status === 'done') {
    return <p className="text-gold-400 text-xs font-semibold mt-4">You&apos;re subscribed, thanks!</p>
  }

  return (
    <form onSubmit={handleSubmit} className="mt-5 flex gap-2">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email"
        required
        className="flex-1 min-w-0 bg-white/[0.05] border border-white/[0.10] text-white placeholder-slate-500 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-gold-500/50"
      />
      <button
        type="submit"
        disabled={status === 'sending'}
        className="shrink-0 bg-gold-500 hover:bg-gold-400 text-forest-950 font-bold rounded-xl px-4 py-2 text-xs transition-colors disabled:opacity-60"
      >
        Subscribe
      </button>
    </form>
  )
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-forest-950 border-t border-white/[0.08]">

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pt-14 pb-10">
        <Reveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10 sm:gap-x-8 sm:gap-y-12 lg:gap-12 mb-12">

          {/* Brand column — spans full width on mobile, 2 cols on sm */}
          <div className="sm:col-span-2 lg:col-span-1">
            {/* Logo */}
            <Link href="/" className="inline-flex items-center gap-3 mb-5 group" aria-label="Peak Roofing Co - Home">
              <div className="w-9 h-9 bg-gold-500 rounded-[6px] flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 32 32" className="w-[18px] h-[18px] fill-slate-950" aria-hidden="true">
                  <polygon points="16,3 30,17 2,17" />
                  <rect x="9" y="17" width="14" height="12" rx="1" />
                </svg>
              </div>
              <div>
                <span className="font-display font-bold text-white text-[17px] tracking-tight leading-none block">
                  Peak Roofing Co<span className="text-gold-400">.</span>
                </span>
                <span className="text-slate-400 text-[10px] tracking-[0.12em] uppercase font-medium">
                  Licensed Since 1987
                </span>
              </div>
            </Link>

            <p className="text-slate-300 text-sm leading-relaxed max-w-sm mb-6">
              Serving Springfield and surrounding communities with integrity, craftsmanship, and
              guaranteed results for over 37 years.
            </p>

            {/* Credentials */}
            <ul className="space-y-2 mb-6" aria-label="Credentials and licenses">
              {CREDENTIALS.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-slate-400 text-xs">
                  <span className="w-1 h-1 bg-gold-400/60 rounded-full flex-shrink-0" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>

            {/* Newsletter */}
            <div className="mb-6">
              <p className="text-white text-xs font-bold uppercase tracking-widest mb-1">Roofing tips & storm alerts</p>
              <NewsletterForm />
            </div>

            {/* Social links */}
            <div className="flex gap-2.5">
              {[
                { icon: Facebook, label: 'Facebook', href: '#' },
                { icon: Instagram, label: 'Instagram', href: '#' },
                { icon: Youtube, label: 'YouTube', href: '#' },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.07] flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/[0.08] hover:border-white/[0.14] transition-all duration-200"
                >
                  <Icon className="w-4 h-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-xs uppercase tracking-[0.14em] mb-5">Services</h3>
            <ul className="space-y-3">
              {SERVICES.map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    className="text-slate-300 text-sm hover:text-gold-400 transition-colors"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-white font-bold text-xs uppercase tracking-[0.14em] mb-5">Service Areas</h3>
            <ul className="space-y-3">
              {SERVICE_AREAS.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/service-areas/${area.slug}/`}
                    className="text-slate-300 text-sm hover:text-gold-400 transition-colors"
                  >
                    {area.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-xs uppercase tracking-[0.14em] mb-5">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+15555550100"
                  className="flex items-center gap-2.5 text-slate-400 hover:text-gold-400 transition-colors group"
                >
                  <Phone className="w-3.5 h-3.5 text-slate-400 group-hover:text-gold-400 flex-shrink-0 transition-colors" aria-hidden="true" />
                  <span className="text-sm font-medium">(555) 555-0100</span>
                </a>
                <p className="text-slate-400 text-xs mt-1 pl-6">24/7 Storm Emergency</p>
              </li>
              <li>
                <a
                  href="mailto:info@peakroofingco.com"
                  className="flex items-center gap-2.5 text-slate-400 hover:text-gold-400 transition-colors group"
                >
                  <Mail className="w-3.5 h-3.5 text-slate-400 group-hover:text-gold-400 flex-shrink-0 transition-colors" aria-hidden="true" />
                  <span className="text-sm">info@peakroofingco.com</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-slate-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="text-slate-300 text-sm">123 Industrial Blvd</p>
                  <p className="text-slate-300 text-sm">Springfield, IL 62701</p>
                </div>
              </li>
              <li>
                <div className="pl-[22px] space-y-0.5">
                  <p className="text-slate-400 text-xs">Mon–Fri: 7am–6pm</p>
                  <p className="text-slate-400 text-xs">Saturday: 8am–2pm</p>
                  <p className="text-red-500/70 text-xs font-semibold mt-1.5">● 24/7 Storm Hotline</p>
                </div>
              </li>
            </ul>
          </div>
        </Reveal>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.08] pt-6 flex flex-col gap-4">
          {/* Top row: copyright + legal links */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
            <p className="text-slate-400 text-xs leading-relaxed">
              © {currentYear} Peak Roofing Co. All rights reserved.{' '}
              <span className="block sm:inline mt-0.5 sm:mt-0">
                GAF Master Elite® is a registered trademark of GAF Materials Corporation.
              </span>
            </p>
            <nav aria-label="Legal links" className="flex-shrink-0">
              <ul className="flex gap-4 sm:gap-5 flex-wrap">
                <li><Link href="/privacy-policy/" className="text-slate-400 text-xs hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms/" className="text-slate-400 text-xs hover:text-white transition-colors">Terms of Service</Link></li>
                <li><Link href="/sitemap.xml" className="text-slate-400 text-xs hover:text-white transition-colors">Sitemap</Link></li>
              </ul>
            </nav>
          </div>

          {/* Bottom row: designed by + back to top */}
          <div className="flex justify-between items-center">
            <p className="text-slate-500 text-xs">
              Designed by{' '}
              <a
                href="https://alectronicsolutions.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-gold-400 transition-colors duration-200 underline underline-offset-2"
              >
                Alectronic Solutions
              </a>
            </p>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-slate-400 hover:text-gold-400 text-xs font-medium transition-colors group"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform duration-200" aria-hidden="true" />
              Back to top
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
