import type { Metadata } from 'next'
import PageHero from '@/components/page-hero'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Privacy Policy | Peak Roofing Co',
  description: 'Privacy policy for Peak Roofing Co: how we collect, use, and protect your information.',
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle="Last updated: January 1, 2025"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Privacy Policy', href: '/privacy-policy/' }]}
      />

      <section className="bg-forest-900 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-invert prose-slate max-w-none space-y-10">

            <div>
              <h2 className="font-display font-bold text-white text-2xl mb-4">1. Information We Collect</h2>
              <p className="text-slate-300 leading-relaxed">
                When you submit a form on our website (estimate requests, contact forms, newsletter signup), we collect
                the information you provide, including your name, phone number, email address, property address, and
                any message you include. We do not collect payment information through this website.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-white text-2xl mb-4">2. How We Use Your Information</h2>
              <ul className="text-slate-300 space-y-2 list-disc list-inside">
                <li>To respond to your estimate or service inquiry</li>
                <li>To schedule inspections, estimates, or project work</li>
                <li>To send roofing tips and storm alerts if you opted in via newsletter</li>
                <li>To follow up on submitted insurance claims</li>
                <li>To comply with legal obligations</li>
              </ul>
              <p className="text-slate-300 leading-relaxed mt-4">
                We do not sell, rent, or share your personal information with third parties for marketing purposes.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-white text-2xl mb-4">3. Form Submission & Web3Forms</h2>
              <p className="text-slate-300 leading-relaxed">
                Our website forms are powered by Web3Forms (web3forms.com). When you submit a form, your information
                is transmitted to Web3Forms' secure servers and forwarded to us via email. Web3Forms does not store
                your submission data. Please review Web3Forms' own privacy policy for details on their data handling.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-white text-2xl mb-4">4. Cookies & Analytics</h2>
              <p className="text-slate-300 leading-relaxed">
                This website may use standard web analytics tools (e.g., Google Analytics) to understand how visitors
                use our site. These tools may set cookies on your device. No personally identifiable information is
                shared with analytics providers. You may disable cookies through your browser settings.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-white text-2xl mb-4">5. Data Security</h2>
              <p className="text-slate-300 leading-relaxed">
                We use industry-standard HTTPS encryption for all data transmitted through this website. Our internal
                systems are password-protected and access to customer information is limited to staff who need it to
                provide services to you.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-white text-2xl mb-4">6. Your Rights</h2>
              <p className="text-slate-300 leading-relaxed">
                You may request access to, correction of, or deletion of personal information we hold about you at any
                time. Contact us at{' '}
                <a href="mailto:info@peakroofingco.com" className="text-gold-400 hover:text-gold-300">
                  info@peakroofingco.com
                </a>{' '}
                or call{' '}
                <a href="tel:+15555550100" className="text-gold-400 hover:text-gold-300">
                  (555) 555-0100
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-white text-2xl mb-4">7. Governing Law</h2>
              <p className="text-slate-300 leading-relaxed">
                This privacy policy is governed by the laws of the State of Illinois. Any disputes arising under
                this policy shall be resolved in courts located in Sangamon County, Illinois.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-white text-2xl mb-4">8. Contact</h2>
              <p className="text-slate-300 leading-relaxed">
                Peak Roofing Co<br />
                123 Industrial Blvd<br />
                Springfield, IL 62701<br />
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
