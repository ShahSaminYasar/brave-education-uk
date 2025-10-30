"use client";
import { createContext, useState } from "react";

export const MainContext = createContext(undefined);

export const MainProvider = ({ children }) => {
  // States
  const [loadingProgress, setLoadingProgress] = useState(0);

  const values = {
    loadingProgress,
    setLoadingProgress,
  };

  return <MainContext.Provider value={values}>{children}</MainContext.Provider>;
};
