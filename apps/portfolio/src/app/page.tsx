'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@alex/ui/atoms/Button';
import { EmploymentExperience } from '@alex/ui/organisms/EmploymentExperience';
import { JobTitleRandomizer } from '@alex/ui/organisms/JobTitleRandomizer';

export default function Page() {
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
          className="block mx-auto text-base"
          onClick={() => {
            nav('/about');
          }}
        >
          <span className="sr-only">About page</span>
          Learn more about me
        </Button>
      </p>

      <EmploymentExperience />
    </div>
  );
}
