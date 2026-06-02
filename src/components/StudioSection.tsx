"use client";

import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";

const stats = [
  { label: "12 Team Members" },
  { label: "4 Countries" },
  { label: "Since 2017" },
];

const PARTICLE_POSITIONS = [
  { top: "15%", left: "20%" },
  { top: "30%", left: "75%" },
  { top: "55%", left: "15%" },
  { top: "70%", left: "60%" },
  { top: "20%", left: "50%" },
  { top: "80%", left: "35%" },
  { top: "45%", left: "85%" },
  { top: "60%", left: "40%" },
];

export default function StudioSection() {
  const { ref, visible } = useReveal(0.1);
  const [hoveredPill, setHoveredPill] = useState<number | null>(null);

  return (
    <section
      className="px-12 md:px-24 py-24"
      style={{
        background: "#080808",
        borderTop: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      <div
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0px)" : "translateY(30px)",
          transition: "opacity 0.8s ease, transform 0.8s ease",
        }}
      >
        {/* Left — text */}
        <div>
          <p
            className="uppercase tracking-[0.25em] mb-4"
            style={{ fontFamily: "var(--font-syne), sans-serif", fontSize: "10px", color: "#C8A96E" }}
          >
            Who We Are
          </p>

          <h2
            className="mb-8"
            style={{
              fontFamily: "var(--font-display), serif",
              fontSize: "clamp(40px, 5vw, 72px)",
              fontWeight: 300,
              color: "#F0EDE6",
              lineHeight: 1.05,
            }}
          >
            <span className="block">A studio built</span>
            <span className="block">
              for the <em style={{ color: "#C8A96E" }}>bold</em>
            </span>
          </h2>

          <p
            className="mb-5"
            style={{
              fontFamily: "var(--font-syne), sans-serif",
              fontSize: "0.875rem",
              color: "rgba(240,237,230,0.45)",
              lineHeight: 1.8,
              opacity: visible ? 1 : 0,
              transition: "opacity 0.8s ease 0.2s",
            }}
          >
            Blinq Studio is a creative digital agency working at the
            intersection of design, technology, and storytelling. We partner
            with founders and ambitious brands to create digital experiences
            that leave lasting impressions.
          </p>

          <p
            className="mb-10"
            style={{
              fontFamily: "var(--font-syne), sans-serif",
              fontSize: "0.875rem",
              color: "rgba(240,237,230,0.45)",
              lineHeight: 1.8,
              opacity: visible ? 1 : 0,
              transition: "opacity 0.8s ease 0.35s",
            }}
          >
            From our distributed team across four continents, we bring diverse
            perspectives to every project — merging cultural nuance with
            precision craft. We don&apos;t just build websites. We build digital
            brands that command attention.
          </p>

          {/* Stat pills */}
          <div className="flex flex-wrap gap-3">
            {stats.map((s, i) => (
              <span
                key={s.label}
                className="px-5 py-2 transition-all duration-300"
                style={{
                  fontFamily: "var(--font-syne), sans-serif",
                  fontSize: "0.75rem",
                  color: hoveredPill === i ? "#C8A96E" : "rgba(240,237,230,0.55)",
                  border: hoveredPill === i
                    ? "1px solid rgba(200,169,110,0.3)"
                    : "1px solid rgba(255,255,255,0.1)",
                  background: hoveredPill === i ? "rgba(200,169,110,0.08)" : "transparent",
                  cursor: "default",
                }}
                onMouseEnter={() => setHoveredPill(i)}
                onMouseLeave={() => setHoveredPill(null)}
              >
                {s.label}
              </span>
            ))}
          </div>
        </div>

        {/* Right — decorative panel */}
        <div
          className="relative w-full flex items-center justify-center overflow-hidden"
          style={{
            aspectRatio: "4/5",
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          {/* Floating particles */}
          {PARTICLE_POSITIONS.map((pos, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full animate-float-y"
              style={{
                background: "#C8A96E",
                top: pos.top,
                left: pos.left,
                animationDelay: `${i * 0.5}s`,
                opacity: 0.6,
              }}
            />
          ))}

          {/* Spinning rings */}
          <div
            className="absolute rounded-full border"
            style={{
              width: "12rem",
              height: "12rem",
              borderColor: "rgba(200,169,110,0.15)",
              animation: "spin-slow 20s linear infinite",
            }}
          />
          <div
            className="absolute rounded-full border"
            style={{
              width: "16rem",
              height: "16rem",
              borderColor: "rgba(200,169,110,0.08)",
              animation: "spin-slow 30s linear infinite reverse",
            }}
          />

          {/* Subtle gold glow */}
          <div
            className="absolute rounded-full pointer-events-none"
            style={{
              width: "50%",
              height: "50%",
              background: "#C8A96E",
              opacity: 0.05,
              filter: "blur(60px)",
            }}
          />

          {/* BLINQ. text */}
          <span
            className="relative z-10"
            style={{
              fontFamily: "var(--font-display), serif",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: 300,
              color: "#F0EDE6",
              opacity: 0.2,
              letterSpacing: "0.05em",
            }}
          >
            BLINQ.
          </span>
        </div>
      </div>
    </section>
  );
}
