'use client';

import HomeTemplate from '@alex/ui/templates/home.template';

export default function Page() {
  return (
    <div className="p-2">
      <h1 className="text-[7vw] text-stone-400 tracking-widest">HELLO</h1>

      <HomeTemplate>
        <div>
          I build
          <span className="text-emerald-400 font-semibold m-[.25rem]">
            (digital)
          </span>
          things.
        </div>
      </HomeTemplate>
    </div>
  );
}
