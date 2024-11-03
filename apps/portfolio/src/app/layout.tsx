import type { Metadata } from 'next';
import Script from 'next/script';
import { Sarabun as FontSans } from 'next/font/google';
import { cn } from '@alex/ui/utils';
import MainTemplate from '@alex/ui/templates/Main.template';
import './global.scss';
import Head from 'next/head';

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
      <Head>
        <meta charSet="utf-8" />
        <base href="/" />
        <link rel="icon" type="image/x-icon" href="/code.ico" />
      </Head>
      <body
        //prettier-ignore
        className={cn(` 
          grid 
          grid-cols-[1fr] 
          grid-rows-[100px_1fr] 
          w-full h-full
          overflow-auto
          text-foreground font-sans antialiased  
          bg-stone-800
          `,
          fontSans.variable
        )}
        style={{ fontFeatureSettings: "'rlig' 1, 'calt' 1" }}
      >
        <MainTemplate>{children}</MainTemplate>
        <Script src="/GoSquared-snippet.js" strategy="beforeInteractive" />
      </body>
    </html>
  );
}
