'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import 'swiper/css';

const ARCHIVO       = 'var(--font-archivo), "Archivo", sans-serif';
const ARCHIVO_BLACK = 'var(--font-archivo-black), "Archivo Black", sans-serif';

// ── Layout constants (px) ──────────────────────────────────────────────────────
const CW = 260;                  // card width
const GW = 76;                   // gap / arrow width between cards
const ZZ = 124;                  // vertical zig-zag offset for odd cards
const CH = 318;                  // approximate card height (illustration + text)
const BH = CH + ZZ + 8;         // track height = 450
const CE = Math.round(CH / 2);  // 159 — even-card vertical centre in track
const CO = ZZ + CE;             // 283 — odd-card vertical centre in track

// ── Illustrations ──────────────────────────────────────────────────────────────

function IllustrationBriefing() {
  return (
    <svg viewBox="0 0 300 210" fill="none" style={{ width: '100%', height: 'auto', display: 'block' }}>
      <rect x="10" y="8" width="280" height="194" rx="14" fill="#fafaf8" stroke="#e5e5e5" strokeWidth="1.5"/>
      <rect x="10" y="8" width="280" height="30" rx="14" fill="#efefef"/>
      <rect x="10" y="26" width="280" height="12" fill="#efefef"/>
      <circle cx="32" cy="23" r="5" fill="#ff5f57"/>
      <circle cx="49" cy="23" r="5" fill="#febc2e"/>
      <circle cx="66" cy="23" r="5" fill="#28c840"/>
      <rect x="28" y="44" width="64" height="5" rx="2" fill="#d4d4d4"/>
      <rect x="28" y="52" width="244" height="12" rx="4" fill="#fff" stroke="#e8e8e8"/>
      <rect x="28" y="72" width="80" height="5" rx="2" fill="#d4d4d4"/>
      <rect x="28" y="80" width="244" height="12" rx="4" fill="#fff" stroke="#e8e8e8"/>
      <rect x="28" y="100" width="55" height="5" rx="2" fill="#d4d4d4"/>
      <rect x="28" y="108" width="244" height="12" rx="4" fill="#fff" stroke="#e8e8e8"/>
      <rect x="28" y="128" width="72" height="5" rx="2" fill="#d4d4d4"/>
      <rect x="28" y="136" width="244" height="34" rx="4" fill="#fff" stroke="#e8e8e8"/>
      <rect x="28" y="182" width="106" height="22" rx="7" fill="#FB4415"/>
      <rect x="142" y="182" width="76" height="22" rx="7" fill="#f0f0f0"/>
    </svg>
  );
}

function IllustrationStrategy() {
  return (
    <svg viewBox="0 0 300 210" fill="none" style={{ width: '100%', height: 'auto', display: 'block' }}>
      <rect x="10" y="8" width="280" height="194" rx="14" fill="#fafaf8" stroke="#e5e5e5" strokeWidth="1.5"/>
      <rect x="10" y="8" width="280" height="30" rx="14" fill="#efefef"/>
      <rect x="10" y="26" width="280" height="12" fill="#efefef"/>
      <circle cx="32" cy="23" r="5" fill="#ff5f57"/>
      <circle cx="49" cy="23" r="5" fill="#febc2e"/>
      <circle cx="66" cy="23" r="5" fill="#28c840"/>
      <rect x="18" y="46" width="80" height="148" rx="7" fill="#fff" stroke="#eee"/>
      <rect x="28" y="58" width="56" height="5" rx="2" fill="#ddd"/>
      <rect x="28" y="70" width="62" height="5" rx="2" fill="#FB4415" opacity="0.6"/>
      <rect x="28" y="82" width="50" height="5" rx="2" fill="#ddd"/>
      <rect x="28" y="94" width="58" height="5" rx="2" fill="#ddd"/>
      <rect x="28" y="106" width="44" height="5" rx="2" fill="#ddd"/>
      <rect x="28" y="118" width="54" height="5" rx="2" fill="#ddd"/>
      <rect x="106" y="46" width="166" height="68" rx="7" fill="#FB4415" opacity="0.09"/>
      <rect x="116" y="56" width="84" height="8" rx="3" fill="#ccc"/>
      <rect x="116" y="70" width="140" height="5" rx="2" fill="#e0e0e0"/>
      <rect x="116" y="80" width="120" height="5" rx="2" fill="#e0e0e0"/>
      <rect x="116" y="90" width="130" height="5" rx="2" fill="#e0e0e0"/>
      <rect x="106" y="122" width="50" height="64" rx="7" fill="#fff" stroke="#eee"/>
      <rect x="163" y="122" width="50" height="64" rx="7" fill="#fff" stroke="#eee"/>
      <rect x="220" y="122" width="52" height="64" rx="7" fill="#fff" stroke="#eee"/>
      <rect x="113" y="130" width="36" height="28" rx="4" fill="#f0f0f0"/>
      <rect x="170" y="130" width="36" height="28" rx="4" fill="#FB4415" opacity="0.2"/>
      <rect x="227" y="130" width="36" height="28" rx="4" fill="#f0f0f0"/>
      <rect x="113" y="162" width="28" height="5" rx="2" fill="#ddd"/>
      <rect x="170" y="162" width="28" height="5" rx="2" fill="#ddd"/>
      <rect x="227" y="162" width="28" height="5" rx="2" fill="#ddd"/>
    </svg>
  );
}

function IllustrationBuild() {
  return (
    <svg viewBox="0 0 300 210" fill="none" style={{ width: '100%', height: 'auto', display: 'block' }}>
      <rect x="10" y="8" width="280" height="194" rx="14" fill="#111" stroke="#2a2a2a"/>
      <rect x="10" y="8" width="280" height="30" rx="14" fill="#1e1e1e"/>
      <rect x="10" y="26" width="280" height="12" fill="#1e1e1e"/>
      <circle cx="32" cy="23" r="5" fill="#ff5f57"/>
      <circle cx="49" cy="23" r="5" fill="#febc2e"/>
      <circle cx="66" cy="23" r="5" fill="#28c840"/>
      <rect x="28" y="48" width="30" height="6" rx="2" fill="#FB4415"/>
      <rect x="64" y="48" width="52" height="6" rx="2" fill="#6366F1"/>
      <rect x="122" y="48" width="34" height="6" rx="2" fill="#444"/>
      <rect x="40" y="62" width="46" height="6" rx="2" fill="#6366F1"/>
      <rect x="92" y="62" width="28" height="6" rx="2" fill="#10B981"/>
      <rect x="126" y="62" width="24" height="6" rx="2" fill="#FB4415"/>
      <rect x="40" y="76" width="62" height="6" rx="2" fill="#FB4415"/>
      <rect x="108" y="76" width="38" height="6" rx="2" fill="#10B981"/>
      <rect x="28" y="90" width="22" height="6" rx="2" fill="#6366F1"/>
      <rect x="56" y="90" width="34" height="6" rx="2" fill="#444"/>
      <rect x="40" y="104" width="76" height="6" rx="2" fill="#444"/>
      <rect x="40" y="118" width="50" height="6" rx="2" fill="#6366F1"/>
      <rect x="96" y="118" width="22" height="6" rx="2" fill="#FB4415"/>
      <rect x="28" y="132" width="14" height="6" rx="2" fill="#6366F1"/>
      <rect x="40" y="146" width="82" height="6" rx="2" fill="#444"/>
      <rect x="128" y="146" width="32" height="6" rx="2" fill="#10B981"/>
      <rect x="40" y="160" width="58" height="6" rx="2" fill="#444"/>
      <rect x="28" y="174" width="4" height="12" rx="1" fill="#FB4415"/>
      <rect x="10" y="184" width="280" height="18" fill="#1a1a1a"/>
      <circle cx="32" cy="193" r="4" fill="#10B981"/>
      <rect x="44" y="190" width="60" height="5" rx="2" fill="#333"/>
    </svg>
  );
}

function IllustrationLaunch() {
  return (
    <svg viewBox="0 0 300 210" fill="none" style={{ width: '100%', height: 'auto', display: 'block' }}>
      <rect x="10" y="8" width="280" height="194" rx="14" fill="#fafaf8" stroke="#e5e5e5" strokeWidth="1.5"/>
      <rect x="10" y="8" width="280" height="30" rx="14" fill="#efefef"/>
      <rect x="10" y="26" width="280" height="12" fill="#efefef"/>
      <circle cx="32" cy="23" r="5" fill="#ff5f57"/>
      <circle cx="49" cy="23" r="5" fill="#febc2e"/>
      <circle cx="66" cy="23" r="5" fill="#28c840"/>
      <rect x="18" y="46" width="80" height="44" rx="7" fill="#fff" stroke="#eee"/>
      <rect x="108" y="46" width="80" height="44" rx="7" fill="#fff" stroke="#eee"/>
      <rect x="198" y="46" width="84" height="44" rx="7" fill="#fff" stroke="#eee"/>
      <rect x="26" y="56" width="36" height="10" rx="3" fill="#FB4415"/>
      <rect x="26" y="70" width="56" height="5" rx="2" fill="#ddd"/>
      <rect x="116" y="56" width="32" height="10" rx="3" fill="#10B981"/>
      <rect x="116" y="70" width="50" height="5" rx="2" fill="#ddd"/>
      <rect x="206" y="56" width="42" height="10" rx="3" fill="#6366F1"/>
      <rect x="206" y="70" width="46" height="5" rx="2" fill="#ddd"/>
      <rect x="18" y="100" width="264" height="88" rx="9" fill="#fff" stroke="#eee"/>
      <line x1="32" y1="178" x2="270" y2="178" stroke="#eee" strokeWidth="1"/>
      <line x1="32" y1="152" x2="270" y2="152" stroke="#eee" strokeWidth="0.7" strokeDasharray="5 4"/>
      <line x1="32" y1="128" x2="270" y2="128" stroke="#eee" strokeWidth="0.7" strokeDasharray="5 4"/>
      <polyline
        points="32,176 60,168 90,158 120,148 150,136 180,128 210,118 240,110 268,104"
        stroke="#FB4415" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"
      />
      <polygon
        points="32,176 60,168 90,158 120,148 150,136 180,128 210,118 240,110 268,104 268,178 32,178"
        fill="#FB4415" opacity="0.08"
      />
      <circle cx="120" cy="148" r="4" fill="#fff" stroke="#FB4415" strokeWidth="2"/>
      <circle cx="210" cy="118" r="4" fill="#fff" stroke="#FB4415" strokeWidth="2"/>
      <circle cx="268" cy="104" r="5.5" fill="#FB4415"/>
    </svg>
  );
}

// ── S-curve dashed arrows (sized to the full track height) ────────────────────

function ArrowDown() {
  const hw = GW / 2;
  return (
    <svg width={GW} height={BH} fill="none" style={{ display: 'block', flexShrink: 0 }}>
      <path
        d={`M 3 ${CE} C ${hw} ${CE} ${hw} ${CO} ${GW - 3} ${CO}`}
        stroke="#D0D0D0" strokeWidth="2.5" strokeDasharray="8 6" strokeLinecap="round"
      />
      <path
        d={`M ${GW - 14} ${CO - 7} L ${GW - 2} ${CO} L ${GW - 14} ${CO + 7}`}
        stroke="#D0D0D0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"
      />
    </svg>
  );
}

function ArrowUp() {
  const hw = GW / 2;
  return (
    <svg width={GW} height={BH} fill="none" style={{ display: 'block', flexShrink: 0 }}>
      <path
        d={`M 3 ${CO} C ${hw} ${CO} ${hw} ${CE} ${GW - 3} ${CE}`}
        stroke="#D0D0D0" strokeWidth="2.5" strokeDasharray="8 6" strokeLinecap="round"
      />
      <path
        d={`M ${GW - 14} ${CE - 7} L ${GW - 2} ${CE} L ${GW - 14} ${CE + 7}`}
        stroke="#D0D0D0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"
      />
    </svg>
  );
}

// ── Steps data ─────────────────────────────────────────────────────────────────

const STEPS = [
  {
    num: '01', title: 'Briefing',
    desc: 'We learn your brand, goals, and what makes you stand out.',
    Illustration: IllustrationBriefing,
  },
  {
    num: '02', title: 'Strategy',
    desc: 'A creative blueprint — every decision backed by positioning.',
    Illustration: IllustrationStrategy,
  },
  {
    num: '03', title: 'Build',
    desc: 'Fast sprints, clean code, bold design built to convert.',
    Illustration: IllustrationBuild,
  },
  {
    num: '04', title: 'Launch',
    desc: 'Go live, iterate fast, and grow a brand that lasts.',
    Illustration: IllustrationLaunch,
  },
] as const;

// ── Component ──────────────────────────────────────────────────────────────────

export default function HowItWorks() {
  return (
    <section style={{ background: '#fff', padding: 'clamp(64px, 8vw, 100px) 0', overflow: 'hidden' }}>


      {/* Heading */}
      <div style={{
        textAlign: 'center',
        marginBottom: 'clamp(40px, 5vw, 64px)',
        padding: '0 clamp(20px, 5vw, 64px)',
      }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 8, marginBottom: 18 }}>
          <div style={{ width: 36, height: 3, background: '#FB4415', borderRadius: 99 }} />
          <div style={{ width: 8, height: 8, background: '#FB4415', borderRadius: '50%' }} />
          <div style={{ width: 36, height: 3, background: '#FB4415', borderRadius: 99 }} />
        </div>
        <h2 style={{
          margin: '0 0 14px',
          fontFamily: ARCHIVO_BLACK, fontWeight: 900,
          fontSize: 'clamp(32px, 5vw, 64px)',
          color: '#0a0a0a', lineHeight: 1.1, letterSpacing: '-0.03em',
        }}>
          How it works
        </h2>
        <p style={{
          margin: '0 auto',
          fontFamily: ARCHIVO, fontSize: 'clamp(14px, 1.2vw, 17px)',
          color: '#888', lineHeight: 1.6, maxWidth: 440,
        }}>
          From brief to launch in four clear steps — structured, transparent, and built to convert.
        </p>
      </div>

      {/* ── Swiper zig-zag track ── */}
      <Swiper
        modules={[FreeMode]}
        freeMode
        grabCursor
        slidesPerView="auto"
        spaceBetween={0}
        style={{ paddingLeft: 'clamp(24px, 6vw, 64px)', paddingBottom: ZZ + 16 }}
      >
        {STEPS.map((step, i) => {
          const isDown = i % 2 !== 0;
          const { Illustration } = step;
          return (
            <SwiperSlide
              key={step.num}
              style={{
                width: 'auto',
                display: 'flex',
                alignItems: 'flex-start',
                flexShrink: 0,
              }}
            >
              {/* Card + arrow wrapper */}
              <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                <div style={{ width: CW, marginTop: isDown ? ZZ : 0 }}>
                  {/* Illustration */}
                  <div style={{
                    borderRadius: 18, overflow: 'hidden',
                    border: '1.5px solid #E8E8E8', background: '#fafaf8',
                    marginBottom: 16, boxShadow: '0 6px 24px rgba(0,0,0,0.07)',
                  }}>
                    <Illustration />
                  </div>

                  {/* Badge */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 9 }}>
                    <span style={{
                      width: 28, height: 28, borderRadius: '50%',
                      background: '#FB4415', flexShrink: 0,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 11, fontWeight: 900, color: '#fff', fontFamily: ARCHIVO_BLACK,
                    }}>
                      {step.num}
                    </span>
                    <span style={{
                      fontFamily: ARCHIVO, fontWeight: 700, fontSize: 11,
                      color: '#FB4415', letterSpacing: '0.12em', textTransform: 'uppercase',
                    }}>
                      Step {step.num}
                    </span>
                  </div>

                  <h3 style={{
                    margin: '0 0 7px', fontFamily: ARCHIVO_BLACK, fontWeight: 900,
                    fontSize: 20, color: '#0a0a0a', letterSpacing: '-0.02em', lineHeight: 1.2,
                  }}>
                    {step.title}
                  </h3>
                  <p style={{
                    margin: 0, fontFamily: ARCHIVO, fontWeight: 400,
                    fontSize: 13, color: '#777', lineHeight: 1.65,
                  }}>
                    {step.desc}
                  </p>
                </div>

                {/* Arrow */}
                {i < STEPS.length - 1 && (isDown ? <ArrowUp /> : <ArrowDown />)}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* Swipe hint */}
      <div style={{
        textAlign: 'center', marginTop: 20,
        padding: '0 clamp(20px, 5vw, 64px)',
      }}>
        <span style={{
          fontFamily: ARCHIVO, fontSize: 12,
          color: '#C8C8C8', letterSpacing: '0.06em',
        }}>
          ← swipe to explore →
        </span>
      </div>

    </section>
  );
}
