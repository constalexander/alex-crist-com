import React, { createContext, useContext } from 'react';

const MainScrollContext = createContext<number>(0);

export const useMainScrollValue = () => useContext(MainScrollContext);

export const MainScrollProvider: React.FC<{
  value: number;
  children: React.ReactNode;
}> = ({ value, children }) => {
  return (
    <MainScrollContext.Provider value={value}>
      {children}
    </MainScrollContext.Provider>
  );
};
