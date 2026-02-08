import {
  Facebook,
  Instagram,
  Linkedin,
  MessageSquare,
  Music2,
  AlertCircle,
} from "lucide-react";
import Link from "next/link";
import ComplaintForm from "./ComplaintForm";

export const metadata = {
  title: "Submit a Complaint",
};

const ComplaintPage = () => {
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
          <div>
            <span className="font-semibold block text-white/60">
              Support Line
            </span>
            <Link href={"tel:+4408009991257"}>0800 999 1257</Link>
          </div>

          <div className="md:col-span-2 flex flex-wrap items-center justify-end gap-2">
            {[
              {
                icon: Facebook,
                href: "https://facebook.com...",
                color: "hover:text-blue-800",
              },
              {
                icon: Linkedin,
                href: "https://linkedin.com...",
                color: "hover:text-sky-600",
              },
              {
                icon: Instagram,
                href: "https://instagram.com...",
                color: "hover:text-pink-600",
              },
              {
                icon: MessageSquare,
                href: "https://wa.me/...",
                color: "hover:text-green-600",
              },
            ].map((social, i) => (
              <Link
                key={i}
                href={social.href}
                target="_blank"
                className={`block aspect-square p-2 rounded-full bg-white/20 text-white/70 hover:bg-white/90 ${social.color} duration-200`}
              >
                <social.icon size={15} />
              </Link>
            ))}
          </div>
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
