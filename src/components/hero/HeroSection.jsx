"use client";
// import { ShaderGradient, ShaderGradientCanvas } from "@shadergradient/react";
import { Button } from "../ui/button";
import { ArrowUpRight } from "lucide-react";
import ReviewCard from "./ReviewCard";
import { DK, IE, US } from "country-flag-icons/react/3x2";
import ShinyText from "../ui/ShinyText";
import { motion } from "motion/react";
import { useMainContext } from "@/hooks/useMainContext";
import Link from "next/link";

const HeroSection = () => {
  const { siteLoaded } = useMainContext();

  return (
    <section className="section min-h-screen relative flex flex-col justify-center w-full">
      {/* BG Layer */}
      {/* <div className="absolute top-0 left-0 w-full h-full bg-white/40 backdrop-blur-sm mix-blend-multiply block lg:hidden"></div> */}

      {siteLoaded && (
        <motion.div className="w-full max-w-6xl mx-auto relative flex flex-col items-center justify-center gap-5 pt-[55px]">
          {/* pt-[35px] (Without OfferTopBar) */}
          {/* pt-[55px] (With OfferTopBar) */}
          <motion.h1
            initial={{ opacity: 0.1, filter: "blur(10px)", y: 10 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-poppins flex flex-col items-center text-center font-[500] leading-[1.1] tracking-[-0.03em] w-full max-w-[720px] mx-auto text-zinc-900"
          >
            <span className="text-[38px] sm:text-[46px] md:text-[52px] lg:text-[60px]">
              From Guidance to
            </span>
            {/* Free to wrap onto two lines below lg - only >=lg has room
            to keep "Graduation & Immigration" on a single line without
            shrinking the text, so nowrap is scoped to that breakpoint. */}
            <span className="text-[#E02F33] text-[38px] sm:text-[46px] md:text-[52px] lg:text-[60px] lg:whitespace-nowrap">
              Graduation &amp; Immigration
            </span>
            <span className="text-[38px] sm:text-[46px] md:text-[52px] lg:text-[60px]">
              We Get You There
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="w-fit mx-auto h-[25px] md:h-[30px] grid place-content-center px-4 md:px-6 rounded-2xl shine shadow-xl"
            style={{
              backgroundImage:
                "linear-gradient(120deg,rgba(242, 136, 136, 1) 0%, rgba(240, 34, 34, 1) 45%, rgba(240, 34, 34, 1) 50%, rgba(240, 34, 34, 1) 55%, rgba(242, 136, 136, 1) 100%)",
              backgroundSize: "200% 100%",
              WebkitBackgroundClip: "border-box",
            }}
          >
            <ShinyText
              text={"ICEF & IAA Authorized"}
              className="text-[10px] leading-[100%] sm:text-xs block text-center uppercase font-medium"
              disabled={false}
              speed={3}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.75 }}
            className="para text-center block w-fit max-w-[380px] md:max-w-[570px] text-muted"
          >
            For students and visa applicants, our licensed consultants and
            accredited advisors provide end-to-end support from course selection
            and global university placements to full visa and immigration
            assistance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.4 }}
            className="flex flex-row items-center gap-3 justify-center mt-1"
          >
            <Link href={"/about"}>
              <Button>
                More about us <ArrowUpRight />
              </Button>
            </Link>

            <Link href={"/appointment"}>
              <Button
                variant={"secondary"}
                className={"border-2 border-[#180d5d] text-[#180d5d] bg-white"}
              >
                Book Appointment <ArrowUpRight />
              </Button>
            </Link>
          </motion.div>

          {/* <ReviewCard
            name={"Amit Hasan"}
            flag={<US className="w-[30px]" />}
            description={
              "They guided me with clear advice and were always willing to answer my questions. Highly recommend their services to anyone looking for reliable business support!"
            }
            date={"2 months ago"}
            className={"absolute top-[-6%] left-[-10%] -z-20 hidden lg:block"}
            delay={0}
          />

          <ReviewCard
            name={"Tanim Iram"}
            flag={<DK className="w-[30px]" />}
            description={
              "They provided me with outstanding support and guidance throughout my visa application process. Their team is highly professional, reliable, and genuinely cares about their clients’ success."
            }
            date={"August 2025"}
            className={
              "absolute top-[50%] -translate-y-1/2 right-0 -z-20 hidden lg:block"
            }
            delay={1.6}
          />

          <ReviewCard
            name={"Akib Rahman"}
            flag={<IE className="w-[30px]" />}
            description={
              "Great service and very helpful team. Highly recommend for any educational consultancy, business support and pre/post visa application support."
            }
            date={"September 2025"}
            className={
              "absolute bottom-[-170px] left-[16%] -z-20 hidden lg:block"
            }
            delay={3.2}
          /> */}
        </motion.div>
      )}
    </section>
  );
};
export default HeroSection;
