/** Customer reviews shown on the homepage, service pages, and city pages. One source so names and towns stay consistent. */
export interface Review {
  name: string
  /** City slug from lib/cities.ts */
  city: string
  town: string
  date: string
  rating: 4 | 5
  service: string
  serviceLabel: string
  source: 'Google' | 'BBB'
  body: string
}

export const REVIEWS: Review[] = [
  {
    name: 'Margaret T.',
    city: 'taylorville',
    town: 'Taylorville',
    date: 'May 2024',
    rating: 5,
    service: 'storm-damage',
    serviceLabel: 'Hail damage + insurance claim',
    source: 'Google',
    body: 'Hail took out half the shingles on the north side in April. Peak had a drone up the next morning and sent me the photos before my insurance adjuster had even called back. Their adjuster met ours on the roof, the claim came through in about three weeks, and I paid my $1,000 deductible. Crew was done in one day.',
  },
  {
    name: 'Robert K.',
    city: 'chatham',
    town: 'Chatham',
    date: 'September 2024',
    rating: 5,
    service: 'roof-replacement',
    serviceLabel: 'Full roof replacement',
    source: 'Google',
    body: 'Got three quotes. Peak wasn’t the cheapest, but it was the only one itemized line by line, and the price didn’t change. Tyler ran the crew. They started at 7 and were cleaning up by 5, including a magnet sweep of the yard.',
  },
  {
    name: 'Linda & James W.',
    city: 'rochester',
    town: 'Rochester',
    date: 'August 2024',
    rating: 5,
    service: 'financing',
    serviceLabel: 'Replacement + financing',
    source: 'Google',
    body: 'We had been patching the old roof every spring for years. Financing came to about $210 a month on the 10-year plan, which is easier to plan around than another emergency repair. The paperwork took one evening at the kitchen table.',
  },
  {
    name: 'David P.',
    city: 'springfield',
    town: 'Springfield',
    date: 'July 2024',
    rating: 4,
    service: 'roof-replacement',
    serviceLabel: 'Tear-off & install',
    source: 'Google',
    body: 'Good roof and a careful crew. One star off because the install got pushed a week for rain, though Maria called to tell me before I had to ask. The foreman walked the finished roof with me and showed me the two sheets of decking they replaced.',
  },
  {
    name: 'Susan M.',
    city: 'riverton',
    town: 'Riverton',
    date: 'June 2024',
    rating: 5,
    service: 'storm-damage',
    serviceLabel: 'Emergency tarp + repair',
    source: 'BBB',
    body: 'A limb came through the roof around 9pm during a storm. I called the after-hours line and two of their guys were tarping it before 11. They came back the following week for the permanent repair.',
  },
  {
    name: 'Thomas & Carol N.',
    city: 'sherman',
    town: 'Sherman',
    date: 'May 2024',
    rating: 5,
    service: 'insurance-claims',
    serviceLabel: 'Multi-structure insurance claim',
    source: 'Google',
    body: 'House, detached garage, and pole barn all went on one claim after the hail. Peak’s adjuster documented all three before the insurance company came out, so nothing got left off. One deductible, one crew.',
  },
  {
    name: 'Patricia K.',
    city: 'petersburg',
    town: 'Petersburg',
    date: 'October 2023',
    rating: 5,
    service: 'drone-inspections',
    serviceLabel: 'Pre-sale drone inspection',
    source: 'Google',
    body: 'I’m selling my mother’s house and wanted to know where the roof stood before listing. The drone report was 14 pages of marked-up photos, and they told me plainly it had a few good years left. No sales pitch.',
  },
  {
    name: 'Greg H.',
    city: 'springfield',
    town: 'Springfield',
    date: 'March 2024',
    rating: 5,
    service: 'commercial-roofing',
    serviceLabel: 'Commercial flat roof',
    source: 'Google',
    body: 'We manage a four-unit retail building. They replaced the flat roof over two weekends so none of our tenants had to close, and the final invoice matched the proposal.',
  },
  {
    name: 'Mike H.',
    city: 'auburn',
    town: 'Auburn',
    date: 'November 2023',
    rating: 5,
    service: 'roof-replacement',
    serviceLabel: 'Cedar shake tear-off',
    source: 'Google',
    body: 'Our 1940s house had the original cedar shake under a layer of 3-tab. They took both layers off carefully, saved the original roof boards where they could, and replaced the rest before shingling.',
  },
]

export const reviewsFor = (filter: (r: Review) => boolean, count: number) => {
  const matches = REVIEWS.filter(filter)
  return (matches.length ? matches : REVIEWS).slice(0, count)
}

/** "Linda & James W." → "LJ", "Margaret T." → "MT" */
export const initialsOf = (name: string) =>
  name
    .replace(/&/g, ' ')
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => part[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()
