'use client';
import { useEffect, useRef, useState } from 'react';

const PARALLAX = [
  { mouse:  0.028, scroll: -0.09 },
  { mouse: -0.040, scroll: -0.16 },
  { mouse:  0.022, scroll: -0.07 },
  { mouse: -0.018, scroll: -0.20 },
  { mouse:  0.045, scroll: -0.12 },
  { mouse: -0.030, scroll: -0.14 },
  { mouse:  0.008, scroll: -0.04 },
];

const IMAGE_BLOCKS = [
  { id: 'r4',  left: 0,    top: 88,  width: 210, height: 155, circle: false,
    gradient: 'linear-gradient(145deg,#1838a0 0%,#3a70d8 45%,#d86828 100%)',               delay: '0s',    dur: '4.2s' },
  { id: 'r17', left: 530,  top: 110, width: 210, height: 148, circle: false,
    gradient: 'linear-gradient(175deg,#081650 0%,#1848c0 55%,#2878e0 100%)',               delay: '-1.8s', dur: '5.1s' },
  { id: 'r1',  left: 1100, top: 82,  width: 240, height: 168, circle: false,
    gradient: 'linear-gradient(140deg,#062224 0%,#097068 40%,#0e92b4 75%,#1e5ab8 100%)',  delay: '-3.1s', dur: '3.9s' },
  { id: 'e15', left: -55,  top: 360, width: 165, height: 165, circle: true,
    gradient: 'radial-gradient(circle,#c6e878 0%,#42ac3e 50%,#288432 100%)',               delay: '-0.6s', dur: '4.7s' },
  { id: 'r2',  left: 55,   top: 530, width: 155, height: 215, circle: false,
    gradient: 'linear-gradient(140deg,#560e2c 0%,#be3e5e 40%,#e28162 80%,#9e1c2e 100%)', delay: '-2.4s', dur: '5.3s' },
  { id: 'r15', left: 1120, top: 600, width: 168, height: 218, circle: false,
    gradient: 'linear-gradient(178deg,#076060 0%,#17aea0 30%,#de8e2e 62%,#ae2eae 100%)',  delay: '-1.2s', dur: '4.4s' },
  { id: 'e14', left: 1210, top: 350, width: 290, height: 290, circle: true,
    gradient: 'radial-gradient(circle,#ced8d4 0%,#7e8ca4 40%,#3e4656 75%,#1a2228 100%)', delay: '-0.9s', dur: '4.8s' },
];

function ImageBlock({ width, height, circle, gradient, delay, dur }: {
  width: number; height: number; circle: boolean; gradient: string; delay: string; dur: string;
}) {
  return (
    <div style={{
      width, height,
      borderRadius: circle ? '50%' : 6,
      overflow: 'hidden', position: 'relative',
      background: gradient,
      boxShadow: '0 6px 32px rgba(0,0,0,0.15)',
      animation: `hero-float ${dur} ease-in-out ${delay} infinite`,
      willChange: 'transform',
    }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 38% 32%, transparent 30%, rgba(0,0,0,0.30) 100%)' }} />
    </div>
  );
}

const NAV_LINKS = ['WORK', 'SERVICES', 'ABOUT', "Let's Talk!"] as const;

// ─────────────────────────────────────────────────────────────────────────────
// Shared header — used by both desktop and mobile layouts
// ─────────────────────────────────────────────────────────────────────────────
function Header({ isMobile, menuOpen, setMenuOpen, hoveredNav, setHoveredNav }: {
  isMobile: boolean;
  menuOpen: boolean;
  setMenuOpen: (v: boolean | ((p: boolean) => boolean)) => void;
  hoveredNav: string | null;
  setHoveredNav: (v: string | null) => void;
}) {
  return (
    <header style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 30 }}>
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: 'clamp(10px, 1.5vh, 16px) clamp(16px, 3vw, 38px)',
      }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <span style={{
            fontFamily: 'var(--font-syne), Syne, sans-serif',
            fontWeight: 700, fontSize: 'clamp(30px, 3.5vw, 48px)',
            lineHeight: 1.05, letterSpacing: '-1.5px', color: '#070000',
          }}>B</span>
          <div style={{ position: 'relative', width: 26, height: 26 }}>
            <svg width={26} height={26} viewBox="0 0 30 30" fill="none">
              <line x1="15" y1="2"  x2="15" y2="28" stroke="#070000" strokeWidth="3" strokeLinecap="round"/>
              <line x1="2"  y1="15" x2="28" y2="15" stroke="#070000" strokeWidth="3" strokeLinecap="round"/>
              <line x1="5"  y1="5"  x2="25" y2="25" stroke="#070000" strokeWidth="3" strokeLinecap="round"/>
              <line x1="25" y1="5"  x2="5"  y2="25" stroke="#070000" strokeWidth="3" strokeLinecap="round"/>
              <circle cx="15" cy="15" r="5" fill="#FB4415"/>
            </svg>
            <div style={{ position: 'absolute', bottom: -3, left: 3, width: 14, height: 2, background: '#FB4415', borderRadius: 1 }} />
          </div>
        </div>

        {/* Desktop nav */}
        {!isMobile && (
          <nav style={{
            display: 'flex', alignItems: 'center',
            gap: 'clamp(12px, 1.8vw, 20px)',
            fontFamily: 'var(--font-archivo), "Archivo", sans-serif',
            fontWeight: 700, fontSize: 'clamp(13px, 1.2vw, 16px)', lineHeight: '170%',
          }}>
            {NAV_LINKS.map(link => (
              <a key={link} href="#"
                onMouseEnter={() => setHoveredNav(link)}
                onMouseLeave={() => setHoveredNav(null)}
                style={{ textDecoration: 'none', color: hoveredNav === link ? '#FB4415' : '#000', transition: 'color 0.2s ease' }}
              >{link}</a>
            ))}
          </nav>
        )}

        {/* Hamburger */}
        {isMobile && (
          <button onClick={() => setMenuOpen(v => !v)}
            style={{ background: 'none', border: 'none', padding: 8, lineHeight: 0, cursor: 'pointer' }}>
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
              {menuOpen ? (
                <>
                  <line x1={4}  y1={4}  x2={20} y2={20} stroke="#000" strokeWidth={2.5} strokeLinecap="round"/>
                  <line x1={20} y1={4}  x2={4}  y2={20} stroke="#000" strokeWidth={2.5} strokeLinecap="round"/>
                </>
              ) : (
                <>
                  <line x1={3} y1={6.5}  x2={21} y2={6.5}  stroke="#000" strokeWidth={2} strokeLinecap="round"/>
                  <line x1={3} y1={12}   x2={21} y2={12}   stroke="#000" strokeWidth={2} strokeLinecap="round"/>
                  <line x1={3} y1={17.5} x2={21} y2={17.5} stroke="#000" strokeWidth={2} strokeLinecap="round"/>
                </>
              )}
            </svg>
          </button>
        )}
      </div>

      {/* HR */}
      <div style={{ margin: '0 clamp(16px, 6%, 91px)', height: 2, background: '#000' }} />

      {/* Mobile dropdown */}
      {isMobile && menuOpen && (
        <nav style={{
          background: '#fff',
          padding: '20px clamp(16px, 6%, 40px)',
          display: 'flex', flexDirection: 'column', gap: 16,
          borderBottom: '1px solid #e5e5e5',
        }}>
          {NAV_LINKS.map(link => (
            <a key={link} href="#" onClick={() => setMenuOpen(false)}
              style={{
                textDecoration: 'none', color: '#000',
                fontFamily: 'var(--font-archivo), "Archivo", sans-serif',
                fontWeight: 700, fontSize: 20, lineHeight: '170%',
              }}>{link}</a>
          ))}
        </nav>
      )}
    </header>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Main component
// ─────────────────────────────────────────────────────────────────────────────
export default function HeroSection() {
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const [menuOpen,   setMenuOpen]   = useState(false);
  const [isMobile,   setIsMobile]   = useState(false);

  const stageRef     = useRef<HTMLDivElement>(null);
  const canvasRef    = useRef<HTMLDivElement>(null);
  const parallaxRefs = useRef<(HTMLDivElement | null)[]>(Array(IMAGE_BLOCKS.length).fill(null));
  const rafRef       = useRef<number>(0);
  const mouseTarget  = useRef({ x: 0, y: 0 });
  const mouseCurrent = useRef({ x: 0, y: 0 });
  const scrollY      = useRef(0);

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 640);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  // Scale canvas to viewport width (desktop only)
  useEffect(() => {
    const fit = () => {
      if (!canvasRef.current) return;
      const scale = window.innerWidth / 1440;
      canvasRef.current.style.transform = `scale(${scale})`;
    };
    window.addEventListener('resize', fit);
    fit();
    return () => window.removeEventListener('resize', fit);
  }, []);

  // Parallax (desktop only — mobile has no mouse and simpler layout)
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const onMouseMove = (e: MouseEvent) => {
      const r = stage.getBoundingClientRect();
      mouseTarget.current.x = e.clientX - (r.left + r.width  / 2);
      mouseTarget.current.y = e.clientY - (r.top  + r.height / 2);
    };
    const onScroll = () => { scrollY.current = window.scrollY; };
    const tick = () => {
      mouseCurrent.current.x += (mouseTarget.current.x - mouseCurrent.current.x) * 0.07;
      mouseCurrent.current.y += (mouseTarget.current.y - mouseCurrent.current.y) * 0.07;
      parallaxRefs.current.forEach((el, i) => {
        if (!el) return;
        const { mouse, scroll } = PARALLAX[i];
        el.style.transform = `translate(${mouseCurrent.current.x * mouse}px,${mouseCurrent.current.y * mouse + scrollY.current * scroll}px)`;
      });
      rafRef.current = requestAnimationFrame(tick);
    };
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('scroll', onScroll, { passive: true });
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div ref={stageRef} style={{ position: 'relative', width: '100%', height: isMobile ? 'auto' : '100vh', overflow: 'hidden', background: '#fff' }}>

      {/* ── DESKTOP CANVAS (>= 640px) ── */}
      {!isMobile && (
        <div
          ref={canvasRef}
          style={{
            position: 'absolute', top: 0, left: 0,
            width: 1440, height: 1083,
            transformOrigin: 'top left',
            background: '#fff',
          }}
        >
          {IMAGE_BLOCKS.map((b, i) => (
            <div key={b.id} style={{ position: 'absolute', left: b.left, top: b.top, zIndex: 10 }}>
              <div ref={el => { parallaxRefs.current[i] = el; }} style={{ willChange: 'transform' }}>
                <ImageBlock width={b.width} height={b.height} circle={b.circle} gradient={b.gradient} delay={b.delay} dur={b.dur} />
              </div>
            </div>
          ))}

          <div style={{
            position: 'absolute', left: '50%', top: 340,
            transform: 'translateX(-50%)',
            zIndex: 20,
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, whiteSpace: 'nowrap' }}>
              <span style={{ fontFamily: 'var(--font-archivo), "Archivo", sans-serif', fontWeight: 400, fontSize: 62, lineHeight: '105%', color: '#000' }}>
                One Connected System
              </span>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <div style={{ width: 2, height: 52, background: '#FB4415' }} />
                <span style={{ fontFamily: 'var(--font-archivo)', fontWeight: 500, fontSize: 30, color: '#FB4415' }}>End</span>
                <svg width={28} height={14} viewBox="0 0 28 14" fill="none">
                  <line x1={1} y1={7} x2={22} y2={7} stroke="#FB4415" strokeWidth={3} strokeLinecap="round"/>
                  <polyline points="15,2 23,7 15,12" stroke="#FB4415" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                </svg>
                <span style={{ fontFamily: 'var(--font-archivo)', fontWeight: 500, fontSize: 30, color: '#FB4415' }}>End</span>
                <div style={{ width: 2, height: 52, background: '#FB4415' }} />
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 14, whiteSpace: 'nowrap' }}>
              <span style={{ fontFamily: 'var(--font-archivo)', fontWeight: 300, fontSize: 92, lineHeight: '105%' }}>
                <span style={{ color: '#202020' }}>FOR </span>
                <span style={{ color: '#FB4415' }}>GROWTH</span>
              </span>
              <svg width={54} height={54} viewBox="0 0 54 54" fill="none" style={{ flexShrink: 0 }}>
                <circle cx={27} cy={27} r={24} stroke="#FB4415" strokeWidth={3.5}/>
                <line x1={27} y1={39} x2={27} y2={14} stroke="#FB4415" strokeWidth={3.5} strokeLinecap="round"/>
                <polyline points="18,23 27,14 36,23" stroke="#FB4415" strokeWidth={3.5} strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
            </div>

            <div style={{
              display: 'flex', alignItems: 'center', gap: 14,
              fontFamily: 'var(--font-archivo)', fontWeight: 400, fontSize: 28, letterSpacing: '8px', color: '#FB4415', marginTop: 4,
            }}>
              <span>Branding</span>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#FB4415', flexShrink: 0 }} />
              <span>Tech</span>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#FB4415', flexShrink: 0 }} />
              <span>Video</span>
            </div>

            <p style={{ fontSize: 17, lineHeight: 1.5, color: '#333', fontFamily: 'var(--font-archivo)', fontWeight: 400, margin: 0, textAlign: 'center' }}>
              For Business doing well or just starting out
            </p>
          </div>
        </div>
      )}

      {/* ── MOBILE HERO (< 640px) — auto-height, content-driven ── */}
      {isMobile && (
        <div style={{
          position: 'relative',
          // top padding = header height (~70px) + top accent block height (~58px) + gap (20px)
          paddingTop: 148,
          // bottom padding — side blocks need no extra height, so just breathing room
          paddingBottom: 40,
          paddingLeft: 32, paddingRight: 32,
          background: '#fff',
          overflow: 'hidden',
          zIndex: 15,
        }}>

          {/* ── Accent blocks ──
               Top pair: flush with edges just below the header.
               Side pair: peek in from left/right edges BESIDE the content —
               no extra height required, so paddingBottom can stay small.        ── */}

          {/* Top-left */}
          <div style={{
            position: 'absolute', top: 78, left: 0,
            width: 82, height: 58, borderRadius: '0 8px 8px 0',
            background: 'linear-gradient(145deg,#1838a0,#3a70d8,#d86828)',
            animation: 'hero-float 4.2s ease-in-out 0s infinite',
          }} />

          {/* Top-right */}
          <div style={{
            position: 'absolute', top: 81, right: 0,
            width: 72, height: 52, borderRadius: '8px 0 0 8px',
            background: 'linear-gradient(140deg,#062224,#097068,#0e92b4,#1e5ab8)',
            animation: 'hero-float 3.9s ease-in-out -3.1s infinite',
          }} />

          {/* Left side — tall block, partially off-screen, vertically centred with content */}
          <div style={{
            position: 'absolute', left: -22, top: 166,
            width: 66, height: 140, borderRadius: '0 10px 10px 0',
            background: 'linear-gradient(140deg,#560e2c,#be3e5e,#e28162,#9e1c2e)',
            animation: 'hero-float 5.3s ease-in-out -2.4s infinite',
          }} />

          {/* Right side — circle, partially off-screen, vertically centred with content */}
          <div style={{
            position: 'absolute', right: -50, top: 176,
            width: 114, height: 114, borderRadius: '50%',
            background: 'radial-gradient(circle,#ced8d4,#7e8ca4,#3e4656,#1a2228)',
            animation: 'hero-float 4.8s ease-in-out -0.9s infinite',
          }} />

          {/* ── Text content — sits in the padded centre zone ── */}
          <div style={{ position: 'relative', zIndex: 1, width: '100%', textAlign: 'center' }}>

            <p style={{
              fontFamily: 'var(--font-archivo), "Archivo", sans-serif',
              fontWeight: 400, fontSize: 'clamp(18px, 4.8vw, 26px)',
              color: '#444', lineHeight: '120%', margin: '0 0 12px',
            }}>
              One Connected System
            </p>

            {/* End → End badge */}
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              gap: 6, marginBottom: 18,
            }}>
              <div style={{ width: 2, height: 22, background: '#FB4415' }} />
              <span style={{ fontFamily: 'var(--font-archivo)', fontWeight: 500, fontSize: 15, color: '#FB4415' }}>End</span>
              <svg width={18} height={9} viewBox="0 0 28 14" fill="none">
                <line x1={1} y1={7} x2={22} y2={7} stroke="#FB4415" strokeWidth={3} strokeLinecap="round"/>
                <polyline points="15,2 23,7 15,12" stroke="#FB4415" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
              <span style={{ fontFamily: 'var(--font-archivo)', fontWeight: 500, fontSize: 15, color: '#FB4415' }}>End</span>
              <div style={{ width: 2, height: 22, background: '#FB4415' }} />
            </div>

            {/* FOR GROWTH — single line */}
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              gap: 10, marginBottom: 18, whiteSpace: 'nowrap',
            }}>
              <span style={{
                fontFamily: 'var(--font-archivo), "Archivo", sans-serif',
                fontWeight: 300, fontSize: 'clamp(40px, 11vw, 92px)',
                lineHeight: '100%',
              }}>
                <span style={{ color: '#202020' }}>FOR </span>
                <span style={{ color: '#FB4415' }}>GROWTH</span>
              </span>
              <svg width={36} height={36} viewBox="0 0 54 54" fill="none" style={{ flexShrink: 0 }}>
                <circle cx={27} cy={27} r={24} stroke="#FB4415" strokeWidth={3.5}/>
                <line x1={27} y1={39} x2={27} y2={14} stroke="#FB4415" strokeWidth={3.5} strokeLinecap="round"/>
                <polyline points="18,23 27,14 36,23" stroke="#FB4415" strokeWidth={3.5} strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
            </div>

            {/* Branding · Tech · Video */}
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
              fontFamily: 'var(--font-archivo)', fontWeight: 400,
              fontSize: 'clamp(12px, 3.4vw, 18px)', letterSpacing: '4px', color: '#FB4415',
              marginBottom: 14,
            }}>
              <span>Branding</span>
              <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#FB4415', flexShrink: 0 }} />
              <span>Tech</span>
              <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#FB4415', flexShrink: 0 }} />
              <span>Video</span>
            </div>

            <p style={{
              fontSize: 'clamp(12px, 3.2vw, 15px)', lineHeight: 1.6, color: '#777',
              fontFamily: 'var(--font-archivo)', fontWeight: 400, margin: 0,
            }}>
              For Business doing well or just starting out
            </p>

          </div>
        </div>
      )}

      {/* ── HEADER — always at stage level ── */}
      <Header
        isMobile={isMobile}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        hoveredNav={hoveredNav}
        setHoveredNav={setHoveredNav}
      />

    </div>
  );
}
