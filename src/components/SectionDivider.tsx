export default function SectionDivider() {
  return (
    <div className="relative w-full" style={{ height: "1px" }}>
      <div
        className="w-full h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, #C8A96E 20%, rgba(255,255,255,0.1) 50%, #C8A96E 80%, transparent)",
          opacity: 0.4,
        }}
      />
    </div>
  );
}
