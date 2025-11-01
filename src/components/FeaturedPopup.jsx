"use client";
import { X } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { useMainContext } from "@/hooks/useMainContext";
import Link from "next/link";

const FeaturedPopup = () => {
  const { popupOpen, setPopupOpen, popupData } = useMainContext();

  return (
    <AnimatePresence>
      {popupOpen && (
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
