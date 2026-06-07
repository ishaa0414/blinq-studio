'use client';

export default function StatementSection() {
  return (
    <section style={{
      position: 'relative',
      width: '100%',
      background: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      padding: '60px 0',
    }}>

      {/* Left image */}
      <div style={{
        position: 'absolute',
        left: 0, top: 0,
        width: 'clamp(180px, 22vw, 320px)',
        height: '100%',
        overflow: 'hidden',
      }}>
        <video
          src="/hero8.mp4"
          autoPlay muted loop playsInline
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>

      {/* Right image */}
      <div style={{
        position: 'absolute',
        right: 0, top: '-5%',
        width: 'clamp(200px, 28vw, 420px)',
        height: '110%',
        overflow: 'hidden',
      }}>
        <video
          src="/hero2.mp4"
          autoPlay muted loop playsInline
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>

      {/* Center text */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        textAlign: 'center',
        padding: '0 clamp(200px, 25vw, 380px)',
        maxWidth: 1200,
      }}>
        <h2 style={{
          fontFamily: 'var(--font-archivo), "Archivo", serif',
          fontWeight: 300,
          fontSize: 'clamp(36px, 5.5vw, 82px)',
          lineHeight: 1.1,
          letterSpacing: '-0.02em',
          color: '#111',
          margin: 0,
        }}>
          Building Brands That{' '}
          <span style={{ color: '#FB4415' }}>Work</span>
          {' '}End{' '}
          <span style={{ color: '#FB4415' }}>To</span>
          {' '}End.
        </h2>
      </div>
    </section>
  );
}
