import Link from 'next/link'
import { Home, Wrench, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Footer } from '@/components/footer'

export default function NotFound() {
  return (
    <>
      <main className="min-h-screen bg-forest-950 flex flex-col items-center justify-center px-4 text-center">
        <div className="max-w-lg">
          {/* Logo mark */}
          <div className="w-16 h-16 bg-gold-500 rounded-2xl flex items-center justify-center mx-auto mb-8">
            <svg viewBox="0 0 32 32" className="w-8 h-8 fill-slate-950" aria-hidden="true">
              <polygon points="16,3 30,17 2,17" />
              <rect x="9" y="17" width="14" height="12" rx="1" />
            </svg>
          </div>

          <p className="text-gold-500 text-sm font-bold uppercase tracking-widest mb-2">404: Page Not Found</p>
          <h1 className="font-display font-bold text-white text-5xl sm:text-6xl mb-4">
            This page took a wrong turn at the ridge line.
          </h1>
          <p className="text-slate-400 text-lg mb-10">
            The page you&apos;re looking for doesn&apos;t exist or may have moved. Let&apos;s get you back on track.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
            <Button asChild className="bg-gold-500 hover:bg-gold-400 text-forest-950 font-bold rounded-xl h-12 px-8">
              <Link href="/"><Home className="w-4 h-4 mr-2" />Back to Home</Link>
            </Button>
            <Button asChild variant="outline" className="border-white/20 text-white hover:bg-white/5 rounded-xl h-12 px-8">
              <Link href="/services/"><Wrench className="w-4 h-4 mr-2" />Our Services</Link>
            </Button>
          </div>

          <a
            href="tel:+15555550100"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-gold-400 transition-colors text-sm"
          >
            <Phone className="w-4 h-4" />
            Or call us: (555) 555-0100
          </a>
        </div>
      </main>
      <Footer />
    </>
  )
}
