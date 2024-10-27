'use client';

import { useEffect } from 'react';

const MainScrollHandler = () => {
  useEffect(() => {
    const mainElement = document.querySelector('main');
    const handleScroll = () => {
      console.log('Scrolled');
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

  return null;
};

export default MainScrollHandler;
