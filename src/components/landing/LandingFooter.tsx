import Image from 'next/image';
import logoImg from '@/app/assets/logo.png';

const navLinks = ['Work', 'Services', 'Process'];

export default function LandingFooter() {
  return (
    <>
      <style>{`
        .footer-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 24px;
        }
        .footer-nav {
          display: flex;
          gap: 28px;
          flex-wrap: wrap;
        }
.footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
          border-top: 1px solid #e7e6e3;
          padding-top: 24px;
        }
        @media (max-width: 768px) {
          .footer-outer {
            padding: 0 16px 40px !important;
            margin-top: 40px !important;
          }
          .footer-top {
            flex-direction: column;
            align-items: flex-start;
            gap: 20px;
          }
          .footer-nav {
            gap: 16px 24px;
          }
          .footer-bottom {
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
          }
        }
      `}</style>

      <footer className="footer-outer" style={{ margin: '64px 0 0', padding: `0 clamp(28px, 5vw, 72px) 48px` }}>
        <div style={{ borderTop: '1px solid #e7e6e3', paddingTop: 40, display: 'flex', flexDirection: 'column', gap: 36 }}>
          <div className="footer-top">
            {/* Logo */}
            <Image src={logoImg} alt="Blinq Labs" height={72} width={240} style={{ objectFit: 'contain', height: 72, width: 'auto' }} />

            {/* Nav links */}
            <nav className="footer-nav">
              {navLinks.map((link) => (
                <a key={link} href={`#${link.toLowerCase()}`} style={{ fontSize: 14, fontWeight: 500, color: '#8b8b8b', textDecoration: 'none' }}>
                  {link}
                </a>
              ))}
            </nav>

          </div>

          <div className="footer-bottom">
            <span style={{ fontSize: 13, color: '#8b8b8b' }}>© 2025 Blinq Labs. All rights reserved.</span>
            <div style={{ display: 'flex', gap: 20 }}>
              {['Privacy Policy', 'Terms of Service'].map((link) => (
                <a key={link} href="#" style={{ fontSize: 13, color: '#8b8b8b', textDecoration: 'none' }}>{link}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

