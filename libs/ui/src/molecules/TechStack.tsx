'use client';

import {
  SiJavascript,
  SiTypescript,
  SiAngular,
  SiReact,
  SiHtml5,
  SiNodedotjs,
  SiNextdotjs,
  SiTailwindcss,
  SiGithub,
} from '@icons-pack/react-simple-icons';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Pill } from '../atoms/Pill';

export function TechStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.section
      id="TeckStack"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.75 }}
      className="h-0 w-full relative -top-[180px] sm:-top-[140px] z-10 p-0 m-0"
    >
      <div className="h-fit w-[90%] max-w-[700px] bg-stone-950 rounded-xl shadow-stone-lg border-2 border-stone-800 py-2 mx-auto">
        <div className="text-3xl  font-serif font-semibold italic text-stone-400 [text-shadow:4px_4px_2px_rgba(21,19,17,.5)] text-center mt-2">
          Tech stack
        </div>
        <div className="w-[70%] max-w-[300px] grid grid-cols-5 sm:grid-cols-10 gap-x-4 gap-y-6 mx-auto my-6">
          <SiJavascript
            className="w-6 h-6 text-stone-500 hover:text-yellow-400 transition-all transform hover:scale-[1.25] hover:rotate-[0deg] duration-75"
            title="JavaScript"
          />
          <SiTypescript
            className="w-6 h-6 text-stone-500 hover:text-blue-400 transition-all transform hover:scale-[1.25] hover:rotate-[0deg] duration-75"
            title="TypeScript"
          />
          <SiAngular
            className="w-6 h-6 text-stone-500 hover:text-red-500 transition-all transform hover:scale-[1.25] hover:rotate-[0deg] duration-75"
            title="Angular"
          />
          <SiReact
            className="w-6 h-6 text-stone-500 hover:text-cyan-400 transition-all transform hover:scale-[1.25] hover:rotate-[0deg] duration-75"
            title="React"
          />
          <SiNodedotjs
            className="w-6 h-6 text-stone-500 hover:text-green-400 transition-all transform hover:scale-[1.25] hover:rotate-[0deg] duration-75"
            title="NodeJS"
          />
          <SiNextdotjs
            className="w-6 h-6 text-stone-500 hover:text-stone-300 transition-all transform hover:scale-[1.25] hover:rotate-[0deg] duration-75"
            title="NextJS"
          />
          <SiHtml5
            className="w-6 h-6 text-stone-500 hover:text-orange-500 transition-all transform hover:scale-[1.25] hover:rotate-[0deg] duration-75"
            title="HTML5"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 1000 1000"
            role="img"
            aria-labelledby="css-logo-title css-logo-description"
            className="group bg-transparent transition-all transform hover:scale-[1.25] hover:rotate-[0deg] duration-75"
          >
            <title id="css-logo-title">CSS Logo</title>
            <desc id="css-logo-description">
              A purple square with rounded corners and the letters CSS inside in
              white
            </desc>
            <path
              className="fill-stone-500 group-hover:fill-[rebeccapurple]"
              d="M0 0H840A160 160 0 0 1 1000 160V840A160 160 0 0 1 840 1000H160A160 160 0 0 1 0 840V0Z"
            />
            <path
              className="fill-stone-950 group-hover:fill-stone-300"
              d="M253 817V649c0-67 43-103 108-103 64-1 104 41 102 112h-74c2-27-10-47-30-46-25 0-32 17-32 49v146c0 31 10 46 32 47 23 0 32-23 30-49h74c4 73-42 116-107 115-63 0-103-35-103-103Zm237-12h69c1 32 11 52 33 52s30-13 30-43c0-25-11-39-38-52l-26-12c-46-22-65-49-65-103 0-60 38-102 100-102s95 43 96 113h-67c0-29-6-49-28-49-20 0-30 10-30 35s9 35 33 45l24 11c51 24 73 55 73 113 0 69-39 107-103 107s-100-44-101-115Zm226 0h70c0 32 11 52 32 52s30-13 30-43c0-25-10-39-38-52l-26-12c-46-22-64-49-64-103 0-60 37-102 100-102s94 43 96 113h-67c-1-29-7-49-29-49-20 0-29 10-29 35s8 35 32 45l25 11c50 24 72 55 72 113 0 69-39 107-103 107s-100-44-101-115Z"
            />
          </svg>
          <SiTailwindcss
            className="w-6 h-6 text-stone-500 hover:text-cyan-400 transition-all transform hover:scale-[1.25] hover:rotate-[0deg] duration-75"
            title="TailwindCSS"
          />
          <SiGithub
            className="w-6 h-6 text-stone-500 hover:text-stone-300 transition-all transform hover:scale-[1.25] hover:rotate-[0deg] duration-75"
            title="GitHub"
          />
        </div>
        <div className="text-center text-stone-400 max-w-[90%] md:max-w-[50%] mx-auto mb-2">
          <div className="mb-4">
            <span className="font-bold italic mr-2">Plus!</span>
            AI-literacy with&hellip;
            <br />
          </div>
          <Pill>GitHub Copilot</Pill>
          <Pill>Cursor IDE</Pill>
          <Pill>ChatGPT</Pill>
          <Pill>Anthropic Claude</Pill>
          <Pill>GPT Engineer/Lovable</Pill>
          <Pill>OpenHands (OpenDevin)</Pill>
        </div>
      </div>
    </motion.section>
  );
}

export default TechStack;
