"use client";
import {
  ArrowUpRight,
  Grid2X2Check,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import SpotlightCard from "../SpotlightCard";
import { motion } from "motion/react";
import { useCallback } from "react";

const useScrollTo = () => {
  const scrollToSection = useCallback((sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = -40;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }, []);

  return scrollToSection;
};

const CourseBox = ({
  name,
  classNo,
  mockNo,
  fees,
  duration,
  four,
  mode,
  image,
  className,
  style,
  bgColor = "#231f52",
  accentColor = "#44406c",
  waLink = "#",
  link = "#",
  slug,
  id,
  setSelectedCourse,
}) => {
  const scrollTo = useScrollTo();

  return (
    <motion.div
      initial={{ opacity: 0.1, scale: 1, y: 50 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      viewport={{
        margin: "200px 0px -20% 0px",
      }}
      className="w-full mx-auto h-full relative rounded-3xl"
    >
      <SpotlightCard
        className={`w-full h-full rounded-3xl p-[18px] text-white flex flex-col-reverse gap-4 justify-end items-center shadow-lg ${
          className && className
        }`}
        style={{ background: bgColor }}
      >
        <div className="w-full flex flex-col items-start gap-6 h-full">
          <div className="w-full flex flex-col flex-nowrap gap-2 items-start">
            <div className="bg-gradient-to-br from-white/5 via-white/20 border border-white/30 to-white/5 rounded-2xl p-px mb-1">
              <div className="flex flex-row items-center justify-center gap-2 bg-white/5 text-white/90 text-[10px] font-semibold rounded-2xl px-4 py-[2px]">
                <span
                  className="block bg-gradient-to-br from-white/80 from-30% 
                      via-white/90 via-50% 
                      to-white/80 to-80% bg-clip-text"
                >
                  <span className="text-transparent">{mode}</span>
                </span>
              </div>
            </div>

            <h3 className="text-2xl font-black text-white">{name}</h3>
          </div>

          <div className="w-full grid grid-cols-1 gap-3 items-start justify-start text-sm font-montserrat">
            <div className="w-full flex flex-col gap-3 lg:col-span-1">
              <span className="w-full flex flex-row items-center gap-2">
                <ShieldCheck size={22} />
                <span>{classNo}</span>
              </span>

              <span className="w-full flex flex-row items-center gap-2">
                <ShieldCheck size={22} />
                <span>{duration}</span>
              </span>
            </div>

            <div className="w-full flex flex-col gap-3 lg:col-span-2">
              <span className="w-full flex flex-row items-center gap-2">
                <ShieldCheck size={22} />
                <span>{mockNo}</span>
              </span>

              <span className="w-full flex flex-row items-center gap-2">
                <ShieldCheck size={22} />
                <span>{four || "Qualified Teachers"}</span>
              </span>
            </div>
          </div>

          <div className="mt-auto w-full flex flex-row items-center justify-center gap-3">
            {/* <Link
              href={waLink}
              target="_blank"
              className="w-fit px-8 py-2 text-sm font-bold bg-[#42ea60] text-green-800 rounded-lg shadow-sm flex flex-row items-center gap-2 flex-nowrap hover:scale-105 duration-100"
              // style={{ background: "#fffff" }}
            >
              Enquire <MessageCircle size={20} />
            </Link> */}

            <button
              // href={link}
              onClick={() => {
                setSelectedCourse(id);
                scrollTo("course_confirm_form");
              }}
              target="_blank"
              className="w-full relative px-8 py-2 text-sm font-bold bg-white text-slate-900 rounded-lg shadow-sm flex flex-row justify-center items-center gap-2 flex-nowrap hover:scale-[102%] duration-100 cursor-pointer"
              // style={{ background: "#fffff" }}
            >
              {/* Book Your Seat <Grid2X2Check size={20} /> */}
              Book Your Seat
              <div className="absolute top-0 right-0 h-full p-2 rounded-r-lg bg-gradient-to-br from-[#43ff63] via-[#29e849] to-[#43ff63] flex flex-row flex-nowrap w-fit items-center justify-center gap-1 text-xs font-medium">
                <span className="text-white font-semibold text-[17px]">
                  £{fees}.00
                </span>
                {/* <del className="font-medium text-[12px] text-slate-500">
                  £{fees}
                </del> */}
              </div>
            </button>

            {/* <Link
              href={link}
              target="_blank"
              className="w-fit px-8 py-2 text-sm font-bold text-white rounded-lg shadow-sm flex flex-row items-center gap-2 flex-nowrap hover:scale-105 duration-100"
              style={{ background: "#42ea60" }}
            >
              Enquire{" "}
              <Image
                src={"/assets/icons/whatsapp-white.svg"}
                width={20}
                height={20}
                alt="whatsapp"
              />
            </Link> */}
          </div>
        </div>

        <Image
          src={image}
          width={800}
          height={500}
          alt="B1 course thumbnail"
          className="mx-auto md:ml-auto w-full max-w-md rounded-xl border-zinc-200 relative z-0"
        />

        {/* Badge */}
        {/* <div className="-mb-20 relative z-10 w-full -ml-[60px] -mt-[35px]">
          <div className="border-4 border-white rounded-full p-3 bg-gradient-to-br from-yellow-300 via-amber-500 to-yellow-300 text-white w-fit aspect-square shadow-lg -rotate-[20deg] hover:rotate-0 hover:scale-105 transition-all duration-150">
            <span className="block text-center text-[10px] font-medium text-transparent">
              Discount
            </span>
            <span className="text-3xl font-semibold block text-center">
              40%
            </span>
            <span className="block text-center text-[12px] font-medium text-white">
              OFF
            </span>
          </div>
        </div> */}
      </SpotlightCard>
    </motion.div>
  );
};
export default CourseBox;
