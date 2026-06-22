'use client'

import { useState, FormEvent } from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { CheckCircle, Loader2, Star, Lock } from 'lucide-react'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

const ROOF_AGES = [
  'Under 5 years',
  '5–10 years',
  '10–15 years',
  '15–20 years',
  'Over 20 years',
  "Don't know",
]

export function LeadCaptureForm() {
  const [state, setState] = useState<FormState>('idle')
  const [roofAge, setRoofAge] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setState('submitting')

    const formData = new FormData(e.currentTarget)
    const payload = {
      access_key: 'YOUR_ACCESS_KEY_HERE',
      name: formData.get('name'),
      phone: formData.get('phone'),
      zip: formData.get('zip'),
      roof_age: roofAge,
      subject: 'New Estimate Request - Peak Roofing Co',
    }

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await res.json()
      setState(data.success ? 'success' : 'error')
    } catch {
      setState('error')
    }
  }

  if (state === 'success') {
    return (
      <div className="bg-forest-800 border border-gold-400/30 rounded-2xl p-8 text-center shadow-[0_0_60px_rgba(245,158,11,0.1)] animate-scale-in">
        <div className="w-16 h-16 bg-gold-400/10 border border-gold-400/30 rounded-full flex items-center justify-center mx-auto mb-5">
          <CheckCircle className="w-8 h-8 text-gold-400" aria-hidden="true" />
        </div>
        <h3 className="font-display text-2xl font-bold text-white mb-2">
          We'll Call You Within 2 Hours
        </h3>
        <p className="text-slate-300 text-sm leading-relaxed">
          Our crew is reviewing your request. Watch for a call from{' '}
          <span className="text-white font-medium">(555) 555-0100</span>.
        </p>
      </div>
    )
  }

  return (
    <div className="relative">
      {/* Card glow */}
      <div
        className="absolute -inset-[1px] bg-gradient-to-b from-gold-400/25 via-gold-400/5 to-transparent rounded-2xl pointer-events-none"
        aria-hidden="true"
      />
      <form
        onSubmit={handleSubmit}
        className="relative bg-forest-800/95 border border-white/[0.08] rounded-2xl p-7 lg:p-8 backdrop-blur-xl shadow-[0_24px_80px_rgba(0,0,0,0.6)] space-y-5"
      >
        {/* Header */}
        <div className="pb-1">
          <h2 className="font-display text-[1.4rem] font-bold text-white leading-tight">
            Get Your Free Roof Estimate
          </h2>
          <p className="text-slate-400 text-sm mt-1">No commitment. Results within 24 hours.</p>
        </div>

        {/* Inline social proof */}
        <div className="flex items-center gap-2 py-3 px-4 bg-white/[0.03] border border-white/[0.06] rounded-xl">
          <div className="flex -space-x-2">
            {['12', '5', '33'].map((seed) => (
              <img
                key={seed}
                src={`https://i.pravatar.cc/32?img=${seed}`}
                alt=""
                className="w-7 h-7 rounded-full border-2 border-forest-800 object-cover"
              />
            ))}
          </div>
          <div className="flex items-center gap-1.5">
            <div className="flex">
              {[1,2,3,4,5].map((s) => (
                <Star key={s} className="w-3 h-3 fill-gold-400 text-gold-400" aria-hidden="true" />
              ))}
            </div>
            <span className="text-slate-300 text-xs">
              <span className="text-white font-semibold">847</span> homeowners trust us
            </span>
          </div>
        </div>

        <div className="space-y-4">
          <div className="space-y-1.5">
            <Label htmlFor="lead-name" className="text-slate-300 text-[13px] font-medium">
              Full Name <span className="text-red-400">*</span>
            </Label>
            <Input
              id="lead-name"
              name="name"
              required
              placeholder="John Smith"
              className="bg-white/[0.04] border-white/[0.10] text-white placeholder:text-slate-500
                         focus-visible:ring-0 focus-visible:border-gold-400/70 min-h-[48px] rounded-xl
                         transition-colors duration-200 hover:border-white/20"
            />
          </div>

          <div className="grid grid-cols-2 gap-3 min-w-0">
            <div className="space-y-1.5">
              <Label htmlFor="lead-phone" className="text-slate-300 text-[13px] font-medium">
                Phone <span className="text-red-400">*</span>
              </Label>
              <Input
                id="lead-phone"
                name="phone"
                type="tel"
                required
                placeholder="(555) 000-0000"
                className="bg-white/[0.04] border-white/[0.10] text-white placeholder:text-slate-500
                           focus-visible:ring-0 focus-visible:border-gold-400/70 min-h-[48px] rounded-xl
                           transition-colors duration-200 hover:border-white/20"
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="lead-zip" className="text-slate-300 text-[13px] font-medium">
                ZIP Code <span className="text-red-400">*</span>
              </Label>
              <Input
                id="lead-zip"
                name="zip"
                required
                placeholder="62701"
                maxLength={5}
                pattern="[0-9]{5}"
                className="bg-white/[0.04] border-white/[0.10] text-white placeholder:text-slate-500
                           focus-visible:ring-0 focus-visible:border-gold-400/70 min-h-[48px] rounded-xl
                           transition-colors duration-200 hover:border-white/20"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <Label className="text-slate-300 text-[13px] font-medium">
              How old is your roof?
            </Label>
            <Select onValueChange={setRoofAge}>
              <SelectTrigger className="bg-white/[0.04] border-white/[0.10] text-white min-h-[48px] rounded-xl focus:ring-0 focus:border-gold-400/70 hover:border-white/20 transition-colors">
                <SelectValue placeholder="Select age range" className="text-slate-500" />
              </SelectTrigger>
              <SelectContent className="bg-forest-800 border-white/10 rounded-xl shadow-2xl">
                {ROOF_AGES.map((v) => (
                  <SelectItem key={v} value={v} className="text-slate-300 focus:bg-white/[0.06] focus:text-white rounded-lg">
                    {v}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {state === 'error' && (
          <p className="text-red-400 text-sm bg-red-950/30 border border-red-500/20 rounded-xl px-4 py-3" role="alert">
            Something went wrong. Please call us at{' '}
            <a href="tel:+15555550100" className="underline font-medium">(555) 555-0100</a>.
          </p>
        )}

        <Button
          type="submit"
          disabled={state === 'submitting'}
          className="w-full bg-gold-500 hover:bg-gold-400 text-forest-950 font-bold
                     text-[15px] min-h-[52px] rounded-xl
                     shadow-[0_4px_24px_rgba(245,158,11,0.35)]
                     hover:shadow-[0_4px_32px_rgba(245,158,11,0.55)]
                     transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {state === 'submitting' ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" aria-hidden="true" />
              Sending…
            </>
          ) : (
            'Get My Free Estimate →'
          )}
        </Button>

        <div className="flex items-center justify-center gap-2 text-slate-400 text-xs">
          <Lock className="w-3 h-3 flex-shrink-0" aria-hidden="true" />
          <p>Your info is secure. We never share or sell your data.</p>
        </div>

      </form>
    </div>
  )
}
