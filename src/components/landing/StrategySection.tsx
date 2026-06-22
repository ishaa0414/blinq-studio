export default function StrategySection() {
  return (
    <section
      style={{
        maxWidth: 1200,
        margin: '0 auto',
        padding: '0 24px 80px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 0,
        alignItems: 'center',
        borderTop: '1px solid #f0f0f0',
        paddingTop: 64,
      }}
    >
      {/* Left — Trusted Partner */}
      <div style={{ paddingRight: 48 }}>
        <p
          style={{
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: 2,
            color: '#aaa',
            textTransform: 'uppercase',
            margin: '0 0 8px',
          }}
        >
          oooo
        </p>
        <h2
          style={{
            fontSize: 'clamp(24px, 3vw, 36px)',
            fontWeight: 800,
            color: '#111',
            lineHeight: 1.2,
            margin: '0 0 16px',
          }}
        >
          TRUSTED PARTNER FOR
          <br />
          BUSINESS SUCCESS
        </h2>
        <p style={{ fontSize: 14, color: '#888', lineHeight: 1.7, margin: 0, maxWidth: 380 }}>
          Where we elevate your business with innovative strategies and expert solutions. As a full-service business agency, we specialize in helping companies of all sizes optimize
        </p>
      </div>

      {/* Right — From strategy */}
      <div style={{ borderLeft: '1px solid #f0f0f0', paddingLeft: 48, position: 'relative' }}>
        {/* Arrow icon top-right */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            width: 36,
            height: 36,
            background: '#111',
            borderRadius: 8,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M14 2L2 14" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>

        <h2
          style={{
            fontSize: 'clamp(36px, 4.5vw, 58px)',
            fontWeight: 800,
            color: '#FF5C1A',
            lineHeight: 1.1,
            margin: 0,
          }}
        >
          From strategy
          <br />
          <span style={{ color: '#111' }}>to execution</span>
        </h2>
      </div>
    </section>
  );
}
