"use client";
import { useEffect, useState } from "react";
import BlurTextSectionTitle from "./BlurTextSectionTitle";
import { motion } from "motion/react";

const SectionTitle = ({
  text,
  subtext,
  className,
  style = {},
  align = "left",
  animate = true,
}) => {
  const [title, setTitle] = useState([]);

  useEffect(() => {
    const parted = text.split("");
    setTitle(parted);
  }, [text]);

  const containerVariant = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.03,
      },
    },
  };

  const letterVariant = {
    hidden: { filter: "blur(3px)", y: 10, opacity: 0 },
    visible: { filter: "blur(0px)", y: 0, opacity: 1 },
  };

  return (
    <div
      className={`w-full flex flex-col gap-2 mb-2 ${
        align == "left"
          ? "items-start"
          : align == "center"
          ? "items-center"
          : "items-end"
      }`}
    >
      {subtext && (
        <>
          <span
            className={`block w-full text-${align} text-sm font-semibold text-primary`}
          >
            {subtext}
          </span>
          <span
            className={`w-6 h-px bg-slate-200 block ${
              align == "left"
                ? "mx-0"
                : align == "center"
                ? "mx-auto"
                : "ml-auto"
            } -mt-1`}
          ></span>
        </>
      )}

      {animate ? (
        <motion.h2
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          className={`text-3xl sm:text-3xl lg:text-4xl 2xl:text-5xl block font-montserrat font-semibold text-zinc-900 ${
            className && className
          } ${
            align == "left"
              ? "text-left"
              : align == "center"
              ? "text-center"
              : "text-right"
          }`}
          style={style}
          viewport={{
            amount: 0,
            once: false,
            margin: "0px 0px -20% 0px",
          }}
        >
          {title?.map((letter, index) => (
            <motion.span
              key={`${letter}_${index}`}
              variants={letterVariant}
              className="inline-block"
            >
              {letter === " " ? <>&nbsp;</> : letter}
            </motion.span>
          ))}
        </motion.h2>
      ) : (
        <h2
          className={`text-3xl sm:text-3xl lg:text-4xl 2xl:text-5xl block font-montserrat font-semibold text-zinc-900 ${
            className && className
          } ${
            align == "left"
              ? "text-left"
              : align == "center"
              ? "text-center"
              : "text-right"
          }`}
          style={style}
        >
          {text}
        </h2>
      )}

      {/* <BlurTextSectionTitle
        text={text}
        direction="bottom"
        className="text-3xl sm:text-3xl lg:text-4xl 2xl:text-5xl font-montserrat font-semibold bg-gradient-to-br from-slate-600 via-slate-900 to-slate-600 text-slate-800 bg-clip-text"
      /> */}
    </div>
  );
};
export default SectionTitle;
