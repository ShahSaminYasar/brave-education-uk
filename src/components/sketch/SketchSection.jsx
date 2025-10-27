"use client";
import { useRef } from "react";
import Sketch from "./Sketch";
import { motion, useScroll, useTransform } from "motion/react";

const SketchSection = () => {
  // Refs
  const textContainerRef = useRef(null);

  // Motion
  const { scrollYProgress } = useScroll({
    target: textContainerRef,
    offset: ["start start", "end end"],
  });

  const text1 = useTransform(
    scrollYProgress,
    [0, 0.0625, 0.171875, 0.21875],
    [0, 1, 1, 0]
  );
  const text2 = useTransform(
    scrollYProgress,
    [0.21875, 0.28125, 0.390625, 0.4375],
    [0, 1, 1, 0]
  );
  const text3 = useTransform(
    scrollYProgress,
    [0.4375, 0.5, 0.609375, 0.65625],
    [0, 1, 1, 0]
  );
  const text4 = useTransform(
    scrollYProgress,
    [0.61, 0.65, 0.715, 0.75],
    [0, 1, 1, 0]
  );
  const y = useTransform(scrollYProgress, [0.71, 0.77], [120, 0]);
  const width = useTransform(scrollYProgress, [0.68, 0.85], ["50%", "100%"]);

  return (
    <div
      className="w-full relative bg-transparent"
      style={{
        background: "url(/bg-dark.jpg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <motion.div
        className="absolute z-0  top-0 left-0 h-full block bg-transparent md:bg-white"
        style={{
          width: width,
        }}
      ></motion.div>

      <section className="flex flex-col-reverse md:grid md:grid-cols-2 gap-0 items-center md:items-start justify-center font-satisfy relative z-10">
        <Sketch />

        <div
          ref={textContainerRef}
          className="w-full h-[340vh] md:h-[520vh] relative px-7"
        >
          <div className="sticky top-0 flex p-5 flex-col items-center justify-center w-full h-screen">
            <motion.div
              style={{
                opacity: text1,
              }}
              className="w-full flex flex-col items-center gap-3 justify-center text-[24px] md:text-[30px] font-light text-[#d4d3ff] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
            >
              <div className="w-fit px-2 h-fit overflow-y-hidden">
                <span
                  className="text-center block"
                  style={{
                    textShadow: "0px 0px 20px #fff",
                  }}
                >
                  We believe every dream deserves the right guidance.
                </span>
              </div>
            </motion.div>

            <motion.div
              style={{
                opacity: text2,
              }}
              className="w-full flex flex-col items-center gap-3 justify-center text-[24px] md:text-[30px] font-light text-[#fcffd3] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
            >
              <div className="w-fit px-2 h-fit overflow-y-hidden">
                <span
                  className="text-center block"
                  style={{
                    textShadow: "0px 0px 20px #fff",
                  }}
                >
                  Our experts simplify every step, removing confusion and
                  hassle.
                </span>
              </div>
            </motion.div>

            <motion.div
              style={{
                opacity: text3,
              }}
              className="w-full flex flex-col items-center gap-3 justify-center text-[24px] md:text-[30px] font-light text-[#f5d3ff] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
            >
              <div className="w-fit px-2 h-fit overflow-y-hidden">
                <span
                  className="text-center block"
                  style={{
                    textShadow: "0px 0px 20px #fff",
                  }}
                >
                  With the right support by your side,
                </span>
              </div>
            </motion.div>

            <motion.div
              style={{
                opacity: text4,
              }}
              className="w-full flex flex-col items-center gap-3 justify-center text-[24px] md:text-[30px] font-light text-[#dcffd3] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
            >
              <div className="w-full h-fit overflow-y-hidden">
                <span
                  className="text-center block"
                  style={{
                    textShadow: "0px 0px 20px #fff",
                  }}
                >
                  we help you
                </span>
              </div>
            </motion.div>

            <div className="w-full flex flex-col items-start gap-3 justify-center text-[80px] md:text-[110px] font-light text-rose-500 font-germania-one leading-[100%] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
              <div className="w-full h-fit overflow-y-hidden text-[#1b1851]">
                <motion.span
                  style={{
                    display: "block",
                    y: y,
                  }}
                >
                  Achieve
                </motion.span>
              </div>
              <div className="w-full h-fit overflow-y-hidden text-green-600 font-satisfy text-[45px] md:text-[75px] leading-[80%] p-1 pt-2">
                <motion.span
                  style={{
                    display: "block",
                    y: y,
                  }}
                >
                  Your
                </motion.span>
              </div>
              <div className="w-full h-fit overflow-y-hidden text-primary">
                <motion.span
                  style={{
                    display: "block",
                    y: y,
                  }}
                >
                  Goal
                </motion.span>
              </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute bottom-5 left-1/2 -translate-x-1/2 md:-left-10 md:-translate-x-0 transform  z-20"
            >
              <div className="w-6 h-9 border-2 border-gray-300 rounded-full bg-gray-50 flex justify-center">
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-1 h-3 bg-gray-300 rounded-full mt-2"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default SketchSection;
