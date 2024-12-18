'use client';

import React from 'react';

export function GetToKnowMePattern() {
  return (
    <div
      className="pattern absolute inset-0 w-full h-full z-[-1] bg-contain sm:bg-cover"
      style={{
        backgroundImage: 'url(/img/patterns/stacked-peaks-haikei.svg)',
        backgroundRepeat: 'no-repeat',
      }}
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-stone-700/0 from-10% via-stone-750 via-80% to-[#292524] to-100% z-[0]"></div>
    </div>
  );
}

export default GetToKnowMePattern;
