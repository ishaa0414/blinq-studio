"use client";

const logosRow1 = [
  "Vercel", "Figma", "Framer", "Linear", "Notion",
  "Stripe", "Loom", "Raycast", "Arc", "Resend",
];

const logosRow2 = [
  "Anthropic", "Stripe", "Arc", "Linear", "Raycast",
  "Resend", "Vercel", "Figma", "Notion", "Loom",
];

function LogoItem({ name }: { name: string }) {
  return (
    <>
      <div
        className="px-10 flex items-center gap-3 group transition-all duration-300"
        style={{ willChange: "transform" }}
      >
        <span
          className="w-1 h-1 rounded-full shrink-0 transition-all duration-300"
          style={{ background: "#C8A96E", opacity: 0.3 }}
        />
        <span
          className="text-sm transition-all duration-300 whitespace-nowrap"
          style={{
            fontFamily: "var(--font-syne), sans-serif",
            fontWeight: 700,
            letterSpacing: "0.1em",
            color: "rgba(240,237,230,0.35)",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.color = "#C8A96E";
            const dot = e.currentTarget.previousElementSibling as HTMLElement;
            if (dot) dot.style.opacity = "1";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.color = "rgba(240,237,230,0.35)";
            const dot = e.currentTarget.previousElementSibling as HTMLElement;
            if (dot) dot.style.opacity = "0.3";
          }}
        >
          {name}
        </span>
      </div>
      <div
        className="w-px h-4 shrink-0"
        style={{ background: "rgba(255,255,255,0.12)" }}
      />
    </>
  );
}

function SmallLogoItem({ name }: { name: string }) {
  return (
    <span
      className="whitespace-nowrap px-8"
      style={{
        fontFamily: "var(--font-syne), sans-serif",
        fontSize: "0.75rem",
        letterSpacing: "0.15em",
        color: "rgba(240,237,230,0.18)",
        fontWeight: 600,
      }}
    >
      {name} ·
    </span>
  );
}

export default function MarqueeSection() {
  return (
    <section
      className="relative overflow-hidden py-12"
      style={{
        background: "#080808",
        borderTop: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      {/* Left fade */}
      <div
        className="absolute left-0 top-0 h-full w-32 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, #080808, transparent)" }}
      />
      {/* Right fade */}
      <div
        className="absolute right-0 top-0 h-full w-32 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, #080808, transparent)" }}
      />

      {/* Eyebrow */}
      <p
        className="text-center mb-8 uppercase tracking-[0.25em]"
        style={{
          fontFamily: "var(--font-syne), sans-serif",
          fontSize: "10px",
          color: "rgba(240,237,230,0.35)",
        }}
      >
        Trusted by Ambitious Brands
      </p>

      {/* Row 1 — left to right */}
      <div className="overflow-hidden w-full mb-4">
        <div className="marquee-track flex flex-row w-fit">
          {[...logosRow1, ...logosRow1].map((name, i) => (
            <LogoItem key={`r1-${name}-${i}`} name={name} />
          ))}
        </div>
      </div>

      {/* Row 2 — right to left, more muted */}
      <div className="overflow-hidden w-full">
        <div className="marquee-track-reverse flex flex-row w-fit">
          {[...logosRow2, ...logosRow2].map((name, i) => (
            <SmallLogoItem key={`r2-${name}-${i}`} name={name} />
          ))}
        </div>
      </div>

      {/* Gold accent line */}
      <div
        className="mt-8 h-px w-full"
        style={{
          background:
            "linear-gradient(to right, transparent, #C8A96E, transparent)",
          opacity: 0.3,
        }}
      />
    </section>
  );
}
