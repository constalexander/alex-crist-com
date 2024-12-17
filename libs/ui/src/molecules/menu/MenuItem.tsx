'use client';

import React from 'react';
import { Button } from '../../atoms/Button';
import { cn } from '../../utils';

export interface MenuItemProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  onClick?: () => void;
  isActive?: boolean;
}

export function MenuItem({ label, onClick, className }: MenuItemProps) {
  return (
    <Button
      variant="ghost"
      className={cn(
        'w-full h-12 text-lg text-left inline-block text-stone-400',
        className
      )}
      onClick={onClick}
    >
      <span className="sr-only">{label} page</span>
      {label}
    </Button>
  );
}

export default MenuItem;
