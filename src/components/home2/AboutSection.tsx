'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import 'swiper/css';

const ARCHIVO       = 'var(--font-archivo), "Archivo", sans-serif';
const ARCHIVO_BLACK = 'var(--font-archivo-black), "Archivo Black", sans-serif';

const PHOTOS = [
  { seed: 'blinq-studio1',   alt: 'Studio space' },
  { seed: 'blinq-team1',     alt: 'Team brainstorm' },
  { seed: 'blinq-office1',   alt: 'Team at work' },
  { seed: 'blinq-collab',    alt: 'Studio collaboration' },
  { seed: 'blinq-portrait',  alt: 'Studio member' },
  { seed: 'blinq-creative1', alt: 'Creative session' },
];

const PHOTO_H = 380;
const ZZ_OFF  = 100;

export default function AboutSection() {
  return (
    <section style={{
      background: '#fff',
      padding: 'clamp(64px, 8vw, 100px) 0',
      overflow: 'hidden',
    }}>

      {/* ── Text row ── */}
      <div style={{
        padding: '0 clamp(20px, 5vw, 72px)',
        maxWidth: 1100,
        margin: '0 auto clamp(48px, 6vw, 72px)',
        boxSizing: 'border-box',
        width: '100%',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'clamp(32px, 6vw, 96px)',
        }}>

          <div>
            <h2 style={{
              margin: '0 0 20px',
              fontFamily: ARCHIVO_BLACK, fontWeight: 900,
              fontSize: 'clamp(26px, 3.2vw, 46px)',
              color: '#0a0a0a', lineHeight: 1.1, letterSpacing: '-0.03em',
            }}>
              About Us
            </h2>
            <p style={{
              margin: 0, fontFamily: ARCHIVO, fontWeight: 400,
              fontSize: 'clamp(14px, 1.1vw, 16px)', color: '#555', lineHeight: 1.8,
            }}>
              We are a creative studio obsessed with building brands that move people.
              Blinq Studio was founded with one belief: that design, strategy, and
              storytelling should work as one seamless system — not three separate
              conversations. We work with founders and teams who refuse to blend in.
            </p>
          </div>

          <div>
            <h2 style={{
              margin: '0 0 20px',
              fontFamily: ARCHIVO_BLACK, fontWeight: 900,
              fontSize: 'clamp(26px, 3.2vw, 46px)',
              color: '#0a0a0a', lineHeight: 1.1, letterSpacing: '-0.03em',
            }}>
              Our Mission
            </h2>
            <p style={{
              margin: 0, fontFamily: ARCHIVO, fontWeight: 400,
              fontSize: 'clamp(14px, 1.1vw, 16px)', color: '#555', lineHeight: 1.8,
            }}>
              Our mission is to help ambitious businesses show up boldly — with visual
              systems, digital experiences, and stories that cut through noise and
              convert. We don&apos;t just make things look good. We make them work hard,
              feel right, and last long.
            </p>
          </div>
        </div>
      </div>

      {/* ── Swiper photo track ── */}
      <style>{`.about-swiper .swiper-wrapper { align-items: flex-start; }`}</style>
      <Swiper
        modules={[FreeMode]}
        freeMode
        grabCursor
        slidesPerView="auto"
        spaceBetween={16}
        className="about-swiper"
        style={{
          paddingLeft: 'clamp(20px, 5vw, 72px)',
          paddingRight: 'clamp(20px, 5vw, 72px)',
          height: PHOTO_H + ZZ_OFF + 8,
        }}
      >
        {PHOTOS.map((p, i) => (
          <SwiperSlide key={p.seed} style={{ width: 300, height: 'auto' }}>
            <div style={{
              width: 300,
              height: PHOTO_H,
              borderRadius: 20,
              overflow: 'hidden',
              background: '#e0e0e0',
              marginTop: i % 2 !== 0 ? ZZ_OFF : 0,
            }}>
              <img
                src={`https://picsum.photos/seed/${p.seed}/600/800`}
                alt={p.alt}
                style={{
                  width: '100%', height: '100%',
                  objectFit: 'cover', objectPosition: 'center top',
                  display: 'block',
                }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Swipe hint */}
      <div style={{ textAlign: 'center', marginTop: 8, padding: '0 clamp(20px, 5vw, 72px)' }}>
        <span style={{ fontFamily: ARCHIVO, fontSize: 12, color: '#C8C8C8', letterSpacing: '0.06em' }}>
          ← swipe to explore →
        </span>
      </div>

    </section>
  );
}
