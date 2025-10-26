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

  const text1 = useTransform(scrollYProgress, [0, 0.07, 0.14], [0, 1, 0]);
  const text2 = useTransform(scrollYProgress, [0.14, 0.21, 0.28], [0, 1, 0]);
  const text3 = useTransform(scrollYProgress, [0.28, 0.35, 0.42], [0, 1, 0]);
  const text4 = useTransform(scrollYProgress, [0.42, 0.49, 0.56], [0, 1, 0]);
  const y = useTransform(scrollYProgress, [0.56, 0.8], [120, 0]);

  return (
    <div className="w-full relative -z-10 bg-transparent">
      <div className="absolute top-0 left-0 w-1/2 h-full block bg-transparent md:bg-white"></div>

      <section className="flex flex-col-reverse md:grid md:grid-cols-2 gap-10 items-center md:items-start justify-center font-satisfy relative z-10">
        <Sketch />

        <div ref={textContainerRef} className="w-full h-[600vh] relative px-7">
          <div className="sticky top-0 flex p-5 flex-col items-center justify-center w-full h-screen">
            <motion.div
              style={{
                opacity: text1,
              }}
              className="w-full flex flex-col items-center gap-3 justify-center text-[30px] font-light text-zinc-800 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
            >
              <div className="w-fit px-2 h-fit overflow-y-hidden">
                <span className="text-center block">Guidance</span>
              </div>
            </motion.div>

            <motion.div
              style={{
                opacity: text2,
              }}
              className="w-full flex flex-col items-center gap-3 justify-center text-[30px] font-light text-slate-800 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
            >
              <div className="w-fit px-2 h-fit overflow-y-hidden">
                <span className="text-center block">Without</span>
              </div>
            </motion.div>

            <motion.div
              style={{
                opacity: text3,
              }}
              className="w-full flex flex-col items-center gap-3 justify-center text-[30px] font-light text-zinc-800 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
            >
              <div className="w-fit px-2 h-fit overflow-y-hidden">
                <span className="text-center block">Confusion</span>
              </div>
            </motion.div>

            <motion.div
              style={{
                opacity: text4,
              }}
              className="w-full flex flex-col items-center gap-3 justify-center text-[30px] font-light text-slate-800 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
            >
              <div className="w-full h-fit overflow-y-hidden">
                <span className="text-center block">We help you</span>
              </div>
            </motion.div>

            <div className="w-full flex flex-col items-start gap-3 justify-center text-[80px] md:text-[110px] font-light text-zinc-900 font-germania-one leading-[100%] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
              <div className="w-full h-fit overflow-y-hidden text-blue-800">
                <motion.span
                  style={{
                    display: "block",
                    y: y,
                  }}
                >
                  Achieve
                </motion.span>
              </div>
              <div className="w-full h-fit overflow-y-hidden text-primary">
                <motion.span
                  style={{
                    display: "block",
                    y: y,
                  }}
                >
                  Your
                </motion.span>
              </div>
              <div className="w-full h-fit overflow-y-hidden text-green-600">
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
          </div>
        </div>
      </section>
    </div>
  );
};
export default SketchSection;
