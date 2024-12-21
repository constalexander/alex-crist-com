'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Menu as MenuIcon, X } from 'lucide-react';
import { scrollIntoView } from '@alex/utils/scrollIntoView';
import { Button } from '../atoms/Button';
import { Popover, PopoverTrigger, PopoverContent } from '../atoms/Popover';
import MenuItem from './menu/MenuItem';
import SocialIcons from './menu/SocialIcons';
import { ResumePopup } from '../organisms/popups/ResumePopup';

export function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const router = useRouter();

  const nav = (route: string) => {
    setIsMenuOpen(false);
    router.push(route);
  };

  const handleScroll = (id: string, offset = 0) => {
    setIsMenuOpen(false);
    scrollIntoView(id, offset);
  };

  const handleResumeClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    window._gs('event', 'Menu: Open resumé dialog');
    setIsMenuOpen(false);
    setIsResumeOpen(true);
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
          bg-stone-800 border-2 border-stone-600
          flex flex-col 
          px-4 sm:px-1 py-0 m-0 z-50"
          align="center"
        >
          <div className="flex-1 overflow-y-auto my-3">
            <MenuItem
              label="◆&nbsp;&nbsp;Employment"
              onClick={() => handleScroll('EmploymentExperience', -190)}
            />
            <MenuItem
              label="◆&nbsp;&nbsp;Get to Know Me"
              onClick={() => handleScroll('GetToKnowMe', -10)}
            />
            <MenuItem
              label="◆&nbsp;&nbsp;My Resume"
              onClick={handleResumeClick}
            />
            <MenuItem
              label="◇&nbsp;&nbsp;Projects"
              className="cursor-default !text-stone-400"
            />
            <ul>
              <li className="pl-6">
                <MenuItem
                  label="⬥&nbsp;&nbsp;Boodi.ai"
                  onClick={() => {
                    window.open('https://boodi.ai', '_blank');
                    window._gs('event', 'Menu click: boodi.ai');
                  }}
                  className="text-md"
                />
              </li>
              <li className="pl-6">
                <MenuItem
                  label="⬥&nbsp;&nbsp;Growing Zone Finder"
                  onClick={() => {
                    window.open('https://growzone.surge.sh/', '_blank');
                    window._gs('event', 'Menu click: growzone.surge.sh');
                  }}
                  className="text-md"
                />
              </li>
            </ul>
          </div>

          <SocialIcons onResumeClick={handleResumeClick} />
        </PopoverContent>
      </Popover>

      <ResumePopup open={isResumeOpen} onOpenChange={setIsResumeOpen} />
    </>
  );
}

export default Menu;
