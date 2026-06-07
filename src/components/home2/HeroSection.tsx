'use client';
import { useState } from 'react';

const NAV_LINKS = ['WORK', 'SERVICES', 'ABOUT', "Let's Talk!"] as const;

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

      <div style={{ margin: '0 clamp(16px, 6%, 91px)', height: 2, background: '#000' }} />

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

export default function HeroSection() {
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const [menuOpen,   setMenuOpen]   = useState(false);
  const [isMobile,   setIsMobile]   = useState(false);

  return (
    <div style={{ position: 'relative', width: '100%', height: isMobile ? 'auto' : '60vh', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

      {/* ── DESKTOP ── */}
      {!isMobile && (
        <div style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12,
          textAlign: 'center', marginTop: '3vh',
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

          <p style={{ fontSize: 17, lineHeight: 1.5, color: '#333', fontFamily: 'var(--font-archivo)', fontWeight: 400, margin: 0 }}>
            For Business doing well or just starting out
          </p>
        </div>
      )}

      {/* ── MOBILE ── */}
      {isMobile && (
        <div style={{
          paddingTop: 120, paddingBottom: 60,
          paddingLeft: 32, paddingRight: 32,
          textAlign: 'center',
        }}>
          <p style={{
            fontFamily: 'var(--font-archivo), "Archivo", sans-serif',
            fontWeight: 400, fontSize: 'clamp(18px, 4.8vw, 26px)',
            color: '#444', lineHeight: '120%', margin: '0 0 12px',
          }}>
            One Connected System
          </p>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, marginBottom: 18 }}>
            <div style={{ width: 2, height: 22, background: '#FB4415' }} />
            <span style={{ fontFamily: 'var(--font-archivo)', fontWeight: 500, fontSize: 15, color: '#FB4415' }}>End</span>
            <svg width={18} height={9} viewBox="0 0 28 14" fill="none">
              <line x1={1} y1={7} x2={22} y2={7} stroke="#FB4415" strokeWidth={3} strokeLinecap="round"/>
              <polyline points="15,2 23,7 15,12" stroke="#FB4415" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            </svg>
            <span style={{ fontFamily: 'var(--font-archivo)', fontWeight: 500, fontSize: 15, color: '#FB4415' }}>End</span>
            <div style={{ width: 2, height: 22, background: '#FB4415' }} />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 18, whiteSpace: 'nowrap' }}>
            <span style={{
              fontFamily: 'var(--font-archivo), "Archivo", sans-serif',
              fontWeight: 300, fontSize: 'clamp(40px, 11vw, 92px)', lineHeight: '100%',
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

          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
            fontFamily: 'var(--font-archivo)', fontWeight: 400,
            fontSize: 'clamp(12px, 3.4vw, 18px)', letterSpacing: '4px', color: '#FB4415', marginBottom: 14,
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
      )}

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
