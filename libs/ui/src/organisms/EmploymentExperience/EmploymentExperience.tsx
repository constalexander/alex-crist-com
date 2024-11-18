import React, { useState } from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import { EmploymentExperienceDTO } from '@alex/models/dto/employment-experience.dto';
import { DotButton, useDotButton } from './DotButton';
import { PrevButton, NextButton, usePrevNextButtons } from './ArrowButtons';
import EmploymentCard from '../../molecules/EmploymentCard';
import '../shared/embla.scss';

type PropType = {
  slides: EmploymentExperienceDTO[];
  options?: EmblaOptionsType;
};

const EmploymentExperience: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [isFlipped, setIsFlipped] = useState(false);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section id="EmploymentExperience" className="embla">
      <div
        className="pattern hidden absolute inset-0 w-full h-full z-0"
        aria-hidden="true"
      >
        <img
          src="/img/patterns/grey_wash_wall.webp"
          alt="pattern"
          className="w-full h-full object-fill opacity-full"
          style={{
            filter:
              'grayscale(100%) sepia(100%) hue-rotate(-15deg) saturate(70%) brightness(67%)',
          }}
        />
      </div>

      <div className="section-content bg-stone-750 mx-auto py-8 sm:w-[600px]">
        <div className="text-2xl text-center text-stone-400 text-end pe-6">
          Employment experience
        </div>
        <div className="text-sm text-end text-stone-400 italic relative -left-[28px] top-[2px]">
          (so far)
        </div>
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {slides.map((slide, index) => (
              <div
                className={`embla__slide ${isFlipped ? 'flipped' : ''}`}
                key={index}
              >
                <div className="embla__slide__content">
                  <EmploymentCard
                    index={index}
                    companyName={slide.companyName}
                    companyUrl={slide.companyUrl}
                    dateStarted={slide.dateStarted}
                    dateEnded={slide.dateEnded}
                    position={slide.position}
                    responsibilities={slide.responsibilities}
                    technologies={slide.technologies}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="embla__controls">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <div className="embla__dots">
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                onClick={() => onDotButtonClick(index)}
                className={'embla__dot'.concat(
                  index === selectedIndex ? ' embla__dot--selected' : ''
                )}
              />
            ))}
          </div>
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  );
};

export default EmploymentExperience;
