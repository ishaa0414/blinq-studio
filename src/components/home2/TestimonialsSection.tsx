'use client';

type StatCard = {
  type: 'stat';
  bg: string;
  accentColor: string;
  stat: string;
  desc: string;
  company: string;
};

type DescCard = {
  type: 'descriptor';
  bg: string;
  headline: string;
  desc: string;
  company: string;
};

type QuoteCard = {
  type: 'quote';
  bg: string;
  avatarBg: string;
  initials: string;
  quote: string;
  name: string;
  role: string;
  company: string;
};

type CardData = StatCard | DescCard | QuoteCard;

const CARDS: CardData[] = [
  // Row 1
  {
    type: 'stat', bg: '#FFF3EF', accentColor: '#FB4415',
    stat: '40%', desc: 'increase in conversion rate within 30 days of launch', company: 'NovaTech',
  },
  {
    type: 'descriptor', bg: '#EEF2FF',
    headline: 'Award-winning,',
    desc: 'brand identities built from the ground up to outlast trends and stay iconic.',
    company: 'Luminary Labs',
  },
  {
    type: 'quote', bg: '#111', avatarBg: '#FB4415', initials: 'AM',
    quote: '"Working with Blinq Studio completely transformed our brand identity. Their creative vision exceeded every expectation we had going in."',
    name: 'Alex Morrison', role: 'Founder & CEO', company: 'NovaTech',
  },
  // Row 2
  {
    type: 'quote', bg: '#1a1a1a', avatarBg: '#6366F1', initials: 'SC',
    quote: '"They brought our digital presence to life in a way we never imagined. Clean, bold, entirely on-brand — results speak for themselves."',
    name: 'Sarah Chen', role: 'Creative Director', company: 'Luminary Labs',
  },
  {
    type: 'stat', bg: '#FFFBEB', accentColor: '#D97706',
    stat: '3×', desc: 'return on branding investment in the first quarter after launch', company: 'Drift Commerce',
  },
  {
    type: 'stat', bg: '#ECFDF5', accentColor: '#059669',
    stat: '48hr', desc: 'average design-to-delivery turnaround for complete web projects', company: 'Verge Studio',
  },
  // Row 3
  {
    type: 'stat', bg: '#F5F3FF', accentColor: '#7C3AED',
    stat: '50+', desc: 'projects delivered across branding, web design, and video', company: 'Various Clients',
  },
  {
    type: 'descriptor', bg: '#FFF5F0',
    headline: 'Performance-first,',
    desc: 'digital experiences designed to convert visitors into loyal, returning customers.',
    company: 'Arclight Agency',
  },
  {
    type: 'quote', bg: '#111', avatarBg: '#10B981', initials: 'JO',
    quote: '"From first brief to final delivery, the process was seamless. They understood our vision immediately and made it remarkable."',
    name: 'James Okafor', role: 'Co-Founder', company: 'Verge Studio',
  },
];

const ARCHIVO = 'var(--font-archivo), "Archivo", sans-serif';
const ARCHIVO_BLACK = 'var(--font-archivo-black), "Archivo Black", sans-serif';

function StatCardComp({ card }: { card: StatCard }) {
  return (
    <div style={{
      background: '#111', borderRadius: 20,
      padding: 'clamp(32px, 3vw, 48px) clamp(20px, 2vw, 32px)',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      height: '100%', boxSizing: 'border-box', textAlign: 'center', gap: 14,
    }}>
      <div style={{
        fontSize: 'clamp(52px, 5.5vw, 82px)', fontWeight: 900,
        color: '#FB4415', fontFamily: ARCHIVO_BLACK, lineHeight: 1,
      }}>
        {card.stat}
      </div>
      <p style={{
        margin: 0, fontSize: 'clamp(13px, 1.1vw, 15px)',
        color: 'rgba(255,255,255,0.55)', fontFamily: ARCHIVO,
        fontWeight: 400, lineHeight: 1.55, maxWidth: '78%',
      }}>
        {card.desc}
      </p>
    </div>
  );
}

function DescCardComp({ card }: { card: DescCard }) {
  return (
    <div style={{
      background: card.bg, borderRadius: 20,
      padding: 'clamp(24px, 2.5vw, 36px) clamp(20px, 2vw, 32px)',
      display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
      height: '100%', boxSizing: 'border-box',
    }}>
      <div>
        <div style={{
          fontSize: 'clamp(22px, 2.8vw, 40px)', fontWeight: 700,
          color: '#111', fontFamily: ARCHIVO, lineHeight: 1.15, marginBottom: 14,
        }}>
          {card.headline}
        </div>
        <p style={{
          margin: 0, fontSize: 'clamp(13px, 1.1vw, 15px)',
          color: '#555', fontFamily: ARCHIVO, fontWeight: 400, lineHeight: 1.65,
        }}>
          {card.desc}
        </p>
      </div>
      <div style={{ marginTop: 28 }}>
        <span style={{ fontFamily: ARCHIVO, fontWeight: 700, fontSize: 11, color: '#aaa', letterSpacing: '0.12em' }}>
          {card.company.toUpperCase()}
        </span>
      </div>
    </div>
  );
}

function QuoteCardComp({ card }: { card: QuoteCard }) {
  return (
    <div style={{
      background: card.bg, borderRadius: 20,
      padding: 'clamp(24px, 2.5vw, 36px) clamp(20px, 2vw, 32px)',
      display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
      height: '100%', boxSizing: 'border-box',
    }}>
      <p style={{
        margin: 0, fontSize: 'clamp(13px, 1.15vw, 16px)',
        color: 'rgba(255,255,255,0.85)', fontFamily: ARCHIVO,
        fontWeight: 400, lineHeight: 1.7, fontStyle: 'italic',
      }}>
        {card.quote}
      </p>
      <div style={{ marginTop: 28, display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{
          width: 42, height: 42, borderRadius: '50%', background: card.avatarBg,
          display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
        }}>
          <span style={{ fontSize: 14, fontWeight: 900, color: '#fff', fontFamily: ARCHIVO_BLACK }}>
            {card.initials}
          </span>
        </div>
        <div>
          <div style={{ fontSize: 14, fontWeight: 700, color: '#fff', fontFamily: ARCHIVO }}>
            {card.name}
          </div>
          <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)', fontFamily: ARCHIVO, marginTop: 3 }}>
            {card.role} · {card.company}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section style={{ background: '#fff', padding: 'clamp(60px, 8vw, 100px) clamp(20px, 5vw, 64px)' }}>

      {/* Heading */}
      <div style={{ textAlign: 'center', marginBottom: 'clamp(36px, 5vw, 64px)' }}>
        <h2 style={{
          fontFamily: ARCHIVO,
          fontWeight: 700, fontSize: 'clamp(32px, 5vw, 64px)',
          color: '#0a0a0a', lineHeight: 1.1, margin: '0 0 24px',
          letterSpacing: '-0.02em',
        }}>
          Proven results,<br />real clients.
        </h2>
        <a href="#" style={{
          display: 'inline-flex', alignItems: 'center', gap: 10,
          background: '#0a0a0a', color: '#fff',
          fontFamily: ARCHIVO, fontWeight: 600,
          fontSize: 'clamp(13px, 1.1vw, 15px)',
          padding: '12px 28px', borderRadius: 100,
          textDecoration: 'none', letterSpacing: '0.01em',
        }}>
          Explore Client Stories
          <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
            <path d="M1 5H13M9 1L13 5L9 9" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>

      {/* Bento grid — 3 equal columns, 3 rows */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridAutoRows: '1fr',
        gap: 'clamp(10px, 1.2vw, 16px)',
      }}>
        {CARDS.map((card, i) => (
          <div key={i} style={{ minHeight: 'clamp(200px, 22vw, 300px)' }}>
            {card.type === 'stat'       && <StatCardComp  card={card} />}
            {card.type === 'descriptor' && <DescCardComp  card={card} />}
            {card.type === 'quote'      && <QuoteCardComp card={card} />}
          </div>
        ))}
      </div>

    </section>
  );
}
