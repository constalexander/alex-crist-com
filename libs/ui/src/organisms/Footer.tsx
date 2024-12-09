'use client';

import { useRouter } from 'next/navigation';
import { cn } from '../utils';
import { Button } from '../atoms/Button';

/* eslint-disable-next-line */
export interface FooterProps {}

export function Footer(props: FooterProps) {
  const router = useRouter();
  const nav = (route: string) => {
    router.push(route);
  };

  return (
    <div
      id="Footer"
      className="flex justify-center items-end w-full h-[40px] text-stone-300 text-center text-sm"
    >
      <div
        className="pattern absolute inset-0 w-full h-fit bg-stone-700 z-[-1] mb-0 mt-auto"
        aria-hidden="true"
      >
        <img
          src="/img/patterns/flat-mountains2.svg"
          alt="pattern"
          className="w-full h-full object-contain opacity-70"
        />
        <div className="hidden absolute inset-0 bg-stone-800/80 mix-blend-multiply" />
      </div>
      <div className="block text-stone-400">
        &copy; 2024 &nbsp;
        <a href="mailto://alex@alex-crist.com">
          <Button variant="ghost" className="p-0 text-base">
            Alex Crist
          </Button>
        </a>
      </div>
    </div>
  );
}

export default Footer;
