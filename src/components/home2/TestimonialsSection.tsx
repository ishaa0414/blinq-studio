'use client';

import { useRef, useState, useEffect } from 'react';

const TESTIMONIALS = [
  {
    quote:
      "Working with Blinq Studio completely transformed our brand identity. Their attention to detail and creative vision exceeded every expectation we had going into the project.",
    name: "Alex Morrison",
    company: "NovaTech, Founder & CEO",
    logo: null,
  },
  {
    quote:
      "The team brought our digital presence to life in a way we never imagined possible. Clean, bold, and entirely on-brand — the results speak for themselves.",
    name: "Sarah Chen",
    company: "Luminary Labs, Creative Director",
    logo: null,
  },
  {
    quote:
      "From first brief to final delivery, the process was seamless. They understood our vision immediately and translated it into something truly remarkable.",
    name: "James Okafor",
    company: "Verge Studio, Co-Founder",
    logo: null,
  },
  {
    quote:
      "Blinq Studio doesn't just design — they think. Every decision was intentional, every pixel purposeful. Our conversion rate jumped 40% within the first month.",
    name: "Priya Nair",
    company: "Drift Commerce, Head of Marketing",
    logo: null,
  },
  {
    quote:
      "Exceptional quality, on time and on budget. The team truly understood the intersection of aesthetics and functionality. We'll be back for every project.",
    name: "Marcus Webb",
    company: "Arclight Agency, Partner",
    logo: null,
  },
];

const CARD_W = 500;
const CARD_GAP = 24;
const CARD_STEP = CARD_W + CARD_GAP;
const AUTO_SPEED = 0.5;
const SINGLE_SET_W = TESTIMONIALS.length * CARD_STEP;
// Triple the items so the seam is always off-screen while scrolling
const ITEMS = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS];

export default function TestimonialsSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const isPausedRef = useRef(false);
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragScrollStartRef = useRef(0);
  const scrollPosRef = useRef(0);
  const rafRef = useRef<number>(0);

  const [arrowDir, setArrowDir] = useState<'right' | 'left'>('right');
  const [cursor, setCursor] = useState<'grab' | 'grabbing'>('grab');

  // Auto-scroll animation loop
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Start from middle set so we can loop in both directions
    scrollPosRef.current = SINGLE_SET_W;
    track.scrollLeft = SINGLE_SET_W;

    function loop() {
      if (!isPausedRef.current && !isDraggingRef.current) {
        scrollPosRef.current += AUTO_SPEED;
      }

      // Seamless wrap
      if (scrollPosRef.current >= SINGLE_SET_W * 2) scrollPosRef.current -= SINGLE_SET_W;
      if (scrollPosRef.current < 0) scrollPosRef.current += SINGLE_SET_W;

      if (trackRef.current) trackRef.current.scrollLeft = scrollPosRef.current;
      rafRef.current = requestAnimationFrame(loop);
    }

    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  // Global mouse: arrow direction + drag tracking
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setArrowDir(e.clientX < window.innerWidth / 2 ? 'left' : 'right');
      if (isDraggingRef.current) {
        const dx = dragStartXRef.current - e.clientX;
        scrollPosRef.current = dragScrollStartRef.current + dx;
      }
    };
    const onUp = () => {
      if (isDraggingRef.current) {
        isDraggingRef.current = false;
        setCursor('grab');
      }
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    };
  }, []);

  function handleArrowClick() {
    scrollPosRef.current += arrowDir === 'right' ? CARD_STEP : -CARD_STEP;
  }

  function onMouseDown(e: React.MouseEvent) {
    isDraggingRef.current = true;
    setCursor('grabbing');
    dragStartXRef.current = e.clientX;
    dragScrollStartRef.current = scrollPosRef.current;
  }

  return (
    <section style={{ background: '#ffffff', paddingTop: 96, paddingBottom: 80 }}>

      {/* Header — top left, heavy display weight */}
      <h2
        style={{
          margin: '0 0 48px',
          padding: '0 64px',
          fontSize: 'clamp(36px, 5vw, 72px)',
          fontWeight: 800,
          color: '#1a1a1a',
          lineHeight: 1.05,
          fontFamily: 'var(--font-archivo), "Archivo", sans-serif',
        }}
      >
        See what the talk
        <br />
        is about!
      </h2>

      {/* Card row + direction-aware arrow */}
      <div style={{ position: 'relative' }}>

        {/* Overflow-hidden scrollable track */}
        <div
          ref={trackRef}
          onMouseEnter={() => { isPausedRef.current = true; }}
          onMouseLeave={() => { isPausedRef.current = false; }}
          onMouseDown={onMouseDown}
          style={{
            display: 'flex',
            gap: CARD_GAP,
            overflowX: 'hidden',
            paddingLeft: 64,
            cursor,
            userSelect: 'none',
          }}
        >
          {ITEMS.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>

        {/* Direction-aware circular arrow — bottom right, overlaps card row */}
        <button
          onClick={handleArrowClick}
          style={{
            position: 'absolute',
            bottom: -28,
            right: 64,
            width: 66,
            height: 66,
            borderRadius: '50%',
            border: '3px solid #E8400A',
            background: 'transparent',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'transform 0.15s ease',
            zIndex: 10,
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1.1)'; }}
          onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1)'; }}
        >
          <svg
            width="20"
            height="14"
            viewBox="0 0 20 14"
            fill="none"
            style={{
              transition: 'transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
              transform: arrowDir === 'left' ? 'rotate(180deg)' : 'rotate(0deg)',
              pointerEvents: 'none',
            }}
          >
            <path
              d="M1 7H19M13 1L19 7L13 13"
              stroke="#E8400A"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Bottom supporting paragraph — bottom left */}
      <p
        style={{
          margin: '72px 0 0',
          padding: '0 64px',
          fontSize: 15,
          color: '#888888',
          lineHeight: 1.6,
          maxWidth: 464,
          fontFamily: 'var(--font-archivo), "Archivo", sans-serif',
          fontWeight: 400,
        }}
      >
        We let our work and our clients do the talking.
        <br />
        Real results, real relationships, built to last.
      </p>

    </section>
  );
}

function TestimonialCard({
  quote,
  name,
  company,
  logo,
}: {
  quote: string;
  name: string;
  company: string;
  logo?: string | null;
}) {
  return (
    <div
      style={{
        flexShrink: 0,
        width: CARD_W,
        minHeight: 260,
        background: '#D9D9D9',
        borderRadius: 20,
        padding: '36px 40px 32px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      {/* Quote mark + body */}
      <div>
        <div
          style={{
            fontSize: 80,
            fontWeight: 900,
            lineHeight: 0.75,
            marginBottom: 20,
            color: '#1a1a1a',
            fontFamily: 'Georgia, serif',
            userSelect: 'none',
          }}
        >
          &ldquo;
        </div>
        <p
          style={{
            margin: 0,
            fontSize: 16,
            color: '#2a2a2a',
            lineHeight: 1.65,
            fontFamily: 'var(--font-archivo), "Archivo", sans-serif',
            fontWeight: 400,
          }}
        >
          {quote}
        </p>
      </div>

      {/* Attribution */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          marginTop: 28,
        }}
      >
        {logo ? (
          <img
            src={logo}
            alt={name}
            style={{
              width: 40,
              height: 40,
              borderRadius: '50%',
              objectFit: 'cover',
              flexShrink: 0,
            }}
          />
        ) : (
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: '50%',
              background: '#4a4a4a',
              flexShrink: 0,
            }}
          />
        )}
        <div>
          <div
            style={{
              fontSize: 16,
              fontWeight: 700,
              color: '#1a1a1a',
              fontFamily: 'var(--font-archivo), "Archivo", sans-serif',
            }}
          >
            {name}
          </div>
          <div
            style={{
              fontSize: 13,
              color: '#777777',
              marginTop: 2,
              fontFamily: 'var(--font-archivo), "Archivo", sans-serif',
            }}
          >
            {company}
          </div>
        </div>
      </div>
    </div>
  );
}
