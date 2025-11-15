"use client";
import { BookCheck, Clipboard, Copy, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import OfferTopBar from "./OfferTopBar";

const OfferSection = () => {
  return (
    <>
      {/* <OfferTopBar /> */}
      <section
        className="bg-red-800 px-5 py-20 pt-[30px] md:pt-[32px] md:py-12 min-h-[75vh] md:min-h-[90vh] flex items-center justify-center"
        style={{
          backgroundImage: "url(/offer_bg.jpg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="w-full max-w-5xl mx-auto flex flex-col gap-8 md:gap-3 md:grid md:grid-cols-7 items-center justify-center">
          {/* First */}
          <div className="font-josefin-sans text-sm font-medium text-white col-span-3 flex flex-col items-center md:items-start justify-center gap-1 md:gap-3 relative z-10">
            <h2 className="text-5xl md:text-6xl font-bold block mb-3 text-center md:text-left">
              Black Friday Offer
            </h2>
            <p>40% off on all courses</p>
            <p>
              <ShieldCheck size={17} className="inline" /> In person and online
              classes available
            </p>
            <button
              onClick={() => window.navigator.clipboard.writeText("BB40")}
              className="group px-3 py-1 bg-white text-red-800 text-xs font-semibold rounded-2xl block my-4"
            >
              <Copy
                size={12}
                className="inline-block mr-2 mb-1 cursor-pointer group-active:scale-85 duration-100 transition-all opacity-70"
              />
              Apply code BB40 during payment
            </button>
            <Link
              href={"#all_courses"}
              className="px-6 py-3 bg-gradient-to-r from-red-600 via-red-400 to-red-600 rounded-4xl shadow-lg hover:shadow-2xl active:shadow-sm font-semibold text-sm flex items-center gap-2 justify-center"
            >
              <BookCheck size={16} /> Select Your Course
            </Link>
          </div>

          {/* Second */}
          <Image
            src={"/offer.png"}
            width={1000}
            height={1000}
            alt="Brave Education Offer on Courses"
            className="w-full h-fit object-contain col-span-4 -mt-[100px] md:-mt-[0px] z-0 relative"
          />
        </div>
      </section>
    </>
  );
};
export default OfferSection;
