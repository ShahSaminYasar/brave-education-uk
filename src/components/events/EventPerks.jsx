import * as motion from "motion/react-client";
import SectionHeading from "@/components/immigration/SectionHeading";
import { getPerkIcon } from "@/data/perkIcons";

const EventPerks = ({ perks }) => {
  if (!perks?.enabled || !perks.items?.length) return null;

  const centered = perks.theme === "centered";

  return (
    <section className="px-5 py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Why attend"
          title={perks.title || "Why attend"}
          intro={perks.description}
          align={centered ? "center" : "left"}
        />

        <div
          className={`grid grid-cols-1 sm:grid-cols-2 gap-5 ${
            centered ? "lg:grid-cols-4" : "lg:grid-cols-3"
          }`}
        >
          {perks.items.map((item, index) => {
            const Icon = getPerkIcon(item.icon);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -10% 0px" }}
                transition={{ duration: 0.3, delay: index * 0.06 }}
                className={`rounded-2xl border border-zinc-200 bg-white p-6 flex flex-col gap-3 ${
                  centered ? "items-center text-center" : "items-start text-left"
                }`}
              >
                <span className="grid size-12 shrink-0 place-content-center rounded-xl bg-gradient-to-br from-red-50 to-indigo-100">
                  <Icon size={22} className="text-[#221e52]" aria-hidden="true" />
                </span>
                <h3 className="font-josefin-sans text-lg font-semibold text-zinc-900">
                  {item.heading}
                </h3>
                {item.description && (
                  <p className="text-sm text-slate-600">{item.description}</p>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EventPerks;
