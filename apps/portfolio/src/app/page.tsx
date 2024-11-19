'use client';

import { useEffect, useState } from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import { Leader } from '@alex/ui/molecules/Leader';
import { TechStack } from '@alex/ui/molecules/TechStack';
import EmploymentExperience from '@alex/ui/organisms/EmploymentExperience/EmploymentExperience';
import { EmploymentExperienceDTO } from '@alex/models/dto/employment-experience.dto';
import CoolFacts from '@alex/ui/organisms/CoolFacts/CoolFacts';
import { CoolFactsDTO } from '@alex/models/dto/cool-facts.dto';

export default function Page() {
  const [loop, setLoop] = useState(true);
  const carouselOptions: EmblaOptionsType = { loop: loop };

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

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleResize = () => {
    if (window.innerWidth >= 640) {
      setLoop(false);
    } else {
      setLoop(true);
    }
  };

  return (
    <>
      <Leader />
      <TechStack />
      <EmploymentExperience slides={employmentData} options={carouselOptions} />
      <CoolFacts slides={coolFactsData} options={carouselOptions} />
    </>
  );
}

// trigger build
