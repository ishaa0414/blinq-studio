import HeroSection from '@/components/home2/HeroSection';
import ScrollMediaSection from '@/components/home2/ScrollMediaSection';
import WorksSection from '@/components/home2/WorksSection';
import TestimonialsSection from '@/components/home2/TestimonialsSection';
import AboutSection from '@/components/home2/AboutSection';
import WhatWeOfferSection from '@/components/home2/WhatWeOfferSection';
import HowItWorks from '@/components/home2/HowItWorks';
import BlogSection from '@/components/home2/BlogSection';
import FAQSection from '@/components/home2/FAQSection';
import ClosingSection from '@/components/home2/ClosingSection';

export default function Home2() {
  return (
    <main>
      <HeroSection />
      <ScrollMediaSection />
      <WhatWeOfferSection />
      <WorksSection />
      <HowItWorks />
      <TestimonialsSection />
      <AboutSection />
      <BlogSection />
      <FAQSection />
      <ClosingSection />
    </main>
  );
}
