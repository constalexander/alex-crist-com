'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '../atoms/button';
import { Menu as MenuIcon, X } from 'lucide-react';

/* eslint-disable-next-line */
export interface MenuProps {}

export function Menu(props: MenuProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const menuOpenChange = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const router = useRouter();
  const nav = (route: string) => {
    router.push(route);
    setIsMenuOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <div className="text-stone-400">
      <Button
        variant="ghost"
        size="icon"
        className="text-2xl text-stone-400"
        onClick={menuOpenChange}
      >
        <span className="sr-only">Menu</span>
        {isMenuOpen ? <X size={32} /> : <MenuIcon size={32} />}
      </Button>
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="fixed top-[80px] left-0 right-0 w-full h-[50vh] bg-zinc-800 text-white transform transition-transform duration-500 ease-in-out translate-y-0 z-50"
        >
          <div className="p-4">
            <ul>
              <li>
                <Button variant="ghost" onClick={() => nav('/about')}>
                  About
                </Button>
              </li>
              <li>
                <Button variant="ghost" onClick={() => nav('/services')}>
                  Services
                </Button>
              </li>
              <li>
                <Button variant="ghost" onClick={() => nav('/contact')}>
                  Contact
                </Button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Menu;
