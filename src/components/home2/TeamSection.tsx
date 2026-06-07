'use client';

const TEAM = [
  {
    name: 'Aria Kapoor',
    role: 'Creative Director',
    photo: 'https://picsum.photos/seed/portrait-woman1/400/530',
  },
  {
    name: 'Marcus Webb',
    role: 'Brand Strategist',
    photo: 'https://picsum.photos/seed/portrait-man1/400/530',
  },
  {
    name: 'Priya Nair',
    role: 'Lead Developer',
    photo: 'https://picsum.photos/seed/portrait-woman2/400/530',
  },
  {
    name: 'James Okafor',
    role: 'Video Director',
    photo: 'https://picsum.photos/seed/portrait-man2/400/530',
  },
];

const ARCHIVO       = 'var(--font-archivo), "Archivo", sans-serif';
const ARCHIVO_BLACK = 'var(--font-archivo-black), "Archivo Black", sans-serif';

export default function TeamSection() {
  return (
    <section style={{
      background: '#0a0a0a',
      display: 'flex',
      alignItems: 'center',
      gap: 'clamp(32px, 5vw, 72px)',
      padding: 'clamp(48px, 7vw, 88px) clamp(24px, 5vw, 72px)',
      overflow: 'hidden',
    }}>

      {/* ── Left: heading + CTA ── */}
      <div style={{ flexShrink: 0, width: 'clamp(200px, 28vw, 360px)' }}>
        <h2 style={{
          margin: '0 0 8px',
          fontFamily: ARCHIVO,
          fontWeight: 300,
          fontSize: 'clamp(32px, 4.5vw, 60px)',
          color: '#fff',
          lineHeight: 1.1,
          letterSpacing: '-0.02em',
        }}>
          A Team of
        </h2>
        <h2 style={{
          margin: '0 0 36px',
          fontFamily: ARCHIVO,
          fontWeight: 700,
          fontStyle: 'italic',
          fontSize: 'clamp(32px, 4.5vw, 60px)',
          color: '#FB4415',
          lineHeight: 1.05,
          letterSpacing: '-0.02em',
        }}>
          specialists.
        </h2>

        <a href="#" style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 10,
          background: '#fff',
          color: '#0a0a0a',
          fontFamily: ARCHIVO,
          fontWeight: 600,
          fontSize: 'clamp(13px, 1.1vw, 15px)',
          padding: '13px 26px',
          borderRadius: 100,
          textDecoration: 'none',
          letterSpacing: '0.01em',
        }}>
          Learn More
          <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
            <path d="M1 5H13M9 1L13 5L9 9" stroke="#0a0a0a"
              strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>

      {/* ── Right: team cards ── */}
      <div style={{
        flex: 1,
        display: 'flex',
        gap: 'clamp(10px, 1.4vw, 18px)',
        minWidth: 0,
      }}>
        {TEAM.map((member) => (
          <div
            key={member.name}
            style={{
              flex: 1,
              minWidth: 0,
              borderRadius: 16,
              overflow: 'hidden',
              position: 'relative',
              aspectRatio: '3 / 4',
              background: '#222',
              cursor: 'pointer',
            }}
          >
            {/* Photo */}
            <img
              src={member.photo}
              alt={member.name}
              style={{
                position: 'absolute', inset: 0,
                width: '100%', height: '100%',
                objectFit: 'cover', objectPosition: 'center top',
                display: 'block',
              }}
            />

            {/* Bottom gradient overlay */}
            <div style={{
              position: 'absolute',
              bottom: 0, left: 0, right: 0,
              height: '55%',
              background: 'linear-gradient(to top, rgba(0,0,0,0.88) 0%, transparent 100%)',
            }} />

            {/* Name + role */}
            <div style={{
              position: 'absolute',
              bottom: 0, left: 0, right: 0,
              padding: 'clamp(14px, 1.6vw, 22px)',
            }}>
              <div style={{
                fontFamily: ARCHIVO,
                fontWeight: 600,
                fontSize: 'clamp(13px, 1.2vw, 17px)',
                color: '#fff',
                lineHeight: 1.3,
              }}>
                {member.name}
              </div>
              <div style={{
                fontFamily: ARCHIVO,
                fontStyle: 'italic',
                fontWeight: 400,
                fontSize: 'clamp(11px, 0.9vw, 13px)',
                color: 'rgba(255,255,255,0.6)',
                marginTop: 3,
              }}>
                {member.role}
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
