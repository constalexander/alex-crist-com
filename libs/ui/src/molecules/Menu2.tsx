'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Menu as MenuIcon, X } from 'lucide-react';
import { scrollIntoView } from '@alex/utils/scrollIntoView';
import { Button } from '../atoms/Button';
import { Popover, PopoverTrigger, PopoverContent } from '../atoms/Popover';
import MenuItem from './menu/MenuItem';
import SocialIcons from './menu/SocialIcons';

export function Menu2() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const nav = (route: string) => {
    setIsMenuOpen(false);
    router.push(route);
  };

  const handleScroll = (id: string, offset = 0) => {
    setIsMenuOpen(false);
    scrollIntoView(id, offset);
  };

  return (
    <>
      {isMenuOpen && (
        <div className="popover-screen-overlay fixed inset-0 top-[70px] bg-stone-800 bg-opacity-50 backdrop-blur-sm" />
      )}
      <Popover open={isMenuOpen} onOpenChange={setIsMenuOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="text-2xl text-stone-400 relative"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <span className="sr-only">Open menu</span>
            {isMenuOpen ? <X size={32} /> : <MenuIcon size={32} />}
          </Button>
        </PopoverTrigger>

        <PopoverContent
          className="
          h-[calc(100vh-70px)] md:h-fit
          w-[100vw] md:w-[240px] 
          translate-y-[12px] 
          bg-stone-750 border-2
          flex flex-col 
          p-0 m-0 z-50"
          align="center"
        >
          <div className="flex-1 overflow-y-auto my-3">
            <MenuItem
              label="Employment"
              onClick={() => handleScroll('EmploymentExperience', -40)}
            />
            <MenuItem
              label="Get to Know Me"
              onClick={() => handleScroll('CoolFacts', -10)}
            />
            <MenuItem
              label="My Resume"
              onClick={() => window.open('/docs/resume.docx', '_blank')}
            />
            <MenuItem label="Projects" />
            <ul>
              <li className="pl-1">
                <MenuItem
                  label="&diams;&nbsp;&nbsp;Boodi.ai"
                  onClick={() => window.open('https://boodi.ai', '_blank')}
                  className="text-md"
                />
              </li>
              <li className="pl-1">
                <MenuItem
                  label="&diams;&nbsp;&nbsp;Growing Zone Finder"
                  onClick={() =>
                    window.open('https://https://growzone.surge.sh/', '_blank')
                  }
                  className="text-md"
                />
              </li>
            </ul>
          </div>

          <SocialIcons />
        </PopoverContent>
      </Popover>
    </>
  );
}

export default Menu2;
