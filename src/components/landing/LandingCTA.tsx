export default function LandingCTA() {
  return (
    <>
      <style>{`
        .cta-section {
          margin: 64px 0 0;
          padding: 0 clamp(28px, 5vw, 72px);
        }
        .cta-box {
          background: #0c0c0c;
          border-radius: 22px;
          padding: 72px 64px;
          position: relative;
          overflow: hidden;
          text-align: center;
        }
        .cta-btns {
          display: flex;
          gap: 14px;
          justify-content: center;
          flex-wrap: wrap;
        }
        @media (max-width: 768px) {
          .cta-section {
            margin: 40px 0 0;
            padding: 0 16px;
          }
          .cta-box {
            padding: 48px 24px;
            border-radius: 18px;
          }
          .cta-btns {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>

      <section id="contact" className="cta-section">
        <div className="cta-box">
          {/* Glow */}
          <div className="cta-glow-orb" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '70%', height: '100%', background: 'radial-gradient(ellipse 60% 80% at 50% 50%, rgba(255,138,43,0.22) 0%, rgba(255,91,30,0.12) 40%, transparent 70%)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', top: 0, left: '30%', right: '30%', height: 2, background: 'linear-gradient(90deg, transparent, rgba(255,91,30,0.6) 40%, rgba(255,138,43,0.8) 50%, rgba(255,91,30,0.6) 60%, transparent)' }} />

          <div style={{ position: 'relative', zIndex: 1 }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 22 }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#FF5B1E', display: 'inline-block' }} />
              Let&apos;s Work Together
            </span>

            <h2
              style={{
                fontSize: 'clamp(28px, 4.5vw, 58px)',
                fontWeight: 800,
                color: '#fff',
                letterSpacing: '-0.035em',
                lineHeight: 1.06,
                margin: '0 auto 20px',
                maxWidth: 640,
              }}
            >
              Ready to build something{' '}
              <em
                style={{
                  fontStyle: 'normal',
                  fontWeight: 900,
                  color: '#FF5B1E',
                }}
              >
                worth remembering?
              </em>
            </h2>

            <p style={{ fontSize: 16, lineHeight: 1.55, color: 'rgba(255,255,255,0.45)', margin: '0 auto 40px', maxWidth: 440 }}>
              Book a free 30-minute strategy call. We&apos;ll dig into your business and map out exactly how we can help.
            </p>

            <div className="cta-btns">
              <a
                href="https://wa.me/916205851500"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontWeight: 600, fontSize: 15, borderRadius: 999, padding: '15px 28px', cursor: 'pointer', background: '#FF5B1E', color: '#fff', textDecoration: 'none', letterSpacing: '-0.01em' }}
              >
                Book a Free Call
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2.5 11.5L11.5 2.5M11.5 2.5H5M11.5 2.5V9" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              {/* <a
                href="#work"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontWeight: 600, fontSize: 15, borderRadius: 999, padding: '15px 28px', cursor: 'pointer', background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.7)', textDecoration: 'none', border: '1.5px solid rgba(255,255,255,0.12)', letterSpacing: '-0.01em' }}
              >
                View Our Work
              </a> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
