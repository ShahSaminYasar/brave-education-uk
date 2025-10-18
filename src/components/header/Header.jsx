"use client";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { NavigationMenuSub } from "@radix-ui/react-navigation-menu";

const Header = () => {
  const { scrollY } = useScroll();
  const [scrollDirection, setScrollDirection] = useState("down");
  const [headerVisible, setHeaderVisible] = useState(true);

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious();
    if (previous === null || previous === undefined) return;

    const diff = current - previous;

    if (diff > 0 && current > 100) {
      // Scrolling down and past threshold - hide header
      setScrollDirection("down");
      setHeaderVisible(false);
    } else if (diff < 0 || current <= 100) {
      // Scrolling up OR at top - show header
      setScrollDirection("up");
      setHeaderVisible(true);
    }
  });

  const navLinkStyle =
    "text-sm font-normal text-slate-500 flex items-center flex-row gap-2";

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: headerVisible ? 1 : 0, y: headerVisible ? 0 : -20 }}
      className="fixed top-5 z-50 left-1/2 -translate-x-1/2 w-full h-[65px] max-w-6xl mx-auto px-8 flex justify-between items-center gap-8 bg-slate-300/30 backdrop-blur-sm rounded-[80px] shadow-sm"
    >
      <Image
        src={"/logo.svg"}
        width={400}
        height={400}
        alt="Brave Education"
        className="w-full max-w-[160px]"
      />

      {/* <nav className="flex flex-row items-center justify-center gap-8">
        <Link href={"/about"} className={navLinkStyle}>
          About
        </Link>
        <Link href={"/services"} className={navLinkStyle}>
          Services
        </Link>
        <Link href={"/courses"} className={navLinkStyle}>
          Courses <ChevronDown size={18} />
        </Link>
        <Link href={"/contact"} className={navLinkStyle}>
          Contact
        </Link>
        <Link href={"/contact"} className={navLinkStyle}>
          More <ChevronDown size={18} />
        </Link>
      </nav> */}

      <NavigationMenu>
        <NavigationMenuLink href={"/about"} className={navLinkStyle}>
          About
        </NavigationMenuLink>

        <NavigationMenuLink href={"/services"} className={navLinkStyle}>
          Services
        </NavigationMenuLink>

        <NavigationMenuLink href={"/courses"} className={navLinkStyle}>
          Courses
        </NavigationMenuLink>

        {/* <NavigationMenuItem>
            <NavigationMenuTrigger>Courses</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink
                href={"/courses#life-in-the-uk"}
                className={navLinkStyle}
              >
                Life in the UK
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem> */}

        <NavigationMenuLink href={"/contact"} className={navLinkStyle}>
          Contact
        </NavigationMenuLink>

        <NavigationMenuLink href={"/contact"} className={navLinkStyle}>
          More <ChevronDown size={18} />
        </NavigationMenuLink>

        {/* <NavigationMenu.Item>
            <NavigationMenu.Trigger />
            <NavigationMenu.Content>
              <NavigationMenu.Sub>
                <NavigationMenu.List />
                <NavigationMenu.Viewport />
              </NavigationMenu.Sub>
            </NavigationMenu.Content>
          </NavigationMenu.Item> */}

        {/* <NavigationMenuItem>
            <NavigationMenuTrigger>More</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuSub>
                <NavigationMenuLink
                  href={"/courses#life-in-the-uk"}
                  className={navLinkStyle}
                >
                  Life in the UK
                </NavigationMenuLink>
              </NavigationMenuSub>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList> */}
      </NavigationMenu>

      <Button>
        Consult for free <ArrowUpRight />
      </Button>
    </motion.header>
  );
};
export default Header;
