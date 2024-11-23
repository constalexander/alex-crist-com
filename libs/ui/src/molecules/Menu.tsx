'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Menu as MenuIcon, X } from 'lucide-react';
import { Button } from '../atoms/Button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './Dropdown';
import MenuItem from './menu/MenuItem';
import SocialIcons from './menu/SocialIcons';

export function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuItemActive, setIsMenuItemActive] = useState(false);

  const menuOpenChange = (e: boolean) => {
    setIsMenuOpen(e);
  };

  const router = useRouter();
  const nav = (route: string) => {
    router.push(route);
    setIsMenuOpen(false);
  };

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    router.push('/');
    setTimeout(() => {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <>
      {isMenuOpen && (
        <div className="fixed inset-0 bg-stone-800 bg-opacity-50 backdrop-blur-sm"></div>
      )}
      <DropdownMenu open={isMenuOpen} onOpenChange={(e) => menuOpenChange(e)}>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="text-2xl text-stone-400 relative right-3"
          >
            <span className="sr-only">Open menu</span>
            <MenuIcon size={32} />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent
          className="fixed top-[-54px] left-[32px] right-[0px] bottom-[0px] w-[260px] h-[100vh] bg-stone-900 bg-opacity-70 backdrop-blur-sm border-emerald-950 transform -translate-x-full transition duration-300 ease-in-out shadow-2xl shadow-stone-400/40 z-50 flex flex-col"
          sideOffset={0}
          side="bottom"
          hideWhenDetached
          align="center"
        >
          <div
            className="pattern absolute inset-0 w-full h-full z-0"
            aria-hidden="true"
          >
            <img
              src="/img/patterns/vanishing-stripes.svg"
              alt="pattern"
              className="w-full h-full object-cover opacity-50"
              style={{ filter: 'blur(4px)' }}
            />

            <div className="hidden absolute inset-0 bg-stone-800/80 mix-blend-screen" />
          </div>
          <DropdownMenuItem
            className="flex w-full justify-end h-[64px] rounded-none border-b-2 border-emerald-800 p-0 m-0 focus:bg-transparent"
            onSelect={(e) => {
              e.preventDefault();
            }}
          >
            <Button
              variant="ghost"
              size="icon"
              className="inline-block w-8 h-8 text-stone-300 m-[12px]"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <X size={32} />
            </Button>
          </DropdownMenuItem>

          <div className="flex-1 overflow-y-auto mt-3">
            <DropdownMenuItem
              className={
                isMenuItemActive ? 'bg-emerald-800' : 'focus:bg-transparent'
              }
              onSelect={(e) => {
                e.preventDefault();
                scrollToSection('employment-experience');
              }}
            >
              <MenuItem
                label="Employment"
                onClick={() => scrollToSection('employment-experience')}
              />
            </DropdownMenuItem>

            <DropdownMenuItem
              className={
                isMenuItemActive ? 'bg-emerald-800' : 'focus:bg-transparent'
              }
              onSelect={(e) => {
                e.preventDefault();
                scrollToSection('cool-facts');
              }}
            >
              <MenuItem
                label="Get to Know Me"
                onClick={() => scrollToSection('cool-facts')}
              />
            </DropdownMenuItem>

            <DropdownMenuItem
              className={
                isMenuItemActive ? 'bg-emerald-800' : 'focus:bg-transparent'
              }
              onSelect={(e) => {
                e.preventDefault();
                nav('/projects');
              }}
            >
              <MenuItem label="Projects" />
            </DropdownMenuItem>

            <DropdownMenuItem
              className={
                isMenuItemActive ? 'bg-emerald-800' : 'focus:bg-transparent'
              }
              onSelect={(e) => {
                e.preventDefault();
                window.open('https://boodi.ai', '_blank');
              }}
            >
              <span className="ml-4">&diams;</span>
              <MenuItem label="Boodi.ai" className="text-lg" />
            </DropdownMenuItem>
          </div>

          <SocialIcons />
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}

export default Menu;
