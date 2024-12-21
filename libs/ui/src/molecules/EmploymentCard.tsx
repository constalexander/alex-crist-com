'use client';

import { ExternalLink } from 'lucide-react';
import { Button } from '../atoms/Button';

export interface EmploymentCardProps {
  index: number;
  companyName: string;
  companyUrl: string;
  dateStarted: string;
  dateEnded: string;
  position: string;
  responsibilities: string[];
  technologies: string[];
}

export function EmploymentCard({
  index,
  companyName,
  companyUrl,
  dateStarted,
  dateEnded,
  position,
  responsibilities,
  technologies,
}: EmploymentCardProps) {
  return (
    <div className="text-left text-stone-400 w-full h-full p-6 select-none flex flex-col justify-between">
      <div className="space-y-3">
        <div className="flex flex-col items-start justify-between">
          <h3 className="text-xl font-bold tracking-tight text-stone-200">
            {position}
          </h3>
          <span className="text-base sm:text-lg text-emerald-400">
            {companyName}
            <a
              href={companyUrl}
              onClick={() =>
                window._gs(
                  'event',
                  'Employment card: Company URL external link',
                  { url: companyUrl }
                )
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                className="inline-block text-lg text-emerald-400 p-0 ml-1"
              >
                <span className="sr-only">{companyName} external link</span>
                <ExternalLink className="inline w-[14px] relative top-[-3px] left-[3px]" />
              </Button>
            </a>
          </span>
          <span className="text-sm text-stone-400">
            {dateStarted} - {dateEnded}
          </span>
        </div>

        <p className="text-base leading-relaxed pt-4">{responsibilities[0]}</p>
      </div>

      <div className="mt-auto pt-4">
        <a
          href="/Alex Crist - Fullstack Engineer.docx"
          onClick={() =>
            window._gs('event', 'Employment card: Download full resumé')
          }
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-emerald-400 hover:text-emerald-300 transition-colors"
        >
          Download full resumé
        </a>
      </div>
    </div>
  );
}

export default EmploymentCard;
