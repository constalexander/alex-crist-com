import React from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import { ExternalLink } from 'lucide-react';
import { CoolFactsDTO } from '@alex/models/dto/cool-facts.dto';
import { DotButton, useDotButton } from '../EmploymentExperience/DotButton';
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from '../EmploymentExperience/ArrowButtons';
import { Button } from '../../atoms/Button';
import '../shared/embla.scss';

type PropType = {
  slides: CoolFactsDTO[];
  options?: EmblaOptionsType;
};

const CoolFacts: React.FC<PropType> = (props) => {
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
    <section id="CoolFacts" className="embla">
      <div className="section-content bg-stone-700 mx-auto py-8 sm:w-[600px]">
        <div className="text-2xl text-start text-stone-400 ps-6">
          Get to know me
        </div>
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {slides.map((slide, index) => (
              <div className="embla__slide" key={index}>
                <div className="embla__slide__content">
                  <div className="text-left text-stone-400 w-full h-full p-6 select-none flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="flex flex-col items-start justify-between">
                        <h3 className="text-xl sm:text-3xl font-bold tracking-tight text-stone-200">
                          {slide.title}
                        </h3>
                      </div>
                      <p className="text-base leading-relaxed pt-4">
                        {slide.description}
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
                                {slide.title} external link
                              </span>
                              <ExternalLink className="inline w-[14px] relative top-[-3px] left-[3px]" />
                            </Button>
                          </a>
                        )}
                      </p>
                    </div>
                  </div>
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

export default CoolFacts;
