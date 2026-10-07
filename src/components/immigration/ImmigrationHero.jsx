import { ChevronRight, ShieldCheck } from "lucide-react";
import Link from "next/link";
import * as motion from "motion/react-client";

const ImmigrationHero = ({ eyebrow, title, intro, breadcrumbs, actions, children }) => {
  return (
    <div
      style={{
        background:
          "linear-gradient(182deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 70%, rgba(255, 255, 255, 1) 100%), url(/page_bg_2.jpg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="px-5 pt-32 pb-16 md:pt-40 md:pb-24"
      >
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-5">
          {breadcrumbs && (
            <nav aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center justify-center gap-1 text-xs font-medium text-slate-600">
                {breadcrumbs.map((crumb, index) => (
                  <li key={crumb.label} className="flex items-center gap-1">
                    {index > 0 && <ChevronRight size={12} aria-hidden="true" />}
                    {crumb.href ? (
                      <Link href={crumb.href} className="hover:text-primary underline-offset-2 hover:underline">
                        {crumb.label}
                      </Link>
                    ) : (
                      <span aria-current="page" className="text-zinc-900">
                        {crumb.label}
                      </span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          )}

          <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/85 px-4 py-1.5 text-xs font-medium text-[#221e52] shadow-sm">
            <ShieldCheck size={14} className="text-primary" aria-hidden="true" />
            {eyebrow}
          </span>

          <h1 className="font-poppins text-[38px] leading-[1.05] md:text-5xl lg:text-6xl font-medium tracking-[-0.03em] text-zinc-900 text-balance">
            {title}
          </h1>

          <p className="text-base md:text-lg text-slate-600 max-w-2xl text-pretty">
            {intro}
          </p>

          {actions && (
            <div className="flex flex-wrap items-center justify-center gap-3 mt-2">
              {actions}
            </div>
          )}

          {children}
        </div>
      </motion.section>
    </div>
  );
};

export default ImmigrationHero;
