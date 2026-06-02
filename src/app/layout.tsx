import type { Metadata } from "next";
import { Syne, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Blinq Studio — Digital Creative Studio",
  description:
    "We partner with ambitious brands to design and build digital products that move people.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body
        className="min-h-full flex flex-col"
        style={{ background: "#080808", fontFamily: "var(--font-syne), sans-serif" }}
      >
        {/* Cinematic film grain overlay */}
        <div
          aria-hidden="true"
          className="animate-grain"
          style={{
            position: "fixed",
            inset: 0,
            pointerEvents: "none",
            zIndex: 100,
            opacity: 0.035,
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            backgroundSize: "200px 200px",
          }}
        />

        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
