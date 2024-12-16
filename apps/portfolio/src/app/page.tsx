'use client';

import { useEffect, useState } from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import { Header } from '@alex/ui/organisms/Header';
import { Leader, LeaderContent } from '@alex/ui/molecules/Leader';
import { TechStack } from '@alex/ui/molecules/TechStack';
import EmploymentExperience from '@alex/ui/organisms/EmploymentExperience/EmploymentExperience';
import { EmploymentExperienceDTO } from '@alex/models/dto/employment-experience.dto';
import { GetToKnowMeDTO } from '@alex/models/dto/get-to-know-me.dto';
import {
  GetToKnowMe,
  GetToKnowMeContent,
} from '@alex/ui/organisms/GetToKnowMe';
import { Footer } from '@alex/ui/organisms/Footer';
import { ProfilePhoto } from '@alex/ui/atoms/ProfilePhoto';

export default function Page() {
  const [loop, setLoop] = useState(true);
  const carouselOptions: EmblaOptionsType = { loop: loop };

  const [employmentData, setEmploymentData] = useState<
    EmploymentExperienceDTO[]
  >([]);

  const [getToKnowMeData, setGetToKnowMeData] = useState<GetToKnowMeDTO[]>([]);

  useEffect(() => {
    async function getEmploymentData() {
      const url = '/api/employment-experience';
      const response = await fetch(url, { method: 'GET', cache: 'no-store' });
      const res = await response.json();
      setEmploymentData(res);
    }
    getEmploymentData();

    async function getGetToKnowMeData() {
      const url = '/api/get-to-know-me';
      const response = await fetch(url, { method: 'GET', cache: 'no-store' });
      const res = await response.json();
      setGetToKnowMeData(res);
    }
    getGetToKnowMeData();

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
      <Header />
      <main className="overflow-x-hidden overflow-y-auto w-full min-h-full p-0 m-0">
        <Leader>
          <LeaderContent photo={<ProfilePhoto />} />
        </Leader>
        <TechStack />
        <EmploymentExperience
          slides={employmentData}
          options={carouselOptions}
        />
        <GetToKnowMe>
          <GetToKnowMeContent
            slides={getToKnowMeData}
            options={carouselOptions}
          />
        </GetToKnowMe>
        <Footer />
      </main>
    </>
  );
}
