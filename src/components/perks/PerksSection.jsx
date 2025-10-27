"use client";
import {
  GraduationCap,
  Headset,
  Mouse,
  ShieldCheck,
  Users,
} from "lucide-react";
import Perk from "./Perk";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "motion/react";
import SectionTitle from "../ui/SectionTitle";

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
    <div ref={containerRef} className="w-full min-h-[300vh] relative">
      <div
        className="w-full sticky top-0"
        style={{
          background: "url(/white-bg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <section className="section max-w-6xl mx-auto w-full h-screen flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-10 items-center justify-center">
          <div className="w-full hidden md:flex">
            <SectionTitle
              subtext={"Perks"}
              text={"Why you should choose us"}
              align="left"
              animate={false}
            />
          </div>

          <div className="w-full flex md:hidden">
            <SectionTitle
              subtext={"Perks"}
              text={"Why you should choose us"}
              align="center"
              animate={false}
            />
          </div>

          <div className="flex flex-col gap-5 items-start">
            <motion.div style={{ opacity: opacity1 }}>
              <Perk
                icon={<Users fontSize={25} />}
                text={"Experienced and Qualified Staff"}
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
      </div>
    </div>
  );
};
export default PerksSection;
