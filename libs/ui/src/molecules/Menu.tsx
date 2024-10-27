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
import { Button } from '../atoms/Button';
import GithubIcon from '../atoms/icons/Github';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './Dropdown';
import { cn } from '../utils';
import LinkedinIcon from '../atoms/icons/Linkedin';

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
    <>
      {isMenuOpen && (
        <div className="fixed inset-0 bg-stone-800 bg-opacity-50 backdrop-blur-sm"></div>
      )}
      <DropdownMenu open={isMenuOpen} onOpenChange={(e) => menuOpenChange(e)}>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="text-2xl text-stone-300"
          >
            <span className="sr-only">Open menu</span>
            <MenuIcon size={32} />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent
          className="fixed top-[-23px] left-[36px] right-[0px] w-[260px] h-[100vh] bg-emerald-900 border-emerald-950 transform -translate-x-full transition duration-300 ease-in-out shadow-2xl shadow-stone-400/40 z-50"
          sideOffset={-40}
          hideWhenDetached
          align="center"
        >
          <DropdownMenuItem
            className="flex w-full justify-between h-[84px] rounded-none border-b-2 border-emerald-600 py-0 my-0 focus:bg-transparent"
            onSelect={(e) => {
              e.preventDefault();
            }}
          >
            <div className="basis-full flex ps-3">
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
                  window.open(
                    'https://www.linkedin.com/in/alexcristdeveloper',
                    '_blank'
                  )
                }
              >
                <LinkedinIcon />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="inline-block text-stone-300"
                onClick={() =>
                  window.open(
                    'Alex Crist - Frontend Engineer resume web.docx',
                    '_blank'
                  )
                }
              >
                <span title="Resume">
                  <FileText />
                </span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="inline-block text-stone-300"
                onClick={() =>
                  window.open('mailto:alex@alex-crist.com', '_blank')
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
              className="inline-block text-2xl text-stone-300 m-[12px]"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <X size={32} />
            </Button>
          </DropdownMenuItem>

          <DropdownMenuItem
            className={
              isMenuItemActive ? 'bg-emerald-900' : 'focus:bg-transparent'
            }
            onSelect={(e) => {
              e.preventDefault();
              nav('/');
              setIsMenuOpen(false);
            }}
          >
            <Button
              variant="ghost"
              className="w-full text-left inline-block text-xl text-stone-300"
            >
              <span className="sr-only">Home page</span>
              Home
            </Button>
          </DropdownMenuItem>

          <DropdownMenuItem
            className={
              isMenuItemActive ? 'bg-emerald-800' : 'focus:bg-transparent'
            }
            onSelect={(e) => {
              e.preventDefault();
              nav('/about');
              setIsMenuOpen(false);
            }}
          >
            <Button
              variant="ghost"
              className="w-full text-left inline-block text-xl text-stone-300"
            >
              <span className="sr-only">About page</span>
              About
            </Button>
          </DropdownMenuItem>

          <DropdownMenuItem
            className={
              isMenuItemActive ? 'bg-emerald-800' : 'focus:bg-transparent'
            }
            onSelect={(e) => {
              e.preventDefault();
              window.open(
                'Alex Crist - Frontend Engineer resume web.docx',
                '_blank'
              );
              setIsMenuOpen(false);
            }}
          >
            <Button
              variant="ghost"
              className="w-full text-left inline-block text-xl text-stone-300"
            >
              <span className="sr-only">Resume of Alex Crist</span>
              Resume
            </Button>
          </DropdownMenuItem>

          <DropdownMenuItem
            className={
              isMenuItemActive
                ? 'bg-emerald-800'
                : 'focus:bg-transparent hidden'
            }
            onSelect={(e) => {
              e.preventDefault();
              nav('/log');
              setIsMenuOpen(false);
            }}
          >
            <Button
              variant="ghost"
              className="w-full text-left inline-block text-xl text-stone-300"
            >
              <span className="sr-only">Log page</span>
              Log
            </Button>
          </DropdownMenuItem>

          <DropdownMenuItem
            className={cn(
              isMenuItemActive ? 'bg-emerald-800' : '',
              'focus:bg-transparent justify-end border-t-0 border-emerald-800'
            )}
            onSelect={(e) => {
              e.preventDefault();
              // nav('/projects');
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
              'focus:bg-transparent justify-end'
            )}
            onSelect={(e) => {
              e.preventDefault();
              window.open('https://boodi.ai', '_blank');
            }}
          >
            <Button
              variant="ghost"
              className="w-full text-right inline-block text-lg text-stone-300"
            >
              <span className="sr-only">Boodi project</span>
              Boodi.ai
              <ExternalLink className="inline w-[16px] relative top-[-3px] left-[3px]" />
            </Button>
          </DropdownMenuItem>

          <DropdownMenuItem
            className={cn(
              isMenuItemActive ? 'bg-emerald-800' : '',
              'focus:bg-transparent justify-end hidden'
            )}
            onSelect={(e) => {
              e.preventDefault();
              nav('/projects/tachistoscope');
            }}
          >
            <Button
              variant="ghost"
              className="w-full text-right inline-block text-lg text-stone-300"
            >
              <span className="sr-only">Tachistoscope project</span>
              Tachistoscope
            </Button>
          </DropdownMenuItem>

          <DropdownMenuItem
            className={cn(
              isMenuItemActive ? 'bg-emerald-800' : '',
              'focus:bg-transparent justify-end hidden'
            )}
            onSelect={(e) => {
              e.preventDefault();
              nav('/projects/rng');
            }}
          >
            <Button
              variant="ghost"
              className="w-full text-right inline-block text-lg text-stone-300"
            >
              <span className="sr-only">Random Number Generator project</span>
              Random Number Generator
            </Button>
          </DropdownMenuItem>

          <DropdownMenuItem
            className={cn(
              isMenuItemActive ? 'bg-emerald-800' : '',
              'focus:bg-transparent justify-end hidden'
            )}
            onSelect={(e) => {
              e.preventDefault();
              window.open('https://growzone.surge.sh/', '_blank');
            }}
          >
            <Button
              variant="ghost"
              className="w-full text-right inline-block text-lg text-stone-300"
            >
              <span className="sr-only">Growing Zone Finder project</span>
              Growing Zone Finder
            </Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}

export default Menu;
