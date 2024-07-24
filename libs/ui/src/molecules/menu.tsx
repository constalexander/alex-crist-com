'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../molecules/dropdown';
import { Button } from '../atoms/button';
import { Menu as MenuIcon, X } from 'lucide-react';

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
      <Button variant="ghost" size="icon" className="text-2xl text-stone-400">
        <span className="sr-only">Toggle theme</span>

        {isMenuOpen ? <X size={32} /> : <MenuIcon size={32} />}
      </Button>
      {/** 
      <DropdownMenu open={isMenuOpen} onOpenChange={(e) => menuOpenChange(e)}>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="text-2xl text-stone-400"
          >
            <span className="sr-only">Toggle theme</span>

            {isMenuOpen ? <X size={32} /> : <MenuIcon size={32} />}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="fixed top-0 left-0 right-0 w-[90vw] h-[100vh] transform -translate-y-full transition duration-300 ease-in-out"
          hideWhenDetached
          align="center"
        >
          <DropdownMenuItem
            onSelect={(e) => {
              e.preventDefault();
              nav('/about');
            }}
          >
            About
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      */}
    </div>
  );
}

export default Menu;
