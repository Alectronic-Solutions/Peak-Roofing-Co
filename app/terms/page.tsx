import type { Metadata } from 'next'
import PageHero from '@/components/page-hero'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Terms of Service | Peak Roofing Co',
  description: 'Terms of service for Peak Roofing Co: service agreements, warranties, and governing law.',
}

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        subtitle="Last updated: January 1, 2025"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Terms of Service', href: '/terms/' }]}
      />

      <section className="bg-forest-900 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">

            <div>
              <h2 className="font-display font-bold text-white text-2xl mb-4">1. Services & Agreement</h2>
              <p className="text-slate-300 leading-relaxed">
                By requesting a service estimate or authorizing work with Peak Roofing Co, you agree to these terms.
                All work is performed under a written contract provided before any project begins. Verbal agreements
                are not binding.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-white text-2xl mb-4">2. Estimates & Pricing</h2>
              <p className="text-slate-300 leading-relaxed">
                Written estimates are valid for 30 days from the date of issue. Prices are subject to change if
                material costs increase by more than 5% between estimate and project start. Any changes to project
                scope require a written change order signed by both parties before work proceeds.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-white text-2xl mb-4">3. Payment Terms</h2>
              <p className="text-slate-300 leading-relaxed">
                For residential projects under $10,000: 50% deposit at project start, balance due on completion.
                For projects over $10,000: payment schedule outlined in the written contract. For insurance-funded
                projects, payment timing is governed by the insurance disbursement schedule. Accounts more than
                30 days overdue are subject to a 1.5% monthly finance charge.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-white text-2xl mb-4">4. Workmanship Warranty</h2>
              <p className="text-slate-300 leading-relaxed">
                Peak Roofing Co provides a 10-year workmanship warranty on all installation labor. This warranty
                covers defects in installation craftsmanship but does not cover: damage from severe weather events,
                tree impact, foot traffic, improper modifications by others, or normal material wear. Material
                warranties are provided separately by the manufacturer (GAF: 30-year limited).
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-white text-2xl mb-4">5. Insurance Claims Assistance</h2>
              <p className="text-slate-300 leading-relaxed">
                When we assist with insurance claims, we act as your advocate, not your insurer. We make no
                guarantee that your claim will be approved or that any specific settlement amount will be reached.
                Our claims assistance is included at no additional fee and does not constitute legal advice.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-white text-2xl mb-4">6. Limitation of Liability</h2>
              <p className="text-slate-300 leading-relaxed">
                Peak Roofing Co's liability for any claim arising from services rendered is limited to the amount
                paid for the specific work in question. We are not liable for consequential, incidental, or punitive
                damages.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-white text-2xl mb-4">7. Dispute Resolution</h2>
              <p className="text-slate-300 leading-relaxed">
                In the event of a dispute, both parties agree to first attempt resolution through direct negotiation.
                If unresolved within 30 days, disputes shall be submitted to binding arbitration under the rules of
                the American Arbitration Association in Sangamon County, Illinois.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-white text-2xl mb-4">8. Governing Law</h2>
              <p className="text-slate-300 leading-relaxed">
                These terms are governed by the laws of the State of Illinois. The State of Illinois Consumer
                Fraud and Deceptive Business Practices Act applies to all residential contracts.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-white text-2xl mb-4">9. Contact</h2>
              <p className="text-slate-300 leading-relaxed">
                Peak Roofing Co<br />
                123 Industrial Blvd, Springfield, IL 62701<br />
                <a href="mailto:info@peakroofingco.com" className="text-gold-400 hover:text-gold-300">info@peakroofingco.com</a><br />
                <a href="tel:+15555550100" className="text-gold-400 hover:text-gold-300">(555) 555-0100</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
