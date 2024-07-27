'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Hahmlet as FontSerif } from 'next/font/google';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../molecules/dropdown';
import { Button } from '../atoms/button';
import { Menu as MenuIcon, X } from 'lucide-react';
import { cn } from '../utils';

const fontSerif = FontSerif({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-serif',
});

/* eslint-disable-next-line */
export interface MenuProps {}

export function Menu(props: MenuProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuOpenChange = (e: boolean) => {
    setIsMenuOpen(e);
  };

  const router = useRouter();
  const nav = (route: string) => {
    router.push(route);
    setIsMenuOpen(false);
  };

  return (
    <div className="text-stone-400">
      <DropdownMenu open={isMenuOpen} onOpenChange={(e) => menuOpenChange(e)}>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="text-2xl text-stone-400"
          >
            <span className="sr-only">Open menu</span>
            <MenuIcon size={32} />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent
          className="fixed top-[-23px] left-[10vw] w-[90vw] h-[100vh] bg-emerald-900 border-emerald-950 transform -translate-x-full transition duration-300 ease-in-out"
          sideOffset={-40}
          hideWhenDetached
          align="center"
        >
          <DropdownMenuItem
            className="flex w-full justify-between"
            onSelect={(e) => {
              e.preventDefault();
            }}
          >
            <div>
              {' '}
              <Button
                variant="ghost"
                size="icon"
                className="inline-block text-2xl text-stone-400 m-[12px]"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="sr-only">GitHub</span>
                INSERT GITHUB ICON HERE HOPEFULLY FROM LUCIDE-REACT
              </Button>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="inline-block text-2xl text-stone-400 m-[12px]"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <X size={32} />
            </Button>
          </DropdownMenuItem>

          <DropdownMenuItem
            className="text-3xl"
            onSelect={(e) => {
              e.preventDefault();
              nav('/about');
            }}
          >
            <Button
              variant="ghost"
              size="icon"
              className="inline-block text-2xl text-stone-400"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="sr-only">About page</span>
              About
            </Button>
          </DropdownMenuItem>

          <h2
            className={cn(
              'text-3xl text-emerald-400 font-serif font-bold',
              fontSerif.variable
            )}
          >
            Projects
          </h2>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default Menu;
