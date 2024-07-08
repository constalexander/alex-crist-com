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
import {
  Menu,
  PanelBottomClose,
  PanelLeftClose,
  PanelRightClose,
  PanelTopClose,
  SquareChevronUp,
  SquareX,
} from 'lucide-react';

/* eslint-disable-next-line */
export interface HeaderProps {}

export function Header(props: HeaderProps) {
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
    <div className={'flex justify-between items-center w-full p-2'}>
      <div className="text-stone-400 tracking-widest">ALEX CRIST</div>

      <div className="text-stone-400">
        <DropdownMenu open={isMenuOpen} onOpenChange={(e) => menuOpenChange(e)}>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="text-2xl text-stone-400"
            >
              <span className="sr-only">Toggle theme</span>

              {isMenuOpen ? <SquareX /> : <Menu />}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="fixed top-0 left-0 right-0 w-[400px] h-[100vh] transform -translate-x-full transition duration-300 ease-in-out"
            hideWhenDetached
            align="end"
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
      </div>
    </div>
  );
}

export default Header;
