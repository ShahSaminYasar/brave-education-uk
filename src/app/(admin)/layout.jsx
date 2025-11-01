"use client";
import { ClipboardClock, FileUser, UserCheck, X } from "lucide-react";
import AdminNavItem from "./AdminNavItem";
import Header from "./Header";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

const layout = ({ children }) => {
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

      <main className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-6 text-sm font-poppins font-medium text-secondary-foreground lg:left-0 relative min-h-[100vh]">
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
          className={`w-full max-w-[280px] lg:max-w-full h-screen overflow-y-auto flex flex-col items-start gap-0 border-r border-slate-300 @min-7lg:border-l fixed lg:sticky top-0 z-30 bg-white pt-[79px] lg:pt-[0px] shadow-xl lg:shadow-none`}
        >
          <button
            onClick={() => setNavBarOpen(false)}
            className="cursor-pointer text-zinc-900 absolute top-8 left-5 block lg:hidden"
          >
            <X size={20} />
          </button>

          <AdminNavItem
            link={"/admin"}
            text={"Overview"}
            className={"border-t lg:border-t-0"}
          />
          <AdminNavItem
            link={"/admin/submissions"}
            text={"Form Submissions"}
            submenu={[
              {
                link: "/admin/submissions/appointments",
                text: "Appointments",
                icon: <ClipboardClock size={15} />,
              },
              {
                link: "/admin/submissions/messages",
                text: "Messages",
                icon: <UserCheck size={15} />,
              },
              {
                link: "/admin/submissions/visa-applications",
                text: "Visa Applications",
                icon: <FileUser size={15} />,
              },
            ]}
          />
          <AdminNavItem link={"/admin/settings"} text={"Website Settings"} />
        </motion.nav>

        {/* Main Content */}
        <div className="w-full col-span-5 p-5">{children}</div>
      </main>
    </>
  );
};
export default layout;
