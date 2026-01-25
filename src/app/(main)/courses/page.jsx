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
import Form from "./Form";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useAxios } from "@/hooks/useAxios";
import { Spinner } from "@/components/ui/spinner";

const page = () => {
  const axiosSelf = useAxios();

  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["courses"],
    queryFn: () => axiosSelf.get("/courses"),
  });

  const courses = data?.data?.data || [];

  // States
  const [selectedCourse, setSelectedCourse] = useState(null);

  return (
    <>
      <OfferSection />

      <div className="bg-white w-full px-5 py-20" id="all_courses">
        <div className="w-full max-w-6xl mx-auto">
          <section className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-start justify-center gap-8">
            <div className="w-full sm:col-span-2 lg:col-span-3">
              <SectionTitle
                text={"Our Courses"}
                subtext={"Education"}
                align="center"
                animate={false}
              />
            </div>

            {isLoading && (
              <div className="sm:col-span-2 lg:col-span-3 min-h-[70vh] w-full grid place-content-center bg-white">
                <Spinner />
              </div>
            )}

            {courses?.map((course) => (
              <CourseBox
                key={course?.id}
                name={course?.name}
                classNo={course?.classNo}
                mockNo={course?.mockNo}
                duration={course?.duration}
                fees={course?.fees}
                offerFees={course?.offerFees}
                mode={course?.mode}
                four={course?.four}
                image={course?.image}
                bgColor={course?.bgColor}
                accentColor={course?.accentColor}
                link={course?.link}
                waLink={course?.waLink}
                setSelectedCourse={setSelectedCourse}
                id={course?.id}
              />
            ))}
          </section>

          {/* <span className="block w-full max-w-6xl mx-auto h-px bg-zinc-300 my-10"></span> */}
        </div>
      </div>

      <section className="w-full section flex flex-col items-center justify-center gap-6 bg-gradient-to-b from-slate-100 to-white">
        <motion.div
          // initial={{ filter: "blur(5px)", scale: 0.98, opacity: 0.7 }}
          // whileInView={{ filter: "blur(0px)", scale: 1, opacity: 1 }}
          // transition={{ delay: 0.05, duration: 0.15, ease: "linear" }}
          // viewport={{ margin: "400px 0px -40% 0px" }}
          className="flex flex-row items-center justify-center gap-2"
        >
          <BookOpenCheck size={50} className="text-[#18181b] -mt-3" />
          <SectionTitle text={"Tests"} align="center" animate={false} />
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
