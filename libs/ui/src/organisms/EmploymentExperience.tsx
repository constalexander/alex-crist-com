import { Hahmlet as FontSerif } from 'next/font/google';
import { EmploymentExperienceDTO } from '@alex/models/lib/dto/employment-experience.dto';
import { cn } from '../utils';
import { Card, CardContent } from '../atoms/Card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../molecules/Carousel';
import EmploymentCard from '../molecules/EmploymentCard';

const fontSerif = FontSerif({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-serif',
});

/* eslint-disable-next-line */
export interface EmploymentExperienceProps {}

async function fetchEmploymentData() {
  const url = `${process.env.PORTFOLIO_PUBLIC_API_BASE}/api/employment-experience`;
  const response = await fetch(url, { method: 'GET', cache: 'no-store' });
  return response.json();
}

export async function EmploymentExperience() {
  const employmentData = await fetchEmploymentData();

  return (
    <div className="px-[40px]">
      <h1
        className={cn(
          'font-serif text-xl text-stone-400 tracking-wide text-center mb-5',
          fontSerif.variable
        )}
      >
        EMPLOYMENT EXPERIENCE
      </h1>

      <Carousel className="w-full max-w-sm h-full mx-auto">
        <CarouselContent className="-ml-1">
          {employmentData.map(
            (item: EmploymentExperienceDTO, index: number) => (
              <CarouselItem
                key={index}
                className="pl-1 md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1 text-stone-200">
                  <Card>
                    <CardContent className="flex items-center h-full justify-center p-0">
                      <EmploymentCard
                        index={index}
                        companyName={item.companyName}
                        companyUrl={item.companyUrl}
                        dateStarted={item.dateStarted}
                        dateEnded={item.dateEnded}
                        position={item.position}
                        responsibilities={item.responsibilities}
                        technologies={item.technologies}
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            )
          )}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default EmploymentExperience;
