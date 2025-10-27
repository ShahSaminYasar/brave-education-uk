"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

const WhatsAppLink = () => {
  return (
    <motion.div
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.05 }}
      transition={{
        type: "spring",
        duration: 0.1,
        damping: 10,
        stiffness: 400,
      }}
      className="w-fit rounded-full hover:shadow-2xl"
    >
      <Link
        href={"https://wa.me/+447862042900"}
        target="_blank"
        className="w-fit text-nowrap flex flex-row items-center justify-center gap-0 rounded-[80px] p-2 bg-[#42ea60] text-slate-800"
      >
        <span className="text-sm block text-center px-3 font-medium">
          +44 7476 2004 0881
        </span>
        <span className="bg-white w-fit aspect-square rounded-full block p-[8px]">
          <Image
            src={"/assets/icons/whatsapp.svg"}
            width={20}
            height={20}
            alt="whatsapp"
          />
        </span>
      </Link>
    </motion.div>
  );
};
export default WhatsAppLink;
