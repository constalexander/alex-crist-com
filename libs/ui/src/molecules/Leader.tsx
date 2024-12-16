'use client';

import React from 'react';
import { Download } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '../atoms/Button';
import { LeaderPattern } from '../atoms/patterns/LeaderPattern';

type LeaderProps = {
  children: React.ReactNode;
};

export function Leader({ children }: LeaderProps) {
  return (
    <section
      id="Leader"
      className="relative min-h-[calc(100vh-120px)] sm:min-h-[500px] sm:h-[500px] bg-stone-800"
    >
      <LeaderPattern />
      <div className="section-content relative h-full w-[75%] sm:w-full max-w-[600px] flex flex-col mx-auto sm:flex-row bg-stone-950/60 backdrop-blur-sm border-x-2 border-stone-900 pb-44 z-10">
        {children}
      </div>
    </section>
  );
}

type LeaderContentProps = {
  photo: React.ReactNode;
};

export function LeaderContent({ photo }: LeaderContentProps) {
  return (
    <div className="flex flex-wrap flex-col sm:flex-row items-center justify-start sm:justify-center sm:gap-16 min-h-[calc(100vh-120px)] sm:min-h-fit h-fit mx-auto mb-8 sm:px-20 py-8">
      <div>
        <div className="font-handwritten text-[1.95rem] text-stone-300 text-center my-2 px-2 [text-shadow:2px_2px_2px_rgba(0,0,0,0.75)]">
          Hi, I'm
          <span className="font-handwritten text-[1.95rem] text-emerald-400 ml-1.5">
            Alex
          </span>
        </div>
        <div className="grow-0 shrink-0 relative min-h-36 h-full mt-2 sm:mt-8">
          {photo}
        </div>
      </div>
      <LeaderText />
      <LeaderButton />
    </div>
  );
}

function LeaderText() {
  return (
    <div className="flex-1 text-center py-4 sm:p-0">
      <div className="inline-block text-stone-300 leading-7">
        Versatile and innovative <br />
        frontend engineer creating <br />
        bespoke user interfaces <br />
        using modern technologies <br />
        and best practices.
      </div>
    </div>
  );
}

function LeaderButton() {
  return (
    <div className="flex-1 basis-full mt-2 text-center">
      <motion.div
        initial={{ opacity: 0, x: '100vw' }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.75 }}
      >
        <Button
          variant="outline"
          className="w-[200px] text-emerald-400 uppercase shadow-emerald-lg"
          onClick={() =>
            window.open(
              'Alex Crist - Frontend Engineer 2412.14 web.docx',
              '_blank'
            )
          }
        >
          <span className="sr-only">Download resumé</span>
          <span className="">DOWNLOAD RESUMÉ</span>
          <Download className="inline-block h-[18px] relative -top-[1px] left-[8px]" />
        </Button>
      </motion.div>
    </div>
  );
}

export default Leader;
