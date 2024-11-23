'use client';

import {
  SiJavascript,
  SiTypescript,
  SiAngular,
  SiReact,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiNextdotjs,
  SiTailwindcss,
  SiGithub,
} from '@icons-pack/react-simple-icons';

export function TechStack() {
  return (
    <div className="flex flex-col justify-center py-8 text-stone-200 bg-emerald-900">
      <div className="basis-full text-2xl text-stone-400 text-center mb-6">
        Tech stack
      </div>
      <div className="grid grid-cols-10 max-[430px]:grid-cols-5 gap-4 w-fit mx-auto">
        <SiJavascript
          className="w-6 h-6 hover:text-yellow-400 text-stone-400 transition-all transform hover:scale-[1.25]"
          title="JavaScript"
        />
        <SiTypescript
          className="w-6 h-6 hover:text-blue-400 text-stone-400 transition-all transform hover:scale-[1.25]"
          title="TypeScript"
        />
        <SiAngular
          className="w-6 h-6 hover:text-red-500 text-stone-400 transition-all transform hover:scale-[1.25]"
          title="Angular"
        />
        <SiReact
          className="w-6 h-6 hover:text-cyan-400 text-stone-400 transition-all transform hover:scale-[1.25]"
          title="React"
        />
        <SiNextdotjs
          className="w-6 h-6 hover:text-white text-stone-400 transition-all transform hover:scale-[1.25]"
          title="NextJS"
        />
        <SiNodedotjs
          className="w-6 h-6 hover:text-green-400 text-stone-400 transition-all transform hover:scale-[1.25]"
          title="NodeJS"
        />
        <SiHtml5
          className="w-6 h-6 hover:text-orange-500 text-stone-400 transition-all transform hover:scale-[1.25]"
          title="HTML5"
        />
        {/* <SiCss3
          className="w-6 h-6 hover:text-blue-500 text-stone-400 transition-all transform hover:scale-[1.25]"
          title="CSS3"
        /> */}
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
            className="fill-stone-400 hover:fill-[rebeccapurple]"
            d="M0 0H840A160 160 0 0 1 1000 160V840A160 160 0 0 1 840 1000H160A160 160 0 0 1 0 840V0Z"
          />
          <path
            className="fill-emerald-900"
            d="M253 817V649c0-67 43-103 108-103 64-1 104 41 102 112h-74c2-27-10-47-30-46-25 0-32 17-32 49v146c0 31 10 46 32 47 23 0 32-23 30-49h74c4 73-42 116-107 115-63 0-103-35-103-103Zm237-12h69c1 32 11 52 33 52s30-13 30-43c0-25-11-39-38-52l-26-12c-46-22-65-49-65-103 0-60 38-102 100-102s95 43 96 113h-67c0-29-6-49-28-49-20 0-30 10-30 35s9 35 33 45l24 11c51 24 73 55 73 113 0 69-39 107-103 107s-100-44-101-115Zm226 0h70c0 32 11 52 32 52s30-13 30-43c0-25-10-39-38-52l-26-12c-46-22-64-49-64-103 0-60 37-102 100-102s94 43 96 113h-67c-1-29-7-49-29-49-20 0-29 10-29 35s8 35 32 45l25 11c50 24 72 55 72 113 0 69-39 107-103 107s-100-44-101-115Z"
          />
        </svg>

        <SiTailwindcss
          className="w-6 h-6 hover:text-cyan-400 text-stone-400 transition-all transform hover:scale-[1.25]"
          title="TailwindCSS"
        />
        <SiGithub
          className="w-6 h-6 hover:text-white text-stone-400 transition-all transform hover:scale-[1.25]"
          title="GitHub"
        />
      </div>
    </div>
  );
}

export default TechStack;
