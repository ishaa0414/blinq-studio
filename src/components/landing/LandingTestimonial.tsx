'use client';
import { useState } from 'react';

const testimonials = [
  {
    quote: "Blinq Labs completely transformed how we show up online. The new brand identity and website drove a 40% increase in inbound leads within the first month of launch.",
    name: 'Sarah Okonkwo',
    role: 'CEO, Monarch Collective',
    avatar: 'linear-gradient(135deg, #FF8A5B, #FF5B1E)',
  },
  {
    quote: "Working with Blinq Labs felt like having a full in-house creative team. They understood our vision instantly and delivered beyond expectations — on time and on budget.",
    name: 'James Hartley',
    role: 'Founder, Pulse Studio',
    avatar: 'linear-gradient(135deg, #5B8AFF, #3B5BFF)',
  },
  {
    quote: "The speed of concept delivery was shocking in the best way. Seven days after our kick-off call we had a complete brand system ready to ship. Unreal.",
    name: 'Mia Tanaka',
    role: 'Head of Marketing, Velour Digital',
    avatar: 'linear-gradient(135deg, #8AFF5B, #3BBF1E)',
  },
];

export default function LandingTestimonial() {
  const [idx, setIdx] = useState(0);
  const t = testimonials[idx];

  return (
    <>
      <style>{`
        .testimonial-card {
          background: #fff;
          border-radius: 22px;
          padding: 56px 60px;
          border: 1px solid #e7e6e3;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 40px;
          align-items: end;
        }
        @media (max-width: 768px) {
          .testimonial-section {
            margin-top: 40px !important;
            padding: 0 16px !important;
          }
          .testimonial-card {
            grid-template-columns: 1fr;
            padding: 32px 24px;
            gap: 28px;
            border-radius: 18px;
          }
          .testimonial-nav {
            flex-direction: row !important;
            justify-content: space-between;
            align-items: center;
          }
        }
      `}</style>

      <section className="testimonial-section" style={{ margin: '64px 0 0', padding: `0 clamp(28px, 5vw, 72px)` }}>
        <div className="testimonial-card">
          <div>
            <svg width="34" height="24" viewBox="0 0 34 24" fill="none" style={{ marginBottom: 24 }}>
              <path d="M0 24V14.4C0 6.4 4.8 1.6 14.4 0L16 3.2C11.2 4.8 8.8 7.2 8 10.4H14.4V24H0ZM19.6 24V14.4C19.6 6.4 24.4 1.6 34 0L35.6 3.2C30.8 4.8 28.4 7.2 27.6 10.4H34V24H19.6Z" fill="#FF5B1E" opacity="0.2" />
            </svg>

            <blockquote
              style={{
                fontSize: 'clamp(16px, 2vw, 24px)',
                fontWeight: 500,
                lineHeight: 1.5,
                color: '#0c0c0c',
                margin: '0 0 32px',
                letterSpacing: '-0.02em',
                fontFamily: 'var(--font-plus-jakarta), "Plus Jakarta Sans", sans-serif',
                fontStyle: 'normal',
              }}
            >
              &ldquo;{t.quote}&rdquo;
            </blockquote>

            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <div style={{ width: 44, height: 44, borderRadius: '50%', background: t.avatar, flexShrink: 0 }} />
              <div>
                <p style={{ fontSize: 15, fontWeight: 700, color: '#0c0c0c', margin: 0, letterSpacing: '-0.01em' }}>{t.name}</p>
                <p style={{ fontSize: 13, color: '#8b8b8b', margin: '2px 0 0' }}>{t.role}</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="testimonial-nav" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 16 }}>
            <div style={{ display: 'flex', gap: 6, marginBottom: 8 }}>
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  style={{
                    width: i === idx ? 24 : 6,
                    height: 6,
                    borderRadius: 3,
                    background: i === idx ? '#FF5B1E' : '#e7e6e3',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0,
                    transition: 'width 0.2s',
                  }}
                />
              ))}
            </div>

            <div style={{ display: 'flex', gap: 10 }}>
              <button
                onClick={() => setIdx((idx - 1 + testimonials.length) % testimonials.length)}
                style={{ width: 44, height: 44, borderRadius: '50%', border: '1.5px solid #e7e6e3', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M10 3L5 8L10 13" stroke="#0c0c0c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                onClick={() => setIdx((idx + 1) % testimonials.length)}
                style={{ width: 44, height: 44, borderRadius: '50%', border: '1.5px solid #e7e6e3', background: '#0c0c0c', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6 3L11 8L6 13" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
