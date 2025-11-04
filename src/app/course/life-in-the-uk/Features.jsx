"use client";
import SectionTitle from "@/components/ui/SectionTitle";
import { Book, Flame, StarIcon, Target } from "lucide-react";
import { motion } from "motion/react";

const Features = () => {
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
    <div className="bg-white px-5 py-20 min-h-[60vh] flex items-center justify-center">
      <section className="w-full max-w-6xl mx-auto flex items-center justify-center flex-col gap-5">
        <motion.div
          variants={generalVariants}
          initial={"hidden"}
          whileInView={"visible"}
          transition={{ duration: 0.4, delay: 0 }}
          viewport={{ margin: "100px 0px -20% 0px" }}
          className="w-full"
        >
          <SectionTitle animate={false} text={"Features"} align="center" />
        </motion.div>

        <div className="w-full flex flex-col items-center justify-center md:grid md:grid-cols-2 gap-5 mt-5">
          {/* Mock */}
          <motion.div
            variants={generalVariants}
            initial={"hidden"}
            whileInView={"visible"}
            transition={{ duration: 0.4, delay: 0 }}
            viewport={{ margin: "100px 0px -20% 0px" }}
            className="w-full rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 py-7 px-5"
          >
            <div className="w-full max-w-3xl mx-auto flex flex-col items-center justify-center gap-4">
              <h4 className="flex items-center gap-3 text-2xl font-bold text-white text-center">
                <Target size={27} className="text-yellow-500" /> Realistic Mock
                Tests
              </h4>

              <p
                className="para block text-center"
                style={{
                  color: "rgba(255,255,255,0.8)",
                }}
              >
                Experience the actual test environment with our carefully
                designed mock tests that mirror the offical Life in the UK exam
                format and difficulty level.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={generalVariants}
            initial={"hidden"}
            whileInView={"visible"}
            transition={{ duration: 0.4, delay: 0 }}
            viewport={{ margin: "100px 0px -20% 0px" }}
            className="w-full flex flex-col items-center justify-center gap-x-5 gap-y-2"
          >
            <div className="w-full rounded-2xl py-4 px-5 bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center gap-3 text-white text-sm font-semibold">
              <StarIcon size={18} className="text-yellow-400" />
              <p>Taught by Qualified Teachers</p>
            </div>

            <div className="w-full rounded-2xl py-4 px-5 bg-gradient-to-r from-green-600 to-teal-600 flex items-center justify-center gap-3 text-white text-sm font-semibold">
              <Book size={18} className="text-cyan-400" />
              <p>Online & In-person Classes</p>
            </div>

            <div className="w-full rounded-2xl py-4 px-5 bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center gap-3 text-white text-sm font-semibold">
              <Flame size={18} className="text-amber-400" />
              <p>Limited Seats - Enroll Today</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
export default Features;
