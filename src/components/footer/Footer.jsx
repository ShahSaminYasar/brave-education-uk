"use client";
import {
  Facebook,
  Instagram,
  Linkedin,
  MapPin,
  Megaphone,
  MessageSquare,
  Music2,
  Phone,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import SectionTitle from "../ui/SectionTitle";
import { motion } from "motion/react";

const Footer = () => {
  const links1 = [
    {
      link: "/about",
      name: "About",
    },
    {
      link: "/courses",
      name: "Courses",
    },
    {
      link: "/services",
      name: "Services",
    },
    {
      link: "/airport-pickup",
      name: "Pickup",
    },
  ];

  const links2 = [
    {
      link: "/privacy-policy",
      name: "Privacy Policy",
    },
    {
      link: "/terms-and-conditions",
      name: "Terms & Conditions",
    },
    {
      link: "/faq",
      name: "FAQ",
    },
    {
      link: "/contact",
      name: "Contact",
    },
  ];

  return (
    <footer className="bg-[#221e52] bg-[radial-gradient(200%_115%_at_50%_0%,rgba(255,255,255,0)_20%,rgba(44,31,187,1)_100%)] -mb-10 min-h-screen flex justify-end flex-col">
      <section
        className="px-5 pb-[80px] pt-[200px] w-full bg-white"
        style={{
          background:
            "linear-gradient(182deg,rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 23%, rgba(0, 0, 0, 0.45) 23.3%, rgba(0, 0, 0, 0) 75%)",
        }}
      >
        <div className="flex flex-col max-w-6xl mx-auto items-center justify-center gap-6">
          <div className="bg-gradient-to-b from-white/30 to-white/5 rounded-2xl p-px">
            <div className="flex flex-row items-center justify-center gap-2 bg-[#2a305e] text-white/90 text-xs font-medium rounded-2xl px-4 py-1">
              <Megaphone size={13} className="text-pink-600/90" />
              <span
                className="block bg-gradient-to-br from-orange-500 from-30% 
            via-pink-600 via-50% 
            to-red-400 to-80% bg-clip-text"
              >
                <span className="text-transparent">Get a quote</span>
              </span>
            </div>
          </div>

          <div className="block w-fit mx-auto bg-gradient-to-r from-white/100 via-white/80 to-white/40 bg-clip-text">
            <h4 className="text-transparent text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl block font-montserrat font-semibold max-w-md mx-auto text-center">
              Thinking of Studying Abroad? Let's Connect!
            </h4>
          </div>

          <p className="para block max-w-md mx-auto text-center">
            From applications and admissions to accommodation and visa support,
            we take care of everything. Reach out today and let’s make your
            dreams come true.
          </p>

          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{
              type: "spring",
              duration: 0.1,
              damping: 10,
              stiffness: 400,
            }}
            className="hover:shadow-2xl"
          >
            <Link
              href={"https://wa.me/+44747620040881"}
              target="_blank"
              className="w-fit text-nowrap flex flex-row items-center justify-center gap-0 rounded-[80px] p-2 bg-[#42ea60] text-slate-800"
            >
              <span className="text-sm block text-center px-3 font-medium">
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
            </Link>
          </motion.div>
        </div>
      </section>

      <div className="section max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10 items-start text-white">
        {/* Col 1 */}
        <div className="col-span-2 flex flex-col items-start gap-5">
          <Image
            src={"/logo-white.svg"}
            width={500}
            height={500}
            alt="Brave Education Logo"
            className="w-full max-w-[300px]"
          />

          {/* 
          <p className="text-sm font-normal text-zinc-200 block text-left w-[300px]">
            Our goal is to support students aspiring to pursue higher education.
          </p> */}

          <p className="text-sm font-medium text-zinc-300 block text-left w-full max-w-[350px]">
            All Rights Reserved &copy; 2025 Brave Education UK Ltd (Company No:
            14672260)
          </p>
        </div>

        {/* Col 2 */}
        <div className="flex flex-col gap-3 items-start">
          <span className="footer-title">Useful Links</span>

          {links1?.map((link) => (
            <Link
              key={link?.link}
              href={link?.link}
              className="capitalize text-sm font-normal text-zinc-200 hover:text-primary"
            >
              {link?.name}
            </Link>
          ))}
        </div>

        {/* Col 3 */}
        <div className="flex flex-col gap-3 items-start">
          <span className="footer-title">Support</span>

          {links2?.map((link) => (
            <Link
              key={link?.link}
              href={link?.link}
              className="capitalize text-sm font-normal text-zinc-200 hover:text-primary"
            >
              {link?.name}
            </Link>
          ))}
        </div>

        {/* Col 4 */}
        <div className="flex flex-col gap-3 items-start">
          <span className="footer-title">Find Us</span>

          <Link
            href={
              "https://www.google.com/maps/place/Brave+Education+UK/@51.5178347,-0.0658194,469m/data=!3m2!1e3!4b1!4m6!3m5!1s0x852cf67b26900f31:0x52189509f2ef9fc2!8m2!3d51.5178347!4d-0.0658194!16s%2Fg%2F11xryq1ftb?entry=ttu&g_ep=EgoyMDI1MTAxNC4wIKXMDSoASAFQAw%3D%3D"
            }
            target="_blank"
            className="text-sm font-normal text-zinc-200 hover:text-primary flex gap-2 items-start"
          >
            <MapPin size={30} /> 129 Whitechapel Road (Opposite to East London
            Mosque)
          </Link>

          <Link
            href={"tel:+08009991257"}
            target="_blank"
            className="text-sm font-normal text-zinc-200 hover:text-primary flex gap-2 items-center"
          >
            <Phone size={15} /> 0800 999 1257
          </Link>

          <div className="flex flex-wrap items-center gap-2 mt-3">
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
              href={"https://wa.me/+44747620040881"}
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
      </div>

      <Image
        src={"/footer_name.png"}
        width={1405}
        height={275}
        className="w-full mix-blend-overlay opacity-30"
        alt="Brave Education UK"
      />
    </footer>
  );
};
export default Footer;
