"use client";
import { useAxios } from "@/hooks/useAxios";
import { createContext, useEffect, useState } from "react";
import { toast } from "sonner";

export const MainContext = createContext(undefined);

export const MainProvider = ({ children }) => {
  const axios = useAxios();

  // States
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [siteLoaded, setSiteLoaded] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupData, setPopupData] = useState({
    id: "",
    image: "",
    title: "",
    excludedLinks: "",
  });
  const [authStatus, setAuthStatus] = useState("loading");

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
            id: res?.data?.data?.[0]?._id,
            image: res?.data?.data?.[0]?.image,
            title: res?.data?.data?.[0]?.title,
            link: res?.data?.data?.[0]?.link,
            type: res?.data?.data?.[0]?.type,
            key: res?.data?.data?.[0]?.key,
            excludedLinks: res?.data?.data?.[0]?.excludedLinks,
          });
          setPopupOpen(true);
          // localViewed = [...localViewed, activeKey];
          // localStorage.setItem("popups", JSON.stringify(localViewed));
        }
      } catch (error) {
        console.error(error);
        return console.log(
          error?.message || "An error occured while processing featured popups"
        );
      }
    };

    const timeout = setTimeout(getSetOnlinePopup, 12000);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const localToken = localStorage.getItem("token");
    if (!localToken) return setAuthStatus("unauthenticated");

    const checkToken = async () => {
      const res = await axios.post(`/auth`, { token: localToken });

      if (res?.data?.ok) {
        // console.log(res?.data?.message);
        return setAuthStatus("authenticated");
      } else {
        // console.log(res?.data?.message);
        return setAuthStatus("unauthenticated");
      }
    };

    checkToken();
  }, []);

  const adminLogin = async (username, password) => {
    try {
      const res = await axios.post(`/auth`, {
        uname: username,
        pass: password,
      });

      if (res?.data?.ok && res?.data?.token) {
        localStorage.setItem("token", res?.data?.token);
        toast.success(res?.data?.message);
        return setAuthStatus("authenticated");
      } else {
        toast.error(res?.data?.message || "Login failed");
        return setAuthStatus("unauthenticated");
      }
    } catch (error) {
      console.error(error);
      toast.error(error?.message);
      return setAuthStatus("unauthenticated");
    }
  };

  const values = {
    loadingProgress,
    setLoadingProgress,
    siteLoaded,
    setSiteLoaded,
    popupOpen,
    setPopupOpen,
    popupData,
    setPopupData,
    authStatus,
    setAuthStatus,
    adminLogin,
  };

  return <MainContext.Provider value={values}>{children}</MainContext.Provider>;
};
