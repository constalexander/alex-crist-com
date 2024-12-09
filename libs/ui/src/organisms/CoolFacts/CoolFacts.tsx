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
    <section id="CoolFacts" className="embla min-h-[350px]">
      <div
        className="hidden pattern absolute inset-0 w-full h-fit bg-stone-700 z-[-1] mb-0 mt-auto"
        aria-hidden="true"
      >
        <img
          src="/img/patterns/flat-mountains2.svg"
          alt="pattern"
          className="w-full h-full object-contain opacity-70"
        />
        <div className="hidden absolute inset-0 bg-stone-800/80 mix-blend-multiply" />
      </div>
      <div className="section-content mx-auto py-8 sm:w-[600px]">
        <div className="text-2xl text-start text-stone-400 ps-6 mb-8">
          Get to know me
        </div>

        <div className="px-6 mb-12 space-y-6 text-stone-300 prose prose-invert prose-elegant max-w-none">
          <p className="first-letter:text-[3.3rem] first-letter:font-serif first-letter:mr-[.45rem] first-letter:leading-none first-letter:float-left first-letter:text-stone-400">
            Ever curious and always learning, my journey into software started
            at an early age. In middle school, I discovered that scientific
            calculators were programmable and my new hobby began.
          </p>

          <p className="font-light leading-relaxed">
            Still as a kid, I began learning Dreamweaver, Flash, Geocities, and
            even Visual Basic. Eventually I even received a book on C++. Later
            in life, I began to teach myself PHP and MySQL using frameworks like
            CodeIgniter and Laravel.
          </p>

          <p className="font-light leading-relaxed">
            Beyond the world of code, I am an ardent advocate for knowledge
            sharing and community building. I believe that the best solutions
            emerge from collaborative environments where ideas flow freely and
            innovation is encouraged.
          </p>

          <p className="italic text-stone-400 border-l-4 border-stone-600 pl-4">
            When not immersed in development, you might find me exploring new
            technologies, contributing to open-source projects, or mentoring
            aspiring developers who share my passion for this ever-evolving
            craft.
          </p>
        </div>

        {slides.length === 0 ? (
          <div className="flex items-center justify-center h-[250px]">
            <div className="w-full max-w-[340px] h-full bg-stone-600/50 animate-pulse rounded-lg" />
          </div>
        ) : (
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

export default CoolFacts;
