import HeroSection from '@/components/sections/HeroSection'
import HighlightsBar from '@/components/sections/HighlightsBar'
import AboutSnippet from '@/components/sections/AboutSnippet'
import ProductsSection from '@/components/sections/ProductsSection'
import WhyChooseSection from '@/components/sections/WhyChooseSection'
import AwardsCertifications from '@/components/sections/AwardsCertifications'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import CTASection from '@/components/sections/CTASection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <HighlightsBar />
      <AboutSnippet />
      <ProductsSection />
      <WhyChooseSection />
      <AwardsCertifications />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}
