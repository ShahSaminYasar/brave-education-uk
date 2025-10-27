"use client";
import { createContext } from "react";

export const MainContext = createContext(undefined);

export const MainProvider = ({ children }) => {
  const values = {};

  return <MainContext.Provider value={values}>{children}</MainContext.Provider>;
};
