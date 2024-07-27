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
      {/** 
      <Button variant="ghost" size="icon" className="text-2xl text-stone-400">
        <span className="sr-only">Menu</span>
        {isMenuOpen ? <X size={32} /> : <MenuIcon size={32} />}
      </Button>
    */}
      <DropdownMenu open={isMenuOpen} onOpenChange={(e) => menuOpenChange(e)}>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="text-2xl text-stone-400"
          >
            <span className="sr-only">Open menu</span>

            {isMenuOpen ? <X size={32} /> : <MenuIcon size={32} />}
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent
          className="fixed top-[-23px] left-[8vw] w-[90vw] h-[100vh] bg-emerald-900 border-emerald-950 transform -translate-x-full transition duration-300 ease-in-out"
          sideOffset={-40}
          hideWhenDetached
          align="center"
        >
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="text-2xl text-stone-400 float-right"
            >
              <span className="sr-only">Close menu</span>

              {isMenuOpen ? <X size={32} /> : <MenuIcon size={32} />}
            </Button>
          </DropdownMenuTrigger>

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
    </div>
  );
}

export default Menu;
