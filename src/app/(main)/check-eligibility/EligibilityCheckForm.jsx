"use client";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

const EligibilityCheckForm = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    return alert(
      "This form is under development, please check back later or contact our team for urgent/immediate help."
    );
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-full gap-6">
      {/* Your Name */}
      <div className="space-y-2">
        <label className="text-white/80 text-sm font-medium">Your Name *</label>
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
        {/* <div className="space-y-2">
                <label className="text-white/80 text-sm font-medium">
                  VRP Expiry Date *
                </label>
                <input
                  type="date"
                  className="p-2 border-b border-zinc-200 block w-full text-sm text-zinc-100 placeholder:text-zinc-200 outline-[0px] bg-transparent"
                />
              </div> */}

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

      <Button className={"w-full border border-zinc-600 mt-4"} size={"lg"}>
        SEND MESSAGE <Send size={18} />
      </Button>

      <p className="text-white/60 text-xs text-center">
        All fields marked with * are required. We'll contact you within 24 hours
        with your eligibility results.
      </p>
    </form>
  );
};
export default EligibilityCheckForm;
