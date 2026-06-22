import Image from 'next/image';
import perfiosLogo from '@/app/assets/1. Perfios.png';
import wakefitLogo from '@/app/assets/2. Wakefit.png';
import ripleAiLogo from '@/app/assets/3. Riple Ai.png';
import evolvingAiLogo from '@/app/assets/4. Evolving AI.jpeg';
import logo5 from '@/app/assets/5. logo.png';
import acrementsLogo from '@/app/assets/6. acrements.jpeg';
import artkalaLogo from '@/app/assets/7. Artkala.jpg';
import hafenLogo from '@/app/assets/8. Hafen.png';
import fabowlzLogo from '@/app/assets/9. Fabowlz.png';
import oneshadeLogo from '@/app/assets/10. Oneshade.png';
import dozoLogo from '@/app/assets/11. Dozo.png';
import elaraLogo from '@/app/assets/12. Elara.png';
import houmeLogo from '@/app/assets/13. Houme-01.png';

const logos = [
  { src: perfiosLogo, name: 'Perfios' },
  { src: wakefitLogo, name: 'Wakefit' },
  { src: ripleAiLogo, name: 'Riple AI' },
  { src: evolvingAiLogo, name: 'Evolving AI' },
  { src: logo5, name: 'Client 5' },
  { src: acrementsLogo, name: 'Acrements' },
  { src: artkalaLogo, name: 'Artkala' },
  { src: hafenLogo, name: 'Hafen' },
  { src: fabowlzLogo, name: 'Fabowlz' },
  { src: oneshadeLogo, name: 'Oneshade' },
  { src: dozoLogo, name: 'Dozo' },
  { src: elaraLogo, name: 'Elara' },
  { src: houmeLogo, name: 'Houme' },
];

export default function LandingLogos() {
  return (
    <>
      <style>{`
        .logos-section {
          margin: 64px 0 0;
          padding: 40px 0;
          background: #f3f2ef;
          overflow: hidden;
        }
        .logos-eyebrow {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #8b8b8b;
          margin-bottom: 28px;
          padding: 0 clamp(28px, 5vw, 72px);
        }
        .logos-track-outer {
          overflow: hidden;
          width: 100%;
        }
        .logos-track {
          display: flex;
          align-items: center;
          gap: 56px;
          width: max-content;
          animation: marquee 28s linear infinite;
        }
        .logos-track:hover {
          animation-play-state: paused;
        }
        .logo-item {
          display: flex;
          align-items: center;
          flex-shrink: 0;
          opacity: 0.85;
          transition: opacity 0.2s;
        }
        .logo-item:hover {
          opacity: 1;
        }
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (max-width: 768px) {
          .logos-section {
            margin-top: 40px;
            padding: 28px 0;
          }
          .logos-eyebrow {
            padding: 0 16px;
          }
          .logos-track {
            gap: 36px;
            animation-duration: 20s;
          }
        }
      `}</style>

      <section className="logos-section">
        <div className="logos-eyebrow">
          <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#FF5B1E', display: 'inline-block', flexShrink: 0 }} />
          Trusted by Ambitious Brands
        </div>

        <div className="logos-track-outer">
          {/* Duplicate the logos array so the scroll loops seamlessly */}
          <div className="logos-track">
            {[...logos, ...logos].map((logo, i) => (
              <div key={`${logo.name}-${i}`} className="logo-item" style={{ width: 120, height: 44, position: 'relative', flexShrink: 0 }}>
                <Image
                  src={logo.src}
                  alt={logo.name}
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
