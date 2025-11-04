"use client";
import SectionTitle from "@/components/ui/SectionTitle";
import { CheckCircle, Clock } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const Perks = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);

  const generalVariants = {
    hidden: {
      y: 20,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div
      ref={containerRef}
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(10, 11, 78, 0.9), rgba(10, 11, 78, 0.9)), url(/page_bg.jpg)",
        backgroundSize: "400%",
        backgroundPositionX: "center",
        backgroundPositionY: y,
        backgroundRepeat: "no-repeat",
      }}
      className="section w-full"
    >
      <section className="flex flex-col items-center justify-center gap-10">
        <SectionTitle
          align="center"
          text={"What You'll Get"}
          subtext={"Perks"}
          style={{
            color: "#fff",
          }}
        />

        <motion.div
          variants={generalVariants}
          initial={"hidden"}
          whileInView={"visible"}
          transition={{ duration: 0.4, delay: 0 }}
          viewport={{ margin: "100px 0px -20% 0px" }}
          className="w-full max-w-md p-5 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 mx-auto text-white font-medium text-sm flex flex-col items-start mt-0 justify-center gap-3"
        >
          <p className="flex items-center justify-start gap-3">
            <CheckCircle size={18} className="text-yellow-500" /> 10
            comprehensive classes with expert teachers
          </p>
          <p className="flex items-center justify-start gap-3">
            <CheckCircle size={18} className="text-yellow-500" /> 2 realistic
            mock tests with detailed feedback
          </p>
          <p className="flex items-center justify-start gap-3">
            <CheckCircle size={18} className="text-yellow-500" /> Study
            materials and online resources included
          </p>
          <p className="flex items-center justify-start gap-3">
            <CheckCircle size={18} className="text-yellow-500" /> Flexible
            online and in-person class options
          </p>
          <p className="flex items-center justify-start gap-3">
            <CheckCircle size={18} className="text-yellow-500" /> 98% first-time
            pass rate success guarantee
          </p>
          <p className="flex items-center justify-start gap-3">
            <CheckCircle size={18} className="text-yellow-500" /> Free course
            retake if you don't pass
          </p>
        </motion.div>

        <motion.p
          variants={generalVariants}
          initial={"hidden"}
          whileInView={"visible"}
          transition={{ duration: 0.4, delay: 0 }}
          viewport={{ margin: "100px 0px -20% 0px" }}
          className="w-full max-w-md p-5 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 mx-auto flex items-center gap-3 justify-center text-yellow-500 -mt-4 text-sm font-medium"
        >
          <Clock size={15} /> Next batch starts from November 5th
        </motion.p>
      </section>
    </motion.div>
  );
};
export default Perks;
