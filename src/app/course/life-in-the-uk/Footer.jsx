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
    <footer className="bg-[#221e52] bg-[radial-gradient(200%_115%_at_50%_0%,rgba(255,255,255,0)_20%,rgba(44,31,187,1)_100%)] -mb-10 min-h-fit pt-10 flex justify-end flex-col relative">
      <div className="px-5 pt-5 pb-20 justify-center w-full flex flex-col items-center gap-5">
        <Image
          src={"/logo-white.svg"}
          width={500}
          height={500}
          alt="Brave Education Logo"
          className="w-full max-w-[300px]"
        />

        {/* <p className="text-sm font-normal text-zinc-200 block text-center w-[300px]">
          Our goal is to support students aspiring to pursue higher education.
        </p> */}

        {/* <p className="text-sm font-medium text-zinc-300 block text-left w-full max-w-[350px]">
          All Rights Reserved &copy; 2025 Brave Education UK Ltd (Company No:
          14672260)
        </p> */}
      </div>

      <Image
        src={"/footer_name.png"}
        width={1405}
        height={275}
        className="w-full mix-blend-overlay opacity-30"
        alt="Brave Education UK"
      />

      <div className="w-full py-1 px-3 flex flex-row flex-wrap gap-0 text-[10px] text-[#27117e] items-center justify-center font-normal bg-gradient-to-b from-transparent to-[#09002b] to-100% pt-[90px] sm:pt-[220px] absolute bottom-0 left-0 z-10">
        <span className="block w-fit text-center font-medium font-poppins">
          Developed by{" "}
          <Link
            href={"https://shahsaminyasar.vercel.app"}
            target="_blank"
            className="font-bold font-satisfy"
          >
            Shah Samin Yasar
          </Link>{" "}
          &{" "}
          <Link
            href={"https://techtalk2.com/"}
            target="_blank"
            className="font-bold font-satisfy"
          >
            Tech Talk 2
          </Link>
        </span>

        <span className="w-2 h-2 border-r border-[#27117e] mr-2 hidden sm:block"></span>

        <span className="block w-fit text-center font-medium font-poppins">
          Copyright {new Date().getFullYear()} &copy; BRAVE EDUCATION UK LTD
        </span>
      </div>
    </footer>
  );
};
export default Footer;
