"use client";

import Image from "next/image";
import { useState } from "react";

const projects = [
  { num: "01", name: "Luminary Rebrand", desc: "Full brand identity & website design", client: "Luminary", category: "Branding · Web", seed: "luminary" },
  { num: "02", name: "Vault Finance", desc: "Dashboard design & development", client: "Vault", category: "Fintech · UI", seed: "vault" },
  { num: "03", name: "Orion 3D Campaign", desc: "3D visuals, motion & landing page", client: "Orion", category: "3D · Motion", seed: "orion" },
  { num: "04", name: "Echo Mobile App", desc: "End-to-end product design", client: "Echo", category: "Mobile · UX", seed: "echo" },
  { num: "05", name: "Nexus AI Platform", desc: "Design system & web platform", client: "Nexus", category: "AI · SaaS", seed: "nexus" },
];

function ProjectRow({ project }: { project: (typeof projects)[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="grid items-center py-10 transition-all duration-500"
      style={{
        gridTemplateColumns: "80px 1fr 280px 320px",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
        background: hovered
          ? "linear-gradient(to right, transparent, rgba(200,169,110,0.03))"
          : "transparent",
        cursor: "pointer",
        willChange: "transform",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Col 1 — Number */}
      <span
        style={{
          fontFamily: "var(--font-display), serif",
          fontSize: "1.5rem",
          fontWeight: 300,
          color: "rgba(240,237,230,0.25)",
        }}
      >
        {project.num}
      </span>

      {/* Col 2 — Name + desc */}
      <div>
        <p
          className="mb-1"
          style={{
            fontFamily: "var(--font-syne), sans-serif",
            fontWeight: 600,
            fontSize: "1rem",
            color: "#F0EDE6",
          }}
        >
          {project.name}
        </p>
        <p
          style={{
            fontFamily: "var(--font-syne), sans-serif",
            fontSize: "0.875rem",
            color: "rgba(240,237,230,0.45)",
            lineHeight: 1.7,
            maxWidth: "24rem",
          }}
        >
          {project.desc}
        </p>
      </div>

      {/* Col 3 — Client + category */}
      <div>
        <p
          style={{
            fontFamily: "var(--font-display), serif",
            fontSize: "1.5rem",
            fontWeight: 400,
            color: "#C8A96E",
            fontStyle: "italic",
            transform: hovered ? "skewX(-2deg)" : "skewX(0deg)",
            transition: "transform 0.4s ease",
            display: "inline-block",
          }}
        >
          {project.client}
        </p>
        <p
          className="uppercase tracking-widest mt-1"
          style={{
            fontFamily: "var(--font-syne), sans-serif",
            fontSize: "0.625rem",
            color: "rgba(240,237,230,0.35)",
          }}
        >
          {project.category}
        </p>
      </div>

      {/* Col 4 — Image + arrow */}
      <div className="flex items-center justify-between gap-4">
        {/* Clip-path reveal image */}
        <div
          className="w-72 h-44 overflow-hidden rounded-sm shrink-0"
          style={{
            clipPath: hovered ? "inset(0 0% 0 0)" : "inset(0 100% 0 0)",
            transition: "clip-path 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <Image
            src={`https://picsum.photos/seed/${project.seed}/600/400`}
            alt={project.name}
            width={600}
            height={400}
            className="object-cover w-full h-full"
            style={{ transform: hovered ? "scale(1.05)" : "scale(1)", transition: "transform 0.7s ease" }}
          />
        </div>

        {/* Arrow */}
        <span
          style={{
            fontFamily: "var(--font-syne), sans-serif",
            fontSize: "0.875rem",
            color: "#C8A96E",
            opacity: hovered ? 1 : 0,
            transform: hovered ? "translateX(0)" : "translateX(-8px)",
            transition: "opacity 0.3s ease, transform 0.3s ease",
          }}
        >
          ↗
        </span>
      </div>
    </div>
  );
}

export default function WorkSection() {
  const [btnHovered, setBtnHovered] = useState(false);

  return (
    <section
      className="relative px-12 md:px-24 py-24 overflow-hidden"
      style={{
        background: "#080808",
        borderTop: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      {/* Decorative background "WORK" text */}
      <div
        className="absolute top-0 right-0 pointer-events-none select-none leading-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          style={{
            fontFamily: "var(--font-display), serif",
            fontSize: "200px",
            fontWeight: 700,
            color: "rgba(255,255,255,0.015)",
            lineHeight: 1,
          }}
        >
          WORK
        </span>
      </div>

      {/* Section header */}
      <div className="flex justify-between items-start relative z-10">
        <div className="flex items-baseline gap-4">
          <h2
            style={{
              fontFamily: "var(--font-display), serif",
              fontSize: "72px",
              fontWeight: 300,
              color: "#F0EDE6",
              lineHeight: 1,
            }}
          >
            Work
          </h2>
          <span
            style={{
              fontFamily: "var(--font-display), serif",
              fontSize: "1.25rem",
              color: "#C8A96E",
              fontStyle: "italic",
            }}
          >
            (05)
          </span>
        </div>
        <span
          className="tracking-widest text-xs"
          style={{
            fontFamily: "var(--font-syne), sans-serif",
            color: "rgba(240,237,230,0.35)",
          }}
        >
          ©2019–26
        </span>
      </div>

      <p
        className="mt-8 relative z-10"
        style={{
          fontFamily: "var(--font-syne), sans-serif",
          fontSize: "0.875rem",
          color: "rgba(240,237,230,0.45)",
          lineHeight: 1.8,
          maxWidth: "36rem",
        }}
      >
        We partner with founders, brands, and visionaries to design and build
        digital products that are both beautiful and functional — from concept
        to launch and beyond.
      </p>

      {/* Divider */}
      <div
        className="mt-16 h-px w-full relative z-10"
        style={{ background: "rgba(255,255,255,0.07)" }}
      />

      {/* Project list */}
      <div className="relative z-10">
        {projects.map((project) => (
          <ProjectRow key={project.num} project={project} />
        ))}
      </div>

      {/* View all button */}
      <div className="mt-16 flex justify-center relative z-10">
        <button
          className="px-10 py-4 uppercase tracking-[0.2em] text-xs transition-all duration-300 border"
          style={{
            fontFamily: "var(--font-syne), sans-serif",
            borderColor: btnHovered ? "#C8A96E" : "rgba(255,255,255,0.15)",
            color: btnHovered ? "#C8A96E" : "#F0EDE6",
            background: "transparent",
          }}
          onMouseEnter={() => setBtnHovered(true)}
          onMouseLeave={() => setBtnHovered(false)}
        >
          View All Projects →
        </button>
      </div>
    </section>
  );
}
