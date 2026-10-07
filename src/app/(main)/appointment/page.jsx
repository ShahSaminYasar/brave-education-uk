import { Calendar } from "lucide-react";
// import AppointmentForm from "./AppointmentForm";
import CalBooking from "./CalBooking";
import ContactInfoRow from "@/components/ui/ContactInfoRow";
import { getContactSettings } from "@/lib/settings";
import { CONSULTATIONS } from "@/lib/immigration";

export const metadata = {
  title: "Appointment Booking",
};

const page = async ({ searchParams }) => {
  const [contact, { event }] = await Promise.all([
    getContactSettings(),
    searchParams,
  ]);
  const calEvent = CONSULTATIONS.some((c) => c.id === event) ? event : null;

  return (
    <div className="px-5 pb-0 pt-28 bg-[#fff]">
      <section
        className="w-full max-w-5xl mx-auto rounded-2xl overflow-hidden p-0 md:p-6 flex flex-col-reverse gap-5 md:gap-10 shadow-xl fade-up"
        style={{
          background: "url(/bg-dark.jpg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* <div className="w-full grid grid-cols-3 gap-4 justify-center items-center bg-white/10 rounded-2xl p-6 text-sm text-white">
          <ContactInfoRow contact={contact} />
        </div> */}

        <div className="w-full col-span-3 space-y-4 bg-white/10 rounded-2xl p-4 md:p-8">
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
              className="text-[40px] lg:text-5xl 2xl:text-6xl block
          text-transparent"
            >
              Book Appointment
            </h2>
            <p className="text-white/80 text-sm">
              Schedule your consultation with our education experts
            </p>
          </div>
          {/* Previous in-house form, kept as a backup (bookings now go through Cal.com) */}
          {/* <AppointmentForm /> */}
          <CalBooking event={calEvent} />
        </div>
      </section>
    </div>
  );
};

export default page;
