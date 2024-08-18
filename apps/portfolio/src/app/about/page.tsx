import { Hahmlet as FontSerif } from 'next/font/google';
import { Button } from '@alex/ui/atoms/Button';
import { cn } from '@alex/ui/utils';

const fontSerif = FontSerif({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-serif',
});

/* eslint-disable-next-line */
export interface AboutProps {}

export default function About(props: AboutProps) {
  return (
    <div className="text-stone-300">
      <h1
        className={cn(
          'font-serif font-bold text-2xl text-stone-400 tracking-widest bg-stone-600 text-center my-5',
          fontSerif.variable
        )}
      >
        ABOUT
      </h1>
      <div className="max-w-[400px] w-full mx-auto flex flex-col">
        <p>Hi, I'm Alex &ndash; and I currently work as a software engineer.</p>
      </div>
    </div>
  );
}
