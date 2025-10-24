"use client";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import { useRef } from "react";

const AboutPageCounters = () => {
  const counterContainerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: counterContainerRef,
    offset: ["start end", "center center"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["-75%", "0%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["-66.667%", "0%"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["-80%", "0%"]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log(latest);
  });

  return (
    <div
      className="w-full min-h-screen flex justify-center items-center"
      style={{
        background: "url(/bg-dark.png)",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
        ref={counterContainerRef}
      >
        <div className="flex flex-col w-full items-center justify-center gap-1">
          {/* Numbers */}
          <div className="text-6xl font-bold text-slate-100 relative h-[57px] overflow-hidden">
            {/* Main counter */}
            <motion.div
              className="flex flex-col gap-0 absolute left-0"
              style={{
                y: y1,
              }}
            >
              <span>5000</span>
              <span>4000</span>
              <span>3000</span>
              <span>2000</span>
            </motion.div>
            <span className="opacity-0 block px-1">5000</span>
          </div>
          <span className="text-lg font-light text-slate-100 block text-center text-nowrap">
            Happy Clients
          </span>
        </div>

        <div className="flex flex-col w-full items-center justify-center gap-1">
          {/* Numbers */}
          <div className="text-6xl font-bold text-slate-100 relative h-[57px] overflow-hidden">
            {/* Main counter */}
            <motion.div
              className="flex flex-col gap-0 absolute left-0"
              style={{
                y: y2,
              }}
            >
              <span>30</span>
              <span>20</span>
              <span>10</span>
            </motion.div>
            <span className="opacity-0 block px-1">30</span>
          </div>
          <span className="text-lg font-light text-slate-100 block text-center text-nowrap">
            Countries Affiliated
          </span>
        </div>

        <div className="flex flex-col w-full items-center justify-center gap-1">
          <div className="flex flex-row gap-0">
            <div className="text-6xl font-bold text-slate-100 relative h-[57px] overflow-hidden">
              <motion.div
                className="flex flex-col gap-0 absolute left-0"
                style={{
                  y: y3,
                }}
              >
                <span>10</span>
                <span>7</span>
                <span>5</span>
                <span>3</span>
                <span>1</span>
              </motion.div>
              <span className="opacity-0 block px-1">10</span>
            </div>
            <span className="text-6xl font-bold text-slate-100 block -ml-2">
              k
            </span>
          </div>

          <span className="text-lg font-light text-slate-100 block text-center text-nowrap">
            Top University Partner
          </span>
        </div>
      </div>
    </div>
  );
};
export default AboutPageCounters;
