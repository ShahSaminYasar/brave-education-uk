"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useMainContext } from "@/hooks/useMainContext";

const SplashScreen = () => {
  const { siteLoaded, setSiteLoaded } = useMainContext();

  // States
  const [scene, setScene] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [progress, setProgress] = useState(3);
  const [prev, setPrev] = useState(0);

  const END_TIME = 5.2;

  // Scroll Block Effect
  useEffect(() => {
    document.body.classList.add("scroll-block");
  }, []);

  useEffect(() => {
    if (seconds >= END_TIME + 0.2) {
      document.body.classList.remove("scroll-block");
      return setSiteLoaded(true);
    }

    if (seconds > 4) {
      setScene(2);
    } else if (seconds > 1.6) {
      setScene(1);
    }

    if (seconds - prev >= 1.1) {
      setProgress((seconds / 5) * 100);
      setPrev(seconds);
    }

    const interval = setInterval(() => {
      setSeconds((prev) => prev + 0.1);
    }, 100);

    return () => clearInterval(interval);
  }, [seconds]);

  return (
    <AnimatePresence>
      {!siteLoaded && seconds <= END_TIME && (
        <motion.div
          initial={{ y: "0%" }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="bg-slate-50 fixed top-0 left-0 right-0 bottom-0 w-full h-full flex justify-center items-center z-[999] text-3xl md:text-5xl font-josefin-sans font-medium text-zinc-900"
        >
          {/* TimeStamp Display */}
          {/* <div className="fixed top-0 left-0 w-fit bg-green-600 text-white text-xs font-medium py-1 px-5 font-poppins">
            {seconds}
          </div> */}

          <div>
            {/* 1 */}
            <AnimatePresence>
              {scene === 0 && (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 justify-center flex flex-nowrap w-full h-[54px] overflow-y-hidden gap-2">
                  <motion.span
                    initial={{ y: 60 }}
                    animate={{ y: 0 }}
                    exit={{ y: -60 }}
                    transition={{
                      duration: 0.4,
                      ease: "easeInOut",
                    }}
                  >
                    Brave
                  </motion.span>
                  <motion.span
                    initial={{ y: 60 }}
                    animate={{ y: 0 }}
                    exit={{ y: -60 }}
                    transition={{
                      duration: 0.5,
                      ease: "easeInOut",
                      animationDuration: 4,
                      delay: 0.2,
                    }}
                    className="font-semibold"
                  >
                    Education
                  </motion.span>
                </div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {seconds >= 1.5 && (
                <motion.span
                  className="w-[100vw] h-[70px] bg-slate-50 block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  initial={{ y: 60 }}
                  animate={{ y: -5 }}
                  exit={{ y: -60 }}
                  transition={{ delay: 0, duration: 0.6, ease: "easeInOut" }}
                ></motion.span>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {scene === 1 && (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 justify-center flex flex-nowrap w-full h-[54px] overflow-y-hidden gap-2">
                  <motion.span
                    initial={{ y: 60 }}
                    animate={{ y: 0 }}
                    transition={{
                      duration: 0.5,
                      ease: "easeInOut",
                      animationDuration: 4,
                    }}
                  >
                    We
                  </motion.span>
                  <motion.span
                    initial={{ y: -60 }}
                    animate={{ y: 0 }}
                    transition={{
                      duration: 0.4,
                      ease: "easeInOut",
                      animationDuration: 4,
                      delay: 0.4,
                    }}
                    className="font-semibold"
                  >
                    Assist
                  </motion.span>
                  <motion.span
                    initial={{ y: 60 }}
                    animate={{ y: 0 }}
                    transition={{
                      duration: 0.4,
                      ease: "easeInOut",
                      animationDuration: 4,
                      delay: 0.8,
                    }}
                  >
                    You
                  </motion.span>
                </div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {seconds >= 2.8 && seconds <= 4.5 && (
                <motion.span
                  className="w-[100vw] h-[70px] bg-slate-50 block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
                  initial={{ y: 60 }}
                  animate={{ y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 0, duration: 0.6, ease: "easeInOut" }}
                >
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    to
                  </motion.span>
                </motion.span>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {seconds >= 3.8 && (
                <motion.span
                  className="w-[100vw] h-[70px] bg-slate-50 block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0, duration: 0.1 }}
                ></motion.span>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {scene === 2 && (
                <motion.div
                  initial={{ scale: 1 }}
                  animate={{ scale: 1.2 }}
                  transition={{ delay: 1.5, duration: 0.5 }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 justify-center flex flex-nowrap w-full h-[54px] overflow-y-hidden gap-2"
                >
                  <motion.span
                    initial={{ y: 60 }}
                    animate={{ y: 0 }}
                    transition={{
                      duration: 0.7,
                      ease: "easeInOut",
                    }}
                  >
                    Achieve
                  </motion.span>
                  <motion.span
                    initial={{ y: -60 }}
                    animate={{ y: 0 }}
                    transition={{
                      duration: 0.7,
                      ease: "easeInOut",
                      delay: 0.25,
                    }}
                  >
                    Your
                  </motion.span>
                  <motion.span
                    initial={{ y: 60 }}
                    animate={{ y: 0 }}
                    transition={{
                      duration: 0.7,
                      ease: "easeInOut",
                      delay: 0.45,
                    }}
                    className="font-semibold"
                  >
                    Goal
                  </motion.span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <AnimatePresence>
            {seconds <= END_TIME - 1 && (
              <motion.div
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute bottom-0 left-0 w-full h-2 bg-zinc-100"
              >
                <div
                  className="h-full block bg-zinc-900 transition-all duration-700"
                  style={{ width: `${progress}%` }}
                ></div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default SplashScreen;
