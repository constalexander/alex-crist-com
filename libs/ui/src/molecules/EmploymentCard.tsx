'use client';

import { ExternalLink } from 'lucide-react';
import { Button } from '../atoms/Button';
import { Badge } from '../atoms/Badge';

/* eslint-disable-next-line */
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
    <div className="text-center w-[140px] min-h-[300px] h-full p-0 select-none">
      <span className="float-right relative -top-[20px] left-[40px] hidden">
        {index + 1}
      </span>
      <span className="text-lg text-stone-400 font-bold tracking-wider">
        {companyName}
        <a href={companyUrl} target="_blank" rel="noopener noreferrer">
          <Button
            variant="ghost"
            className="inline-block text-lg text-emerald-400 p-0 ml-1"
          >
            <span className="sr-only"> {companyName} external link</span>
            <ExternalLink className="inline w-[14px] relative top-[-3px] left-[3px]" />
          </Button>
        </a>
      </span>
      <span className="text-base italic block -mt-1">{position}</span>
      <span className="text-sm mt-1">
        {dateStarted} - {dateEnded}
      </span>
      <span>
        <ul className="list-disc list-inside text-left mt-4">
          {responsibilities.map((responsibility, idx) => (
            <li key={idx} className=" ">
              {responsibility}
            </li>
          ))}
        </ul>
      </span>

      <span className="block my-5">
        Technologies:
        <br />
        {technologies.map((technology, idx) => (
          <Badge key={idx}>{technology}</Badge>
        ))}
      </span>
    </div>
  );
}

export default EmploymentCard;
