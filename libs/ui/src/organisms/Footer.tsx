'use client';

import { Button } from '../atoms/Button';

export function Footer() {
  return (
    <section
      id="Footer"
      className="flex justify-center items-end w-full text-stone-300 text-center text-sm bg-[#292524]"
    >
      <div className="block text-stone-400 py-6">
        <div>Designed and developed by</div>
        <div>
          <a href="mailto://alex@alex-crist.com">
            <Button variant="ghost" className="p-0 text-sm h-fit">
              Alex Crist
            </Button>
          </a>
          <span className="text-sm">&nbsp; &copy; 2024</span>
        </div>
      </div>
    </section>
  );
}

export default Footer;
