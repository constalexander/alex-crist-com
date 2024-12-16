'use client';

import React from 'react';
import { motion } from 'framer-motion';

export function ProfilePhoto() {
  return (
    <div className="my-8">
      <img
        src="/img/profile/alex.png"
        alt="Alex Crist"
        className="w-36 h-36 rounded-full mx-auto border-[3px] border-emerald-400/80 shadow-emerald-lg"
      />
      <motion.div
        initial={{ opacity: 0, x: '-100vw' }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.75 }}
      >
        <a
          href="https://www.linkedin.com/in/alexcristdeveloper"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute -translate-y-[2px] w-full text-center leading-[.8] bg-stone-900 px-0 pt-1 pb-1.5 rounded-full border-[3px] border-emerald-500/80 shadow-emerald-sm"
        >
          <span className="text-emerald-400 text-[11px] leading-[1] font-semibold tracking-wide font-sans uppercase flex items-center justify-center gap-1 pt-[1px]">
            <span className="w-[10px] h-[10px] rounded-full bg-emerald-400 translate-x-[-2px] translate-y-[1px]"></span>
            Available for hire
          </span>
        </a>
      </motion.div>
    </div>
  );
}

export default ProfilePhoto;
