"use client";
import { ChevronDown } from "lucide-react";
import { redirect } from "next/navigation";
import { useState } from "react";

const MobileMenuLinkItem = ({
  link,
  text,
  submenu = [],
  setMobileMenuOpen,
}) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);

  return submenu?.length === 0 ? (
    <button
      onClick={() => {
        setMobileMenuOpen(false);
        document.body.classList.remove("scroll-block");
        return redirect(link);
      }}
      className="w-full text-left block text-zinc-800 bg-white p-3 border-b border-b-zinc-400 capitalize cursor-pointer"
    >
      {text}
    </button>
  ) : (
    <div className="relative w-full border-b border-b-zinc-400 text-zinc-800">
      <button
        onClick={() => setSubmenuOpen((prev) => !prev)}
        className="w-full flex justify-between items-center gap-3 bg-white p-3 capitalize cursor-pointer"
      >
        {text}

        <ChevronDown
          size={18}
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
          <button
            key={`${id}_${item?.link}`}
            onClick={() => {
              setMobileMenuOpen(false);
              document.body.classList.remove("scroll-block");
              return item?.external
                ? window.open(item?.link, "_blank")
                : redirect(item?.link);
            }}
            className="w-full bg-zinc-50 text-lg font-normal text-zinc-700 p-3 pl-6 border-b border-b-zinc-200 last:border-b-transparent capitalize text-left flex flex-row items-center gap-3 cursor-pointer"
          >
            {item?.icon}
            {item?.text}
          </button>
        ))}
      </div>
    </div>
  );
};
export default MobileMenuLinkItem;
