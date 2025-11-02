"use client";
import { Button } from "@/components/ui/button";
import { useAxios } from "@/hooks/useAxios";
import { CheckCircle, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { AnimatePresence, motion } from "motion/react";

const AppointmentForm = () => {
  const axios = useAxios();

  const [booking, setBooking] = useState(false);
  const [messageLength, setMessageLength] = useState(0);
  const [confirmationModalOpen, setConfirmationModalOpen] = useState(false);

  const handleBookAppointment = async (e) => {
    e.preventDefault();
    try {
      setBooking(true);

      const form = e?.target;
      const name = form?.name?.value;
      const email = form?.email?.value;
      const phone = form?.phone?.value;
      const date = form?.date?.value;
      let hour = parseInt(form?.hour?.value);
      const minute = parseInt(form?.minute?.value);
      const ampm = form?.ampm?.value;
      const message = form?.message?.value;

      if (!name || !email)
        return toast.warning("Please fill up the required fields");

      const datetime = new Date(date);
      if (ampm === "PM" && hour !== 12) {
        hour += 12;
      } else if (ampm === "AM" && hour == 12) {
        hour = 0;
      }
      datetime.setHours(hour, minute, 0, 0);

      const data = { name, email, phone, datetime, message };

      const res = await axios.post("/appointment", data);

      if (res?.data?.ok) {
        form.reset();
        return setConfirmationModalOpen(true);
        // return toast.success("Appointment booked successfully!");
      } else {
        return toast.error(
          res?.data?.message ||
            "Failed to book an appointment, please try again"
        );
      }
    } catch (error) {
      toast.error(error?.message || "An error occured, please try again");
      console.log(error?.message);
      console.error(error);
    } finally {
      setBooking(false);
    }
  };

  return (
    <>
      <form
        onSubmit={handleBookAppointment}
        className="flex flex-col w-full gap-6"
      >
        {/* Your Name */}
        <div className="space-y-2">
          <label className="text-white/80 text-sm font-medium">
            Your Name *
          </label>
          <input
            type="text"
            placeholder="E.g. John"
            className="p-2 border-b border-zinc-200 block w-full text-sm text-zinc-100 placeholder:text-zinc-200 outline-[0px] bg-transparent"
            name="name"
            required
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
            name="email"
            required
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
            name="phone"
          />
        </div>

        {/* Date and Time Section */}
        <div className="space-y-4">
          {/* Date */}
          <div className="space-y-2">
            <label className="text-white/80 text-sm font-medium">Date *</label>
            <input
              type="date"
              className="p-2 border-b border-zinc-200 block w-full text-sm text-zinc-100 placeholder:text-zinc-200 outline-[0px] bg-transparent"
              name="date"
              required
            />
          </div>

          {/* Time Selection */}
          <div className="grid grid-cols-3 gap-4">
            {/* Time Hours */}
            <div className="space-y-2">
              <label className="text-white/80 text-sm font-medium">
                Time Hours *
              </label>
              <select
                className="p-2 border-b border-zinc-200 block w-full text-sm text-zinc-100 placeholder:text-zinc-200 outline-[0px] bg-transparent"
                name="hour"
                required
              >
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
              <select
                name="minute"
                required
                className="p-2 border-b border-zinc-200 block w-full text-sm text-zinc-100 placeholder:text-zinc-200 outline-[0px] bg-transparent"
              >
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
              <select
                name="ampm"
                required
                className="p-2 border-b border-zinc-200 block w-full text-sm text-zinc-100 placeholder:text-zinc-200 outline-[0px] bg-transparent"
              >
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
          <label className="text-white/80 text-sm font-medium">Message</label>
          <textarea
            name="message"
            placeholder="Leave a message for us if necessary..."
            rows={4}
            maxLength={500}
            onChange={(e) => setMessageLength(e?.target?.value?.length)}
            className="p-2 border-b border-zinc-200 block w-full text-sm text-zinc-100 placeholder:text-zinc-200 outline-[0px] bg-transparent resize-none"
          />
          <div className="flex justify-between items-center">
            <span className="text-white/60 text-xs">{messageLength} / 500</span>
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
              By booking this appointment, you agree to our terms and conditions
              regarding consultation scheduling and data processing.
            </p>
          </div>
        </div>

        <Button className={"w-full border border-zinc-600 mt-0"} size={"lg"}>
          {booking ? "Processing..." : "BOOK APPOINTMENT"} <Send size={18} />
        </Button>

        <p className="text-white/60 text-xs text-center">
          Fields marked with * are required. We'll confirm your appointment via
          email within 2 hours.
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
                Thank You
              </span>
              <p className="text-xs font-medium text-zinc-600 block text-center">
                Your appointment was booked successfully. We have sent a
                confirmation email to your given email address.
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
export default AppointmentForm;
