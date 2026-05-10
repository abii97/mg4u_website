import Hero from '../components/Hero'
import ServicesSection from '../components/ServicesSection'
import CaseStudiesSection from '../components/CaseStudiesSection'
import ProcessSection from '../components/ProcessSection'
import IndustriesSection from '../components/IndustriesSection'
import TrustedBySection from '../components/TrustedBySection'
import WhyUsSection from '../components/WhyUsSection'
import CTASection from '../components/CTASection'

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <CaseStudiesSection />
      <ProcessSection />
      <IndustriesSection />
      <TrustedBySection />
      <WhyUsSection />
      <CTASection />
    </>
  )
}
