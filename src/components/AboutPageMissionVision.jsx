"use client";
import Image from "next/image";
import SectionTitle from "./ui/SectionTitle";
import { ArrowUpRight, ChevronRight, ChevronRightCircle } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const AboutPageMissionVision = () => {
  const containerRef = useRef(null);

  // Motion
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["90%", "0%"]);

  return (
    <div ref={containerRef} className="w-full bg-[#d2f2ff] section">
      <section className="grid grid-cols-2 gap-16 items-center justify-center w-full max-w-6xl mx-auto">
        <motion.div
          style={{
            background:
              "url(https://themejunction.net/html/bexon/demo/assets/images/about/about-5.webp)",
            backgroundSize: "120%",
            backgroundRepeat: "no-repeat",
            backgroundPositionX: "50%",
            backgroundPositionY: y,
          }}
          className="w-full h-full rounded-2xl p-5"
        ></motion.div>

        <div className="flex flex-col gap-6 w-full">
          <span className="text-sm font-semibold -mb-3 text-zinc-700">
            Our Principles
          </span>

          <h3 className="text-3xl sm:text-3xl lg:text-[40px] block font-[500] font-poppins text-zinc-900 leading-[130%]">
            Empowering Students Worldwide Through Personalized Guidance and
            Global <span className="text-primary">Opportunities</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full">
            <div className="p-5 rounded-2xl bg-white flex flex-col items-start gap-3">
              <h5 className="text-xl font-semibold text-zinc-900 -mb-1">
                Our Mission
              </h5>
              <p className="text-xs sm:text-sm font-normal text-zinc-500">
                We guide students and parents with tailored educational support,
                scholarships, and holistic success planning.
              </p>
              <ul className="flex flex-col items-start gap-2">
                <li className="flex items-center gap-3 text-xs sm:text-sm text-zinc-500">
                  <ChevronRight size={16} className="text-primary" />{" "}
                  Personalized guidance
                </li>
                <li className="flex items-center gap-3 text-xs sm:text-sm text-zinc-500">
                  <ChevronRight size={16} className="text-primary" />{" "}
                  Scholarship support
                </li>
                <li className="flex items-center gap-3 text-xs sm:text-sm text-zinc-500">
                  <ChevronRight size={16} className="text-primary" /> Career
                  planning
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-white flex flex-col items-start gap-3">
              <h5 className="text-xl font-semibold text-zinc-900 -mb-1">
                Our Vission
              </h5>
              <p className="text-xs sm:text-sm font-normal text-zinc-500">
                We connect students with global universities, offering expert
                guidance and quality support for academic success.
              </p>
              <ul className="flex flex-col items-start gap-2">
                <li className="flex items-center gap-3 text-xs sm:text-sm text-zinc-500">
                  <ChevronRight size={16} className="text-primary" /> Global
                  reach
                </li>
                <li className="flex items-center gap-3 text-xs sm:text-sm text-zinc-500">
                  <ChevronRight size={16} className="text-primary" /> Expert
                  guidance
                </li>
                <li className="flex items-center gap-3 text-xs sm:text-sm text-zinc-500">
                  <ChevronRight size={16} className="text-primary" /> Quality
                  service
                </li>
              </ul>
            </div>
          </div>

          <Link
            href={"#"}
            className="w-full px-3 py-2 text-sm font-medium text-white bg-primary rounded-lg flex items-center justify-center gap-2"
          >
            See our Courses <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};
export default AboutPageMissionVision;
