"use client";
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

import { motion } from "motion/react";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-1 md:gap-2 whitespace-nowrap rounded-3xl text-[10px] md:text-xs font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive cursor-pointer hover:scale-[103%]",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-[#5e5a79] via-[#090041] to-[#5e5a79] text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary: "bg-[#ffffff] text-secondary-foreground hover:shadow-2xl",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default:
          "h-8 md:h-9 px-3 md:px-4 py-1 md:py-2 has-[>svg]:px-4 has-[>svg]:md:px-6",
        sm: "h-7 rounded-lg gap-1 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  animatedEntry = false,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "button";

  return (
    <motion.div
      initial={animatedEntry ? { y: 10, opacity: 0 } : {}}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{
        once: false,
        margin: "0px 0px -100px 0px",
      }}
      transition={{
        duration: 0.4,
      }}
    >
      <Comp
        data-slot="button"
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    </motion.div>
  );
}

export { Button, buttonVariants };
