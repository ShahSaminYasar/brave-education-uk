import { Button } from "@/components/ui/button";
import {
  Calendar,
  Clock,
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
                    <Calendar size={15} className="text-white/50" /> Book
                    Appointment
                  </span>
                </span>
              </div>
            </div>

            <h2
              className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl block
          font-montserrat font-semibold text-transparent"
            >
              Book Your Appointment
            </h2>
            <p className="text-white/80 text-sm">
              Schedule your consultation with our education experts
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
              <p className="text-white/60 text-xs">
                This field is required. Please input your name.
              </p>
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
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="E.g. +1 3004005000"
                className="p-2 border-b border-zinc-200 block w-full text-sm text-zinc-100 placeholder:text-zinc-200 outline-[0px] bg-transparent"
              />
            </div>

            {/* Date and Time Section */}
            <div className="space-y-4">
              {/* Date */}
              <div className="space-y-2">
                <label className="text-white/80 text-sm font-medium">
                  Date *
                </label>
                <input
                  type="date"
                  className="p-2 border-b border-zinc-200 block w-full text-sm text-zinc-100 placeholder:text-zinc-200 outline-[0px] bg-transparent"
                />
              </div>

              {/* Time Selection */}
              <div className="grid grid-cols-3 gap-4">
                {/* Time Hours */}
                <div className="space-y-2">
                  <label className="text-white/80 text-sm font-medium">
                    Time Hours *
                  </label>
                  <select className="p-2 border-b border-zinc-200 block w-full text-sm text-zinc-100 placeholder:text-zinc-200 outline-[0px] bg-transparent">
                    <option value="" className="text-zinc-800">
                      Select
                    </option>
                    {Array.from({ length: 12 }, (_, i) => i + 1).map((hour) => (
                      <option key={hour} value={hour} className="text-zinc-800">
                        {hour.toString().padStart(2, "0")}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Minutes */}
                <div className="space-y-2">
                  <label className="text-white/80 text-sm font-medium">
                    Minutes *
                  </label>
                  <select className="p-2 border-b border-zinc-200 block w-full text-sm text-zinc-100 placeholder:text-zinc-200 outline-[0px] bg-transparent">
                    <option value="" className="text-zinc-800">
                      Select
                    </option>
                    <option value="00" className="text-zinc-800">
                      00
                    </option>
                    <option value="15" className="text-zinc-800">
                      15
                    </option>
                    <option value="30" className="text-zinc-800">
                      30
                    </option>
                    <option value="45" className="text-zinc-800">
                      45
                    </option>
                  </select>
                </div>

                {/* AM/PM */}
                <div className="space-y-2">
                  <label className="text-white/80 text-sm font-medium">
                    AM/PM *
                  </label>
                  <select className="p-2 border-b border-zinc-200 block w-full text-sm text-zinc-100 placeholder:text-zinc-200 outline-[0px] bg-transparent">
                    <option value="" className="text-zinc-800">
                      Select
                    </option>
                    <option value="AM" className="text-zinc-800">
                      AM
                    </option>
                    <option value="PM" className="text-zinc-800">
                      PM
                    </option>
                  </select>
                </div>
              </div>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label className="text-white/80 text-sm font-medium">
                Message
              </label>
              <textarea
                placeholder="Enter your message..."
                rows={4}
                className="p-2 border-b border-zinc-200 block w-full text-sm text-zinc-100 placeholder:text-zinc-200 outline-[0px] bg-transparent resize-none"
              />
              <div className="flex justify-between items-center">
                <span className="text-white/60 text-xs">0 / 180</span>
                <span className="text-white/60 text-xs">Optional</span>
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

            {/* Proxy Terms */}
            <div className="space-y-2">
              {/* <label className="text-white/80 text-sm font-medium">
                Proxy Terms
              </label> */}
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <p className="text-white/60 text-sm text-center">
                  By booking this appointment, you agree to our terms and
                  conditions regarding consultation scheduling and data
                  processing.
                </p>
              </div>
            </div>

            <Button
              className={"w-full border border-zinc-600 mt-4"}
              size={"lg"}
            >
              BOOK APPOINTMENT <Send size={18} />
            </Button>

            <p className="text-white/60 text-xs text-center">
              Fields marked with * are required. We'll confirm your appointment
              via email within 2 hours.
            </p>
          </form>
        </div>
      </section>
    </div>
  );
};

export default page;
