"use client";

import { useEffect, useState } from "react";

const navLinks = ["Work", "Services", "Studio", "Process"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-12 md:px-24 py-6 transition-all duration-300"
      style={{
        borderBottom: "1px solid rgba(255,255,255,0.07)",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        backgroundColor: scrolled ? "rgba(8,8,8,0.85)" : "transparent",
      }}
    >
      {/* Logo */}
      <div
        className="text-lg tracking-wider select-none"
        style={{ fontFamily: "var(--font-syne), sans-serif", fontWeight: 600 }}
      >
        <span style={{ color: "#F0EDE6" }}>BLINQ</span>
        <span style={{ color: "#C8A96E" }}>.</span>
      </div>

      {/* Nav links */}
      <ul className="hidden md:flex items-center gap-10">
        {navLinks.map((link) => (
          <li key={link}>
            <a
              href="#"
              className="uppercase tracking-widest text-xs transition-colors duration-200"
              style={{
                fontFamily: "var(--font-syne), sans-serif",
                color: "rgba(240,237,230,0.6)",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = "#F0EDE6")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color =
                  "rgba(240,237,230,0.6)")
              }
            >
              {link}
            </a>
          </li>
        ))}
      </ul>

      {/* CTA button */}
      <button
        className="px-5 py-2 text-xs uppercase tracking-widest transition-all duration-200 border"
        style={{
          fontFamily: "var(--font-syne), sans-serif",
          borderColor: "#C8A96E",
          color: "#C8A96E",
          background: "transparent",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLButtonElement).style.background = "#C8A96E";
          (e.currentTarget as HTMLButtonElement).style.color = "#080808";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLButtonElement).style.background = "transparent";
          (e.currentTarget as HTMLButtonElement).style.color = "#C8A96E";
        }}
      >
        Let&apos;s Talk
      </button>
    </nav>
  );
}
