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
      className="w-full h-full z-40 bg-stone-950 border-b-2 border-stone-700 relative"
    >
      <div className="section-content relative py-4 h-full flex items-center mx-auto sm:w-[600px]">
        <div className="flex items-center flex-1">
          <img
            src="/img/profile/alex.png"
            alt="Alex Crist"
            className={cn('rounded-full relative -top-[3px] left-[4px]', {
              'w-0 h-0 opacity-0 mx-2 sm:mx-0': mainScrollValue < 250,
              'w-[44px] h-[44px] opacity-100 mx-4 sm:ml-0 sm:mr-4':
                mainScrollValue >= 250,
            })}
            style={{
              transition:
                'width .33s ease-in-out, height .33s ease-in-out, opacity .33s ease-in-out, margin .33s ease-in-out',
            }}
          />

          <div>
            <Button
              variant="ghost"
              className="text-[1.625rem] h-[28px] text-emerald-500 hover:text-emerald-600 tracking-normal font-serif font-bold py-0 pl-0 pr-8"
              onClick={() => nav('/')}
            >
              <span title="Alex Crist Home page">Alex Crist</span>
            </Button>
            <div className="text-[1rem] text-stone-300 tracking-normal relative -top-[2px]">
              Frontend Engineer
            </div>
          </div>
        </div>
        <Menu />
      </div>
    </section>
  );
}

export default Header;
