"use client";

import { useReveal } from "@/hooks/useReveal";

interface SectionRevealProps {
  children: React.ReactNode;
  delay?: number;
}

export default function SectionReveal({ children, delay = 0 }: SectionRevealProps) {
  const { ref, visible } = useReveal(0.1);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px)" : "translateY(30px)",
        transition: `opacity 0.8s ease ${delay}ms, transform 0.8s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
