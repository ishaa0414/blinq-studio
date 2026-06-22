import Image from 'next/image';
import websiteCover from '@/app/assets/website cover.png';
import brandingCover from '@/app/assets/branding cover.png';
import videoCover from '@/app/assets/video cover.png';

const projects = [
  {
    id: 3,
    label: 'Website Development',
    title: 'Wakefit',
    bg: null,
    accent: '#FF5B1E',
    big: true,
  },
  {
    id: 2,
    label: 'Branding',
    title: 'Fabowlz',
    bg: null,
    accent: '#FF8A2B',
    big: false,
    image: brandingCover,
    href: '/fabowlz-case-study.pdf',
  },
  {
    id: 1,
    label: 'Video',
    title: 'Perfios',
    bg: null,
    accent: '#FF5B1E',
    big: false,
    image: videoCover,
    href: 'https://motion-designer-portfolio-gk5h.vercel.app/',
  },
];

export default function LandingWork() {
  const big = projects[0];
  const small = projects.slice(1);

  return (
    <>
      <style>{`
        .work-layout {
          display: grid;
          grid-template-columns: 1fr 1.6fr;
          gap: 48px;
          align-items: start;
        }
        .work-small-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        .work-big-card { height: 280px; }
        .work-small-card { height: 180px; }

        @media (max-width: 768px) {
          .work-section {
            margin-top: 40px !important;
            padding: 0 12px !important;
          }
          .work-layout {
            grid-template-columns: 1fr;
            gap: 28px;
          }
          .work-big-card { height: 220px; }
          .work-small-card { height: 150px; }
        }
      `}</style>

      <section id="work" className="work-section" style={{ margin: '60px 0 0', padding: `0 clamp(28px, 5vw, 72px)` }}>
        <div className="work-layout">
          {/* Left — section head */}
          <div style={{ paddingTop: 8 }}>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#8b8b8b' }}>
              Featured Work
            </span>
            <h2
              style={{
                fontSize: 'clamp(30px, 3.5vw, 48px)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                lineHeight: 1.08,
                margin: '14px 0 20px',
                color: '#0c0c0c',
              }}
            >
              Work that
              <br />
              <em
                style={{
                  fontStyle: 'normal',
                  fontWeight: 900,
                  color: '#FF5B1E',
                }}
              >
                speaks
              </em>{' '}
              for itself.
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.6, color: '#3f3f3f', maxWidth: 280 }}>
              A selection of brand identities, websites, and digital experiences we&apos;ve crafted for ambitious clients.
            </p>
          </div>

          {/* Right — project cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {/* Big card */}
            <a
              href="https://www.cocosleep.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="work-big-card"
              style={{
                background: '#111',
                borderRadius: 20,
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                display: 'block',
                textDecoration: 'none',
              }}
            >
              <Image
                src={websiteCover}
                alt="Wakefit website"
                fill
                style={{ objectFit: 'cover', objectPosition: 'top' }}
              />
              {/* Gradient overlay so text stays readable */}
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.15) 55%, transparent 100%)' }} />
              <div style={{ position: 'absolute', bottom: 24, left: 24, right: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', zIndex: 1 }}>
                <div>
                  <span style={{ display: 'inline-block', fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: 6 }}>
                    {big.label}
                  </span>
                  <h3 style={{ fontSize: 22, fontWeight: 700, color: '#fff', margin: 0, letterSpacing: '-0.02em' }}>
                    {big.title}
                  </h3>
                </div>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1 }}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2.5 11.5L11.5 2.5M11.5 2.5H5M11.5 2.5V9" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </a>

            {/* Two small cards */}
            <div className="work-small-grid">
              {small.map((p) => {
                const inner = (
                  <>
                    {p.image && (
                      <>
                        <Image src={p.image} alt={p.title} fill style={{ objectFit: 'cover', objectPosition: 'center' }} />
                        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)' }} />
                      </>
                    )}
                    <div style={{ position: 'absolute', bottom: 20, left: 20, right: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', zIndex: 1 }}>
                      <div>
                        <span style={{ display: 'block', fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginBottom: 4 }}>
                          {p.label}
                        </span>
                        <h3 style={{ fontSize: 16, fontWeight: 700, color: '#fff', margin: 0, letterSpacing: '-0.02em' }}>
                          {p.title}
                        </h3>
                      </div>
                      <div style={{ width: 34, height: 34, borderRadius: '50%', background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                          <path d="M2.5 11.5L11.5 2.5M11.5 2.5H5M11.5 2.5V9" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </div>
                  </>
                );

                const sharedStyle = {
                  background: p.bg ?? '#111',
                  borderRadius: 20,
                  position: 'relative' as const,
                  overflow: 'hidden' as const,
                  cursor: 'pointer',
                };

                return p.href ? (
                  <a key={p.id} href={p.href} target="_blank" rel="noopener noreferrer" className="work-small-card" style={{ ...sharedStyle, display: 'block', textDecoration: 'none' }}>
                    {inner}
                  </a>
                ) : (
                  <div key={p.id} className="work-small-card" style={sharedStyle}>
                    {inner}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
