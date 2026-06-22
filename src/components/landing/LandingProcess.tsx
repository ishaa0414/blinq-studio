import StaggerReveal from '@/components/landing/StaggerReveal';

const steps = [
  {
    num: '01',
    title: 'Discover',
    desc: "We start with a deep dive into your brand, audience, and goals — understanding what makes you different and where you want to go.",
  },
  {
    num: '02',
    title: 'Strategize',
    desc: "We map out a tailored creative direction, content strategy, and technical roadmap before a single pixel is drawn.",
  },
  {
    num: '03',
    title: 'Design & Build',
    desc: "Our team executes across branding, design, copy, and development with precision — iterating closely with you at every step.",
  },
  {
    num: '04',
    title: 'Launch & Grow',
    desc: "We ship your project, then stay on to optimize, support, and evolve it as your business scales.",
  },
];

export default function LandingProcess() {
  return (
    <>
      <style>{`
        .process-layout {
          display: grid;
          grid-template-columns: 1fr 1.6fr;
          gap: 48px;
          align-items: start;
        }
        .process-steps-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        @media (max-width: 768px) {
          .process-section {
            margin-top: 48px !important;
            padding: 0 16px !important;
          }
          .process-layout {
            grid-template-columns: 1fr;
            gap: 28px;
          }
          .process-steps-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }
        }
      `}</style>

      <section id="process" className="process-section" style={{ margin: '80px 0 0', padding: `0 clamp(28px, 5vw, 72px)` }}>
        <div className="process-layout">
          {/* Left — section head */}
          <div style={{ paddingTop: 8 }}>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#8b8b8b' }}>
              Our Process
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
              How we make
              <br />
              <em
                style={{
                  fontStyle: 'normal',
                  fontWeight: 900,
                  color: '#FF5B1E',
                }}
              >
                magic happen.
              </em>
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.6, color: '#3f3f3f', maxWidth: 280 }}>
              A proven four-step framework that takes you from fuzzy idea to polished, live product.
            </p>
          </div>

          {/* Right — steps */}
          <StaggerReveal className="process-steps-grid" stagger={100} variant="scale-in">
            {steps.map((step, i) => (
              <div
                key={step.num}
                style={{
                  background: '#fff',
                  borderRadius: 20,
                  padding: '28px 26px',
                  border: '1px solid #e7e6e3',
                  position: 'relative',
                }}
              >
                <span style={{ display: 'block', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#FF5B1E', marginBottom: 12 }}>
                  {step.num}
                </span>
                <h3 style={{ fontSize: 20, fontWeight: 700, color: '#0c0c0c', margin: '0 0 12px', letterSpacing: '-0.02em' }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: 14, lineHeight: 1.65, color: '#3f3f3f', margin: 0 }}>
                  {step.desc}
                </p>
                {i === 0 && (
                  <div style={{ position: 'absolute', top: 22, right: 22, width: 8, height: 8, borderRadius: '50%', background: '#FF5B1E' }} />
                )}
              </div>
            ))}
          </StaggerReveal>
        </div>
      </section>
    </>
  );
}
