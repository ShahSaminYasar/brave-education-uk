"use client";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionTitle from "@/components/ui/SectionTitle";
import { ArrowUpRight, Pen } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

const page = () => {
  return (
    <main
      style={{
        background:
          "linear-gradient(182deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 70%, rgba(255, 255, 255, 1) 100%), url(/bg-1.png)",
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
        className="py-[100px] px-5 flex flex-col gap-3 items-center justify-center min-h-[100vh]"
      >
        <div className="w-fit bg-gradient-to-br from-purple-600 via-pink-600 to-purple-600 bg-clip-text">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl block font-montserrat text-zinc-900 font-[800]">
            <span className="text-transparent">Our Services</span>
          </h2>
        </div>

        <p className="para block text-center w-full max-w-md mx-auto">
          Transforming education into an experience. Where curiosity meets
          clarity, and every step brings students closer to their dreams.
        </p>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-9 border-2 border-gray-300 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-gray-300 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </motion.section>

      <div className="w-full section bg-white">
        <section className="flex flex-row justify-center gap-8 flex-wrap px-4 py-12">
          {/* Card 1 */}
          <div className="group bg-white border border-zinc-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 max-w-sm w-full">
            {/* Icon Container */}
            <div className="w-14 h-14 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
              <Pen size={32} className="text-indigo-600" />
            </div>

            {/* Content */}
            <h4 className="text-xl font-medium text-gray-900 mb-3 group-hover:text-indigo-700 transition-colors duration-300">
              Proper Information
            </h4>
            <p className="para">
              Access precise and reliable details on procedures for studying
              abroad to enhance your decision-making process.
            </p>

            {/* Hover Effect Line */}
            <div className="w-0 group-hover:w-12 h-1 bg-indigo-600 rounded-full mt-6 transition-all duration-300"></div>
          </div>

          <div className="group bg-white border border-zinc-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 max-w-sm w-full">
            <div className="w-14 h-14 bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
              <Pen size={32} className="text-emerald-600" />
            </div>

            <h4 className="text-xl font-medium text-gray-900 mb-3 group-hover:text-emerald-700 transition-colors duration-300">
              ADVICE & CONSULTANCY
            </h4>
            <p className="para">
              Ease your path through higher education with professional guidance
              and well-informed consultancy services.
            </p>

            <div className="w-0 group-hover:w-12 h-1 bg-emerald-600 rounded-full mt-6 transition-all duration-300"></div>
          </div>

          <div className="group bg-white border border-zinc-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 max-w-sm w-full">
            <div className="w-14 h-14 bg-gradient-to-br from-purple-50 to-red-100 rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
              <Pen size={32} className="text-primary" />
            </div>

            <h4 className="text-xl font-medium text-gray-900 mb-3 group-hover:text-red-700 transition-colors duration-300">
              COURSES & UNIVERSITY GUIDELINES
            </h4>
            <p className="para">
              Select a course and university that match your long-term academic
              and career objectives.
            </p>

            <div className="w-0 group-hover:w-12 h-1 bg-primary rounded-full mt-6 transition-all duration-300"></div>
          </div>

          <div className="group bg-white border border-zinc-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 max-w-sm w-full">
            <div className="w-14 h-14 bg-gradient-to-br from-purple-50 to-yellow-100 rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
              <Pen size={32} className="text-yellow-600" />
            </div>

            <h4 className="text-xl font-medium text-gray-900 mb-3 group-hover:text-yellow-700 transition-colors duration-300">
              EDUCATION TIPS AND TRICKS
            </h4>
            <p className="para">
              Acquire specialized tips and techniques for excelling in both pre
              and post-admission proficiency tests
            </p>

            <div className="w-0 group-hover:w-12 h-1 bg-yellow-600 rounded-full mt-6 transition-all duration-300"></div>
          </div>
        </section>
      </div>

      <div
        className="w-full relative"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/assets/images/group-pic.jpeg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="block absolute top-0 left-0 w-full h-full z-0 backdrop-blur-lg"></div>
        <section className="w-full min-h-screen flex flex-col items-center justify-center gap-4 relative z-10">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            viewport={{ margin: "100px 0px -20% 0px" }}
            className="text-3xl sm:text-3xl lg:text-[40px] block max-w-4xl mx-auto font-[500] font-poppins text-zinc-100 text-center leading-[130%]"
          >
            We Make International Admission Process{" "}
            <span className="text-primary">Easier</span> for You
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            viewport={{ margin: "100px 0px -20% 0px" }}
            className="para block max-w-4xl text-center"
          >
            We provide a comprehensive array of services aimed at streamlining
            the intricate realm of international education. Whether it involves
            guiding students to suitable institutions, facilitating the
            admissions procedure, or aiding in document gathering, our
            dedication is to support you at each stage of the journey
          </motion.p>
        </section>
      </div>

      <div className="w-full py-20 bg-slate-50 section">
        <section className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left Column - WE ASSIST */}
            <div className="group">
              <div className="mb-8">
                <motion.h4
                  initial={{ opacity: 0, y: 0 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{
                    margin: "50px 0px -10% 0px",
                  }}
                  className="text-2xl lg:text-3xl font-semibold text-zinc-900 block text-left"
                >
                  We <span className="text-primary">Assist</span>
                </motion.h4>
                <div className="w-10 h-1 mt-3 bg-primary rounded-full"></div>
              </div>

              <div className="space-y-2 bg-white p-3 rounded-2xl border border-zinc-200">
                <div className="flex items-start gap-5 bg-transparent p-2 rounded-2xl hover:bg-white transition-all duration-300 group/item">
                  <div className="w-2 h-2 bg-primary rounded-full mt-4 group-hover/item:scale-150 transition-transform duration-300"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      Applications
                    </h3>
                    <p className="para">
                      Comprehensive support for all your application needs
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5 bg-transparent p-2 rounded-2xl hover:bg-white transition-all duration-300 group/item">
                  <div className="w-2 h-2 bg-primary rounded-full mt-4 group-hover/item:scale-150 transition-transform duration-300"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      Student Finance applications
                    </h3>
                    <p className="para">
                      Guidance through financial aid and funding options
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5 bg-transparent p-2 rounded-2xl hover:bg-white transition-all duration-300 group/item">
                  <div className="w-2 h-2 bg-primary rounded-full mt-4 group-hover/item:scale-150 transition-transform duration-300"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      Scholarships
                    </h3>
                    <p className="para">
                      Access to exclusive scholarship opportunities
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5 bg-transparent p-2 rounded-2xl hover:bg-white transition-all duration-300 group/item">
                  <div className="w-2 h-2 bg-primary rounded-full mt-4 group-hover/item:scale-150 transition-transform duration-300"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      Interviews
                    </h3>
                    <p className="para">
                      Preparation and coaching for successful interviews
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5 bg-transparent p-2 rounded-2xl hover:bg-white transition-all duration-300 group/item">
                  <div className="w-2 h-2 bg-primary rounded-full mt-4 group-hover/item:scale-150 transition-transform duration-300"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      Student counselling
                    </h3>
                    <p className="para">
                      Personalized guidance for academic and personal growth
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - We Recruit */}
            <div className="group">
              <div className="mb-8">
                <motion.h4
                  initial={{ opacity: 0, y: 0 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{
                    margin: "50px 0px -10% 0px",
                  }}
                  className="text-2xl lg:text-3xl font-semibold text-zinc-900 block text-left"
                >
                  We <span className="text-green-600">Recruit</span>
                </motion.h4>
                <div className="w-10 h-1 mt-3 bg-green-600 rounded-full"></div>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-5 gap-5 p-5 rounded-2xl shadow-none border border-zinc-200 bg-white w-full transition-all duration-100 hover:border-zinc-400">
                  <div className="w-full h-full bg-gradient-to-br from-green-500 to-green-800 rounded-lg flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-lg">UK</span>
                  </div>

                  <div className="col-span-4 w-full flex flex-col items-start gap-1">
                    <h3 className="text-lg font-semibold text-gray-900">
                      UK students
                    </h3>

                    <p className="para">
                      Supporting domestic students in finding their ideal
                      educational pathways
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-5 gap-5 p-5 rounded-2xl shadow-none border border-zinc-200 bg-white w-full transition-all duration-100 hover:border-zinc-400">
                  <div className="w-full h-full bg-gradient-to-br from-blue-500 to-blue-800 rounded-lg flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-lg">EU</span>
                  </div>

                  <div className="col-span-4 w-full flex flex-col items-start gap-1">
                    <h3 className="text-lg font-semibold text-gray-900">
                      EU students
                    </h3>

                    <p className="para">
                      Assisting European students with international education
                      opportunities
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-5 gap-5 p-5 rounded-2xl shadow-none border border-zinc-200 bg-white w-full transition-all duration-100 hover:border-zinc-400">
                  <div className="w-full h-full bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-lg">INT</span>
                  </div>

                  <div className="col-span-4 w-full flex flex-col items-start gap-1">
                    <h3 className="text-lg font-semibold text-gray-900">
                      International students
                    </h3>

                    <p className="para">
                      Global recruitment services for students worldwide seeking
                      quality education
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="w-full section bg-white">
        <section className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8">
              <div>
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  viewport={{ margin: "100px 0px -20% 0px" }}
                  className="text-3xl sm:text-3xl lg:text-[40px] block max-w-4xl mx-auto font-[500] font-poppins text-zinc-900 text-left leading-[130%] mb-6"
                >
                  Select Your Study{" "}
                  <span className="text-primary">Destination</span>
                </motion.h3>
                <div className="w-24 h-1 bg-gradient-to-r from-primary to-red-400 rounded-full mb-8"></div>
              </div>

              <div className="space-y-6">
                <p className="para" style={{ color: "#575757" }}>
                  Identifying the best university worldwide is subjective;
                  despite the desire to discover the ideal college, the reality
                  is that perfection is elusive. Numerous universities can
                  provide both a fulfilling experience and excellent education.
                </p>

                <p className="para" style={{ color: "#575757" }}>
                  The key lies in understanding yourself, defining your goals,
                  and then researching institutions that align with your
                  objectives.
                </p>

                <div className="bg-slate-50 border-l-4 border-secondary-foreground p-6 rounded-r-2xl">
                  <p className="text-gray-700 italic">
                    "While the process of choosing a course can be intriguing,
                    it occasionally proves to be challenging. Finding the right
                    university program for your future career is a complex
                    undertaking that may require more time than anticipated."
                  </p>
                </div>

                <p className="para" style={{ color: "#575757" }}>
                  Therefore, it's essential to follow a few steps before
                  reaching a decision, including selecting the preferred country
                  for your desired educational experience.
                </p>
              </div>
            </div>

            {/* Right Column - Visual Elements */}
            <div className="relative">
              {/* Main Card */}
              <div className="bg-gradient-to-br from-secondary-foreground via-slate-500 to-secondary-foreground rounded-3xl p-8 text-white shadow-2xl">
                <h3 className="text-2xl font-bold mb-6">Key Considerations</h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Self-Reflection</h4>
                      <p className="text-blue-100 text-sm">
                        Understand your goals, strengths, and aspirations
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">
                        Research & Alignment
                      </h4>
                      <p className="text-blue-100 text-sm">
                        Find institutions that match your objectives
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Country Selection</h4>
                      <p className="text-blue-100 text-sm">
                        Choose your preferred educational destination
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-2xl rotate-12 shadow-lg flex items-center justify-center">
                <span className="text-gray-900 font-bold text-sm text-center">
                  Top Universities
                </span>
              </div>

              <div className="absolute -bottom-6 -left-6 w-14 h-14 bg-green-400 rounded-2xl -rotate-6 shadow-lg flex items-center justify-center">
                <span className="text-white font-bold text-xs text-center">
                  Global Reach
                </span>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          {/* <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20 pt-10 border-t border-gray-200">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">
                50+
              </div>
              <div className="text-gray-600">Countries Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">
                1000+
              </div>
              <div className="text-gray-600">Universities</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">
                95%
              </div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">
                10K+
              </div>
              <div className="text-gray-600">Students Helped</div>
            </div>
          </div> */}
        </section>
      </div>

      <div className="px-5 flex items-center justify-center bg-white">
        <Link href={"/check-eligibility"}>
          <Button>
            Check your eligibility <ArrowUpRight size={18} />
          </Button>
        </Link>
      </div>
    </main>
  );
};
export default page;
