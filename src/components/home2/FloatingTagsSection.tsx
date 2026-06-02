'use client';
import { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Phase = 'idle' | 'entering' | 'done' | 'exiting';

interface ClientDef {
  name: string;
  size: number;
  top: string;
  left?: string;
  right?: string;
  fontScale?: number;
}

const CLIENTS: ClientDef[] = [
  { name: 'Perfios',   size: 152, top:  '7%', left:  '5%',  fontScale: 0.20 },
  { name: 'Zepto',     size: 134, top:  '5%', right: '8%',  fontScale: 0.26 },
  { name: 'Groww',     size: 122, top: '26%', left: '13%',  fontScale: 0.24 },
  { name: 'CRED',      size: 144, top: '20%', right:'20%',  fontScale: 0.30 },
  { name: 'Slice',     size: 112, top: '46%', left:  '3%',  fontScale: 0.26 },
  { name: 'Jupiter',   size: 128, top: '43%', right: '4%',  fontScale: 0.20 },
  { name: 'Jar',       size: 118, top: '63%', left: '22%',  fontScale: 0.30 },
  { name: 'Unstop',    size: 122, top: '60%', right:'22%',  fontScale: 0.22 },
  { name: 'Classplus', size: 136, top: '78%', left:  '6%',  fontScale: 0.16 },
  { name: 'Razorpay',  size: 142, top: '76%', right: '5%',  fontScale: 0.18 },
];

const MOBILE_CLIENTS: ClientDef[] = [
  { name: 'Perfios',  size: 120, top:  '8%', left:  '5%',  fontScale: 0.20 },
  { name: 'Zepto',    size: 108, top:  '6%', right: '6%',  fontScale: 0.26 },
  { name: 'Slice',    size: 100, top: '35%', left:  '4%',  fontScale: 0.26 },
  { name: 'Jupiter',  size: 110, top: '33%', right: '5%',  fontScale: 0.20 },
  { name: 'Unstop',   size: 106, top: '62%', left:  '6%',  fontScale: 0.22 },
  { name: 'Razorpay', size: 116, top: '60%', right: '5%',  fontScale: 0.18 },
];

function ClientCircle({ client }: { client: ClientDef }) {
  const fontSize = Math.round(client.size * (client.fontScale ?? 0.22));
  return (
    <div style={{
      width: client.size, height: client.size, borderRadius: '50%',
      background: '#ffffff',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      boxShadow: '0 8px 40px rgba(0,0,0,0.45)',
      overflow: 'hidden',
    }}>
      <span style={{
        fontSize, fontWeight: 800, color: '#111111',
        fontFamily: 'var(--font-archivo-black), "Archivo Black", sans-serif',
        textAlign: 'center', lineHeight: 1,
        padding: '0 10px', letterSpacing: '-0.02em',
      }}>
        {client.name}
      </span>
    </div>
  );
}

export default function FloatingTagsSection() {
  const sectionRef     = useRef<HTMLDivElement>(null);
  const timersRef      = useRef<ReturnType<typeof setTimeout>[]>([]);
  const phaseRef       = useRef<Phase>('idle');
  const visibleCountRef = useRef(0);

  const [phase,        setPhase]        = useState<Phase>('idle');
  const [visibleCount, setVisibleCount] = useState(0);
  const [isMobile,     setIsMobile]     = useState(false);

  // keep refs in sync
  useEffect(() => { phaseRef.current = phase; },        [phase]);
  useEffect(() => { visibleCountRef.current = visibleCount; }, [visibleCount]);

  useEffect(() => { setIsMobile(window.innerWidth < 768); }, []);

  const activeClients = isMobile ? MOBILE_CLIENTS : CLIENTS;

  // ── Helpers ───────────────────────────────────────────────────────────────
  const clearTimers = useCallback(() => {
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
  }, []);

  const unlock = useCallback(() => {
    document.body.style.overflow = '';
  }, []);

  // ── Cleanup ───────────────────────────────────────────────────────────────
  useEffect(() => () => { clearTimers(); unlock(); }, [clearTimers, unlock]);

  // ── Enter sequence ────────────────────────────────────────────────────────
  const startEnter = useCallback((section: HTMLElement, clients: ClientDef[]) => {
    section.scrollIntoView({ behavior: 'instant' as ScrollBehavior, block: 'start' });
    document.body.style.overflow = 'hidden';
    setPhase('entering');

    const ts: ReturnType<typeof setTimeout>[] = [];

    clients.forEach((_, i) => {
      ts.push(setTimeout(() => setVisibleCount(i + 1), i * 500));
    });

    ts.push(setTimeout(() => {
      unlock();
      setPhase('done');
    }, clients.length * 500 + 900));

    timersRef.current = ts;
  }, [unlock]);

  // ── Exit sequence (reverse) ───────────────────────────────────────────────
  const startExit = useCallback(() => {
    clearTimers();
    unlock();
    setPhase('exiting');

    const start = visibleCountRef.current;
    const ts: ReturnType<typeof setTimeout>[] = [];

    // Count down: last circle disappears first
    for (let i = start; i >= 0; i--) {
      ts.push(setTimeout(() => setVisibleCount(i), (start - i) * 140));
    }

    // After all gone, reset to idle so it can replay on next enter
    ts.push(setTimeout(() => {
      setPhase('idle');
    }, start * 140 + 200));

    timersRef.current = ts;
  }, [clearTimers, unlock]);

  // ── IntersectionObserver ──────────────────────────────────────────────────
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Entered — only start if idle (not mid-animation)
          if (phaseRef.current === 'idle') {
            if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
              setVisibleCount(activeClients.length);
              setPhase('done');
              return;
            }
            startEnter(section, activeClients);
          }
        } else {
          // Left viewport — reverse if circles are visible
          if (phaseRef.current === 'done' || phaseRef.current === 'entering') {
            startExit();
          }
        }
      },
      { threshold: [0, 0.55] },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [activeClients, startEnter, startExit]);

  // ── Render ────────────────────────────────────────────────────────────────
  const isLocked  = phase === 'entering';
  const isDone    = phase === 'done';

  return (
    <div
      ref={sectionRef}
      style={{
        width: '100vw', height: '100vh',
        background: '#0a0a0a',
        position: 'relative', overflow: 'hidden',
      }}
    >
      {/* Decorative rings */}
      <div aria-hidden style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 340, height: 340, borderRadius: '50%',
        border: '1px solid rgba(255,255,255,0.04)',
        zIndex: 2, pointerEvents: 'none',
      }}>
        <div style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 180, height: 180, borderRadius: '50%',
          border: '1px solid rgba(255,255,255,0.06)',
        }} />
      </div>

      {/* Center text */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 10, textAlign: 'center',
        width: '100%', maxWidth: 420, padding: '0 24px',
        pointerEvents: 'none',
      }}>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2, ease: 'easeOut' }}
        >
          <p style={{
            margin: 0, fontSize: 'clamp(12px, 1.4vw, 15px)', fontWeight: 400,
            color: 'rgba(255,255,255,0.35)', letterSpacing: '0.07em',
            textTransform: 'uppercase',
            fontFamily: 'var(--font-archivo), "Archivo", sans-serif',
          }}>
            Trusted by
          </p>
          <p style={{
            margin: '8px 0 0 0', fontSize: 'clamp(28px, 3.5vw, 44px)',
            fontWeight: 700, color: '#ffffff', lineHeight: 1.1, letterSpacing: '-0.03em',
            fontFamily: 'var(--font-archivo-black), "Archivo Black", sans-serif',
          }}>
            ambitious brands.
          </p>
          <p style={{
            margin: '10px 0 0 0', fontSize: 'clamp(13px, 1.4vw, 16px)',
            fontWeight: 500, color: '#E05A00',
            fontFamily: 'var(--font-archivo), "Archivo", sans-serif',
          }}>
            From one studio. One brief.
          </p>
        </motion.div>
      </div>

      {/* Floating circles */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 20, pointerEvents: 'none' }}>
        <AnimatePresence>
          {activeClients.map((client, i) => {
            if (i >= visibleCount) return null;
            return (
              <motion.div
                key={client.name}
                style={{
                  position: 'absolute',
                  top: client.top, left: client.left, right: client.right,
                }}
                initial={{ opacity: 0, scale: 0.4, y: 24 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.4, y: 24 }}
                transition={{ type: 'spring', stiffness: 260, damping: 22 }}
              >
                <ClientCircle client={client} />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Progress bar */}
      {isLocked && (
        <div style={{
          position: 'fixed', bottom: 0, left: 0, right: 0,
          height: 3, background: 'rgba(255,255,255,0.07)', zIndex: 100,
        }}>
          <div style={{
            height: '100%', background: '#E05A00',
            width: `${(visibleCount / activeClients.length) * 100}%`,
            transition: 'width 0.35s ease',
          }} />
        </div>
      )}

      {/* Scroll to continue */}
      <AnimatePresence>
        {isDone && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.5 }}
            style={{
              position: 'absolute', bottom: 24, left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 30, textAlign: 'center',
            }}
          >
            <motion.p
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
              style={{
                margin: 0, fontSize: 11, letterSpacing: '0.14em',
                color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase',
                fontFamily: 'var(--font-archivo), "Archivo", sans-serif',
              }}
            >
              scroll to continue ↓
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
