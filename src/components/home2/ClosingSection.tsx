'use client';
import { motion } from 'framer-motion';

const lineVariants = {
  hidden:   { y: 22, opacity: 0 },
  visible:  { y: 0,  opacity: 1, transition: { duration: 0.6, ease: [0.25, 0, 0, 1] as [number, number, number, number] } },
};

const containerVariants = {
  hidden:   {},
  visible:  { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

export default function ClosingSection() {
  return (
    <div
      style={{ marginTop: 80, marginBottom: 0 }}
      className="px-0 md:px-6"
    >
      <motion.section
        initial={{ scale: 0.96, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: [0.25, 0, 0, 1] }}
        style={{
          background: '#E05A00',
          borderRadius: 16,
          overflow: 'hidden',
        }}
      >
        <div
          className="flex flex-col lg:flex-row items-center justify-between"
          style={{ padding: 'clamp(40px, 6vw, 80px) clamp(24px, 5vw, 64px)', gap: 48 }}
        >

          {/* ── Left: Headline ─────────────────────────────────────── */}
          <div style={{ flex: '0 0 auto', width: 'min(100%, 62%)' }} className="w-full lg:w-[62%]">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2
                style={{
                  fontSize: 'clamp(36px, 5vw, 64px)',
                  lineHeight: 1.05,
                  letterSpacing: '-1.5px',
                  color: '#111111',
                  margin: 0,
                  fontFamily: 'var(--font-archivo-black), "Archivo Black", sans-serif',
                  fontWeight: 700,
                }}
              >
                <motion.span variants={lineVariants} style={{ display: 'block' }}>
                  We are a
                </motion.span>

                <motion.span variants={lineVariants} style={{ display: 'block' }}>
                  {/* "studio that" — italic serif contrast */}
                  <em
                    style={{
                      fontFamily: 'var(--font-display), Georgia, "Times New Roman", serif',
                      fontStyle: 'italic',
                      fontWeight: 400,
                    }}
                  >
                    studio that{' '}
                  </em>
                  builds
                </motion.span>

                <motion.span variants={lineVariants} style={{ display: 'block' }}>
                  businesses that convert.
                </motion.span>
              </h2>

              {/* Sub-line */}
              <motion.p
                variants={lineVariants}
                style={{
                  fontSize: 15,
                  color: 'rgba(0,0,0,0.5)',
                  marginTop: 24,
                  marginBottom: 0,
                  fontFamily: 'var(--font-archivo), "Archivo", sans-serif',
                  fontWeight: 400,
                }}
              >
                Web · Branding · Video — from one brief, one team.
              </motion.p>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.5 }}
              style={{ marginTop: 20 }}
            >
              <button
                style={{
                  background: '#111111',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: 999,
                  padding: '12px 28px',
                  fontSize: 14,
                  fontWeight: 500,
                  cursor: 'pointer',
                  fontFamily: 'var(--font-archivo), "Archivo", sans-serif',
                  transition: 'background 0.2s ease',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = '#333'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = '#111111'; }}
              >
                Start a project →
              </button>
            </motion.div>
          </div>

          {/* ── Right: SVG brand mark ───────────────────────────────── */}
          <div
            className="flex flex-col items-center justify-center w-full lg:w-[35%]"
          >
            <svg
              viewBox="0 0 200 230"
              className="w-[100px] h-[115px] md:w-[120px] md:h-[138px] lg:w-[140px] lg:h-[161px]"
              fill="none"
              aria-hidden
            >
              {/* Outlined square */}
              <motion.rect
                x="40" y="10" width="120" height="120"
                fill="none"
                stroke="#111111"
                strokeWidth="2"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.5, ease: 'easeInOut' }}
              />

              {/* Smile arc — below and centered */}
              <motion.path
                d="M 20 180 C 60 228, 140 228, 180 180"
                fill="none"
                stroke="#111111"
                strokeWidth="2"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.9, ease: 'easeInOut' }}
              />
            </svg>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2, duration: 0.4 }}
              style={{
                fontSize: 14,
                fontWeight: 600,
                color: '#111111',
                marginTop: 12,
                marginBottom: 0,
                textAlign: 'center',
                fontFamily: 'var(--font-archivo), "Archivo", sans-serif',
                letterSpacing: '0.02em',
              }}
            >
              Blinq Studio
            </motion.p>
          </div>

        </div>
      </motion.section>
    </div>
  );
}
