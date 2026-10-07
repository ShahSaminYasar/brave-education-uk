import { ShieldCheck } from "lucide-react";
import Link from "next/link";
import { IAA } from "@/lib/immigration";

const linkClass = "font-medium text-[#221e52] underline underline-offset-2 hover:text-primary";

const RegulatedNotice = () => {
  return (
    <div className="px-5 py-12">
      <aside
        aria-label="Regulatory information"
        className="max-w-4xl mx-auto flex flex-col sm:flex-row gap-4 rounded-2xl border border-zinc-200 bg-slate-50 p-6"
      >
        <ShieldCheck size={28} className="shrink-0 text-[#221e52]" aria-hidden="true" />
        <div className="space-y-3 text-sm text-slate-600">
          <p>
            Brave Education UK Ltd is regulated by the{" "}
            <Link href={IAA.regulatorUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
              {IAA.regulator}
            </Link>
            , reference number <strong className="text-zinc-900">{IAA.referenceNumber}</strong>.
            Our adviser, {IAA.adviser}, is authorised at {IAA.level} to give advice and make
            applications under the Immigration Rules.
          </p>
          <p>
            Cases involving refusals, appeals, asylum or applications outside the Immigration Rules
            need an adviser authorised at a higher level. If that applies to you, we will tell you
            and point you to someone who can help.
          </p>
          <p className="flex flex-wrap gap-x-4 gap-y-1">
            <Link href="/complaint" className={linkClass}>
              Our complaints procedure
            </Link>
            <Link href={IAA.complaintUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
              Complain to the IAA
            </Link>
            <Link href={IAA.registerUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
              Check the IAA register
            </Link>
          </p>
        </div>
      </aside>
    </div>
  );
};

export default RegulatedNotice;
