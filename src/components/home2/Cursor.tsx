'use client';
import { useEffect, useRef } from 'react';

export default function Home2Cursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const pos     = useRef({ x: -200, y: -200 });
  const ring    = useRef({ x: -200, y: -200 });
  const rafRef  = useRef<number>(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', onMove);

    const tick = () => {
      // ring lags behind cursor
      ring.current.x += (pos.current.x - ring.current.x) * 0.12;
      ring.current.y += (pos.current.y - ring.current.y) * 0.12;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.current.x - 14}px, ${pos.current.y - 14}px)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x - 10}px, ${ring.current.y - 10}px)`;
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      {/* Large orange dot — instant follow */}
      <div
        ref={dotRef}
        className="hidden md:block"
        style={{
          position: 'fixed', top: 0, left: 0,
          width: 28, height: 28,
          borderRadius: '50%',
          background: '#FB4415',
          pointerEvents: 'none',
          zIndex: 99999,
          willChange: 'transform',
        }}
      />
      {/* Lagging ring follower */}
      <div
        ref={ringRef}
        className="hidden md:block"
        style={{
          position: 'fixed', top: 0, left: 0,
          width: 20, height: 20,
          borderRadius: '50%',
          border: '2px solid rgba(251,68,21,0.45)',
          pointerEvents: 'none',
          zIndex: 99998,
          willChange: 'transform',
        }}
      />
    </>
  );
}
