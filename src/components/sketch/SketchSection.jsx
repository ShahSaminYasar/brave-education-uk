"use client";
import { useRef } from "react";
import Sketch from "./Sketch";
import { motion, useScroll, useTransform } from "motion/react";

const SketchSection = () => {
  // Refs
  const containerRef = useRef(null);

  // Motion
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const text1 = useTransform(
    scrollYProgress,
    [0, 0.05, 0.15, 0.18],
    [0, 1, 1, 0]
  );
  const text2 = useTransform(
    scrollYProgress,
    [0.18, 0.23, 0.33, 0.36],
    [0, 1, 1, 0]
  );
  const text3 = useTransform(
    scrollYProgress,
    [0.36, 0.41, 0.51, 0.54],
    [0, 1, 1, 0]
  );
  const text4 = useTransform(
    scrollYProgress,
    [0.54, 0.59, 0.69, 0.72],
    [0, 1, 1, 0]
  );
  const y = useTransform(scrollYProgress, [0, 0.69, 0.78], [120, 120, 0]);
  const scale = useTransform(scrollYProgress, [0.77, 1], [1, 1.06]);
  // const width = useTransform(scrollYProgress, [0.68, 0.85], ["0%", "100%"]);
  const width = useTransform(scrollYProgress, [0.85, 1], ["0%", "0%"]);

  return (
    <div className="w-full relative bg-white">
      <section
        ref={containerRef}
        className="font-satisfy relative z-10 h-[520vh]"
      >
        <div className="flex flex-col md:grid md:grid-cols-2 gap-0 items-center md:items-start justify-center w-full sticky top-0">
          <Sketch containerRef={containerRef} />

          <div className="flex p-5 md:p-7 w-full h-[50vh] md:h-screen relative bg-white">
            <div
              style={{
                background: "url(/bg-dark.jpg)",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
              }}
              className="rounded-2xl w-full h-full flex justify-center items-center relative"
            >
              <motion.div
                className="absolute z-0 top-0 left-0 h-full block bg-transparent md:bg-white"
                style={{
                  width: width,
                }}
              ></motion.div>

              <div className="relative z-10 w-full h-full flex-col items-center justify-center">
                <motion.div
                  style={{
                    opacity: text1,
                  }}
                  className="w-full flex flex-col items-center gap-3 justify-center text-[24px] max-w-[70%] md:text-[30px] font-light text-[#c1b2ff] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
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
                  className="w-full flex flex-col items-center gap-3 justify-center text-[24px] max-w-[80%] md:text-[30px] font-light text-[#f6ff79] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
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
                  className="w-full flex flex-col items-center gap-3 justify-center text-[24px] max-w-[80%] md:text-[30px] font-light text-[#ebaaff] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
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
                  className="w-full flex flex-col items-center gap-3 justify-center text-[24px] max-w-[80%] md:text-[30px] font-light text-[#9fff87] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
                >
                  <div className="w-full h-fit overflow-y-hidden">
                    <span
                      className="text-center block"
                      style={{
                        textShadow: "0px 0px 20px #fff",
                      }}
                    >
                      we assist you to
                    </span>
                  </div>
                </motion.div>

                <motion.div
                  className="w-fit flex flex-col items-center gap-3 justify-center text-[80px] md:text-[110px] font-light text-rose-500 font-germania-one leading-[100%] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
                  style={{
                    scale: scale,
                  }}
                >
                  <div className="w-fit md:h-[110px] overflow-y-hidden">
                    <motion.div
                      className="bg-gradient-to-b from-sky-300 to-sky-700 bg-clip-text"
                      style={{
                        y: y,
                      }}
                    >
                      <span className="text-transparent">Achieve</span>
                    </motion.div>
                  </div>

                  <div className="w-fit md:h-[75px] overflow-y-hidden -my-[35px] md:-mt-10 md:-mb-[50px]">
                    <motion.div
                      className="bg-gradient-to-b from-rose-600 via-rose-600 via-50% to-rose-800 to-90% bg-clip-text font-satisfy text-[45px] md:text-[75px] leading-[80%]"
                      style={{
                        y: y,
                      }}
                    >
                      <motion.span className="text-transparent">
                        Your
                      </motion.span>
                    </motion.div>
                  </div>

                  <div className="w-fit md:h-[100px] overflow-y-hidden">
                    <motion.div
                      className="bg-gradient-to-b from-yellow-500 via-yellow-300 via-50% to-yellow-500 to-80% bg-clip-text"
                      style={{
                        y: y,
                      }}
                    >
                      <motion.span className="text-transparent">
                        Goal
                      </motion.span>
                    </motion.div>
                  </div>
                </motion.div>
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
