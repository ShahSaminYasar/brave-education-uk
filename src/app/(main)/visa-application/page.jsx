import { Button } from "@/components/ui/button";
import {
  Facebook,
  Instagram,
  Linkedin,
  MessageSquare,
  Music2,
  Send,
  User,
  FileText,
} from "lucide-react";
import Link from "next/link";

const page = () => {
  return (
    <div className="px-5 pb-0 pt-28 bg-[#fff]">
      <section
        className="w-full max-w-5xl mx-auto rounded-2xl overflow-hidden p-0 md:p-6 flex flex-col-reverse gap-5 md:gap-10 shadow-xl fade-up"
        style={{
          background: "url(/bg-dark.png)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="w-full grid grid-cols-3 gap-4 justify-center items-center bg-white/10 rounded-2xl p-6 text-sm text-white">
          <div>
            <span className="font-semibold block">Phone Number</span>
            <Link href={"tel:+4408009991257"}>0800 999 1257</Link>
          </div>

          <div className="col-span-2 flex flex-wrap items-center justify-end gap-2">
            <Link
              href={"https://www.facebook.com/braveeduuk/"}
              target="_blank"
              className="block aspect-square p-2 rounded-full bg-white/20 text-white/70 hover:bg-white/90 hover:text-blue-800 duration-200"
            >
              <Facebook size={15} />
            </Link>
            <Link
              href={"https://uk.linkedin.com/company/braveedu"}
              target="_blank"
              className="block aspect-square p-2 rounded-full bg-white/20 text-white/70 hover:bg-white/90 hover:text-sky-600 duration-200"
            >
              <Linkedin size={15} />
            </Link>
            <Link
              href={"https://www.instagram.com/braveeducationuk/"}
              target="_blank"
              className="block aspect-square p-2 rounded-full bg-white/20 text-white/70 hover:bg-white/90 hover:text-pink-600 duration-200"
            >
              <Instagram size={15} />
            </Link>
            <Link
              href={"https://wa.me/+447862042900"}
              target="_blank"
              className="block aspect-square p-2 rounded-full bg-white/20 text-white/70 hover:bg-white/90 hover:text-green-600 duration-200"
            >
              <MessageSquare size={15} />
            </Link>
            <Link
              href={"https://www.facebook.com/braveeduuk/"}
              target="_blank"
              className="block aspect-square p-2 rounded-full bg-white/20 text-white/70 hover:bg-white/90 hover:text-slate-800 duration-200"
            >
              <Music2 size={15} />
            </Link>
          </div>
        </div>

        <div className="w-full col-span-3 space-y-4 bg-white/10 rounded-2xl p-8">
          <div className="bg-gradient-to-br from-white/100 to-white/5 bg-clip-text space-y-4 mb-7">
            {/* Badge */}
            <div className="bg-gradient-to-br from-white/5 via-white/20 border border-white/30 to-white/5 rounded-2xl p-px w-fit">
              <div className="flex flex-row items-center justify-center gap-2 bg-white/5 text-white/60 text-[12px] font-medium rounded-2xl px-4 py-[2px]">
                <span
                  className="block bg-gradient-to-br from-white/80 from-30% 
                via-white/90 via-50% 
                to-white/80 to-80% bg-clip-text"
                >
                  <span className="text-transparent flex items-center gap-2">
                    <FileText size={15} className="text-white/50" /> Visa
                    Application
                  </span>
                </span>
              </div>
            </div>

            <h2
              className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl block
          font-montserrat font-semibold text-transparent"
            >
              Visa Application Form
            </h2>
            <p className="text-white/80 text-sm">
              Complete all sections for your UK student visa application
            </p>
          </div>

          <form className="flex flex-col w-full gap-6">
            {/* Personal Information Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* First Name */}
              <div className="space-y-2">
                <label className="text-white/80 text-sm font-medium">
                  First Name *
                </label>
                <input
                  type="text"
                  placeholder="First Name"
                  className="p-2 border-b border-zinc-200 block w-full text-sm text-zinc-100 placeholder:text-zinc-200 outline-[0px] bg-transparent"
                />
              </div>

              <div className="space-y-2">
                <label className="text-white/80 text-sm font-medium">
                  Last Name *
                </label>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="p-2 border-b border-zinc-200 block w-full text-sm text-zinc-100 placeholder:text-zinc-200 outline-[0px] bg-transparent"
                />
              </div>

              {/* Date of Birth */}
              <div className="space-y-2">
                <label className="text-white/80 text-sm font-medium">
                  Date Of Birth *
                </label>
                <input
                  type="date"
                  className="p-2 border-b border-zinc-200 block w-full text-sm text-zinc-100 placeholder:text-zinc-200 outline-[0px] bg-transparent"
                />
              </div>

              {/* Passport Number */}
              <div className="space-y-2">
                <label className="text-white/80 text-sm font-medium">
                  Passport Number *
                </label>
                <input
                  type="text"
                  placeholder="Passport Number"
                  className="p-2 border-b border-zinc-200 block w-full text-sm text-zinc-100 placeholder:text-zinc-200 outline-[0px] bg-transparent"
                />
              </div>

              {/* Issue Date */}
              <div className="space-y-2">
                <label className="text-white/80 text-sm font-medium">
                  Issue date *
                </label>
                <input
                  type="date"
                  className="p-2 border-b border-zinc-200 block w-full text-sm text-zinc-100 placeholder:text-zinc-200 outline-[0px] bg-transparent"
                />
              </div>

              {/* Expiry Date */}
              <div className="space-y-2">
                <label className="text-white/80 text-sm font-medium">
                  Expiry date *
                </label>
                <input
                  type="date"
                  className="p-2 border-b border-zinc-200 block w-full text-sm text-zinc-100 placeholder:text-zinc-200 outline-[0px] bg-transparent"
                />
              </div>

              {/* Issue Authority */}
              <div className="space-y-2">
                <label className="text-white/80 text-sm font-medium">
                  Issue Authority *
                </label>
                <input
                  type="text"
                  placeholder="Issue Authority"
                  className="p-2 border-b border-zinc-200 block w-full text-sm text-zinc-100 placeholder:text-zinc-200 outline-[0px] bg-transparent"
                />
              </div>
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Bangladeshi Address */}
              <div className="space-y-2">
                <label className="text-white/80 text-sm font-medium">
                  Bangladeshi Address *
                </label>
                <input
                  type="text"
                  placeholder="Bangladeshi Address"
                  className="p-2 border-b border-zinc-200 block w-full text-sm text-zinc-100 placeholder:text-zinc-200 outline-[0px] bg-transparent"
                />
              </div>

              {/* NID Number */}
              <div className="space-y-2">
                <label className="text-white/80 text-sm font-medium">
                  NID Number *
                </label>
                <input
                  type="text"
                  placeholder="NID Number"
                  className="p-2 border-b border-zinc-200 block w-full text-sm text-zinc-100 placeholder:text-zinc-200 outline-[0px] bg-transparent"
                />
              </div>

              {/* Phone Number */}
              <div className="space-y-2">
                <label className="text-white/80 text-sm font-medium">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  placeholder="E.g. +1 3004005000"
                  className="p-2 border-b border-zinc-200 block w-full text-sm text-zinc-100 placeholder:text-zinc-200 outline-[0px] bg-transparent"
                />
              </div>

              {/* Email Address */}
              <div className="space-y-2">
                <label className="text-white/80 text-sm font-medium">
                  Email Address *
                </label>
                <input
                  type="email"
                  placeholder="E.g. john@doe.com"
                  className="p-2 border-b border-zinc-200 block w-full text-sm text-zinc-100 placeholder:text-zinc-200 outline-[0px] bg-transparent"
                />
              </div>
            </div>

            {/* Marital Status */}
            <div className="space-y-2">
              <label className="text-white/80 text-sm font-medium">
                Marital Status *
              </label>
              <div className="flex gap-6">
                <label className="flex items-center gap-2 text-white/80 text-sm">
                  <input
                    type="radio"
                    name="maritalStatus"
                    value="single"
                    className="w-4 h-4"
                  />
                  Single
                </label>
                <label className="flex items-center gap-2 text-white/80 text-sm">
                  <input
                    type="radio"
                    name="maritalStatus"
                    value="married"
                    className="w-4 h-4"
                  />
                  Married
                </label>
              </div>
            </div>

            {/* Course Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-6">
              {/* Course Name */}
              <div className="md:col-span-2 space-y-2">
                <label className="text-white/80 text-sm font-medium">
                  Course Name *
                </label>
                <input
                  type="text"
                  placeholder="Course Name"
                  className="p-2 border-b border-zinc-200 block w-full text-sm text-zinc-100 placeholder:text-zinc-200 outline-[0px] bg-transparent"
                />
              </div>

              {/* Course Start Date */}
              <div className="space-y-2">
                <label className="text-white/80 text-sm font-medium">
                  Course start date *
                </label>
                <input
                  type="date"
                  className="p-2 border-b border-zinc-200 block w-full text-sm text-zinc-100 placeholder:text-zinc-200 outline-[0px] bg-transparent"
                />
              </div>

              {/* Course End Date */}
              <div className="space-y-2">
                <label className="text-white/80 text-sm font-medium">
                  Course end date *
                </label>
                <input
                  type="date"
                  className="p-2 border-b border-zinc-200 block w-full text-sm text-zinc-100 placeholder:text-zinc-200 outline-[0px] bg-transparent"
                />
              </div>
            </div>

            {/* Visa & Sponsor Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Sponsor No */}
              <div className="space-y-2">
                <label className="text-white/80 text-sm font-medium">
                  Sponsor No *
                </label>
                <input
                  type="text"
                  placeholder="Sponsor No"
                  className="p-2 border-b border-zinc-200 block w-full text-sm text-zinc-100 placeholder:text-zinc-200 outline-[0px] bg-transparent"
                />
              </div>

              {/* CAS/COS No */}
              <div className="space-y-2">
                <label className="text-white/80 text-sm font-medium">
                  CAS/COS No *
                </label>
                <input
                  type="text"
                  placeholder="CAS/COS No"
                  className="p-2 border-b border-zinc-200 block w-full text-sm text-zinc-100 placeholder:text-zinc-200 outline-[0px] bg-transparent"
                />
              </div>

              {/* Bank Name */}
              <div className="space-y-2">
                <label className="text-white/80 text-sm font-medium">
                  Bank Name *
                </label>
                <input
                  type="text"
                  placeholder="Bank Name"
                  className="p-2 border-b border-zinc-200 block w-full text-sm text-zinc-100 placeholder:text-zinc-200 outline-[0px] bg-transparent"
                />
              </div>

              {/* Your UK Address */}
              <div className="space-y-2">
                <label className="text-white/80 text-sm font-medium">
                  Your UK address *
                </label>
                <input
                  type="text"
                  placeholder="Your UK address"
                  className="p-2 border-b border-zinc-200 block w-full text-sm text-zinc-100 placeholder:text-zinc-200 outline-[0px] bg-transparent"
                />
              </div>
            </div>

            {/* Parents Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Mother's Name */}
              <div className="space-y-2">
                <label className="text-white/80 text-sm font-medium">
                  Mother's Name *
                </label>
                <input
                  type="text"
                  placeholder="Mother's Name"
                  className="p-2 border-b border-zinc-200 block w-full text-sm text-zinc-100 placeholder:text-zinc-200 outline-[0px] bg-transparent"
                />
              </div>

              {/* Mother's Date of Birth */}
              <div className="space-y-2">
                <label className="text-white/80 text-sm font-medium">
                  Mother's date of birth *
                </label>
                <input
                  type="date"
                  className="p-2 border-b border-zinc-200 block w-full text-sm text-zinc-100 placeholder:text-zinc-200 outline-[0px] bg-transparent"
                />
              </div>

              {/* Father's Name */}
              <div className="space-y-2">
                <label className="text-white/80 text-sm font-medium">
                  Father's Name *
                </label>
                <input
                  type="text"
                  placeholder="Father's Name"
                  className="p-2 border-b border-zinc-200 block w-full text-sm text-zinc-100 placeholder:text-zinc-200 outline-[0px] bg-transparent"
                />
              </div>

              {/* Father's Date of Birth */}
              <div className="space-y-2">
                <label className="text-white/80 text-sm font-medium">
                  Father's date of birth *
                </label>
                <input
                  type="date"
                  className="p-2 border-b border-zinc-200 block w-full text-sm text-zinc-100 placeholder:text-zinc-200 outline-[0px] bg-transparent"
                />
              </div>
            </div>

            {/* Additional Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Their Nationality */}
              <div className="space-y-2">
                <label className="text-white/80 text-sm font-medium">
                  Their nationality *
                </label>
                <input
                  type="text"
                  placeholder="Their nationality"
                  className="p-2 border-b border-zinc-200 block w-full text-sm text-zinc-100 placeholder:text-zinc-200 outline-[0px] bg-transparent"
                />
              </div>

              {/* Is their address the same? */}
              <div className="space-y-2">
                <label className="text-white/80 text-sm font-medium">
                  Is their address the same? *
                </label>
                <select className="p-2 border-b border-zinc-200 block w-full text-sm text-zinc-100 placeholder:text-zinc-200 outline-[0px] bg-transparent">
                  <option value="" className="text-zinc-800">
                    Select
                  </option>
                  <option value="yes" className="text-zinc-800">
                    Yes
                  </option>
                  <option value="no" className="text-zinc-800">
                    No
                  </option>
                </select>
              </div>

              {/* Do you have any refusal? */}
              <div className="space-y-2">
                <label className="text-white/80 text-sm font-medium">
                  Do you have any refusal? *
                </label>
                <select className="p-2 border-b border-zinc-200 block w-full text-sm text-zinc-100 placeholder:text-zinc-200 outline-[0px] bg-transparent">
                  <option value="" className="text-zinc-800">
                    Select
                  </option>
                  <option value="yes" className="text-zinc-800">
                    Yes
                  </option>
                  <option value="no" className="text-zinc-800">
                    No
                  </option>
                </select>
              </div>

              {/* Have you travelled to any countries? */}
              <div className="space-y-2">
                <label className="text-white/80 text-sm font-medium">
                  Have you travelled to any countries? *
                </label>
                <select className="p-2 border-b border-zinc-200 block w-full text-sm text-zinc-100 placeholder:text-zinc-200 outline-[0px] bg-transparent">
                  <option value="" className="text-zinc-800">
                    Select
                  </option>
                  <option value="yes" className="text-zinc-800">
                    Yes
                  </option>
                  <option value="no" className="text-zinc-800">
                    No
                  </option>
                </select>
              </div>
            </div>

            {/* reCAPTCHA Placeholder */}
            {/* <div className="space-y-2">
              <div className="flex items-center gap-2 mb-2">
                <input type="checkbox" id="robot-check" className="w-4 h-4" />
                <label
                  htmlFor="robot-check"
                  className="text-white/80 text-sm font-medium"
                >
                  I'm not a robot
                </label>
              </div>
              <div className="bg-white/10 border border-white/20 rounded px-4 py-6 text-center">
                <p className="text-white/60 text-sm mb-2">
                  reCAPTCHA is changing its terms of service. Take action.
                </p>
                <div className="bg-white/20 rounded px-4 py-2 inline-block">
                  <span className="text-white/80 text-sm font-medium">
                    reCAPTCHA
                  </span>
                </div>
              </div>
            </div> */}

            <Button
              className={"w-full border border-zinc-600 mt-4"}
              size={"lg"}
            >
              SEND MESSAGE <Send size={18} />
            </Button>

            <p className="text-white/60 text-xs text-center">
              All fields marked with * are required for visa processing.
            </p>
          </form>
        </div>
      </section>
    </div>
  );
};

export default page;
