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
  localFact: string
}

/**
 * Storm events referenced across the site. Keep city storm lists, project notes, and the
 * storm-damage page pulling from the same three events so the story stays consistent.
 */
export const STORM_EVENTS = {
  hail2024: 'April 2024: hail up to 2" across Sangamon County',
  wind2023: 'August 2023: 70+ mph straight-line winds',
  storm2022: 'July 2022: severe thunderstorms, 80 mph gusts',
} as const

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
    avgResponseMinutes: 35,
    recentStorms: [STORM_EVENTS.hail2024, STORM_EVENTS.wind2023, STORM_EVENTS.storm2022],
    localFact:
      'Most Springfield homes we re-roof were built between 1950 and 1990, so we budget for a decking check on every older roof before we quote.',
  },
  {
    slug: 'chatham',
    name: 'Chatham',
    county: 'Sangamon County',
    state: 'IL',
    zip: '62629',
    milesFromHQ: 10,
    population: '14,000',
    roofsCompleted: '185+',
    avgResponseMinutes: 45,
    recentStorms: [STORM_EVENTS.hail2024, STORM_EVENTS.wind2023],
    localFact:
      'Many Chatham subdivisions went up in the 2000s with builder-grade shingles that are now reaching the end of their life at the same time.',
  },
  {
    slug: 'sherman',
    name: 'Sherman',
    county: 'Sangamon County',
    state: 'IL',
    zip: '62684',
    milesFromHQ: 9,
    population: '4,500',
    roofsCompleted: '98+',
    avgResponseMinutes: 45,
    recentStorms: [STORM_EVENTS.hail2024, STORM_EVENTS.storm2022],
    localFact:
      'A lot of Sherman properties have detached garages and pole barns, so we inspect and quote every structure on the same visit.',
  },
  {
    slug: 'auburn',
    name: 'Auburn',
    county: 'Sangamon County',
    state: 'IL',
    zip: '62615',
    milesFromHQ: 18,
    population: '4,700',
    roofsCompleted: '75+',
    avgResponseMinutes: 55,
    recentStorms: [STORM_EVENTS.hail2024, STORM_EVENTS.storm2022],
    localFact:
      'Auburn has a good number of older homes with original cedar shake under later layers, which changes how a tear-off has to be done.',
  },
  {
    slug: 'rochester',
    name: 'Rochester',
    county: 'Sangamon County',
    state: 'IL',
    zip: '62563',
    milesFromHQ: 8,
    population: '4,000',
    roofsCompleted: '120+',
    avgResponseMinutes: 40,
    recentStorms: [STORM_EVENTS.hail2024, STORM_EVENTS.wind2023],
    localFact:
      'Rochester grew quickly in the 2010s, and a lot of those roofs are passing the 10-year mark. That is a good time for an inspection, before small flashing issues become leaks.',
  },
  {
    slug: 'riverton',
    name: 'Riverton',
    county: 'Sangamon County',
    state: 'IL',
    zip: '62561',
    milesFromHQ: 7,
    population: '3,400',
    roofsCompleted: '88+',
    avgResponseMinutes: 40,
    recentStorms: [STORM_EVENTS.hail2024, STORM_EVENTS.wind2023],
    localFact:
      'Homes near the Sangamon River see more ice damming than most, so we run ice & water shield 6 feet up from the eaves on every Riverton job.',
  },
  {
    slug: 'taylorville',
    name: 'Taylorville',
    county: 'Christian County',
    state: 'IL',
    zip: '62568',
    milesFromHQ: 27,
    population: '10,500',
    roofsCompleted: '160+',
    avgResponseMinutes: 60,
    recentStorms: [STORM_EVENTS.hail2024, STORM_EVENTS.storm2022],
    localFact:
      'After the April 2024 hail we re-roofed 47 Taylorville homes in six weeks, most of them on the same few streets on the north side of town.',
  },
  {
    slug: 'petersburg',
    name: 'Petersburg',
    county: 'Menard County',
    state: 'IL',
    zip: '62675',
    milesFromHQ: 20,
    population: '2,200',
    roofsCompleted: '90+',
    avgResponseMinutes: 55,
    recentStorms: [STORM_EVENTS.wind2023, STORM_EVENTS.storm2022],
    localFact:
      'Petersburg has many 19th-century homes with steep pitches and multiple valleys. They take longer to roof well, and we schedule them as two-day jobs.',
  },
]

export function getCity(slug: string): City | undefined {
  return CITIES.find((c) => c.slug === slug)
}
