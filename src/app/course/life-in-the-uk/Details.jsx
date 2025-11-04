"use client";
import SectionTitle from "@/components/ui/SectionTitle";
import { Book, CheckCircle, Clock, Folder, Target, Users } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const Details = () => {
  // Refs
  const sectionRef = useRef(null);

  //   Motion
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);

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
    <div
      ref={sectionRef}
      className="section"
      style={{
        backgroundImage: "url(/white-bg-2.jpg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <section className="w-full max-w-6xl mx-auto flex flex-col-reverse md:grid md:grid-cols-2 gap-14 items-center justify-center">
        {/* Left */}
        <div className="flex flex-col items-start gap-10 justify-center">
          <motion.div
            variants={generalVariants}
            initial={"hidden"}
            whileInView={"visible"}
            transition={{
              duration: 0.4,
              delay: 0,
            }}
            viewport={{ margin: "100px 0px -20% 0px" }}
            className="w-full"
          >
            <SectionTitle
              text={"A Course Designed for Your Success"}
              subtext={"Comprehensive Preparation"}
              animate={false}
              align="left"
            />
          </motion.div>

          <motion.p
            variants={generalVariants}
            initial={"hidden"}
            whileInView={"visible"}
            transition={{ duration: 0.4, delay: 0 }}
            viewport={{ margin: "100px 0px -20% 0px" }}
            className="para -mt-4"
          >
            Preparing for the Life in the UK test can be stressful. Our
            carefully structured course breaks down everything you need to know
            into simple, manageable lessons. We focus on key topics and
            test-taking strategies to ensure you feel fully prepared and
            confident on exam day.
          </motion.p>

          <div className="grid grid-cols-2 md:grid-cols-2 gap-3 justify-center items-center w-full">
            <motion.div
              variants={generalVariants}
              initial={"hidden"}
              whileInView={"visible"}
              transition={{ duration: 0.4, delay: 0 }}
              viewport={{ margin: "100px 0px -20% 0px" }}
              className="w-full bg-white rounded-lg shadow-sm p-3 text-xs font-medium text-zinc-800 flex items-center gap-3 capitalize"
            >
              <Folder size={18} className="text-blue-500" />
              <p>10 comprehensive classes</p>
            </motion.div>
            <motion.div
              variants={generalVariants}
              initial={"hidden"}
              whileInView={"visible"}
              transition={{ duration: 0.4, delay: 0 }}
              viewport={{ margin: "100px 0px -20% 0px" }}
              className="w-full bg-white rounded-lg shadow-sm p-3 text-xs font-medium text-zinc-800 flex items-center gap-3 capitalize"
            >
              <Target size={18} className="text-blue-500" />
              <p>2 Realistic mock tests</p>
            </motion.div>
            <motion.div
              variants={generalVariants}
              initial={"hidden"}
              whileInView={"visible"}
              transition={{ duration: 0.4, delay: 0 }}
              viewport={{ margin: "100px 0px -20% 0px" }}
              className="w-full bg-white rounded-lg shadow-sm p-3 text-xs font-medium text-zinc-800 flex items-center gap-3 capitalize"
            >
              <Clock size={18} className="text-blue-500" />
              <p>1 hr 10 mins per session</p>
            </motion.div>
            <motion.div
              variants={generalVariants}
              initial={"hidden"}
              whileInView={"visible"}
              transition={{ duration: 0.4, delay: 0 }}
              viewport={{ margin: "100px 0px -20% 0px" }}
              className="w-full bg-white rounded-lg shadow-sm p-3 text-xs font-medium text-zinc-800 flex items-center gap-3 capitalize"
            >
              <Users size={18} className="text-blue-500" />
              <p>Qualified UK teachers</p>
            </motion.div>
            <motion.div
              variants={generalVariants}
              initial={"hidden"}
              whileInView={"visible"}
              transition={{ duration: 0.4, delay: 0 }}
              viewport={{ margin: "100px 0px -20% 0px" }}
              className="w-full bg-white rounded-lg shadow-sm p-3 text-xs font-medium text-zinc-800 flex items-center gap-3 capitalize"
            >
              <Book size={18} className="text-blue-500" />
              <p>Study materials included</p>
            </motion.div>
            <motion.div
              variants={generalVariants}
              initial={"hidden"}
              whileInView={"visible"}
              transition={{ duration: 0.4, delay: 0 }}
              viewport={{ margin: "100px 0px -20% 0px" }}
              className="w-full bg-white rounded-lg shadow-sm p-3 text-xs font-medium text-zinc-800 flex items-center gap-3"
            >
              <CheckCircle size={18} className="text-blue-500" />
              <p>Pass guarantee support</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ scale: 0, opacity: 0, rotate: "-10deg" }}
            whileInView={{ scale: 1, opacity: 1, rotate: "0deg" }}
            transition={{ duration: 0.85, delay: 0, type: "spring" }}
            viewport={{ margin: "300px 0px -20% 0px" }}
            className="w-fit mx-auto flex flex-row justify-center items-center gap-4 p-2 pr-4 rounded-2xl bg-yellow-50"
          >
            <span className="px-5 py-3 rounded-xl bg-gradient-to-r from-yellow-500 to-orange-500 shadow-sm text-white font-bold text-xl">
              £140.00
            </span>

            <div className="text-xs font-normal text-slate-600">
              <span>One-time payment</span>
              <span className="text-green-600 font-medium block">
                No hidden fees
              </span>
            </div>
          </motion.div>
        </div>

        {/* Right */}
        <motion.div
          variants={generalVariants}
          initial={"hidden"}
          whileInView={"visible"}
          transition={{ duration: 0.4, delay: 0 }}
          viewport={{ margin: "100px 0px -20% 0px" }}
          className="w-full max-w-md mx-auto md:ml-auto relative aspect-[10/9] rounded-2xl"
          style={{
            backgroundImage: "url(/assets/images/uk_classroom_2.jpg)",
            backgroundPositionX: "50%",
            backgroundPositionY: y,
            backgroundSize: "150%",
            backgroundRepeat: "no-repeat",
          }}
        >
          <motion.div
            initial={{ y: 5 }}
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 2, type: "keyframes" }}
            className="absolute -bottom-5 -left-5 bg-white shadow-lg rounded-2xl py-3 px-5"
          >
            <p className="block text-center text-sm font-medium text-zinc-700">
              <span className="block text-center text-3xl font-bold text-green-600 mb-1">
                98%
              </span>
              Success Rate
            </p>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};
export default Details;
