'use client'

import { useState, FormEvent } from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { CheckCircle, Loader2, Phone, Mail, MapPin, Clock, Shield, Award } from 'lucide-react'
import { Reveal } from '@/components/ui/reveal'

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

const TRUST_ITEMS = [
  { icon: Shield, text: 'Licensed & $2M Insured', sub: 'State Lic. #RC-20847' },
  { icon: Award, text: 'GAF Master Elite®', sub: 'Top 2% of contractors nationally' },
  { icon: Clock, text: 'Response within 2 hours', sub: 'Mon–Fri 7am–6pm, Sat 8am–2pm' },
  { icon: CheckCircle, text: 'BBB Accredited A+ Rating', sub: 'Verified since 2001' },
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
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: 'YOUR_ACCESS_KEY_HERE',
          subject: `New Contact - ${selectedService || 'General Inquiry'} | Peak Roofing Co`,
          ...fields,
          service: selectedService,
        }),
      })
      const data = await res.json()
      setFormState(data.success ? 'success' : 'error')
    } catch {
      setFormState('error')
    }
  }

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-28 bg-forest-900">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* Header */}
        <Reveal className="max-w-xl mb-10 lg:mb-16">
          <h2 className="font-display text-4xl lg:text-[3.25rem] font-bold text-white leading-[1.08] tracking-tight">
            Get in Touch
          </h2>
          <p className="mt-4 text-slate-300 text-lg leading-relaxed">
            Fill out the form and someone from our crew will call you back within 2 hours.
          </p>
        </Reveal>

        {formState === 'success' ? (
          <div className="max-w-lg mx-auto text-center py-16 animate-scale-in">
            <div className="w-20 h-20 bg-gold-400/10 border border-gold-400/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-gold-400" aria-hidden="true" />
            </div>
            <h3 className="font-display text-3xl font-bold text-white mb-3">Message Received!</h3>
            <p className="text-slate-300 text-lg leading-relaxed mb-4">
              A team member will reach out within 2 business hours.
            </p>
            <p className="text-slate-400 text-sm">
              For urgent matters, call{' '}
              <a href="tel:+15555550100" className="text-gold-400 hover:text-gold-300 font-medium">
                (555) 555-0100
              </a>
            </p>
          </div>
        ) : (
          <div className="grid lg:grid-cols-[1fr_380px] gap-8 lg:gap-14 items-start">

            {/* Form */}
            <Reveal
              as="form"
              onSubmit={handleSubmit}
              className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-7 lg:p-9 space-y-6"
            >
              {/* Name / Phone row */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="cf-name" className="text-slate-300 text-[13px] font-medium">
                    Full Name <span className="text-red-400">*</span>
                  </Label>
                  <Input
                    id="cf-name"
                    required
                    value={fields.name}
                    onChange={(e) => update('name', e.target.value)}
                    placeholder="Jane Smith"
                    className="bg-white/[0.04] border-white/[0.10] text-white placeholder:text-slate-500 focus-visible:ring-0 focus-visible:border-gold-400/70 min-h-[48px] rounded-xl hover:border-white/20 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cf-phone" className="text-slate-300 text-[13px] font-medium">
                    Phone <span className="text-red-400">*</span>
                  </Label>
                  <Input
                    id="cf-phone"
                    type="tel"
                    required
                    value={fields.phone}
                    onChange={(e) => update('phone', e.target.value)}
                    placeholder="(555) 000-0000"
                    className="bg-white/[0.04] border-white/[0.10] text-white placeholder:text-slate-500 focus-visible:ring-0 focus-visible:border-gold-400/70 min-h-[48px] rounded-xl hover:border-white/20 transition-colors"
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
                  type="email"
                  required
                  value={fields.email}
                  onChange={(e) => update('email', e.target.value)}
                  placeholder="jane@example.com"
                  className="bg-white/[0.04] border-white/[0.10] text-white placeholder:text-slate-500 focus-visible:ring-0 focus-visible:border-gold-400/70 min-h-[48px] rounded-xl hover:border-white/20 transition-colors"
                />
              </div>

              {/* Property address */}
              <div className="space-y-2">
                <Label htmlFor="cf-address" className="text-slate-300 text-[13px] font-medium">
                  Property Address
                </Label>
                <Input
                  id="cf-address"
                  value={fields.address}
                  onChange={(e) => update('address', e.target.value)}
                  placeholder="123 Main St, Springfield, IL 62701"
                  className="bg-white/[0.04] border-white/[0.10] text-white placeholder:text-slate-500 focus-visible:ring-0 focus-visible:border-gold-400/70 min-h-[48px] rounded-xl hover:border-white/20 transition-colors"
                />
              </div>

              {/* Service selector */}
              <div className="space-y-2">
                <Label className="text-slate-300 text-[13px] font-medium">
                  What do you need?
                </Label>
                <div className="flex flex-wrap gap-2">
                  {SERVICES.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setSelectedService(s === selectedService ? '' : s)}
                      className={`text-xs font-semibold px-3.5 py-2 rounded-full border transition-all duration-200 ${
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
                  rows={4}
                  value={fields.description}
                  onChange={(e) => update('description', e.target.value)}
                  placeholder="Describe your situation - roof age, visible damage, urgency, questions about insurance..."
                  className="bg-white/[0.04] border-white/[0.10] text-white placeholder:text-slate-500 focus-visible:ring-0 focus-visible:border-gold-400/70 rounded-xl hover:border-white/20 transition-colors resize-none"
                />
              </div>

              {formState === 'error' && (
                <p className="text-red-400 text-sm bg-red-950/30 border border-red-500/20 rounded-xl px-4 py-3" role="alert">
                  Submission failed. Please call us at{' '}
                  <a href="tel:+15555550100" className="underline font-medium">(555) 555-0100</a>.
                </p>
              )}

              <button
                type="submit"
                disabled={formState === 'submitting'}
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
                  'Send Request - We\'ll Reply Within 2 Hours'
                )}
              </button>

              <p className="text-slate-400 text-xs text-center">
                By submitting you authorize Peak Roofing Co to contact you regarding this inquiry.
                We never share your information.
              </p>
            </Reveal>

            {/* Sidebar */}
            <Reveal delay={120} className="space-y-6">

              {/* Contact info */}
              <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6">
                <h3 className="font-display text-base font-bold text-white mb-5">Direct Contact</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gold-400/10 border border-gold-400/25 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-3.5 h-3.5 text-gold-400" aria-hidden="true" />
                    </div>
                    <div>
                      <a href="tel:+15555550100" className="text-white font-semibold text-sm hover:text-gold-400 transition-colors">
                        (555) 555-0100
                      </a>
                      <p className="text-slate-400 text-xs mt-0.5">24/7 Storm Emergency Line</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gold-400/10 border border-gold-400/25 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-3.5 h-3.5 text-gold-400" aria-hidden="true" />
                    </div>
                    <div>
                      <a href="mailto:info@peakroofingco.com" className="text-white font-semibold text-sm hover:text-gold-400 transition-colors">
                        info@peakroofingco.com
                      </a>
                      <p className="text-slate-400 text-xs mt-0.5">Replies within 2 hours</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gold-400/10 border border-gold-400/25 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-3.5 h-3.5 text-gold-400" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">123 Industrial Blvd</p>
                      <p className="text-slate-400 text-xs mt-0.5">Springfield, IL 62701</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gold-400/10 border border-gold-400/25 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-3.5 h-3.5 text-gold-400" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">Office Hours</p>
                      <p className="text-slate-400 text-xs mt-0.5">Mon–Fri: 7am–6pm</p>
                      <p className="text-slate-400 text-xs">Saturday: 8am–2pm</p>
                      <p className="text-red-400 text-xs font-semibold mt-1">● 24/7 Storm Hotline Active</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Trust badges */}
              <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6">
                <h3 className="font-display text-base font-bold text-white mb-5">Why Trust Us</h3>
                <ul className="space-y-4">
                  {TRUST_ITEMS.map((item) => (
                    <li key={item.text} className="flex items-start gap-3">
                      <item.icon className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
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
