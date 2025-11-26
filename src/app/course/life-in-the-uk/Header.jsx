"use client";
import { ArrowUpRight, Home } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import OfferTopBar from "@/components/offer/OfferTopBar";

const Header = () => {
  const { scrollY } = useScroll();
  const pathname = usePathname();

  // const [scrollDirection, setScrollDirection] = useState("down");
  const [headerVisible, setHeaderVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [topped, setTopped] = useState(true);

  useMotionValueEvent(scrollY, "change", (current) => {
    if (mobileMenuOpen) return;

    const previous = scrollY.getPrevious();
    if (previous === null || previous === undefined) return;

    const diff = current - previous;

    if (diff > 0 && current > 400) {
      setHeaderVisible(true);
    } else if (diff < 0 || current <= 100) {
      setHeaderVisible(true);
    }

    if (current <= 450) {
      if (!topped) {
        setTopped(true);
      }
    } else {
      if (topped) {
        setTopped(false);
      }
    }
  });

  const navLinkStyle = (path) => {
    return `text-sm font-medium font-montserrat hover:text-primary flex items-center flex-row gap-2 ${
      pathname?.startsWith(path) ? "text-primary" : " text-slate-600"
    }`;
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: headerVisible ? 1 : 0, y: headerVisible ? 0 : -20 }}
      transition={{ type: "keyframes", duration: 0.3 }}
      className={`fixed top-0 z-50 left-1/2 -translate-x-1/2 w-full shadow-lg shadow-black/5 backdrop-blur-sm bg-white/95 py-0 ${
        headerVisible ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      <OfferTopBar />

      {/* Large Screen Menu */}
      <div
        className={`w-full h-[70px] max-w-6xl mx-auto px-5 flex justify-center items-center gap-4 md:gap-8 transition-all duration-300 relative`}
      >
        <Link
          href={"/"}
          className="w-fit rounded-md bg-slate-100 p-2 text-[10px] text-slate-800 font-semibold font-montserrat hidden md:flex items-center gap-1 absolute top-1/2 left-5 -translate-y-1/2"
        >
          <Home size={12} /> Home
        </Link>

        <Link href="/">
          <Image
            src={"/logo.svg"}
            width={400}
            height={400}
            alt="Brave Education"
            className="w-full max-w-[160px] mx-auto"
            priority
          />
        </Link>

        {/* <div className="flex flex-row items-center justify-end gap-3 md:gap-5">
          <Link href={"/appointment"}>
            <Button className={"hidden md:flex"}>
              Consult for free <ArrowUpRight />
            </Button>
          </Link>
          <Link href={"/appointment"}>
            <Button className="flex md:hidden" size={"sm"}>
              Consult free <ArrowUpRight />
            </Button>
          </Link>
        </div> */}
      </div>
    </motion.header>
  );
};
export default Header;
