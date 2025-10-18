"use client";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import { useRef } from "react";
import ProcessBox from "./ProcessBox";
import Aurora from "../ui/Aurora";
import Particles from "../ui/Particles";
import DotGrid from "../ui/DotGrid";

const AdmissionPathwaySection = () => {
  const parentContainerRef = useRef(null);
  const titleContainerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: parentContainerRef,
  });

  const subtitleOpacity = useTransform(scrollYProgress, [0, 0.05], [0, 1]);
  const titleOpacity = useTransform(
    scrollYProgress,
    [0, 0.05, 0.15],
    [0, 0, 1]
  );
  const titleScale = useTransform(
    scrollYProgress,
    [0, 0.05, 0.22],
    [1.1, 1.1, 1]
  );

  const trackVariants = {
    trackHidden: { scaleY: 0 },
    trackVisible: {
      scaleY: 1,
    },
  };

  return (
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
            baseColor="#e8f9ff"
            activeColor="#b3ddff"
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
          className="text-5xl font-semibold font-montserrat text-zinc-900 block text-center"
        >
          The Admission Pathway
        </motion.h2>
      </section>

      <div className="h-[130vh]"></div>

      <section
        className="px-5 py-[150px] relative w-full flex flex-col items-center gap-0 bg-white bg-[linear-gradient(to_right,#aaaaaa2e_1px,transparent_1px),linear-gradient(to_bottom,#aaaaaa2e_1px,transparent_1px)] bg-[size:40px_40px] border-t-2 border-zinc-900"
        style={{
          boxShadow: "0px -5px 20px 0px rgba(0,0,0,0.06)",
        }}
      >
        <ProcessBox
          sl={"1"}
          title={"Initial Consultations"}
          description={
            "Our first step is to understand you and your child on an academic and personal level."
          }
        />

        <motion.div
          variants={trackVariants}
          initial="trackHidden"
          whileInView="trackVisible"
          viewport={{ margin: "300px 0px -45% 0px" }}
          transition={{ ease: "easeInOut", duration: 0.3 }}
          className="origin-top w-0 h-[100px] border-r-4 border-zinc-800 border-dashed"
        ></motion.div>

        <ProcessBox
          sl={"2"}
          title={"School & University Search"}
          description={
            "We review our recommended school and university options with you in detail."
          }
        />

        <motion.div
          variants={trackVariants}
          initial="trackHidden"
          whileInView="trackVisible"
          viewport={{ margin: "300px 0px -45% 0px" }}
          transition={{ ease: "easeInOut", duration: 0.3 }}
          className="origin-top w-0 h-[100px] border-r-4 border-zinc-800 border-dashed"
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
          className="origin-top w-0 h-[100px] border-r-4 border-zinc-800 border-dashed"
        ></motion.div>

        <ProcessBox
          sl={"4"}
          title={"Entrance Exams"}
          description={
            "We utilize our resources and network of tutors  to help you prepare for exams."
          }
        />

        <motion.div
          variants={trackVariants}
          initial="trackHidden"
          whileInView="trackVisible"
          viewport={{ margin: "300px 0px -45% 0px" }}
          transition={{ ease: "easeInOut", duration: 0.3 }}
          className="origin-top w-0 h-[100px] border-r-4 border-zinc-800 border-dashed"
        ></motion.div>

        <ProcessBox
          sl={"5"}
          title={"Interview Preparation"}
          description={
            "Our admissions specialists work to build your skills and confidence."
          }
        />

        <motion.div
          variants={trackVariants}
          initial="trackHidden"
          whileInView="trackVisible"
          viewport={{ margin: "300px 0px -45% 0px" }}
          transition={{ ease: "easeInOut", duration: 0.3 }}
          className="origin-top w-0 h-[100px] border-r-4 border-zinc-800 border-dashed"
        ></motion.div>

        <ProcessBox
          sl={"6"}
          title={"Portfolio Building"}
          description={
            "Our advisors may suggest extra-curricular activities to improve student profiles."
          }
        />
      </section>
    </div>
  );
};
export default AdmissionPathwaySection;
