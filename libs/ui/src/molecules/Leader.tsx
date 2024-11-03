'use client';

import { useRouter } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import { Button } from '../atoms/Button';
import { JobTitleRandomizer } from '../organisms/JobTitleRandomizer';

export function Leader() {
  const router = useRouter();
  const nav = (route: string) => {
    router.push(route);
  };
  return (
    <section
      id="Leader"
      className="min-h-[calc(100vh-192px)] sm:min-h-fit bg-emerald-950 "
    >
      <div className="leader-content h-full flex flex-col mx-auto bg-emerald-900 sm:flex-row sm:w-[600px]">
        <p className="sm:flex-initial sm:max-w-[400px]">
          <img
            src="img/profile/mobile/large.jpg"
            alt="Alex Crist"
            className="w-full mx-auto filter opacity-90"
            style={{ filter: 'hue-rotate(90deg) saturate(.1)' }}
          />
        </p>
        <p className="text-base text-center text-stone-200 leading-5 mt-10 mb-4 sm:basis-[800px]">
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
      </div>
    </section>
  );
}

export default Leader;
