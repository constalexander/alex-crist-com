'use client';

import React from 'react';
import { Button } from '../../atoms/Button';
import { WordDocxIcon } from '../../atoms/icons/WordDocx';
import { PDFIcon } from '../../atoms/icons/PDF';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
  DialogHeader,
} from '../../atoms/Dialog';

const RESUME_BASE_PATH = 'resumes/Alex Crist - Fullstack Engineer';

type ResumePopupProps = {
  children: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};

export function ResumePopup({
  children,
  open: externalOpen,
  onOpenChange: externalOnOpenChange,
}: ResumePopupProps) {
  const [internalOpen, setInternalOpen] = React.useState(false);
  const open = externalOpen ?? internalOpen;
  const onOpenChange = externalOnOpenChange ?? setInternalOpen;

  const handleDownload = (type: 'Word' | 'PDF') => {
    onOpenChange(false);
    const extension = type === 'Word' ? '.docx' : '.pdf';
    window.open(`${RESUME_BASE_PATH}${extension}`, '_blank');
    window._gs('event', `Download ${type} resumé`);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="w-fit p-6 pt-6">
        <DialogHeader className="sr-only">
          <DialogTitle>Download resumé</DialogTitle>
          <DialogDescription>Choose your preferred format.</DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-2">
          <Button
            variant="ghost"
            className="w-full justify-start pl-0"
            onClick={() => handleDownload('Word')}
          >
            <WordDocxIcon className="mr-2 h-4 w-4" />
            <span>Alex Crist - Fullstack Engineer.docx</span>
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start pl-0"
            onClick={() => handleDownload('PDF')}
          >
            <PDFIcon className="mr-2 h-4 w-4" />
            <span>Alex Crist - Fullstack Engineer.pdf</span>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
