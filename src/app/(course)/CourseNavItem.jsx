"use client";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { redirect, usePathname } from "next/navigation";
import { useState } from "react";

const CourseNavItem = ({ link, text, submenu = [], className }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const pathname = usePathname();

  const isActive = pathname === link;

  return submenu?.length === 0 ? (
    <Link
      href={link}
      className={`w-full text-left block p-3 border-b border-zinc-400 cursor-pointer text-xs font-medium ${
        isActive ? "text-white bg-primary" : "text-zinc-900 bg-white"
      } ${className && className}`}
    >
      {text}
    </Link>
  ) : (
    <div
      className={`relative w-full border-b border-zinc-400 text-zinc-800 text-left ${
        isActive ? "text-primary" : "text-zinc-900"
      } ${className && className}`}
    >
      <button
        onClick={() => setSubmenuOpen((prev) => !prev)}
        className={`w-full flex justify-between items-center gap-3 p-3 cursor-pointer text-xs text-left ${
          pathname?.startsWith(link)
            ? "text-white bg-primary"
            : "text-zinc-900 bg-white"
        }`}
      >
        {text}

        <ChevronDown
          size={15}
          className={`text-zinc-800 ${
            submenuOpen ? "rotate-180" : "rotate-0"
          } duration-150 transition-all`}
        />
      </button>
      <div
        className={`w-full overflow-y-hidden ${
          submenuOpen ? "max-h-[400px]" : "max-h-[0px]"
        } transition-all duration-500`}
      >
        {submenu?.map((item, id) => (
          <Link
            key={`${id}_${item?.link}`}
            href={item?.link}
            className={`w-full bg-zinc-50 text-xs font-medium p-3 pl-6 border-b border-b-zinc-200 last:border-b-transparent text-left flex flex-row items-center gap-3 cursor-pointer  ${
              pathname === item?.link ? "text-primary" : "text-zinc-900"
            }`}
          >
            {item?.icon}
            {item?.text}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default CourseNavItem;
