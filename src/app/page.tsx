import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MarqueeSection from "@/components/MarqueeSection";
import WorkSection from "@/components/WorkSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import StudioSection from "@/components/StudioSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import SectionReveal from "@/components/SectionReveal";
import SectionDivider from "@/components/SectionDivider";

export default function Home() {
  return (
    <main className="flex flex-col flex-1">
      <Navbar />

      {/* Hero — no reveal, always visible */}
      <HeroSection />

      <SectionDivider />
      <SectionReveal><MarqueeSection /></SectionReveal>

      <SectionDivider />
      <SectionReveal><WorkSection /></SectionReveal>

      <SectionDivider />
      <SectionReveal><ServicesSection /></SectionReveal>

      <SectionDivider />
      <SectionReveal><ProcessSection /></SectionReveal>

      <SectionDivider />
      <SectionReveal><StudioSection /></SectionReveal>

      <SectionDivider />
      <SectionReveal><CTASection /></SectionReveal>

      <SectionDivider />
      <SectionReveal><Footer /></SectionReveal>
    </main>
  );
}
