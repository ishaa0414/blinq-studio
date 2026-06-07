'use client';

const WORKS = [
  { id: 1, media: '/hero1.mp4', type: 'video', title: 'ONE SYSTEM',   category: 'BRANDING', description: 'Description 1' },
  { id: 2, media: '/hero2.mp4', type: 'video', title: 'TWO SYSTEM',   category: 'TECH',     description: 'Description 2' },
  { id: 3, media: '/hero3.mp4', type: 'video', title: 'THREE SYSTEM', category: 'VIDEO',    description: 'Description 3' },
  { id: 4, media: '/hero4.mp4', type: 'video', title: 'FOUR SYSTEM',  category: 'TECH',     description: 'Description 4' },
] as const;

export default function WorksSection() {
  return (
    <section style={{
      background: '#fff',
      padding: 'clamp(24px, 3vw, 40px) clamp(20px, 5vw, 72px)',
    }}>
      {/* Heading */}
      <h2 style={{
        fontFamily: 'var(--font-archivo-black), "Archivo Black", sans-serif',
        fontWeight: 900,
        fontSize: 'clamp(28px, 5vw, 56px)',
        color: '#0a0a0a',
        margin: '0 0 clamp(28px, 4vw, 52px)',
        letterSpacing: '-0.01em',
        lineHeight: 1.1,
      }}>
        SEE OUR BEST WORKS!
      </h2>

      {/* 2×2 Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 'clamp(24px, 3.5vw, 48px)',
      }}>
        {WORKS.map(work => (
          <div key={work.id} style={{ cursor: 'pointer' }}>
            {/* Thumbnail */}
            <div style={{
              width: '100%',
              aspectRatio: '16 / 10',
              overflow: 'hidden',
              borderRadius: 4,
              background: '#111',
              marginBottom: 14,
            }}>
              {work.type === 'video' ? (
                <video
                  src={work.media}
                  autoPlay muted loop playsInline
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              ) : (
                <img
                  src={work.media}
                  alt={work.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              )}
            </div>

            {/* Title row */}
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 8 }}>
              <span style={{
                fontFamily: 'var(--font-archivo-black), "Archivo Black", sans-serif',
                fontWeight: 900,
                fontSize: 'clamp(14px, 1.6vw, 22px)',
                color: '#0a0a0a',
                letterSpacing: '0.02em',
              }}>
                {work.title}
              </span>
              <span style={{
                fontFamily: 'var(--font-archivo), "Archivo", sans-serif',
                fontWeight: 700,
                fontStyle: 'italic',
                fontSize: 'clamp(13px, 1.4vw, 20px)',
                color: '#FB4415',
                whiteSpace: 'nowrap',
              }}>
                ({work.category})
              </span>
            </div>

            {/* Description */}
            <p style={{
              fontFamily: 'var(--font-archivo), "Archivo", sans-serif',
              fontWeight: 400,
              fontSize: 'clamp(12px, 1.1vw, 16px)',
              color: '#555',
              margin: '6px 0 0',
              lineHeight: 1.5,
            }}>
              {work.description}
            </p>
          </div>
        ))}
      </div>

      {/* View all link */}
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 'clamp(28px, 4vw, 52px)' }}>
        <a href="#" style={{
          display: 'inline-flex', alignItems: 'center', gap: 10,
          fontFamily: 'var(--font-archivo), "Archivo", sans-serif',
          fontWeight: 600,
          fontSize: 'clamp(14px, 1.3vw, 18px)',
          color: '#FB4415',
          textDecoration: 'none',
        }}>
          View all case studies
          <span style={{
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            width: 32, height: 32, borderRadius: '50%',
            border: '2px solid #FB4415',
            flexShrink: 0,
          }}>
            <svg width={14} height={14} viewBox="0 0 14 14" fill="none">
              <line x1={2} y1={7} x2={12} y2={7} stroke="#FB4415" strokeWidth={2} strokeLinecap="round"/>
              <polyline points="8,3 12,7 8,11" stroke="#FB4415" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            </svg>
          </span>
        </a>
      </div>
    </section>
  );
}
