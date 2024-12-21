'use client';

import React from 'react';
import { FileText, FileIcon } from 'lucide-react';
import { Button } from '../../atoms/Button';
import { Dialog, DialogContent, DialogTrigger } from '../../atoms/Dialog';

type ResumePopupProps = {
  children: React.ReactNode;
};

export function ResumePopup({ children }: ResumePopupProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="w-fit p-8">
        <div className="flex flex-col gap-4">
          <Button
            variant="ghost"
            className="w-full justify-start"
            onClick={() => {
              window.open('Alex Crist - Fullstack Engineer.docx', '_blank');
              window._gs('event', 'Download Word resumé');
            }}
          >
            <FileText className="mr-2 h-4 w-4" />
            <span>Alex Crist - Fullstack Engineer.docx</span>
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start"
            onClick={() => {
              window.open('Alex Crist - Fullstack Engineer.pdf', '_blank');
              window._gs('event', 'Download PDF resumé');
            }}
          >
            <FileIcon className="mr-2 h-4 w-4" />
            <span>Alex Crist - Fullstack Engineer.pdf</span>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
