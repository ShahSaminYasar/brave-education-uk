"use client";
import {
  Book,
  ClipboardClock,
  FileUser,
  Megaphone,
  Plane,
  UserCheck,
  Users,
  X,
} from "lucide-react";
import AdminNavItem from "./AdminNavItem";
import Header from "./Header";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import Image from "next/image";
import { useMainContext } from "@/hooks/useMainContext";
import { Spinner } from "@/components/ui/spinner";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const layout = ({ children }) => {
  const { authStatus, adminLogin } = useMainContext();

  const [navBarOpen, setNavBarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  const [authenticating, setAuthenticating] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return authStatus === "loading" ? (
    <main className="w-full h-screen bg-slate-50 flex flex-row items-center justify-center gap-3">
      <Spinner />
      <span>Authenticating...</span>
    </main>
  ) : authStatus === "unauthenticated" ? (
    <>
      <main
        className="w-full min-h-screen flex section flex-col gap-5 items-center justify-center font-josefin-sans"
        style={{
          backgroundImage: "url(/white-bg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="fade bg-white/40 border border-white shadow-sm text-secondary-foreground backdrop-blur-[4px] rounded-xl py-8 px-5 flex flex-col gap-3 items-center justify-center w-full max-w-sm mx-auto">
          <h4 className="text-3xl font-bold text-primary block text-center">
            LOGIN
          </h4>

          <form
            onSubmit={async (e) => {
              e.preventDefault();
              try {
                setAuthenticating(true);
                adminLogin(
                  e?.target?.username?.value,
                  e?.target?.password?.value,
                );
              } catch (error) {
                console.error(error);
                toast.error(error?.message);
              } finally {
                setAuthenticating(false);
              }
            }}
            className="w-full"
          >
            <div className="w-full mb-3">
              <label htmlFor="username" className="text-xs font-medium">
                Username
              </label>
              <Input name="username" type={"text"} required id="username" />
            </div>

            <div className="w-full mb-3">
              <label htmlFor="password" className="text-xs font-medium">
                Password
              </label>
              <Input name="password" type={"password"} required id="password" />
            </div>

            <Button
              type="submit"
              disabled={authenticating}
              className={`disabled:opacity-50 w-full mt-2 rounded-lg`}
            >
              {!authenticating ? "Login" : "Authenticating..."}
            </Button>
          </form>

          <Link href={"/"}>
            <Image
              src={"/logo.svg"}
              width={300}
              height={300}
              alt="Brave Education UK Logo"
              className="w-full max-w-[220px] mt-3"
            />
          </Link>
        </div>
      </main>
    </>
  ) : (
    authStatus === "authenticated" && (
      <>
        <Header setNavBarOpen={setNavBarOpen} />

        <main className="w-full grid grid-cols-1 lg:grid-cols-6 text-sm font-poppins font-medium text-secondary-foreground lg:left-0 relative min-h-[100vh]">
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
              collapsed={true}
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
                {
                  link: "/admin/submissions/airport-pickup",
                  text: "Airport Pickup",
                  icon: <Plane size={15} />,
                },
                {
                  link: "/admin/submissions/leads",
                  text: "Leads",
                  icon: <Users size={15} />,
                },
                {
                  link: "/admin/submissions/complaints",
                  text: "Complaints",
                  icon: <Users size={15} />,
                },
              ]}
            />
            <AdminNavItem
              link={"/admin/courses"}
              text={"Courses"}
              collapsed={true}
              submenu={[
                {
                  link: "/admin/courses",
                  text: "Manage Courses",
                  icon: <Book size={15} />,
                },
                {
                  link: "/admin/courses/banner",
                  text: "Featured Banner",
                  icon: <Megaphone size={15} />,
                },
              ]}
            />
            <AdminNavItem
              link={"/admin/success-stories"}
              text={"Success Stories"}
            />
            <AdminNavItem link={"/admin/team"} text={"Our Team"} />
            <AdminNavItem link={"/admin/updates"} text={"Updates"} />
            <AdminNavItem
              link={"/admin/contact-info"}
              text={"Contact & General Info"}
            />
            <AdminNavItem link={"/admin/settings"} text={"Website Settings"} />
          </motion.nav>

          {/* Main Content */}
          <div className="w-full col-span-5 p-5 max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </>
    )
  );
};
export default layout;
