'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import { Download } from 'lucide-react';
import { Button } from '../atoms/Button';

export function Leader() {
  const router = useRouter();
  const nav = (route: string) => {
    router.push(route);
  };
  return (
    <section
      id="Leader"
      className="relative min-h-[calc(100vh-120px)] sm:min-h-[500px] sm:h-[500px] bg-emerald-800"
    >
      <div
        className="pattern absolute inset-0 w-full h-full z-0 mx-auto"
        aria-hidden="true"
      >
        <img
          src="/img/patterns/vanishing-stripes.svg"
          alt="pattern"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="hidden absolute inset-0 bg-stone-800/80 mix-blend-multiply" />
      </div>
      <div className="section-content relative h-full w-[90%] sm:w-full max-w-[600px] flex flex-col mx-auto sm:flex-row bg-stone-950/60 backdrop-blur-sm border-x-2 border-emerald-700 pb-16 z-10">
        <div className="flex flex-wrap flex-col sm:flex-row items-center justify-start sm:justify-center sm:gap-16 min-h-[calc(100vh-120px)] sm:min-h-fit h-fit mx-auto sm:px-20 py-8">
          <div className="grow-0 shrink-0 relative h-full mt-2 sm:mt-8">
            <img
              src="/img/profile/alex.png"
              alt="Alex Crist"
              className="w-36 h-36 rounded-full mx-auto border-[3px] border-emerald-400/80 shadow-lg"
            />
            <a
              href="https://www.linkedin.com/in/alexcristdeveloper"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-[110px] left-[110%] -translate-x-1/2 w-20 text-center leading-[.8] bg-stone-900 px-0 pt-1 pb-1.5 rounded-xl border-[3px] border-emerald-500/80 shadow-md"
            >
              <span className="text-emerald-400 text-[11px] leading-[.8] font-semibold tracking-wide font-sans uppercase">
                Available
              </span>
            </a>
            <div className="font-handwritten text-[1.75rem] text-emerald-300 w-full text-center my-2 px-2  [text-shadow:2px_2px_2px_rgba(0,0,0,0.75)]">
              Hi, I'm Alex.
            </div>
          </div>
          <div className="flex-1 text-center py-4 sm:p-0">
            <div className="inline-block text-stone-300 leading-7">
              Versatile and innovative <br />
              frontend engineer creating <br />
              bespoke user interfaces <br />
              using modern technologies <br />
              and best practices.
            </div>
          </div>
          <div className="flex-1 basis-full mt-6 text-center">
            <a
              className="inline-block mx-auto"
              href="/Alex Crist - Frontend Engineer resume web.docx"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                className="w-[200px] text-emerald-400 uppercase shadow-emerald-lg"
              >
                <span className="sr-only">Download resume</span>
                <span className="">DOWNLOAD RESUME</span>
                <Download className="inline-block h-[18px] relative -top-[1px] left-[8px]" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Leader;
