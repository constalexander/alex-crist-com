import './global.scss';

export const metadata = {
  title: 'Alex Crist',
  description: 'Software engineer in North Texas',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Alex Crist | Software Engineer</title>
        <base href="/" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </head>
      <body className="w-screen min-h-screen overflow-x-hidden overflow-y-auto">
        {children}
      </body>
    </html>
  );
}
