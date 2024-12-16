'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useMainScrollValue } from '@alex/contexts/MainScrollContext';
import Menu from '../molecules/Menu';
import { cn } from '../utils';
import { Button } from '../atoms/Button';

/* eslint-disable-next-line */
export interface HeaderProps {
  className?: string;
}

export function Header(props: HeaderProps) {
  const router = useRouter();
  const nav = (route: string) => {
    router.push(route);
  };
  const mainScrollValue = useMainScrollValue();

  return (
    <section
      id="Header"
      className="w-full h-full z-40 bg-stone-950 border-stone-700 border-b-2 relative"
    >
      <div className="section-content relative h-full flex items-center mx-auto sm:w-[600px] px-[5.5%] sm:px-0">
        <div className="flex items-center flex-1">
          <img
            src="/img/profile/alex.png"
            alt="Alex Crist"
            className={cn(
              'border-[2px] border-emerald-400/80 shadow-emerald-sm rounded-full relative',
              {
                'w-0 h-0 opacity-0 ': mainScrollValue < 250,
                'w-[44px] h-[44px] opacity-100 mr-2': mainScrollValue >= 250,
              }
            )}
            style={{
              transition:
                'width .33s ease-in-out, height .33s ease-in-out, opacity .33s ease-in-out, margin .33s ease-in-out',
            }}
          />

          <div className="h-[44px] flex flex-col justify-start align-start text-left">
            <Button
              variant="ghost"
              className="text-[1.3rem] h-[20px] text-emerald-500 hover:text-emerald-400 tracking-wide font-sans font-semibold p-0 pr-2 ml-0 justify-start w-fit relative top-[2px]"
              onClick={() => nav('/')}
            >
              <span title="Alex Crist Home page">Alex Crist</span>
            </Button>
            <div className="block h-[24px] text-[.85rem] font-normal text-stone-400 tracking-normal relative top-[2px]">
              <span>Frontend Extraordinaire</span>
            </div>
          </div>
        </div>
        <Menu />
      </div>
    </section>
  );
}

export default Header;
