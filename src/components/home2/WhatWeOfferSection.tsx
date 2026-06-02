'use client';
import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';

const ACCENT = '#E8400A';

interface ServiceImage {
  src: string;
  style: React.CSSProperties;
}

interface Service {
  number: string;
  name: string;
  subServices: string[];
  images: ServiceImage[];
}

const SERVICES: Service[] = [
  {
    number: '01',
    name: 'Strategy',
    subServices: [
      'Research & Insights',
      'Brand Strategy & Consulting',
      'Market Positioning',
      'Competitive Analysis',
      'Audience Definition',
    ],
    images: [
      {
        src: 'https://picsum.photos/seed/bq-s1/520/680',
        style: { width: '60%', aspectRatio: '3/4', top: '5%', right: '2%', transform: 'rotate(-2deg)', zIndex: 2 },
      },
      {
        src: 'https://picsum.photos/seed/bq-s2/380/480',
        style: { width: '45%', aspectRatio: '3/4', bottom: '6%', left: '0%', transform: 'rotate(2.5deg)', zIndex: 3 },
      },
      {
        src: 'https://picsum.photos/seed/bq-s3/300/380',
        style: { width: '37%', aspectRatio: '3/4', top: '10%', left: '12%', transform: 'rotate(-1deg)', zIndex: 1 },
      },
    ],
  },
  {
    number: '02',
    name: 'Branding',
    subServices: [
      'Logo Design',
      'Visual Identity Systems',
      'Typography & Color',
      'Brand Guidelines',
      'Tone of Voice',
    ],
    images: [
      {
        src: 'https://picsum.photos/seed/bq-b1/500/660',
        style: { width: '58%', aspectRatio: '3/4', top: '8%', right: '5%', transform: 'rotate(1.5deg)', zIndex: 2 },
      },
      {
        src: 'https://picsum.photos/seed/bq-b2/360/460',
        style: { width: '44%', aspectRatio: '3/4', bottom: '4%', left: '2%', transform: 'rotate(-3deg)', zIndex: 3 },
      },
      {
        src: 'https://picsum.photos/seed/bq-b3/290/360',
        style: { width: '35%', aspectRatio: '3/4', top: '6%', left: '14%', transform: 'rotate(2deg)', zIndex: 1 },
      },
    ],
  },
  {
    number: '03',
    name: 'Web & Digital',
    subServices: [
      'Website Design & Development',
      'Webflow / Framer / Next.js',
      'Landing Pages',
      'UI/UX Design',
      'Custom CMS Integration',
    ],
    images: [
      {
        src: 'https://picsum.photos/seed/bq-w1/540/700',
        style: { width: '62%', aspectRatio: '3/4', top: '3%', right: '3%', transform: 'rotate(-1.5deg)', zIndex: 2 },
      },
      {
        src: 'https://picsum.photos/seed/bq-w2/400/510',
        style: { width: '47%', aspectRatio: '3/4', bottom: '8%', left: '4%', transform: 'rotate(3deg)', zIndex: 3 },
      },
      {
        src: 'https://picsum.photos/seed/bq-w3/310/400',
        style: { width: '38%', aspectRatio: '3/4', top: '18%', left: '6%', transform: 'rotate(-0.5deg)', zIndex: 1 },
      },
    ],
  },
  {
    number: '04',
    name: 'Video & Content',
    subServices: [
      'Brand Films',
      'Explainer Videos',
      'Social Content',
      'Production & Direction',
      'Motion Graphics',
    ],
    images: [
      {
        src: 'https://picsum.photos/seed/bq-v1/510/660',
        style: { width: '61%', aspectRatio: '3/4', top: '6%', right: '4%', transform: 'rotate(2deg)', zIndex: 2 },
      },
      {
        src: 'https://picsum.photos/seed/bq-v2/370/470',
        style: { width: '44%', aspectRatio: '3/4', bottom: '5%', left: '1%', transform: 'rotate(-2.5deg)', zIndex: 3 },
      },
      {
        src: 'https://picsum.photos/seed/bq-v3/290/370',
        style: { width: '36%', aspectRatio: '3/4', top: '14%', left: '10%', transform: 'rotate(1.5deg)', zIndex: 1 },
      },
    ],
  },
  {
    number: '05',
    name: 'Creative Direction',
    subServices: [
      'Art Direction',
      'Campaign Concepts',
      'Styling & Set Design',
      'Photography Direction',
      'Copywriting & Messaging',
    ],
    images: [
      {
        src: 'https://picsum.photos/seed/bq-c1/530/690',
        style: { width: '63%', aspectRatio: '3/4', top: '4%', right: '2%', transform: 'rotate(-2.5deg)', zIndex: 2 },
      },
      {
        src: 'https://picsum.photos/seed/bq-c2/390/500',
        style: { width: '46%', aspectRatio: '3/4', bottom: '7%', left: '3%', transform: 'rotate(2deg)', zIndex: 3 },
      },
      {
        src: 'https://picsum.photos/seed/bq-c3/310/390',
        style: { width: '38%', aspectRatio: '3/4', top: '12%', left: '8%', transform: 'rotate(-1.5deg)', zIndex: 1 },
      },
    ],
  },
];

export default function WhatWeOfferSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverIndex,  setHoverIndex]  = useState<number | null>(null);

  const displayIndex = hoverIndex !== null ? hoverIndex : activeIndex;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  useEffect(() => {
    return scrollYProgress.on('change', (v) => {
      setActiveIndex(Math.min(4, Math.floor(v * 5)));
    });
  }, [scrollYProgress]);

  return (
    <section
      ref={sectionRef}
      style={{ height: '500vh', background: '#ffffff', position: 'relative' }}
    >
      <div
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Header */}
        <div style={{ padding: '40px 60px 20px', flexShrink: 0 }}>
          <p
            style={{
              margin: 0,
              fontSize: 'clamp(10px, 1vw, 14px)',
              fontWeight: 900,
              color: '#0a0a0a',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              fontFamily: 'var(--font-archivo-black), "Archivo Black", sans-serif',
            }}
          >
            What We Offer
          </p>
        </div>

        {/* ── Three columns ─────────────────────────────────────── */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            padding: '0 60px 32px',
            overflow: 'hidden',
            minHeight: 0,
          }}
        >
          {/* ── LEFT COLUMN ~40% ─────────────────────────────── */}
          <div
            style={{
              width: '40%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-evenly',
              paddingRight: '120px',
              flexShrink: 0,
            }}
          >
            {SERVICES.map((service, i) => {
              const isActive = displayIndex === i;
              return (
                <div
                  key={service.number}
                  style={{ userSelect: 'none' }}
                  onMouseEnter={() => setHoverIndex(i)}
                  onMouseLeave={() => setHoverIndex(null)}
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    {/* Superscript number */}
                    <span
                      style={{
                        fontSize: 'clamp(9px, 0.7vw, 11px)',
                        fontWeight: 400,
                        color: isActive ? ACCENT : 'rgba(0,0,0,0.22)',
                        fontFamily: 'var(--font-space-mono), "Space Mono", monospace',
                        letterSpacing: '0.04em',
                        marginTop: 'clamp(6px, 0.7vw, 10px)',
                        flexShrink: 0,
                        transition: 'color 0.35s ease',
                      }}
                    >
                      {service.number}
                    </span>

                    {/* Service name + ✳ */}
                    <h3
                      style={{
                        margin: 0,
                        fontSize: 'clamp(22px, 3.6vw, 62px)',
                        fontWeight: 900,
                        lineHeight: 1.0,
                        color: isActive ? ACCENT : '#0a0a0a',
                        fontFamily: 'var(--font-archivo-black), "Archivo Black", sans-serif',
                        transition: 'color 0.35s ease',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.18em',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {service.name}
                      <span
                        style={{
                          color: ACCENT,
                          fontSize: '0.52em',
                          lineHeight: 1,
                          display: 'inline-block',
                          opacity: isActive ? 1 : 0,
                          transform: isActive ? 'scale(1) rotate(0deg)' : 'scale(0.4) rotate(-30deg)',
                          transition: 'opacity 0.3s ease, transform 0.3s ease',
                        }}
                      >
                        ✳
                      </span>
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ── MIDDLE COLUMN ~25% ───────────────────────────── */}
          <div
            style={{
              width: '25%',
              display: 'flex',
              alignItems: 'center',
              padding: '0 28px',
              flexShrink: 0,
              overflow: 'hidden',
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={displayIndex}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.28, ease: 'easeInOut' }}
                style={{ borderLeft: '1.5px solid #0a0a0a', paddingLeft: '24px' }}
              >
                {SERVICES[displayIndex].subServices.map((sub, i) => (
                  <motion.p
                    key={sub}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.055, duration: 0.22, ease: 'easeOut' }}
                    style={{
                      margin: '0 0 clamp(10px, 1.3vh, 18px) 0',
                      fontSize: 'clamp(12px, 1.05vw, 17px)',
                      fontWeight: 400,
                      color: '#0a0a0a',
                      lineHeight: 1.45,
                      fontFamily: 'var(--font-archivo), "Archivo", sans-serif',
                      letterSpacing: '0.01em',
                    }}
                  >
                    {sub}
                  </motion.p>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ── RIGHT COLUMN ~35% ────────────────────────────── */}
          <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={displayIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
                style={{ position: 'absolute', inset: 0 }}
              >
                {SERVICES[displayIndex].images.map((img, i) => (
                  <motion.img
                    key={i}
                    src={img.src}
                    alt=""
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.09, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                      position: 'absolute',
                      objectFit: 'cover',
                      display: 'block',
                      filter: 'brightness(0.88) contrast(1.08)',
                      boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
                      ...img.style,
                    }}
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
