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

export function TechStack() {
  return (
    <div className="h-0 w-full relative -top-[60px] sm:-top-[30px] z-20 p-0 m-0">
      <div className="h-fit w-[96%] bg-stone-950 rounded-xl shadow-stone-light border-2 border-stone-600 py-2 mx-auto">
        <div className="hidden text-2xl text-stone-400 text-center mb-6">
          Tech stack
        </div>
        <div className="w-[70%] grid grid-cols-5 sm:grid-cols-10 gap-6 mx-auto my-6">
          <SiJavascript
            className="w-6 h-6 text-yellow-400 !text-stone-500 transition-all transform hover:scale-[1.25]"
            title="JavaScript"
          />
          <SiTypescript
            className="w-6 h-6 text-blue-400 !text-stone-500 transition-all transform hover:scale-[1.25]"
            title="TypeScript"
          />
          <SiAngular
            className="w-6 h-6 text-red-500 !text-stone-500 transition-all transform hover:scale-[1.25]"
            title="Angular"
          />
          <SiReact
            className="w-6 h-6 text-cyan-400 !text-stone-500 transition-all transform hover:scale-[1.25]"
            title="React"
          />
          <SiNodedotjs
            className="w-6 h-6 text-green-400 !text-stone-500 transition-all transform hover:scale-[1.25]"
            title="NodeJS"
          />
          <SiNextdotjs
            className="w-6 h-6 text-stone-300 !text-stone-500 transition-all transform hover:scale-[1.25]"
            title="NextJS"
          />
          <SiHtml5
            className="w-6 h-6 text-orange-500 !text-stone-500 transition-all transform hover:scale-[1.25]"
            title="HTML5"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 1000 1000"
            role="img"
            aria-labelledby="css-logo-title css-logo-description"
            className="bg-transparent"
          >
            <title id="css-logo-title">CSS Logo</title>
            <desc id="css-logo-description">
              A purple square with rounded corners and the letters CSS inside in
              white
            </desc>
            <path
              className="fill-[rebeccapurple] !fill-stone-500"
              d="M0 0H840A160 160 0 0 1 1000 160V840A160 160 0 0 1 840 1000H160A160 160 0 0 1 0 840V0Z"
            />
            <path
              className="fill-stone-950"
              d="M253 817V649c0-67 43-103 108-103 64-1 104 41 102 112h-74c2-27-10-47-30-46-25 0-32 17-32 49v146c0 31 10 46 32 47 23 0 32-23 30-49h74c4 73-42 116-107 115-63 0-103-35-103-103Zm237-12h69c1 32 11 52 33 52s30-13 30-43c0-25-11-39-38-52l-26-12c-46-22-65-49-65-103 0-60 38-102 100-102s95 43 96 113h-67c0-29-6-49-28-49-20 0-30 10-30 35s9 35 33 45l24 11c51 24 73 55 73 113 0 69-39 107-103 107s-100-44-101-115Zm226 0h70c0 32 11 52 32 52s30-13 30-43c0-25-10-39-38-52l-26-12c-46-22-64-49-64-103 0-60 37-102 100-102s94 43 96 113h-67c-1-29-7-49-29-49-20 0-29 10-29 35s8 35 32 45l25 11c50 24 72 55 72 113 0 69-39 107-103 107s-100-44-101-115Z"
            />
          </svg>
          <SiTailwindcss
            className="w-6 h-6 text-cyan-400 !text-stone-500 transition-all transform hover:scale-[1.25]"
            title="TailwindCSS"
          />
          <SiGithub
            className="w-6 h-6 text-stone-300 !text-stone-500 transition-all transform hover:scale-[1.25]"
            title="GitHub"
          />
        </div>
      </div>
    </div>
  );
}

export default TechStack;
