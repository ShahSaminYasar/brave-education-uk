import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import IASBadge from "../IASBadge";
import IAABadge from "../IAABadge";
import { IAA } from "@/lib/immigration";
import { ctaPrimary } from "../immigration/styles";

const TIMELINE = [
  { period: "2016 - 2021", role: "Language Instructor" },
  { period: "2021 - Present", role: "Director & BDE" },
  { period: "2026 - Present", role: "Immigration Advisor & BDE" },
];

const STATS = [
  { value: "100%", label: "Success Rate", className: "-top-4 right-2 sm:right-8" },
  { value: "2000+", label: "Happy Clients", className: "bottom-8 -left-2 sm:-left-8" },
];

const AdviserProfileSection = () => {
  return (
    <div className="w-full bg-white px-5 pt-16 pb-16">
      <div className="max-w-6xl mx-auto rounded-3xl bg-white border border-slate-100 shadow-2xl shadow-[#221e52]/10 p-6 sm:p-10 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
        <div className="relative w-full max-w-xs sm:max-w-sm mx-auto md:mx-0">
          <Image
            src="/ar_sir.png"
            width={512}
            height={487}
            alt={IAA.adviser}
            className="w-full h-auto drop-shadow-xl"
          />

          {STATS.map((stat) => (
            <div
              key={stat.label}
              className={`absolute ${stat.className} bg-white rounded-2xl shadow-lg px-4 py-2 text-center`}
            >
              <span className="block text-lg sm:text-xl font-bold text-[#221e52] font-josefin-sans">
                {stat.value}
              </span>
              <span className="block text-[9px] sm:text-[10px] text-slate-500 uppercase tracking-wide whitespace-nowrap">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-start gap-4">
          <div>
            <h3 className="font-josefin-sans text-2xl md:text-3xl font-bold text-zinc-900">
              {IAA.adviser}
            </h3>
            <span className="text-xs font-semibold text-primary uppercase tracking-wide">
              Director &amp; Immigration Adviser
            </span>
          </div>

          <div className="w-10 h-[3px] bg-primary rounded-full" />

          <ul className="text-sm text-slate-600 space-y-1">
            {TIMELINE.map((t) => (
              <li key={t.period} className="flex gap-2">
                <span className="font-semibold text-zinc-800 w-[115px] shrink-0">
                  {t.period}
                </span>
                <span>- {t.role}</span>
              </li>
            ))}
          </ul>

          <p className="text-sm text-slate-600 leading-relaxed text-pretty">
            Founded in 2021 with offices in London and Sylhet, Brave
            Education UK Limited is a British Council, ICEF-certified, and
            IAA-regulated consultancy. We provide expert university
            admissions across Medicine, IT, Law, and Engineering, alongside
            comprehensive English language training for global study.
          </p>

          <div className="flex flex-wrap items-start gap-4">
            <div className="flex flex-col items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm w-[150px]">
              <IAABadge />
              <p className="text-center text-[10px] text-slate-500 leading-snug">
                Authorised and regulated by the IAA to provide immigration
                advice.
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm w-[150px]">
              <IASBadge />
              <p className="text-center text-[10px] text-slate-500 leading-snug">
                ICEF-accredited agency - trusted global standards.
              </p>
            </div>
          </div>

          <Link href="/appointment" className={ctaPrimary}>
            Book Appointment <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default AdviserProfileSection;
