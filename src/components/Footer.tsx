"use client";

import { useState } from "react";

const navLinks = ["Work", "Services", "Studio", "Process", "Contact"];
const serviceLinks = ["Web Design", "Branding", "3D & Motion", "UI/UX", "Strategy"];
const socialLinks = ["Twitter / X", "Instagram", "LinkedIn", "Dribbble"];

function FooterLink({ label }: { label: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <li>
      <a
        href="#"
        className="text-xs transition-all duration-200"
        style={{
          fontFamily: "var(--font-syne), sans-serif",
          color: hovered ? "#C8A96E" : "rgba(240,237,230,0.45)",
          letterSpacing: hovered ? "0.05em" : "0em",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {label}
      </a>
    </li>
  );
}

export default function Footer() {
  const [dotHovered, setDotHovered] = useState(false);
  const [topHovered, setTopHovered] = useState(false);

  return (
    <footer
      className="relative px-12 md:px-24 py-16"
      style={{
        background: "#050505",
        borderTop: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      {/* Gold gradient line at top */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: "linear-gradient(to right, transparent, #C8A96E, transparent)",
          opacity: 0.3,
        }}
      />

      {/* Top row — 4 columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Col 1 — Brand */}
        <div>
          <div
            className="text-lg tracking-wider mb-4 select-none"
            style={{ fontFamily: "var(--font-syne), sans-serif", fontWeight: 600 }}
          >
            <span style={{ color: "#F0EDE6" }}>BLINQ</span>
            <span
              className="inline-block transition-transform duration-300"
              style={{
                color: "#C8A96E",
                transform: dotHovered ? "scale(1.5)" : "scale(1)",
              }}
              onMouseEnter={() => setDotHovered(true)}
              onMouseLeave={() => setDotHovered(false)}
            >
              .
            </span>
          </div>
          <p
            className="mb-6 leading-relaxed"
            style={{
              fontFamily: "var(--font-syne), sans-serif",
              fontSize: "0.75rem",
              color: "rgba(240,237,230,0.35)",
            }}
          >
            Crafting digital excellence since 2017.
          </p>
          <ul className="flex flex-col gap-2">
            {socialLinks.map((s) => (
              <FooterLink key={s} label={s} />
            ))}
          </ul>
        </div>

        {/* Col 2 — Navigation */}
        <div>
          <p
            className="uppercase tracking-widest mb-4"
            style={{
              fontFamily: "var(--font-syne), sans-serif",
              fontSize: "10px",
              color: "rgba(240,237,230,0.35)",
            }}
          >
            Navigation
          </p>
          <ul className="flex flex-col gap-2">
            {navLinks.map((l) => <FooterLink key={l} label={l} />)}
          </ul>
        </div>

        {/* Col 3 — Services */}
        <div>
          <p
            className="uppercase tracking-widest mb-4"
            style={{
              fontFamily: "var(--font-syne), sans-serif",
              fontSize: "10px",
              color: "rgba(240,237,230,0.35)",
            }}
          >
            Services
          </p>
          <ul className="flex flex-col gap-2">
            {serviceLinks.map((l) => <FooterLink key={l} label={l} />)}
          </ul>
        </div>

        {/* Col 4 — Contact */}
        <div>
          <p
            className="uppercase tracking-widest mb-4"
            style={{
              fontFamily: "var(--font-syne), sans-serif",
              fontSize: "10px",
              color: "rgba(240,237,230,0.35)",
            }}
          >
            Contact
          </p>
          <a
            href="mailto:hello@blinq.studio"
            className="block mb-6 text-xs transition-colors duration-200"
            style={{ fontFamily: "var(--font-syne), sans-serif", color: "rgba(240,237,230,0.55)" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#C8A96E")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(240,237,230,0.55)")}
          >
            hello@blinq.studio
          </a>
          <p
            className="uppercase tracking-widest mb-2"
            style={{
              fontFamily: "var(--font-syne), sans-serif",
              fontSize: "10px",
              color: "rgba(240,237,230,0.25)",
            }}
          >
            Based in
          </p>
          <p
            style={{
              fontFamily: "var(--font-syne), sans-serif",
              fontSize: "0.75rem",
              color: "rgba(240,237,230,0.45)",
              lineHeight: 1.8,
            }}
          >
            New York / London / Remote
          </p>
        </div>
      </div>

      {/* Bottom row */}
      <div
        className="mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4"
        style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
      >
        <p
          style={{
            fontFamily: "var(--font-syne), sans-serif",
            fontSize: "0.75rem",
            color: "rgba(240,237,230,0.3)",
          }}
        >
          ©2026 Blinq Studio. All rights reserved.
        </p>
        <p
          style={{
            fontFamily: "var(--font-syne), sans-serif",
            fontSize: "0.75rem",
            color: "rgba(240,237,230,0.3)",
          }}
        >
          Designed &amp; built with Claude Code
        </p>
      </div>

      {/* Back to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="absolute bottom-8 right-12 md:right-24 w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300"
        style={{
          borderColor: topHovered ? "#C8A96E" : "rgba(255,255,255,0.1)",
          color: topHovered ? "#C8A96E" : "rgba(240,237,230,0.4)",
          transform: topHovered ? "translateY(-2px) rotate(-10deg)" : "translateY(0) rotate(0deg)",
          fontFamily: "var(--font-syne), sans-serif",
          fontSize: "1rem",
        }}
        onMouseEnter={() => setTopHovered(true)}
        onMouseLeave={() => setTopHovered(false)}
        aria-label="Back to top"
      >
        ↑
      </button>
    </footer>
  );
}
