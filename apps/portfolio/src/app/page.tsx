'use client';

import { Button } from '@alex/ui/atoms/button';
import HomeTemplate from '@alex/ui/templates/home.template';

export default function Page() {
  return (
    <div>
      <h1 className="text-[10vw] text-stone-500 ml-[10px] mt-[20px]">
        ALEX CRIST
      </h1>
      <Button className="mt-5">Send it</Button>
      <HomeTemplate>
        <div>asdf</div>
      </HomeTemplate>
    </div>
  );
}
