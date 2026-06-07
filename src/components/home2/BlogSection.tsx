'use client';

const POSTS = [
  {
    category: 'Branding',
    date: 'May 12, 2026',
    title: 'How Strong Branding Drives 3× More Revenue for Early-Stage Startups',
    photo: 'https://picsum.photos/seed/blog-brand/800/500',
  },
  {
    category: 'Web Design',
    date: 'Apr 28, 2026',
    title: 'The Hidden Cost of a Cheap Website: What Every Founder Should Know',
    photo: 'https://picsum.photos/seed/blog-webdesign/800/500',
  },
  {
    category: 'Video',
    date: 'Mar 14, 2026',
    title: 'Video Marketing in 2026: Why Every Growing Brand Needs Motion',
    photo: 'https://picsum.photos/seed/blog-video/800/500',
  },
];

const ARCHIVO       = 'var(--font-archivo), "Archivo", sans-serif';
const ARCHIVO_BLACK = 'var(--font-archivo-black), "Archivo Black", sans-serif';

export default function BlogSection() {
  return (
    <section style={{
      background: '#F7F7F5',
      padding: 'clamp(60px, 8vw, 96px) clamp(20px, 5vw, 72px)',
    }}>

      {/* ── Header row ── */}
      <div style={{
        display: 'flex', alignItems: 'flex-end',
        justifyContent: 'space-between', gap: 24,
        marginBottom: 'clamp(32px, 4vw, 52px)',
        flexWrap: 'wrap',
      }}>
        <div>
          <h2 style={{
            margin: '0 0 10px',
            fontFamily: ARCHIVO,
            fontWeight: 700,
            fontSize: 'clamp(28px, 4vw, 52px)',
            color: '#0a0a0a', lineHeight: 1.1, letterSpacing: '-0.02em',
          }}>
            Latest from the Studio
          </h2>
          <p style={{
            margin: 0,
            fontFamily: ARCHIVO, fontWeight: 400,
            fontSize: 'clamp(13px, 1.2vw, 16px)',
            color: '#777', lineHeight: 1.5,
          }}>
            Insights on branding, web design, and creative strategy.
          </p>
        </div>

        <a href="#" style={{
          display: 'inline-flex', alignItems: 'center', gap: 10,
          border: '1.5px solid #0a0a0a',
          color: '#0a0a0a', background: 'transparent',
          fontFamily: ARCHIVO, fontWeight: 600,
          fontSize: 'clamp(12px, 1vw, 14px)',
          padding: '11px 24px', borderRadius: 100,
          textDecoration: 'none', whiteSpace: 'nowrap',
          letterSpacing: '0.01em',
        }}>
          View All Articles
          <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
            <path d="M1 4.5H11M7.5 1L11 4.5L7.5 8" stroke="#0a0a0a"
              strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>

      {/* ── Cards ── */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 'clamp(14px, 2vw, 24px)',
      }}>
        {POSTS.map((post) => (
          <a
            key={post.title}
            href="#"
            style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column' }}
          >
            {/* Thumbnail */}
            <div style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '16 / 10',
              borderRadius: 14,
              overflow: 'hidden',
              background: '#ddd',
              marginBottom: 'clamp(12px, 1.4vw, 18px)',
              flexShrink: 0,
            }}>
              {/* Photo */}
              <img
                src={post.photo}
                alt={post.title}
                style={{
                  position: 'absolute', inset: 0,
                  width: '100%', height: '100%',
                  objectFit: 'cover', display: 'block',
                }}
              />

              {/* Subtle dark overlay for chip legibility */}
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to bottom, rgba(0,0,0,0.28) 0%, transparent 40%)',
              }} />

              {/* Category chip */}
              <div style={{
                position: 'absolute', top: 14, left: 14,
                background: 'rgba(255,255,255,0.18)',
                backdropFilter: 'blur(6px)',
                WebkitBackdropFilter: 'blur(6px)',
                border: '1px solid rgba(255,255,255,0.3)',
                borderRadius: 100,
                padding: '4px 12px',
                fontFamily: ARCHIVO, fontWeight: 600,
                fontSize: 11, color: '#fff',
                letterSpacing: '0.05em',
              }}>
                {post.category}
              </div>
            </div>

            {/* Meta */}
            <div style={{
              fontFamily: ARCHIVO, fontWeight: 500,
              fontSize: 'clamp(11px, 0.9vw, 13px)',
              color: '#aaa', letterSpacing: '0.04em',
              marginBottom: 8,
            }}>
              {post.date}
            </div>

            {/* Title */}
            <div style={{
              fontFamily: ARCHIVO, fontWeight: 600,
              fontSize: 'clamp(15px, 1.3vw, 19px)',
              color: '#0a0a0a', lineHeight: 1.45,
            }}>
              {post.title}
            </div>
          </a>
        ))}
      </div>

    </section>
  );
}
