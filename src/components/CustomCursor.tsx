"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [dot, setDot] = useState({ x: -100, y: -100 });
  const [ring, setRing] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setDot({ x: e.clientX, y: e.clientY });
      setRing({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <>
      {/* Small dot — instant follow */}
      <div
        className="hidden md:block fixed pointer-events-none z-[9999] w-[6px] h-[6px] rounded-full bg-[#C8A96E]"
        style={{
          left: dot.x,
          top: dot.y,
          transform: "translate(-50%, -50%)",
        }}
      />
      {/* Large ring — CSS transition gives 120ms lag feel */}
      <div
        className="hidden md:block fixed pointer-events-none z-[9999] w-8 h-8 rounded-full border border-[#C8A96E] opacity-60"
        style={{
          left: ring.x,
          top: ring.y,
          transform: "translate(-50%, -50%)",
          transition: "left 0.12s ease-out, top 0.12s ease-out",
        }}
      />
    </>
  );
}
