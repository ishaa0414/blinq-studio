'use client';
import { useEffect, useRef } from 'react';

function lerp(a: number, b: number, t: number) { return a + (b - a) * t; }
function clamp(v: number, lo: number, hi: number) { return Math.max(lo, Math.min(hi, v)); }

const MARQUEE_ITEMS = ['APPLE', 'MICROSOFT', 'CHATGPT', 'NOTION', 'LINEAR', 'FIGMA', 'STRIPE', 'VERCEL'];

export default function ScrollMediaSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const mediaRef   = useRef<HTMLDivElement>(null);
  const leftRef    = useRef<HTMLDivElement>(null);
  const rightRef   = useRef<HTMLDivElement>(null);
  const line2Ref   = useRef<HTMLDivElement>(null);
  const rafRef     = useRef<number>(0);
  const isMobile   = useRef(false);

  // smoothed current values
  const cw = useRef(42);
  const ch = useRef(44);
  const cr = useRef(20);
  const co = useRef(0);
  const ct = useRef(26);

  // Keep isMobile in sync; also shift media vertical anchor up on mobile
  // so the block appears closer to the hero section instead of dead-centre.
  useEffect(() => {
    const update = () => {
      isMobile.current = window.innerWidth < 640;
      if (mediaRef.current) {
        mediaRef.current.style.top = isMobile.current ? '12%' : '26%';
      }
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const tick = () => {
      const rect       = section.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      const p          = clamp(-rect.top / scrollable, 0, 1);
      const mobile     = isMobile.current;

      // Breakpoint-specific animation targets
      const initW = mobile ? 52 : 42;
      const initH = mobile ? 32 : 44;
      const endW  = mobile ? 82 : 15;
      const endH  = mobile ? 40 : 22;

      let tw: number, th: number, tr: number, to: number, tt: number;
      const initT = mobile ? 12 : 26;

      const spd = 0.10;

      if (p < 0.5) {
        const t = p / 0.5;
        tw = lerp(initW, 100, t);
        th = lerp(initH, 100, t);
        tr = lerp(20, 0, t);
        to = 0;
        tt = lerp(initT, 50, t);
        cw.current += (tw - cw.current) * spd;
        ch.current += (th - ch.current) * spd;
        cr.current += (tr - cr.current) * spd;
        co.current += (to - co.current) * spd;
        ct.current += (tt - ct.current) * spd;
      } else if (p < 0.62) {
        // Snap exactly to full-screen so there are no gaps
        cw.current = 100;
        ch.current = 100;
        cr.current = 0;
        co.current = 0;
        ct.current = 50;
      } else {
        const t = (p - 0.62) / 0.38;
        tw = lerp(100, endW, t);
        th = lerp(100, endH, t);
        tr = lerp(0, 14, t);
        to = clamp(t * 1.4, 0, 1);
        tt = lerp(50, initT, t);
        cw.current += (tw - cw.current) * spd;
        ch.current += (th - ch.current) * spd;
        cr.current += (tr - cr.current) * spd;
        co.current += (to - co.current) * spd;
        ct.current += (tt - ct.current) * spd;
      }

      if (mediaRef.current) {
        mediaRef.current.style.width        = `${cw.current}vw`;
        mediaRef.current.style.height       = `${ch.current}vh`;
        mediaRef.current.style.borderRadius = `${cr.current}px`;
        mediaRef.current.style.top          = `${ct.current}%`;
      }

      const op      = co.current;
      const halfH   = ch.current / 2;
      const halfW   = cw.current / 2;
      const textMax = `${op * (mobile ? 320 : 540)}px`;

      if (mobile) {
        // On mobile the media anchor is at 38% (not 50%) so the block sits
        // closer to the hero. All dependent positions use the same 38% base.
        const mct = '12%'; // mobile centre top
        if (leftRef.current) {
          leftRef.current.style.opacity   = String(op);
          leftRef.current.style.right     = 'auto';
          leftRef.current.style.left      = '50%';
          leftRef.current.style.top       = `calc(${mct} - ${halfH}vh - 16px)`;
          leftRef.current.style.transform = 'translate(-50%, -100%)';
          leftRef.current.style.maxWidth  = textMax;
          leftRef.current.style.textAlign = 'center';
        }
        if (line2Ref.current) {
          line2Ref.current.style.opacity    = String(op);
          line2Ref.current.style.maxHeight  = op > 0.01 ? '320px' : '0px';
          line2Ref.current.style.top        = `calc(${mct} + ${halfH}vh + 76px)`;
          line2Ref.current.style.transform  = 'translateX(-50%)';
          line2Ref.current.style.whiteSpace = 'normal';
          line2Ref.current.style.width      = '88vw';
          line2Ref.current.style.textAlign  = 'center';
        }
        if (rightRef.current) {
          rightRef.current.style.opacity   = String(op);
          rightRef.current.style.right     = 'auto';
          rightRef.current.style.left      = '50%';
          rightRef.current.style.top       = `calc(${mct} + ${halfH}vh + 16px)`;
          rightRef.current.style.transform = 'translateX(-50%)';
          rightRef.current.style.maxWidth  = textMax;
          rightRef.current.style.textAlign = 'center';
        }
      } else {
        // Desktop horizontal layout
        const gapVw = halfW + 1.8;
        if (leftRef.current) {
          leftRef.current.style.opacity   = String(op);
          leftRef.current.style.left      = 'auto';
          leftRef.current.style.right     = `calc(50% + ${gapVw}vw)`;
          leftRef.current.style.top       = '26%';
          leftRef.current.style.transform = 'translateY(-50%)';
          leftRef.current.style.maxWidth  = textMax;
          leftRef.current.style.textAlign = 'right';
        }
        if (rightRef.current) {
          rightRef.current.style.opacity   = String(op);
          rightRef.current.style.right     = 'auto';
          rightRef.current.style.left      = `calc(50% + ${gapVw}vw)`;
          rightRef.current.style.top       = '26%';
          rightRef.current.style.transform = 'translateY(-50%)';
          rightRef.current.style.maxWidth  = textMax;
          rightRef.current.style.textAlign = 'left';
        }
        if (line2Ref.current) {
          line2Ref.current.style.opacity    = String(op);
          line2Ref.current.style.maxHeight  = op > 0.01 ? '120px' : '0px';
          line2Ref.current.style.top        = '48%';
          line2Ref.current.style.transform  = 'translateX(-50%)';
          line2Ref.current.style.whiteSpace = 'nowrap';
          line2Ref.current.style.width      = 'auto';
          line2Ref.current.style.textAlign  = 'center';
          line2Ref.current.style.maxHeight  = op > 0.01 ? '320px' : '0px';
        }
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const GRADIENT = [
    'radial-gradient(ellipse at 22% 60%, #e07020 0%, #c05010 26%, transparent 46%)',
    'radial-gradient(ellipse at 60% 36%, #3058c8 0%, #4870d8 30%, transparent 54%)',
    'radial-gradient(ellipse at 80% 20%, #6070d8 0%, transparent 36%)',
    'radial-gradient(ellipse at 32% 16%, #8898e8 0%, transparent 30%)',
    'radial-gradient(ellipse at 50% 82%, #f0a030 0%, transparent 32%)',
    '#b8c4ee',
  ].join(', ');

  const TEXT_STYLE: React.CSSProperties = {
    fontFamily: 'var(--font-archivo-black), "Archivo Black", sans-serif',
    fontWeight: 900,
    fontSize: 'clamp(20px, 4.6vw, 66px)',
    color: '#111',
    letterSpacing: '-0.02em',
    whiteSpace: 'nowrap',
  };

  return (
    <>
      {/* ── 400vh scroll runway ── */}
      <div ref={sectionRef} style={{ height: '400vh', position: 'relative' }}>
        <div style={{
          position: 'sticky', top: 0,
          height: '100vh',
          background: '#fff',
          overflow: 'hidden',
        }}>

          {/* Media — absolutely centered, grows/shrinks from exact center */}
          <div
            ref={mediaRef}
            style={{
              position: 'absolute',
              left: '50%', top: '26%',
              transform: 'translate(-50%, -50%)',
              width: '42vw', height: '44vh',
              borderRadius: 20,
              overflow: 'hidden',
              willChange: 'width, height, border-radius',
            }}
          >
            <video src="/hero5.mp4" autoPlay muted loop playsInline style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>

          {/* Left text — desktop: right of center; mobile: above video */}
          <div ref={leftRef} style={{
            ...TEXT_STYLE,
            position: 'absolute',
            right: `calc(50% + ${28 / 2 + 1.8}vw)`,
            top: '50%', transform: 'translateY(-50%)',
            opacity: 0, maxWidth: 0, overflow: 'hidden',
            textAlign: 'right',
          }}>
            WEB &bull; BRAND &bull;
          </div>

          {/* Right text — desktop: left of center; mobile: below video */}
          <div ref={rightRef} style={{
            ...TEXT_STYLE,
            position: 'absolute',
            left: `calc(50% + ${28 / 2 + 1.8}vw)`,
            top: '50%', transform: 'translateY(-50%)',
            opacity: 0, maxWidth: 0, overflow: 'hidden',
          }}>
            &bull; VIDEO
          </div>

          {/* Line 2 — ONE SYSTEM + tagline + stats */}
          <div
            ref={line2Ref}
            style={{
              position: 'absolute',
              left: '50%', top: '48%',
              transform: 'translateX(-50%)',
              opacity: 0, maxHeight: 0, overflow: 'hidden',
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16,
              textAlign: 'center',
            }}
          >
            <div style={{ ...TEXT_STYLE, fontSize: 'clamp(14px, 3.8vw, 56px)', whiteSpace: 'nowrap' }}>
              ONE SYSTEM &bull; ZERO COMPROMISE
            </div>

            <div style={{
              fontFamily: 'var(--font-archivo), "Archivo", sans-serif',
              fontWeight: 400, fontSize: 'clamp(13px, 1.3vw, 17px)',
              color: '#666', letterSpacing: '0.06em', whiteSpace: 'nowrap',
            }}>
              Branding &nbsp;&bull;&nbsp; Web &nbsp;&bull;&nbsp; Video — all under one roof.
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(24px, 5vw, 64px)', marginTop: 8 }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-archivo-black), "Archivo Black", sans-serif', fontWeight: 900, fontSize: 'clamp(22px, 3vw, 48px)', color: '#FB4415', lineHeight: 1 }}>50+</div>
                <div style={{ fontFamily: 'var(--font-archivo), "Archivo", sans-serif', fontWeight: 700, fontSize: 10, color: '#aaa', letterSpacing: '0.14em', marginTop: 4 }}>PROJECTS</div>
              </div>
              <div style={{ width: 1, height: 40, background: '#e0e0e0', flexShrink: 0 }} />
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-archivo-black), "Archivo Black", sans-serif', fontWeight: 900, fontSize: 'clamp(22px, 3vw, 48px)', color: '#FB4415', lineHeight: 1 }}>5+</div>
                <div style={{ fontFamily: 'var(--font-archivo), "Archivo", sans-serif', fontWeight: 700, fontSize: 10, color: '#aaa', letterSpacing: '0.14em', marginTop: 4 }}>YEARS</div>
              </div>
              <div style={{ width: 1, height: 40, background: '#e0e0e0', flexShrink: 0 }} />
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-archivo-black), "Archivo Black", sans-serif', fontWeight: 900, fontSize: 'clamp(22px, 3vw, 48px)', color: '#FB4415', lineHeight: 1 }}>3</div>
                <div style={{ fontFamily: 'var(--font-archivo), "Archivo", sans-serif', fontWeight: 700, fontSize: 10, color: '#aaa', letterSpacing: '0.14em', marginTop: 4 }}>SERVICES</div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ── TRUSTED BY ── */}
      <div style={{ background: '#fff', paddingTop: 8 }}>
        <p style={{
          padding: '0 clamp(20px, 4vw, 48px) 20px', margin: 0,
          fontFamily: 'var(--font-archivo), "Archivo", sans-serif',
          fontWeight: 700, fontSize: 13,
          color: '#111', letterSpacing: '0.08em',
        }}>
          ( TRUSTED BY )
        </p>

        <div style={{ background: '#FB4415', overflow: 'hidden' }}>
          {/* Row 1 — scrolls left */}
          <div style={{
            display: 'flex', gap: 'clamp(32px, 5vw, 72px)', padding: 'clamp(16px, 2.5vw, 26px) 0',
            width: 'max-content',
            animation: 'h2-marquee 22s linear infinite',
            willChange: 'transform',
          }}>
            {[...Array(3)].flatMap((_, rep) =>
              MARQUEE_ITEMS.map((name, i) => (
                <span key={`r1-${rep}-${name}-${i}`} style={{
                  fontFamily: 'var(--font-archivo-black), "Archivo Black", sans-serif',
                  fontWeight: 900,
                  fontSize: 'clamp(18px, 2.8vw, 34px)',
                  letterSpacing: '-0.02em',
                  color: '#fff', whiteSpace: 'nowrap',
                }}>
                  {name}
                </span>
              ))
            )}
          </div>

          {/* Row 2 — scrolls right */}
          <div style={{
            display: 'flex', gap: 'clamp(28px, 4vw, 56px)', padding: 'clamp(16px, 2.5vw, 26px) 0',
            width: 'max-content',
            animation: 'h2-marquee 18s linear infinite reverse',
            willChange: 'transform',
          }}>
            {[...Array(3)].flatMap((_, rep) =>
              [...MARQUEE_ITEMS].reverse().map((name, i) => (
                <span key={`r2-${rep}-${name}-${i}`} style={{
                  fontFamily: 'var(--font-archivo-black), "Archivo Black", sans-serif',
                  fontWeight: 900,
                  fontSize: 'clamp(18px, 2.8vw, 34px)',
                  letterSpacing: '-0.02em',
                  color: 'rgba(255,255,255,0.65)', whiteSpace: 'nowrap',
                }}>
                  {name}
                </span>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}
