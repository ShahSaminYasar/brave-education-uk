"use client";
import { Button } from "@/components/ui/button";
import { useAxios } from "@/hooks/useAxios";
import { CheckCircle, Send } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

const VisaApplicationForm = () => {
  const axios = useAxios();

  const [processing, setProcessing] = useState(false);
  const [isMarried, setIsMarried] = useState(false);
  const [confirmationModalOpen, setConfirmationModalOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setProcessing(true);

      const form = new FormData(e?.target);

      const firstName = form?.get("first_name");
      const lastName = form?.get("last_name");
      const dob = form?.get("dob");
      const passportNumber = form?.get("passport_number");
      const passportIssueDate = form?.get("passport_issue_date");
      const passportExpiryDate = form?.get("passport_expiry_date");
      const issueAuthority = form?.get("issue_authority");
      const bdAddress = form?.get("bd_address");
      const nidNumber = form?.get("nid_number");
      const phone = form?.get("phone_number");
      const email = form?.get("email_address");
      const married = isMarried;
      const spouse = isMarried
        ? {
            name: form?.get("spouse_name"),
            dob: form?.get("spouse_dob"),
            passportNumber: form?.get("spouse_passport_number"),
            passportIssueDate: form?.get("spouse_passport_issue_date"),
            passportExpiryDate: form?.get("spouse_passport_expiry_date"),
          }
        : {};
      const courseName = form?.get("course_name");
      const courseStartDate = form?.get("course_start_date");
      const courseEndDate = form?.get("course_end_date");
      const sponsorNumber = form?.get("sponsor_number");
      const casCosNumber = form?.get("cas_cos_number");
      const bankName = form?.get("bank_name");
      const ukAddress = form?.get("uk_address");
      const parents = {
        mother: form?.get("mother_name"),
        motherDob: form?.get("mother_dob"),
        father: form?.get("father_name"),
        fatherDob: form?.get("father_dob"),
        nationality: form?.get("parents_nationality"),
        addressSame: form?.get("parents_address_same"),
      };
      const refusal = form?.get("refusal");
      const travelledAnyCountry = form?.get("travelled_any_country");

      const data = {
        firstName,
        lastName,
        dob,
        passportNumber,
        passportIssueDate,
        passportExpiryDate,
        issueAuthority,
        bdAddress,
        nidNumber,
        phone,
        email,
        married,
        spouse,
        course: {
          name: courseName,
          startDate: courseStartDate,
          endDate: courseEndDate,
        },
        sponsorNumber,
        casCosNumber,
        bankName,
        ukAddress,
        parents,
        refusal,
        travelledAnyCountry,
      };

      const res = await axios.post("/visa-application", data);

      if (res?.data?.ok) {
        // return toast.success("Application submitted successfully");
        return setConfirmationModalOpen(true);
      } else {
        return toast.error(
          res?.data?.message ||
            "Failed to submit visa application, please try again"
        );
      }
    } catch (error) {
      toast.error(error?.message || "An error occured, please try again");
      console.log(error?.message);
      console.error(error);
    } finally {
      setProcessing(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col w-full gap-6">
        {/* Personal Information Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* First Name */}
          <div className="space-y-2">
            <label
              htmlFor="first_name"
              className="text-white/80 text-sm font-medium"
            >
              First Name *
            </label>
            <input
              name="first_name"
              type="text"
              required
              placeholder="First Name"
              className="p-2 border-b border-zinc-200 block w-full text-sm text-zinc-100 placeholder:text-zinc-200 outline-[0px] bg-transparent"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="last_name"
              className="text-white/80 text-sm font-medium"
            >
              Last Name *
            </label>
            <input
              type="text"
              name="last_name"
              required
              placeholder="Last Name"
              className="p-2 border-b border-zinc-200 block w-full text-sm text-zinc-100 placeholder:text-zinc-200 outline-[0px] bg-transparent"
            />
          </div>

          {/* Date of Birth */}
          <div className="space-y-2">
            <label htmlFor="dob" className="text-white/80 text-sm font-medium">
              Date Of Birth *
            </label>
            <input
              type="date"
              name="dob"
              required
              className="p-2 border-b border-zinc-200 block w-full text-sm text-zinc-100 placeholder:text-zinc-200 outline-[0px] bg-transparent"
            />
          </div>

          {/* Passport Number */}
          <div className="space-y-2">
            <label
              htmlFor="passport_number"
              className="text-white/80 text-sm font-medium"
            >
              Passport Number *
            </label>
            <input
              type="text"
              name="passport_number"
              required
              placeholder="Passport Number"
              className="p-2 border-b border-zinc-200 block w-full text-sm text-zinc-100 placeholder:text-zinc-200 outline-[0px] bg-transparent"
            />
          </div>

          {/* Issue Date */}
          <div className="space-y-2">
            <label
              htmlFor="passport_issue_date"
              className="text-white/80 text-sm font-medium"
            >
              Issue date *
            </label>
            <input
              type="date"
              name="passport_issue_date"
              required
              className="p-2 border-b border-zinc-200 block w-full text-sm text-zinc-100 placeholder:text-zinc-200 outline-[0px] bg-transparent"
            />
          </div>

          {/* Expiry Date */}
          <div className="space-y-2">
            <label
              htmlFor="passport_expiry_date"
              className="text-white/80 text-sm font-medium"
            >
              Expiry date *
            </label>
            <input
              type="date"
              name="passport_expiry_date"
              required
              className="p-2 border-b border-zinc-200 block w-full text-sm text-zinc-100 placeholder:text-zinc-200 outline-[0px] bg-transparent"
            />
          </div>

          {/* Issue Authority */}
          <div className="space-y-2">
            <label
              htmlFor="issue_authority"
              className="text-white/80 text-sm font-medium"
            >
              Issue Authority *
            </label>
            <input
              type="text"
              placeholder="Issue Authority"
              name="issue_authority"
              required
              className="p-2 border-b border-zinc-200 block w-full text-sm text-zinc-100 placeholder:text-zinc-200 outline-[0px] bg-transparent"
            />
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Bangladeshi Address */}
          <div className="space-y-2">
            <label
              htmlFor="bd_address"
              className="text-white/80 text-sm font-medium"
            >
              Bangladeshi Address *
            </label>
            <input
              type="text"
              placeholder="Bangladeshi Address"
              name="bd_address"
              required
              className="p-2 border-b border-zinc-200 block w-full text-sm text-zinc-100 placeholder:text-zinc-200 outline-[0px] bg-transparent"
            />
          </div>

          {/* NID Number */}
          <div className="space-y-2">
            <label
              htmlFor="nid_number"
              className="text-white/80 text-sm font-medium"
            >
              NID Number *
            </label>
            <input
              type="text"
              placeholder="NID Number"
              required
              name="nid_number"
              className="p-2 border-b border-zinc-200 block w-full text-sm text-zinc-100 placeholder:text-zinc-200 outline-[0px] bg-transparent"
            />
          </div>

          {/* Phone Number */}
          <div className="space-y-2">
            <label
              htmlFor="phone_number"
              className="text-white/80 text-sm font-medium"
            >
              Phone Number *
            </label>
            <input
              type="tel"
              placeholder="E.g. +1 3004005000"
              name="phone_number"
              required
              className="p-2 border-b border-zinc-200 block w-full text-sm text-zinc-100 placeholder:text-zinc-200 outline-[0px] bg-transparent"
            />
          </div>

          {/* Email Address */}
          <div className="space-y-2">
            <label
              htmlFor="email_address"
              className="text-white/80 text-sm font-medium"
            >
              Email Address *
            </label>
            <input
              type="email"
              placeholder="E.g. john@doe.com"
              name="email_address"
              required
              className="p-2 border-b border-zinc-200 block w-full text-sm text-zinc-100 placeholder:text-zinc-200 outline-[0px] bg-transparent"
            />
          </div>
        </div>

        {/* Marital Status */}
        <div className="space-y-2">
          <label
            htmlFor="marital_status"
            className="text-white/80 text-sm font-medium"
          >
            Marital Status *
          </label>
          <div className="flex gap-6">
            <label className="flex items-center gap-2 text-white/80 text-sm">
              <input
                type="radio"
                name="marital_status"
                value="single"
                required
                className="w-4 h-4 accent-blue-800"
                onChange={() => setIsMarried(false)}
              />
              Single
            </label>
            <label className="flex items-center gap-2 text-white/80 text-sm">
              <input
                type="radio"
                name="marital_status"
                value="married"
                required
                className="w-4 h-4 accent-blue-800"
                onChange={() => setIsMarried(true)}
              />
              Married
            </label>
          </div>
        </div>

        {/* Spuse Information */}
        {isMarried && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/*  Spouse Name */}
            <div className="space-y-2">
              <label
                htmlFor="spouse_name"
                className="text-white/80 text-sm font-medium"
              >
                Name (Spouse) *
              </label>
              <input
                type="text"
                placeholder="Spouse's Name"
                name="spouse_name"
                required
                className="p-2 border-b border-zinc-200 block w-full text-sm text-zinc-100 placeholder:text-zinc-200 outline-[0px] bg-transparent"
              />
            </div>

            {/* Date of Birth */}
            <div className="space-y-2">
              <label
                htmlFor="spouse_dob"
                className="text-white/80 text-sm font-medium"
              >
                Date Of Birth (Spouse) *
              </label>
              <input
                type="date"
                name="spouse_dob"
                required
                className="p-2 border-b border-zinc-200 block w-full text-sm text-zinc-100 placeholder:text-zinc-200 outline-[0px] bg-transparent"
              />
            </div>

            {/* Passport Number */}
            <div className="col-span-2 space-y-2">
              <label
                htmlFor="spouse_passport_number"
                className="text-white/80 text-sm font-medium"
              >
                Passport Number (Spouse)
              </label>
              <input
                type="text"
                name="spouse_passport_number"
                placeholder="Spouse's Passport Number"
                className="p-2 border-b border-zinc-200 block w-full text-sm text-zinc-100 placeholder:text-zinc-200 outline-[0px] bg-transparent"
              />
            </div>

            {/* Issue Date */}
            <div className="space-y-2">
              <label
                htmlFor="issue_date"
                className="text-white/80 text-sm font-medium"
              >
                Issue date (Spouse)
              </label>
              <input
                type="date"
                name="spouse_passport_issue_date"
                className="p-2 border-b border-zinc-200 block w-full text-sm text-zinc-100 placeholder:text-zinc-200 outline-[0px] bg-transparent"
              />
            </div>

            {/* Expiry Date */}
            <div className="space-y-2">
              <label
                htmlFor="expiry_date"
                className="text-white/80 text-sm font-medium"
              >
                Expiry date (Spouse)
              </label>
              <input
                type="date"
                name="spouse_passport_expiry_date"
                className="p-2 border-b border-zinc-200 block w-full text-sm text-zinc-100 placeholder:text-zinc-200 outline-[0px] bg-transparent"
              />
            </div>
          </div>
        )}

        {/* Course Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6">
          {/* Course Name */}
          <div className="md:col-span-2 space-y-2">
            <label
              htmlFor="course_name"
              className="text-white/80 text-sm font-medium"
            >
              Course Name *
            </label>
            <input
              type="text"
              placeholder="Course Name"
              name="course_name"
              required
              className="p-2 border-b border-zinc-200 block w-full text-sm text-zinc-100 placeholder:text-zinc-200 outline-[0px] bg-transparent"
            />
          </div>

          {/* Course Start Date */}
          <div className="space-y-2">
            <label
              htmlFor="course_start_date"
              className="text-white/80 text-sm font-medium"
            >
              Course start date *
            </label>
            <input
              type="date"
              name="course_start_date"
              required
              className="p-2 border-b border-zinc-200 block w-full text-sm text-zinc-100 placeholder:text-zinc-200 outline-[0px] bg-transparent"
            />
          </div>

          {/* Course End Date */}
          <div className="space-y-2">
            <label
              htmlFor="course_end_date"
              className="text-white/80 text-sm font-medium"
            >
              Course end date *
            </label>
            <input
              type="date"
              name="course_end_date"
              required
              className="p-2 border-b border-zinc-200 block w-full text-sm text-zinc-100 placeholder:text-zinc-200 outline-[0px] bg-transparent"
            />
          </div>
        </div>

        {/* Visa & Sponsor Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Sponsor No */}
          <div className="space-y-2">
            <label
              htmlFor="sponsor_number"
              className="text-white/80 text-sm font-medium"
            >
              Sponsor Number *
            </label>
            <input
              type="text"
              placeholder="Sponsor Number"
              name="sponsor_number"
              required
              className="p-2 border-b border-zinc-200 block w-full text-sm text-zinc-100 placeholder:text-zinc-200 outline-[0px] bg-transparent"
            />
          </div>

          {/* CAS/COS No */}
          <div className="space-y-2">
            <label
              htmlFor="cas_cos_number"
              className="text-white/80 text-sm font-medium"
            >
              CAS/COS No *
            </label>
            <input
              type="text"
              placeholder="CAS/COS No"
              name="cas_cos_number"
              required
              className="p-2 border-b border-zinc-200 block w-full text-sm text-zinc-100 placeholder:text-zinc-200 outline-[0px] bg-transparent"
            />
          </div>

          {/* Bank Name */}
          <div className="space-y-2">
            <label
              htmlFor="bank_name"
              className="text-white/80 text-sm font-medium"
            >
              Bank Name *
            </label>
            <input
              type="text"
              placeholder="Bank Name"
              name="bank_name"
              required
              className="p-2 border-b border-zinc-200 block w-full text-sm text-zinc-100 placeholder:text-zinc-200 outline-[0px] bg-transparent"
            />
          </div>

          {/* Your UK Address */}
          <div className="space-y-2">
            <label
              htmlFor="uk_address"
              className="text-white/80 text-sm font-medium"
            >
              Your UK address *
            </label>
            <input
              type="text"
              placeholder="Your UK address"
              required
              name="uk_address"
              className="p-2 border-b border-zinc-200 block w-full text-sm text-zinc-100 placeholder:text-zinc-200 outline-[0px] bg-transparent"
            />
          </div>
        </div>

        {/* Parents Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mother's Name */}
          <div className="space-y-2">
            <label
              htmlFor="mother_name"
              className="text-white/80 text-sm font-medium"
            >
              Mother's Name *
            </label>
            <input
              type="text"
              placeholder="Mother's Name"
              name="mother_name"
              required
              className="p-2 border-b border-zinc-200 block w-full text-sm text-zinc-100 placeholder:text-zinc-200 outline-[0px] bg-transparent"
            />
          </div>

          {/* Mother's Date of Birth */}
          <div className="space-y-2">
            <label
              htmlFor="mother_dob"
              className="text-white/80 text-sm font-medium"
            >
              Mother's date of birth *
            </label>
            <input
              type="date"
              name="mother_dob"
              required
              className="p-2 border-b border-zinc-200 block w-full text-sm text-zinc-100 placeholder:text-zinc-200 outline-[0px] bg-transparent"
            />
          </div>

          {/* Father's Name */}
          <div className="space-y-2">
            <label
              htmlFor="father_name"
              className="text-white/80 text-sm font-medium"
            >
              Father's Name *
            </label>
            <input
              type="text"
              placeholder="Father's Name"
              name="father_name"
              required
              className="p-2 border-b border-zinc-200 block w-full text-sm text-zinc-100 placeholder:text-zinc-200 outline-[0px] bg-transparent"
            />
          </div>

          {/* Father's Date of Birth */}
          <div className="space-y-2">
            <label
              htmlFor="father_dob"
              className="text-white/80 text-sm font-medium"
            >
              Father's date of birth *
            </label>
            <input
              type="date"
              name="father_dob"
              required
              className="p-2 border-b border-zinc-200 block w-full text-sm text-zinc-100 placeholder:text-zinc-200 outline-[0px] bg-transparent"
            />
          </div>
        </div>

        {/* Additional Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Parent's Nationality */}
          <div className="space-y-2">
            <label
              htmlFor="parents_nationality"
              className="text-white/80 text-sm font-medium"
            >
              Parent's nationality *
            </label>
            <input
              type="text"
              placeholder="Parent's nationality"
              name="parents_nationality"
              required
              className="p-2 border-b border-zinc-200 block w-full text-sm text-zinc-100 placeholder:text-zinc-200 outline-[0px] bg-transparent"
            />
          </div>

          {/* Is their address the same? */}
          <div className="space-y-2">
            <label
              htmlFor="parents_address_same"
              className="text-white/80 text-sm font-medium"
            >
              Is their address the same?
            </label>
            <select
              name="parents_address_same"
              className="p-2 border-b border-zinc-200 block w-full text-sm text-zinc-100 placeholder:text-zinc-200 outline-[0px] bg-transparent"
            >
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
            <label
              htmlFor="refusal"
              className="text-white/80 text-sm font-medium"
            >
              Do you have any refusal?
            </label>
            <select
              name="refusal"
              className="p-2 border-b border-zinc-200 block w-full text-sm text-zinc-100 placeholder:text-zinc-200 outline-[0px] bg-transparent"
            >
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
            <label
              htmlFor="travelled_any_country"
              className="text-white/80 text-sm font-medium"
            >
              Have you travelled to any countries? *
            </label>
            <select
              name="travelled_any_country"
              required
              className="p-2 border-b border-zinc-200 block w-full text-sm text-zinc-100 placeholder:text-zinc-200 outline-[0px] bg-transparent"
            >
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

      <AnimatePresence>
        {confirmationModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="w-full h-full fixed top-0 left-0 z-[70] bottom-0 right-0 bg-black/30 backdrop-blur-[3px] flex items-center justify-center p-8 font-montserrat"
          >
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, type: "spring" }}
              className="w-full max-w-md rounded-xl bg-white shadow-lg p-5 flex flex-col items-center justify-center gap-4"
            >
              <CheckCircle size={50} className="text-green-600" />
              <span className="text-3xl text-green-600 font-semibold font-josefin-sans block text-center -mt-3">
                Success!
              </span>
              <p className="text-xs font-medium text-zinc-600 block text-center">
                Your visa application was submitted successfully. We have sent
                you an email regarding this and our team will get in touch with
                you as soon as possible.
              </p>
              <Button
                variant={"default"}
                className={"w-[120px]"}
                onClick={() => setConfirmationModalOpen(false)}
              >
                Okay
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
export default VisaApplicationForm;
