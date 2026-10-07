import { AlertCircle } from "lucide-react";
import ComplaintForm from "./ComplaintForm";
import ContactInfoRow from "@/components/ui/ContactInfoRow";
import { getContactSettings } from "@/lib/settings";

export const metadata = {
  title: "Submit a Complaint",
};

const ComplaintPage = async () => {
  const contact = await getContactSettings();

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
        {/* Footer Info Bar */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 justify-center items-center bg-white/10 rounded-2xl p-6 text-sm text-white">
          <ContactInfoRow contact={contact} label="Support Line" />
        </div>

        {/* Form Container */}
        <div className="w-full col-span-3 space-y-4 bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
          <div className="bg-gradient-to-br from-white/100 to-white/5 bg-clip-text space-y-4 mb-7">
            {/* Badge */}
            <div className="bg-gradient-to-br from-white/5 via-white/20 border border-white/30 to-white/5 rounded-2xl p-px w-fit">
              <div className="flex flex-row items-center justify-center gap-2 bg-white/5 text-white/60 text-[12px] font-medium rounded-2xl px-4 py-[2px]">
                <span className="text-white/80 flex items-center gap-2">
                  <AlertCircle size={14} className="text-white/50" />
                  Resolution Center
                </span>
              </div>
            </div>

            <h2 className="text-[40px] lg:text-5xl font-bold block text-white">
              Submit Complaint
            </h2>
            <p className="text-white/80 text-sm max-w-xl">
              We value your feedback. Please provide details regarding your
              concern, and our management team will review it immediately.
            </p>
          </div>

          <ComplaintForm />
        </div>
      </section>
    </div>
  );
};

export default ComplaintPage;
