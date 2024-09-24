import './global.scss';
import Script from 'next/script';
import { Sarabun as FontSans } from 'next/font/google';
import { cn } from '@alex/ui/utils';
import { Header } from '@alex/ui/organisms/Header';
import { Footer } from '@alex/ui/organisms/Footer';

export const metadata = {
  title: 'Alex Crist | Frontend Engineer',
  description: 'Frontend engineer in North Texas',
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <Script src="/GoSquared-snippet.js" strategy="beforeInteractive" />
      </head>
      {/* prettier-ignore */}
      <body
        className={cn(`
          grid grid-rows-[auto_1fr] 
          w-screen min-h-screen 
          overflow-x-hidden overflow-y-auto 
          bg-cover bg-fixed bg-gradlin-x
          bg-stone-600
          text-foreground font-sans antialiased
          `, fontSans.variable
        )}
        style={{ fontFeatureSettings: "'rlig' 1, 'calt' 1" }}
      >
        <Header />
        <main className="grid grid-rows-[1fr] w-full min-h-full p-0 mt-[96px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
