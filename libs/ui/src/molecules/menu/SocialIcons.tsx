'use client';

import React, { useState } from 'react';
import { FileText, Send } from 'lucide-react';
import { Button } from '../../atoms/Button';
import GithubIcon from '../../atoms/icons/Github';
import LinkedinIcon from '../../atoms/icons/Linkedin';
import { ResumePopup } from '../../organisms/popups/ResumePopup';

export function SocialIcons() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="mt-auto border-t-2 border-stone-600 py-4 bg-stone-800">
      <div className="flex justify-center space-x-2">
        <Button
          variant="ghost"
          size="icon"
          className="scale-75"
          onClick={() =>
            window.open('https://github.com/constalexander', '_blank')
          }
        >
          <GithubIcon />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="scale-75"
          onClick={() =>
            window.open(
              'https://www.linkedin.com/in/alexcristdeveloper',
              '_blank'
            )
          }
        >
          <LinkedinIcon />
        </Button>
        <ResumePopup open={isResumeOpen} onOpenChange={setIsResumeOpen}>
          <Button
            variant="ghost"
            size="icon"
            className="scale-75 text-stone-300"
            onClick={(e) => {
              e.stopPropagation();
              window._gs('event', 'Social: Open resumé dialog');
              setIsResumeOpen(true);
            }}
          >
            <span title="Resumé">
              <FileText />
            </span>
          </Button>
        </ResumePopup>
        <Button
          variant="ghost"
          size="icon"
          className="scale-75 text-stone-300"
          onClick={() => window.open('mailto:alex@alex-crist.com', '_blank')}
        >
          <span title="Email">
            <Send />
          </span>
        </Button>
      </div>
    </div>
  );
}

export default SocialIcons;
