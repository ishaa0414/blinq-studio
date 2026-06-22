import Image from 'next/image';
import heroImage from '@/app/assets/hero-image.png';
import perfiosLogo from '@/app/assets/1. Perfios.png';
import wakefitLogo from '@/app/assets/2. Wakefit.png';
import artkalaLogo from '@/app/assets/7. Artkala.jpg';
import houmeLogo from '@/app/assets/13. Houme-01.png';

export default function LandingHero() {
  return (
    <>
      <style>{`
        .hero-section {
          position: relative;
          overflow: hidden;
          min-height: 560px;
        }

        /* Image wrapper — full bg on desktop */
        .hero-img-wrapper {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 0;
          overflow: hidden;
        }
        .hero-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          display: block;
        }

        .hero-content-wrap {
          padding: 0 clamp(28px, 5vw, 72px);
          position: relative;
        }
        .hero-inner {
          position: relative;
          z-index: 2;
          padding: 72px 0 68px;
          max-width: 620px;
        }
        .hero-cta-row {
          display: flex;
          gap: 14px;
          margin-top: 36px;
          flex-wrap: wrap;
          align-items: center;
        }
        .hero-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-weight: 600;
          font-size: 15px;
          border-radius: 999px;
          padding: 14px 26px;
          cursor: pointer;
          background: #FF5B1E;
          color: #fff;
          text-decoration: none;
          letter-spacing: -0.01em;
          border: none;
        }
        .hero-btn-ghost {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-weight: 600;
          font-size: 15px;
          cursor: pointer;
          background: transparent;
          color: #0c0c0c;
          text-decoration: none;
          letter-spacing: -0.01em;
          border: none;
          padding: 0;
        }
        .hero-trust {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-top: 44px;
        }

        @media (max-width: 768px) {
          .hero-section {
            min-height: auto;
            background: #f3f2ef;
          }

          .hero-img-wrapper {
            display: none;
          }

          .hero-content-wrap {
            padding: 0 20px;
            /* mobile keeps 20px both sides */
          }
          .hero-inner {
            padding: 36px 0 48px;
            max-width: 100%;
          }
          .hero-eyebrow {
            font-size: 11px !important;
          }
          .hero-h1 {
            font-size: clamp(38px, 9vw, 52px) !important;
            line-height: 1.02 !important;
          }
          .hero-lead {
            font-size: 15px !important;
            max-width: 100% !important;
          }
          .hero-cta-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
            margin-top: 28px;
          }
          .hero-btn-primary {
            font-size: 14px;
            padding: 13px 22px;
          }
          .hero-btn-ghost {
            font-size: 14px;
          }
          .hero-trust {
            margin-top: 32px;
          }
        }
      `}</style>

      <section className="hero-section">
        {/* Background image */}
        <div className="hero-img-wrapper">
          <Image
            src={heroImage}
            alt="Hero visual"
            fill
            priority
            className="hero-img"
            style={{ objectFit: 'cover', objectPosition: 'center top' }}
          />
        </div>

        {/* Hero content */}
        <div className="hero-content-wrap">
          <div className="hero-inner">
            {/* Eyebrow */}
            <span
              className="hero-eyebrow"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 9,
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: '#3f3f3f',
              }}
            >
              Branding. Websites. Videos.
            </span>

            {/* Headline */}
            <h1
              className="hero-h1"
              style={{
                fontSize: 'clamp(48px, 5.8vw, 78px)',
                lineHeight: 0.98,
                letterSpacing: '-0.035em',
                fontWeight: 500,
                margin: '22px 0 0',
                color: '#0c0c0c',
              }}
            >
              Design that
              <br />
              moves brands
              <br />
              <em
                style={{
                  fontStyle: 'normal',
                  fontWeight: 900,
                  color: '#FF5B1E',
                  letterSpacing: '-0.01em',
                }}
              >
                forward.
              </em>
            </h1>

            {/* Lead */}
            <p
              className="hero-lead"
              style={{
                margin: '26px 0 0',
                fontSize: 17,
                lineHeight: 1.6,
                color: '#3f3f3f',
                maxWidth: 420,
              }}
            >
              We help ambitious businesses stand out with branding, high-converting websites, and
              videos that drive real impact.
            </p>

            {/* CTAs */}
            <div className="hero-cta-row">
              <a href="https://wa.me/916205851500" target="_blank" rel="noopener noreferrer" className="hero-btn-primary">
                Book a Strategy Call
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2.5 11.5L11.5 2.5M11.5 2.5H5M11.5 2.5V9" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>

            {/* Trust row */}
            <div className="hero-trust">
              <div style={{ display: 'flex', alignItems: 'center' }}>
                {[perfiosLogo, wakefitLogo, artkalaLogo, houmeLogo].map((logo, i) => (
                  <div
                    key={i}
                    style={{
                      width: 52,
                      height: 52,
                      borderRadius: '50%',
                      background: '#ffffff',
                      border: '2.5px solid #e7e6e3',
                      marginLeft: i === 0 ? 0 : -14,
                      position: 'relative',
                      zIndex: 4 - i,
                      overflow: 'hidden',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Image
                      src={logo}
                      alt="Client logo"
                      width={i === 1 ? 44 : 36}
                      height={i === 1 ? 44 : 36}
                      style={{ objectFit: 'contain', width: i === 1 ? 44 : 36, height: i === 1 ? 44 : 36 }}
                    />
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <span style={{ fontSize: 13, color: '#3f3f3f', fontWeight: 500 }}>
                  <strong style={{ color: '#0c0c0c' }}>100+</strong> Projects &nbsp;·&nbsp; <strong style={{ color: '#0c0c0c' }}>30+</strong> Clients
                </span>
                <span style={{ fontSize: 12, color: '#8b8b8b' }}>Trusted by ambitious companies</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
