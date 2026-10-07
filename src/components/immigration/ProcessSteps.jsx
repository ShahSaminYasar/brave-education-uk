import * as motion from "motion/react-client";
import { PROCESS_STEPS } from "@/lib/immigration";

const ProcessSteps = () => {
  return (
    <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {PROCESS_STEPS.map((step, index) => (
        <motion.li
          key={step.title}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          transition={{ duration: 0.3, delay: index * 0.06 }}
          className="relative rounded-2xl border border-zinc-200 bg-white p-6"
        >
          <span className="grid size-9 place-content-center rounded-full bg-[#221e52] text-sm font-semibold text-white">
            {index + 1}
          </span>
          <h3 className="mt-4 font-josefin-sans text-lg font-semibold text-zinc-900">
            {step.title}
          </h3>
          <p className="mt-2 text-[15px] text-slate-600">{step.text}</p>
        </motion.li>
      ))}
    </ol>
  );
};

export default ProcessSteps;
