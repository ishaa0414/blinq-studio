"use client";

import { useEffect, useRef, useState } from "react";
import HeroCanvas from "@/components/HeroCanvas";

/* ── Text scramble ── */
function useScramble(text: string, startDelay = 0) {
  const [displayed, setDisplayed] = useState(text);

  useEffect(() => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$";
    let frame = 0;
    const totalFrames = text.length * 3;

    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setDisplayed(
          text
            .split("")
            .map((char, i) => {
              if (char === " ") return " ";
              const threshold = (frame / totalFrames) * text.length;
              if (i < threshold) return char;
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join("")
        );
        frame++;
        if (frame > totalFrames) {
          setDisplayed(text);
          clearInterval(interval);
        }
      }, 40);
    }, startDelay);

    return () => clearTimeout(timeout);
  }, [text, startDelay]);

  return displayed;
}

/* ── Animated counter ── */
function AnimatedStat({
  number,
  label,
  started,
}: {
  number: string;
  label: string;
  started: boolean;
}) {
  const [count, setCount] = useState(0);
  const target = parseInt(number.replace("+", ""));
  const suffix = number.includes("+") ? "+" : "";

  useEffect(() => {
    if (!started) return;
    const duration = 2000;
    const start = Date.now();

    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [started, target]);

  return (
    <div className="flex flex-col">
      <span
        style={{
          fontFamily: "var(--font-display), serif",
          fontSize: 48,
          fontWeight: 300,
          color: "#F0EDE6",
          lineHeight: 1,
          willChange: "transform",
        }}
      >
        {count}
        {suffix}
      </span>
      <span
        className="uppercase tracking-widest mt-1"
        style={{
          fontFamily: "var(--font-syne), sans-serif",
          fontSize: 10,
          color: "rgba(240,237,230,0.45)",
        }}
      >
        {label}
      </span>
    </div>
  );
}

const MARQUEE_TEXT =
  "DESIGN · DEVELOP · LAUNCH · BRAND · 3D · MOTION · DESIGN · DEVELOP · LAUNCH · BRAND · 3D · MOTION · ";

export default function HeroSection() {
  /* Stats counter trigger */
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsStarted, setStatsStarted] = useState(false);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const line1 = useScramble("We craft", 200);
  const line2 = useScramble("digital", 600);
  const line3 = useScramble("experiences", 1000);

  return (
    <section
      className="relative overflow-hidden min-h-screen flex flex-col"
      style={{ background: "#080808" }}
    >
      {/* Vertical grid lines */}
      <div className="absolute inset-0 pointer-events-none">
        {["25%", "50%", "75%"].map((left) => (
          <div
            key={left}
            className="absolute top-0 bottom-0 w-px"
            style={{ left, background: "rgba(255,255,255,0.04)" }}
          />
        ))}
      </div>

      {/* Gold glow blobs */}
      <div
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full pointer-events-none animate-blob-float"
        style={{ background: "#C8A96E", opacity: 0.08, filter: "blur(120px)" }}
      />
      <div
        className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full pointer-events-none animate-blob-float"
        style={{
          background: "#C8A96E",
          opacity: 0.08,
          filter: "blur(120px)",
          animationDelay: "3s",
        }}
      />

      {/* 3D Canvas */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 top-0 w-[60%] h-full">
          <HeroCanvas />
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-1 flex-col px-12 md:px-24 pt-36 pb-16">
        <div className="flex flex-1 flex-col md:flex-row md:items-stretch gap-16 md:gap-0">

          {/* Left column */}
          <div className="flex flex-col flex-1 justify-between">
            <div>
              {/* Availability pill */}
              <div
                className="inline-flex items-center gap-2 rounded-full px-4 py-1.5"
                style={{
                  background: "rgba(200,169,110,0.08)",
                  border: "1px solid rgba(200,169,110,0.2)",
                }}
              >
                <div
                  className="w-2 h-2 rounded-full animate-pulse-dot"
                  style={{ background: "#C8A96E" }}
                />
                <span
                  className="uppercase tracking-[0.25em]"
                  style={{
                    fontFamily: "var(--font-syne), sans-serif",
                    fontSize: "10px",
                    color: "#C8A96E",
                  }}
                >
                  Available for Projects
                </span>
              </div>

              {/* Eyebrow */}
              <div className="flex items-center gap-4 mt-6">
                <div className="w-12 h-px" style={{ background: "#C8A96E" }} />
                <span
                  className="uppercase tracking-[0.2em]"
                  style={{
                    fontFamily: "var(--font-syne), sans-serif",
                    fontSize: "11px",
                    color: "rgba(240,237,230,0.5)",
                  }}
                >
                  Digital Creative Studio
                </span>
              </div>

              {/* Scrambled headline */}
              <h1
                className="mt-8"
                style={{
                  fontFamily: "var(--font-display), serif",
                  fontSize: "clamp(64px, 8vw, 120px)",
                  lineHeight: 0.95,
                  color: "#F0EDE6",
                  fontWeight: 300,
                  willChange: "transform",
                }}
              >
                <span className="block">{line1}</span>
                <span
                  className="block"
                  style={{ color: "#C8A96E", fontStyle: "italic" }}
                >
                  {line2}
                </span>
                <span className="block">{line3}</span>
              </h1>
            </div>

            {/* Description */}
            <p
              className="mt-12 md:mt-0 text-sm leading-[1.7]"
              style={{
                fontFamily: "var(--font-syne), sans-serif",
                maxWidth: 380,
                color: "rgba(240,237,230,0.5)",
              }}
            >
              We partner with ambitious brands to design and build digital
              products that move people — from concept to launch and beyond.
            </p>
          </div>

          {/* Right column */}
          <div className="flex flex-col items-end justify-between md:pl-24">
            {/* Animated stats */}
            <div
              ref={statsRef}
              className="flex flex-col items-start gap-0 mt-auto md:mt-0 self-center md:self-auto"
            >
              {[
                { number: "120+", label: "Projects" },
                { number: "7+", label: "Years" },
                { number: "40+", label: "Clients" },
              ].map((stat, i) => (
                <div key={stat.label}>
                  {i > 0 && (
                    <div
                      className="w-12 h-px my-6"
                      style={{ background: "rgba(255,255,255,0.07)" }}
                    />
                  )}
                  <AnimatedStat
                    number={stat.number}
                    label={stat.label}
                    started={statsStarted}
                  />
                </div>
              ))}
            </div>

            {/* Scroll indicator */}
            <div className="flex flex-col items-center gap-2 mt-16 md:mt-0">
              <span
                className="uppercase tracking-[0.3em]"
                style={{
                  fontFamily: "var(--font-syne), sans-serif",
                  fontSize: 9,
                  color: "rgba(240,237,230,0.4)",
                }}
              >
                Scroll
              </span>
              <div
                className="w-px h-12 animate-scroll-line"
                style={{ background: "#C8A96E" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom marquee strip */}
      <div
        className="relative z-10 overflow-hidden border-t"
        style={{ borderColor: "rgba(255,255,255,0.05)" }}
      >
        <div className="marquee-track-fast flex flex-row w-fit py-3">
          {[...Array(4)].map((_, i) => (
            <span
              key={i}
              className="whitespace-nowrap"
              style={{
                fontFamily: "var(--font-syne), sans-serif",
                fontSize: "11px",
                letterSpacing: "0.3em",
                color: "rgba(240,237,230,0.12)",
                paddingRight: "2rem",
              }}
            >
              {MARQUEE_TEXT}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
