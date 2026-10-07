import { Landmark, Plane, ShieldCheck } from "lucide-react";
import CategoryPage from "@/components/immigration/CategoryPage";
import SectionHeading from "@/components/immigration/SectionHeading";
import { getCategory } from "@/lib/immigration";

const category = getCategory("settlement-and-citizenship");

export const metadata = {
  title: category.metaTitle,
  description: category.metaDescription,
  alternates: { canonical: "/services/immigration/settlement-and-citizenship" },
  robots: "index, follow",
};

const PATH = [
  {
    icon: Plane,
    title: "Your visa",
    text: "Live in the UK on a route that leads to settlement, such as a work or family visa.",
  },
  {
    icon: ShieldCheck,
    title: "Indefinite Leave to Remain",
    text: "Apply once you've completed the qualifying period for your route.",
  },
  {
    icon: Landmark,
    title: "British citizenship",
    text: "Most people can apply 12 months after getting ILR, or straight away if married to a British citizen.",
  },
];

const page = () => (
  <CategoryPage slug={category.slug}>
    <section className="px-5 py-16 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          eyebrow="Your path"
          title="From visa to British citizen"
          intro="Qualifying periods depend on your route, and settlement rules are changing. We'll confirm the dates that apply to you."
        />
        <ol className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {PATH.map(({ icon: Icon, title, text }, index) => (
            <li key={title} className="relative rounded-2xl border border-zinc-200 bg-white p-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                Step {index + 1}
              </span>
              <Icon size={26} className="mt-3 text-[#221e52]" aria-hidden="true" />
              <h3 className="mt-3 font-josefin-sans text-lg font-semibold text-zinc-900">{title}</h3>
              <p className="mt-2 text-[15px] text-slate-600">{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  </CategoryPage>
);

export default page;
