"use client";
import { Home, LogOut, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Header = ({ setNavBarOpen }) => {
  return (
    <>
      <div className={`block md:hidden relative w-full mb-[80px]`}></div>
      <header
        className={`w-full h-[80px] flex items-center bg-white px-5 py-[20px] border-b border-slate-300 fixed md:relative top-0 left-0 z-30`}
      >
        <div className="w-full max-w-6xl mx-auto grid grid-cols-3 items-center gap-8">
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                setNavBarOpen(true);
              }}
              className="cursor-pointer text-zinc-900 block md:hidden"
            >
              <Menu size={18} />
            </button>

            <Link
              href={"/"}
              className="w-fit rounded-md bg-slate-100 p-2 text-[10px] text-slate-800 font-semibold font-montserrat flex items-center gap-1"
            >
              <Home size={12} /> Home
            </Link>
          </div>

          <Link href={"/"}>
            <Image
              src={"/logo.svg"}
              width={200}
              height={200}
              alt="Brave Education"
              className="h-fit w-full max-w-[160px] mx-auto"
            />
          </Link>

          <button
            onClick={() => alert("UNDER DEVELOPMENT")}
            className="w-fit rounded-md bg-red-500 p-2 text-[10px] text-red-100 font-semibold font-montserrat flex items-center gap-1 ml-auto"
          >
            <LogOut size={12} /> Logout
          </button>
        </div>
      </header>
    </>
  );
};
export default Header;
