'use client';

import { Hahmlet as FontSerif } from 'next/font/google';
import { useRouter } from 'next/navigation';
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

  return (
    <div
      id="Header"
      className="flex justify-between items-center w-full h-full p-4 z-40 bg-stone-950"
    >
      <img
        src="img/headshot3.jpg"
        alt="Alex Crist logo"
        className="w-[38px] h-[44px] rounded-full opacity-90 relative -top-[3px] left-[4px]"
      />

      <div>
        <Button
          variant="ghost"
          className={cn(
            'text-[1.625rem] text-emerald-500 hover:text-emerald-600 tracking-normal font-serif font-bold py-0',
            fontSerif.variable
          )}
          onClick={() => nav('/')}
        >
          <span title="Alex Crist Home page">Alex Crist</span>
        </Button>
        <div className="text-[1rem] text-stone-300 tracking-normal pl-4 relative -top-[8px]">
          Frontend Engineer
        </div>
      </div>
      <div className="w-full">asdf</div>
      <Menu />
    </div>
  );
}

export default Header;
