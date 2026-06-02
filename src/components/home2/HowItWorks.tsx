'use client';
import { motion } from 'framer-motion';

// ── SVG helpers ───────────────────────────────────────────────────────────────

function hexPath(r: number, cx = 100, cy = 100) {
  const pts = Array.from({ length: 6 }, (_, i) => {
    const a = (i * 60 - 90) * (Math.PI / 180);
    return [cx + r * Math.cos(a), cy + r * Math.sin(a)] as [number, number];
  });
  return (
    `M ${pts[0][0].toFixed(1)} ${pts[0][1].toFixed(1)} ` +
    pts.slice(1).map(p => `L ${p[0].toFixed(1)} ${p[1].toFixed(1)}`).join(' ') +
    ' Z'
  );
}

// ── Step 01 — Radar SVG ───────────────────────────────────────────────────────

function RadarSVG() {
  const spokes = Array.from({ length: 6 }, (_, i) => {
    const a = (i * 60 - 90) * (Math.PI / 180);
    return { x2: (100 + 80 * Math.cos(a)).toFixed(1), y2: (100 + 80 * Math.sin(a)).toFixed(1) };
  });
  const dots = [
    ...Array.from({ length: 6 }, (_, i) => {
      const a = (i * 60 - 90) * (Math.PI / 180);
      return { cx: (100 + 55 * Math.cos(a)).toFixed(1), cy: (100 + 55 * Math.sin(a)).toFixed(1) };
    }),
    ...[0, 2].map(i => {
      const a = (i * 60 - 90) * (Math.PI / 180);
      return { cx: (100 + 30 * Math.cos(a)).toFixed(1), cy: (100 + 30 * Math.sin(a)).toFixed(1) };
    }),
  ];

  return (
    <svg viewBox="0 0 200 200" className="w-[120px] h-[120px] md:w-[150px] md:h-[150px] lg:w-[180px] lg:h-[180px]">
      {[{ r: 30, op: 0.8, delay: 0 }, { r: 55, op: 0.4, delay: 0.2 }, { r: 80, op: 0.2, delay: 0.4 }].map(h => (
        <motion.path key={h.r} d={hexPath(h.r)} fill="none" stroke="#111111"
          strokeWidth={0.8} opacity={h.op}
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: h.delay, ease: 'easeInOut' as const }} />
      ))}
      {spokes.map((s, i) => (
        <motion.line key={i} x1="100" y1="100" x2={s.x2} y2={s.y2}
          stroke="#111111" strokeWidth={0.6} opacity={0.3}
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.65 + i * 0.05, ease: 'easeOut' as const }} />
      ))}
      {dots.map((d, i) => (
        <motion.circle key={i} cx={d.cx} cy={d.cy} r={3} fill="#111111"
          initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 1.05 + i * 0.07 }} />
      ))}
      <motion.circle cx="100" cy="100" r={4} fill="#E05A00"
        initial={{ scale: 0 }} whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 0.1 }} />
    </svg>
  );
}

// ── Step 02 — Starburst SVG ───────────────────────────────────────────────────

function StarburstSVG() {
  const rays = Array.from({ length: 24 }, (_, i) => {
    const a = (i * 15 - 90) * (Math.PI / 180);
    const len = i % 2 === 0 ? 80 : 45;
    return { x2: (100 + len * Math.cos(a)).toFixed(1), y2: (100 + len * Math.sin(a)).toFixed(1) };
  });

  return (
    <svg viewBox="0 0 200 200" className="w-[120px] h-[120px] md:w-[150px] md:h-[150px] lg:w-[180px] lg:h-[180px]">
      <motion.circle cx="100" cy="100" r={85} fill="none" stroke="#111111"
        strokeWidth={0.5} opacity={0.2}
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: 'easeInOut' as const }} />
      {rays.map((r, i) => (
        <motion.line key={i} x1="100" y1="100" x2={r.x2} y2={r.y2}
          stroke="#111111" strokeWidth={0.7} opacity={0.5}
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.04 * i, ease: 'easeOut' as const }} />
      ))}
      <motion.circle cx="100" cy="100" r={8} fill="#111111"
        initial={{ scale: 0 }} whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }} />
    </svg>
  );
}

// ── Step 03 — Orbit SVG ───────────────────────────────────────────────────────

function OrbitSVG() {
  const rings = [
    { r: 20, op: 1,   delay: 0   },
    { r: 40, op: 0.7, delay: 0.3 },
    { r: 65, op: 0.4, delay: 0.6 },
    { r: 85, op: 0.2, delay: 0.9 },
  ];
  const arrows = [
    ...([60, 180, 300].map(deg => ({ r: 65, deg }))),
    ...([20, 140, 260].map(deg => ({ r: 85, deg }))),
  ];

  return (
    <svg viewBox="0 0 200 200" className="w-[120px] h-[120px] md:w-[150px] md:h-[150px] lg:w-[180px] lg:h-[180px]">
      {rings.map(c => (
        <motion.circle key={c.r} cx="100" cy="100" r={c.r}
          fill="none" stroke="#111111" strokeWidth={0.8} opacity={c.op}
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: c.delay, ease: 'easeInOut' as const }} />
      ))}
      <motion.circle cx="100" cy="100" r={6} fill="#111111"
        initial={{ scale: 0 }} whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }} />
      {arrows.map(({ r, deg }, i) => {
        const a = deg * (Math.PI / 180);
        const cx = (100 + r * Math.cos(a)).toFixed(1);
        const cy = (100 + r * Math.sin(a)).toFixed(1);
        return (
          <motion.g key={i}
            transform={`translate(${cx},${cy}) rotate(${deg + 90})`}
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 1.3 + i * 0.08 }}>
            <polygon points="0,-5 3,3 -3,3" fill="#111111" />
          </motion.g>
        );
      })}
    </svg>
  );
}

// ── Step data ─────────────────────────────────────────────────────────────────

const STEPS = [
  {
    num: '01', name: 'DISCOVER', sub: 'Strategy // Foundation',
    SVG: RadarSVG,
    desc: 'We start by understanding your business, your audience, and what actually makes you different. This is where we figure out the story you\'re telling, who needs to hear it, and how to position you to win.',
  },
  {
    num: '02', name: 'CREATE', sub: 'Design // Experience',
    SVG: StarburstSVG,
    desc: 'Your brand gets translated into a visual system that feels intentional. Every click, scroll, and CTA has a purpose. We build the experience that takes visitors from "this looks interesting" to "I need to work with them."',
  },
  {
    num: '03', name: 'DELIVER', sub: 'Build // Convert',
    SVG: OrbitSVG,
    desc: 'We build it fast, clean, and ready to convert. Then we connect your tools, set up your systems, and hand you something that works for you — educating leads, filtering out the wrong ones, and delivering clients ready to buy.',
  },
] as const;

// ── Main component ────────────────────────────────────────────────────────────

export default function HowItWorks() {
  return (
    <section style={{ background: '#f5f5f0' }} className="px-6 py-12 lg:px-16 lg:py-20">

      {/* Section label */}
      <div className="mb-8 lg:mb-0">
        <span style={{
          background: '#E05A00', color: '#ffffff',
          fontSize: 11, fontWeight: 600, letterSpacing: '0.1em',
          padding: '5px 12px', borderRadius: 4, display: 'inline-block',
          fontFamily: 'var(--font-archivo), "Archivo", sans-serif',
        }}>
          PROCESS
        </span>
      </div>

      {/* Main layout */}
      <div className="flex flex-col lg:flex-row lg:gap-12 mt-8">

        {/* ── Left sticky heading ── */}
        <motion.div
          className="w-full lg:w-[25%] lg:sticky lg:top-20 lg:self-start mb-10 lg:mb-0"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800,
            color: '#111111', lineHeight: 1.1, letterSpacing: '-1px',
            fontFamily: 'var(--font-archivo-black), "Archivo Black", sans-serif',
          }}>
            HOW IT<br />WORKS
          </h2>
          <p style={{
            fontSize: 14, color: '#666666', lineHeight: 1.6,
            maxWidth: 200, marginTop: 12,
            fontFamily: 'var(--font-archivo), "Archivo", sans-serif',
          }}>
            Here's how we take you from brief to a brand that converts:
          </p>
          <a href="#" style={{
            fontSize: 13, color: '#E05A00', fontWeight: 500,
            textDecoration: 'none', marginTop: 20, display: 'block',
            fontFamily: 'var(--font-archivo), "Archivo", sans-serif',
          }}>
            See our work ↗
          </a>
        </motion.div>

        {/* ── Three steps ── */}
        <div className="w-full lg:w-[75%] flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-black/10">
            {STEPS.map((step, i) => {
              const { SVG } = step;
              return (
                <motion.div
                  key={step.num}
                  className="flex flex-col items-center text-center py-8 md:py-0 px-6 lg:px-8 first:pt-0 md:first:pt-0"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15, ease: [0.25, 0, 0, 1] }}
                >
                  {/* Step number */}
                  <p style={{
                    fontSize: 13, color: '#999999', fontWeight: 400,
                    letterSpacing: '0.05em', marginBottom: 8,
                    fontFamily: 'var(--font-archivo), "Archivo", sans-serif',
                  }}>
                    {step.num}
                  </p>

                  {/* Step name */}
                  <h3 style={{
                    fontSize: 'clamp(28px, 4vw, 52px)', fontWeight: 800,
                    color: '#E05A00', letterSpacing: '-1px', lineHeight: 1,
                    fontFamily: 'var(--font-archivo-black), "Archivo Black", sans-serif',
                  }}>
                    {step.name}
                  </h3>

                  {/* Subtitle */}
                  <p style={{
                    fontSize: 13, color: '#888888', marginTop: 4,
                    fontFamily: 'var(--font-archivo), "Archivo", sans-serif',
                  }}>
                    {step.sub}
                  </p>

                  {/* SVG illustration */}
                  <div className="my-8 flex items-center justify-center">
                    <SVG />
                  </div>

                  {/* Description */}
                  <p style={{
                    fontSize: 14, color: '#444444', lineHeight: 1.75,
                    textAlign: 'center', padding: '0 8px',
                    fontFamily: 'var(--font-archivo), "Archivo", sans-serif',
                  }}>
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom row */}
          <div style={{ borderTop: '0.5px solid rgba(0,0,0,0.1)' }} className="mt-10 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p style={{
              fontSize: 14, color: '#666666',
              fontFamily: 'var(--font-archivo), "Archivo", sans-serif',
            }}>
              Every project starts with a free discovery call.
            </p>
            <button
              style={{
                background: '#111111', color: '#ffffff',
                borderRadius: 999, padding: '11px 24px',
                fontSize: 13, fontWeight: 500, border: 'none',
                cursor: 'pointer', transition: 'background 0.2s ease',
                fontFamily: 'var(--font-archivo), "Archivo", sans-serif',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = '#E05A00'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = '#111111'; }}
            >
              Book your call →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
