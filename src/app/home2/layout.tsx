import { Archivo_Black, Archivo, Space_Mono } from 'next/font/google';
import Home2Cursor from '@/components/home2/Cursor';

const archivoBlack = Archivo_Black({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-archivo-black',
});

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-archivo',
});

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
});

export default function Home2Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`${archivoBlack.variable} ${archivo.variable} ${spaceMono.variable}`}
      style={{ background: '#fff', minHeight: '100vh', cursor: 'none' }}
    >
      <Home2Cursor />
      {children}
    </div>
  );
}
