'use client';

import { useEffect, useState } from 'react';
import { MainScrollProvider } from '@alex/contexts/MainScrollContext';
import { Header } from '../organisms/Header';
import { Footer } from '../organisms/Footer';

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
    <MainScrollProvider value={scrollValue}>
      <Header />
      <main
        className={`
    overflow-x-hidden overflow-y-auto
    w-full min-h-full 
    p-0 m-0`}
      >
        {children}
        <Footer />
      </main>
    </MainScrollProvider>
  );
}
