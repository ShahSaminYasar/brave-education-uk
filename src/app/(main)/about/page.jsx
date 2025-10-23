"use client";
import SectionTitle from "@/components/ui/SectionTitle";
import { motion } from "motion/react";

const page = () => {
  return (
    <main
      style={{
        background:
          "linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.85)), url(/page_bg.jpg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <motion.section
        initial={{ filter: "blur(5px)", scale: 0.98, opacity: 0.7 }}
        animate={{ filter: "blur(0px)", scale: 1, opacity: 1 }}
        transition={{ delay: 0.05, duration: 0.15, ease: "linear" }}
        className="py-10 px-5 flex items-center justify-center pt-[140px] min-h-[70vh]"
      >
        <SectionTitle
          text={"ABOUT US"}
          style={{
            fontSize: "70px",
            fontWeight: "800",
            color: "#fff",
          }}
          align="center"
          animate={false}
        />
      </motion.section>

      <div className="bg-white w-full px-5 py-20">
        <div className="w-full max-w-6xl mx-auto"></div>
      </div>
    </main>
  );
};
export default page;
