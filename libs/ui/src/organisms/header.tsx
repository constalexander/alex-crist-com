'use client';

import Menu from '../molecules/menu';

/* eslint-disable-next-line */
export interface HeaderProps {}

export function Header(props: HeaderProps) {
  return (
    <div className={'flex justify-between items-center w-full p-2'}>
      <div>
        <div className="text-emerald-400 tracking-wide">ALEX CRIST</div>
        <div className="text-stone-400">Frontend Engineer</div>
        <div className="text-stone-500">North Texas</div>
      </div>
      <Menu />
    </div>
  );
}

export default Header;
