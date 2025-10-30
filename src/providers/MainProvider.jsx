"use client";
import { createContext, useState } from "react";

export const MainContext = createContext(undefined);

export const MainProvider = ({ children }) => {
  // States
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [siteLoaded, setSiteLoaded] = useState(false);

  const values = {
    loadingProgress,
    setLoadingProgress,
    siteLoaded,
    setSiteLoaded,
  };

  return <MainContext.Provider value={values}>{children}</MainContext.Provider>;
};
