import './global.scss';
import { Sarabun as FontSans } from 'next/font/google';
import { cn } from '@alex/ui/utils';
import { Header } from '@alex/ui/organisms/Header';

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
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <base href="/" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </head>
      <body
        className={cn(
          'grid grid-rows-[auto_1fr] w-screen min-h-screen overflow-x-hidden overflow-y-auto bg-stone-700 font-sans antialiased',
          fontSans.variable
        )}
      >
        <Header />
        <main className="grid grid-rows-[1fr] w-full min-h-full p-4">
          {children}
        </main>
      </body>
    </html>
  );
}
