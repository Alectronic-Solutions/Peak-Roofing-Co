'use client'

import { useState } from 'react'
import PageHero from '@/components/page-hero'
import FaqAccordion from '@/components/faq-accordion'
import InlineCta from '@/components/inline-cta'
import { Footer } from '@/components/footer'
import { YEARS_IN_BUSINESS, PHONE_DISPLAY, PHONE_HREF, asset } from '@/lib/company'

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
    { q: 'How long have you been in business?', a: `Peak Roofing Co was founded in 1987 by James Harlow. We have been serving Springfield and surrounding communities for ${YEARS_IN_BUSINESS} years.` },
    { q: 'Are you licensed and insured?', a: 'Yes. We hold Illinois Contractor License #RC-20847 and carry $2M general liability insurance and full workers\' compensation coverage. We\'re happy to provide certificates of insurance before any work begins.' },
    { q: 'What areas do you serve?', a: 'Everywhere within about 35 miles of Springfield, including Chatham, Sherman, Auburn, Rochester, Riverton, Taylorville, and Petersburg, across Sangamon, Christian, Menard, Logan, and Morgan counties.' },
    { q: 'Are you GAF certified?', a: 'Yes. We are a GAF Master Elite® Certified Contractor. This certification is held by fewer than 2% of roofing contractors in the U.S. It qualifies your home for GAF\'s enhanced warranty programs.' },
    { q: 'Do you offer free estimates?', a: 'Yes. Every estimate includes a free drone inspection of your roof. No ladders, no risk, no obligation.' },
    { q: 'Who will actually work on my roof?', a: 'Our own employees, led by the same foreman who quoted the job. We don’t subcontract residential work. James Harlow, who founded the company in 1987, still reviews every estimate.' },
    { q: 'Do you have reviews I can read?', a: 'We have 847 reviews across Google, the BBB, and Angi, averaging 4.9 stars. A few recent ones are on our homepage.' },
    { q: 'What is your BBB rating?', a: 'We have maintained an A+ rating with the Better Business Bureau since 2001.' },
  ],
  storm: [
    { q: 'How do I know if my roof has hail damage?', a: 'It is hard to spot from the ground. Look for shingle granules collecting in your gutters and for dents in gutters, downspouts, or AC fins. A free drone inspection will show you what is up there in 4K photos.' },
    { q: 'How long do I have to file an Illinois storm claim?', a: 'Most Illinois policies allow one to two years from the storm date; your policy sets the exact deadline. Filing sooner is better, because water damage that spreads after the storm may not be covered.' },
    { q: 'Will filing a claim raise my insurance rates?', a: 'Weather claims are generally treated differently from claims caused by neglect, but every insurer handles them its own way. Ask your agent before you file; we can give you the inspection report to help you decide.' },
    { q: 'What if the insurance adjuster says there\'s minimal damage?', a: 'We supplement underpaid claims routinely. Our licensed adjuster will re-document the damage, compare against established hail impact standards, and appeal the decision. We don\'t walk away from a valid claim.' },
    { q: 'What will I pay on an insurance-covered roof?', a: 'Your deductible. Your insurer pays the rest of the approved claim, and we never bill you above your deductible for covered work. We also never waive, rebate, or absorb deductibles; that practice is insurance fraud, and any contractor offering it is putting you at risk.' },
    { q: 'What is a public adjuster?', a: 'A public adjuster is a licensed professional who works for the homeowner, not the insurance company, to document damage and negotiate your claim settlement. Ours is on staff and included at no additional fee with every storm repair project.' },
    { q: 'What if my claim is denied?', a: 'We re-inspect, gather additional documentation, and file an appeal. We\'ve successfully overturned denied claims multiple times by supplementing with drone imagery and impact documentation the original adjuster didn\'t capture.' },
    { q: 'Do you do emergency tarping?', a: 'Yes. Available same day, 24/7. If a storm has left your roof exposed, call our emergency line and we\'ll tarp it within hours to prevent interior water damage while the claim processes.' },
  ],
  financing: [
    { q: 'Will checking my rate affect my credit score?', a: 'No. We use a soft credit pull to check rates, which has zero impact on your credit score. A hard inquiry only occurs if you accept and close a loan.' },
    { q: 'What credit score do I need?', a: 'We have financing options for scores as low as 580. Our best rates (6.9% APR) require 720+. Even with challenged credit, we\'ll work to find an option.' },
    { q: 'How quickly can I get approved?', a: 'Most approvals are returned within minutes during business hours. Same-day approval is the norm.' },
    { q: 'What are the financing terms available?', a: 'Three example plans: 5 years at 12.9% APR (580+ credit), 10 years at 9.9% APR (640+ credit), and 15 years at 6.9% APR (720+ credit). Your actual rate depends on the lender and your credit. No prepayment penalty on any plan.' },
    { q: 'Can I pay off my loan early?', a: 'Yes. None of our financing products include prepayment penalties. Pay off at any time. You only owe interest on the remaining balance.' },
    { q: 'When do payments start?', a: 'Monthly payments begin 30 days after project completion.' },
    { q: 'What if I\'m denied?', a: 'Ask us about a direct payment plan. For homeowners who don\'t qualify with a lender, we can often split the cost into a few scheduled payments.' },
    { q: 'How much can I finance?', a: 'Financing is available for projects from $2,500 to $75,000. Most residential replacements fall in the $8,500–$18,000 range.' },
  ],
  process: [
    { q: 'How long does a roof replacement take?', a: 'Most residential replacements are completed in a single day. Larger homes (3,000+ sq ft), complex roof systems, or projects requiring significant decking replacement may take two days. We\'ll give you a firm timeline before work begins.' },
    { q: 'Do I need to be home during the installation?', a: 'You don\'t have to be home, but we recommend being available for a final walkthrough at completion. Work is entirely exterior. No interior access required.' },
    { q: 'What happens to my gutters?', a: 'We work around them and protect them during tear-off. If they\'re damaged or you want new gutters, we can quote that separately.' },
    { q: 'How noisy is the installation process?', a: 'Roof installation is loud, primarily from nail guns and tear-off. Most jobs run 7 AM to 6 PM. Many homeowners choose to be out of the house for comfort, but it\'s not required.' },
    { q: 'What is the cleanup process?', a: 'Old roofing goes straight into a dumpster or trailer, and we run magnetic sweepers over the driveway, lawn, and beds for nails before we leave. Cleanup is included in every job.' },
    { q: 'Can I pick my shingle color?', a: 'Absolutely. We bring physical GAF shingle samples to every estimate so you can see them against your siding and trim before committing. Over 30 color options available.' },
    { q: 'What is a drone post-install inspection?', a: 'After every installation, we fly a drone survey of the completed roof before final payment is collected. We\'re looking for any ridge cap issues, missed flashing points, or damaged shingles from installation. It\'s our final quality check.' },
  ],
  warranty: [
    { q: 'What warranty do you offer?', a: 'A 10-year written workmanship warranty from us on the installation, and GAF\'s lifetime limited warranty on the shingles. You get both in writing at the final walkthrough.' },
    { q: 'Is the warranty transferable if I sell my home?', a: 'Yes. Our workmanship warranty transfers to the next owner at no charge, and GAF\'s shingle warranty can be transferred once under GAF\'s terms.' },
    { q: 'What does the workmanship warranty cover?', a: 'Our 10-year workmanship warranty covers any defects in installation: improper flashing, misapplied shingles, missed decking fastening patterns, etc. It does not cover storm damage, tree impact, or damage from unauthorized modifications.' },
    { q: 'What voids the warranty?', a: 'The workmanship warranty is voided by: unauthorized roof work by other contractors, installation of rooftop equipment without our consultation, and intentional damage. Normal weathering and storm events do not void the warranty.' },
    { q: 'What are GAF\'s enhanced warranties?', a: 'As a GAF Master Elite® contractor we can register qualifying roofs for GAF\'s System Plus or Golden Pledge warranties. They add longer non-prorated material coverage, and Golden Pledge adds up to 25 years of GAF-backed workmanship coverage. Ask about them at your estimate.' },
  ],
}

export default function FaqPageClient() {
  const [category, setCategory] = useState<Category>('general')

  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Roofing questions, answered"
        subtitle="Storm claims, financing, warranties, and what to expect on install day."
        bgImage={asset('/images/hero-faq.jpg')}
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
        subtext="Call and talk to someone in our Springfield office."
        primaryLabel={`Call ${PHONE_DISPLAY}`}
        primaryHref={PHONE_HREF}
      />

      <Footer />
    </>
  )
}
