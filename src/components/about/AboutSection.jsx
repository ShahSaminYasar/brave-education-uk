import { ArrowUpRight } from "lucide-react";
import { Button } from "../ui/button";
import SectionTitle from "../ui/SectionTitle";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="relative section bg-[radial-gradient(#0000001a_1px,#f8fafc_1px)] bg-[size:22px_22px]">
      <div className="absolute bg-gradient-to-r from-white to-transparent w-[80%] h-full top-0 left-0"></div>

      <div className="relative z-10 container grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="w-full flex flex-col items-start gap-3">
          <SectionTitle text={"Who Are We?"} align="left" />

          <p className="para">
            At Brave Education UK, we help students and professionals achieve
            their dreams of studying, working, and settling abroad. Our services
            cover everything from choosing the right study program and applying
            for a visa, to preparing for English tests and even setting up your
            company in the UK.
          </p>

          <p className="para mb-2">
            We focus on making the whole process simple, transparent, and
            stress-free, so you always know what to expect. Whether you are
            planning to study, build a career, or explore new opportunities,
            we’re here to guide you step by step.
          </p>

          <Button>
            Our Team <ArrowUpRight />
          </Button>
        </div>

        <div className="relative w-full min-h-screen">
          <Image
            src={"/assets/images/uk_classroom.jpg"}
            width={220}
            height={700}
            alt="UK classroom"
            className="block w-[220px] rounded-lg aspect-[9/13] bg-red-50 overflow-hidden absolute top-0 right-0 object-cover object-center skew-x-[-7deg] skew-y-[5deg] shadow-2xl"
          />
          <Image
            src={"/assets/images/uk_office.jpg"}
            width={220}
            height={700}
            alt="UK office"
            className="block w-[220px] rounded-lg aspect-[9/13] bg-red-50 overflow-hidden absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 skew-x-[2deg] skew-y-[-2deg] object-cover object-center shadow-2xl"
          />
          <Image
            src={"/assets/images/bd_office_desk.jpg"}
            width={220}
            height={700}
            alt="Abdur Rahman Sir during counselling session"
            className="block w-[220px] rounded-lg aspect-[9/13] bg-red-50 overflow-hidden absolute bottom-0 left-0 object-cover object-center -rotate-6 skew-x-[-9deg] skew-y-[9deg] shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
