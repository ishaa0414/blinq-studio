"use client";

import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";

export default function CTASection() {
  const [primaryHovered, setPrimaryHovered] = useState(false);
  const [secondaryHovered, setSecondaryHovered] = useState(false);
  const [email, setEmail] = useState("");
  const [inputFocused, setInputFocused] = useState(false);
  const { ref, visible } = useReveal(0.1);

  return (
    <section
      className="relative overflow-hidden px-12 md:px-24 py-32 text-center"
      style={{
        background: "linear-gradient(to bottom, #0D0B08, #080808)",
        borderTop: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      {/* Decorative spinning circles */}
      <div
        className="absolute rounded-full border pointer-events-none"
        style={{
          width: "700px",
          height: "700px",
          top: "calc(50% - 350px)",
          left: "calc(50% - 350px)",
          borderColor: "rgba(200,169,110,0.06)",
          animation: "spin-slow 40s linear infinite",
        }}
      />
      <div
        className="absolute rounded-full border pointer-events-none"
        style={{
          width: "500px",
          height: "500px",
          top: "calc(50% - 250px)",
          left: "calc(50% - 250px)",
          borderColor: "rgba(200,169,110,0.06)",
          animation: "spin-slow 25s linear infinite reverse",
        }}
      />

      {/* Centered glow blob */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: "600px",
          height: "600px",
          top: "calc(50% - 300px)",
          left: "calc(50% - 300px)",
          background: "#C8A96E",
          opacity: 0.06,
          filter: "blur(160px)",
        }}
      />

      <div
        ref={ref}
        className="relative z-10"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0px)" : "translateY(30px)",
          transition: "opacity 0.8s ease, transform 0.8s ease",
        }}
      >
        {/* Eyebrow */}
        <p
          className="uppercase tracking-[0.25em] mb-8"
          style={{ fontFamily: "var(--font-syne), sans-serif", fontSize: "10px", color: "#C8A96E" }}
        >
          Let&apos;s Collaborate
        </p>

        {/* Giant heading */}
        <h2
          style={{
            fontFamily: "var(--font-display), serif",
            fontSize: "clamp(64px, 9vw, 140px)",
            fontWeight: 300,
            color: "#F0EDE6",
            lineHeight: 0.95,
          }}
        >
          <span className="block">Have an idea?</span>
          <span className="block">Let&apos;s make it</span>
          {/* "real." gets gold shimmer */}
          <em className="shimmer-text">real.</em>
        </h2>

        {/* Subtext */}
        <p
          className="mt-6 mx-auto"
          style={{
            fontFamily: "var(--font-syne), sans-serif",
            fontSize: "0.875rem",
            color: "rgba(240,237,230,0.45)",
            lineHeight: 1.8,
            maxWidth: "28rem",
          }}
        >
          Whether you&apos;re a startup launching your first product or an
          established brand ready for a refresh — we&apos;re ready to build
          something remarkable together.
        </p>

        {/* Email input */}
        <div className="mt-10 flex justify-center">
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => setInputFocused(true)}
            onBlur={() => setInputFocused(false)}
            className="w-80 bg-transparent pb-2 text-sm outline-none"
            style={{
              fontFamily: "var(--font-syne), sans-serif",
              color: "#F0EDE6",
              borderBottom: `1px solid ${inputFocused ? "#C8A96E" : "rgba(255,255,255,0.15)"}`,
              transition: "border-color 0.3s ease",
              textAlign: "center",
            }}
          />
        </div>

        {/* Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            className="px-10 py-4 uppercase tracking-widest text-xs font-semibold transition-all duration-300"
            style={{
              fontFamily: "var(--font-syne), sans-serif",
              background: primaryHovered ? "#E8D5B0" : "#C8A96E",
              color: "#080808",
              willChange: "transform",
            }}
            onMouseEnter={() => setPrimaryHovered(true)}
            onMouseLeave={() => setPrimaryHovered(false)}
          >
            Start a Project
          </button>

          <button
            className="px-10 py-4 uppercase tracking-widest text-xs transition-all duration-300 border"
            style={{
              fontFamily: "var(--font-syne), sans-serif",
              borderColor: secondaryHovered ? "#C8A96E" : "rgba(255,255,255,0.15)",
              color: secondaryHovered ? "#C8A96E" : "#F0EDE6",
              background: "transparent",
            }}
            onMouseEnter={() => setSecondaryHovered(true)}
            onMouseLeave={() => setSecondaryHovered(false)}
          >
            View Our Work
          </button>
        </div>
      </div>
    </section>
  );
}
