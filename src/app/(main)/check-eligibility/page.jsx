import {
  CheckCircle,
  Facebook,
  Instagram,
  Linkedin,
  MessageSquare,
  Music2,
} from "lucide-react";
import Link from "next/link";
import EligibilityCheckForm from "./EligibilityCheckForm";

export const metadata = {
  title: "Eligibility Check",
};

const page = () => {
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
        <div className="w-full grid grid-cols-3 gap-4 justify-center items-center bg-white/10 rounded-2xl p-6 text-sm text-white">
          <div>
            <span className="font-semibold block">Phone Number</span>
            <Link href={"tel:+4408009991257"}>0800 999 1257</Link>
          </div>

          <div className="col-span-2 flex flex-wrap items-center justify-end gap-2">
            <Link
              href={"https://www.facebook.com/braveeduuk/"}
              target="_blank"
              className="block aspect-square p-2 rounded-full bg-white/20 text-white/70 hover:bg-white/90 hover:text-blue-800 duration-200"
            >
              <Facebook size={15} />
            </Link>
            <Link
              href={"https://uk.linkedin.com/company/braveedu"}
              target="_blank"
              className="block aspect-square p-2 rounded-full bg-white/20 text-white/70 hover:bg-white/90 hover:text-sky-600 duration-200"
            >
              <Linkedin size={15} />
            </Link>
            <Link
              href={"https://www.instagram.com/braveeducationuk/"}
              target="_blank"
              className="block aspect-square p-2 rounded-full bg-white/20 text-white/70 hover:bg-white/90 hover:text-pink-600 duration-200"
            >
              <Instagram size={15} />
            </Link>
            <Link
              href={"https://wa.me/+447862042900"}
              target="_blank"
              className="block aspect-square p-2 rounded-full bg-white/20 text-white/70 hover:bg-white/90 hover:text-green-600 duration-200"
            >
              <MessageSquare size={15} />
            </Link>
            <Link
              href={"https://www.facebook.com/braveeduuk/"}
              target="_blank"
              className="block aspect-square p-2 rounded-full bg-white/20 text-white/70 hover:bg-white/90 hover:text-slate-800 duration-200"
            >
              <Music2 size={15} />
            </Link>
          </div>
        </div>

        <div className="w-full col-span-3 space-y-4 bg-white/10 rounded-2xl p-8">
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
                    <CheckCircle size={15} className="text-white/50" />
                    Check Eligibility
                  </span>
                </span>
              </div>
            </div>

            <h2
              className="text-[40px] lg:text-5xl 2xl:text-6xl block
          text-transparent"
            >
              Check Your Eligibility
            </h2>
            <p className="text-white/80 text-sm">
              Complete the form below to verify your eligibility for our
              programs
            </p>
          </div>

          <EligibilityCheckForm />
        </div>
      </section>
    </div>
  );
};
export default page;
