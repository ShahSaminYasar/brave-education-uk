"use client";
import {
  ArrowUpRight,
  BookCopy,
  ChevronDown,
  ClipboardClock,
  FileUser,
  Folders,
  HandCoins,
  HelpingHand,
  Menu,
  Plane,
  ShieldCheck,
  UserCheck,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import { useState } from "react";
// import FlowingMenu from "../ui/FlowingMenu";
import { usePathname } from "next/navigation";
import MobileMenuLinkItem from "./MobileMenuLinkItem";

const Header = () => {
  const { scrollY } = useScroll();
  const pathname = usePathname();

  // const [scrollDirection, setScrollDirection] = useState("down");
  const [headerVisible, setHeaderVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileMenuScreen, setMobileMenuScreen] = useState(0);

  useMotionValueEvent(scrollY, "change", (current) => {
    if (mobileMenuOpen) return;

    const previous = scrollY.getPrevious();
    if (previous === null || previous === undefined) return;

    const diff = current - previous;

    if (diff > 0 && current > 400) {
      setHeaderVisible(false);
    } else if (diff < 0 || current <= 100) {
      setHeaderVisible(true);
    }
  });

  const menuItemsCourses = [
    {
      link: "/course/life-in-the-uk-prep",
      text: "Life in the UK Preparation",
      image: "https://picsum.photos/600/400?random=4",
    },
  ];

  const menuItemsServices = [
    {
      link: "/services",
      text: "All Services",
      image: "https://picsum.photos/600/400?random=7",
    },
    {
      link: "/student-finance",
      text: "Student Finance",
      image: "https://picsum.photos/600/400?random=7",
    },
    {
      link: "/airport-pickup",
      text: "Airport Pick-up",
      image: "https://picsum.photos/600/400?random=8",
    },
  ];

  const menuItemsMore = [
    {
      link: "/check-eligibility",
      text: "Check your Eligibility",
      image: "https://picsum.photos/600/400?random=17",
    },
    {
      link: "/appointment",
      text: "Book Appointment",
      image: "https://picsum.photos/600/400?random=14",
    },
    {
      link: "/visa-application",
      text: "Visa Application",
      image: "https://picsum.photos/600/400?random=14",
    },
  ];

  const navLinkStyle = (path) => {
    return `text-sm font-medium font-montserrat hover:text-primary flex items-center flex-row gap-2 ${
      pathname?.startsWith(path) ? "text-primary" : " text-slate-600"
    }`;
  };
  ("");

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: headerVisible ? 1 : 0, y: headerVisible ? 0 : -20 }}
      className={`fixed top-0 z-50 left-1/2 -translate-x-1/2 w-full p-2 pt-3 md:p-5 md:pt-5 ${
        headerVisible ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      {/* Large Screen Menu */}
      <div className="w-full h-[65px] max-w-6xl mx-auto px-5 flex justify-between items-center gap-4 md:gap-8 bg-slate-200/60 backdrop-blur-sm rounded-[80px] shadow-sm">
        <Link href="/">
          <Image
            src={"/logo.svg"}
            width={400}
            height={400}
            alt="Brave Education"
            className="w-full max-w-[160px]"
          />
        </Link>

        <div className="hidden lg:flex items-center gap-6">
          <Link href="/about" className={navLinkStyle("/about")}>
            About Us
          </Link>

          <div className="relative group">
            <Link
              href={"/services"}
              className={`${navLinkStyle(
                "/services"
              )} cursor-pointer leading-[40px]`}
            >
              Services <ChevronDown size={16} />
            </Link>

            <div className="w-[200px] bg-white/100 rounded-[4px] p-1 absolute top-[100%] right-0 z-50 flex flex-col items-center gap-0 shadow-xl opacity-0 translate-y-3 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto duration-200">
              {menuItemsServices?.map((item, index) => (
                <Link
                  href={item?.link}
                  key={`${index}_${item?.link}`}
                  className={`border-b border-zinc-200 p-2 text-xs w-full bg-white text-slate-700 last:border-b-0 hover:bg-slate-100 text-center font-medium font-montserrat rounded-none hover:first:rounded-t-sm hover:last:rounded-b-sm hover:text-primary duration-100`}
                >
                  {item?.text}
                </Link>
              ))}
            </div>
          </div>

          {/* Courses Dropdown */}
          <div className="relative group">
            <Link
              href={"/courses"}
              className={`${navLinkStyle(
                "/courses"
              )} cursor-pointer leading-[40px]`}
            >
              Courses <ChevronDown size={16} />
            </Link>

            <div className="w-[200px] bg-white/100 rounded-[4px] p-1 absolute top-[100%] right-0 z-50 flex flex-col items-center gap-0 shadow-xl opacity-0 translate-y-3 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto duration-200">
              <span className="text-xs font-bold text-slate-900 block w-full text-left p-2 pb-1 border-b-[1px] border-zinc-400">
                Courses
              </span>

              <Link
                href={"/courses"}
                className={`p-2 text-xs w-full bg-white text-slate-700 last:border-b-0 hover:bg-slate-100 text-left font-medium font-montserrat rounded-none hover:first:rounded-t-sm hover:last:rounded-b-sm hover:text-primary duration-100`}
              >
                All Courses
              </Link>

              <span className="text-xs font-bold text-slate-900 block w-full text-left p-2 pb-1 border-b-[1px] border-zinc-400">
                Revision Notes
              </span>

              {menuItemsCourses?.map((course, index) => (
                <Link
                  href={course?.link}
                  key={`${index}_${course?.link}`}
                  className={`p-2 text-xs w-full bg-white text-slate-700 last:border-b-0 hover:bg-slate-100 text-left font-medium font-montserrat rounded-none hover:first:rounded-t-sm hover:last:rounded-b-sm hover:text-primary duration-100`}
                >
                  {course?.text}
                </Link>
              ))}

              <span className="text-xs font-bold text-slate-900 block w-full text-left p-2 pb-1 border-b-[1px] border-zinc-400">
                Tests
              </span>

              <Link
                href={
                  "https://seltbooking.trinitycollege.co.uk/OEWeb/loadExamDtl.do?ref=1-10672391978"
                }
                target="_blank"
                className={`p-2 text-xs w-full bg-white text-slate-700 last:border-b-0 hover:bg-slate-100 text-left font-medium font-montserrat rounded-none hover:first:rounded-t-sm hover:last:rounded-b-sm hover:text-primary duration-100`}
              >
                Trinity College Test
              </Link>
            </div>
          </div>

          {/* More Dropdown */}
          <div className="relative group">
            <span
              className={`${navLinkStyle(
                "/more"
              )} cursor-pointer leading-[40px]`}
            >
              More <ChevronDown size={16} />
            </span>

            <div className="w-[200px] bg-white/100 rounded-[4px] p-1 absolute top-[100%] right-0 z-50 flex flex-col items-center gap-0 shadow-xl opacity-0 translate-y-3 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto duration-200">
              {menuItemsMore?.map((item, index) => (
                <Link
                  href={item?.link}
                  key={`${index}_${item?.link}`}
                  className={`border-b border-zinc-200 p-2 text-xs w-full bg-white text-slate-700 last:border-b-0 hover:bg-slate-100 text-center font-medium font-montserrat rounded-none hover:first:rounded-t-sm hover:last:rounded-b-sm hover:text-primary duration-100`}
                >
                  {item?.text}
                </Link>
              ))}
            </div>
          </div>

          <Link href="/contact" className={navLinkStyle("/contact")}>
            Contact
          </Link>
        </div>

        <div className="flex flex-row items-center gap-3 md:gap-5">
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

          <button
            onClick={() => {
              setMobileMenuOpen(true);
              document.body.classList.add("scroll-block");
            }}
            className="block lg:hidden cursor-pointer"
          >
            <span className="block w-[17px] h-[2px] bg-slate-900"></span>
            <span className="block w-[14px] h-[2px] bg-slate-900 my-[4px] ml-auto"></span>
            <span className="block w-[17px] h-[2px] bg-slate-900"></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            exit={{ x: "-100%" }}
            animate={{ x: "0%" }}
            transition={{
              duration: 0.25,
              ease: "easeInOut",
              type: "spring",
              damping: 20,
            }}
            className="fixed top-0 left-0 w-full h-screen overflow-y-auto pb-10 pt-20 bg-white"
          >
            {/* Menu Close Button */}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setMobileMenuScreen(0);
                document.body.classList.remove("scroll-block");
              }}
              className="absolute top-10 right-10 rotate-0 duration-100 cursor-pointer hover:rotate-[90deg] hover:scale-125"
            >
              <X size={28} />
            </button>

            {/* Menu Content */}
            <motion.nav
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.2 }}
              className="w-full flex flex-col gap-1 items-center justify-center font-poppins font-medium text-xl"
            >
              <MobileMenuLinkItem
                setMobileMenuOpen={setMobileMenuOpen}
                link={"/about"}
                text={"About"}
              />

              <MobileMenuLinkItem
                setMobileMenuOpen={setMobileMenuOpen}
                link={"/services"}
                text={"Services"}
                submenu={[
                  {
                    link: "/services",
                    text: "Our Services",
                    icon: <HelpingHand size={18} />,
                  },
                  {
                    link: "/student-finance",
                    text: "Student Finance",
                    icon: <HandCoins size={18} />,
                  },
                  {
                    link: "/airport-pickup",
                    text: "Airport Pick-up",
                    icon: <Plane size={18} />,
                  },
                ]}
              />

              <MobileMenuLinkItem
                setMobileMenuOpen={setMobileMenuOpen}
                link={"/courses"}
                text={"Courses"}
                submenu={[
                  {
                    link: "/courses",
                    text: "All Courses",
                    icon: <BookCopy size={18} />,
                  },
                  {
                    link: "/course/life-in-the-uk-prep",
                    text: "Life in the UK Preparation",
                    icon: <Folders size={18} />,
                  },
                  {
                    link: "https://seltbooking.trinitycollege.co.uk/OEWeb/loadExamDtl.do?ref=1-10672391978",
                    text: "Trinity College Test",
                    icon: <ShieldCheck size={18} />,
                    external: true,
                  },
                ]}
              />

              <MobileMenuLinkItem
                setMobileMenuOpen={setMobileMenuOpen}
                link={"#"}
                text={"More"}
                submenu={[
                  {
                    link: "/check-eligibility",
                    text: "Check your Eligibility",
                    icon: <UserCheck size={18} />,
                  },
                  {
                    link: "/appointment",
                    text: "Book Appointment",
                    icon: <ClipboardClock size={18} />,
                  },
                  {
                    link: "/visa-application",
                    text: "Visa Application",
                    icon: <FileUser size={18} />,
                  },
                ]}
              />

              <MobileMenuLinkItem
                setMobileMenuOpen={setMobileMenuOpen}
                link={"/contact"}
                text={"Contact"}
              />
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
export default Header;
