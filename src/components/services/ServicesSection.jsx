"use client";
import { ArrowUpRight, Book, Plane, University, Users } from "lucide-react";
import ServiceBox from "./ServiceBox";
import { useRef } from "react";
import { useScroll, motion, useTransform, scale } from "motion/react";
import { Button } from "../ui/button";
import SectionTitle from "../ui/SectionTitle";
import Link from "next/link";

const ServicesSection = () => {
  // Refs
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({ target: containerRef });

  const x = useTransform(scrollYProgress, [0, 0.79, 1], ["33%", "20%", "18%"]);
  const y = useTransform(scrollYProgress, [0, 0.79, 1], ["33%", "20%", "18%"]);

  const contentVariant = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: { opacity: 1, scale: 1 },
  };

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.55, 1],
    [0, 0, 1, 1],
  );
  const scale = useTransform(
    scrollYProgress,
    [0, 0.21, 0.8, 1],
    [0.9, 0.9, 0.87, 0.83],
  );
  const layerOpacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.65, 1],
    [1, 0, 0, 1],
  );

  return (
    <div ref={containerRef} className="relative min-h-[170vh] w-full section">
      <div
        className="absolute top-0 left-0 w-full h-full z-0"
        style={{
          background: "url(/white-bg-3.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <section className="sticky top-0 z-10 w-full min-h-screen max-w-6xl mx-auto bg-transparent flex flex-col items-center justify-center">
        {/* Droplet */}
        <div className="droplet absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 -z-10 w-full max-w-[340px] md:max-w-md">
          {/* Screens < md */}
          <>
            <motion.div
              className="absolute block md:hidden"
              style={{
                left: "0px",
                top: -50,
              }}
            >
              <ServiceBox
                id={0}
                title={"University Admission"}
                icon={<University size={20} />}
              />
            </motion.div>

            <motion.div
              className="absolute block md:hidden"
              style={{
                right: "0px",
                top: -10,
              }}
            >
              <ServiceBox
                id={8.75}
                title={"Brave Law"}
                icon={<Plane size={20} />}
              />
            </motion.div>

            <motion.div
              className="absolute block md:hidden"
              style={{
                left: "0px",
                bottom: -20,
              }}
            >
              <ServiceBox
                id={17.5}
                title={"Brave HR"}
                icon={<Users size={20} />}
              />
            </motion.div>

            <motion.div
              className="absolute block md:hidden"
              style={{
                right: "0px",
                bottom: -60,
              }}
            >
              <ServiceBox
                id={26.25}
                title={"English Courses"}
                icon={<Book size={20} />}
              />
            </motion.div>
          </>
        </div>

        <motion.div
          className="flex flex-col items-center justify-center gap-4 relative"
          style={{
            opacity,
            scale,
          }}
        >
          <SectionTitle animate={false} text={"Our Services"} align="center" />
          <p className="w-full max-w-[280px] md:max-w-sm block text-center para -mt-3 mb-1">
            We provide end-to-end support for students and professionals — from
            counselling and university admissions to visa assistance, English
            courses, and even company setup in the UK.
          </p>
          <Link
            href={"/appointment"}
            className="bg-gradient-to-r from-[#261a75] via-[#090041] to-[#261a75] text-primary-foreground hover:bg-primary/90 px-4 py-2 flex items-center justify-center gap-1 rounded-4xl"
          >
            Free Counselling <ArrowUpRight />
          </Link>
        </motion.div>

        {/* Screens >= md */}
        <>
          <motion.div
            className="absolute hidden md:block"
            style={{
              left: x,
              bottom: y,
              transform: "translate(-50%, 50%)",
            }}
          >
            <ServiceBox title={"Brave HR"} icon={<Users size={20} />} />
          </motion.div>

          <motion.div
            className="absolute hidden md:block"
            style={{
              right: x,
              top: y,
              transform: "translate(50%, -50%)",
            }}
          >
            <ServiceBox title={"Brave Law"} icon={<Plane size={20} />} />
          </motion.div>

          <motion.div
            className="absolute hidden md:block"
            style={{
              right: x,
              bottom: y,
              transform: "translate(50%, 50%)",
            }}
          >
            <ServiceBox title={"English Courses"} icon={<Book size={20} />} />
          </motion.div>

          <motion.div
            className="absolute hidden md:block"
            style={{
              left: x,
              top: y,
              transform: "translate(-50%, -50%)",
            }}
          >
            <ServiceBox
              title={"University Admission"}
              icon={<University size={20} />}
            />
          </motion.div>
        </>
      </section>

      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-white z-0"
        style={{
          opacity: layerOpacity,
        }}
      ></motion.div>
    </div>
  );
};
export default ServicesSection;
