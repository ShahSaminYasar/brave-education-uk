"use client";
import { GraduationCap, Headset, ShieldCheck, Users } from "lucide-react";
import Perk from "./Perk";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "motion/react";

const PerksSection = () => {
  // Refs
  const containerRef = useRef(null);

  //   Motion
  const { scrollYProgress } = useScroll({ target: containerRef });

  const opacity1 = useTransform(
    scrollYProgress,
    [0, 0.1, 0.2],
    [0.18, 0.18, 1]
  );
  const opacity2 = useTransform(
    scrollYProgress,
    [0, 0.3, 0.4],
    [0.18, 0.18, 1]
  );
  const opacity3 = useTransform(
    scrollYProgress,
    [0, 0.5, 0.6],
    [0.18, 0.18, 1]
  );
  const opacity4 = useTransform(
    scrollYProgress,
    [0, 0.7, 0.8],
    [0.18, 0.18, 1]
  );

  return (
    <div ref={containerRef} className="w-full min-h-[400vh] relative bg-white">
      <section className="section max-w-6xl mx-auto sticky top-0 w-full h-screen grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-center">
        <h3 className="text-5xl font-semibold text-zinc-900 block text-left leading-[130%]">
          Why you should choose us
        </h3>

        <div className="flex flex-col gap-5 items-start">
          <motion.div style={{ opacity: opacity1 }}>
            <Perk
              icon={<Users fontSize={25} />}
              text={"Licensed and Qualified Staff"}
            />
          </motion.div>

          <motion.div style={{ opacity: opacity2 }}>
            <Perk
              icon={<ShieldCheck fontSize={25} />}
              text={"100% Free Counselling and Assessment"}
            />
          </motion.div>

          <motion.div style={{ opacity: opacity3 }}>
            <Perk
              icon={<GraduationCap fontSize={25} />}
              text={"Free Application and Admission"}
            />
          </motion.div>

          <motion.div style={{ opacity: opacity4 }}>
            <Perk
              icon={<Headset fontSize={25} />}
              text={"24/7 Student Support Guidance"}
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
};
export default PerksSection;
