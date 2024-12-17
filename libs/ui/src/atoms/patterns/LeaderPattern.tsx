'use client';

import React from 'react';

export function LeaderPattern() {
  return (
    <div
      className="pattern absolute inset-0 w-full h-full z-0 mx-auto"
      style={{
        backgroundImage: 'url(/img/patterns/stacked-steps-haikei.svg)',
        backgroundRepeat: 'repeat-x',
      }}
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-700/0 from-40% via-emerald-950/50 via-60% to-stone-750 to-100% z-[0]"></div>
    </div>
  );
}

export default LeaderPattern;
