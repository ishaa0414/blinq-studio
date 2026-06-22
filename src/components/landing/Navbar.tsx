'use client';

import { useState } from 'react';

export default function Navbar() {
  const [active, setActive] = useState('Home');
  const links = ['Home', 'About Us', 'Services', 'Page', 'Support'];

  return (
    <nav
      style={{
        background: '#fff',
        borderBottom: '1px solid #f0f0f0',
        position: 'sticky',
        top: 0,
        zIndex: 50,
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 24px',
          height: 64,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <span
            style={{
              width: 8,
              height: 20,
              background: '#FF5C1A',
              borderRadius: 2,
              display: 'inline-block',
              marginRight: 4,
            }}
          />
          <span
            style={{
              fontWeight: 800,
              fontSize: 20,
              letterSpacing: 1,
              color: '#111',
              fontFamily: 'var(--font-inter), sans-serif',
            }}
          >
            RAUL
          </span>
        </div>

        {/* Nav Links */}
        <ul style={{ display: 'flex', alignItems: 'center', gap: 36, listStyle: 'none', margin: 0, padding: 0 }}>
          {links.map((link) => (
            <li key={link}>
              <button
                onClick={() => setActive(link)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: 14,
                  fontWeight: active === link ? 600 : 400,
                  color: active === link ? '#FF5C1A' : '#444',
                  fontFamily: 'inherit',
                  padding: 0,
                }}
              >
                {link}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button
          style={{
            background: '#FF5C1A',
            color: '#fff',
            border: 'none',
            borderRadius: 6,
            padding: '10px 22px',
            fontWeight: 700,
            fontSize: 13,
            letterSpacing: 0.5,
            cursor: 'pointer',
            fontFamily: 'inherit',
          }}
        >
          GET STARTED
        </button>
      </div>
    </nav>
  );
}
