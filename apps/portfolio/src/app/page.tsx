'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@alex/ui/atoms/Button';
import EmploymentExperience2 from '@alex/ui/organisms/EmploymentExperience/EmploymentExperience2';
import { JobTitleRandomizer } from '@alex/ui/organisms/JobTitleRandomizer';
import { EmploymentExperienceDTO } from '@alex/models/lib/dto/employment-experience.dto';
import { EmblaOptionsType } from 'embla-carousel';

export default function Page() {
  const carouselOptions: EmblaOptionsType = { loop: true };

  const [employmentData, setEmploymentData] = useState<
    EmploymentExperienceDTO[]
  >([]);

  useEffect(() => {
    async function fetchEmploymentData() {
      const url = '/api/employment-experience';
      const response = await fetch(url, { method: 'GET', cache: 'no-store' });
      const res = await response.json();
      setEmploymentData(res);
    }
    fetchEmploymentData();
  }, []);

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

      <EmploymentExperience2
        slides={employmentData}
        options={carouselOptions}
      />
    </div>
  );
}
