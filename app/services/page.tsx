import type { Metadata } from 'next'
import { Icon3D, type IconName } from '@/components/ui/icon-3d'
import { Reveal } from '@/components/ui/reveal'
import PageHero from '@/components/page-hero'
import InlineCta from '@/components/inline-cta'
import ServiceCardLink from '@/components/service-card-link'
import LocalSeoSchema from '@/components/local-seo-schema'
import { Footer } from '@/components/footer'
import { SERVICES } from '@/lib/services'
import { asset, LICENSE } from '@/lib/company'

export const metadata: Metadata = {
  title: 'Roofing Services | Replacement, Storm Repair, Inspections | Peak Roofing Co',
  description:
    'Roof replacement, storm damage repair, drone inspections, insurance claim assistance, financing, and commercial roofing in Springfield IL. Licensed since 1987.',
  alternates: { canonical: '/services/' },
}

/** Questions worth asking any roofer before you sign, with how we answer them. */
const QUESTIONS: { icon: IconName; q: string; a: string }[] = [
  { icon: 'shield', q: 'Can I see your license and certificate of insurance?', a: `Yes: ${LICENSE}, $2M general liability, and full workers’ comp. We email the certificate before any work starts.` },
  { icon: 'doc', q: 'Is the workmanship warranty in writing, and for how long?', a: '10 years, in writing, and it transfers if you sell. GAF’s shingle warranty is registered in your name at the walkthrough.' },
  { icon: 'hardhat', q: 'Who will actually be on my roof?', a: 'Our own employees, led by the foreman who quoted the job. We don’t hand residential work to subcontractors.' },
  { icon: 'clipboard', q: 'Is the price fixed, and what could change it?', a: 'The price is fixed. The only variable is rotten decking, which is priced per sheet on the estimate so you know the cost in advance.' },
  { icon: 'coin', q: 'Will you waive or cover my insurance deductible?', a: 'No. Illinois law prohibits contractors from paying or rebating your deductible, and a roofer who offers to is putting your claim at risk.' },
  { icon: 'magnet', q: 'How do you protect the house and yard?', a: 'Tarps over landscaping, plywood against the siding where needed, and a magnetic sweep of the lot before we leave.' },
]

const PROCESS = [
  { step: '01', title: 'Free drone inspection', description: 'We fly every plane of the roof and send you a marked-up photo report. Nobody walks on a damaged roof to look.' },
  { step: '02', title: 'Written estimate', description: 'An itemized, fixed price within 24 hours. We go through it line by line with you, in person or on the phone.' },
  { step: '03', title: 'Install day', description: 'Your foreman runs the crew from tear-off to cleanup. Most homes are finished in one day.' },
  { step: '04', title: 'Final walkthrough', description: 'We walk the finished roof with you, register your manufacturer warranty, and hand you the paperwork.' },
]

export default function ServicesPage() {
  return (
    <>
      <LocalSeoSchema pageType="service" serviceName="Roofing Services" />

      <PageHero
        eyebrow="What We Do"
        title="Roofing services"
        subtitle="Replacement, storm repair, drone inspections, insurance claims, financing, and commercial roofing, all handled by our own crews."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services/' }]}
        bgImage={asset('/images/hero-services.jpg')}
        ctaLabel="Get Free Estimate"
        ctaHref="/#contact"
      />

      {/* Services Grid */}
      <section className="bg-forest-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((service) => (
              <ServiceCardLink
                key={service.slug}
                slug={service.slug}
                title={service.title}
                description={service.description}
                price={service.price}
                icon={service.icon}
                badge={service.badge}
              />
            ))}
          </Reveal>
        </div>
      </section>

      {/* Questions to ask */}
      <section className="bg-forest-950 py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-2xl mx-auto text-center mb-12">
            <p className="text-gold-400 text-xs font-bold uppercase tracking-widest mb-3">Before you hire anyone</p>
            <h2 className="font-display font-bold text-white text-3xl sm:text-4xl">
              Six questions to ask any roofer
            </h2>
            <p className="mt-4 text-slate-300 leading-relaxed">
              Ask every contractor you get a quote from. Here are our answers.
            </p>
          </Reveal>
          <Reveal className="grid gap-4 sm:grid-cols-2">
            {QUESTIONS.map((item) => (
              <div key={item.q} className="flex gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.04] p-6">
                <Icon3D name={item.icon} size={48} />
                <div>
                  <h3 className="font-display font-bold text-white text-base leading-snug">{item.q}</h3>
                  <p className="mt-2 text-slate-300 text-sm leading-relaxed">{item.a}</p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Process */}
      <section className="bg-forest-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-gold-400 text-xs font-bold uppercase tracking-widest mb-3 text-center">
              How It Works
            </p>
            <h2 className="font-display font-bold text-white text-3xl sm:text-4xl text-center mb-12">
              How a Peak job runs
            </h2>
          </Reveal>
          <Reveal className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS.map((step) => (
              <div key={step.step} className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6">
                <div className="font-display font-bold text-gold-500/30 text-5xl mb-4 leading-none">{step.step}</div>
                <h3 className="font-display font-bold text-white text-lg mb-2">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <InlineCta
        heading="Not sure what you need?"
        subtext="Schedule a free drone inspection and we'll tell you exactly what's going on up there."
        primaryLabel="Schedule Free Assessment"
        primaryHref="/#contact"
      />

      <Footer />
    </>
  )
}
