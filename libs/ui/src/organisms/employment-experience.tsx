import { Hahmlet as FontSerif } from 'next/font/google';
import { EmploymentExperienceDTO } from '@alex/models/lib/dto/employment-experience.dto';
import { cn } from '../utils';
import { Card, CardContent } from '../atoms/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../molecules/carousel';
import EmploymentCard from '../molecules/employment-card';

const fontSerif = FontSerif({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-serif',
});

/* eslint-disable-next-line */
export interface EmploymentExperienceProps {
  employmentData: EmploymentExperienceDTO[];
}

export async function EmploymentExperience() {
  const response = await fetch(
    `${process.env.PORTFOLIO_PUBLIC_API_BASE}/api/employment-experience`
  );
  const employmentData = await response.json();

  return (
    <div className="px-[40px]">
      <h1
        className={cn(
          'font-serif text-xl text-stone-400 tracking-wide text-center',
          fontSerif.variable
        )}
      >
        EMPLOYMENT EXPERIENCE
      </h1>

      <Carousel className="w-full max-w-sm">
        <CarouselContent className="-ml-1">
          {employmentData.map((item: any, index: number) => (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/2 lg:basis-1/3"
            >
              <div className="p-1 text-stone-200">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <EmploymentCard
                      companyName={item.companyName}
                      dateStarted={item.dateStarted}
                      dateEnded={item.dateEnded}
                      position={item.position}
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default EmploymentExperience;
