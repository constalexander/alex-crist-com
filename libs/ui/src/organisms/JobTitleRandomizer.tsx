'use client';

import { useState, useEffect } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface JobTitleRandomizerProps {}

export function JobTitleRandomizer(props: JobTitleRandomizerProps) {
  const jobTitles = [
    'Software Engineer',
    'Frontend Developer',
    'UI/UX Expert',
    'Problem Solver',
  ];
  const [currentTitle, setCurrentTitle] = useState(jobTitles[0]);
  const [opacity, setOpacity] = useState(100);
  const changeInterval = 999999;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setOpacity(0);

      setTimeout(() => {
        setCurrentTitle((prevTitle) => {
          const currentIndex = jobTitles.indexOf(prevTitle);
          const nextIndex = (currentIndex + 1) % jobTitles.length;
          return jobTitles[nextIndex];
        });
        setOpacity(100);
      }, 50);
    }, changeInterval);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <span
      className={`text-base text-emerald-900 font-bold bg-emerald-500 px-2 pb-1 leading-[36px] transition-opacity duration-300 ${
        opacity === 100 ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {currentTitle}
    </span>
  );
}

export default JobTitleRandomizer;
