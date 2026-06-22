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
import CustomCursor from '@/components/landing/CustomCursor';
import WhatsAppButton from '@/components/landing/WhatsAppButton';

const globalAnimations = `
  @keyframes l-slide-up {
    from { opacity: 0; transform: translateY(44px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes l-scale-in {
    from { opacity: 0; transform: scale(0.93) translateY(18px); }
    to   { opacity: 1; transform: scale(1) translateY(0); }
  }
  @keyframes l-slide-left {
    from { opacity: 0; transform: translateX(-32px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes l-slide-right {
    from { opacity: 0; transform: translateX(32px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes l-fade {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  @keyframes l-glow-breathe {
    0%, 100% { opacity: 0.2; transform: translate(-50%,-50%) scale(1); }
    50%       { opacity: 0.35; transform: translate(-50%,-50%) scale(1.12); }
  }
  .l-reveal { opacity: 0; }
  .l-reveal.l-visible {
    animation-fill-mode: both;
    animation-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
    animation-duration: 0.72s;
    animation-delay: var(--l-delay, 0ms);
  }
  .l-reveal-slide-up.l-visible   { animation-name: l-slide-up; }
  .l-reveal-scale-in.l-visible   { animation-name: l-scale-in; }
  .l-reveal-slide-left.l-visible { animation-name: l-slide-left; }
  .l-reveal-slide-right.l-visible{ animation-name: l-slide-right; }
  .l-reveal-fade.l-visible       { animation-name: l-fade; }
  .l-stagger-item { opacity: 0; }
  .l-stagger-item.l-visible {
    animation-fill-mode: both;
    animation-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
    animation-duration: 0.65s;
  }
  .l-stagger-item.l-reveal-scale-in.l-visible { animation-name: l-scale-in; }
  .l-stagger-item.l-reveal-slide-up.l-visible { animation-name: l-slide-up; }
  .hero-eyebrow  { animation: l-slide-up 0.6s cubic-bezier(0.22,1,0.36,1) 0.05s both; }
  .hero-h1       { animation: l-slide-up 0.75s cubic-bezier(0.22,1,0.36,1) 0.18s both; }
  .hero-lead     { animation: l-slide-up 0.65s cubic-bezier(0.22,1,0.36,1) 0.38s both; }
  .hero-cta-row  { animation: l-slide-up 0.6s cubic-bezier(0.22,1,0.36,1) 0.54s both; }
  .hero-trust    { animation: l-slide-up 0.6s cubic-bezier(0.22,1,0.36,1) 0.68s both; }
  .service-card { transition: transform 0.32s cubic-bezier(0.22,1,0.36,1), box-shadow 0.32s cubic-bezier(0.22,1,0.36,1); }
  .service-card:hover { transform: translateY(-6px); box-shadow: 0 18px 48px rgba(0,0,0,0.09); }
  .service-card:hover .service-icon svg { transform: scale(1.15); transition: transform 0.3s ease; }
  .service-icon svg { transition: transform 0.3s ease; }
  .work-big-card, a.work-big-card { transition: transform 0.35s cubic-bezier(0.22,1,0.36,1) !important; }
  .work-big-card:hover { transform: scale(1.015) !important; }
  .work-small-card, a.work-small-card { transition: transform 0.32s cubic-bezier(0.22,1,0.36,1) !important; }
  .work-small-card:hover { transform: translateY(-5px) !important; }
  .cta-glow-orb { animation: l-glow-breathe 4s ease-in-out infinite; }
  @keyframes l-stat-pop {
    0%   { transform: scale(1); }
    40%  { transform: scale(1.06); }
    100% { transform: scale(1); }
  }
  .stat-value.l-popped { animation: l-stat-pop 0.4s cubic-bezier(0.22,1,0.36,1) forwards; }
`;

export default function Home() {
  return (
    <div
      style={{
        fontFamily: 'var(--font-plus-jakarta), "Plus Jakarta Sans", sans-serif',
        background: '#f3f2ef',
        minHeight: '100vh',
        cursor: 'none',
        color: '#0c0c0c',
        WebkitFontSmoothing: 'antialiased',
        scrollBehavior: 'smooth',
      }}
    >
      <style>{globalAnimations}</style>
      <CustomCursor />
      <WhatsAppButton />
      <LandingNav />
      <LandingHero />
      <ScrollReveal variant="slide-up"><LandingServices /></ScrollReveal>
      <ScrollReveal variant="scale-in"><LandingWork /></ScrollReveal>
      <ScrollReveal variant="fade"><LandingLogos /></ScrollReveal>
      <ScrollReveal variant="slide-up"><LandingProcess /></ScrollReveal>
      <ScrollReveal variant="scale-in"><LandingStats /></ScrollReveal>
      <ScrollReveal variant="slide-up"><LandingCTA /></ScrollReveal>
      <ScrollReveal variant="fade"><LandingFooter /></ScrollReveal>
    </div>
  );
}
