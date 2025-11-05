import SectionTitle from "@/components/ui/SectionTitle";
import Image from "next/image";
import CourseBox from "@/components/courses/CourseBox";
import * as motion from "motion/react-client";
import Link from "next/link";
import { BookOpenCheck } from "lucide-react";
import CourseSwiper from "./CourseSwiper";

export const metadata = {
  title: "English (A1-B2), Life in UK & Theory Courses",
  description:
    "Prepare for your UK tests with Brave Education UK. We offer expert courses for A1, A2, B1, B2, Life in the UK, and the Driving Theory test. Enroll today to pass with confidence.",
  keywords: [
    "Life in the UK test course",
    "B1 English test course",
    "A1 English test course",
    "A2 English test",
    "B2 English test",
    "UK driving theory test course",
    "SELT preparation",
  ],
  robots: "index, follow",
};

const page = () => {
  return (
    <main>
      {/* Title Section */}
      <motion.section
        initial={{ filter: "blur(5px)", scale: 0.98, opacity: 0.7 }}
        animate={{ filter: "blur(0px)", scale: 1, opacity: 1 }}
        transition={{ delay: 0.05, duration: 0.15, ease: "linear" }}
        className="pt-[100px] px-5 pb-20 min-h-screen flex flex-col-reverse justify-center items-center gap-8 md:grid md:grid-cols-2 md:gap-10 max-w-6xl mx-auto"
      >
        <div className="flex flex-col items-start gap-6">
          <div className="w-fit bg-gradient-to-br from-purple-600 via-pink-600 to-purple-600 bg-clip-text">
            <h2 className="text-[40px] lg:text-5xl 2xl:text-6xl block text-zinc-900 font-[800]">
              Courses We <span className="text-transparent">Offer</span>
            </h2>
          </div>

          <p className="para" style={{ fontWeight: 400 }}>
            A language course is a structured program of study designed to teach
            individuals a specific language.Language courses can cover various
            aspects of language learning, including grammar, vocabulary,
            pronunciation, cultural nuances, and practical
          </p>
        </div>

        <div className="bg-white p-2 border border-zinc-300 shadow-sm rounded-2xl w-full max-w-md md:ml-auto">
          <div className="md:ml-auto w-full bg-[#0b006b] rounded-2xl overflow-hidden aspect-[10/7]">
            <CourseSwiper />
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-5 left-1/2 transform -translate-x-1/2"
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

      <div className="bg-white w-full px-5 py-20">
        <div className="w-full max-w-6xl mx-auto">
          <section className="w-full flex flex-col items-center justify-center gap-6">
            <SectionTitle
              text={"Our Courses"}
              subtext={"Education"}
              align="center"
            />

            <CourseBox
              name={"B1 English Test (ISE I)"}
              classNo={"21"}
              mockNo={"02"}
              duration={"1 hr 10 mins"}
              fees={"£380"}
              mode={"In person"}
              image={"/assets/images/courses/ise_b1.jpg"}
              bgColor="#231f52"
              accentColor="#b50e12"
              link={`https://buy.stripe.com/9B6cMYbOX0xu0TsbVTdIA0b`}
              waLink={`https://wa.me/+447862042900?text=${encodeURIComponent(
                "I am interested in B1 English Test (ISE I), please tell me the details."
              )}`}
            />

            <CourseBox
              name={"B2 English Test (ISE II)"}
              classNo={"21"}
              mockNo={"02"}
              duration={"1 hr 10 mins"}
              fees={"£380"}
              mode={"In person"}
              image={"/assets/images/courses/ise_b2.jpg"}
              bgColor="#e02f33"
              accentColor="#b50e12"
              link={`https://buy.stripe.com/00w00c8CL3JG8lU9NLdIA0d`}
              waLink={`https://wa.me/+447862042900?text=${encodeURIComponent(
                "I am interested in B2 English Test (ISE II), please tell me the details."
              )}`}
            />

            <CourseBox
              name={"B1 English Course (GESE Grade 5)"}
              classNo={"14"}
              mockNo={"02"}
              duration={"1 hr 10 mins"}
              fees={"£240"}
              mode={"Online/Offline"}
              image={"/assets/images/courses/b1.jpg"}
              link={`https://buy.stripe.com/bJeaEQ5qzcgcby63pndIA0a`}
              waLink={`https://wa.me/+447862042900?text=${encodeURIComponent(
                "I am interested in B1 English Course (GESE Grade 5), please tell me the details."
              )}`}
            />

            <CourseBox
              name={"A1 English Course (GESE Grade 2)"}
              classNo={"14"}
              mockNo={"02"}
              duration={"1 hr 10 mins"}
              fees={"£240"}
              mode={"Online/Offline"}
              image={"/assets/images/courses/a1.jpg"}
              bgColor="#e02f33"
              accentColor="#b50e12"
              link={`https://buy.stripe.com/5kQ9AM6uD3JG6dMe41dIA0e`}
              waLink={`https://wa.me/+447862042900?text=${encodeURIComponent(
                "I am interested in A1 English Course (GESE Grade 2), please tell me the details."
              )}`}
            />

            <CourseBox
              name={"A2 English Test (GESE Grade 3)"}
              classNo={"14"}
              mockNo={"02"}
              duration={"1 hr 10 mins"}
              fees={"£240"}
              mode={"Online/Offline"}
              image={"/assets/images/courses/a2.jpg"}
              bgColor="#231f52"
              accentColor="#b50e12"
              link={`https://buy.stripe.com/aFaaEQbOXdkg9pYaRPdIA0f`}
              waLink={`https://wa.me/+447862042900?text=${encodeURIComponent(
                "I am interested in A2 English Test (GESE Grade 3), please tell me the details."
              )}`}
            />

            <CourseBox
              name={"Life in the UK"}
              classNo={"10"}
              mockNo={"2"}
              duration={"1 hr 10 mins"}
              fees={"£150"}
              mode={"Online/Offline"}
              image={"/assets/images/courses/life-in-the-uk.jpg"}
              bgColor="#262626"
              accentColor="#3b3b3b"
              link={`https://buy.stripe.com/3cI7sEdX5dkg6dMbVTdIA0c`}
              waLink={`https://wa.me/+447862042900?text=${encodeURIComponent(
                "I am interested in the course 'Life in the UK', please tell me the details."
              )}`}
            />
          </section>

          <span className="block w-full max-w-6xl mx-auto h-px bg-zinc-300 my-10"></span>

          <section className="w-full flex flex-col items-center justify-center gap-6">
            <div className="flex flex-row items-center justify-center gap-2">
              <BookOpenCheck size={35} className="text-[#e02f33]" />
              <SectionTitle
                text={"Tests"}
                align="center"
                style={{
                  color: "#e02f33",
                  fontSize: "28px",
                  fontWeight: "800",
                }}
              />
            </div>

            <Link
              href={
                "https://seltbooking.trinitycollege.co.uk/OEWeb/loadExamDtl.do?ref=1-10672391978"
              }
              target="_blank"
              className="block w-full max-w-3xl mx-auto"
            >
              <Image
                src={"/assets/images/courses/trinity_test.jpg"}
                width={1000}
                height={333}
                alt="Trinity College SELT Test"
                className="w-full rounded-2xl shadow-sm"
              />
            </Link>
          </section>
        </div>
      </div>
    </main>
  );
};
export default page;
