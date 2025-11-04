"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useAxios } from "@/hooks/useAxios";
import { CheckCircle } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

const ReservationForm = () => {
  const axios = useAxios();

  // States
  const [confirmationModalOpen, setConfirmationModalOpen] = useState(false);

  const input_container_style = "grid w-full max-w-lg items-center gap-1";
  const input_style = "bg-[#fff]";

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const form = new FormData(e?.target);

      const firstName = form?.get("first_name");
      const lastName = form?.get("last_name");
      const email = form?.get("email");
      const phone = form?.get("phone");
      const flightNumber = form?.get("flight_number");
      const arrivalDate = form?.get("arrival_date");
      const arrivalTime = form?.get("arrival_time");
      const airport = form?.get("airport");
      const destination = form?.get("destination");
      const passengerNumber = form?.get("passengers");
      const luggageNumber = form?.get("luggage_number");
      const specialRequirements = form?.get("special_requirements");

      const data = {
        firstName,
        lastName,
        email,
        phone,
        flightNumber,
        arrivalDate,
        arrivalTime,
        airport,
        destination,
        passengerNumber,
        luggageNumber,
        specialRequirements,
      };

      const res = await axios.post("/airport-pickup-reservation", data);

      if (res?.data?.ok) {
        e?.target?.reset();
        return setConfirmationModalOpen(true);
      } else {
        return toast.error(
          res?.data?.message ||
            "Failed to book an appointment, please try again"
        );
      }
    } catch (error) {
      console.error(error);
      return toast.error(
        error?.message ||
          "Unknown error occured, please try again or contact support"
      );
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg mx-auto flex flex-col items-start gap-5"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          <div className={input_container_style}>
            <Label htmlFor="first_name" className="text-slate-100 font-medium">
              First Name *
            </Label>
            <Input
              type="text"
              name="first_name"
              id="first_name"
              required
              placeholder={"Your first name"}
              className={`${input_style} text-slate-800`}
            />
          </div>

          <div className={input_container_style}>
            <Label htmlFor="last_name" className="text-slate-100 font-medium">
              Last Name *
            </Label>
            <Input
              type="text"
              name="last_name"
              id="last_name"
              required
              placeholder={"Your last name"}
              className={`${input_style} text-slate-800`}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          <div className={input_container_style}>
            <Label htmlFor="email" className="text-slate-100 font-medium">
              Email *
            </Label>
            <Input
              type="email"
              name="email"
              id="email"
              required
              placeholder={"your.email@example.com"}
              className={`${input_style} text-slate-800`}
            />
          </div>

          <div className={input_container_style}>
            <Label htmlFor="phone" className="text-slate-100 font-medium">
              Phone *
            </Label>
            <Input
              type="tel"
              name="phone"
              id="phone"
              required
              placeholder={"+44 1234 567890"}
              className={`${input_style} text-slate-800`}
            />
          </div>
        </div>

        <div className={input_container_style}>
          <Label htmlFor="flight_number" className="text-slate-100 font-medium">
            Flight Number *
          </Label>
          <Input
            type="text"
            name="flight_number"
            id="flight_number"
            required
            placeholder={"e.g., BA123"}
            className={`${input_style} text-slate-800`}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          <div className={input_container_style}>
            <Label
              htmlFor="arrival_date"
              className="text-slate-100 font-medium"
            >
              Arrival Date *
            </Label>
            <Input
              type="date"
              name="arrival_date"
              id="arrival_date"
              required
              className={`${input_style} text-slate-800`}
            />
          </div>

          <div className={input_container_style}>
            <Label
              htmlFor="arrival_time"
              className="text-slate-100 font-medium"
            >
              Arrival Time *
            </Label>
            <Input
              type="time"
              name="arrival_time"
              id="arrival_time"
              required
              className={`${input_style} text-slate-800`}
            />
          </div>
        </div>

        <div className={input_container_style}>
          <Label htmlFor="airport" className="text-slate-100 font-medium">
            Airport *
          </Label>
          <select
            name="airport"
            id="airport"
            required
            className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 text-slate-800"
          >
            <option value="">Select Airport</option>
            <option value="Heathrow Airport">Heathrow Airport (LHR)</option>
            <option value="Gatwick Airport">Gatwick Airport (LGW)</option>
            <option value="Stansted Airport">Stansted Airport (STN)</option>
            <option value="Luton Airport">Luton Airport (LTN)</option>
            <option value="London City Airport">
              London City Airport (LCY)
            </option>
            <option value="other">Other Airport</option>
          </select>
        </div>

        <div className={input_container_style}>
          <Label htmlFor="destination" className="text-slate-100 font-medium">
            Destination Address *
          </Label>
          <Textarea
            name="destination"
            id="destination"
            required
            placeholder={"Full accommodation address including postcode"}
            rows={3}
            className={`${input_style} text-slate-800`}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          <div className={input_container_style}>
            <Label htmlFor="passengers" className="text-slate-100 font-medium">
              Number of Passengers *
            </Label>
            <Input
              type="number"
              name="passengers"
              id="passengers"
              min="1"
              max="10"
              required
              placeholder={"0"}
              className={`${input_style} text-slate-800`}
            />
          </div>

          <div className={input_container_style}>
            <Label
              htmlFor="luggage_number"
              className="text-slate-100 font-medium"
            >
              Number of Luggage *
            </Label>
            <Input
              type="number"
              name="luggage_number"
              id="luggage"
              min="0"
              max="10"
              required
              placeholder={"0"}
              className={`${input_style} text-slate-800`}
            />
          </div>
        </div>

        <div className={input_container_style}>
          <Label
            htmlFor="special_requirements"
            className="text-slate-100 font-medium"
          >
            Special Requirements
          </Label>
          <Textarea
            name="special_requirements"
            id="special_requirements"
            placeholder={
              "Child seats, wheelchair assistance, extra stops, etc."
            }
            rows={3}
            className={`${input_style} text-slate-800`}
          />
        </div>

        <div className={input_container_style}>
          <div className="flex items-start gap-3">
            <Input
              type="checkbox"
              name="terms"
              id="terms"
              required
              className="w-4 h-4 mt-1 flex-shrink-0"
            />
            <Label
              htmlFor="terms"
              className="text-slate-200 text-sm leading-relaxed"
            >
              I agree to the terms and conditions and understand that additional
              charges may apply for services outside standard offering.
            </Label>
          </div>
        </div>

        <button
          type="submit"
          className="w-full max-w-lg bg-red-600 hover:bg-red-700 cursor-pointer text-white font-semibold py-3 px-6 rounded-md transition-colors duration-200 mt-4 shadow-lg"
        >
          Book Airport Transfer
        </button>

        <p className="text-xs text-slate-300 text-center w-full mt-2">
          We'll contact you within 24 hours to confirm your booking and provide
          payment details.
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
                Success
              </span>
              <p className="text-xs font-medium text-zinc-600 block text-center">
                Your airport pickup service has been successfully booked. A
                confirmation email has been sent to the email address you
                provided.
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
export default ReservationForm;
