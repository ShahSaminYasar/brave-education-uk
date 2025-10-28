"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const ReservationForm = () => {
  const input_container_style = "grid w-full max-w-lg items-center gap-1";
  const input_style = "bg-[#fff]";

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert("UNDER DEVELOPMENT!");
      }}
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
          <Label htmlFor="arrival_date" className="text-slate-100 font-medium">
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
          <Label htmlFor="arrival_time" className="text-slate-100 font-medium">
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
          <option value="LHR">Heathrow Airport (LHR)</option>
          <option value="LGW">Gatwick Airport (LGW)</option>
          <option value="STN">Stansted Airport (STN)</option>
          <option value="LTN">Luton Airport (LTN)</option>
          <option value="LCY">London City Airport (LCY)</option>
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
            placeholder={"1"}
            className={`${input_style} text-slate-800`}
          />
        </div>

        <div className={input_container_style}>
          <Label htmlFor="luggage" className="text-slate-100 font-medium">
            Number of Luggage *
          </Label>
          <Input
            type="number"
            name="luggage"
            id="luggage"
            min="0"
            max="10"
            required
            placeholder={"2"}
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
          placeholder={"Child seats, wheelchair assistance, extra stops, etc."}
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
        className="w-full max-w-lg bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-md transition-colors duration-200 mt-4 shadow-lg"
      >
        Book Airport Transfer
      </button>

      <p className="text-xs text-slate-300 text-center w-full mt-2">
        We'll contact you within 24 hours to confirm your booking and provide
        payment details.
      </p>
    </form>
  );
};
export default ReservationForm;
