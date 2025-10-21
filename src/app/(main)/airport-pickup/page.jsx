"use client";
import SectionTitle from "@/components/ui/SectionTitle";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <main
      style={{
        background:
          "linear-gradient(to right, rgba(0,0,0,0.9), rgba(0,0,0,0.7), rgba(0,0,0,0.1)), url(/assets/images/airport-pickup.jpg)",
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
        className="pt-[140px] px-5 pb-20 flex flex-col-reverse justify-center items-center gap-8 md:grid md:grid-cols-2 md:gap-10 max-w-6xl mx-auto min-h-[65vh]"
      >
        <SectionTitle
          text={"Airport Pick-Up"}
          style={{
            fontSize: "50px",
            fontWeight: "800",
            color: "#fff",
          }}
          animate={false}
        />
      </motion.section>

      <div className="section bg-white">
        <section className="w-full max-w-6xl mx-auto flex flex-col gap-8">
          <SectionTitle
            text={"Who Can Use This Service?"}
            align="center"
            animate={false}
          />

          <div className="flex flex-row justify-center gap-10 flex-wrap">
            <div className="w-full max-w-[280px] rounded-2xl p-5 border-2 border-slate-900 bg-[#feffe6] flex flex-col items-center justify-center gap-3">
              <Image
                src={"/assets/icons/classroom.svg"}
                width={200}
                height={200}
                alt="Classroom"
                className="w-full max-w-[90px] mx-auto"
              />
              <span className="block text-lg text-slate-900 text-center font-bold w-full">
                Students
              </span>
            </div>

            <div className="w-full max-w-[280px] rounded-2xl p-5 border-2 border-slate-900 bg-[#c7fbff] flex flex-col items-center justify-center gap-3">
              <Image
                src={"/assets/icons/building.svg"}
                width={200}
                height={200}
                alt="Classroom"
                className="w-full max-w-[90px] mx-auto"
              />
              <span className="block text-lg text-slate-900 text-center font-bold w-full">
                Accommodation arranged, but none to receive
              </span>
            </div>

            <div className="w-full max-w-[280px] rounded-2xl p-5 border-2 border-slate-900 bg-[#ffe6f3] flex flex-col items-center justify-center gap-3">
              <Image
                src={"/assets/icons/plane.svg"}
                width={200}
                height={200}
                alt="Classroom"
                className="w-full max-w-[90px] mx-auto"
              />
              <span className="block text-lg text-slate-900 text-center font-bold w-full">
                Airport pick-up or drop off
              </span>
            </div>
          </div>
        </section>

        <section className="section w-full max-w-6xl mx-auto flex flex-col gap-8">
          <SectionTitle
            text={"Service Details"}
            align="center"
            animate={false}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-start">
            <div className="flex flex-col items-start gap-5 p-5 rounded-xl border-2 border-zinc-300">
              <h5 className="block w-full text-3xl font-semibold text-slate-900 pb-3 border-b border-zinc-300">
                Airport Pickup & Drop-off
              </h5>

              <div className="w-full rounded-2xl p-5 border-2 border-slate-900 bg-[#e6f4ff] flex flex-row items-center justify-start gap-4">
                <Image
                  src={"/assets/icons/plane.svg"}
                  width={200}
                  height={200}
                  alt="Classroom"
                  className="w-full max-w-[60px] mx-auto"
                />
                <span className="block text-xl text-slate-900 text-center font-bold w-full">
                  Receive you at the airport
                </span>
              </div>

              <div className="w-full rounded-2xl p-5 border-2 border-slate-900 bg-[#e7ffe6] flex flex-row items-center justify-start gap-4">
                <Image
                  src={"/assets/icons/building.svg"}
                  width={200}
                  height={200}
                  alt="Classroom"
                  className="w-full max-w-[60px] mx-auto"
                />
                <span className="block text-xl text-slate-900 text-center font-bold w-full">
                  Drop you safely at your accommodation
                </span>
              </div>
            </div>

            <div className="w-full">
              <div className="flex flex-col items-start gap-5 p-5 rounded-xl border-2 border-zinc-300">
                <h5 className="block w-full text-3xl font-semibold text-slate-900 pb-3 border-b border-zinc-300">
                  Standard Charge
                </h5>

                <span className="text-lg font-bold block text-left">
                  £120 (single person with maximum of 5 luggage)
                </span>
              </div>

              <Link
                href={"https://wa.me/+44747620040881"}
                target="_blank"
                className="w-fit text-nowrap flex flex-row items-center justify-center gap-0 rounded-[80px] p-2 bg-[#42ea60] text-slate-800 mt-5"
              >
                <span className="text-sm block text-center px-3 font-semibold">
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
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};
export default page;
