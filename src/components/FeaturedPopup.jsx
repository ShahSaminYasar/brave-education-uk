"use client";
import { X } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { useMainContext } from "@/hooks/useMainContext";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useAxios } from "@/hooks/useAxios";

const FeaturedPopup = () => {
  const { popupOpen, setPopupOpen, popupData } = useMainContext();
  const pathname = usePathname();
  const axios = useAxios();

  // States
  const [trueOpen, setTrueOpen] = useState(false);

  // Functions
  const updatePopupCount = async (id, value) => {
    try {
      const res = await axios.patch("/popup-counter", { id, value });

      if (!res?.data?.ok) {
        console.log(res?.data?.message);
        console.log("Popup counter update failed");
      }
    } catch (error) {
      console.error(error);
      return console.log("ERROR updating popup counter");
    }
  };

  // Effects
  useEffect(() => {
    if (!popupOpen) return;

    if (!popupData.excludedLinks.some((link) => pathname.includes(link))) {
      // console.log("Not found in excluded list");

      let localViewed = JSON.parse(localStorage.getItem("popups")) || [];
      const activeKey = popupData?.key;

      setTrueOpen(true);

      updatePopupCount(popupData?.id, "views");

      localViewed = [...localViewed, activeKey];
      localStorage.setItem("popups", JSON.stringify(localViewed));
    } else {
      // console.log("Found in excluded list");
      setTrueOpen(false);
    }
  }, [pathname, popupOpen]);

  return (
    <AnimatePresence>
      {popupOpen && trueOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.1, type: "keyframes", ease: "linear" }}
          className="w-full h-full fixed z-50 bg-white/40 backdrop-blur-[3px] flex justify-center items-center top-0 left-0 right-0 bottom-0"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, type: "keyframes", ease: "linear" }}
            className="relative w-[95%] max-w-[500px] rounded-xl overflow-hidden shadow-xl"
          >
            <button
              onClick={() => {
                setPopupOpen(false);
                updatePopupCount(popupData?.id, "clicks");
                return window.open(
                  popupData?.link || "#",
                  popupData?.type === "external" ? "_blank" : "_self"
                );
              }}
              //   href={popupData?.link || "#"}
              //   target={popupData?.type === "external" ? "_blank" : "_self"}
              className="w-fit h-fit block cursor-pointer"
            >
              <Image
                src={popupData?.image}
                width={1000}
                height={1000}
                alt={popupData?.title}
                className="w-full aspect-square object-contain"
              />
            </button>

            <button
              className="absolute top-4 right-4 w-fit aspect-square bg-white/60 rounded-full p-2 cursor-pointer"
              onClick={() => setPopupOpen(false)}
            >
              <X size={18} className="text-zinc-600" />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default FeaturedPopup;
