import Hero from '../components/Hero'
import ProblemSection from '../components/ProblemSection'
import ServicesPreview from '../components/ServicesPreview'
import CaseStudiesPreview from '../components/CaseStudiesPreview'
import ProcessSection from '../components/ProcessSection'
import Testimonials from '../components/Testimonials'
import CTASection from '../components/CTASection'

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <ServicesPreview />
      <CaseStudiesPreview />
      <ProcessSection />
      <Testimonials />
      <CTASection />
    </>
  )
}
