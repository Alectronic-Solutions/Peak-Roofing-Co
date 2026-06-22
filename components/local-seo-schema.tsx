interface LocalSeoSchemaProps {
  pageType?: 'home' | 'service' | 'city' | 'about'
  serviceName?: string
  cityName?: string
}

export default function LocalSeoSchema({ pageType = 'home', serviceName, cityName }: LocalSeoSchemaProps) {
  const business = {
    '@type': ['LocalBusiness', 'RoofingContractor'],
    name: 'Peak Roofing Co',
    url: 'https://www.peakroofingco.com',
    telephone: '+15555550100',
    email: 'info@peakroofingco.com',
    foundingDate: '1987',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Industrial Blvd',
      addressLocality: cityName ?? 'Springfield',
      addressRegion: 'IL',
      postalCode: '62701',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 39.7817,
      longitude: -89.6501,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '847',
      bestRating: '5',
    },
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '07:00', closes: '18:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '08:00', closes: '16:00' },
    ],
    priceRange: '$$',
    currenciesAccepted: 'USD',
    paymentAccepted: 'Cash, Check, Credit Card, Financing',
    areaServed: {
      '@type': 'State',
      name: 'Illinois',
    },
    hasCredential: [
      { '@type': 'EducationalOccupationalCredential', credentialCategory: 'License', name: 'Illinois Roofing License #RC-20847' },
      { '@type': 'EducationalOccupationalCredential', credentialCategory: 'Certification', name: 'GAF Master Elite® Certified Contractor' },
    ],
    sameAs: [
      'https://www.google.com/maps',
      'https://www.bbb.org',
      'https://www.angi.com',
    ],
  }

  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    ...business,
  }

  if (pageType === 'service' && serviceName) {
    const serviceSchema = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: serviceName,
      provider: { '@type': 'LocalBusiness', name: 'Peak Roofing Co' },
      areaServed: { '@type': 'State', name: 'Illinois' },
    }
    return (
      <>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      </>
    )
  }

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  )
}
