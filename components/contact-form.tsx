'use client'

import { useState, FormEvent } from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Loader2 } from 'lucide-react'
import { Icon3D, type IconName } from '@/components/ui/icon-3d'
import { Reveal } from '@/components/ui/reveal'
import { submitForm } from '@/lib/forms'
import { PHONE_DISPLAY, PHONE_HREF, EMAIL, LICENSE } from '@/lib/company'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

type Fields = {
  name: string
  email: string
  phone: string
  address: string
  serviceType: string
  description: string
}

const INITIAL_FIELDS: Fields = {
  name: '',
  email: '',
  phone: '',
  address: '',
  serviceType: '',
  description: '',
}

const SERVICES = [
  'Roof Replacement',
  'Storm Damage Repair',
  'Free Drone Inspection',
  'Insurance Claim Help',
  'Financing Inquiry',
  'Commercial Roofing',
  'General Question',
]

const TRUST_ITEMS: { icon: IconName; text: string; sub: string }[] = [
  { icon: 'shield', text: 'Licensed & $2M insured', sub: LICENSE },
  { icon: 'medal', text: 'GAF Master Elite®', sub: 'Top 2% of contractors nationally' },
  { icon: 'clock', text: 'Call back within 2 hours', sub: 'Mon–Fri 7am–6pm, Sat 8am–2pm' },
  { icon: 'seal', text: 'BBB accredited, A+ rating', sub: 'Since 2001' },
]

export function ContactForm() {
  const [formState, setFormState] = useState<FormState>('idle')
  const [fields, setFields] = useState<Fields>(INITIAL_FIELDS)
  const [selectedService, setSelectedService] = useState('')

  function update(key: keyof Fields, value: string) {
    setFields((prev) => ({ ...prev, [key]: value }))
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setFormState('submitting')
    const ok = await submitForm({
      subject: `New Contact - ${selectedService || 'General Inquiry'} | Peak Roofing Co`,
      ...fields,
      service: selectedService,
    })
    setFormState(ok ? 'success' : 'error')
  }

  return (
    <section id="contact" data-hide-action-bar className="py-16 sm:py-20 lg:py-28 bg-forest-900">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* Header */}
        <Reveal className="max-w-xl mb-10 lg:mb-16">
          <span className="text-gold-400 text-xs font-bold uppercase tracking-[0.18em]">Contact</span>
          <h2 className="mt-4 font-display text-4xl lg:text-[3.25rem] font-bold text-white leading-[1.08] tracking-tight">
            Get in Touch
          </h2>
          <p className="mt-4 text-slate-300 text-lg leading-relaxed">
            Tell us what’s going on with your roof. Someone from our Springfield office will call you back within 2 business hours.
          </p>
        </Reveal>

        {formState === 'success' ? (
          <div className="max-w-lg mx-auto text-center py-16 animate-scale-in" role="status">
            <Icon3D name="check" size={88} className="mx-auto mb-5" />
            <h3 className="font-display text-3xl font-bold text-white mb-3">Got it. Thanks.</h3>
            <p className="text-slate-300 text-lg leading-relaxed mb-4">
              A team member will reach out within 2 business hours.
            </p>
            <p className="text-slate-400 text-sm">
              For urgent matters, call{' '}
              <a href={PHONE_HREF} className="text-gold-400 hover:text-gold-300 font-medium">
                {PHONE_DISPLAY}
              </a>
            </p>
          </div>
        ) : (
          <div className="grid lg:grid-cols-[1fr_380px] gap-8 lg:gap-14 items-start">

            {/* Form */}
            <Reveal
              as="form"
              onSubmit={handleSubmit}
              className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-5 sm:p-7 lg:p-9 space-y-6"
            >
              {/* Name / Phone row */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="cf-name" className="text-slate-300 text-[13px] font-medium">
                    Full Name <span className="text-red-400">*</span>
                  </Label>
                  <Input
                    id="cf-name"
                    name="name"
                    autoComplete="name"
                    required
                    value={fields.name}
                    onChange={(e) => update('name', e.target.value)}
                    placeholder="Jane Smith"
                    className="bg-white/[0.04] border-white/[0.10] text-white placeholder:text-slate-400 focus-visible:ring-0 focus-visible:border-gold-400/70 min-h-[48px] rounded-xl hover:border-white/20 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cf-phone" className="text-slate-300 text-[13px] font-medium">
                    Phone <span className="text-red-400">*</span>
                  </Label>
                  <Input
                    id="cf-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    inputMode="tel"
                    required
                    value={fields.phone}
                    onChange={(e) => update('phone', e.target.value)}
                    placeholder="(555) 000-0000"
                    className="bg-white/[0.04] border-white/[0.10] text-white placeholder:text-slate-400 focus-visible:ring-0 focus-visible:border-gold-400/70 min-h-[48px] rounded-xl hover:border-white/20 transition-colors"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="cf-email" className="text-slate-300 text-[13px] font-medium">
                  Email Address <span className="text-red-400">*</span>
                </Label>
                <Input
                  id="cf-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={fields.email}
                  onChange={(e) => update('email', e.target.value)}
                  placeholder="jane@example.com"
                  className="bg-white/[0.04] border-white/[0.10] text-white placeholder:text-slate-400 focus-visible:ring-0 focus-visible:border-gold-400/70 min-h-[48px] rounded-xl hover:border-white/20 transition-colors"
                />
              </div>

              {/* Property address */}
              <div className="space-y-2">
                <Label htmlFor="cf-address" className="text-slate-300 text-[13px] font-medium">
                  Property Address
                </Label>
                <Input
                  id="cf-address"
                  name="address"
                  autoComplete="street-address"
                  value={fields.address}
                  onChange={(e) => update('address', e.target.value)}
                  placeholder="123 Main St, Springfield, IL 62701"
                  className="bg-white/[0.04] border-white/[0.10] text-white placeholder:text-slate-400 focus-visible:ring-0 focus-visible:border-gold-400/70 min-h-[48px] rounded-xl hover:border-white/20 transition-colors"
                />
              </div>

              {/* Service selector */}
              <div className="space-y-2">
                <Label id="cf-service-label" className="text-slate-300 text-[13px] font-medium">
                  What do you need?
                </Label>
                <div className="flex flex-wrap gap-2" role="group" aria-labelledby="cf-service-label">
                  {SERVICES.map((s) => (
                    <button
                      key={s}
                      type="button"
                      aria-pressed={selectedService === s}
                      onClick={() => setSelectedService(s === selectedService ? '' : s)}
                      className={`text-xs font-semibold px-3.5 min-h-[40px] rounded-full border transition-all duration-200 ${
                        selectedService === s
                          ? 'bg-gold-400/15 border-gold-400/50 text-gold-300'
                          : 'bg-white/[0.04] border-white/[0.10] text-slate-300 hover:text-white hover:border-white/25'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <Label htmlFor="cf-desc" className="text-slate-300 text-[13px] font-medium">
                  Tell us more
                </Label>
                <Textarea
                  id="cf-desc"
                  name="description"
                  rows={4}
                  value={fields.description}
                  onChange={(e) => update('description', e.target.value)}
                  placeholder="Roof age, any leaks or visible damage, whether there’s an insurance claim, how soon you need us…"
                  className="bg-white/[0.04] border-white/[0.10] text-white placeholder:text-slate-400 focus-visible:ring-0 focus-visible:border-gold-400/70 rounded-xl hover:border-white/20 transition-colors resize-none"
                />
              </div>

              {formState === 'error' && (
                <p className="text-red-400 text-sm bg-red-950/30 border border-red-500/20 rounded-xl px-4 py-3" role="alert">
                  Submission failed. Please call us at{' '}
                  <a href={PHONE_HREF} className="underline font-medium">{PHONE_DISPLAY}</a>.
                </p>
              )}

              <button
                type="submit"
                disabled={formState === 'submitting'}
                aria-live="polite"
                className="w-full bg-gold-500 hover:bg-gold-400 text-forest-950 font-bold
                           text-[15px] min-h-[56px] rounded-xl
                           shadow-[0_4px_24px_rgba(245,158,11,0.3)]
                           hover:shadow-[0_4px_36px_rgba(245,158,11,0.5)]
                           transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed
                           flex items-center justify-center gap-2"
              >
                {formState === 'submitting' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
                    Sending your request…
                  </>
                ) : (
                  'Send request'
                )}
              </button>

              <p className="text-slate-400 text-xs text-center">
                By sending this you agree that Peak Roofing Co may call or email you about this request. We don’t share your details.
              </p>
            </Reveal>

            {/* Sidebar */}
            <Reveal delay={120} className="space-y-6">

              {/* Contact info */}
              <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6">
                <h3 className="font-display text-base font-bold text-white mb-5">Direct Contact</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Icon3D name="phone" size={34} />
                    <div>
                      <a href={PHONE_HREF} className="text-white font-semibold text-sm hover:text-gold-400 transition-colors">
                        {PHONE_DISPLAY}
                      </a>
                      <p className="text-slate-400 text-xs mt-0.5">24/7 Storm Emergency Line</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon3D name="mail" size={34} />
                    <div>
                      <a href={`mailto:${EMAIL}`} className="text-white font-semibold text-sm hover:text-gold-400 transition-colors break-all">
                        {EMAIL}
                      </a>
                      <p className="text-slate-400 text-xs mt-0.5">Replies within 1 business day</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon3D name="pin" size={34} />
                    <div>
                      <p className="text-white font-semibold text-sm">123 Industrial Blvd</p>
                      <p className="text-slate-400 text-xs mt-0.5">Springfield, IL 62701</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon3D name="clock" size={34} />
                    <div>
                      <p className="text-white font-semibold text-sm">Office Hours</p>
                      <p className="text-slate-400 text-xs mt-0.5">Mon–Fri: 7am–6pm</p>
                      <p className="text-slate-400 text-xs">Saturday: 8am–2pm</p>
                      <p className="text-red-400 text-xs font-semibold mt-1">Storm line answered 24/7</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Trust badges */}
              <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6">
                <h3 className="font-display text-base font-bold text-white mb-5">Why Trust Us</h3>
                <ul className="space-y-4">
                  {TRUST_ITEMS.map((item) => (
                    <li key={item.text} className="flex items-center gap-3">
                      <Icon3D name={item.icon} size={34} />
                      <div>
                        <p className="text-slate-200 text-sm font-medium">{item.text}</p>
                        <p className="text-slate-400 text-xs mt-0.5">{item.sub}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        )}
      </div>
    </section>
  )
}
