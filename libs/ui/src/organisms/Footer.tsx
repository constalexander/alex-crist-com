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
      className="flex justify-center items-end bg-zinc-900 text-stone-300 text-center text-sm min-h-[100px]"
    >
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
