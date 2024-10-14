import React, { useState } from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import { DotButton, useDotButton } from './DotButton';
import { PrevButton, NextButton, usePrevNextButtons } from './ArrowButtons';
import EmploymentCard from '../../molecules/EmploymentCard';

import './EmploymentExperience.scss';

type PropType = {
  slides: any[];
  options?: EmblaOptionsType;
};

const EmploymentExperience2: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="embla py-8">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide) => (
            <div
              className={`embla__slide ${isFlipped ? 'flipped' : ''}`}
              key={slide.ordinal - 1}
            >
              <div className="embla__slide__content">
                <EmploymentCard
                  index={Number(0)}
                  companyName={slide.companyName}
                  companyUrl={slide.companyUrl}
                  dateStarted={slide.dateStarted}
                  dateEnded={slide.dateEnded}
                  position={slide.position}
                  responsibilities={slide.responsibilities}
                  technologies={slide.technologies}
                />
                {/* <button onClick={handleFlip} className="flip-button text-white">
                  Flip
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

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
      </div>
    </section>
  );
};

export default EmploymentExperience2;
