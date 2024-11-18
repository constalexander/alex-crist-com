'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import { Button } from '../atoms/Button';

export function Leader() {
  const router = useRouter();
  const nav = (route: string) => {
    router.push(route);
  };
  return (
    <section
      id="Leader"
      className="min-h-[calc(100vh-100px)] sm:min-h-fit bg-stone-800 relative"
    >
      <div
        className="pattern absolute inset-0 w-full h-full z-0"
        aria-hidden="true"
      >
        <img
          src="/img/patterns/Firefly parchment paper pattern texture 54663.jpg"
          alt="pattern"
          className="w-full h-full object-cover opacity-full"
          style={{
            filter:
              'grayscale(100%) sepia(100%) hue-rotate(-15deg) saturate(90%) brightness(80%)',
          }}
        />
        <div className="absolute inset-0 bg-stone-800/80 mix-blend-multiply" />
      </div>
      <div className="section-content relative h-full flex flex-col mx-auto sm:flex-row sm:w-[600px] z-10">
        <div className="flex flex-col items-center py-8 sm:flex-initial sm:max-w-[400px]">
          <div className="relative">
            <img
              src="/img/profile/alex.png"
              alt="Alex Crist"
              className="w-40 h-40 rounded-full mx-auto border-4 border-emerald-500/80 shadow-lg"
            />
            <div className="absolute -bottom-[28px] left-[50%] -translate-x-1/2 w-36 text-center leading-[.8] bg-stone-800 px-2 pt-2 pb-2.5 rounded-xl border-4 border-emerald-500/80 shadow-md">
              <span className="text-emerald-400 text-xs leading-[.8] font-bold font-serif uppercase">
                Open to work
              </span>
            </div>
          </div>
          <span className="font-handwritten text-[1.75rem] text-stone-200 mt-14 mb-6">
            Hey, I'm Alex.
          </span>
          <span className="inline-block text-stone-400 text-center leading-7">
            A versatile and innovative <br />
            frontend engineer creating <br />
            bespoke user interfaces <br />
            using modern technologies <br />
            and best practices. <br />
          </span>
          <Button
            variant="ghost"
            className="block mx-auto mt-6 text-base text-emerald-400 shadow-[0_0_30px_rgba(52,211,153,0.33)]"
            onClick={() => {
              nav('/about');
            }}
          >
            <span className="sr-only">About page</span>
            <span className="">Learn more about me</span>
            <ArrowRight className="h-[18px] inline-block" />
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Leader;
