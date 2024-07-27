'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Hahmlet as FontSerif } from 'next/font/google';
import { FileText, Menu as MenuIcon, Send, X } from 'lucide-react';
import { Button } from '../atoms/button';
import GithubIcon from '../atoms/icons/github';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../molecules/dropdown';
import { cn } from '../utils';
import LinkedinIcon from '../atoms/icons/linkedin';

const fontSerif = FontSerif({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-serif',
});

/* eslint-disable-next-line */
export interface MenuProps {}

export function Menu(props: MenuProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuItemActive, setIsMenuItemActive] = useState(false);

  const menuOpenChange = (e: boolean) => {
    setIsMenuOpen(e);
  };

  const router = useRouter();
  const nav = (route: string) => {
    router.push(route);
    setIsMenuOpen(false);
  };

  return (
    <div className="text-stone-400">
      <DropdownMenu open={isMenuOpen} onOpenChange={(e) => menuOpenChange(e)}>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="text-2xl text-stone-400"
          >
            <span className="sr-only">Open menu</span>
            <MenuIcon size={32} />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent
          className="fixed top-[-23px] left-[10vw] w-[90vw] h-[100vh] bg-emerald-900 border-emerald-950 transform -translate-x-full transition duration-300 ease-in-out"
          sideOffset={-40}
          hideWhenDetached
          align="center"
        >
          <DropdownMenuItem
            className="flex w-full justify-between border-b-2 border-emerald-800"
            onSelect={(e) => {
              e.preventDefault();
            }}
          >
            <div className="basis-full flex px-3">
              <Button
                variant="ghost"
                size="icon"
                className="inline-block"
                onClick={() =>
                  window.open('https://github.com/constalexander', '_blank')
                }
              >
                <GithubIcon />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="inline-block"
                onClick={() =>
                  window.open('https://github.com/constalexander', '_blank')
                }
              >
                <LinkedinIcon />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="inline-block text-stone-400"
                onClick={() =>
                  window.open('https://github.com/constalexander', '_blank')
                }
              >
                <span title="Resume">
                  <FileText />
                </span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="inline-block text-stone-400"
                onClick={() =>
                  window.open('https://github.com/constalexander', '_blank')
                }
              >
                <span title="Email">
                  <Send />
                </span>
              </Button>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="inline-block text-2xl text-stone-400 m-[12px]"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <X size={32} />
            </Button>
          </DropdownMenuItem>

          <DropdownMenuItem
            className={isMenuItemActive ? 'bg-emerald-800' : ''}
            onSelect={(e) => {
              e.preventDefault();
              nav('/');
              setIsMenuOpen(false);
            }}
          >
            <Button
              variant="ghost"
              className="inline-block text-xl text-stone-400"
            >
              <span className="sr-only">Home page</span>
              Home
            </Button>
          </DropdownMenuItem>

          <DropdownMenuItem
            className={isMenuItemActive ? 'bg-emerald-800' : ''}
            onSelect={(e) => {
              e.preventDefault();
              nav('/about');
              setIsMenuOpen(false);
            }}
          >
            <Button
              variant="ghost"
              className="inline-block text-xl text-stone-400"
            >
              <span className="sr-only">About page</span>
              About
            </Button>
          </DropdownMenuItem>

          <h2
            className={cn(
              'text-xl text-emerald-400 font-serif font-bold p-2 border-t-2 border-emerald-800 text-right px-6',
              fontSerif.variable
            )}
          >
            Projects
          </h2>

          <DropdownMenuItem
            className={cn(
              isMenuItemActive ? 'bg-emerald-800' : '',
              'justify-end'
            )}
            onSelect={(e) => {
              e.preventDefault();
              nav('/projects/tachistoscope');
            }}
          >
            <Button
              variant="ghost"
              className="inline-block text-lg text-stone-400"
            >
              <span className="sr-only">Tachistoscope project</span>
              Tachistoscope
            </Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default Menu;
