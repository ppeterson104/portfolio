import type { Metadata } from 'next';
import './globals.css';
import GrainEffect from '@/components/visualEffects/grain-effect';
import Cursor from '@/components/cursor/cursor';

//Metadata
export const metadata: Metadata = {
  title: 'Pete Peterson',
  description: 'The oficial portfolio of Pete Peterson. Phone: 1-770-363-9390',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <GrainEffect />
        <Cursor color="#FFF" />
        {children}
      </body>
    </html>
  );
}
