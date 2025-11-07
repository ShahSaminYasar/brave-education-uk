"use client";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import { useRef, useState } from "react";
import ProcessBox from "./ProcessBox";
// import Aurora from "../ui/Aurora";
// import Particles from "../ui/Particles";
import DotGrid from "../ui/DotGrid";
import { Mouse } from "lucide-react";

const AdmissionPathwaySection = () => {
  const parentContainerRef = useRef(null);
  // const titleContainerRef = useRef(null);
  const processesContainerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: parentContainerRef,
  });
  const { scrollYProgress: processesScrollYProgress } = useScroll({
    target: processesContainerRef,
    offset: ["start start", "end 20%"],
  });

  const subtitleOpacity = useTransform(scrollYProgress, [0, 0.035], [0, 1]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.05, 0.1], [0, 0, 1]);
  const titleScale = useTransform(
    scrollYProgress,
    [0, 0.05, 0.14],
    [1.1, 1.1, 1]
  );

  const progressContainerScale = useTransform(
    processesScrollYProgress,
    [0, 0.85, 0.875],
    [0.85, 0.85, 1]
  );
  const progressScaleX = useTransform(processesScrollYProgress, [0, 1], [0, 1]);
  const progressBGColor = useTransform(
    processesScrollYProgress,
    [0, 0.65, 0.95],
    ["#ffabfc", "#abfbff", "#abffbe"]
  );

  const trackVariants = {
    trackHidden: { scaleY: 0 },
    trackVisible: {
      scaleY: 1,
    },
  };

  const [sectionTitleVisible, setSectionTitleVisible] = useState(false);

  useMotionValueEvent(processesScrollYProgress, "change", (current) => {
    const diff = current - processesScrollYProgress?.getPrevious();

    if (current > 0.04 && diff > 0) {
      setSectionTitleVisible(true);
    } else {
      setSectionTitleVisible(false);
    }
  });

  return (
    <>
      <div ref={parentContainerRef} className="w-full relative">
        <section className="sticky top-0 w-full section h-screen flex flex-col items-center justify-center gap-2 bg-white">
          <div className="absolute top-0 right-0 left-0 bottom-0 w-full h-screen -z-10">
            {/* <Particles
            particleColors={["#ffd6fc", "#ff00bb", "#00ff0d", "#ff7b00"]}
            particleCount={400}
            particleSpread={20}
            speed={0.15}
            particleBaseSize={950}
            moveParticlesOnHover={false}
            alphaParticles={false}
            disableRotation={false}
          /> */}

            <DotGrid
              dotSize={10}
              gap={15}
              baseColor="#fbfbfb"
              activeColor="#ebebeb"
              proximity={120}
              shockRadius={250}
              shockStrength={5}
              resistance={750}
              returnDuration={1.5}
            />
          </div>

          {/* <div className="absolute top-0 right-0 left-0 bottom-0 w-full h-screen backdrop-blur-[30px] bg-gradient-to-b from-white to-transparent -z-10"></div> */}

          <motion.h4
            style={{
              opacity: subtitleOpacity,
            }}
            className={`block w-full text-center text-sm font-semibold text-primary`}
          >
            Educational Consultancy
          </motion.h4>
          <motion.h2
            style={{
              opacity: titleOpacity,
              scale: titleScale,
            }}
            className="text-3xl sm:text-3xl lg:text-4xl 2xl:text-5xl block font-montserrat text-center font-semibold text-zinc-900"
          >
            The Admission Pathway
          </motion.h2>

          {/* <Mouse
          size={28}
          className="text-zinc-300 absolute left-1/2 bottom-10 -translate-x-1/2 animate-bounce"
        /> */}

          {/* Scroll indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <div className="w-6 h-9 border-2 border-gray-300 rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-gray-300 rounded-full mt-2"
              />
            </div>
          </motion.div>
        </section>

        <div className="h-[50vh]"></div>
      </div>
      <div className="w-full relative">
        <section
          ref={processesContainerRef}
          className="px-5 pt-[150px] relative w-full flex flex-col items-center gap-0 bg-white bg-[linear-gradient(to_right,#d7d7d72e_1px,transparent_1px),linear-gradient(to_bottom,#d7d7d72e_1px,transparent_1px)] bg-[size:30px_30px]"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{
              opacity: sectionTitleVisible ? 1 : 0,
              y: sectionTitleVisible ? 0 : -20,
            }}
            transition={{ duration: 0.15, ease: "easeInOut" }}
            className="sticky top-0 left-0 w-full p-5 z-40"
          >
            <motion.div
              className={`w-full max-w-sm mx-auto rounded-[100px] shadow-sm border-x-2 border-slate-200 flex flex-col items-center justify-center pt-3 px-5 overflow-hidden`}
              style={{
                background: progressBGColor,
                scale: progressContainerScale,
              }}
            >
              <span className="text-xs font-semibold block text-center">
                Admission Process
              </span>

              <div className="w-full bg-slate-700 border-t border-slate-300 h-[3px] rounded-md mt-3 scale-x-110">
                <motion.span
                  className={`block w-full h-full origin-left`}
                  style={{
                    scaleX: progressScaleX,
                    background: progressBGColor,
                  }}
                ></motion.span>
              </div>
            </motion.div>
          </motion.div>

          <ProcessBox
            sl={"1"}
            title={"Initial Consultations"}
            description={
              "Our first step is to understand your academic background and plans for higher study."
            }
          />

          <motion.div
            variants={trackVariants}
            initial="trackHidden"
            whileInView="trackVisible"
            viewport={{ margin: "300px 0px -45% 0px" }}
            transition={{ ease: "easeInOut", duration: 0.3 }}
            className="origin-top w-0 h-[100px] border-r-2 border-zinc-800 border-dashed"
          ></motion.div>

          <ProcessBox
            sl={"2"}
            title={"Select your destination & university"}
            description={
              "We will review your chosen university and course with entry requirements."
            }
          />

          <motion.div
            variants={trackVariants}
            initial="trackHidden"
            whileInView="trackVisible"
            viewport={{ margin: "300px 0px -45% 0px" }}
            transition={{ ease: "easeInOut", duration: 0.3 }}
            className="origin-top w-0 h-[100px] border-r-2 border-zinc-800 border-dashed"
          ></motion.div>

          <ProcessBox
            sl={"3"}
            title={"Application Guidance"}
            description={
              "We deliver expert guidance throughout every step of the process to maximize your chance."
            }
          />

          <motion.div
            variants={trackVariants}
            initial="trackHidden"
            whileInView="trackVisible"
            viewport={{ margin: "300px 0px -45% 0px" }}
            transition={{ ease: "easeInOut", duration: 0.3 }}
            className="origin-top w-0 h-[100px] border-r-2 border-zinc-800 border-dashed"
          ></motion.div>

          <ProcessBox
            sl={"4"}
            title={"CO/UCO Issue"}
            description={"We will have your offer in the given timeframe."}
          />

          <motion.div
            variants={trackVariants}
            initial="trackHidden"
            whileInView="trackVisible"
            viewport={{ margin: "300px 0px -45% 0px" }}
            transition={{ ease: "easeInOut", duration: 0.3 }}
            className="origin-top w-0 h-[100px] border-r-2 border-zinc-800 border-dashed"
          ></motion.div>

          <ProcessBox
            sl={"5"}
            title={"Interview Preparation"}
            description={
              "Our admissions specialists work to build your skills and confidence for Pre-CAS interview.."
            }
          />

          <motion.div
            variants={trackVariants}
            initial="trackHidden"
            whileInView="trackVisible"
            viewport={{ margin: "300px 0px -45% 0px" }}
            transition={{ ease: "easeInOut", duration: 0.3 }}
            className="origin-top w-0 h-[100px] border-r-2 border-zinc-800 border-dashed"
          ></motion.div>

          <ProcessBox
            sl={"6"}
            title={"Receive your CAS/Acceptance letter"}
            description={
              "Our compliance team will guide to get all ready smoother way."
            }
          />

          <motion.div
            variants={trackVariants}
            initial="trackHidden"
            whileInView="trackVisible"
            viewport={{ margin: "300px 0px -45% 0px" }}
            transition={{ ease: "easeInOut", duration: 0.3 }}
            className="origin-top w-0 h-[100px] border-r-2 border-zinc-800 border-dashed"
          ></motion.div>

          <ProcessBox
            sl={"7"}
            title={"Visa"}
            description={
              "Legal team will handle your visa application to take stress and confusion out of the process."
            }
          />

          <div className="h-[150px]"></div>
        </section>
      </div>
    </>
  );
};
export default AdmissionPathwaySection;
