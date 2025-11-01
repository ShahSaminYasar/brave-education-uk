"use client";
import { useAxios } from "@/hooks/useAxios";
import { createContext, useEffect, useState } from "react";

export const MainContext = createContext(undefined);

export const MainProvider = ({ children }) => {
  const axios = useAxios();

  // States
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [siteLoaded, setSiteLoaded] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupData, setPopupData] = useState({
    image: "",
    title: "",
  });

  // Effects
  useEffect(() => {
    const getSetOnlinePopup = async () => {
      try {
        const res = await axios.get("/popup?active=true");
        const activeKey = res?.data?.data?.[0]?.key;
        if (!activeKey) return;
        let localViewed = JSON.parse(localStorage.getItem("popups")) || [];
        if (!localViewed?.includes(activeKey)) {
          setPopupData({
            image: res?.data?.data?.[0]?.image,
            title: res?.data?.data?.[0]?.title,
            link: res?.data?.data?.[0]?.link,
            type: res?.data?.data?.[0]?.type,
          });
          setPopupOpen(true);
          localViewed = [...localViewed, activeKey];
          localStorage.setItem("popups", JSON.stringify(localViewed));
        }
      } catch (error) {
        console.error(error);
        return console.log(
          error?.message || "An error occured while processing featured popups"
        );
      }
    };

    const timeout = setTimeout(getSetOnlinePopup, 15000);
    return () => clearTimeout(timeout);
  }, []);

  const values = {
    loadingProgress,
    setLoadingProgress,
    siteLoaded,
    setSiteLoaded,
    popupOpen,
    setPopupOpen,
    popupData,
    setPopupData,
  };

  return <MainContext.Provider value={values}>{children}</MainContext.Provider>;
};
