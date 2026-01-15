"use client";
import SpotlightCard from "@/components/SpotlightCard";
import SectionTitle from "@/components/ui/SectionTitle";
import { Clock, Radar, Users2, Verified } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div className="bg-white">
      <section
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.65), rgba(255,255,255,0.65)), url(https://eu-images.contentstack.com/v3/assets/blta220ee31df03b833/bltc291bcd170c64554/677e4a0aae5938d8f73effa6/London.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="w-full pt-32 py-20 px-3"
      >
        <SectionTitle
          text={"Trinity College Tests"}
          subtext={"SELT"}
          align="center"
          animate={false}
        />
      </section>

      <section className="px-5 py-10 min-h-screen flex-col justify-center items-center gap-8 mx-auto text-primary w-full max-w-6xl">
        {/* Course Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-9 justify-center items-center">
          {/* Course Card */}
          <SpotlightCard
            style={{
              background: "#ff8a05",
              boxShadow: "0px 5px 30px rgba(0,0,0,0.25)",
            }}
            spotlightColor="rgba(255,255,255,0.07)"
            className="flex flex-col md:flex-row items-center md:items-start justify-center gap-6 p-4 rounded-lg"
          >
            <Link
              target="_blank"
              href={
                "https://seltbooking.trinitycollege.co.uk/OEWeb/loadExamDtl.do?ref=1-10672391978"
              }
            >
              <Image
                src="https://resources.trinitycollege.com/hubfs/ASP%20square%20web%20banner%20(white).png"
                width={250}
                height={250}
                alt="Trinity College Test"
                className="w-full max-w-[400px]  rounded-lg"
              />
            </Link>

            <div className="w-full text-white text-sm font-normal flex flex-col gap-4">
              <div>
                <h3 className="text-2xl font-semibold">
                  B1 SELT | GESE Grade 5
                </h3>
                <h4 className="text-xl font-medium text-white/90">
                  English Test for British Citizenship
                </h4>
              </div>

              <div>
                <span className="flex items-center gap-1 text-white/70 text-xs mb-1">
                  <Clock size={16} /> Test time
                </span>
                <span className="font-medium">
                  10 minutes (Speaking & Listening only)
                </span>
              </div>

              <div>
                <span className="flex items-center gap-1 text-white/70 text-xs mb-1">
                  <Radar size={16} /> CEFR Level
                </span>
                <span className="font-medium">B1 - Speaking & Listening</span>
              </div>

              <div>
                <span className="flex items-center gap-1 text-white/70 text-xs mb-1">
                  <Users2 size={16} /> Who is this test for?
                </span>
                <p className="block w-full font-medium">
                  You must pass a Secure English Language Test (SELT) at CEFR
                  level B1 in Speaking and Listening if you are applying for:
                </p>
                <ul className="list-disc list-inside mt-1 font-medium">
                  <li>Indefinite Leave to Remain (ILR)</li>
                  <li>Settlement/Permanent Residency</li>
                  <li>British Citizenship (Naturalisation)</li>
                </ul>
              </div>

              <Link
                target="_blank"
                href="https://seltbooking.trinitycollege.co.uk/OEWeb/loadExamDtl.do?ref=1-10672391978"
                className="flex items-center gap-2 w-fit px-3 py-2 rounded-lg bg-white text-[#ff8a05] font-semibold hover:shadow-lg hover:bg-white/90 active:scale-[98%]"
              >
                <Verified size={15} />
                Book Now
              </Link>
            </div>
          </SpotlightCard>

          {/* Course Card */}
          <SpotlightCard
            style={{
              background: "#50144b",
              boxShadow: "0px 5px 30px rgba(0,0,0,0.25)",
            }}
            spotlightColor="rgba(255,255,255,0.07)"
            className="flex flex-col md:flex-row items-center md:items-start justify-center gap-6 p-4 rounded-lg"
          >
            <Link
              target="_blank"
              href={
                "https://seltbooking.trinitycollege.co.uk/OEWeb/loadExamDtl.do?ref=1-10672391978"
              }
            >
              <Image
                width={250}
                height={250}
                src="https://resources.trinitycollege.com/hubfs/ASP%20square%20web%20banner%20(white).png"
                alt="Trinity College Test"
                className="w-full max-w-[400px]  rounded-lg"
              />
            </Link>

            <div className="w-full text-white text-sm font-normal flex flex-col gap-4">
              <div>
                <h3 className="text-2xl font-semibold">B2 SELT | ISE II</h3>
                <h4 className="text-xl font-medium text-white/90">
                  English Test for Visas and Study
                </h4>
              </div>

              <div>
                <span className="flex items-center gap-1 text-white/70 text-xs mb-1">
                  <Clock size={16} /> Test time
                </span>
                <span className="font-medium">2 hours 20 minutes</span>
                <ul className="list-disc list-inside mt-1 font-medium">
                  <li>Reading & Writing: 2 hours</li>
                  <li>Speaking & Listening: 20 minutes</li>
                </ul>
              </div>

              <div>
                <span className="flex items-center gap-1 text-white/70 text-xs mb-1">
                  <Radar size={16} /> CEFR Level
                </span>
                <span className="font-medium">
                  B2 - Reading, Writing, Speaking & Listening
                </span>
              </div>

              <div>
                <span className="flex items-center gap-1 text-white/70 text-xs mb-1">
                  <Users2 size={16} /> Who is this test for?
                </span>
                <p className="block w-full font-medium">
                  You must pass a Secure English Language Test (SELT) at CEFR
                  level B2 in all four skills if you are applying for:
                </p>
                <ul className="list-disc list-inside mt-1 font-medium">
                  <li>Minister of Religion visa (T2)</li>
                  <li>Innovator / Innovator Founder visa</li>
                  <li>Start-up visa</li>
                  <li>Student visa</li>
                </ul>
              </div>

              <Link
                target="_blank"
                href="https://seltbooking.trinitycollege.co.uk/OEWeb/loadExamDtl.do?ref=1-10672391978"
                className="flex items-center gap-2 w-fit px-3 py-2 rounded-lg bg-white text-[#50144b] font-semibold hover:shadow-lg hover:bg-white/90 active:scale-[98%]"
              >
                <Verified size={15} />
                Book Now
              </Link>
            </div>
          </SpotlightCard>
        </div>
      </section>

      <section className="w-full max-w-6xl mx-auto mt-10 px-2">
        <Link
          target="_blank"
          href={
            "https://seltbooking.trinitycollege.co.uk/OEWeb/loadExamDtl.do?ref=1-10672391978"
          }
          className="w-full p-3 border border-slate-200 block rounded-sm"
        >
          <Image
            width={1200}
            height={400}
            className="w-full object-contain rounded-sm"
            src={"/assets/images/courses/trinity_test_web_ad.webp"}
            alt="Web Banner of Trinity College Test"
          />
        </Link>
      </section>
    </div>
  );
};
export default page;
