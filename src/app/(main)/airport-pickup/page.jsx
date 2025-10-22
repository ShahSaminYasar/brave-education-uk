"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import SectionTitle from "@/components/ui/SectionTitle";
import { Textarea } from "@/components/ui/textarea";
import { Baby, Group, Handshake, Luggage } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  const input_container_style = "grid w-full max-w-lg items-center gap-1";
  const input_style = "bg-[#fff]";

  return (
    <main
      style={{
        background:
          "linear-gradient(to right, rgba(0,0,0,0.9), rgba(0,0,0,0.7), rgba(0,0,0,0.1)), url(/assets/images/airport-pickup.jpg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <motion.section
        initial={{ filter: "blur(5px)", scale: 0.98, opacity: 0.7 }}
        animate={{ filter: "blur(0px)", scale: 1, opacity: 1 }}
        transition={{ delay: 0.05, duration: 0.15, ease: "linear" }}
        className="pt-[140px] px-5 pb-20 flex flex-col-reverse justify-center items-center gap-8 md:grid md:grid-cols-2 md:gap-10 max-w-6xl mx-auto min-h-[65vh]"
      >
        <SectionTitle
          text={"Airport Pick-Up"}
          style={{
            fontSize: "50px",
            fontWeight: "800",
            color: "#fff",
          }}
          animate={false}
        />
      </motion.section>

      <div className="py-20 bg-white flex flex-col gap-20 items-center justify-center">
        <div className="w-full px-5">
          <section className="w-full max-w-6xl mx-auto flex flex-col gap-8">
            <SectionTitle
              text={"Who Can Use This Service?"}
              align="center"
              animate={false}
            />

            <div className="flex flex-row justify-center gap-10 flex-wrap">
              <div className="w-full max-w-[280px] rounded-2xl p-5 bg-gradient-to-br from-red-800 via-red-500 to-red-800 flex flex-col items-center justify-center gap-3 relative">
                <span className="text-[200px] leading-[100%] font-bold text-white/10 absolute top-0 left-0 z-0">
                  1
                </span>
                <Image
                  src={"/assets/icons/student.svg"}
                  width={200}
                  height={200}
                  alt="Classroom"
                  className="w-full max-w-[130px] mx-auto relative z-10"
                />
                <span className="block text-sm text-zinc-50 text-center font-medium w-full">
                  Students
                </span>
              </div>

              <div className="w-full max-w-[280px] rounded-2xl p-5 bg-gradient-to-br from-slate-800 via-slate-600 to-slate-800 flex flex-col items-center justify-center gap-3 relative">
                <span className="text-[200px] leading-[100%] font-bold text-white/10 absolute top-0 left-0 z-0">
                  2
                </span>
                <Image
                  src={"/assets/icons/building.svg"}
                  width={200}
                  height={200}
                  alt="Classroom"
                  className="w-full max-w-[130px] mx-auto relative z-10"
                />
                <span className="block text-sm text-zinc-50 text-center font-medium w-full">
                  Accommodation arranged, but none to receive
                </span>
              </div>

              <div className="w-full max-w-[280px] rounded-2xl p-5 bg-gradient-to-br from-red-800 via-red-500 to-red-800 flex flex-col items-center justify-center gap-3 relative">
                <span className="text-[200px] leading-[100%] font-bold text-white/10 absolute top-0 left-0 z-0">
                  3
                </span>
                <Image
                  src={"/assets/icons/plane.svg"}
                  width={200}
                  height={200}
                  alt="Classroom"
                  className="w-full max-w-[110px] mx-auto relative z-10"
                />
                <span className="block text-sm text-zinc-50 text-center font-medium w-full">
                  Airport pick-up or drop off
                </span>
              </div>
            </div>
          </section>
        </div>

        <div
          className="w-full px-5 py-20 text-white"
          style={{
            background:
              "linear-gradient(to bottom, rgba(20, 17, 53, 0.93), rgba(24, 22, 58, 0.93), rgba(34, 30, 82, 0.95)), url(/assets/images/airport-pickup.jpg)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          <section className="w-full max-w-6xl mx-auto flex flex-col gap-8">
            <SectionTitle
              text={"Service Details"}
              align="center"
              animate={false}
              style={{
                color: "#fff",
              }}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-start">
              <div className="flex flex-col items-start gap-5 p-5 rounded-xl bg-gradient-to-br from-white/10 via-white/20 to-white/10 backdrop-blur-sm border border-t-white/5 border-b-white/30 border-x-transparent">
                <h5 className="block w-full text-3xl font-semibold text-slate-200 pb-3 border-b border-zinc-300">
                  Airport Pickup & Drop-off
                </h5>

                <div className="w-full rounded-2xl p-5 shadow-xl bg-gradient-to-r from-white/10 via-white/30 to-white/10 flex flex-row items-center justify-start gap-4">
                  <Image
                    src={"/assets/icons/plane.svg"}
                    width={200}
                    height={200}
                    alt="Classroom"
                    className="w-full max-w-[60px] mx-auto"
                  />
                  <span className="block text-xl text-slate-200 text-center font-bold w-full">
                    Receive you at the airport
                  </span>
                </div>

                <div className="w-full rounded-2xl p-5 shadow-xl bg-gradient-to-r from-white/10 via-white/30 to-white/10 flex flex-row items-center justify-start gap-4">
                  <Image
                    src={"/assets/icons/building.svg"}
                    width={200}
                    height={200}
                    alt="Classroom"
                    className="w-full max-w-[60px] mx-auto"
                  />
                  <span className="block text-xl text-slate-200 text-center font-bold w-full">
                    Drop you safely at your accommodation
                  </span>
                </div>
              </div>

              <div className="flex flex-col items-start gap-5 p-5 rounded-xl bg-gradient-to-br from-white/10 via-white/20 to-white/10 backdrop-blur-sm border border-t-white/5 border-b-white/30 border-x-transparent">
                <h5 className="block w-full text-3xl font-semibold text-slate-200 pb-3 border-b border-zinc-300">
                  Standard Charge
                </h5>

                <ul className="list-disc pl-4">
                  <li className="mb-3">
                    <h6 className="text-sm md:text-lg font-semibold block text-left">
                      £120 (single person with maximum of 5 luggage)
                    </h6>
                  </li>
                </ul>

                <h5 className="block w-full text-3xl font-semibold text-slate-200 pb-3 border-b border-zinc-300">
                  Additional Charges
                </h5>

                <ul className="list-disc pl-4">
                  <li className="mb-3">
                    <h6 className="text-sm md:text-lg font-semibold block text-left">
                      Families/Couples with Children
                    </h6>
                    <p className="para">
                      An additional charge applies based on the number of
                      passengers and luggage.
                    </p>
                  </li>

                  <li className="mb-3">
                    <h6 className="text-sm md:text-lg font-semibold block text-left">
                      Outsite London Transfers
                    </h6>
                    <p className="para">
                      For destinations outside London, additional charges will
                      apply depending on distance and location.
                    </p>
                  </li>
                </ul>
              </div>

              {/* <Link
                href={"https://wa.me/+44747620040881"}
                target="_blank"
                className="w-fit text-nowrap flex flex-row items-center justify-center gap-0 rounded-[80px] p-2 bg-[#42ea60] text-slate-800 mt-5"
              >
                <span className="text-sm block text-center px-3 font-semibold">
                  +44 7476 2004 0881
                </span>
                <span className="bg-white w-fit aspect-square rounded-full block p-[8px]">
                  <Image
                    src={"/assets/icons/whatsapp.svg"}
                    width={20}
                    height={20}
                    alt="whatsapp"
                  />
                </span>
              </Link> */}
            </div>
          </section>
        </div>

        <div className="w-full px-5">
          <section className="w-full max-w-6xl mx-auto flex flex-col gap-8">
            <SectionTitle
              text={"Optional Add-ons"}
              align="center"
              animate={false}
              subtext={"Suggestions to add"}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-4xl mx-auto">
              <div className="flex flex-col items-center justify-center gap-3 p-5 rounded-lg border border-zinc-300">
                <Handshake size={50} className="text-secondary-foreground" />
                <h5 className="text-xl font-semibold text-primary block text-center">
                  Meet & Greet Service
                </h5>
                <p className="para block text-center">
                  Our team will wait at the arrivals area with a name and
                  picture on board for easy identification.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center gap-3 p-5 rounded-lg border border-zinc-300">
                <Luggage size={50} className="text-secondary-foreground" />
                <h5 className="text-xl font-semibold text-primary block text-center">
                  Assistance with Luggage
                </h5>
                <p className="para block text-center">
                  Help with luggage from the terminal to your vehicle and to
                  your accommodation entrance.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center gap-3 p-5 rounded-lg border border-zinc-300">
                <Group size={50} className="text-secondary-foreground" />
                <h5 className="text-xl font-semibold text-primary block text-center">
                  Group Transfers
                </h5>
                <p className="para block text-center">
                  Special rates for groups of 3 or more passengers travelling
                  together.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center gap-3 p-5 rounded-lg border border-zinc-300">
                <Baby size={50} className="text-secondary-foreground" />
                <h5 className="text-xl font-semibold text-primary block text-center">
                  Child Seats
                </h5>
                <p className="para block text-center">
                  Free or low cost child safety seats are available upon
                  request.
                </p>
              </div>
            </div>
          </section>
        </div>

        <div className="w-full px-5">
          <section className="w-full max-w-6xl mx-auto flex flex-col gap-8">
            <div>
              <SectionTitle
                text={"Reservation Form"}
                align="center"
                animate={false}
                subtext={"Book Your Airport Transfer"}
              />
              <p className="para max-w-md mx-auto block text-center mt-3 text-slate-200">
                Fill out the form below to book your airport transfer service.
                We'll confirm your booking via email or phone.
              </p>
            </div>

            <div className="rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/20">
              <Image
                src={"/assets/images/suv-airport.jpeg"}
                width={1000}
                height={1000}
                alt="SUV in Airport"
                className="w-full h-full object-cover col-span-1"
              />

              <div className="w-full px-3 py-20 col-span-2 flex justify-center min-h-[80vh] bg-secondary-foreground">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert("UNDER DEVELOPMENT!");
                  }}
                  className="w-full max-w-lg mx-auto flex flex-col items-start gap-5"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                    <div className={input_container_style}>
                      <Label
                        htmlFor="first_name"
                        className="text-slate-100 font-medium"
                      >
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
                      <Label
                        htmlFor="last_name"
                        className="text-slate-100 font-medium"
                      >
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
                      <Label
                        htmlFor="email"
                        className="text-slate-100 font-medium"
                      >
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
                      <Label
                        htmlFor="phone"
                        className="text-slate-100 font-medium"
                      >
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
                    <Label
                      htmlFor="flight_number"
                      className="text-slate-100 font-medium"
                    >
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
                    <Label
                      htmlFor="airport"
                      className="text-slate-100 font-medium"
                    >
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
                    <Label
                      htmlFor="destination"
                      className="text-slate-100 font-medium"
                    >
                      Destination Address *
                    </Label>
                    <Textarea
                      name="destination"
                      id="destination"
                      required
                      placeholder={
                        "Full accommodation address including postcode"
                      }
                      rows={3}
                      className={`${input_style} text-slate-800`}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                    <div className={input_container_style}>
                      <Label
                        htmlFor="passengers"
                        className="text-slate-100 font-medium"
                      >
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
                      <Label
                        htmlFor="luggage"
                        className="text-slate-100 font-medium"
                      >
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
                        I agree to the terms and conditions and understand that
                        additional charges may apply for services outside
                        standard offering.
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
                    We'll contact you within 24 hours to confirm your booking
                    and provide payment details.
                  </p>
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};
export default page;
