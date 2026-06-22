import StaggerReveal from '@/components/landing/StaggerReveal';

const services = [
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <path d="M13 2L15.5 7.5H21L16.5 11L18.5 17L13 13.5L7.5 17L9.5 11L5 7.5H10.5L13 2Z" stroke="#0c0c0c" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="13" cy="13" r="3" stroke="#0c0c0c" strokeWidth="1.5" />
      </svg>
    ),
    label: 'Branding',
    desc: "Build a brand identity that's memorable and stands out.",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <circle cx="13" cy="13" r="10" stroke="#0c0c0c" strokeWidth="1.5" />
        <circle cx="13" cy="13" r="4" stroke="#0c0c0c" strokeWidth="1.5" />
        <path d="M13 3v4M13 19v4M3 13h4M19 13h4" stroke="#0c0c0c" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    label: 'Web Design',
    desc: 'Beautiful, conversion-focused websites that perform.',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <polyline points="9,8 4,13 9,18" stroke="#0c0c0c" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="17,8 22,13 17,18" stroke="#0c0c0c" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="15" y1="6" x2="11" y2="20" stroke="#0c0c0c" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    label: 'Development',
    desc: 'Fast, scalable and clean development for the modern web.',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <polygon points="10,7 20,13 10,19" stroke="#0c0c0c" strokeWidth="1.5" strokeLinejoin="round" />
        <line x1="5" y1="7" x2="5" y2="19" stroke="#0c0c0c" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    label: 'Video & Motion',
    desc: 'Videos that engage, explain and leave a lasting impression.',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <circle cx="13" cy="13" r="10" stroke="#0c0c0c" strokeWidth="1.5" />
        <circle cx="13" cy="13" r="6" stroke="#0c0c0c" strokeWidth="1.5" />
        <circle cx="13" cy="13" r="2" fill="#0c0c0c" />
      </svg>
    ),
    label: 'Strategy',
    desc: 'Clear strategy and positioning that drives growth.',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <path d="M6 14c0-4 3-7 7-7s7 3 7 7" stroke="#0c0c0c" strokeWidth="1.5" strokeLinecap="round" />
        <rect x="3" y="14" width="4" height="6" rx="2" stroke="#0c0c0c" strokeWidth="1.5" />
        <rect x="19" y="14" width="4" height="6" rx="2" stroke="#0c0c0c" strokeWidth="1.5" />
        <path d="M23 20v1a3 3 0 01-3 3h-4" stroke="#0c0c0c" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    label: 'Ongoing Support',
    desc: 'We stay with you to support and grow your brand.',
  },
];

export default function LandingServices() {
  return (
    <>
      <style>{`
        .services-section {
          padding: 0 clamp(28px, 5vw, 72px);
        }
        .services-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 12px;
        }
        .service-card {
          background: #fff;
          border-radius: 18px;
          padding: 24px 20px 20px;
          display: flex;
          flex-direction: column;
          gap: 0;
          min-height: 200px;
          position: relative;
        }
        .service-icon {
          margin-bottom: 16px;
        }
        .service-title {
          font-size: 15px;
          font-weight: 700;
          color: #0c0c0c;
          letter-spacing: -0.01em;
          margin: 0 0 8px;
        }
        .service-desc {
          font-size: 13px;
          line-height: 1.55;
          color: #6b6b6b;
          margin: 0;
          flex: 1;
        }
        .service-arrow {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #0c0c0c;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 20px;
          align-self: flex-end;
          flex-shrink: 0;
        }

        @media (max-width: 900px) {
          .services-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        @media (max-width: 768px) {
          .services-section {
            padding: 0 12px;
          }
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
          }
          .service-card {
            min-height: auto;
            padding: 20px 16px 16px;
          }
        }
      `}</style>

      <section id="services" className="services-section" style={{ margin: '48px 0 0' }}>
        <StaggerReveal className="services-grid" stagger={70} variant="scale-in">
          {services.map((s) => (
            <div key={s.label} className="service-card">
              <div className="service-icon">{s.icon}</div>
              <h3 className="service-title">{s.label}</h3>
              <p className="service-desc">{s.desc}</p>
            </div>
          ))}
        </StaggerReveal>
      </section>
    </>
  );
}
