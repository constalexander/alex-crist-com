'use client';

import React from 'react';
import { FileText, FileIcon } from 'lucide-react';
import { Button } from '../../atoms/Button';
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
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function ResumePopup({
  children,
  open,
  onOpenChange,
}: ResumePopupProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="w-fit p-6 pt-6">
        <DialogHeader>
          <DialogTitle>Download Alex's resumé</DialogTitle>
          <DialogDescription>Choose your preferred format.</DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-2">
          <Button
            variant="ghost"
            className="w-full justify-start pl-0"
            onClick={() => {
              onOpenChange(false);
              window.open('Alex Crist - Fullstack Engineer.docx', '_blank');
              window._gs('event', 'Download Word resumé');
            }}
          >
            <FileText className="mr-2 h-4 w-4" />
            <span>Alex Crist - Fullstack Engineer.docx</span>
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start pl-0"
            onClick={() => {
              onOpenChange(false);
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
