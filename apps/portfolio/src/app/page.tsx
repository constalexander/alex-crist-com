'use client';

import { useRouter } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import { Button } from '@alex/ui/atoms/Button';
import EmploymentExperience2 from '@alex/ui/organisms/EmploymentExperience/EmploymentExperience2';
import { JobTitleRandomizer } from '@alex/ui/organisms/JobTitleRandomizer';
import { EmblaOptionsType } from 'embla-carousel';
import CarouselIndicatorExample from '@alex/ui/organisms/EmploymentExperience';

export default function Page() {
  const OPTIONS: EmblaOptionsType = { loop: true };
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  const router = useRouter();
  const nav = (route: string) => {
    router.push(route);
  };

  return (
    <div className="">
      <p className="text-stone-200 text-center text-base leading-5 pt-8 pb-12">
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

      <EmploymentExperience2 slides={SLIDES} options={OPTIONS} />
      {/* <CarouselIndicatorExample /> */}
    </div>
  );
}
