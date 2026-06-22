'use client';
import { useEffect, useRef, ReactNode } from 'react';

type Variant = 'slide-up' | 'scale-in' | 'slide-left' | 'slide-right' | 'fade';

type Props = {
  children: ReactNode;
  delay?: number;
  variant?: Variant;
};

export default function ScrollReveal({ children, delay = 0, variant = 'slide-up' }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('l-visible');
          observer.disconnect();
        }
      },
      { threshold: 0.07 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`l-reveal l-reveal-${variant}`}
      style={{ '--l-delay': `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </div>
  );
}
