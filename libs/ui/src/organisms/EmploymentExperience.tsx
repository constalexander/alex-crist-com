import { useEffect, useState } from 'react';
import { Card, CardContent } from '../atoms/Card';
import {
  Carousel,
  CarouselIndicator,
  CarouselMainContainer,
  CarouselNext,
  CarouselPrevious,
  CarouselThumbsContainer,
  SliderMainItem,
} from './../molecules/EmploymentCarousel';
import EmploymentCard from '../molecules/EmploymentCard';

import { EmploymentExperienceDTO } from '@alex/models/lib/dto/employment-experience.dto';
import { cn } from '../utils';
import { SpinnerIcon } from '../atoms/icons/Spinner';

const CarouselIndicatorExample = () => {
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
    <Carousel className="my-5">
      <CarouselNext />
      <CarouselPrevious />
      <div className="relative ">
        <CarouselMainContainer className="h-60">
          {Array.from({ length: 5 }).map((_, index) => (
            <SliderMainItem key={index} className="bg-transparent">
              <div className="outline outline-1 outline-border size-full flex items-center justify-center rounded-xl bg-background w-[100vw]">
                {employmentData &&
                  employmentData.map(
                    (item: EmploymentExperienceDTO, index: number) => (
                      <div key={index} className="p-1 text-stone-200">
                        {item.companyName}
                        {/*    <Card>
                          <CardContent className="flex items-center h-full justify-center p-0">
                            {item.companyName}
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
                        </Card>*/}
                      </div>
                    )
                  )}
              </div>
            </SliderMainItem>
          ))}
        </CarouselMainContainer>
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2">
          <CarouselThumbsContainer className="gap-x-1 ">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselIndicator key={index} index={index} />
            ))}
          </CarouselThumbsContainer>
        </div>
      </div>
    </Carousel>
  );
};

export default CarouselIndicatorExample;
