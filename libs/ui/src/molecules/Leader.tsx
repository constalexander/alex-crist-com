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
      className="relative min-h-[calc(100vh-100px)] sm:min-h-fit bg-emerald-800 m-0 pb-20"
    >
      <div
        className="pattern absolute inset-0 w-full sm:w-[600px] h-full z-0 mx-auto"
        aria-hidden="true"
      >
        <img
          src="/img/patterns/vanishing-stripes.svg"
          alt="pattern"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="hidden absolute inset-0 bg-stone-800/80 mix-blend-multiply" />
      </div>
      <div className="section-content relative h-full flex flex-col mx-auto sm:flex-row sm:w-[600px] z-10">
        <div className="flex flex-col items-center py-8 sm:flex-initial sm:max-w-[400px]">
          <div className="relative">
            <img
              src="/img/profile/alex.png"
              alt="Alex Crist"
              className="w-40 h-40 rounded-full mx-auto border-[3px] border-stone-400/80 shadow-lg"
            />
            <a
              href="https://www.linkedin.com/in/alexcristdeveloper"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-[24px] left-[98%] -translate-x-1/2 w-20 text-center leading-[.8] bg-stone-900 px-0 pt-1 pb-1.5 rounded-xl border-[3px] border-emerald-500/80 shadow-md"
            >
              <span className="text-emerald-400 text-[11px] leading-[.8] font-semibold tracking-wide font-sans uppercase">
                Available
              </span>
            </a>
          </div>
          <span
            className="font-handwritten text-[1.75rem] text-emerald-300 mt-14 mb-6 bg-emerald-950 px-2 bg-opacity-30 backdrop-blur-sm"
            style={{ textShadow: '3px 3px 1px rgba(0, 0, 0, .2)' }}
          >
            Hey, I'm Alex.
          </span>
          <span
            className="inline-block text-stone-400 text-center leading-7 bg-stone-950 p-2 bg-opacity-30 backdrop-blur-sm"
            style={{ textShadow: '3px 3px 1px rgba(0, 0, 0, .9)' }}
          >
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
