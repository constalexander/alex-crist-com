'use client';

import { Hahmlet as FontSerif } from 'next/font/google';
import { useRouter } from 'next/navigation';
import { useMainScrollValue } from '@alex/contexts/MainScrollContext';
import Menu from '../molecules/Menu';
import { cn } from '../utils';
import { Button } from '../atoms/Button';

const fontSerif = FontSerif({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-serif',
});

/* eslint-disable-next-line */
export interface HeaderProps {
  className?: string;
}

export function Header(props: HeaderProps) {
  const router = useRouter();

  const nav = (route: string) => {
    router.push(route);
  };

  const mainScrollValue = useMainScrollValue();

  return (
    <div
      id="Header"
      className="flex justify-between items-center w-full h-full p-4 z-40 bg-stone-950 border-b border-stone-600"
    >
      <img
        src="img/profile/mobile/square.jpg"
        alt="Alex Crist"
        className={cn('rounded-full relative -top-[3px] left-[4px]', {
          'w-0 h-0 opacity-0': mainScrollValue < 250,
          'w-[44px] h-[44px] opacity-100': mainScrollValue >= 250,
        })}
        style={{
          transition:
            'width .33s ease-in-out, height .33s ease-in-out, opacity .33s ease-in-out',
        }}
      />

      <div>
        <Button
          variant="ghost"
          className={cn(
            'text-[1.625rem] h-[28px]  text-emerald-500 hover:text-emerald-600 tracking-normal font-serif font-bold py-0',
            fontSerif.variable
          )}
          onClick={() => nav('/')}
        >
          <span title="Alex Crist Home page">Alex Crist</span>
        </Button>
        <div className="text-[1rem] text-stone-300 tracking-normal pl-4 relative -top-[2px]">
          Frontend Engineer
        </div>
      </div>
      <div className="w-full">asdf</div>
      <Menu />
    </div>
  );
}

export default Header;
