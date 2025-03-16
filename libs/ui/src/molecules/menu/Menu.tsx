'use client';

import React, { useState } from 'react';
import { Menu as MenuIcon, X } from 'lucide-react';
import { scrollIntoView } from '@alex/utils/scrollIntoView';
import { Button } from '../../atoms/Button';
import { Popover, PopoverTrigger, PopoverContent } from '../../atoms/Popover';
import MenuItem from './MenuItem';
import MenuFooter from './MenuFooter';
import { ResumePopup } from '../../organisms/popups/ResumePopup';

export function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const handleScroll = (id: string, offset = 0) => {
    setIsMenuOpen(false);
    scrollIntoView(id, offset);
  };

  const handleResumeClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    window._gs('event', 'Menu: Open résumé dialog');
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
          h-[calc(100vh-152px)] md:h-fit
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
              label="◆&nbsp;&nbsp;Get to know me"
              onClick={() => handleScroll('GetToKnowMe', -10)}
            />
            <MenuItem
              label="◆&nbsp;&nbsp;My résumé"
              onClick={handleResumeClick}
            />
            <MenuItem
              label="◇&nbsp;&nbsp;Projects"
              className="cursor-default !text-stone-400"
            />
            <ul>
              {/* <li className="pl-6">
                <MenuItem
                  label="⬥&nbsp;&nbsp;LightningLearn.ai"
                  className="text-md"
                  href="https://lightninglearn.ai"
                  onClick={() => {
                    window._gs('event', 'Menu click: LightningLearn.ai');
                  }}
                />
              </li> */}
              <li className="pl-6">
                <MenuItem
                  label="⬥&nbsp;&nbsp;Nsight.chat"
                  className="text-md"
                  href="https://nsight.chat"
                  onClick={() => {
                    window._gs('event', 'Menu click: Nsight.chat');
                  }}
                />
              </li>
              <li className="pl-6">
                <MenuItem
                  label="⬥&nbsp;&nbsp;Growing Zone Finder"
                  className="text-md"
                  href="https://growzone.surge.sh"
                  onClick={() => {
                    window._gs('event', 'Menu click: growzone.surge.sh');
                  }}
                />
              </li>
            </ul>
          </div>

          <MenuFooter onResumeClick={handleResumeClick} />
        </PopoverContent>
      </Popover>

      <ResumePopup open={isResumeOpen} onOpenChange={setIsResumeOpen} />
    </>
  );
}

export default Menu;
