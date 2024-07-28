'use client';

import { Hahmlet as FontSerif } from 'next/font/google';
import { useRouter } from 'next/navigation';
import Menu from '../molecules/menu';
import { cn } from '../utils';
import { Button } from '../atoms/button';

const fontSerif = FontSerif({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-serif',
});

/* eslint-disable-next-line */
export interface HeaderProps {}

export function Header(props: HeaderProps) {
  const router = useRouter();
  const nav = (route: string) => {
    router.push(route);
  };

  return (
    <div className={'flex justify-between items-center w-full p-4 bg-zinc-800'}>
      <div>
        <Button
          variant="ghost"
          className={cn(
            'text-2xl text-emerald-500 tracking-wide font-serif font-bold',
            fontSerif.variable
          )}
          onClick={() => nav('/')}
        >
          <span title="Alex Crist Home page">Alex Crist</span>
        </Button>
        <div className="text-base text-stone-500 font-bold tracking-wide pl-4">
          Frontend Engineer
        </div>
      </div>
      <Menu />
    </div>
  );
}

export default Header;
