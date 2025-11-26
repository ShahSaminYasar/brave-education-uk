"use client";
import SectionTitle from "@/components/ui/SectionTitle";
import Image from "next/image";
import CourseBox from "@/components/courses/CourseBox";
import * as motion from "motion/react-client";
import Link from "next/link";
import { BookOpenCheck } from "lucide-react";
import OfferSection from "@/components/offer/OfferSection";
import Counters from "@/app/course/life-in-the-uk/Counters";
import SuccessStories from "@/app/course/life-in-the-uk/SuccessStories";
import CourseSwiper from "../(main)/courses_back/CourseSwiper";
import Form from "./Form";
import { useState } from "react";

const page = () => {
  const courses = [
    {
      name: "B1 English Test (ISE I)",
      image: "/assets/images/courses/ise_b1.jpg",
      price: 380.0,
      id: "b1ise1",
    },
    {
      name: "B2 English Test (ISE II)",
      image: "/assets/images/courses/ise_b2.jpg",
      price: 380.0,
      id: "b2ise2",
    },
    {
      name: "B1 English Course (GESE Grade 5)",
      image: "/assets/images/courses/b1.jpg",
      price: 240.0,
      id: "b1g5",
    },
    {
      name: "A1 English Course (GESE Grade 2)",
      image: "/assets/images/courses/a1.jpg",
      price: 240.0,
      id: "a1g2",
    },
    {
      name: "A2 English Test (GESE Grade 3)",
      image: "/assets/images/courses/a2.jpg",
      price: 240.0,
      id: "a2g3",
    },
    {
      name: "Life in the UK",
      image: "/assets/images/courses/life-in-the-uk.jpg",
      price: 140.0,
      id: "lituk",
    },
    {
      name: "SIA Door Supervisor + First Aid",
      image: "/assets/images/courses/door_supervisor.jpg",
      price: 550.0,
      id: "sia",
    },
  ];

  // States
  const [selectedCourse, setSelectedCourse] = useState(null);

  return (
    <>
      <OfferSection />

      {/* Title Section */}
      {/* <motion.section className="pt-[100px] px-5 pb-20 min-h-screen flex flex-col justify-center items-center gap-8 max-w-6xl mx-auto bg-white">
        <div className="flex flex-col items-center justify-center gap-6 w-full max-w-3xl mx-auto">
          <motion.div
            initial={{ filter: "blur(5px)", scale: 0.98, opacity: 0.7 }}
            whileInView={{ filter: "blur(0px)", scale: 1, opacity: 1 }}
            transition={{ delay: 0.05, duration: 0.15, ease: "linear" }}
            viewport={{ margin: "400px 0px -30% 0px" }}
            className="w-fit bg-gradient-to-br from-purple-600 via-pink-600 to-purple-600 bg-clip-text"
          >
            <h2 className="text-[40px] lg:text-5xl 2xl:text-6xl block text-center text-zinc-900 font-[800]">
              Courses We <span className="text-transparent">Offer</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ filter: "blur(5px)", scale: 0.98, opacity: 0.7 }}
            whileInView={{ filter: "blur(0px)", scale: 1, opacity: 1 }}
            transition={{ delay: 0.05, duration: 0.15, ease: "linear" }}
            viewport={{ margin: "400px 0px -30% 0px" }}
            className="para block text-center"
            style={{ fontWeight: 400 }}
          >
            A language course is a structured program of study designed to teach
            individuals a specific language.Language courses can cover various
            aspects of language learning, including grammar, vocabulary,
            pronunciation, cultural nuances, and practical
          </motion.p>
        </div>

        <motion.div
          initial={{ filter: "blur(5px)", scale: 0.98, opacity: 0.7 }}
          whileInView={{ filter: "blur(0px)", scale: 1, opacity: 1 }}
          transition={{ delay: 0.05, duration: 0.15, ease: "linear" }}
          viewport={{ margin: "400px 0px -30% 0px" }}
          className="bg-white p-2 border border-zinc-300 shadow-sm rounded-2xl w-full max-w-md mx-auto"
        >
          <div className="md:ml-auto w-full bg-[#0b006b] rounded-2xl overflow-hidden aspect-[10/7]">
            <CourseSwiper />
          </div>
        </motion.div>

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
      </motion.section> */}

      <div
        className="bg-gradient-to-b from-slate-50 to-white w-full px-5 py-20"
        id="all_courses"
      >
        <div className="w-full max-w-6xl mx-auto">
          <section className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-start justify-center gap-8">
            <div className="w-full sm:col-span-2 lg:col-span-3">
              <SectionTitle
                text={"Our Courses"}
                subtext={"Education"}
                align="center"
              />
            </div>

            <CourseBox
              name={"B1 English Test (ISE I)"}
              classNo={"21 Classes"}
              mockNo={"02 Mock Tests"}
              duration={"1 hr 10 mins"}
              fees={380}
              mode={"In person"}
              image={"/assets/images/courses/ise_b1.jpg"}
              bgColor="#231f52"
              accentColor="#b50e12"
              link={`https://buy.stripe.com/9B6cMYbOX0xu0TsbVTdIA0b?prefilled_promo_code=bb40`}
              waLink={`https://wa.me/+447862042900?text=${encodeURIComponent(
                "I am interested in B1 English Test (ISE I), please tell me the details."
              )}`}
              setSelectedCourse={setSelectedCourse}
              id="b1ise1"
            />

            <CourseBox
              name={"B2 English Test (ISE II)"}
              classNo={"21 Classes"}
              mockNo={"02 Mock Tests"}
              duration={"1 hr 10 mins"}
              fees={380}
              mode={"In person"}
              image={"/assets/images/courses/ise_b2.jpg"}
              bgColor="#e02f33"
              accentColor="#b50e12"
              link={`https://buy.stripe.com/00w00c8CL3JG8lU9NLdIA0d?prefilled_promo_code=bb40`}
              waLink={`https://wa.me/+447862042900?text=${encodeURIComponent(
                "I am interested in B2 English Test (ISE II), please tell me the details."
              )}`}
              setSelectedCourse={setSelectedCourse}
              id="b2ise2"
            />

            <CourseBox
              name={"B1 English Course (GESE Grade 5)"}
              classNo={"14 Classes"}
              mockNo={"02 Mock Tests"}
              duration={"1 hr 10 mins"}
              fees={240}
              mode={"Online/Offline"}
              image={"/assets/images/courses/b1.jpg"}
              link={`https://buy.stripe.com/bJeaEQ5qzcgcby63pndIA0a?prefilled_promo_code=bb40`}
              waLink={`https://wa.me/+447862042900?text=${encodeURIComponent(
                "I am interested in B1 English Course (GESE Grade 5), please tell me the details."
              )}`}
              setSelectedCourse={setSelectedCourse}
              id="b1g5"
            />

            <CourseBox
              name={"A1 English Course (GESE Grade 2)"}
              classNo={"14 Classes"}
              mockNo={"02 Mock Tests"}
              duration={"1 hr 10 mins"}
              fees={240}
              mode={"Online/Offline"}
              image={"/assets/images/courses/a1.jpg"}
              bgColor="#e02f33"
              accentColor="#b50e12"
              link={`https://buy.stripe.com/5kQ9AM6uD3JG6dMe41dIA0e?prefilled_promo_code=bb40`}
              waLink={`https://wa.me/+447862042900?text=${encodeURIComponent(
                "I am interested in A1 English Course (GESE Grade 2), please tell me the details."
              )}`}
              setSelectedCourse={setSelectedCourse}
              id="a1g2"
            />

            <CourseBox
              name={"A2 English Test (GESE Grade 3)"}
              classNo={"14 Classes"}
              mockNo={"02 Mock Tests"}
              duration={"1 hr 10 mins"}
              fees={240}
              mode={"Online/Offline"}
              image={"/assets/images/courses/a2.jpg"}
              bgColor="#231f52"
              accentColor="#b50e12"
              link={`https://buy.stripe.com/aFaaEQbOXdkg9pYaRPdIA0f?prefilled_promo_code=bb40`}
              waLink={`https://wa.me/+447862042900?text=${encodeURIComponent(
                "I am interested in A2 English Test (GESE Grade 3), please tell me the details."
              )}`}
              setSelectedCourse={setSelectedCourse}
              id="a2g3"
            />

            <CourseBox
              name={"Life in the UK"}
              classNo={"10 Classes"}
              mockNo={"2 Mock Tests"}
              duration={"1 hr 10 mins"}
              fees={140}
              mode={"Online/Offline"}
              image={"/assets/images/courses/life-in-the-uk.jpg"}
              bgColor="#e02f33"
              accentColor="#b50e12"
              link={`https://buy.stripe.com/3cI7sEdX5dkg6dMbVTdIA0c?prefilled_promo_code=bb40`}
              waLink={`https://wa.me/+447862042900?text=${encodeURIComponent(
                "I am interested in the course 'Life in the UK', please tell me the details."
              )}`}
              setSelectedCourse={setSelectedCourse}
              id="lituk"
            />

            <CourseBox
              name={"SIA Door Supervisor + First Aid"}
              classNo={"6 days in a week"}
              mockNo={"Session: 9:30 - 18:00"}
              duration={"Result & Certificate"}
              four={"7 - 14 days"}
              fees={550}
              mode={"Location: Bethnal Green"}
              image={"/assets/images/courses/door_supervisor.jpg"}
              bgColor="#231f52"
              accentColor="#3b3b3b"
              link={`https://buy.stripe.com/bJeaEQbOXfso59I6BzdIA0g?prefilled_promo_code=bb40`}
              waLink={`https://wa.me/+447862042900?text=${encodeURIComponent(
                "I am interested in the course 'SIA Door Supervisor + First Aid', please tell me the details."
              )}`}
              setSelectedCourse={setSelectedCourse}
              id="sia"
            />
          </section>

          {/* <span className="block w-full max-w-6xl mx-auto h-px bg-zinc-300 my-10"></span> */}
        </div>
      </div>

      <section className="w-full section flex flex-col items-center justify-center gap-6 bg-gradient-to-b from-amber-300 to-amber-300">
        <motion.div
          initial={{ filter: "blur(5px)", scale: 0.98, opacity: 0.7 }}
          whileInView={{ filter: "blur(0px)", scale: 1, opacity: 1 }}
          transition={{ delay: 0.05, duration: 0.15, ease: "linear" }}
          viewport={{ margin: "400px 0px -40% 0px" }}
          className="flex flex-row items-center justify-center gap-2"
        >
          <BookOpenCheck size={50} className="text-[#fff] -mt-3" />
          <SectionTitle
            text={"Tests"}
            align="center"
            style={{
              color: "#fff",
            }}
            animate={false}
          />
        </motion.div>

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
            className="w-full rounded-2xl shadow-xl border border-white/50"
          />
        </Link>
      </section>

      <Counters />

      <SuccessStories />

      <Form
        selectedCourse={selectedCourse}
        setSelectedCourse={setSelectedCourse}
        courses={courses}
      />
    </>
  );
};
export default page;
