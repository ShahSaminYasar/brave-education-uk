import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle,
  Facebook,
  Instagram,
  Linkedin,
  MessageSquare,
  Music2,
  Send,
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
              href={"https://wa.me/+44747620040881"}
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
                    <CheckCircle size={15} className="text-white/50" />
                    Check Eligibility
                  </span>
                </span>
              </div>
            </div>

            <h2
              className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl block
          font-montserrat font-semibold text-transparent"
            >
              Check Your Eligibility
            </h2>
            <p className="text-white/80 text-sm">
              Complete the form below to verify your eligibility for our
              programs
            </p>
          </div>

          <form className="flex flex-col w-full gap-6">
            {/* Your Name */}
            <div className="space-y-2">
              <label className="text-white/80 text-sm font-medium">
                Your Name *
              </label>
              <input
                type="text"
                placeholder="E.g. John"
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

            {/* Date Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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

              {/* VRP Expiry Date */}
              <div className="space-y-2">
                <label className="text-white/80 text-sm font-medium">
                  VRP Expiry Date *
                </label>
                <input
                  type="date"
                  className="p-2 border-b border-zinc-200 block w-full text-sm text-zinc-100 placeholder:text-zinc-200 outline-[0px] bg-transparent"
                />
              </div>

              {/* Passport Expiry Date */}
              <div className="space-y-2">
                <label className="text-white/80 text-sm font-medium">
                  Passport Expiry Date *
                </label>
                <input
                  type="date"
                  className="p-2 border-b border-zinc-200 block w-full text-sm text-zinc-100 placeholder:text-zinc-200 outline-[0px] bg-transparent"
                />
              </div>
            </div>

            {/* Last Qualification */}
            <div className="space-y-2">
              <label className="text-white/80 text-sm font-medium">
                Last Qualification *
              </label>
              <select className="p-2 border-b border-zinc-200 block w-full text-sm text-zinc-100 placeholder:text-zinc-200 outline-[0px] bg-transparent">
                <option value="" className="text-zinc-800">
                  Select your last qualification
                </option>
                <option value="high-school" className="text-zinc-800">
                  High School / GCSE
                </option>
                <option value="a-levels" className="text-zinc-800">
                  A-Levels
                </option>
                <option value="diploma" className="text-zinc-800">
                  Diploma
                </option>
                <option value="bachelors" className="text-zinc-800">
                  Bachelor's Degree
                </option>
                <option value="masters" className="text-zinc-800">
                  Master's Degree
                </option>
                <option value="phd" className="text-zinc-800">
                  PhD
                </option>
                <option value="other" className="text-zinc-800">
                  Other
                </option>
              </select>
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

            {/* Proxy Terms */}
            <div className="space-y-2">
              {/* <label className="text-white/80 text-sm font-medium">
                Proxy Terms
              </label> */}
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <p className="text-white/60 text-sm text-center">
                  By submitting this form, you agree to our terms and conditions
                  regarding eligibility verification and data processing.
                </p>
              </div>
            </div>

            <Button
              className={"w-full border border-zinc-600 mt-4"}
              size={"lg"}
            >
              SEND MESSAGE <Send size={18} />
            </Button>

            <p className="text-white/60 text-xs text-center">
              All fields marked with * are required. We'll contact you within 24
              hours with your eligibility results.
            </p>
          </form>
        </div>
      </section>
    </div>
  );
};
export default page;
