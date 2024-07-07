import './global.scss';
import { Sarabun as FontSans } from 'next/font/google';
import { cn } from '@alex/ui/utils';

export const metadata = {
  title: 'Alex Crist',
  description: 'Software engineer in North Texas',
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
        <title>Alex Crist | Software Engineer</title>
        <base href="/" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </head>
      <body
        className={cn(
          'bg-stone-700 w-screen min-h-screen overflow-x-hidden overflow-y-auto font-sans antialiased',
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
