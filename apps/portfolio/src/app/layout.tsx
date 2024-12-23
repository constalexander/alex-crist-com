import type { Metadata } from 'next';
import Script from 'next/script';
import {
  Sarabun as FontSans,
  Amarante as FontSerif,
  Farsan as FontHandwritten,
} from 'next/font/google';
import { cn } from '@alex/ui/utils';
import MainTemplate from '@alex/ui/templates/Main.template';
import './global.scss';

export const metadata: Metadata = {
  title: 'Alex Crist | Fullstack Extraordinaire',
  description: 'Fullstack engineer in North Texas',
  icons: {
    icon: '/code.ico',
  },
  metadataBase: new URL('https://alex-crist.com'),
  openGraph: {
    siteName: 'Alex Crist',
    images: [
      {
        url: '/img/profile/alex.png',
        width: 400,
        height: 400,
        alt: 'Alex Crist',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/img/profile/alex.png'],
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'dark',
};

const fontSans = FontSans({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-sans',
  preload: true,
});

const fontSerif = FontSerif({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-serif',
  preload: true,
});

const fontHandwritten = FontHandwritten({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-handwritten',
  preload: true,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        'w-full h-full',
        fontSans.variable,
        fontSerif.variable,
        fontHandwritten.variable
      )}
    >
      <body
        className={cn(
          ` 
          grid 
          grid-cols-[1fr] 
          grid-rows-[70px_1fr] 
          w-full h-full
          overflow-auto
          text-foreground font-sans antialiased  
          bg-stone-800
          `
        )}
        style={{ fontFeatureSettings: "'rlig' 1, 'calt' 1" }}
      >
        <MainTemplate>{children}</MainTemplate>
        <Script src="/GoSquared-snippet.js" strategy="beforeInteractive" />
      </body>
    </html>
  );
}
