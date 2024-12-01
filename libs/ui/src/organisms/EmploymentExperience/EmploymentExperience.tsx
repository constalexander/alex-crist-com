import React from 'react';
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

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section
      id="EmploymentExperience"
      className="embla relative min-h-[450px] bg-stone-750 m-0 pt-[100px]"
    >
      <div
        className="pattern absolute inset-0 w-full h-full z-[-1]"
        aria-hidden="true"
      >
        {/* <img
          src="/img/patterns/grey_wash_wall.webp"
          alt="pattern"
          className="w-full h-full object-fill opacity-full"
          style={{
            filter:
              'grayscale(100%) sepia(100%) hue-rotate(-15deg) saturate(70%) brightness(67%)',
          }}
        /> */}

        <img
          src="/img/patterns/sun-tornado1.svg"
          alt="pattern"
          className="w-full h-full object-fill opacity-70"
        />
        <div className="hidden absolute inset-0 bg-stone-800/80 mix-blend-multiply" />
      </div>

      <div className="section-content mx-auto w-full py-8 px-0 sm:w-[600px]">
        <div className="text-2xl text-stone-400 text-end pe-6">
          Employment experience
        </div>
        <div className="text-sm text-end text-stone-400 italic relative -left-[28px] top-[2px]">
          (so far)
        </div>
        {slides.length === 0 ? (
          <div className="flex items-center justify-center h-[350px]">
            <div className="w-full max-w-[340px] h-full bg-stone-800/50 animate-pulse rounded-lg" />
          </div>
        ) : (
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container">
              {slides.map((slide, index) => (
                <div className="embla__slide" key={index}>
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
        )}

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