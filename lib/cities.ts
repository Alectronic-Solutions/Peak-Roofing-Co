export interface City {
  slug: string
  name: string
  county: string
  state: string
  zip: string
  milesFromHQ: number
  population: string
  roofsCompleted: string
  avgResponseMinutes: number
  recentStorms: string[]
  servingSlogan: string
  localFact: string
  testimonialNames: string[]
  testimonialQuotes: string[]
}

export const CITIES: City[] = [
  {
    slug: 'springfield',
    name: 'Springfield',
    county: 'Sangamon County',
    state: 'IL',
    zip: '62701',
    milesFromHQ: 0,
    population: '114,000',
    roofsCompleted: '2,400+',
    avgResponseMinutes: 45,
    recentStorms: [
      'April 2024 — 2.5" hailstones, Sangamon County',
      'August 2023 — 75 mph straight-line winds',
      'June 2022 — Category EF1 tornado warning',
    ],
    servingSlogan: "Springfield's #1 Rated Roofer",
    localFact: 'Springfield experiences an average of 3–4 significant hail events per year, making proactive inspection critical.',
    testimonialNames: ['Margaret T., Springfield', 'Robert K., Springfield'],
    testimonialQuotes: [
      '"Peak had a drone over my house within 90 minutes of my call. Claim approved, new roof on — I paid my deductible and nothing else."',
      '"37 years in Springfield and they still answer the phone themselves. That alone sets them apart."',
    ],
  },
  {
    slug: 'westbrook',
    name: 'Westbrook',
    county: 'Sangamon County',
    state: 'IL',
    zip: '62704',
    milesFromHQ: 8,
    population: '22,000',
    roofsCompleted: '310+',
    avgResponseMinutes: 55,
    recentStorms: [
      'April 2024 — 2.5" hail, same system as Springfield',
      'September 2023 — Heavy straight-line wind event',
    ],
    servingSlogan: 'Westbrook Homeowners Trust Peak',
    localFact: 'Westbrook Estates was our single largest project corridor in 2024 — 47 homes after the April hail event.',
    testimonialNames: ['David P., Westbrook', 'Susan M., Westbrook'],
    testimonialQuotes: [
      '"They replaced our roof in Westbrook Estates and the whole street noticed. Three neighbors hired them the same week."',
      '"Professional from estimate to cleanup. Best home investment we\'ve made."',
    ],
  },
  {
    slug: 'chatham',
    name: 'Chatham',
    county: 'Sangamon County',
    state: 'IL',
    zip: '62629',
    milesFromHQ: 12,
    population: '13,000',
    roofsCompleted: '185+',
    avgResponseMinutes: 60,
    recentStorms: [
      'May 2024 — Severe thunderstorm, golf ball hail',
      'October 2023 — Wind-driven rain event',
    ],
    servingSlogan: 'Chatham\'s Trusted Roofing Crew',
    localFact: 'Chatham\'s newer construction neighborhoods often have builder-grade shingles reaching end-of-life simultaneously — we inspect entire subdivisions.',
    testimonialNames: ['Linda & James W., Chatham'],
    testimonialQuotes: [
      '"We had three estimates. Peak was the only contractor who showed us drone footage of exactly what needed fixing. No question who to hire."',
    ],
  },
  {
    slug: 'sherman',
    name: 'Sherman',
    county: 'Sangamon County',
    state: 'IL',
    zip: '62684',
    milesFromHQ: 15,
    population: '4,200',
    roofsCompleted: '98+',
    avgResponseMinutes: 65,
    recentStorms: [
      'April 2024 — Hail event (2"+ stones)',
      'July 2022 — Derecho with 80+ mph gusts',
    ],
    servingSlogan: 'Sherman IL Roofing Experts',
    localFact: 'Sherman\'s rural properties often have outbuildings and pole barns that also need storm inspection — we quote all structures at the same visit.',
    testimonialNames: ['Thomas & Carol N., Sherman'],
    testimonialQuotes: [
      '"They handled our farmhouse, detached garage, and barn in one visit. One claim, one contractor, one check. Couldn\'t be easier."',
    ],
  },
  {
    slug: 'auburn',
    name: 'Auburn',
    county: 'Sangamon County',
    state: 'IL',
    zip: '62615',
    milesFromHQ: 18,
    population: '4,800',
    roofsCompleted: '75+',
    avgResponseMinutes: 70,
    recentStorms: [
      'April 2024 — Hail tracked through Sangamon County',
      'June 2021 — Tornado warning, significant wind damage',
    ],
    servingSlogan: 'Auburn IL Roofing by Peak',
    localFact: 'Auburn homeowners frequently deal with older shake or slate roofs — we have certified installers for all legacy roofing materials.',
    testimonialNames: ['Carol B., Auburn'],
    testimonialQuotes: [
      '"My 1940s home had original cedar shake. Peak was the only company that knew how to properly assess and replace it. Incredible workmanship."',
    ],
  },
  {
    slug: 'rochester',
    name: 'Rochester',
    county: 'Sangamon County',
    state: 'IL',
    zip: '62563',
    milesFromHQ: 10,
    population: '3,900',
    roofsCompleted: '120+',
    avgResponseMinutes: 55,
    recentStorms: [
      'May 2024 — Severe hail warning issued',
      'August 2023 — Wind event, multiple downed trees',
    ],
    servingSlogan: 'Rochester\'s Roofing Specialists',
    localFact: 'Rochester\'s growth in new construction means many homes hit the 10-year mark simultaneously — ideal time for a free inspection before warranty expires.',
    testimonialNames: ['Mike H., Rochester'],
    testimonialQuotes: [
      '"Had them inspect before our home warranty expired. They found two areas of concern the builder hadn\'t addressed. Saved us thousands."',
    ],
  },
  {
    slug: 'riverton',
    name: 'Riverton',
    county: 'Sangamon County',
    state: 'IL',
    zip: '62561',
    milesFromHQ: 14,
    population: '3,200',
    roofsCompleted: '88+',
    avgResponseMinutes: 65,
    recentStorms: [
      'April 2024 — Hail event affecting North Sangamon',
      'March 2023 — Late winter ice storm',
    ],
    servingSlogan: 'Peak Roofing Serves Riverton IL',
    localFact: 'Riverton\'s proximity to the Sangamon River means ice damming is a concern every winter — we install ice & water shield on all projects here as standard.',
    testimonialNames: ['Janet R., Riverton'],
    testimonialQuotes: [
      '"After years of ice dam problems, Peak re-roofed with the proper underlayment. First winter without a leak in a decade."',
    ],
  },
  {
    slug: 'lakeview-heights',
    name: 'Lakeview Heights',
    county: 'Sangamon County',
    state: 'IL',
    zip: '62703',
    milesFromHQ: 5,
    population: '8,500',
    roofsCompleted: '215+',
    avgResponseMinutes: 50,
    recentStorms: [
      'April 2024 — 2" hail, direct path through neighborhood',
      'July 2023 — Microburst, 90 mph gusts reported',
    ],
    servingSlogan: 'Lakeview Heights\' Trusted Roofer',
    localFact: 'Lakeview Heights had more storm claims than any other Springfield neighborhood in 2024 — we responded to 63 homes in a single week.',
    testimonialNames: ['Patricia K., Lakeview Heights'],
    testimonialQuotes: [
      '"They were in the neighborhood within hours of the storm. Had a drone up, report written, and claim filed before any other contractor even called back."',
    ],
  },
]

export function getCity(slug: string): City | undefined {
  return CITIES.find((c) => c.slug === slug)
}
