import type { Metadata } from 'next';
import Script from 'next/script';
import { Sarabun as FontSans } from 'next/font/google';
import { cn } from '@alex/ui/utils';
import { Header } from '@alex/ui/organisms/Header';
import { Footer } from '@alex/ui/organisms/Footer';
import MainScrollHandler from '@alex/effects/MainScrollHandler.effect';
import './global.scss';

export const metadata: Metadata = {
  title: 'Alex Crist | Frontend Engineer',
  description: 'Frontend engineer in North Texas',
  viewport: 'width=device-width, initial-scale=1',
};

const fontSans = FontSans({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-sans',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="w-full h-full">
      <head>
        <meta charSet="utf-8" />
        <base href="/" />
        <link rel="icon" type="image/x-icon" href="/code.ico" />
        <Script src="/GoSquared-snippet.js" strategy="beforeInteractive" />
      </head>
      {/* prettier-ignore */}
      <body
        className={cn(`
          grid 
          grid-cols-[1fr] 
          grid-rows-[100px_1fr] 
          w-full h-full
          overflow-auto
          text-foreground font-sans antialiased  
          bg-stone-800
          `, fontSans.variable
        )}
        style={{ fontFeatureSettings: "'rlig' 1, 'calt' 1" }}
      >
        <Header />
        <main className={`
          overflow-x-hidden overflow-y-auto
          w-full min-h-full 
          p-0 m-0`}>
          {children}
          <Footer />
        </main>
        <MainScrollHandler />
      </body>
    </html>
  );
}
