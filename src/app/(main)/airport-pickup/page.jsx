import SectionTitle from "@/components/ui/SectionTitle";
import { Baby, Group, Handshake, Luggage } from "lucide-react";
import * as motion from "motion/react-client";
import Image from "next/image";
import ReservationForm from "./ReservationForm";

export const metadata = {
  title: "Student Airport Pick-Up Service",
  description:
    "Ensure a safe, reliable, and welcoming arrival with Brave Education UK's dedicated airport pick-up service for international students arriving in the UK.",
  keywords: [
    "Student airport pickup",
    "UK airport transfer",
    "Heathrow student pickup",
    "Gatwick airport transfer",
    "international student arrival service",
  ],
  robots: "index, follow",
};

const page = () => {
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
      {/* Title Section */}
      <motion.section
        initial={{ filter: "blur(5px)", scale: 0.98, opacity: 0.7 }}
        animate={{ filter: "blur(0px)", scale: 1, opacity: 1 }}
        transition={{ delay: 0.05, duration: 0.15, ease: "linear" }}
        className="pt-[140px] px-5 pb-20 flex flex-col-reverse justify-center items-center gap-8 md:grid md:grid-cols-2 md:gap-10 max-w-6xl mx-auto min-h-[65vh]"
      >
        <SectionTitle
          text={"Airport Pick-Up"}
          style={{
            color: "#fff",
          }}
          animate={false}
        />
      </motion.section>

      <div className="py-20 bg-white flex flex-col gap-20 items-center justify-center">
        {/* Who Can Use This Service */}
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

        {/* Service Details */}
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
                href={"https://wa.me/+447862042900"}
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

        {/* Optional Add-ons */}
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

        {/* Reservation Form */}
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

            <div
              className="rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/20"
              style={{
                backgroundImage: "url(/assets/images/suv-airport.jpeg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed",
              }}
            >
              {/* <Image
                src={"/assets/images/suv-airport.jpeg"}
                width={1000}
                height={1000}
                alt="SUV in Airport"
                className="w-full h-full object-cover col-span-1"
              /> */}
              <div className="w-full h-full min-h-[200px] col-span-1"></div>

              <div
                className="w-full p-5 col-span-2 bg-blue-900/60 backdrop-blur-sm"
                // style={{
                //   backgroundImage: "url(/bg-dark.jpg)",
                //   backgroundSize: "cover",
                //   backgroundPosition: "80% 50%",
                //   backgroundRepeat: "no-repeat",
                //   backgroundAttachment: "fixed",
                // }}
              >
                <div className="w-full px-3 py-20 bg-white/20 rounded-xl flex justify-center min-h-[80vh]">
                  <ReservationForm />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};
export default page;
