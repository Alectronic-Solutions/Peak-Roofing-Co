import type { IconName } from '@/components/ui/icon-3d'
import { asset } from './company'

export interface Service {
  slug: string
  title: string
  shortTitle: string
  eyebrow: string
  tagline: string
  description: string
  price: string
  priceDetail: string
  heroImage: string
  /** Smaller crop of the hero for cards. */
  cardImage: string
  icon: IconName
  badge?: string
  features: string[]
  processSteps: { title: string; description: string }[]
  pricingNote: string
  faqs: { q: string; a: string }[]
  relatedSlugs: string[]
}

export const SERVICES: Service[] = [
  {
    slug: 'roof-replacement',
    title: 'Roof Replacement',
    shortTitle: 'Replacement',
    eyebrow: 'Full Replacement',
    tagline: 'A complete tear-off and new roof, usually finished in one day.',
    description:
      'When repairs stop making sense, a full replacement protects your home for the next 30 years. We handle everything from tear-off to final inspection.',
    price: 'From $4.50/sq ft',
    priceDetail: '$4.50–$8.00 per sq ft depending on pitch, materials, and decking condition.',
    heroImage: asset('/images/hero-roof-replacement.jpg'),
    cardImage: asset('/images/hero-roof-replacement-sm.jpg'),
    icon: 'house',
    features: [
      'Full tear-off of existing shingles and underlayment',
      'Ice & water shield barrier on all eaves and valleys',
      'GAF Timberline® HDZ shingles with a lifetime limited warranty',
      'New drip edge, ridge cap, and flashing',
      'Deck inspection and replacement of damaged boards',
      'Final drone post-install quality inspection',
      'Same-day cleanup and a magnetic nail sweep of the yard',
      'Manufacturer warranty registered in your name',
    ],
    processSteps: [
      { title: 'Free Drone Assessment', description: 'We fly a drone to map your roof\'s condition, identify soft spots, and measure square footage. No ladders, no guessing.' },
      { title: 'Material Selection', description: 'Pick your shingle line and color from physical samples held up against your siding, plus optional upgraded underlayment.' },
      { title: 'Full Tear-Off & Install', description: 'Our crew arrives at 7 AM, completes tear-off, installs ice barrier, new decking (if needed), and all new shingles, typically in one day.' },
      { title: 'Final Walkthrough & Warranty', description: 'We walk the entire roof with you, point out every detail, and register your manufacturer warranty on the spot.' },
    ],
    pricingNote:
      'Most residential replacements run $8,500–$18,000 depending on home size, pitch, and material grade. We provide written, itemized estimates with no hidden fees. Financing available from $189/month.',
    faqs: [
      { q: 'How long does a full replacement take?', a: 'Most homes are completed in a single day. Larger homes or complex roofs (multiple dormers, steep pitch) may take two days. We\'ll give you a firm timeline before work begins.' },
      { q: 'Do I need to leave my home during the replacement?', a: 'You don\'t have to, but many homeowners prefer to because of noise. There\'s no need to relocate: work is entirely exterior.' },
      { q: 'What happens to my gutters?', a: 'We carefully remove and reinstall existing gutters. If they\'re damaged or you want new gutters, we can quote that separately.' },
      { q: 'What is covered by the manufacturer vs. by Peak?', a: 'GAF\'s lifetime limited warranty covers the shingles. Our written workmanship warranty covers the installation for 10 years. Both transfer if you sell the home.' },
      { q: 'What shingle colors do you offer?', a: 'GAF Timberline offers 30+ color options. We bring physical samples to every estimate appointment so you can see them against your home\'s siding.' },
      { q: 'Can you match my existing shingle color?', a: 'In most cases, yes, especially with GAF\'s broad palette. On partial replacements we always bring samples to get the closest match.' },
    ],
    relatedSlugs: ['storm-damage', 'drone-inspections', 'financing'],
  },
  {
    slug: 'storm-damage',
    title: 'Storm Damage Repair',
    shortTitle: 'Storm Repair',
    eyebrow: 'Storm & Hail Damage',
    tagline: 'A drone over your roof within 2 hours of your call. On approved claims, you pay your deductible.',
    description:
      'Hail and wind damage is often invisible from the ground. Our FAA-certified drone finds every impact point and we handle your insurance claim start to finish.',
    price: 'Deductible only',
    priceDetail: 'We work directly with your insurer. Your deductible is all you pay in most cases.',
    heroImage: asset('/images/hero-storm.jpg'),
    cardImage: asset('/images/hero-storm-sm.jpg'),
    icon: 'storm',
    badge: 'Most Urgent',
    features: [
      'FAA Part 107 certified drone inspection within 2 hours',
      'Full hail impact photo report, shareable with your insurer',
      'Licensed insurance adjuster on staff',
      'We file your claim and negotiate on your behalf',
      'Work with all major carriers: State Farm, Allstate, Farmers, USAA',
      'Emergency tarping available same-day to prevent interior damage',
      'Approved storm claims: you pay your deductible, nothing more',
      'Claim window guidance: Illinois homeowners have up to 2 years',
    ],
    processSteps: [
      { title: 'Free Drone Inspection', description: 'We dispatch within 2 hours of your call. Our drone captures 4K imagery of every square foot: hail dents, lifted shingles, cracked flashing, granule loss.' },
      { title: 'Damage Report & Estimate', description: 'You receive a full PDF damage report with annotated photos and a written estimate, exactly what your insurance company needs.' },
      { title: 'We Handle Your Claim', description: 'Our on-staff adjuster files your claim, attends the insurer\'s inspection, and negotiates to ensure every item is covered.' },
      { title: 'Deductible Only', description: 'Insurance pays the approved claim and we build the roof. For covered work, your deductible is all you pay.' },
    ],
    pricingNote:
      'For legitimate storm claims, your insurance covers the full replacement cost minus your deductible. We\'ve handled 1,200+ claims and push back on underpaid estimates with documentation. If your claim is denied, we re-inspect and re-appeal at no charge.',
    faqs: [
      { q: 'How do I know if my roof has hail damage?', a: 'Hail damage is almost impossible to spot from the ground. Look for granules in your gutters, dented AC fins, or dings on aluminum trim. Call us for a free drone inspection and we\'ll show you exactly what\'s there.' },
      { q: 'Will filing a claim raise my insurance rates?', a: 'Storm damage claims are typically categorized as "weather events" and don\'t affect your personal rate. Your insurer can confirm this. We\'ve never seen a client dropped for filing a legitimate hail claim.' },
      { q: 'What if the insurance adjuster undervalues the damage?', a: 'We supplement underpaid claims routinely. Our licensed adjuster re-documents the damage and escalates until it\'s covered fairly.' },
      { q: 'How long do I have to file an Illinois storm claim?', a: 'Illinois homeowners generally have 1–2 years from the storm date, depending on your policy. Don\'t wait: hidden water damage compounds quickly.' },
      { q: 'Do you do emergency tarping?', a: 'Yes. If your home is exposed to weather after a storm, we tarp same-day while the claim is processed.' },
    ],
    relatedSlugs: ['drone-inspections', 'insurance-claims', 'roof-replacement'],
  },
  {
    slug: 'drone-inspections',
    title: 'Drone Inspections',
    shortTitle: 'Inspections',
    eyebrow: 'FAA-Certified Drone Fleet',
    tagline: 'Free with every estimate. Full 4K roof report in 24 hours.',
    description:
      'Our FAA Part 107 certified pilots fly a complete roof inspection so you know exactly what\'s up there. No ladders, no risk, no guessing.',
    price: 'Free with estimate',
    priceDetail: 'Free with every estimate appointment. Standalone inspection: $149.',
    heroImage: asset('/images/hero-drone.jpg'),
    cardImage: asset('/images/hero-drone-sm.jpg'),
    icon: 'drone',
    features: [
      'FAA Part 107 certified pilots, fully insured',
      '4K imagery of every square foot of roof surface',
      'Hail impact mapping with annotated callouts',
      'Flashing failure detection at all penetrations',
      'Soft spot and decking damage identification',
      'Ridge, valley, and hip condition assessment',
      'Full PDF report delivered within 24 hours',
      'Report formatted for direct submission to insurers',
    ],
    processSteps: [
      { title: 'Schedule Your Flight', description: 'Book online or by phone. We arrive at the agreed time with a fully charged drone fleet and FAA credentials.' },
      { title: 'Full Roof Survey', description: 'Our pilot systematically covers every plane of your roof in overlapping passes. The flight takes 15–30 minutes.' },
      { title: '4K Analysis', description: 'We review footage frame-by-frame, annotate every defect, and measure affected areas for accurate scoping.' },
      { title: 'Report Delivery', description: 'You receive a professional PDF with annotated photos, a condition summary, and a written estimate within 24 hours.' },
    ],
    pricingNote:
      'Drone inspections are free when combined with an estimate appointment. If you only need an inspection (rental property, pre-purchase, insurance documentation), standalone inspections are $149 and include the full PDF report.',
    faqs: [
      { q: 'Is the drone inspection really free?', a: 'Yes, free when scheduled alongside a free estimate appointment. There\'s no obligation to proceed with any work.' },
      { q: 'How long does the inspection take?', a: 'The flight itself takes 15–30 minutes depending on roof complexity. The full PDF report is delivered within 24 hours.' },
      { q: 'Can I share the drone report with my insurance company?', a: 'Absolutely. The report is formatted specifically for insurer submission and includes GPS coordinates, timestamps, and annotated 4K stills.' },
      { q: 'What if I have a multi-story or steep roof?', a: 'That\'s exactly why we use drones. Our pilots are FAA-certified for residential inspections on any pitch or height, no ladders required.' },
      { q: 'Do you inspect commercial roofs?', a: 'Yes. Flat commercial roofs are among our most common drone inspections. We can spot membrane bubbling, ponding, and HVAC curb failures.' },
    ],
    relatedSlugs: ['storm-damage', 'roof-replacement', 'insurance-claims'],
  },
  {
    slug: 'insurance-claims',
    title: 'Insurance Claims Assistance',
    shortTitle: 'Insurance Claims',
    eyebrow: 'On-Staff Licensed Adjuster',
    tagline: 'We file, negotiate, and close your claim. You pay nothing extra.',
    description:
      'Insurers write their estimates from what their adjuster saw. Ours documents everything first, so the claim reflects the full scope of the damage.',
    price: 'Included, no extra fee',
    priceDetail: 'No additional fee for claims assistance. It\'s included with every storm repair job.',
    heroImage: asset('/images/hero-insurance.jpg'),
    cardImage: asset('/images/hero-insurance-sm.jpg'),
    icon: 'shield',
    features: [
      'On-staff licensed public adjuster',
      'We file the initial claim on your behalf',
      'Attend the insurer\'s on-site inspection with you',
      'Supplement claims for items the adjuster missed',
      'Work with all major carriers: State Farm, Allstate, USAA, Farmers, Liberty Mutual',
      'Document hidden damage before it\'s visible to the insurer',
      'No additional fee, included with every storm repair project',
      '1,200+ claims filed on behalf of homeowners',
    ],
    processSteps: [
      { title: 'Free Damage Documentation', description: 'We document every damaged item with 4K drone imagery before your insurer\'s adjuster visits, establishing a complete record.' },
      { title: 'Claim Filing', description: 'Our adjuster files your claim with the correct damage codes, photos, and repair scope to maximize the initial payout.' },
      { title: 'Adjuster Accompaniment', description: 'We attend your insurer\'s on-site inspection and walk the adjuster through every damage point. Nothing gets missed.' },
      { title: 'Supplement & Close', description: 'If the initial settlement is short, we supplement with additional documentation. We don\'t close a job until your claim is fully funded.' },
    ],
    pricingNote:
      'Claims assistance is included at no extra charge with every storm repair project we complete. You pay your deductible. That\'s it. We do not charge a percentage of the claim settlement like independent public adjusters often do.',
    faqs: [
      { q: 'What is a public adjuster?', a: 'A public adjuster works for the homeowner, not the insurance company. They document damage, file claims, and negotiate settlements on your behalf. Ours is licensed and on staff, no additional fee.' },
      { q: 'What will I actually pay?', a: 'Your deductible. Your insurer pays the rest of the approved claim. You write one check (your deductible) and we handle everything else. We never waive or absorb deductibles; that is insurance fraud, and it puts the homeowner at risk too.' },
      { q: 'What if my claim is denied?', a: 'We re-inspect, gather additional documentation, and file an appeal. We\'ve successfully overturned denied claims by supplementing with detailed drone imagery the original adjuster didn\'t have.' },
      { q: 'How long does the claims process take?', a: 'Most claims are approved within 2–4 weeks. We begin emergency repairs (tarping, flashing) immediately while the claim processes.' },
      { q: 'Do I need to be present when the insurance adjuster comes?', a: 'We recommend it, but our adjuster can represent you if needed. We\'ll brief you on what to expect beforehand.' },
    ],
    relatedSlugs: ['storm-damage', 'drone-inspections', 'roof-replacement'],
  },
  {
    slug: 'financing',
    title: 'Roof Financing',
    shortTitle: 'Financing',
    eyebrow: 'Flexible Payment Plans',
    tagline: 'A new roof for as low as $189/month. Check your rate in 60 seconds.',
    description:
      'Spread the cost of a roof over 5 to 15 years. We compare offers from 12 lenders, and checking your rate is a soft pull that does not affect your credit score.',
    price: 'From 6.9% APR',
    priceDetail: 'Rates from 6.9%–12.9% APR depending on credit score and term. Soft pull only to check rates.',
    heroImage: asset('/images/hero-financing.jpg'),
    cardImage: asset('/images/hero-financing-sm.jpg'),
    icon: 'card',
    features: [
      'Check your rate in 60 seconds, no credit impact',
      '3 financing tiers to match every credit profile',
      'Same-day approval in most cases',
      '12-lender network for best available rate',
      'Terms from 12 to 180 months',
      'No prepayment penalty, pay off early anytime',
      'Deferred payment options available',
      'Install scheduled as soon as you approve',
    ],
    processSteps: [
      { title: 'Check Your Rate', description: 'Fill out a 2-minute form online or in person. Soft credit pull only, zero impact to your score.' },
      { title: 'Review Your Options', description: 'We present all available offers from our 12-lender network side by side. No pressure, no upsell.' },
      { title: 'Get Approved', description: 'Most approvals come through same-day. Sign your financing agreement and we schedule your install immediately.' },
      { title: 'Work Begins', description: 'Your roof gets replaced on your schedule. Monthly payments start 30 days after project completion.' },
    ],
    pricingNote:
      'Financing is available for projects from $2,500–$75,000. APR ranges from 6.9% (720+ credit, 180-month term) to 12.9% (580+ credit, 60-month term). Monthly payments shown are estimates; your actual rate depends on creditworthiness and term selected.',
    faqs: [
      { q: 'Will checking my rate hurt my credit?', a: 'No. Rate checks use a soft credit pull which has zero impact on your score. A hard pull only occurs if you accept and close a loan.' },
      { q: 'What credit score do I need?', a: 'We have options for scores as low as 580. Our best rates (6.9% APR) require 720+. Even with challenged credit, we\'ll find an option.' },
      { q: 'How quickly can I get approved?', a: 'Most applicants receive a decision within minutes. Same-day approval is typical during business hours.' },
      { q: 'Can I pay off my loan early?', a: 'Yes. None of our financing products include prepayment penalties. Pay it off anytime; you only pay interest on the remaining balance.' },
      { q: 'What if I\'m denied?', a: 'We\'ll work with you to find an alternative, including payment plans directly with Peak Roofing Co. We don\'t turn away homeowners who need a roof.' },
    ],
    relatedSlugs: ['roof-replacement', 'storm-damage', 'commercial-roofing'],
  },
  {
    slug: 'commercial-roofing',
    title: 'Commercial Roofing',
    shortTitle: 'Commercial',
    eyebrow: 'Commercial & Flat Roofs',
    tagline: 'TPO, EPDM, modified bitumen: every commercial system, installed right.',
    description:
      'From small retail buildings to multi-tenant complexes, we install and maintain all flat and low-slope commercial roofing systems with minimal business disruption.',
    price: 'Custom quote',
    priceDetail: 'Commercial projects are quoted per square foot based on system type, size, and access. Contact us for a site visit.',
    heroImage: asset('/images/hero-commercial.jpg'),
    cardImage: asset('/images/hero-commercial-sm.jpg'),
    icon: 'building',
    features: [
      'TPO (Thermoplastic Polyolefin) single-ply membrane systems',
      'EPDM rubber roofing with a 25–30 year service life',
      'Modified bitumen for high-traffic flat roofs',
      'Roof coating and restoration as an alternative to full replacement',
      'Preventive maintenance contracts with scheduled inspections',
      'Drone inspection for large multi-building portfolios',
      'Work scheduled nights/weekends to minimize business disruption',
      'OSHA-compliant crews with commercial liability coverage',
    ],
    processSteps: [
      { title: 'Site Assessment', description: 'We visit your property, inspect the existing system, evaluate drainage, and measure square footage. Drone used for large roofs.' },
      { title: 'System Recommendation', description: 'We recommend the right system for your building type, budget, and energy goals, with written comparisons of each option.' },
      { title: 'Scheduled Installation', description: 'Work is phased and scheduled around your operations. We\'ve completed many installs after-hours to keep businesses open.' },
      { title: 'Maintenance Plan', description: 'After installation, we offer annual inspection and maintenance contracts to keep your warranty valid and catch problems early.' },
    ],
    pricingNote:
      'Commercial roofing is priced by system and square footage. TPO installs typically run $7–$13/sq ft. EPDM runs $6–$11/sq ft. Restoration coatings start at $3/sq ft. We provide detailed written proposals with ROI comparison between restoration and replacement.',
    faqs: [
      { q: 'Do you handle multi-building portfolios?', a: 'Yes. We\'ve worked with property management companies on portfolios of 5–30 buildings. We provide a master inspection report and phased replacement schedule.' },
      { q: 'What\'s the difference between TPO and EPDM?', a: 'TPO (white/light-colored) reflects heat, reducing cooling costs, great for hot climates. EPDM (black rubber) is extremely durable and performs well in cold climates. We\'ll recommend based on your specific building.' },
      { q: 'Can you restore instead of replace?', a: 'Often, yes. If the existing membrane is structurally sound, a silicone or acrylic coating can add 10–15 years of life at 30–50% of replacement cost.' },
      { q: 'Do you offer maintenance contracts?', a: 'Yes. Annual maintenance contracts include two inspections per year, minor repairs, and drain clearing, keeping your warranty valid and preventing costly emergency calls.' },
      { q: 'Can you work around our business hours?', a: 'Absolutely. We regularly schedule commercial installs on nights and weekends to avoid disrupting operations or customers.' },
    ],
    relatedSlugs: ['drone-inspections', 'financing', 'roof-replacement'],
  },
]

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug)
}
