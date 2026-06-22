'use client';
import { useState } from 'react';
import Image from 'next/image';
import logoImg from '@/app/assets/logo.png';

const navLinks = ['Work', 'Services', 'Process'];

export default function LandingNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <style>{`
        .l-nav-links { display: flex; gap: 30px; flex: 1; justify-content: center; }
        .l-nav-cta { display: inline-flex; }
        .l-hamburger { display: none; }
        .l-mobile-menu { display: none; }

        @media (max-width: 768px) {
          .l-nav-links { display: none; }
          .l-nav-cta { display: none; }
          .l-hamburger { display: flex; }
          .l-mobile-menu { display: ${menuOpen ? 'flex' : 'none'}; }
        }
      `}</style>

      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          background: 'rgba(255,255,255,0.95)',
          backdropFilter: 'blur(14px)',
          WebkitBackdropFilter: 'blur(14px)',
          borderBottom: '1px solid rgba(231,230,227,0.7)',
        }}
      >
        <div
          style={{
            padding: '0 clamp(28px, 5vw, 72px)',
            height: 72,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 32,
          }}
        >
          {/* Logo */}
          <a href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', flexShrink: 0 }}>
            <Image src={logoImg} alt="Blinq Labs" height={45} width={150} style={{ objectFit: 'contain', height: 45, width: 'auto' }} />
          </a>

          {/* Desktop nav links */}
          <nav className="l-nav-links">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                style={{
                  fontSize: 15,
                  fontWeight: 500,
                  color: '#2c2c2c',
                  textDecoration: 'none',
                  letterSpacing: '-0.01em',
                }}
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href="https://wa.me/916205851500"
            target="_blank"
            rel="noopener noreferrer"
            className="l-nav-cta"
            style={{
              alignItems: 'center',
              gap: 8,
              fontWeight: 600,
              fontSize: 15,
              borderRadius: 999,
              padding: '13px 24px',
              cursor: 'pointer',
              background: '#0c0c0c',
              color: '#fff',
              textDecoration: 'none',
              flexShrink: 0,
              letterSpacing: '-0.01em',
            }}
          >
            Book a Call
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2.5 11.5L11.5 2.5M11.5 2.5H5M11.5 2.5V9" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>

          {/* Hamburger */}
          <button
            className="l-hamburger"
            onClick={() => setMenuOpen((v) => !v)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 6,
              display: 'none',
              flexDirection: 'column',
              gap: 5,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            aria-label="Toggle menu"
          >
            <span style={{ display: 'block', width: 22, height: 2, background: '#0c0c0c', borderRadius: 2 }} />
            <span style={{ display: 'block', width: 22, height: 2, background: '#0c0c0c', borderRadius: 2 }} />
            <span style={{ display: 'block', width: 14, height: 2, background: '#0c0c0c', borderRadius: 2, alignSelf: 'flex-start' }} />
          </button>
        </div>

        {/* Mobile dropdown menu */}
        <div
          className="l-mobile-menu"
          style={{
            flexDirection: 'column',
            padding: '16px 20px 24px',
            borderTop: '1px solid #e7e6e3',
            gap: 0,
            background: '#ffffff',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              style={{
                fontSize: 16,
                fontWeight: 600,
                color: '#0c0c0c',
                textDecoration: 'none',
                padding: '13px 0',
                borderBottom: '1px solid #e7e6e3',
                letterSpacing: '-0.01em',
              }}
            >
              {link}
            </a>
          ))}
          <a
            href="https://wa.me/916205851500"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              marginTop: 20,
              fontWeight: 600,
              fontSize: 15,
              borderRadius: 999,
              padding: '13px 24px',
              cursor: 'pointer',
              background: '#0c0c0c',
              color: '#fff',
              textDecoration: 'none',
              alignSelf: 'flex-start',
            }}
          >
            Book a Call →
          </a>
        </div>
      </header>
    </>
  );
}

