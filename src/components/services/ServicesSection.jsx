"use client";
import { ArrowUpRight, Book, Building, Plane, University } from "lucide-react";
import ServiceBox from "./ServiceBox";
import { useRef } from "react";
import { useScroll, motion, useTransform, scale } from "motion/react";
import { Button } from "../ui/button";

const ServicesSection = () => {
  // Refs
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({ target: containerRef });

  const x = useTransform(scrollYProgress, [0, 0.75, 1], ["50%", "20%", "16%"]);
  const y = useTransform(scrollYProgress, [0, 0.75, 1], ["50%", "20%", "16%"]);

  const contentVariant = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: { opacity: 1, scale: 1 },
  };

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.5, 0.75, 1],
    [0, 0, 1, 1]
  );
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 0.8, 1]);

  return (
    <div
      ref={containerRef}
      className="relative min-h-[650vh] w-full bg-white section"
    >
      <section className="sticky top-0 w-full min-h-screen bg-white flex flex-col items-center justify-center">
        <motion.div
          className="flex flex-col items-center justify-center gap-4"
          style={{
            opacity,
            scale,
          }}
        >
          <h2 className="text-5xl font-montserrat font-semibold block text-center">
            Our Services
          </h2>
          <p className="w-full max-w-sm block text-center para">
            We provide end-to-end support for students and professionals — from
            counselling and university admissions to visa assistance, English
            courses, and even company setup in the UK.
          </p>
          <Button>
            Free Counselling <ArrowUpRight />
          </Button>
        </motion.div>

        <motion.div
          className="absolute"
          style={{
            left: x,
            top: y,
            transform: "translate(-50%, -50%)",
          }}
        >
          <ServiceBox title={"English Courses"} icon={<Book size={20} />} />
        </motion.div>

        <motion.div
          className="absolute"
          style={{
            right: x,
            top: y,
            transform: "translate(50%, -50%)",
          }}
        >
          <ServiceBox title={"Visa Application"} icon={<Plane size={20} />} />
        </motion.div>

        <motion.div
          className="absolute"
          style={{
            left: x,
            bottom: y,
            transform: "translate(-50%, 50%)",
          }}
        >
          <ServiceBox title={"Company Setup"} icon={<Building size={20} />} />
        </motion.div>

        <motion.div
          className="absolute"
          style={{
            right: x,
            bottom: y,
            transform: "translate(50%, 50%)",
          }}
        >
          <ServiceBox
            title={"Higher Education"}
            icon={<University size={20} />}
          />
        </motion.div>
      </section>
    </div>
  );
};
export default ServicesSection;
