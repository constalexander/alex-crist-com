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
    <section id="Leader" className="relative bg-stone-800">
      <LeaderPattern />
      {children}
    </section>
  );
}

type LeaderContentProps = {
  photo: React.ReactNode;
};

export function LeaderContent({ photo }: LeaderContentProps) {
  return (
    <div className="section-content h-full relative w-[75%] sm:w-full max-w-[600px] mx-auto bg-stone-950/60 backdrop-blur-sm border-x-2 border-stone-900 z-10">
      <div className="flex flex-col items-center justify-start sm:justify-center gap-8 mx-auto pt-10 pb-60">
        <div className="grow-0 shrink-0 relative h-44">{photo}</div>
        <LeaderText />
        <LeaderButton />
      </div>
    </div>
  );
}

function LeaderText() {
  return (
    <div className="flex-1 text-center">
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
    <div className="flex-1 basis-full text-center">
      <motion.div
        initial={{ opacity: 0, x: '100vw' }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.75 }}
      >
        <Button
          variant="outline"
          className="w-[200px] text-emerald-400 uppercase shadow-emerald-lg"
          onClick={() => {
            window.open('Alex Crist - Fullstack Engineer.docx', '_blank');
            window._gs('event', 'Leader: Download resumé');
          }}
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
