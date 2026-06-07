'use client';
import { useState } from 'react';

const FAQS = [
  {
    q: 'What services does Blinq Studio offer?',
    a: 'We offer an end-to-end creative system: brand identity & strategy, web design & development, and cinematic video production — all under one roof.',
  },
  {
    q: 'How long does a typical project take?',
    a: 'Brand identity: 2–4 weeks. Full website: 4–8 weeks. Video production: 1–3 weeks. We always align on timelines before kicking off.',
  },
  {
    q: 'What is your pricing model?',
    a: 'Project-based pricing tailored to your scope and goals. After a short discovery call we provide a clear, itemised proposal — no hidden costs, ever.',
  },
  {
    q: 'Do you work with startups or only established brands?',
    a: 'Both. We love ambitious startups building from scratch and established brands ready for a bold refresh. If you have a vision, we want to hear it.',
  },
  {
    q: 'Can I see examples of your previous work?',
    a: "Absolutely. Our portfolio covers a range of industries. Reach out and we'll share the most relevant case studies for your category.",
  },
  {
    q: 'What does the onboarding process look like?',
    a: 'Discovery call → strategy brief → proposal → creative sprint. Structured, transparent, and collaborative at every step.',
  },
  {
    q: 'Do you offer support after project delivery?',
    a: 'Yes. All projects include a post-delivery support window. We also offer retainer packages for brands that want an ongoing creative partner.',
  },
];

const ARCHIVO = 'var(--font-archivo), "Archivo", sans-serif';
const ARCHIVO_BLACK = 'var(--font-archivo-black), "Archivo Black", sans-serif';

// Subtle repeating geometric SVG pattern — very light orange diamonds
const BG_PATTERN = `url("data:image/svg+xml,%3Csvg width='48' height='48' viewBox='0 0 48 48' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FB4415' fill-opacity='0.07'%3E%3Crect x='20' y='4' width='8' height='8' rx='1' transform='rotate(45 24 8)'/%3E%3Crect x='4' y='20' width='8' height='8' rx='1' transform='rotate(45 8 24)'/%3E%3Crect x='36' y='20' width='8' height='8' rx='1' transform='rotate(45 40 24)'/%3E%3Crect x='20' y='36' width='8' height='8' rx='1' transform='rotate(45 24 40)'/%3E%3C/g%3E%3C/svg%3E")`;

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section style={{
      background: '#FFF6F2',
      backgroundImage: BG_PATTERN,
      backgroundSize: '48px 48px',
      padding: 'clamp(60px, 8vw, 100px) clamp(16px, 5vw, 64px)',
    }}>

      {/* Heading */}
      <div style={{ textAlign: 'center', marginBottom: 'clamp(32px, 4vw, 52px)' }}>
        <p style={{
          margin: '0 0 10px',
          fontFamily: ARCHIVO, fontWeight: 600,
          fontSize: 'clamp(12px, 1.1vw, 14px)',
          color: '#FB4415', letterSpacing: '0.1em', textTransform: 'uppercase',
        }}>
          Got questions?
        </p>
        <h2 style={{
          margin: 0,
          fontFamily: ARCHIVO_BLACK,
          fontWeight: 900, fontSize: 'clamp(28px, 4.5vw, 58px)',
          color: '#0a0a0a', lineHeight: 1.1, letterSpacing: '-0.02em',
        }}>
          Frequently Asked Questions
        </h2>
      </div>

      {/* Accordion card */}
      <div style={{
        maxWidth: 780, margin: '0 auto',
        background: '#fff',
        borderRadius: 24,
        overflow: 'hidden',
        boxShadow: '0 4px 40px rgba(0,0,0,0.07)',
      }}>
        {FAQS.map((faq, i) => (
          <div key={i}>
            {/* Question row */}
            <button
              onClick={() => setOpen(open === i ? null : i)}
              style={{
                width: '100%', display: 'flex', alignItems: 'center',
                justifyContent: 'space-between', gap: 16,
                padding: 'clamp(18px, 2.2vw, 26px) clamp(20px, 3vw, 36px)',
                background: 'none', border: 'none', cursor: 'pointer',
                textAlign: 'left',
              }}
            >
              <span style={{
                fontFamily: ARCHIVO, fontWeight: 600,
                fontSize: 'clamp(14px, 1.2vw, 17px)',
                color: open === i ? '#FB4415' : '#111',
                lineHeight: 1.4, transition: 'color 0.2s',
              }}>
                {faq.q}
              </span>

              {/* Chevron */}
              <span style={{
                flexShrink: 0, width: 28, height: 28, borderRadius: '50%',
                border: `1.5px solid ${open === i ? '#FB4415' : '#ddd'}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'border-color 0.2s, transform 0.25s',
                transform: open === i ? 'rotate(180deg)' : 'rotate(0deg)',
              }}>
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                  <path d="M1 1L5 5L9 1" stroke={open === i ? '#FB4415' : '#999'}
                    strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </button>

            {/* Answer */}
            {open === i && (
              <div style={{
                padding: '0 clamp(20px, 3vw, 36px) clamp(18px, 2vw, 26px)',
              }}>
                <p style={{
                  margin: 0, fontFamily: ARCHIVO, fontWeight: 400,
                  fontSize: 'clamp(13px, 1.1vw, 15px)',
                  color: '#555', lineHeight: 1.75,
                }}>
                  {faq.a}
                </p>
              </div>
            )}

            {/* Divider */}
            {i < FAQS.length - 1 && (
              <div style={{ height: 1, background: '#f2f2f2', margin: '0 clamp(20px, 3vw, 36px)' }} />
            )}
          </div>
        ))}
      </div>

    </section>
  );
}
