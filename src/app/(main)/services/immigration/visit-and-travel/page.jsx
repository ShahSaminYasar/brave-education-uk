import { ArrowUpRight, Info } from "lucide-react";
import Link from "next/link";
import CategoryPage from "@/components/immigration/CategoryPage";
import { GOV_LINKS, SERVICES, getCategory } from "@/lib/immigration";

const category = getCategory("visit-and-travel");

export const metadata = {
  title: category.metaTitle,
  description: category.metaDescription,
  alternates: { canonical: "/services/immigration/visit-and-travel" },
  robots: "index, follow",
};

const page = () => (
  <CategoryPage slug={category.slug}>
    <section className="px-5 pb-16">
      <div className="max-w-5xl mx-auto grid gap-5 md:grid-cols-3">
        <div className="rounded-2xl border border-zinc-200 bg-slate-50 p-6">
          <Info size={22} className="text-[#221e52]" aria-hidden="true" />
          <h2 className="mt-3 font-josefin-sans text-lg font-semibold text-zinc-900">
            Do you need a visa to visit?
          </h2>
          <p className="mt-2 text-[15px] text-slate-600">
            Some nationalities don&apos;t need a visa to visit the UK but must get an Electronic
            Travel Authorisation (ETA) before travelling.
          </p>
          <Link
            href={GOV_LINKS.checkVisa}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline underline-offset-2"
          >
            Check on GOV.UK <ArrowUpRight size={14} aria-hidden="true" />
          </Link>
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-slate-50 p-6">
          <Info size={22} className="text-[#221e52]" aria-hidden="true" />
          <h2 className="mt-3 font-josefin-sans text-lg font-semibold text-zinc-900">
            About Canadian visas
          </h2>
          <p className="mt-2 text-[15px] text-slate-600">
            Canadian visas and eTAs are issued by the Canadian government, so this service is
            separate from our IAA-regulated UK immigration advice.
          </p>
          <Link
            href={SERVICES["canada-visitor"].officialLinks[0].href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline underline-offset-2"
          >
            Check on Canada.ca <ArrowUpRight size={14} aria-hidden="true" />
          </Link>
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-slate-50 p-6">
          <Info size={22} className="text-[#221e52]" aria-hidden="true" />
          <h2 className="mt-3 font-josefin-sans text-lg font-semibold text-zinc-900">
            About Schengen visas
          </h2>
          <p className="mt-2 text-[15px] text-slate-600">
            Schengen visas are issued by European countries, so this service is separate from our
            IAA-regulated UK immigration advice.
          </p>
        </div>
      </div>
    </section>
  </CategoryPage>
);

export default page;
