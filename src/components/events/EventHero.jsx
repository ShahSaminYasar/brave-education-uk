import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CalendarDays } from "lucide-react";
import * as motion from "motion/react-client";
import { formatEventDate } from "@/lib/eventDisplay";

const EventHero = ({ event }) => {
  const { title, hero, startDate, endDate } = event;
  const heroTitle = hero.titleType === "text" ? hero.titleText || title : null;

  return (
    <section className="relative w-full overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src={hero.bgImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-4xl mx-auto px-5 py-28 md:py-36 flex flex-col items-center gap-4 text-center"
      >
        <span className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-sm px-4 py-1.5 text-xs font-medium text-white">
          <CalendarDays size={14} aria-hidden="true" />
          {formatEventDate(startDate)}
          {endDate && ` – ${formatEventDate(endDate, "h:mm A")}`}
        </span>

        {hero.titleType === "image" && hero.titleImage ? (
          <img
            src={hero.titleImage}
            alt={title}
            className="max-w-full max-h-[160px] object-contain"
          />
        ) : (
          <h1 className="font-poppins text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-[1.05] tracking-[-0.02em] text-balance">
            {heroTitle}
          </h1>
        )}

        {hero.description && (
          <p className="text-base md:text-lg text-white/85 max-w-2xl text-pretty">
            {hero.description}
          </p>
        )}

        {hero.cta?.label && hero.cta?.link && (
          <Link
            href={hero.cta.link}
            target={hero.cta.openInNewTab ? "_blank" : undefined}
            rel={hero.cta.openInNewTab ? "noopener noreferrer" : undefined}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-3xl h-11 px-6 text-sm font-medium bg-white text-[#180d5d] shadow-lg transition-all hover:scale-[103%]"
          >
            {hero.cta.label} <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        )}
      </motion.div>

      {hero.secondaryImage && (
        <div className="max-w-5xl mx-auto px-5 -mt-10 md:-mt-14 relative z-10 pb-10">
          <div className="relative w-full aspect-[4/1] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={hero.secondaryImage}
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default EventHero;
