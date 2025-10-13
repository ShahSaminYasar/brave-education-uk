"use client";
// import { ShaderGradient, ShaderGradientCanvas } from "@shadergradient/react";
import { Button } from "../ui/button";
import { ArrowUpRight } from "lucide-react";
import ReviewCard from "./ReviewCard";
import { DK, IE, US } from "country-flag-icons/react/3x2";
import ShinyText from "../ui/ShinyText";
import { motion } from "motion/react";

const HeroSection = () => {
  return (
    <section className="section min-h-screen relative flex flex-col justify-center">
      <motion.div className="w-full max-w-6xl mx-auto relative flex flex-col items-center justify-center gap-5">
        <motion.h1
          initial={{ opacity: 0.1, filter: "blur(10px)", y: 10 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[70px] font-poppins block text-center font-[500] leading-[95%] tracking-[-0.05em] w-full max-w-[595px] mx-auto"
        >
          From Guidance to{" "}
          <span className="relative w-fit inline-block p-2">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 598 124"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-0 right-0 left-0 bottom-0"
            >
              <path
                d="M330.907 5.78624C275.907 26.0222 38.3972 1.78624 8.89665 52.2755C-4.68935 75.5274 7.39717 92.7755 38.3972 101.775C69.3972 110.775 582.319 149.752 594.5 83.7755C600.5 51.2755 552.092 33.6495 496.5 21.7755C445 10.7755 330.907 27.2755 268.499 3.03952"
                stroke="#C8102E"
                strokeWidth="5"
              />
            </svg>
            <span className="z-10 relative">Graduation</span>
          </span>{" "}
          ~ We Get You There
        </motion.h1>

        {/* <BlurText
          text="From Guidance to Graduation ~ We Get You There"
          delay={150}
          direction="bottom"
          stepDuration={0.27}
          className="text-[70px] font-poppins block text-center font-[500] leading-[95%] tracking-[-0.05em] w-full max-w-[610px] mx-auto justify-center"
        /> */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="w-fit mx-auto py-1 px-6 rounded-2xl shine shadow-xl"
          style={{
            backgroundImage:
              "linear-gradient(120deg,rgba(242, 136, 136, 1) 0%, rgba(240, 34, 34, 1) 45%, rgba(250, 190, 190, 1) 50%, rgba(240, 34, 34, 1) 55%, rgba(242, 136, 136, 1) 100%)",
            backgroundSize: "200% 100%",
            WebkitBackgroundClip: "border-box",
          }}
        >
          <ShinyText
            text={"Certified by British Council"}
            className="text-xs block text-center uppercase font-medium"
            disabled={false}
            speed={3}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.75 }}
          className="text-sm text-center block w-fit max-w-[480px] text-muted"
        >
          For international and UK students, our licensed consultants provide
          end-to-end support from course selection and applications to visa
          assistance and placements in top universities worldwide.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.4 }}
          className="flex flex-row items-center gap-3 justify-center mt-1"
        >
          <Button>
            Explore Options <ArrowUpRight />
          </Button>

          <Button variant={"secondary"}>
            Check Eligibility <ArrowUpRight />
          </Button>
        </motion.div>

        <ReviewCard
          name={"Raisul Ahmed"}
          flag={<US className="w-[30px]" />}
          description={
            "Best wishes for a successful and fulfilling journey. Best wishes for a successful and fulfilling journey."
          }
          date={"September 2025"}
          className={"absolute top-[-6%] left-[-10%] -z-20"}
          delay={0}
        />

        <ReviewCard
          name={"Tanim Iram"}
          flag={<DK className="w-[30px]" />}
          description={
            "Thank you Brave Education for the awesome guidance. Will be ever grateful to you."
          }
          date={"January 2025"}
          className={"absolute top-[50%] -translate-y-1/2 right-0 -z-20"}
          delay={1.6}
        />

        <ReviewCard
          name={"Akib Rahman"}
          flag={<IE className="w-[30px]" />}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et temporibus quaerat saepe aut.."
          }
          date={"September 2025"}
          className={"absolute bottom-[-170px] left-[16%] -z-20"}
          delay={3.2}
        />
      </motion.div>
    </section>
  );
};
export default HeroSection;
