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
    <div className={'flex justify-between items-center w-full p-4'}>
      <div>
        <div
          className={cn(
            'text-3xl text-emerald-400 tracking-wide font-serif',
            fontSerif.variable
          )}
        >
          ALEX CRIST
        </div>
        <div className="text-xl text-stone-400 tracking-wide">
          FRONTEND ENGINEER
        </div>
      </div>
      <Menu />
    </div>
  );
}

export default Header;
