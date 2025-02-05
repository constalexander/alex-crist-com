'use client';

import React from 'react';
import { Button } from '../../atoms/Button';
import { cn } from '../../utils';

export interface MenuItemProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  onClick?: (event: React.MouseEvent) => void;
  isActive?: boolean;
  href?: string;
}

export const MenuItem = React.forwardRef<HTMLButtonElement, MenuItemProps>(
  ({ label, onClick, className, href }, ref) => {
    const button = (
      <Button
        ref={ref}
        variant="ghost"
        className={cn(
          'w-full h-12 text-lg text-left inline-block text-stone-400 rounded-none focus-visible:ring-0 focus-visible:ring-offset-0',
          className
        )}
        onClick={(e) => {
          e.stopPropagation();
          onClick?.(e);
        }}
      >
        <span className="sr-only">{label} page</span>
        {label}
      </Button>
    );

    if (href) {
      return (
        <a href={href} className="block" target="_blank">
          {button}
        </a>
      );
    }

    return button;
  }
);

MenuItem.displayName = 'MenuItem';

export default MenuItem;
