export default function CardsSection() {
  return (
    <section
      style={{
        maxWidth: 1200,
        margin: '0 auto',
        padding: '0 24px 80px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gap: 24,
      }}
    >
      {/* Card 1 — White */}
      <div
        style={{
          background: '#f7f7f7',
          borderRadius: 16,
          padding: '36px 28px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          minHeight: 260,
          position: 'relative',
        }}
      >
        <div
          style={{
            width: 36,
            height: 36,
            background: '#111',
            borderRadius: 8,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <ArrowIcon color="#fff" />
        </div>
        <div style={{ marginTop: 'auto' }}>
          <h3 style={{ fontWeight: 800, fontSize: 20, color: '#111', margin: '0 0 12px' }}>
            Build the future of your business
          </h3>
          <p style={{ fontSize: 13, color: '#777', lineHeight: 1.6, margin: 0 }}>
            As a full-service business agency, we specialize in helping companies of all sizes optimize their operations
          </p>
        </div>
      </div>

      {/* Card 2 — Orange */}
      <div
        style={{
          background: '#FF5C1A',
          borderRadius: 16,
          padding: '36px 28px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          minHeight: 260,
        }}
      >
        <div
          style={{
            width: 36,
            height: 36,
            background: 'rgba(255,255,255,0.25)',
            borderRadius: 8,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <ArrowIcon color="#fff" />
        </div>
        <div style={{ marginTop: 'auto' }}>
          <h3 style={{ fontWeight: 800, fontSize: 20, color: '#fff', margin: '0 0 12px' }}>
            We are here to help your business
          </h3>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.8)', lineHeight: 1.6, margin: 0 }}>
            As a full-service business agency, we specialize in helping companies of all sizes optimize their operations
          </p>
        </div>
      </div>

      {/* Card 3 — White with dark text */}
      <div
        style={{
          background: '#fff',
          borderRadius: 16,
          padding: '36px 28px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          minHeight: 260,
          border: '1px solid #f0f0f0',
        }}
      >
        <div
          style={{
            width: 36,
            height: 36,
            background: '#f0f0f0',
            borderRadius: 8,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <ArrowDiagIcon />
        </div>
        <div style={{ marginTop: 'auto' }}>
          <h3
            style={{
              fontWeight: 800,
              fontSize: 20,
              color: '#111',
              margin: '0 0 12px',
              textTransform: 'uppercase',
              lineHeight: 1.2,
            }}
          >
            Helping businesses thrive in a digital-first world
          </h3>
          <p style={{ fontSize: 13, color: '#777', lineHeight: 1.6, margin: '0 0 20px' }}>
            As a full-service business agency, we specialize in helping companies of all sizes optimize their operations
          </p>
          <button
            style={{
              background: '#111',
              color: '#fff',
              border: 'none',
              borderRadius: 6,
              padding: '10px 20px',
              fontWeight: 600,
              fontSize: 13,
              cursor: 'pointer',
              fontFamily: 'inherit',
            }}
          >
            Read More
          </button>
        </div>
      </div>
    </section>
  );
}

function ArrowIcon({ color = '#111' }: { color?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M3 13L13 3M13 3H6M13 3V10" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowDiagIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M14 2L2 14M2 2H14V14" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
