'use client';

import { useRouter } from 'next/navigation';
import { Button } from '../atoms/Button';
import { JobTitleRandomizer } from '../organisms/JobTitleRandomizer';
import { ArrowRight } from 'lucide-react';

export function Leader() {
  const router = useRouter();
  const nav = (route: string) => {
    router.push(route);
  };

  return (
    <section className="leader min-h-[calc(100vh-192px)] pt-0 pb-8 bg-emerald-950">
      <p>
        <img
          src="img/profile/mobile/large.jpg"
          alt="Alex Crist"
          className="w-full mx-auto filter opacity-90"
          style={{ filter: 'hue-rotate(90deg) saturate(.1)' }}
        />
      </p>
      <p className="text-base text-center text-stone-200 leading-5 mt-10 mb-4">
        Versatile and innovative <br /> <JobTitleRandomizer /> <br /> creating
        bespoke user interfaces <br /> using modern technologies <br />
        and best practices.
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
      </p>
    </section>
  );
}

export default Leader;
