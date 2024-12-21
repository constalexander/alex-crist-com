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

type ResumePopupProps = {
  children: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  onDownloadWord?: () => void;
  onDownloadPDF?: () => void;
};

export function ResumePopup({
  children,
  open: externalOpen,
  onOpenChange: externalOnOpenChange,
  onDownloadWord: externalOnDownloadWord,
  onDownloadPDF: externalOnDownloadPDF,
}: ResumePopupProps) {
  const [internalOpen, setInternalOpen] = React.useState(false);

  const open = externalOpen ?? internalOpen;
  const onOpenChange = externalOnOpenChange ?? setInternalOpen;

  const handleDownloadWord = () => {
    if (externalOnDownloadWord) {
      externalOnDownloadWord();
    } else {
      onOpenChange(false);
      const url = 'resumes/Alex Crist - Fullstack Engineer.docx';
      window.open(url, '_blank');
      window._gs('event', 'Download Word resumé');
    }
  };

  const handleDownloadPDF = () => {
    if (externalOnDownloadPDF) {
      externalOnDownloadPDF();
    } else {
      onOpenChange(false);
      const url = 'resumes/Alex Crist - Fullstack Engineer.pdf';
      window.open(url, '_blank');
      window._gs('event', 'Download PDF resumé');
    }
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
            onClick={handleDownloadWord}
          >
            <WordDocxIcon className="mr-2 h-4 w-4" />
            <span>Alex Crist - Fullstack Engineer.docx</span>
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start pl-0"
            onClick={handleDownloadPDF}
          >
            <PDFIcon className="mr-2 h-4 w-4" />
            <span>Alex Crist - Fullstack Engineer.pdf</span>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
