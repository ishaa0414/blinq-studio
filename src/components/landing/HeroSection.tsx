export default function HeroSection() {
  return (
    <section
      style={{
        maxWidth: 1200,
        margin: '0 auto',
        padding: '72px 24px 56px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 48,
        alignItems: 'center',
      }}
    >
      {/* Left */}
      <div>
        <h1
          style={{
            fontSize: 'clamp(40px, 5vw, 62px)',
            fontWeight: 800,
            lineHeight: 1.1,
            color: '#111',
            margin: '0 0 24px',
          }}
        >
          <span style={{ color: '#FF5C1A' }}>Future of your</span>
          <br />
          business today.
        </h1>

        {/* Description + Stats row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 24,
            marginBottom: 40,
          }}
        >
          {/* Description */}
          <div
            style={{
              background: '#f7f7f7',
              borderRadius: 12,
              padding: '20px 18px',
              display: 'flex',
              alignItems: 'flex-start',
              gap: 12,
            }}
          >
            <div
              style={{
                width: 36,
                height: 36,
                background: '#FF5C1A',
                borderRadius: 8,
                flexShrink: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 2L14 8L8 14M2 8H14" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <p style={{ fontSize: 13, color: '#555', lineHeight: 1.6, margin: 0 }}>
              Where we elevate your business with innovative strategies and expert solutions. As a full-service business agency.
            </p>
          </div>

          {/* Stats */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={{ display: 'flex', gap: 24 }}>
              <div>
                <p style={{ fontSize: 28, fontWeight: 800, color: '#111', margin: 0 }}>721+</p>
              </div>
              <div>
                <p style={{ fontSize: 28, fontWeight: 800, color: '#111', margin: 0 }}>1000+</p>
              </div>
            </div>
            <p style={{ fontWeight: 700, fontSize: 14, color: '#111', margin: 0 }}>Growth is our priority.</p>
            <p style={{ fontSize: 12, color: '#888', lineHeight: 1.6, margin: 0 }}>
              As a full-service business agency, we specialize in helping companies of all sizes optimize their operations
            </p>
          </div>
        </div>

        {/* Bottom stats */}
        <div style={{ display: 'flex', gap: 40 }}>
          {[
            { icon: '⬜', value: '2000+', label: 'Your protection' },
            { icon: '⊞', value: '7001+', label: 'Provide tailored' },
          ].map((stat) => (
            <div key={stat.label} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ fontSize: 22, color: '#FF5C1A' }}>{stat.icon}</span>
              <div>
                <p style={{ fontWeight: 800, fontSize: 18, color: '#111', margin: 0 }}>{stat.value}</p>
                <p style={{ fontSize: 12, color: '#888', margin: 0 }}>{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right — 3D swirl illustration */}
      <div
        style={{
          borderRadius: 20,
          overflow: 'hidden',
          aspectRatio: '1 / 1',
          background: 'linear-gradient(135deg, #fff5f0 0%, #ffe4d6 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        <OrangeSwirlSVG />
      </div>
    </section>
  );
}

function OrangeSwirlSVG() {
  return (
    <svg
      viewBox="0 0 400 400"
      style={{ width: '80%', height: '80%' }}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="g1" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FF9A5C" />
          <stop offset="100%" stopColor="#FF5C1A" />
        </radialGradient>
        <radialGradient id="g2" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFB87A" />
          <stop offset="100%" stopColor="#E84A00" />
        </radialGradient>
        <radialGradient id="g3" cx="60%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#FFC89A" />
          <stop offset="100%" stopColor="#FF6B2B" />
        </radialGradient>
      </defs>

      {/* Layered concentric curved shapes simulating 3D swirl */}
      <ellipse cx="200" cy="220" rx="160" ry="40" fill="#CC3D00" opacity="0.3" />

      {[0, 1, 2, 3, 4, 5, 6].map((i) => {
        const offset = i * 22;
        const opacity = 0.85 - i * 0.08;
        const colors = ['#FF5C1A', '#FF6B2B', '#FF7A3D', '#FF8C52', '#FF9D68', '#FFAE7E', '#FFBF94'];
        return (
          <ellipse
            key={i}
            cx={200 + i * 3}
            cy={200 - offset}
            rx={150 - i * 12}
            ry={150 - i * 12}
            fill={colors[i]}
            opacity={opacity}
          />
        );
      })}

      {/* Inner highlight */}
      <ellipse cx="185" cy="165" rx="50" ry="50" fill="#FFD4B0" opacity="0.5" />
      <ellipse cx="175" cy="155" rx="25" ry="25" fill="#fff" opacity="0.25" />
    </svg>
  );
}
