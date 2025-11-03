import ContactForm from "./ContactForm";
import {
  Facebook,
  Instagram,
  Linkedin,
  MessageSquare,
  Music2,
  Mail,
} from "lucide-react";
import Link from "next/link";

const ContactFormSection = () => {
  return (
    <div className="section bg-[#fff]">
      <section
        className="w-full max-w-6xl mx-auto rounded-2xl overflow-hidden p-6 grid grid-cols-1 md:grid-cols-5 items-end justify-between gap-6 shadow-xl"
        style={{
          background: "url(/bg-dark.jpg)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-full col-span-3 md:col-span-2 grid grid-cols-3 gap-4 justify-center items-center bg-white/10 backdrop-blur-[5px] rounded-2xl p-6 text-sm text-white">
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

        <div className="col-span-3 space-y-4 bg-white/10 rounded-2xl p-8">
          <div className="bg-gradient-to-br from-white/100 to-white/5 bg-clip-text space-y-4">
            {/* Badge */}
            <div className="bg-gradient-to-br from-white/5 via-white/20 border border-white/30 to-white/5 rounded-2xl p-px w-fit">
              <div className="flex flex-row items-center justify-center gap-2 bg-white/5 text-white/60 text-[12px] font-medium rounded-2xl px-4 py-[2px]">
                <span
                  className="block bg-gradient-to-br from-white/80 from-30% 
                      via-white/90 via-50% 
                      to-white/80 to-80% bg-clip-text"
                >
                  <span className="text-transparent flex items-center gap-2">
                    <Mail size={15} className="text-white/50" /> Send a Message
                  </span>
                </span>
              </div>
            </div>

            <h2
              className="text-[40px] lg:text-5xl 2xl:text-6xl block
              text-transparent"
            >
              Let's Talk
            </h2>
          </div>

          <ContactForm />
        </div>
      </section>
    </div>
  );
};
export default ContactFormSection;
