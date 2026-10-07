import {
  ArrowUpRight,
  Building2,
  Check,
  ClipboardCheck,
  ShieldAlert,
} from "lucide-react";
import Link from "next/link";
import * as motion from "motion/react-client";
import {
  GOV_LINKS,
  IAA,
  IMMIGRATION_BASE,
  SELF_SPONSORSHIP,
  bookingHref,
  categoryHref,
} from "@/lib/immigration";
import ImmigrationHero from "@/components/immigration/ImmigrationHero";
import SectionHeading from "@/components/immigration/SectionHeading";
import FaqList from "@/components/immigration/FaqList";
import BookingBand from "@/components/immigration/BookingBand";
import RegulatedNotice from "@/components/immigration/RegulatedNotice";
import { ctaPrimary, ctaSecondary } from "@/components/immigration/styles";

export const metadata = {
  title: SELF_SPONSORSHIP.metaTitle,
  description: SELF_SPONSORSHIP.metaDescription,
  alternates: { canonical: "/services/immigration/self-sponsorship" },
  robots: "index, follow",
};

const page = () => {
  return (
    <div>
      <ImmigrationHero
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "Immigration", href: IMMIGRATION_BASE },
          { label: "Self-Sponsorship" },
        ]}
        eyebrow={`Regulated by the IAA · Ref ${IAA.referenceNumber}`}
        title="Self-Sponsorship: Sponsor Your Own Skilled Worker Visa"
        intro={SELF_SPONSORSHIP.intro}
        actions={
          <>
            <Link
              href={bookingHref("30min")}
              data-cta="book-consultation-30min-self-sponsorship-hero"
              className={ctaPrimary}
            >
              Check your eligibility
            </Link>
            <Link href={bookingHref()} className={ctaSecondary}>
              Book appointment
            </Link>
          </>
        }
      />

      <section className="px-5 pb-16">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            eyebrow="How it works"
            title="From company to Certificate of Sponsorship"
          />
          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SELF_SPONSORSHIP.steps.map((step, index) => (
              <motion.li
                key={step.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -10% 0px" }}
                transition={{ duration: 0.3, delay: index * 0.06 }}
                className="rounded-2xl border border-zinc-200 bg-white p-6"
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
        </div>
      </section>

      <section className="px-5 pb-16 bg-slate-50 py-16">
        <div className="max-w-5xl mx-auto grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 md:p-8">
            <Building2 size={24} className="text-[#221e52]" aria-hidden="true" />
            <h2 className="mt-3 font-josefin-sans text-xl font-semibold text-zinc-900">
              What your company needs
            </h2>
            <p className="mt-2 text-[15px] text-slate-600">
              Before the Home Office grants a sponsor licence, it must be satisfied your company
              is genuine and capable of meeting its sponsor duties.
            </p>
            <ul className="mt-5 space-y-3">
              {SELF_SPONSORSHIP.companyNeeds.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[15px] text-slate-700">
                  <Check size={16} className="mt-1 shrink-0 text-primary" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 md:p-8">
            <ShieldAlert size={24} className="text-amber-700" aria-hidden="true" />
            <h2 className="mt-3 font-josefin-sans text-xl font-semibold text-zinc-900">
              {SELF_SPONSORSHIP.genuineVacancy.title}
            </h2>
            <p className="mt-2 text-[15px] text-slate-700">
              {SELF_SPONSORSHIP.genuineVacancy.text}
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-16">
        <div className="max-w-3xl mx-auto rounded-2xl border border-zinc-200 bg-white p-6 md:p-8">
          <ClipboardCheck size={22} className="text-[#221e52]" aria-hidden="true" />
          <h2 className="mt-3 font-josefin-sans text-lg font-semibold text-zinc-900">
            Official information
          </h2>
          <ul className="mt-4 space-y-2.5">
            <li>
              <Link
                href={GOV_LINKS.sponsorLicence}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-start gap-1 text-sm text-slate-700 hover:text-primary hover:underline underline-offset-2"
              >
                Sponsor a worker: get a licence (GOV.UK)
                <ArrowUpRight size={13} className="mt-0.5 shrink-0" aria-hidden="true" />
              </Link>
            </li>
            <li>
              <Link
                href={GOV_LINKS.skilledWorkerJob}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-start gap-1 text-sm text-slate-700 hover:text-primary hover:underline underline-offset-2"
              >
                Skilled Worker visa: job requirements (GOV.UK)
                <ArrowUpRight size={13} className="mt-0.5 shrink-0" aria-hidden="true" />
              </Link>
            </li>
          </ul>
          <p className="mt-5 text-sm text-slate-600">
            Already have a Certificate of Sponsorship from your own company? See our{" "}
            <Link
              href={`${categoryHref("work-and-study")}#skilled-worker`}
              className="font-semibold text-primary hover:underline underline-offset-2"
            >
              Skilled Worker visa service
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="px-5 py-16 bg-slate-50">
        <SectionHeading eyebrow="FAQ" title="Common questions about self-sponsorship" />
        <FaqList items={SELF_SPONSORSHIP.faqs} />
      </section>

      <BookingBand title="Not sure if self-sponsorship is right for you?" />
      <RegulatedNotice />
    </div>
  );
};

export default page;
