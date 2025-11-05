"use client";
import { ArrowUpRight, MessageCircle, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import SpotlightCard from "../SpotlightCard";
import { motion } from "motion/react";

const CourseBox = ({
  name,
  classNo,
  mockNo,
  fees,
  duration,
  mode,
  image,
  className,
  style,
  bgColor = "#231f52",
  accentColor = "#44406c",
  waLink = "#",
  link = "#",
  slug,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0.1, scale: 1, y: 50 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      viewport={{
        margin: "200px 0px -20% 0px",
      }}
      className="w-full max-w-5xl mx-auto"
    >
      <SpotlightCard
        className={`w-full rounded-3xl p-5 text-white flex flex-col-reverse gap-8 justify-center items-center md:grid md:grid-cols-2 shadow-sm ${
          className && className
        }`}
        style={{ background: bgColor }}
      >
        <div className="flex flex-col items-start gap-5">
          <div className="flex flex-col flex-nowrap gap-2 items-start">
            <div className="bg-gradient-to-br from-white/5 via-white/20 border border-white/30 to-white/5 rounded-2xl p-px">
              <div className="flex flex-row items-center justify-center gap-2 bg-white/5 text-white/90 text-[12px] font-semibold rounded-2xl px-4 py-[2px]">
                <span
                  className="block bg-gradient-to-br from-white/80 from-30% 
                      via-white/90 via-50% 
                      to-white/80 to-80% bg-clip-text"
                >
                  <span className="text-transparent">{mode}</span>
                </span>
              </div>
            </div>

            <h3 className="text-3xl md:text-4xl font-black text-white">
              {name}
            </h3>
          </div>

          <div className="w-fit grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-5 items-start justify-start text-lg font-montserrat mb-1">
            <div className="flex flex-col gap-3 lg:col-span-1">
              <span className="flex flex-row items-center gap-2 max-w-[150px]">
                <ShieldCheck size={22} />
                <span>{classNo} Classes</span>
              </span>

              <span className="flex flex-row items-center gap-2 max-w-[150px]">
                <ShieldCheck size={22} />
                <span>{duration}</span>
              </span>
            </div>

            <div className="flex flex-col gap-3 lg:col-span-2">
              <span className="flex flex-row items-center gap-2 max-w-[170px]">
                <ShieldCheck size={22} />
                <span>{mockNo} Mock Tests</span>
              </span>

              <span className="flex flex-row items-center gap-2 max-w-[300px]">
                <ShieldCheck size={22} />
                <span>Qualified Teachers</span>
              </span>
            </div>
          </div>

          <div className="flex flex-row items-center gap-3">
            <Link
              href={waLink}
              target="_blank"
              className="w-fit px-8 py-2 text-sm font-bold bg-[#42ea60] text-green-800 rounded-lg shadow-sm flex flex-row items-center gap-2 flex-nowrap hover:scale-105 duration-100"
              // style={{ background: "#fffff" }}
            >
              Enquire <MessageCircle size={20} />
            </Link>

            <Link
              href={link}
              target="_blank"
              className="w-fit px-8 py-2 text-sm font-bold bg-white text-slate-900 rounded-lg shadow-sm flex flex-row items-center gap-2 flex-nowrap hover:scale-105 duration-100"
              // style={{ background: "#fffff" }}
            >
              Enroll <ArrowUpRight size={20} />
            </Link>

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
          className="mx-auto md:ml-auto w-full max-w-md rounded-2xl border-zinc-200"
        />
      </SpotlightCard>
    </motion.div>
  );
};
export default CourseBox;
