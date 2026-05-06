import Hero from '../components/Hero'
import IndustriesSection from '../components/IndustriesSection'
import ServicesSection from '../components/ServicesSection'
import CaseStudiesSection from '../components/CaseStudiesSection'
import ProcessSection from '../components/ProcessSection'
import WhyUsSection from '../components/WhyUsSection'
import TrustedBySection from '../components/TrustedBySection'
import CTASection from '../components/CTASection'

export default function HomePage() {
  return (
    <>
      <Hero />
      <IndustriesSection />
      <ServicesSection />
      <CaseStudiesSection />
      <ProcessSection />
      <WhyUsSection />
      <TrustedBySection />
      <CTASection />
    </>
  )
}
