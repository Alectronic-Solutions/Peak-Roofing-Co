import type { Metadata } from 'next'
import PageHero from '@/components/page-hero'
import { Footer } from '@/components/footer'
import { PHOTO_CREDITS } from '@/lib/photo-credits'
import { asset } from '@/lib/company'

export const metadata: Metadata = {
  title: 'Photo Credits | Peak Roofing Co',
  description: 'Sources and licenses for the photography used on the Peak Roofing Co website.',
  robots: { index: false },
  alternates: { canonical: '/photo-credits/' },
}

export default function PhotoCreditsPage() {
  return (
    <>
      <PageHero
        eyebrow="Credits"
        title="Photo credits"
        subtitle="Photography on this site comes from the photographers and libraries below, used under the licenses listed."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Photo Credits', href: '/photo-credits/' }]}
        bgImage={asset('/images/hero-faq.jpg')}
      />

      <section className="bg-forest-900 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <ul className="divide-y divide-white/[0.08] rounded-2xl border border-white/[0.08] bg-white/[0.03]">
            {PHOTO_CREDITS.map((c) => (
              <li key={c.file} className="flex flex-col gap-1 px-5 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                <span className="text-sm text-white">{c.subject}</span>
                <span className="text-xs text-slate-400 sm:text-right">
                  {c.author ? `${c.author} · ` : ''}
                  <a href={c.link} target="_blank" rel="noopener noreferrer" className="underline-offset-2 hover:text-gold-300 hover:underline">
                    {c.site}
                  </a>
                  {' · '}
                  {c.licenseUrl ? (
                    <a href={c.licenseUrl} target="_blank" rel="noopener noreferrer" className="underline-offset-2 hover:text-gold-300 hover:underline">
                      {c.license}
                    </a>
                  ) : (
                    c.license
                  )}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-xs leading-relaxed text-slate-400">
            Photos licensed CC BY-SA are shown resized and cropped from the originals. Icons on this site are original
            artwork made for Peak Roofing Co.
          </p>
        </div>
      </section>

      <Footer />
    </>
  )
}
