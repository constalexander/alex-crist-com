'use client';

import { useEffect, useState } from 'react';
import { MainScrollProvider } from '@alex/contexts/MainScrollContext';

export default function MainTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {
    const mainElement = document.querySelector('main');
    const handleScroll = () => {
      if (mainElement) {
        setScrollValue(mainElement.scrollTop);
      }
    };

    if (mainElement) {
      mainElement.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (mainElement) {
        mainElement.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <MainScrollProvider value={scrollValue}>{children}</MainScrollProvider>
  );
}
