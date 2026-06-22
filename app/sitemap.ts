import { MetadataRoute } from 'next'

const BASE_URL = 'https://www.peakroofingco.com'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${BASE_URL}/`, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE_URL}/about`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/services`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/services/roof-replacement`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/services/storm-damage`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/services/drone-inspections`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/services/insurance-claims`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/services/commercial-roofing`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/services/financing`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/storm-damage`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/gallery`, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/financing`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/faq`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/service-areas`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/service-areas/springfield`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/service-areas/westbrook`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/service-areas/chatham`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/service-areas/sherman`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/service-areas/auburn`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/service-areas/rochester`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/service-areas/riverton`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/service-areas/lakeview-heights`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/sitemap`, changeFrequency: 'monthly', priority: 0.4 },
    { url: `${BASE_URL}/privacy-policy`, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE_URL}/terms`, changeFrequency: 'yearly', priority: 0.3 },
  ]
}
