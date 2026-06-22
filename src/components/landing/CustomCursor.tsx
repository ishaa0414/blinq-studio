'use client';
import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mx = -100, my = -100;
    let rx = -100, ry = -100;
    let isHovering = false;
    let rafId: number;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.transform = `translate(${mx - 4}px, ${my - 4}px)`;
    };

    const onEnterClickable = () => {
      isHovering = true;
      ring.style.width = '52px';
      ring.style.height = '52px';
      ring.style.borderColor = 'rgba(255,91,30,0.7)';
      ring.style.background = 'rgba(255,91,30,0.08)';
      dot.style.opacity = '0';
    };

    const onLeaveClickable = () => {
      isHovering = false;
      ring.style.width = '34px';
      ring.style.height = '34px';
      ring.style.borderColor = 'rgba(255,91,30,0.45)';
      ring.style.background = 'transparent';
      dot.style.opacity = '1';
    };

    const animate = () => {
      const ease = isHovering ? 0.09 : 0.13;
      rx += (mx - rx - (isHovering ? 26 : 17)) * ease;
      ry += (my - ry - (isHovering ? 26 : 17)) * ease;
      ring.style.transform = `translate(${rx}px, ${ry}px)`;
      rafId = requestAnimationFrame(animate);
    };

    const addListeners = () => {
      document.querySelectorAll('a, button, [role="button"], input, label').forEach((el) => {
        el.addEventListener('mouseenter', onEnterClickable);
        el.addEventListener('mouseleave', onLeaveClickable);
      });
    };

    document.addEventListener('mousemove', onMove);
    addListeners();
    rafId = requestAnimationFrame(animate);

    // Re-attach if DOM changes (e.g. mobile menu opens)
    const observer = new MutationObserver(addListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafId);
      observer.disconnect();
    };
  }, []);

  const base: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    pointerEvents: 'none',
    zIndex: 99999,
    borderRadius: '50%',
    willChange: 'transform',
    transition: 'width 0.2s ease, height 0.2s ease, background 0.2s ease, border-color 0.2s ease, opacity 0.15s ease',
  };

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        style={{
          ...base,
          width: 8,
          height: 8,
          background: '#FF5B1E',
          transform: 'translate(-100px, -100px)',
        }}
      />
      {/* Ring */}
      <div
        ref={ringRef}
        style={{
          ...base,
          width: 34,
          height: 34,
          border: '1.5px solid rgba(255,91,30,0.45)',
          transform: 'translate(-100px, -100px)',
        }}
      />
    </>
  );
}
