"use client";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "../ui/button";
import SectionTitle from "../ui/SectionTitle";
import Image from "next/image";
import ScrollReveal from "../ui/ScrollReveal";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const AboutSection = () => {
  const { scrollY } = useScroll();

  // Refs
  const imageCardsContainerRef = useRef(null);

  // States
  const [containerInView, setContainerInView] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("down");

  const imageVariants = {
    hidden: { opacity: 0, filter: "blur(5px)", scale: 0.7 },
    visible: { opacity: 1, filter: "blur(0px)", scale: 1 },
  };

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious();
    if (!previous || previous === undefined) return;

    const diff = current - previous;

    if (diff > 0) {
      setScrollDirection("down");
    } else if (diff < 0) {
      setScrollDirection("up");
    }
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.7) {
          setContainerInView(true);
        }
      },
      {
        threshold: [0, 0.1, 0.5, 0.9, 1],
        rootMargin: "0px",
      }
    );

    if (imageCardsContainerRef.current) {
      observer.observe(imageCardsContainerRef.current);
    }

    return () => {
      if (imageCardsContainerRef.current) {
        observer.unobserve(imageCardsContainerRef.current);
      }
    };
  }, []);

  return (
    <section className="relative section bg-[radial-gradient(#0000001a_1px,#f8fafc_1px)] bg-[size:22px_22px]">
      <div className="absolute bg-gradient-to-r from-white to-transparent w-[80%] h-full top-0 left-0"></div>

      <div className="relative z-10 container grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="w-full flex flex-col items-start gap-3">
          <SectionTitle text={"Who Are We?"} align="left" />

          <ScrollReveal
            baseOpacity={0}
            enableBlur={true}
            baseRotation={5}
            blurStrength={10}
            textClassName="para mb-1"
          >
            At Brave Education UK, we help students and professionals achieve
            their dreams of studying, working, and settling abroad. Our services
            cover everything from choosing the right study program and applying
            for a visa, to preparing for English tests and even setting up your
            company in the UK.
          </ScrollReveal>

          <ScrollReveal
            baseOpacity={0}
            enableBlur={true}
            baseRotation={5}
            blurStrength={10}
            textClassName="para"
          >
            We focus on making the whole process simple, transparent, and
            stress-free, so you always know what to expect. Whether you are
            planning to study, build a career, or explore new opportunities,
            we’re here to guide you step by step.
          </ScrollReveal>

          <Link href="/services" className={"mt-2"}>
            Our Services <ArrowUpRight />
          </Link>
        </div>

        <motion.div
          ref={imageCardsContainerRef}
          className="relative w-full min-h-[650px]"
        >
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate={containerInView ? "visible" : "hidden"}
            transition={{ duration: 0.2, delay: 0 }}
            className="absolute top-0 right-0 shadow-2xl skew-x-[-7deg] skew-y-[5deg]"
          >
            <Image
              src={"/assets/images/graduates_group_pic.jpg"}
              width={720}
              height={1080}
              alt="UK classroom"
              className="block w-[220px] rounded-lg aspect-[9/13] bg-red-50 overflow-hidden object-cover object-center"
            />
          </motion.div>

          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate={containerInView ? "visible" : "hidden"}
            transition={{ duration: 0.2, delay: 0.1 }}
            className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 shadow-2xl skew-x-[2deg] skew-y-[-2deg]"
          >
            <Image
              src={"/assets/images/uk_office.jpg"}
              width={720}
              height={1080}
              alt="UK office"
              className="block w-[220px] rounded-lg aspect-[9/13] bg-red-50 overflow-hidden  object-cover object-center"
            />
          </motion.div>

          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate={containerInView ? "visible" : "hidden"}
            transition={{ duration: 0.2, delay: 0.2 }}
            className="absolute bottom-0 left-0 shadow-2xl -rotate-6 skew-x-[-9deg] skew-y-[9deg]"
          >
            <Image
              src={"/assets/images/bd_office_desk.jpg"}
              width={720}
              height={1080}
              alt="Abdur Rahman Sir during counselling session"
              className="block w-[220px] rounded-lg aspect-[9/13] bg-red-50 overflow-hidden object-cover object-center"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
export default AboutSection;
