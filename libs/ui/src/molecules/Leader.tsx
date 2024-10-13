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
    <div className="">
      <p className="text-stone-200 text-center text-base leading-5 pt-8 pb-12 bg-emerald-950">
        Versatile and innovative <br /> <JobTitleRandomizer /> <br /> creating
        bespoke user interfaces <br /> using modern technologies <br />
        and best practices.
        <Button
          variant="ghost"
          className="block mx-auto text-base text-emerald-400"
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
  );
}

export default Leader;
