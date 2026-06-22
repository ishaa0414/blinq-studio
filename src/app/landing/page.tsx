import LandingNav from '@/components/landing/LandingNav';
import LandingHero from '@/components/landing/LandingHero';
import LandingServices from '@/components/landing/LandingServices';
import LandingWork from '@/components/landing/LandingWork';
import LandingLogos from '@/components/landing/LandingLogos';
import LandingProcess from '@/components/landing/LandingProcess';
import LandingStats from '@/components/landing/LandingStats';
import LandingCTA from '@/components/landing/LandingCTA';
import LandingFooter from '@/components/landing/LandingFooter';
import ScrollReveal from '@/components/landing/ScrollReveal';

export default function LandingPage() {
  return (
    <>
      <LandingNav />
      <LandingHero />
      <ScrollReveal variant="slide-up">
        <LandingServices />
      </ScrollReveal>
      <ScrollReveal variant="scale-in">
        <LandingWork />
      </ScrollReveal>
      <ScrollReveal variant="fade">
        <LandingLogos />
      </ScrollReveal>
      <ScrollReveal variant="slide-up">
        <LandingProcess />
      </ScrollReveal>
      <ScrollReveal variant="scale-in">
        <LandingStats />
      </ScrollReveal>
      <ScrollReveal variant="slide-up">
        <LandingCTA />
      </ScrollReveal>
      <ScrollReveal variant="fade">
        <LandingFooter />
      </ScrollReveal>
    </>
  );
}
