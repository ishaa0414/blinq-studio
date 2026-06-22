'use client';
import { useEffect, useRef, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  stagger?: number;
  variant?: 'slide-up' | 'scale-in';
};

export default function StaggerReveal({
  children,
  className = '',
  style,
  stagger = 80,
  variant = 'scale-in',
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const items = Array.from(el.children) as HTMLElement[];
    items.forEach((child) => {
      child.classList.add('l-stagger-item', `l-reveal-${variant}`);
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          items.forEach((child, i) => {
            setTimeout(() => child.classList.add('l-visible'), i * stagger);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.07 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [stagger, variant]);

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
