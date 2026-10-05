import { HeroSection } from '@/components/hero'
import { TrustStrip } from '@/components/trust-strip'
import { ServicesSection } from '@/components/services-section'
import { WhyUsSection } from '@/components/why-us-section'
import { BeforeAfterGallery } from '@/components/before-after-gallery'
import { ProcessSection } from '@/components/process-section'
import { FinancingHub } from '@/components/financing-hub'
import { StormCallout } from '@/components/storm-callout'
import { TestimonialsSection } from '@/components/testimonials-section'
import { ServiceAreasSection } from '@/components/service-areas-section'
import { HomeFaq } from '@/components/home-faq'
import { ContactForm } from '@/components/contact-form'
import { Footer } from '@/components/footer'
import LocalSeoSchema from '@/components/local-seo-schema'

export default function HomePage() {
  return (
    <>
      <LocalSeoSchema pageType="home" />
      <HeroSection />
      <TrustStrip />
      <ServicesSection />
      <WhyUsSection />
      <BeforeAfterGallery />
      <ProcessSection />
      <StormCallout />
      <TestimonialsSection />
      <FinancingHub />
      <ServiceAreasSection />
      <HomeFaq />
      <ContactForm />
      <Footer />
    </>
  )
}
