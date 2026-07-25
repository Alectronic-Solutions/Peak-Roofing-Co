import { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/company'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return [
    { url: `${SITE_URL}/`, lastModified, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${SITE_URL}/about/`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/services/`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/services/roof-replacement/`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/services/storm-damage/`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/services/drone-inspections/`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/services/insurance-claims/`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/services/commercial-roofing/`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/services/financing/`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/gallery/`, lastModified, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE_URL}/faq/`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/service-areas/`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/service-areas/springfield/`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/service-areas/westbrook/`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/service-areas/chatham/`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/service-areas/sherman/`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/service-areas/auburn/`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/service-areas/rochester/`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/service-areas/riverton/`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/service-areas/lakeview-heights/`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/sitemap/`, lastModified, changeFrequency: 'monthly', priority: 0.4 },
    { url: `${SITE_URL}/privacy-policy/`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${SITE_URL}/terms/`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
  ]
}
