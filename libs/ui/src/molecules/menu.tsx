'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Hahmlet as FontSerif } from 'next/font/google';
import {
  ExternalLink,
  FileText,
  Menu as MenuIcon,
  Send,
  X,
} from 'lucide-react';
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
          className="fixed top-[-23px] left-[36px] right-[0px] w-[90vw] max-w-[400px] h-[100vh] bg-emerald-900 border-emerald-950 transform -translate-x-full transition duration-300 ease-in-out"
          sideOffset={-40}
          hideWhenDetached
          align="center"
        >
          <DropdownMenuItem
            className="flex w-full justify-between h-[84px] rounded-none border-b-2 border-emerald-800 py-0 my-0"
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
              className="w-full text-left inline-block text-xl text-stone-400"
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
              className="w-full text-left inline-block text-xl text-stone-400"
            >
              <span className="sr-only">About page</span>
              About
            </Button>
          </DropdownMenuItem>

          <DropdownMenuItem
            className={cn(
              isMenuItemActive ? 'bg-emerald-800' : '',
              'justify-end border-t-0 border-emerald-800'
            )}
            onSelect={(e) => {
              e.preventDefault();
              nav('/projects');
            }}
          >
            <Button
              variant="ghost"
              className={cn(
                'w-full justify-end text-xl text-emerald-500 font-serif font-bold p-2 px-6',
                fontSerif.variable
              )}
            >
              <span className="sr-only">Projects page</span>
              Projects
            </Button>
          </DropdownMenuItem>

          <DropdownMenuItem
            className={cn(
              isMenuItemActive ? 'bg-emerald-800' : '',
              'justify-end'
            )}
            onSelect={(e) => {
              e.preventDefault();
              window.open('https://boodi.ai', '_blank');
            }}
          >
            <Button
              variant="ghost"
              className="w-full text-right inline-block text-lg text-stone-400"
            >
              <span className="sr-only">Boodi project</span>
              Boodi.ai{' '}
              <ExternalLink className="inline w-[16px] relative top-[-3px] left-[3px]" />
            </Button>
          </DropdownMenuItem>

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
              className="w-full text-right inline-block text-lg text-stone-400"
            >
              <span className="sr-only">Tachistoscope project</span>
              Tachistoscope
            </Button>
          </DropdownMenuItem>

          <DropdownMenuItem
            className={cn(
              isMenuItemActive ? 'bg-emerald-800' : '',
              'justify-end'
            )}
            onSelect={(e) => {
              e.preventDefault();
              nav('/projects/rng');
            }}
          >
            <Button
              variant="ghost"
              className="w-full text-right inline-block text-lg text-stone-400"
            >
              <span className="sr-only">Random Number Generator project</span>
              Random Number Generator
            </Button>
          </DropdownMenuItem>

          <DropdownMenuItem
            className={cn(
              isMenuItemActive ? 'bg-emerald-800' : '',
              'justify-end'
            )}
            onSelect={(e) => {
              e.preventDefault();
              window.open('https://growzone.surge.sh/', '_blank');
            }}
          >
            <Button
              variant="ghost"
              className="w-full text-right inline-block text-lg text-stone-400"
            >
              <span className="sr-only">Growing Zone Finder project</span>
              Growing Zone Finder
            </Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default Menu;
