'use client';

import { useEffect, useState } from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import { Leader } from '@alex/ui/molecules/Leader';
import EmploymentExperience2 from '@alex/ui/organisms/EmploymentExperience/EmploymentExperience2';
import { EmploymentExperienceDTO } from '@alex/models/lib/dto/employment-experience.dto';
import CoolFacts from '@alex/ui/organisms/CoolFacts/CoolFacts';
import { CoolFactsDTO } from '@alex/models/lib/dto/cool-facts.dto';

export default function Page() {
  const carouselOptions: EmblaOptionsType = { loop: true };

  const [employmentData, setEmploymentData] = useState<
    EmploymentExperienceDTO[]
  >([]);

  const [coolFactsData, setCoolFactsData] = useState<CoolFactsDTO[]>([]);

  useEffect(() => {
    async function getEmploymentData() {
      const url = '/api/employment-experience';
      const response = await fetch(url, { method: 'GET', cache: 'no-store' });
      const res = await response.json();
      setEmploymentData(res);
    }
    getEmploymentData();

    async function getCoolFactsData() {
      const url = '/api/cool-facts';
      const response = await fetch(url, { method: 'GET', cache: 'no-store' });
      const res = await response.json();
      setCoolFactsData(res);
    }
    getCoolFactsData();
  }, []);

  return (
    <>
      <Leader />
      <EmploymentExperience2
        slides={employmentData}
        options={carouselOptions}
      />
      <CoolFacts slides={coolFactsData} options={carouselOptions} />
    </>
  );
}
