import {
  ArrowUpRight,
  Briefcase,
  Globe,
  HeartHandshake,
  Landmark,
} from "lucide-react";
import Link from "next/link";
import * as motion from "motion/react-client";
import { CATEGORIES, SERVICES, categoryHref } from "@/lib/immigration";

export const CATEGORY_ICONS = {
  "work-and-study": Briefcase,
  family: HeartHandshake,
  "settlement-and-citizenship": Landmark,
  "visit-and-travel": Globe,
};

const CategoryCards = ({ exclude }) => {
  const categories = CATEGORIES.filter((c) => c.slug !== exclude);

  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 gap-5 ${
        categories.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"
      }`}
    >
      {categories.map((category, index) => {
        const Icon = CATEGORY_ICONS[category.slug];

        return (
          <motion.div
            key={category.slug}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -10% 0px" }}
            transition={{ duration: 0.3, delay: index * 0.06 }}
          >
            <Link
              href={categoryHref(category.slug)}
              className="group flex h-full flex-col rounded-2xl border border-zinc-200 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-xl focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-primary/50"
            >
              <span className="grid size-12 place-content-center rounded-xl bg-gradient-to-br from-red-50 to-indigo-100">
                <Icon size={24} className="text-[#221e52]" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-josefin-sans text-xl font-semibold text-zinc-900 group-hover:text-primary transition-colors">
                {category.title}
              </h3>
              <ul className="mt-3 space-y-1.5 text-sm text-slate-600 flex-1">
                {category.services.map((id) => (
                  <li key={id}>
                    {SERVICES[id].shortName || SERVICES[id].name}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex items-center justify-end border-t border-zinc-100 pt-4">
                <ArrowUpRight
                  size={18}
                  className="text-slate-400 transition-colors group-hover:text-primary"
                  aria-hidden="true"
                />
              </div>
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
};

export default CategoryCards;
