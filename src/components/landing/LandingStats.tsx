'use client';
import { useEffect, useRef, useState } from 'react';

const stats = [
  { target: 50, suffix: '+', label: 'Projects Delivered' },
  { target: 30, suffix: '+', label: 'Happy Clients' },
  { target: 3, suffix: '', label: 'Services Under\nOne Roof' },
  { target: 100, suffix: '%', label: 'Custom Solutions' },
  { target: 7, suffix: ' Days', label: 'Average Concept\nDelivery' },
];

function useCountUp(target: number, duration: number, active: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [active, target, duration]);

  return count;
}

function StatItem({ stat, active }: { stat: typeof stats[0]; active: boolean }) {
  const count = useCountUp(stat.target, 1200, active);
  const done = active && count === stat.target;
  return (
    <div className="stat-item">
      <span className={`stat-value${done ? ' l-popped' : ''}`}>
        {count}{stat.suffix}
      </span>
      <span className="stat-label">
        {stat.label.split('\n').map((line, i) => (
          <span key={i}>{line}{i < stat.label.split('\n').length - 1 && <br />}</span>
        ))}
      </span>
    </div>
  );
}

export default function LandingStats() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setActive(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .stats-section {
          margin: 64px 0 0;
          padding: 0 clamp(28px, 5vw, 72px);
        }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          background: #f8f8f7;
          border-radius: 20px;
          border: 1px solid #e7e6e3;
          overflow: hidden;
        }
        .stat-item {
          padding: 36px 28px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          border-right: 1px solid #e7e6e3;
        }
        .stat-item:last-child {
          border-right: none;
        }
        .stat-value {
          font-size: clamp(30px, 3.2vw, 44px);
          font-weight: 800;
          color: #FF5B1E;
          letter-spacing: -0.03em;
          line-height: 1;
        }
        .stat-label {
          font-size: 13px;
          font-weight: 500;
          color: #6b6b6b;
          line-height: 1.5;
        }

        @media (max-width: 768px) {
          .stats-section {
            margin-top: 40px;
            padding: 0 16px;
          }
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            border-radius: 16px;
          }
          .stat-item {
            padding: 24px 20px;
            border-right: none;
            border-bottom: 1px solid #e7e6e3;
          }
          .stat-item:nth-child(odd) {
            border-right: 1px solid #e7e6e3;
          }
          .stat-item:nth-last-child(-n+2) {
            border-bottom: none;
          }
        }
      `}</style>

      <section id="about" className="stats-section" ref={ref}>
        <div className="stats-grid">
          {stats.map((stat) => (
            <StatItem key={stat.label} stat={stat} active={active} />
          ))}
        </div>
      </section>
    </>
  );
}
