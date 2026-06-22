import { HeroSection } from '@/components/hero'
import { ServicesSection } from '@/components/services-section'
import { BeforeAfterGallery } from '@/components/before-after-gallery'
import { FinancingHub } from '@/components/financing-hub'
import { StormCallout } from '@/components/storm-callout'
import { TestimonialsSection } from '@/components/testimonials-section'
import { ContactForm } from '@/components/contact-form'
import { Footer } from '@/components/footer'

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <BeforeAfterGallery />
      <FinancingHub />
      <StormCallout />
      <TestimonialsSection />
      <ContactForm />
      <Footer />
    </main>
  )
}
