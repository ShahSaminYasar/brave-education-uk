import { ArrowUpRight, Check, CircleMinus, CreditCard } from "lucide-react";
import Link from "next/link";
import {
  CONSULTATIONS,
  FEE_FAQS,
  FEE_GROUPS,
  FEES_UPDATED,
  GOV_LINKS,
  IMMIGRATION_BASE,
  INCLUDED,
  PAID_SEPARATELY,
  PAYMENT_TERMS,
  SERVICES,
  bookingHref,
  formatFee,
  serviceHref,
} from "@/lib/immigration";
import ImmigrationHero from "@/components/immigration/ImmigrationHero";
import SectionHeading from "@/components/immigration/SectionHeading";
import ConsultationCards from "@/components/immigration/ConsultationCards";
import FaqList from "@/components/immigration/FaqList";
import BookingBand from "@/components/immigration/BookingBand";
import RegulatedNotice from "@/components/immigration/RegulatedNotice";
import { ctaPrimary, ctaSecondary } from "@/components/immigration/styles";

export const metadata = {
  title: "Immigration Fees: Fixed-Fee Pricing",
  description:
    "Clear, fixed fees for UK immigration advice and applications. Consultations from £30, no VAT added. Skilled Worker, Student, family, ILR, citizenship and visitor visas.",
  alternates: { canonical: "/services/immigration/fees" },
  robots: "index, follow",
};

const assessment = CONSULTATIONS.find((c) => c.id === "30min");

const page = () => {
  return (
    <div>
      <ImmigrationHero
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "Immigration", href: IMMIGRATION_BASE },
          { label: "Fees" },
        ]}
        eyebrow={`Fixed fees · Updated ${FEES_UPDATED}`}
        title="Clear, Fixed Fees"
        intro="Every service has one fixed fee, published upfront with no VAT added. Not sure which service you need? Start with a consultation."
        actions={
          <>
            <Link
              href={bookingHref(assessment.id)}
              data-cta="book-consultation-30min-hero"
              className={ctaPrimary}
            >
              {assessment.cta} ({formatFee(assessment.price)})
            </Link>
            <a href="#fee-table" className={ctaSecondary}>
              See all fees
            </a>
          </>
        }
      />

      <section className="px-5 pb-16">
        <SectionHeading
          eyebrow="Start here"
          title="Consultations"
          intro="Most clients start with a consultation. You'll leave knowing your options and the exact fee for your application."
        />
        <ConsultationCards />
      </section>

      <section id="fee-table" className="scroll-mt-24 px-5 py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            eyebrow="Application fees"
            title="Our fixed fees"
            intro="These are our fees for working on your application. Home Office fees are paid separately."
          />

          <div className="grid gap-6 md:grid-cols-2">
            {FEE_GROUPS.map((group) => (
              <div
                key={group.title}
                className="rounded-2xl border border-zinc-200 bg-white p-6"
              >
                <table className="w-full text-left">
                  <caption className="mb-3 text-left font-josefin-sans text-lg font-semibold text-zinc-900">
                    {group.title}
                  </caption>
                  <thead className="sr-only">
                    <tr>
                      <th scope="col">Service</th>
                      <th scope="col">Fixed fee</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-100">
                    {group.rows.map((row) => (
                      <tr key={row.label || row.id}>
                        <th
                          scope="row"
                          className="py-3 pr-4 text-[15px] font-normal text-slate-700"
                        >
                          <Link
                            href={serviceHref(row.id)}
                            className="hover:text-primary hover:underline underline-offset-2"
                          >
                            {row.label || SERVICES[row.id].name}
                          </Link>
                        </th>
                        <td className="py-3 text-right font-semibold text-zinc-900 whitespace-nowrap">
                          {formatFee(SERVICES[row.id].fee)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center gap-3 text-center">
            <p className="text-slate-600">
              Not sure which application applies to you?
            </p>
            <Link
              href={bookingHref()}
              data-cta="book-consultation-30min-fee-table"
              className={ctaPrimary}
            >
              {assessment.cta}
            </Link>
          </div>
        </div>
      </section>

      <section className="px-5 py-16">
        <div className="max-w-5xl mx-auto">
          <SectionHeading eyebrow="No surprises" title="What's included" />
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-zinc-200 bg-white p-6">
              <h3 className="font-josefin-sans text-lg font-semibold text-zinc-900">
                Covered by our fixed fee
              </h3>
              <ul className="mt-4 space-y-3">
                {INCLUDED.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[15px] text-slate-700"
                  >
                    <Check
                      size={18}
                      className="mt-0.5 shrink-0 text-emerald-600"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-zinc-200 bg-white p-6">
              <h3 className="font-josefin-sans text-lg font-semibold text-zinc-900">
                Paid separately
              </h3>
              <ul className="mt-4 space-y-3">
                {PAID_SEPARATELY.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[15px] text-slate-700"
                  >
                    <CircleMinus
                      size={18}
                      className="mt-0.5 shrink-0 text-slate-400"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href={GOV_LINKS.visaFees}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline underline-offset-2"
              >
                Check Home Office fees on GOV.UK{" "}
                <ArrowUpRight size={14} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <SectionHeading eyebrow="Payment" title="Payment and terms" />
          <ul className="space-y-3 rounded-2xl border border-zinc-200 bg-white p-6">
            {PAYMENT_TERMS.map((term) => (
              <li
                key={term}
                className="flex items-start gap-3 text-[15px] text-slate-700"
              >
                <CreditCard
                  size={18}
                  className="mt-0.5 shrink-0 text-[#221e52]"
                  aria-hidden="true"
                />
                {term}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-5 py-16">
        <SectionHeading eyebrow="FAQ" title="Questions about fees" />
        <FaqList items={FEE_FAQS} />
      </section>

      <BookingBand title="Ready to get started?" />
      <RegulatedNotice />
    </div>
  );
};

export default page;
