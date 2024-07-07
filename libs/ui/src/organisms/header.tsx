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

/* eslint-disable-next-line */
export interface HeaderProps {}

export function Header(props: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const menuOpenChange = (e: boolean) => {
    setIsMenuOpen(e);
  };

  const router = useRouter();

  return (
    <DropdownMenu open={isMenuOpen} onOpenChange={(e) => menuOpenChange(e)}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="text-4xl text-white">
          <span className="sr-only">Toggle theme</span>
          {/* <AlignJustify /> */}=
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent hideWhenDetached align="end">
        <DropdownMenuItem
          onSelect={(e) => {
            e.preventDefault();
            router.push('/about');
          }}
        >
          About
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default Header;
