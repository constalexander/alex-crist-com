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
    <div id="Footer" className="bg-zinc-900 text-stone-300 min-h-[200px]">
      <span className="text-stone-400">
        &copy; 2024 &nbsp;
        <a href="mailto://alex@alex-crist.com">
          <Button variant="ghost" className="p-0 text-base">
            Alex Crist
          </Button>
        </a>
        . All rights reserved.
      </span>
    </div>
  );
}

export default Footer;
