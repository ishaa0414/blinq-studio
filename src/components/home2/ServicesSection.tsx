'use client';
import { useRef } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
} from 'framer-motion';

// Figma: 1440px canvas → scaled to maxWidth 1200px content area

const PROJECTS = [
  {
    num: '01',
    title: 'The Art Beyond Chaos',
    category: 'Branding & Print',
    bg: '#0D0D0D',
    image: 'https://picsum.photos/seed/proj-chaos/1400/875',
  },
  {
    num: '02',
    title: 'Proudly',
    category: 'Web Design & Identity',
    bg: '#1C0B3E',
    image: 'https://picsum.photos/seed/proj-proudly/1400/875',
  },
  {
    num: '03',
    title: 'Solstice Studio',
    category: 'Creative Direction',
    bg: '#0A1A0F',
    image: 'https://picsum.photos/seed/proj-sol/1400/875',
  },
] as const;

function ProjectCard({ data }: { data: (typeof PROJECTS)[number] }) {
  return (
    <div
      style={{
        background: data.bg,
        borderRadius: 16,
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Top bezel — camera dot */}
      <div
        style={{
          height: 30,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: data.bg,
        }}
      >
        <div
          style={{
            width: 7,
            height: 7,
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.13)',
            border: '1px solid rgba(255,255,255,0.07)',
          }}
        />
      </div>

      {/* Screen — 16:10 project image */}
      <div style={{ margin: '0 3px', overflow: 'hidden' }}>
        <img
          src={data.image}
          alt={data.title}
          style={{
            width: '100%',
            display: 'block',
            aspectRatio: '16/10',
            objectFit: 'cover',
          }}
        />
      </div>

      {/* Bottom info bar */}
      <div
        style={{
          height: 48,
          padding: '0 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: data.bg,
        }}
      >
        <span
          style={{
            fontSize: 14,
            fontWeight: 700,
            color: 'rgba(255,255,255,0.88)',
            fontFamily: 'var(--font-archivo), "Archivo", sans-serif',
          }}
        >
          {data.title}
        </span>
        <span
          style={{
            fontSize: 11,
            color: 'rgba(255,255,255,0.35)',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            fontFamily: 'var(--font-archivo), "Archivo", sans-serif',
          }}
        >
          {data.category}
        </span>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start start', 'end end'],
  });

  const c2Y = useTransform(scrollYProgress, [0.15, 0.38], ['100vh', '0vh']);
  const c3Y = useTransform(scrollYProgress, [0.48, 0.72], ['100vh', '0vh']);

  const c1Scale = useTransform(scrollYProgress, [0.32, 0.52], [1, 0.95]);
  const c2Scale = useTransform(scrollYProgress, [0.62, 0.82], [1, 0.95]);

  const c1BrightVal = useTransform(scrollYProgress, [0.32, 0.52], [1, 0.55]);
  const c2BrightVal = useTransform(scrollYProgress, [0.62, 0.82], [1, 0.55]);
  const c1Filter    = useMotionTemplate`brightness(${c1BrightVal})`;
  const c2Filter    = useMotionTemplate`brightness(${c2BrightVal})`;

  return (
    <section style={{ background: '#ffffff' }}>
      <div ref={scrollRef} style={{ height: '300vh', position: 'relative' }}>
        <div style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden' }}>
          <div
            style={{
              height: '100%',
              padding: '0 64px',
              display: 'flex',
              flexDirection: 'column',
            }}
          >

            {/* ── Header row — Figma: title left:64 top:96, CTA left:880 ── */}
            <div
              style={{
                paddingTop: 96,
                flexShrink: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              {/* Title — Figma: Archivo 700, 64px, #222222 */}
              <h2
                style={{
                  margin: 0,
                  fontSize: 'clamp(32px, 4.4vw, 64px)',
                  fontWeight: 700,
                  color: '#222222',
                  lineHeight: 1.05,
                  fontFamily: 'var(--font-archivo), "Archivo", sans-serif',
                }}
              >
                See Our Best Works!
              </h2>

              {/* CTA — Figma: Archivo 400, 40px, #FB4415 + circle arrow */}
              <a
                href="#"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 14,
                  textDecoration: 'none',
                  flexShrink: 0,
                }}
              >
                <span
                  style={{
                    fontSize: 'clamp(20px, 2.8vw, 40px)',
                    fontWeight: 400,
                    color: '#FB4415',
                    fontFamily: 'var(--font-archivo), "Archivo", sans-serif',
                    lineHeight: 1.05,
                  }}
                >
                  View all case studies
                </span>

                {/* Figma: Ellipse 10 — 36.2px circle, 5px border #FB4415 + arrow */}
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: '50%',
                    border: '5px solid #FB4415',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                    <path
                      d="M1 5H13M9 1L13 5L9 9"
                      stroke="#FB4415"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </a>
            </div>

            {/* ── Cards area ─────────────────────────────────────────── */}
            {/*
              Figma image 21 (front card): left:208, width:1029 on 1440px canvas
              With 64px padding: card left offset ≈ 208-64 = 144px from content edge
              Scaling to our layout: ~11% left inset, ~78% width
            */}
            <div
              style={{
                flex: 1,
                position: 'relative',
                overflow: 'hidden',
                marginTop: 32,
              }}
            >
              {/* Card 1 — front, visible on load */}
              <motion.div
                style={{
                  position: 'absolute',
                  left: '11%',
                  right: '11%',
                  top: 0,
                  scale: c1Scale,
                  filter: c1Filter,
                  transformOrigin: 'top center',
                  zIndex: 1,
                }}
              >
                <ProjectCard data={PROJECTS[0]} />
              </motion.div>

              {/* Card 2 — slides up from below */}
              <motion.div
                style={{
                  position: 'absolute',
                  left: '11%',
                  right: '11%',
                  top: 16,
                  y: c2Y,
                  scale: c2Scale,
                  filter: c2Filter,
                  transformOrigin: 'top center',
                  zIndex: 2,
                }}
              >
                <ProjectCard data={PROJECTS[1]} />
              </motion.div>

              {/* Card 3 — slides up from below */}
              <motion.div
                style={{
                  position: 'absolute',
                  left: '11%',
                  right: '11%',
                  top: 32,
                  y: c3Y,
                  transformOrigin: 'top center',
                  zIndex: 3,
                }}
              >
                <ProjectCard data={PROJECTS[2]} />
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
