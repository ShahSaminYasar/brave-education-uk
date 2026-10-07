const ctaBase =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-3xl h-11 px-6 text-sm font-medium transition-all duration-200 hover:scale-[103%] focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-primary/50 [&_svg]:size-4 [&_svg]:shrink-0";

export const ctaPrimary = `${ctaBase} bg-gradient-to-r from-[#261a75] via-[#090041] to-[#261a75] text-white shadow-lg shadow-[#261a75]/20`;

export const ctaSecondary = `${ctaBase} border-2 border-[#180d5d] bg-white text-[#180d5d]`;

export const ctaOnDark = `${ctaBase} bg-white text-[#180d5d] shadow-lg`;

export const ctaOutlineOnDark = `${ctaBase} border-2 border-white/70 text-white hover:bg-white/10`;
