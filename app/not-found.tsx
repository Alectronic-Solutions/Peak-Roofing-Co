import Link from 'next/link'
import { Icon3D } from '@/components/ui/icon-3d'
import { PHONE_DISPLAY, PHONE_HREF } from '@/lib/company'
import { Button } from '@/components/ui/button'
import { Footer } from '@/components/footer'

export default function NotFound() {
  return (
    <>
      <div className="min-h-screen bg-forest-950 flex flex-col items-center justify-center px-4 text-center">
        <div className="max-w-lg">
          <Icon3D name="house" size={96} className="mx-auto mb-6" />

          <p className="text-gold-400 text-sm font-bold uppercase tracking-widest mb-2">404</p>
          <h1 className="font-display font-bold text-white text-5xl sm:text-6xl mb-4">
            We couldn&apos;t find that page.
          </h1>
          <p className="text-slate-400 text-lg mb-10">
            It may have moved, or the link may be mistyped. These will get you where you were going.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
            <Button asChild className="bg-gold-500 hover:bg-gold-400 text-forest-950 font-bold rounded-xl h-12 px-8">
              <Link href="/"><Icon3D name="house" size={22} className="mr-2" />Back to home</Link>
            </Button>
            <Button asChild variant="outline" className="border-white/20 text-white hover:bg-white/5 rounded-xl h-12 px-8">
              <Link href="/services/"><Icon3D name="hammer" size={22} className="mr-2" />Our services</Link>
            </Button>
          </div>

          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-2 text-slate-400 hover:text-gold-400 transition-colors text-sm"
          >
            <Icon3D name="phone" size={22} />
            Or call us: {PHONE_DISPLAY}
          </a>
        </div>
      </div>
      <Footer />
    </>
  )
}
