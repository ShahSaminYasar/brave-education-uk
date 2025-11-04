"use client";
import { Award, BookOpen, HeartIcon, Medal } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const Counters = () => {
  const counterContainerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: counterContainerRef,
    offset: ["start end", "center center"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["-75%", "0%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["-66.667%", "0%"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["-80%", "0%"]);

  return (
    <div
      className="w-full min-h-[50vh] section flex justify-center items-center font-montserrat"
      style={{
        background: "url(/white-bg-3.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div
        className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-14"
        ref={counterContainerRef}
      >
        <div className="flex flex-col w-full items-center justify-center gap-1">
          {/* Numbers */}
          <div className="flex flex-row gap-0 items-center">
            <Award
              className="text-green-600 opacity-20 mt-1 -ml-14 mr-4"
              size={70}
            />

            <div className="text-6xl font-bold text-green-600 relative h-[57px] overflow-hidden">
              {/* Main counter */}
              <motion.div
                className="flex flex-col gap-0 absolute left-0"
                style={{
                  y: y1,
                }}
              >
                <span>98</span>
                <span>97</span>
                <span>96</span>
                <span>95</span>
              </motion.div>
              <span className="opacity-0 block px-1">98</span>
            </div>
            <span className="text-4xl font-bold text-green-600 block ml-1">
              %
            </span>
          </div>
          <span className="text-lg font-light text-slate-800 block text-center text-nowrap -mt-3">
            Success Rate
          </span>
        </div>

        <div className="flex flex-col w-full items-center justify-center gap-1">
          {/* Numbers */}
          <div className="flex flex-row gap-0 items-center">
            <BookOpen
              className="text-indigo-600 opacity-20 mt-1 -ml-16 mr-7"
              size={60}
            />
            <div className="text-6xl font-bold text-indigo-600 relative h-[57px] overflow-hidden">
              {/* Main counter */}
              <motion.div
                className="flex flex-col gap-0 absolute left-0"
                style={{
                  y: y2,
                }}
              >
                <span>8</span>
                <span>7</span>
                <span>5</span>
              </motion.div>
              <span className="opacity-0 block px-1">8</span>
            </div>
            <span className="text-6xl font-bold text-indigo-600 block mt-1 -ml-1">
              +
            </span>
          </div>
          <span className="text-lg font-light text-slate-800 block text-center text-nowrap">
            Years Experience
          </span>
        </div>

        <div className="flex flex-col w-full items-center justify-center gap-1">
          <div className="flex flex-row gap-0">
            <div className="flex flex-row gap-0 items-center">
              <HeartIcon
                className="text-pink-600 opacity-20 mb-0 -ml-10 mr-4"
                size={60}
              />
              <div className="text-6xl font-bold text-pink-600 relative h-[57px] overflow-hidden">
                <motion.div
                  className="flex flex-col gap-0 absolute left-0"
                  style={{
                    y: y3,
                  }}
                >
                  <span>4.9</span>
                  <span>4.8</span>
                  <span>3.6</span>
                  <span>2.7</span>
                  <span>1.5</span>
                </motion.div>
                <span className="opacity-0 block px-1">4.9</span>
              </div>
              <span className="text-5xl font-bold text-pink-600 block -ml-2 mt-1">
                /5
              </span>
            </div>
          </div>

          <span className="text-lg font-light text-slate-800 block text-center text-nowrap">
            Student Rating
          </span>
        </div>
      </div>
    </div>
  );
};
export default Counters;
