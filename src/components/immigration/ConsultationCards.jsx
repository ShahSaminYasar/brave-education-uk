import { Check, Clock, Sparkles } from "lucide-react";
import Link from "next/link";
import * as motion from "motion/react-client";
import { CONSULTATIONS, bookingHref, formatFee } from "@/lib/immigration";
import { ctaOnDark, ctaPrimary } from "./styles";

const ConsultationCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
      {CONSULTATIONS.map((item, index) => {
        const featured = item.recommended;

        return (
          <motion.article
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -10% 0px" }}
            transition={{ duration: 0.35, delay: index * 0.08 }}
            className={`relative flex flex-col rounded-2xl p-7 md:p-8 ${
              featured
                ? "order-first md:order-none bg-gradient-to-br from-[#261a75] via-[#14094f] to-[#221e52] text-white shadow-2xl shadow-[#261a75]/25"
                : "bg-white border border-zinc-200 text-zinc-900 shadow-sm"
            }`}
          >
            {featured && (
              <span className="absolute -top-3 left-7 inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white shadow">
                <Sparkles size={12} aria-hidden="true" /> Recommended for new cases
              </span>
            )}

            <div className="flex items-start justify-between gap-4">
              <h3 className="font-josefin-sans text-xl font-semibold">{item.name}</h3>
              <span
                className={`inline-flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ${
                  featured ? "bg-white/15 text-white" : "bg-slate-100 text-slate-700"
                }`}
              >
                <Clock size={12} aria-hidden="true" /> {item.duration}
              </span>
            </div>

            <p className="mt-4 flex items-baseline gap-2">
              <span className="font-poppins text-5xl font-semibold tracking-tight">
                {formatFee(item.price)}
              </span>
              <span className={featured ? "text-white/70 text-sm" : "text-slate-500 text-sm"}>
                one-off fee
              </span>
            </p>

            <p className={`mt-3 text-[15px] ${featured ? "text-white/85" : "text-slate-600"}`}>
              {item.summary}
            </p>

            <ul className="mt-6 space-y-3 flex-1">
              {item.points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-[15px]">
                  <span
                    className={`mt-0.5 grid size-5 shrink-0 place-content-center rounded-full ${
                      featured ? "bg-white/15" : "bg-primary/10"
                    }`}
                  >
                    <Check
                      size={13}
                      className={featured ? "text-white" : "text-primary"}
                      aria-hidden="true"
                    />
                  </span>
                  <span className={featured ? "text-white/90" : "text-slate-700"}>{point}</span>
                </li>
              ))}
            </ul>

            <Link
              href={bookingHref(item.id)}
              data-cta={`book-consultation-${item.id}`}
              className={`${featured ? ctaOnDark : ctaPrimary} mt-8 w-full`}
            >
              {item.cta}
            </Link>
          </motion.article>
        );
      })}
    </div>
  );
};

export default ConsultationCards;
