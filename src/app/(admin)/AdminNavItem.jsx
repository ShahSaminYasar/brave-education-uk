"use client";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { redirect, usePathname } from "next/navigation";
import { useState } from "react";

const AdminNavItem = ({ link, text, submenu = [] }) => {
  const [submenuOpen, setSubmenuOpen] = useState(true);

  const pathname = usePathname();

  const isActive = pathname === link;

  return submenu?.length === 0 ? (
    <Link
      href={link}
      className={`w-full text-left block bg-white p-3 border-b border-b-zinc-400 capitalize cursor-pointer text-sm font-medium ${
        isActive ? "text-primary" : "text-zinc-900"
      }`}
    >
      {text}
    </Link>
  ) : (
    <div
      className={`relative w-full border-b border-b-zinc-400 text-zinc-800  ${
        isActive ? "text-primary" : "text-zinc-900"
      }`}
    >
      <button
        onClick={() => setSubmenuOpen((prev) => !prev)}
        className={`w-full flex justify-between items-center gap-3 bg-white p-3 capitalize cursor-pointer text-sm`}
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
          submenuOpen ? "max-h-[250px]" : "max-h-[0px]"
        } transition-all duration-500`}
      >
        {submenu?.map((item, id) => (
          <Link
            key={`${id}_${item?.link}`}
            href={item?.link}
            className={`w-full bg-zinc-50 text-xs font-medium p-3 pl-6 border-b border-b-zinc-200 last:border-b-transparent capitalize text-left flex flex-row items-center gap-3 cursor-pointer  ${
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
export default AdminNavItem;
