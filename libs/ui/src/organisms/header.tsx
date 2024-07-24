'use client';

import { Hahmlet as FontSerif } from 'next/font/google';
import Menu from '../molecules/menu';
import { cn } from '../utils';

const fontSerif = FontSerif({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-serif',
});

/* eslint-disable-next-line */
export interface HeaderProps {}

export function Header(props: HeaderProps) {
  return (
    <div className={'flex justify-between items-center w-full p-4 bg-zinc-800'}>
      <div>
        <div
          className={cn(
            'text-2xl text-emerald-500 tracking-wide font-serif font-bold',
            fontSerif.variable
          )}
        >
          Alex Crist
        </div>
        <div className="text-base text-stone-500 font-bold tracking-wide">
          Frontend Engineer
        </div>
      </div>
      <Menu />
    </div>
  );
}

export default Header;
