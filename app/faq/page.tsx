'use client'

import { useState } from 'react'
import PageHero from '@/components/page-hero'
import FaqAccordion from '@/components/faq-accordion'
import InlineCta from '@/components/inline-cta'
import { Footer } from '@/components/footer'

type Category = 'general' | 'storm' | 'financing' | 'process' | 'warranty'

const CATEGORIES: { value: Category; label: string }[] = [
  { value: 'general', label: 'General' },
  { value: 'storm', label: 'Storm & Insurance' },
  { value: 'financing', label: 'Financing' },
  { value: 'process', label: 'Process' },
  { value: 'warranty', label: 'Warranties' },
]

const FAQS: Record<Category, { q: string; a: string }[]> = {
  general: [
    { q: 'How long have you been in business?', a: 'Peak Roofing Co was founded in 1987 by James Harlow. We have been serving Springfield and surrounding communities for 37 years.' },
    { q: 'Are you licensed and insured?', a: 'Yes. We hold Illinois Contractor License #RC-20847 and carry $2M general liability insurance and full workers\' compensation coverage. We\'re happy to provide certificates of insurance before any work begins.' },
    { q: 'What areas do you serve?', a: 'We serve a 35-mile radius from Springfield, including Westbrook, Chatham, Sherman, Auburn, Rochester, Riverton, Lakeview Heights, and surrounding areas in Sangamon, Morgan, Menard, Logan, and Christian counties.' },
    { q: 'Are you GAF certified?', a: 'Yes. We are a GAF Master Elite® Certified Contractor. This certification is held by fewer than 2% of roofing contractors in the U.S. It qualifies your home for GAF\'s enhanced warranty programs.' },
    { q: 'Do you offer free estimates?', a: 'Yes. Every estimate includes a free drone inspection of your roof. No ladders, no risk, no obligation.' },
    { q: 'What makes Peak Roofing different from other contractors?', a: 'We have a licensed insurance adjuster on staff, an FAA-certified drone fleet for inspections, a 10-year workmanship warranty, and a 37-year track record. James Harlow still reviews every estimate personally.' },
    { q: 'Do you have reviews I can read?', a: 'We have 847 reviews across Google, BBB, and Angi with an average rating of 4.9 stars. You can find our Google reviews linked from the homepage.' },
    { q: 'What is your BBB rating?', a: 'We have maintained an A+ rating with the Better Business Bureau since 2001.' },
  ],
  storm: [
    { q: 'How do I know if my roof has hail damage?', a: 'Hail damage is almost impossible to spot from the ground. Signs include granules in your gutters, dented aluminum trim or AC fins, or soft spots when walking the roof. Call us. Our free drone inspection will show you exactly what\'s there with 4K imagery.' },
    { q: 'How long do I have to file an Illinois storm claim?', a: 'Illinois homeowners generally have 1–2 years from the storm date, depending on your specific policy. However, the sooner you file, the better. Hidden water damage compounds quickly and can void coverage.' },
    { q: 'Will filing a claim raise my insurance rates?', a: 'Storm and hail damage are weather events, not homeowner negligence. Most policies treat these as no-fault claims that don\'t affect your rate. In 37 years, we\'ve never seen a client lose coverage from a legitimate storm claim.' },
    { q: 'What if the insurance adjuster says there\'s minimal damage?', a: 'We supplement underpaid claims routinely. Our licensed adjuster will re-document the damage, compare against established hail impact standards, and appeal the decision. We don\'t walk away from a valid claim.' },
    { q: 'What does $0 out-of-pocket mean?', a: 'Insurance pays the full replacement cost. In most approved claims, your deductible is encompassed within the settlement. You pay your deductible. That\'s it. We never require payment above your deductible for insurance-covered work.' },
    { q: 'What is a public adjuster?', a: 'A public adjuster is a licensed professional who works for the homeowner, not the insurance company, to document damage and negotiate your claim settlement. Ours is on staff and included at no additional fee with every storm repair project.' },
    { q: 'What if my claim is denied?', a: 'We re-inspect, gather additional documentation, and file an appeal. We\'ve successfully overturned denied claims multiple times by supplementing with drone imagery and impact documentation the original adjuster didn\'t capture.' },
    { q: 'Do you do emergency tarping?', a: 'Yes. Available same day, 24/7. If a storm has left your roof exposed, call our emergency line and we\'ll tarp it within hours to prevent interior water damage while the claim processes.' },
  ],
  financing: [
    { q: 'Will checking my rate affect my credit score?', a: 'No. We use a soft credit pull to check rates, which has zero impact on your credit score. A hard inquiry only occurs if you accept and close a loan.' },
    { q: 'What credit score do I need?', a: 'We have financing options for scores as low as 580. Our best rates (6.9% APR) require 720+. Even with challenged credit, we\'ll work to find an option.' },
    { q: 'How quickly can I get approved?', a: 'Most approvals are returned within minutes during business hours. Same-day approval is the norm.' },
    { q: 'What are the financing terms available?', a: 'We offer three tiers: Starter Protection (12.9% APR, 60 months, 580+ credit), Homeowner Choice (9.9% APR, 120 months, 640+ credit), and Elite Finance (6.9% APR, 180 months, 720+ credit). No prepayment penalty on any tier.' },
    { q: 'Can I pay off my loan early?', a: 'Yes. None of our financing products include prepayment penalties. Pay off at any time. You only owe interest on the remaining balance.' },
    { q: 'When do payments start?', a: 'Monthly payments begin 30 days after project completion.' },
    { q: 'What if I\'m denied?', a: 'We\'ll work with you. We offer direct payment plans for customers who don\'t qualify for third-party financing. We\'ve never turned away a homeowner who genuinely needed a roof.' },
    { q: 'How much can I finance?', a: 'Financing is available for projects from $2,500 to $75,000. Most residential replacements fall in the $8,500–$18,000 range.' },
  ],
  process: [
    { q: 'How long does a roof replacement take?', a: 'Most residential replacements are completed in a single day. Larger homes (3,000+ sq ft), complex roof systems, or projects requiring significant decking replacement may take two days. We\'ll give you a firm timeline before work begins.' },
    { q: 'Do I need to be home during the installation?', a: 'You don\'t have to be home, but we recommend being available for a final walkthrough at completion. Work is entirely exterior. No interior access required.' },
    { q: 'What happens to my gutters?', a: 'We carefully remove and reinstall existing gutters. If they\'re damaged or you want new gutters, we can quote that separately. No gutter damage from our installation process.' },
    { q: 'How noisy is the installation process?', a: 'Roof installation is loud, primarily from nail guns and tear-off. Most jobs run 7 AM to 6 PM. Many homeowners choose to be out of the house for comfort, but it\'s not required.' },
    { q: 'What is the cleanup process?', a: 'We use magnetic sweepers on all driveways and yards to capture loose nails, roll up and haul away all old materials, and leave the property cleaner than we found it. Cleanup is included in every project.' },
    { q: 'Can I pick my shingle color?', a: 'Absolutely. We bring physical GAF shingle samples to every estimate so you can see them against your siding and trim before committing. Over 30 color options available.' },
    { q: 'What is a drone post-install inspection?', a: 'After every installation, we fly a drone survey of the completed roof before final payment is collected. We\'re looking for any ridge cap issues, missed flashing points, or damaged shingles from installation. It\'s our final quality check.' },
  ],
  warranty: [
    { q: 'What warranty do you offer?', a: 'We provide a 10-year workmanship warranty on all labor. Materials are covered by GAF\'s 30-year limited manufacturer warranty. Both warranties are in writing and provided at project completion.' },
    { q: 'Is the warranty transferable if I sell my home?', a: 'Yes. Both the workmanship warranty and GAF manufacturer warranty are transferable to new homeowners at no charge. This can be a meaningful selling point when listing your home.' },
    { q: 'What does the workmanship warranty cover?', a: 'Our 10-year workmanship warranty covers any defects in installation: improper flashing, misapplied shingles, missed decking fastening patterns, etc. It does not cover storm damage, tree impact, or damage from unauthorized modifications.' },
    { q: 'What voids the warranty?', a: 'The workmanship warranty is voided by: unauthorized roof work by other contractors, installation of rooftop equipment without our consultation, and intentional damage. Normal weathering and storm events do not void the warranty.' },
    { q: 'What is GAF\'s enhanced warranty (System Plus)?', a: 'Because we are GAF Master Elite® certified, your project may qualify for GAF\'s System Plus or Golden Pledge warranty, which extends coverage to 50 years on shingles and 25 years on workmanship, significantly beyond our standard 10/30-year offering. Ask us at estimate time.' },
  ],
}

export default function FaqPage() {
  const [category, setCategory] = useState<Category>('general')

  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Got Questions? We've Got Answers."
        subtitle="37 years. Every question answered straight."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'FAQ', href: '/faq/' }]}
      />

      <section className="bg-forest-900 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category filter */}
          <div className="flex gap-2 flex-wrap mb-10">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setCategory(cat.value)}
                className={`text-sm font-semibold rounded-xl px-5 py-2.5 transition-all ${
                  category === cat.value
                    ? 'bg-gold-500 text-forest-950'
                    : 'bg-white/[0.05] text-slate-300 hover:bg-white/[0.09] hover:text-white border border-white/[0.08]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <FaqAccordion
            items={FAQS[category]}
            outputSchema
            schemaPageName={`Peak Roofing Co FAQ: ${CATEGORIES.find((c) => c.value === category)?.label}`}
          />
        </div>
      </section>

      <InlineCta
        heading="Still have questions?"
        subtext="Call us and we'll answer anything. No sales pitch."
        primaryLabel="Call (555) 555-0100"
        primaryHref="tel:+15555550100"
      />

      <Footer />
    </>
  )
}
