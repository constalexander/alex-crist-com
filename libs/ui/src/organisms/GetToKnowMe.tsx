'use client';

import React, { useState } from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import { ExternalLink } from 'lucide-react';
import { GetToKnowMeDTO } from '@alex/models/dto/get-to-know-me.dto';
import { DotButton, useDotButton } from './EmploymentExperience/DotButton';
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from './EmploymentExperience/ArrowButtons';
import './shared/embla.scss';
import { Button } from '../atoms/Button';
import { GetToKnowMePattern } from '../atoms/patterns/GetToKnowMePattern';
import { Autobio } from '../atoms/Autobio';

type GetToKnowMeProps = {
  children: React.ReactNode;
};

export function GetToKnowMe({ children }: GetToKnowMeProps) {
  return (
    <section id="GetToKnowMe" className="embla">
      <GetToKnowMePattern />
      <div className="section-content mx-auto py-8 sm:w-[600px]">
        {children}
      </div>
    </section>
  );
}

type GetToKnowMeContentProps = {
  slides: GetToKnowMeDTO[];
  options?: EmblaOptionsType;
};

export function GetToKnowMeContent({
  slides,
  options,
}: GetToKnowMeContentProps) {
  const [isExpanded, setIsExpanded] = useState(false);
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
    <>
      <div className="text-3xl text-center font-serif font-semibold italic text-stone-400 [text-shadow:4px_4px_2px_rgba(21,19,17,.5)] mb-8">
        Get to know me
      </div>

      <div
        className={`relative px-6 mb-12 mx-0 space-y-6 text-stone-300 prose prose-invert prose-elegant max-w-none ${
          !isExpanded
            ? 'h-[200px] sm:h-[170px] overflow-hidden rounded-xl sm:border-[3px] sm:border-stone-800/60 mx-2 sm:mx-0'
            : ''
        }`}
      >
        {!isExpanded && (
          <div className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-t from-stone-800" />
        )}
        <Autobio />
      </div>

      <div className="w-full translate-y-[-40px] text-center">
        <Button
          variant="ghost"
          className="text-emerald-400 hover:text-emerald-300 py-0 my-0 h-4"
          onClick={() => {
            window._gs('event', 'Get to know me: Expand/Collapse', {
              isExpanded: isExpanded,
            });
            setIsExpanded(!isExpanded);
          }}
        >
          {isExpanded ? 'Collapse' : 'Expand'}
        </Button>
      </div>

      {slides.length === 0 ? (
        <div className="flex items-center justify-center h-[250px]">
          <div className="w-full max-w-[340px] h-full bg-stone-600/50 animate-pulse rounded-lg" />
        </div>
      ) : (
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {slides.map((slide, index) => (
              <div
                className={`embla__slide ${
                  index === selectedIndex ? ' is-selected' : ''
                }`}
                key={index}
              >
                <div className="embla__slide__content relative">
                  <div
                    className="absolute inset-0 bg-cover bg-center z-0 opacity-80"
                    style={{ backgroundImage: `url(${slide.photo})` }}
                  />
                  <div className="absolute inset-0 bg-black/50 z-10" />
                  <div className="relative flex flex-col justify-between w-full h-full text-left text-stone-400 px-3 py-6 select-none z-20">
                    <div className="space-y-3">
                      <div className="flex flex-col items-start justify-between">
                        <h3 className="text-xl font-bold tracking-tight text-emerald-400 h-8">
                          <div className="inline-block font-serif bg-emerald-950/80 h-8 box-decoration-clone px-2 pt-[2px]">
                            {slide.title}
                          </div>
                          {slide.linkout && (
                            <a
                              href={slide.linkout}
                              onClick={() =>
                                window._gs(
                                  'event',
                                  'Get to know me card: External link',
                                  {
                                    url: slide.linkout,
                                  }
                                )
                              }
                              target="_blank"
                              rel="noopener noreferrer"
                              className="absolute text-center bg-emerald-950/80 box-decoration-clone h-8 w-6"
                            >
                              <Button
                                variant="ghost"
                                className="inline-block text-emerald-300 h-8 p-0"
                              >
                                <span className="sr-only">
                                  {slide.title} external link
                                </span>
                                <ExternalLink className="inline w-[14px] h-[14px] translate-x-[-6px] translate-y-[-2px]" />
                              </Button>
                            </a>
                          )}
                        </h3>
                      </div>
                      <div className="whitespace-pre-line">
                        <span className="text-sm text-stone-200 font-normal leading-7 bg-stone-750/80 pt-[2px] pb-[5px] px-2 box-decoration-clone">
                          {slide.description}
                        </span>
                      </div>
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
    </>
  );
}

export default GetToKnowMe;
