import React, { useState } from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import { DotButton, useDotButton } from '../EmploymentExperience/DotButton';
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from '../EmploymentExperience/ArrowButtons';
import EmploymentCard from '../../molecules/EmploymentCard';

//import './CoolFacts.scss';
import '../EmploymentExperience/EmploymentExperience.scss';
import { CoolFactsDTO } from '@alex/models/lib/dto/cool-facts.dto';
import { Button } from '@alex/ui/atoms/Button';
import { ExternalLink } from 'lucide-react';

type PropType = {
  slides: CoolFactsDTO[];
  options?: EmblaOptionsType;
};

const CoolFacts: React.FC<PropType> = (props) => {
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
    <section className="cool-facts embla h-[calc(100vh-192px)] py-8">
      <div className="text-2xl text-start text-stone-400 ps-6">
        Get to know me
      </div>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide) => (
            <div className={`embla__slide ${isFlipped ? 'flipped' : ''}`}>
              <div className="embla__slide__content">
                <div className="text-center text-stone-400 w-full h-full p-0 select-none">
                  <span className="float-right relative -top-[20px] left-[40px] hidden">
                    0
                  </span>
                  <span className="text-md sm:text-lg text-stone-200 font-bold tracking-wider">
                    {slide.title}
                    {slide.linkout && (
                      <a
                        href={slide.linkout}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          variant="ghost"
                          className="inline-block text-lg text-emerald-400 p-0 ml-1"
                        >
                          <span className="sr-only">
                            {' '}
                            {slide.title} external link
                          </span>
                          <ExternalLink className="inline w-[14px] relative top-[-3px] left-[3px]" />
                        </Button>
                      </a>
                    )}
                  </span>
                </div>
                {/* <button onClick={handleFlip} className="flip-button text-white">
                  Flip
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
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

        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  );
};

export default CoolFacts;
