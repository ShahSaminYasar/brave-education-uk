"use client";
import SectionTitle from "@/components/ui/SectionTitle";
import { Spinner } from "@/components/ui/spinner";
import { useAxios } from "@/hooks/useAxios";
import { ArrowRight } from "lucide-react";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { toast } from "sonner";

const Form = ({ courses, selectedCourse, setSelectedCourse }) => {
  const axios = useAxios();
  const router = useRouter();

  // Refs
  const containerRef = useRef(null);

  // States
  const [loading, setLoading] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);
  const imageY = useTransform(
    scrollYProgress,
    [0, 0.4, 1],
    ["0px", "-350px", "-380px"]
  );
  const imageX = useTransform(
    scrollYProgress,
    [0, 0.4, 1],
    ["-250px", "-30px", "0px"]
  );
  const imageScale = useTransform(scrollYProgress, [0, 1], [0.85, 1.15]);

  // Functions
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      const form = new FormData(e?.target);
      const name = form?.get("name");
      const email = form?.get("email");
      const phone = form?.get("phone");
      const courseId = form?.get("course") || selectedCourse;
      const course = courses?.find((c) => c?.id === courseId)?.name || "";

      const data = { name, email, phone, course };

      const res = await axios.post("/lead", data);

      if (res?.data?.ok) {
        return router.push("/courses/thank-you");
      } else {
        console.log(res?.data);
        return toast.warning(res?.data?.message);
      }
    } catch (error) {
      console.error(error);
      return toast.error(
        error?.message ||
          "Unknown error occured, please try again or contact us directly"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      ref={containerRef}
      id="course_confirm_form"
      className="w-full px-5 pb-24 pt-[0px] md:pt-[200px] bg-white"
    >
      {/* pb-24 pt-[400px] md:pt-[200px] */}
      <motion.section
        className="w-full max-w-6xl mx-auto rounded-3xl p-5 md:p-10 flex flex-col md:grid md:grid-cols-3 items-center justify-center gap-10 relative pt-[20px] md:pt-10"
        style={{
          background: "url(/bg-dark.jpg)",
          backgroundSize: "cover",
          backgroundPositionX: "center",
          backgroundPositionY: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <form
          onSubmit={handleSubmit}
          className="w-full md:col-span-2 relative z-20 bg-[#121163] rounded-2xl p-8 flex flex-col gap-5 items-start justify-center"
        >
          <SectionTitle
            align="left"
            text={"Book Your Seat Now"}
            subtext={"Secure your spot in the next batch"}
            style={{ color: "#fff" }}
            animate={false}
          />

          <p className="para">
            Fill in your details and we'll contact you within 24 hours to
            confirm your enrollment.
          </p>

          <input
            type="text"
            name="name"
            placeholder="Your full name"
            required
            className="w-full py-2 px-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder:text-white/30 outline-none focus:border-white/40"
          />

          <input
            type="email"
            name="email"
            placeholder="Your email address"
            required
            className="w-full py-2 px-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder:text-white/30 outline-none focus:border-white/40"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Your phone number"
            required
            className="w-full py-2 px-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder:text-white/30 outline-none focus:border-white/40"
          />

          <div className="w-full flex flex-col items-center justify-center gap-3">
            <h3 className="text-sm text-white/90 font-medium block text-left w-full">
              Course Details
            </h3>

            <select
              name="course"
              className="w-full bg-slate-300 p-2 rounded-xl"
              onChange={(e) => setSelectedCourse(e?.target?.value)}
              value={selectedCourse || ""}
            >
              <option value="">Select a course</option>
              {courses?.map((c) => (
                <option value={c?.id} key={c?.id}>
                  {c?.name}
                </option>
              ))}
            </select>

            <div
              className={`w-full ${
                selectedCourse ? "max-h-[120px]" : "max-h-[0px]"
              } transition-all duration-700`}
            >
              <AnimatePresence>
                {selectedCourse && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                      duration: 0.5,
                      type: "keyframes",
                    }}
                    className={`w-full origin-top grid grid-cols-5 gap-3 bg-white/5 rounded-xl text-white text-xs font-medium items-center justify-center overflow-hidden p-3`}
                  >
                    <Image
                      src={courses?.find((c) => c?.id == selectedCourse)?.image}
                      width={120}
                      height={120}
                      alt={courses?.find((c) => c?.id == selectedCourse)?.name}
                      className="w-full rounded-lg col-span-1"
                    />

                    <p className="block text-center col-span-3">
                      {courses?.find((c) => c?.id == selectedCourse)?.name}
                    </p>

                    <div className="flex flex-col w-full items-end justify-center gap-1 text-xs font-medium">
                      <span className="text-green-400 font-semibold">
                        £
                        {courses?.find((c) => c?.id == selectedCourse)?.price -
                          courses?.find((c) => c?.id == selectedCourse)?.price *
                            0.4}
                      </span>
                      <del className="font-normal text-white/40">
                        £{courses?.find((c) => c?.id == selectedCourse)?.price}
                      </del>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-1 text-sm font-medium text-white py-2 px-3 bg-gradient-to-r from-red-600 via-red-500 to-red-600 rounded-xl shadow-sm hover:shadow-xl cursor-pointer mt-2 hover:from-white/80 hover:via-white/100 hover:to-white/80 transition-all duration-100 active:shadow-none hover:gap-3 hover:text-red-600 disabled:grayscale-[80%] disabled:opacity-50 disabled:cursor-auto"
          >
            {loading ? (
              <>
                <Spinner /> Processing
              </>
            ) : (
              <>
                Enroll <ArrowRight size={14} />
              </>
            )}
          </button>
        </form>

        {/* <motion.div
          className="absolute block left-1/2 -translate-x-1/2 z-0 md:hidden"
          style={{
            top: imageY,
            scale: imageScale,
          }}
        >
          <Image
            src={"/assets/images/big-ben-clock.png"}
            width={400}
            height={500}
            alt="Big Ben Tower of London"
            className="w-[300px] h-fit"
          />
        </motion.div> */}

        <motion.div
          className="absolute hidden bottom-0 right-14 z-0 md:block"
          style={{
            x: imageX,
          }}
        >
          <Image
            src={"/assets/images/big-ben-clock-shadowed.png"}
            width={400}
            height={500}
            alt="Big Ben Tower of London"
            className="w-[300px] h-fit"
          />
        </motion.div>
      </motion.section>
    </div>
  );
};
export default Form;
