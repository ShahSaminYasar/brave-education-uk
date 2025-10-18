import { motion } from "motion/react";

const ProcessBox = ({ sl, title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ margin: "300px 0px -30% 0px" }}
      transition={{
        type: "spring",
        duration: 0.15,
        damping: 15,
        stiffness: 400,
      }}
      className="flex flex-col gap-1 items-center justify-center w-full min-h-[190px] max-w-sm bg-white p-5 rounded-2xl border-2 border-zinc-800"
    >
      <span className="font-satisfy text-xl text-[#a6a6a6] block text-center -mb-1">
        {sl}
      </span>
      <h5 className="text-2xl text-primary font-semibold block text-center">
        {title}
      </h5>
      <p className="para block text-center">{description}</p>
    </motion.div>
  );
};
export default ProcessBox;
