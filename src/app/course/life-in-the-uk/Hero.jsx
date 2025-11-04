import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Medal, Users } from "lucide-react";
import Link from "next/link";
import * as motion from "motion/react-client";

const Hero = () => {
  const generalVariants = {
    hidden: {
      y: 20,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="w-full px-5 pt-[105px] pb-12">
      <section
        className="w-full max-w-6xl mx-auto rounded-xl py-20 px-5 flex flex-col items-center justify-center gap-10 relative"
        style={{
          background:
            "linear-gradient(to bottom, rgba(36, 30, 104, 0.90), rgba(28, 24, 72, 0.98)), url(/assets/images/uk_classroom_filled.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <motion.h1
          variants={generalVariants}
          initial={"hidden"}
          animate={"visible"}
          transition={{ duration: 0.4, delay: 0 }}
          className="block text-center text-4xl md:text-5xl font-bold text-white w-full leading-14 max-w-3xl"
        >
          Pass Your Life in the UK Test With{" "}
          <span className="inline-block w-fit bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500">
            <span className="text-transparent">Confidence</span>
          </span>
        </motion.h1>

        <motion.p
          variants={generalVariants}
          initial={"hidden"}
          animate={"visible"}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="para block text-center w-full max-w-3xl"
          style={{
            color: "rgba(255, 255, 255, 0.75)",
          }}
        >
          Join our comprehensive 10-class preparatory course led by qualified UK
          teachers. Master the material, practice with realistic mock tests, and
          take the next step in your British journey with confidence.
        </motion.p>

        <div className="flex flex-row items-center justify-center gap-x-5 gap-y-2 flex-wrap">
          <motion.div
            variants={generalVariants}
            initial={"hidden"}
            animate={"visible"}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="flex flex-row items-center justify-center gap-2 text-[#7aa5ef] text-sm font-medium"
          >
            <Users size={15} />
            <p>500+ Students Passed</p>
          </motion.div>

          <motion.div
            variants={generalVariants}
            initial={"hidden"}
            animate={"visible"}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="flex flex-row items-center justify-center gap-2 text-[#7aa5ef] text-sm font-medium"
          >
            <Medal size={15} />
            <p>Qualified Teachers</p>
          </motion.div>

          <motion.div
            variants={generalVariants}
            initial={"hidden"}
            animate={"visible"}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="flex flex-row items-center justify-center gap-2 text-[#7aa5ef] text-sm font-medium"
          >
            <Clock size={15} />
            <p>Flexible Schedule</p>
          </motion.div>
        </div>

        <motion.div
          variants={generalVariants}
          initial={"hidden"}
          animate={"visible"}
          transition={{ duration: 0.4, delay: 0.34 }}
        >
          <Link href={"#form"}>
            <Button className={"w-[180px]"}>
              Book Your Seat Now <ArrowRight size={14} />
            </Button>
          </Link>
        </motion.div>

        <motion.p
          variants={generalVariants}
          initial={"hidden"}
          animate={"visible"}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="text-sm font-medium text-[#7aa5ef] block text-center w-full max-w-[400px] mx-auto"
        >
          ⚡ Limited seats available - Enroll today to secure your spot!
        </motion.p>

        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, delay: 0.6, type: "spring" }}
          className="block w-fit px-3 py-2 bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-500 rounded-full text-xs text-white font-semibold text-center absolute top-3 right-3"
        >
          🎯 98% Success Rate
        </motion.span>
      </section>
    </div>
  );
};
export default Hero;
