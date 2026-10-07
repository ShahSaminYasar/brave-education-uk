import { ChevronDown } from "lucide-react";

const FaqList = ({ items }) => {
  return (
    <div className="max-w-3xl mx-auto divide-y divide-zinc-200 rounded-2xl border border-zinc-200 bg-white">
      {items.map((item) => (
        <details key={item.q} className="group px-6 py-1">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 font-medium text-zinc-900 [&::-webkit-details-marker]:hidden">
            {item.q}
            <ChevronDown
              size={18}
              className="shrink-0 text-slate-500 transition-transform duration-200 group-open:rotate-180"
              aria-hidden="true"
            />
          </summary>
          <p className="pb-5 text-[15px] text-slate-600">{item.a}</p>
        </details>
      ))}
    </div>
  );
};

export default FaqList;
