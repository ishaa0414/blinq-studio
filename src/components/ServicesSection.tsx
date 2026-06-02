"use client";

import { useState } from "react";

const services = [
  { num: "01", name: "Web Design & Development", desc: "Pixel-perfect websites built for performance, conversion, and lasting impressions.", tags: ["Next.js", "Webflow", "Three.js"] },
  { num: "02", name: "Brand Identity", desc: "Strategic visual identities that communicate who you are before you say a word.", tags: ["Logo", "Typography", "Systems"] },
  { num: "03", name: "3D & Motion", desc: "Immersive 3D visuals and motion design that stop the scroll and start conversations.", tags: ["Blender", "Three.js", "GSAP"] },
  { num: "04", name: "UI/UX Design", desc: "Intuitive, beautiful product interfaces grounded in real user research and behavior.", tags: ["Figma", "Prototyping", "Research"] },
  { num: "05", name: "Digital Strategy", desc: "Positioning, content strategy, and go-to-market planning for digital-first brands.", tags: ["SEO", "Analytics", "CRO"] },
  { num: "06", name: "Creative Direction", desc: "End-to-end creative leadership for campaigns, launches, and brand moments.", tags: ["Art Direction", "Concepting", "Shoots"] },
];

const TICKER_TEXT = "WEB DESIGN · BRANDING · 3D & MOTION · UI/UX · STRATEGY · CREATIVE DIRECTION · ";

function ServiceCard({ service }: { service: (typeof services)[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="p-10 flex flex-col justify-between relative overflow-hidden transition-all duration-500"
      style={{
        background: hovered
          ? "radial-gradient(circle at 0% 0%, rgba(200,169,110,0.05) 0%, #080808 60%)"
          : "#080808",
        minHeight: "280px",
        cursor: "pointer",
        boxShadow: hovered
          ? "inset 0 0 0 1px rgba(200,169,110,0.2)"
          : "inset 0 0 0 1px transparent",
        transition: "background 0.5s ease, box-shadow 0.3s ease",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Large ghost number — background */}
      <div
        className="absolute bottom-4 right-4 pointer-events-none select-none leading-none transition-colors duration-500"
        aria-hidden="true"
        style={{
          fontFamily: "var(--font-display), serif",
          fontSize: "120px",
          fontWeight: 700,
          color: hovered ? "rgba(200,169,110,0.06)" : "rgba(255,255,255,0.03)",
          lineHeight: 1,
        }}
      >
        {service.num}
      </div>

      {/* Card top */}
      <div className="relative z-10">
        <p
          className="tracking-widest mb-6"
          style={{
            fontFamily: "var(--font-syne), sans-serif",
            fontSize: "10px",
            color: "rgba(240,237,230,0.25)",
          }}
        >
          {service.num}
        </p>

        {/* Animated gold line */}
        <div
          className="h-px mb-6 transition-all duration-500"
          style={{ width: hovered ? "4rem" : "2rem", background: "#C8A96E" }}
        />

        <h3
          className="leading-tight mb-3 transition-all duration-400"
          style={{
            fontFamily: "var(--font-display), serif",
            fontSize: "1.875rem",
            fontWeight: 300,
            color: "#F0EDE6",
            letterSpacing: hovered ? "0.02em" : "0em",
            transition: "letter-spacing 0.4s ease",
          }}
        >
          {service.name}
        </h3>

        <p
          style={{
            fontFamily: "var(--font-syne), sans-serif",
            fontSize: "0.75rem",
            color: "rgba(240,237,230,0.4)",
            lineHeight: 1.8,
            maxWidth: "240px",
          }}
        >
          {service.desc}
        </p>
      </div>

      {/* Card bottom */}
      <div className="relative z-10 flex justify-between items-end mt-8">
        <div className="flex gap-2 flex-wrap">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="tracking-wider rounded-full px-3 py-1"
              style={{
                fontFamily: "var(--font-syne), sans-serif",
                fontSize: "9px",
                color: "rgba(240,237,230,0.4)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
        <span
          className="text-lg transition-all duration-300"
          style={{
            fontFamily: "var(--font-syne), sans-serif",
            color: "#C8A96E",
            opacity: hovered ? 1 : 0,
          }}
        >
          ↗
        </span>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  const [ctaHovered, setCtaHovered] = useState(false);

  return (
    <section
      className="relative overflow-hidden px-12 md:px-24 py-24"
      style={{
        background: "#080808",
        borderTop: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      {/* Background glow blob */}
      <div
        className="absolute -top-40 -right-40 rounded-full pointer-events-none"
        style={{ width: "500px", height: "500px", background: "#C8A96E", opacity: 0.04, filter: "blur(140px)" }}
      />

      {/* Section header */}
      <div className="relative z-10 flex justify-between items-end mb-8">
        <div>
          <p
            className="uppercase tracking-[0.25em] mb-4"
            style={{ fontFamily: "var(--font-syne), sans-serif", fontSize: "10px", color: "#C8A96E" }}
          >
            What We Do
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display), serif",
              fontSize: "clamp(48px, 6vw, 88px)",
              fontWeight: 300,
              color: "#F0EDE6",
              lineHeight: 1,
            }}
          >
            <span className="block">Our</span>
            <em style={{ color: "#C8A96E" }}>Services</em>
          </h2>
        </div>
        <p
          className="text-right hidden md:block"
          style={{
            fontFamily: "var(--font-syne), sans-serif",
            fontSize: "0.875rem",
            color: "rgba(240,237,230,0.45)",
            lineHeight: 1.8,
            maxWidth: "20rem",
          }}
        >
          From strategy to execution — we handle every layer of the digital
          stack with precision and craft.
        </p>
      </div>

      {/* Services ticker */}
      <div className="relative z-10 overflow-hidden mb-12">
        <div className="marquee-track flex w-fit">
          {[...Array(4)].map((_, i) => (
            <span
              key={i}
              className="whitespace-nowrap"
              style={{
                fontFamily: "var(--font-syne), sans-serif",
                fontSize: "10px",
                letterSpacing: "0.3em",
                color: "rgba(240,237,230,0.1)",
                paddingRight: "1rem",
              }}
            >
              {TICKER_TEXT}
            </span>
          ))}
        </div>
      </div>

      {/* Services grid */}
      <div
        className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px"
        style={{ background: "rgba(255,255,255,0.07)" }}
      >
        {services.map((service) => (
          <ServiceCard key={service.num} service={service} />
        ))}
      </div>

      {/* Bottom CTA */}
      <div
        className="relative z-10 mt-24 pt-12 flex flex-col md:flex-row justify-between items-center gap-8"
        style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
      >
        <p
          style={{
            fontFamily: "var(--font-display), serif",
            fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
            fontWeight: 300,
            color: "#F0EDE6",
            fontStyle: "italic",
          }}
        >
          Ready to build something remarkable?
        </p>
        <button
          className="px-8 py-4 uppercase tracking-[0.2em] text-xs transition-all duration-300 border shrink-0"
          style={{
            fontFamily: "var(--font-syne), sans-serif",
            borderColor: "#C8A96E",
            color: ctaHovered ? "#080808" : "#C8A96E",
            background: ctaHovered ? "#C8A96E" : "transparent",
          }}
          onMouseEnter={() => setCtaHovered(true)}
          onMouseLeave={() => setCtaHovered(false)}
        >
          Start a Project →
        </button>
      </div>
    </section>
  );
}
