'use client';

import { Hahmlet as FontSerif } from 'next/font/google';
import { cn } from '../utils';
import { Card, CardContent } from '../atoms/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../molecules/carousel';

const fontSerif = FontSerif({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-serif',
});

/* eslint-disable-next-line */
export interface EmploymentExperienceProps {}

export function EmploymentExperience(props: EmploymentExperienceProps) {
  return (
    <>
      <h1
        className={cn(
          'font-serif text-[4vw] text-stone-400 tracking-widest',
          fontSerif.variable
        )}
      >
        EMPLOYMENT EXPERIENCE
      </h1>
      <Carousel className="w-full max-w-sm">
        <CarouselContent className="-ml-1">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/2 lg:basis-1/3"
            >
              <div className="p-1 text-stone-200">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-2xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
}

export default EmploymentExperience;
