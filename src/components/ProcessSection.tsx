"use client";

import { useReveal } from "@/hooks/useReveal";
import { useState } from "react";

const steps = [
  { num: "01", title: "Discovery", desc: "We dive deep into your brand, audience, and goals — uncovering what makes you different and what your digital presence needs to achieve." },
  { num: "02", title: "Strategy & Design", desc: "From wireframes to high-fidelity visuals, we craft interfaces and identities grounded in strategy, research, and craft." },
  { num: "03", title: "Build & Develop", desc: "Our engineers bring designs to life with clean, performant code — built for scale, speed, and a flawless user experience." },
  { num: "04", title: "Launch & Grow", desc: "We ship, measure, and iterate. Post-launch, we're your partner for growth — optimizing and evolving as your business scales." },
];

function StepCard({
  step,
  index,
  sectionVisible,
}: {
  step: (typeof steps)[0];
  index: number;
  sectionVisible: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="flex flex-col transition-all duration-400"
      style={{
        transform: hovered ? "translateY(-8px)" : "translateY(0)",
        transition: "transform 0.4s ease",
        willChange: "transform",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Large number with animated gold underline */}
      <div className="relative mb-8">
        <span
          className="block leading-none"
          style={{
            fontFamily: "var(--font-display), serif",
            fontSize: "6rem",
            fontWeight: 300,
            color: "#F0EDE6",
            opacity: 0.1,
          }}
        >
          {step.num}
        </span>
        {/* Gold underline — expands on section visible */}
        <div
          className="absolute bottom-2 left-0 h-px transition-all"
          style={{
            background: "#C8A96E",
            width: sectionVisible ? "100%" : "0%",
            transitionDuration: "0.6s",
            transitionDelay: `${index * 200}ms`,
            transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        />
      </div>

      {/* Step title */}
      <h3
        className="mb-3"
        style={{
          fontFamily: "var(--font-syne), sans-serif",
          fontWeight: 600,
          fontSize: "0.9375rem",
          color: hovered ? "#C8A96E" : "#F0EDE6",
          transition: "color 0.3s ease",
        }}
      >
        {step.title}
      </h3>

      {/* Step description */}
      <p
        style={{
          fontFamily: "var(--font-syne), sans-serif",
          fontSize: "0.8125rem",
          color: "rgba(240,237,230,0.45)",
          lineHeight: 1.8,
        }}
      >
        {step.desc}
      </p>

      {/* Hover gold border */}
      {hovered && (
        <div
          className="mt-4 h-px"
          style={{
            background: "linear-gradient(to right, #C8A96E, transparent)",
            opacity: 0.4,
          }}
        />
      )}
    </div>
  );
}

export default function ProcessSection() {
  const { ref, visible } = useReveal(0.1);

  return (
    <section
      className="px-12 md:px-24 py-24"
      style={{
        background: "#080808",
        borderTop: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      {/* Header */}
      <div className="mb-20">
        <p
          className="uppercase tracking-[0.25em] mb-4"
          style={{ fontFamily: "var(--font-syne), sans-serif", fontSize: "10px", color: "#C8A96E" }}
        >
          How We Work
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
          <em style={{ color: "#C8A96E" }}>Process</em>
        </h2>
      </div>

      {/* Steps */}
      <div ref={ref} className="relative">
        {/* Dashed connector line — desktop */}
        <div
          className="hidden md:block absolute left-0 right-0"
          style={{ top: "3.5rem", borderTop: "1px dashed rgba(255,255,255,0.1)", overflow: "hidden" }}
        >
          {/* Moving gold dot */}
          <div
            className="absolute w-2 h-2 rounded-full -top-1"
            style={{
              background: "#C8A96E",
              opacity: visible ? 0.8 : 0,
              animation: visible ? "slide-dot 3s ease-in-out infinite alternate" : "none",
              transition: "opacity 0.5s ease 0.4s",
            }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 relative">
          {steps.map((step, i) => (
            <StepCard
              key={step.num}
              step={step}
              index={i}
              sectionVisible={visible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
