'use client';

import React from 'react';

export function EmploymentExperiencePattern() {
  return (
    <div
      className="pattern absolute inset-0 w-full h-full bg-contain bg-repeat z-[-2]"
      style={{
        backgroundImage: 'url(/img/patterns/circle-scatter-haikei.svg)',
      }}
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-stone-750 from-0% via-stone-500/30 via-80% to-[#514d48] to-100% z-[0]"></div>
    </div>
  );
}

export default EmploymentExperiencePattern;
