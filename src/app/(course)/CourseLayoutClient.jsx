"use client";
import { X } from "lucide-react";
import Header from "./Header";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import CourseNavItem from "./CourseNavItem";
import Footer from "@/components/footer/Footer";

const CourseLayoutClient = ({ children, contact }) => {
  const [navBarOpen, setNavBarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <>
      <Header setNavBarOpen={setNavBarOpen} />

      <main className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-10 text-sm font-poppins font-medium text-secondary-foreground lg:left-0 relative">
        <div
          className={`${
            navBarOpen ? "block lg:hidden" : "hidden"
          } fixed top-0 left-0 w-full h-full z-20 bg-white/40 backdrop-blur-[2px]`}
          onClick={() => setNavBarOpen(false)}
        ></div>

        {/* Nav Menu/Sidebar */}
        <motion.nav
          initial={{ x: isMobile ? "-100%" : "0%" }}
          animate={{ x: isMobile ? (navBarOpen ? "0%" : "-100%") : "0%" }}
          transition={{
            duration: 0.3,
            type: "keyframes",
            ease: "easeOut",
          }}
          className={`w-full col-span-2 max-w-[280px] lg:max-w-full h-screen overflow-y-auto flex flex-col items-start gap-0 border-r border-b border-slate-300 @min-7lg:border-l fixed lg:sticky top-0 z-[999] lg:z-30 bg-white pt-[0px] shadow-xl lg:shadow-none`}
        >
          <button
            onClick={() => setNavBarOpen(false)}
            className="cursor-pointer text-zinc-100 bg-black/30 w-fit aspect-square p-2 absolute top-7 left-5 block rounded-full lg:hidden"
          >
            <X size={17} />
          </button>

          <span className="w-full h-[80px] flex items-center justify-center p-2">
            <span className="w-full bg-secondary-foreground text-white hidden lg:block p-2 text-center">
              Revision Notes
            </span>
          </span>

          <CourseNavItem
            link={"/revision-notes"}
            text={"Structure"}
            className={"border-t lg:border-t-0"}
          />

          <CourseNavItem
            link={"/revision-notes/values-and-principles"}
            text={"The values and principles of the UK"}
            className={"border-t lg:border-t-0"}
          />

          <CourseNavItem
            link={"/revision-notes/what-is-the-uk"}
            text={"What is the UK"}
            className={"border-t lg:border-t-0"}
          />

          <CourseNavItem
            link={"/revision-notes/a-long-and-illustrious-history"}
            text={"A long and illustrious history"}
            submenu={[
              {
                link: "/revision-notes/a-long-and-illustrious-history/early-britain",
                text: "Early Britain",
              },
              {
                link: "/revision-notes/a-long-and-illustrious-history/the-middle-ages",
                text: "The Middle Ages",
              },
              {
                link: "/revision-notes/a-long-and-illustrious-history/the-tudors-and-the-stuarts",
                text: "The Tudors and the Stuarts",
              },
              {
                link: "/revision-notes/a-long-and-illustrious-history/a-global-power",
                text: "A global power",
              },
              {
                link: "/revision-notes/a-long-and-illustrious-history/the-20th-century",
                text: "The 20th century",
              },
              {
                link: "/revision-notes/a-long-and-illustrious-history/britain-since-1945",
                text: "Britain since 1945",
              },
            ]}
          />

          <CourseNavItem
            link={"/revision-notes/a-modern-thriving-society"}
            text={"A modern, thriving society"}
            submenu={[
              {
                link: "/revision-notes/a-modern-thriving-society/the-uk-today",
                text: "The UK today",
              },
              {
                link: "/revision-notes/a-modern-thriving-society/religion",
                text: "Religion",
              },
              {
                link: "/revision-notes/a-modern-thriving-society/customs-and-traditions",
                text: "Customs and traditions",
              },
              {
                link: "/revision-notes/a-modern-thriving-society/sport",
                text: "Sport",
              },
              {
                link: "/revision-notes/a-modern-thriving-society/arts-and-culture",
                text: "Arts and culture",
              },
              {
                link: "/revision-notes/a-modern-thriving-society/leisure",
                text: "Leisure",
              },
              {
                link: "/revision-notes/a-modern-thriving-society/places-of-interest",
                text: "Places of interest",
              },
            ]}
          />

          <CourseNavItem
            link={"/revision-notes/the-uk-government-the-law-and-your-role"}
            text={"The UK government, the law and your role"}
            submenu={[
              {
                link: "/revision-notes/the-uk-government-the-law-and-your-role/the-development-of-british-democracy",
                text: "The development of British democracy",
              },
              {
                link: "/revision-notes/the-uk-government-the-law-and-your-role/the-british-constitution",
                text: "The British constitution",
              },
              {
                link: "/revision-notes/the-uk-government-the-law-and-your-role/the-government",
                text: "The government",
              },
              {
                link: "/revision-notes/the-uk-government-the-law-and-your-role/the-uk-and-international-institutions",
                text: "The UK and international institutions",
              },
              {
                link: "/revision-notes/the-uk-government-the-law-and-your-role/respecting-the-law",
                text: "Respecting the law",
              },
              {
                link: "/revision-notes/the-uk-government-the-law-and-your-role/fundamental-principles",
                text: "Fundamental principles",
              },
              {
                link: "/revision-notes/the-uk-government-the-law-and-your-role/your-role-in-the-community",
                text: "Your role in the community",
              },
            ]}
          />
        </motion.nav>

        {/* Main Content */}
        <div
          className="w-full col-span-8 p-0 font-montserrat pt-[100px] lg:pt-[70px] relative"
          style={{
            background: "url(/white-bg-4.jpg)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-linear-to-b from-white/20 to-white z-0"></div>
          <div className="relative z-10">{children}</div>
        </div>
      </main>

      <Footer contact={contact} />
    </>
  );
};
export default CourseLayoutClient;
