'use client';

import { Button } from '../atoms/Button';

export function Footer() {
  return (
    <section
      id="Footer"
      className="flex justify-center items-end w-full text-stone-300 text-center text-sm bg-[#292524]"
    >
      <div className="block text-stone-400 py-6">
        <div className="mb-4">
          <a
            href="https://github.com/constalexander/alex-crist-com"
            onClick={() =>
              window._gs('event', 'Footer: View source code on GitHub')
            }
            target="_blank"
          >
            <Button variant="ghost" className="p-0 text-sm h-fit">
              View source code on GitHub
            </Button>
          </a>
        </div>
        <div>Designed and developed by</div>
        <div>
          <a
            href="mailto://alex@alex-crist.com"
            onClick={() =>
              window._gs('event', 'Footer: mailto://alex@alex-crist.com')
            }
          >
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
