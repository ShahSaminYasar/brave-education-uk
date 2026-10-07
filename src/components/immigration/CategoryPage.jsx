import { ArrowRight, ArrowUpRight, Check, Dot } from "lucide-react";
import Link from "next/link";
import * as motion from "motion/react-client";
import {
  FEES_PATH,
  IAA,
  IMMIGRATION_BASE,
  SERVICES,
  bookingHref,
  getCategory,
} from "@/lib/immigration";
import ImmigrationHero from "./ImmigrationHero";
import SectionHeading from "./SectionHeading";
import ProcessSteps from "./ProcessSteps";
import ConsultationCards from "./ConsultationCards";
import CategoryCards from "./CategoryCards";
import RegulatedNotice from "./RegulatedNotice";
import { ctaPrimary, ctaSecondary } from "./styles";

const ServiceBlock = ({ id }) => {
  const service = SERVICES[id];

  return (
    <motion.article
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.35 }}
      className="scroll-mt-28 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm"
    >
      <div className="grid md:grid-cols-[1fr_260px]">
        <div className="p-6 md:p-8">
          <h2 className="font-josefin-sans text-2xl font-semibold text-zinc-900">
            {service.name}
          </h2>
          <p className="mt-2 text-slate-600">{service.forWho}</p>

          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#221e52]">
                How we help
              </h3>
              <ul className="mt-3 space-y-2.5">
                {service.weHelp.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-[15px] text-slate-700"
                  >
                    <Check
                      size={16}
                      className="mt-1 shrink-0 text-primary"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#221e52]">
                What you'll typically need
              </h3>
              <ul className="mt-3 space-y-2.5">
                {service.youNeed.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-1.5 text-[15px] text-slate-700"
                  >
                    <Dot
                      size={20}
                      className="shrink-0 text-slate-400"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {service.note && (
            <p className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-1 rounded-xl border border-red-100 bg-red-50/60 px-4 py-3 text-sm text-slate-700">
              {service.note.text}
              <Link
                href={service.note.href}
                className="inline-flex items-center gap-1 font-semibold text-primary hover:underline underline-offset-2"
              >
                {service.note.cta} <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </p>
          )}
        </div>

        <div className="flex flex-col gap-2 border-t border-zinc-200 bg-slate-50 p-6 md:border-l md:border-t-0 md:p-8">
          {service.officialLinks?.length > 0 && (
            <>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#221e52]">
                Official information
              </p>
              <ul className="space-y-2">
                {service.officialLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-start gap-1 text-sm text-slate-700 hover:text-primary hover:underline underline-offset-2"
                    >
                      {link.label}
                      <ArrowUpRight
                        size={13}
                        className="mt-0.5 shrink-0"
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          )}
          <Link
            href={bookingHref("30min")}
            data-cta={`book-consultation-30min-${id}`}
            className={`${ctaPrimary} mt-4 w-full`}
          >
            Book a consultation
          </Link>
        </div>
      </div>
    </motion.article>
  );
};

const CategoryPage = ({ slug, children }) => {
  const category = getCategory(slug);

  return (
    <div>
      <ImmigrationHero
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "Immigration", href: IMMIGRATION_BASE },
          { label: category.shortTitle },
        ]}
        eyebrow={`Regulated by the IAA · Ref ${IAA.referenceNumber}`}
        title={category.title}
        intro={category.intro}
        actions={
          <>
            <Link
              href={bookingHref("30min")}
              data-cta="book-consultation-30min-hero"
              className={ctaPrimary}
            >
              Book initial assessment
            </Link>
            <Link href={FEES_PATH} className={ctaSecondary}>
              View all fees
            </Link>
          </>
        }
      >
        <ul
          className="mt-4 flex flex-wrap justify-center gap-2"
          aria-label="Services on this page"
        >
          {category.services.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/85 px-4 py-2 text-sm text-slate-700 transition-colors hover:border-[#221e52] hover:text-[#221e52]"
              >
                {SERVICES[id].shortName || SERVICES[id].name}
              </a>
            </li>
          ))}
        </ul>
      </ImmigrationHero>

      <section className="px-5 pb-16">
        <div className="max-w-5xl mx-auto space-y-6">
          {category.services.map((id) => (
            <ServiceBlock key={id} id={id} />
          ))}
        </div>
      </section>

      {children}

      <section className="px-5 py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            eyebrow="How it works"
            title="Sign & Confirm"
            intro={
              "Sign the Letter of Authority (LA) and Client Care Letter (CCL), submit your required documents, and complete the fee payment to formally begin your case."
            }
          />
          <ProcessSteps />
        </div>
      </section>

      <section className="px-5 py-16">
        <SectionHeading
          eyebrow="Start here"
          title="Book a consultation"
          intro="Talk your situation through with a regulated adviser before you commit to an application."
        />
        <ConsultationCards />
      </section>

      <section className="px-5 py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            eyebrow="More services"
            title="Other immigration services"
          />
          <CategoryCards exclude={slug} />
        </div>
      </section>

      <RegulatedNotice />
    </div>
  );
};

export default CategoryPage;
