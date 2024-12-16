'use client';

import React from 'react';

export function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block text-sm px-2 pb-[2px] m-1 rounded-full bg-emerald-900 text-emerald-400 border border-emerald-400 cursor-default shadow-emerald-lg">
      {children}
    </span>
  );
}

export default Pill;
