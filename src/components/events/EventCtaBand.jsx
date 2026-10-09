import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

/**
 * This is the standalone `cta`, independent of `hero.cta`. The API stores
 * it as `null` whenever both fields are blank, so a plain truthy check on
 * the object itself is enough to gate this section.
 */
const EventCtaBand = ({ cta }) => {
  if (!cta?.label || !cta?.link) return null;

  return (
    <section className="px-5 py-16">
      <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-br from-[#261a75] via-[#14094f] to-[#221e52] px-6 py-12 md:px-12 text-center shadow-2xl shadow-[#261a75]/25">
        <Link
          href={cta.link}
          target={cta.openInNewTab ? "_blank" : undefined}
          rel={cta.openInNewTab ? "noopener noreferrer" : undefined}
          className="inline-flex items-center justify-center gap-2 rounded-3xl h-11 px-6 text-sm font-medium bg-white text-[#180d5d] shadow-lg transition-all hover:scale-[103%]"
        >
          {cta.label} <ArrowUpRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
};

export default EventCtaBand;
