'use client';

import {
  SiJavascript,
  SiTypescript,
  SiAngular,
  SiReact,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
} from '@icons-pack/react-simple-icons';

export function TechStack() {
  return (
    <div className="flex justify-center gap-4 py-8 text-stone-200 bg-emerald-900">
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
      <SiNodedotjs
        className="w-6 h-6 hover:text-green-400 text-stone-400 transition-all transform hover:scale-[1.25]"
        title="NodeJS"
      />
      <SiHtml5
        className="w-6 h-6 hover:text-orange-500 text-stone-400 transition-all transform hover:scale-[1.25]"
        title="HTML5"
      />
      <SiCss3
        className="w-6 h-6 hover:text-blue-500 text-stone-400 transition-all transform hover:scale-[1.25]"
        title="CSS3"
      />
    </div>
  );
}

export default TechStack;
