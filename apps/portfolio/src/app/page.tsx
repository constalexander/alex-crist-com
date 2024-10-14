'use client';

import { useEffect, useState } from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import { Leader } from '@alex/ui/molecules/Leader';
import EmploymentExperience2 from '@alex/ui/organisms/EmploymentExperience/EmploymentExperience2';
import { EmploymentExperienceDTO } from '@alex/models/lib/dto/employment-experience.dto';
import CoolCards from '@alex/ui/molecules/CoolCards';

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

  return (
    <div className="">
      <Leader />
      <EmploymentExperience2
        slides={employmentData}
        options={carouselOptions}
      />
      <CoolCards />
    </div>
  );
}
