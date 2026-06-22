import { Plus_Jakarta_Sans, Newsreader } from 'next/font/google';
import CustomCursor from '@/components/landing/CustomCursor';

const globalAnimations = `
  /* ── Keyframes ── */
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

  /* ── Section reveals (ScrollReveal) ── */
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

  /* ── Stagger items (StaggerReveal) ── */
  .l-stagger-item { opacity: 0; }
  .l-stagger-item.l-visible {
    animation-fill-mode: both;
    animation-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
    animation-duration: 0.65s;
  }
  .l-stagger-item.l-reveal-scale-in.l-visible { animation-name: l-scale-in; }
  .l-stagger-item.l-reveal-slide-up.l-visible { animation-name: l-slide-up; }

  /* ── Hero entrance (CSS-only, fires on load) ── */
  .hero-eyebrow  { animation: l-slide-up 0.6s cubic-bezier(0.22,1,0.36,1) 0.05s both; }
  .hero-h1       { animation: l-slide-up 0.75s cubic-bezier(0.22,1,0.36,1) 0.18s both; }
  .hero-lead     { animation: l-slide-up 0.65s cubic-bezier(0.22,1,0.36,1) 0.38s both; }
  .hero-cta-row  { animation: l-slide-up 0.6s cubic-bezier(0.22,1,0.36,1) 0.54s both; }
  .hero-trust    { animation: l-slide-up 0.6s cubic-bezier(0.22,1,0.36,1) 0.68s both; }

  /* ── Card hover effects ── */
  .service-card {
    transition: transform 0.32s cubic-bezier(0.22,1,0.36,1),
                box-shadow 0.32s cubic-bezier(0.22,1,0.36,1);
  }
  .service-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 18px 48px rgba(0,0,0,0.09);
  }
  .service-card:hover .service-icon svg {
    transform: scale(1.15);
    transition: transform 0.3s ease;
  }
  .service-icon svg { transition: transform 0.3s ease; }

  .work-big-card, a.work-big-card {
    transition: transform 0.35s cubic-bezier(0.22,1,0.36,1) !important;
  }
  .work-big-card:hover { transform: scale(1.015) !important; }

  .work-small-card, a.work-small-card {
    transition: transform 0.32s cubic-bezier(0.22,1,0.36,1) !important;
  }
  .work-small-card:hover { transform: translateY(-5px) !important; }

  /* ── CTA glow animation ── */
  .cta-glow-orb {
    animation: l-glow-breathe 4s ease-in-out infinite;
  }

  /* ── Stats shimmer on number ── */
  @keyframes l-stat-pop {
    0%   { transform: scale(1); }
    40%  { transform: scale(1.06); }
    100% { transform: scale(1); }
  }
  .stat-value.l-popped {
    animation: l-stat-pop 0.4s cubic-bezier(0.22,1,0.36,1) forwards;
  }
`;


const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

const newsreader = Newsreader({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-newsreader',
  display: 'swap',
});

export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`${plusJakarta.variable} ${newsreader.variable}`}
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
      {children}
    </div>
  );
}
