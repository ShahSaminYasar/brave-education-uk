"use client";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { useState } from "react";

const VisaApplicationForm = () => {
  const [processing, setProcessing] = useState(false);

  return (
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
        disabled={processing}
        className={"w-full border border-zinc-600 mt-4 disabled:opacity-50"}
        size={"lg"}
      >
        {processing ? "Processing..." : "Apply"} <Send size={18} />
      </Button>

      <p className="text-white/60 text-xs text-center">
        All fields marked with * are required for visa processing.
      </p>
    </form>
  );
};
export default VisaApplicationForm;
