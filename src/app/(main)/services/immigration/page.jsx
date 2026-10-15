import {
  ArrowUpRight,
  Building2,
  MapPin,
  PoundSterling,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import {
  CONSULTATIONS,
  FEES_PATH,
  HUB_FAQS,
  IAA,
  SELF_SPONSORSHIP_PATH,
  SERVICES,
  bookingHref,
  formatFee,
} from "@/lib/immigration";
import ImmigrationHero from "@/components/immigration/ImmigrationHero";
import SectionHeading from "@/components/immigration/SectionHeading";
import CategoryCards from "@/components/immigration/CategoryCards";
import ServiceFinder from "@/components/immigration/ServiceFinder";
import ProcessSteps from "@/components/immigration/ProcessSteps";
import ConsultationCards from "@/components/immigration/ConsultationCards";
import FaqList from "@/components/immigration/FaqList";
import BookingBand from "@/components/immigration/BookingBand";
import RegulatedNotice from "@/components/immigration/RegulatedNotice";
import { ctaPrimary, ctaSecondary } from "@/components/immigration/styles";

const SITE_URL = "https://www.braveeducationuk.com";
const assessment = CONSULTATIONS.find((c) => c.id === "30min");

export const metadata = {
  title: "UK Immigration Advice & Visa Services",
  description: `IAA-regulated immigration advice in London (ref ${IAA.referenceNumber}). Fixed-fee help with Skilled Worker, Student, spouse and family visas, ILR, British citizenship and visitor visas.`,
  keywords: [
    "immigration adviser London",
    "IAA regulated immigration adviser",
    "UK visa help",
    "Skilled Worker visa help",
    "spouse visa help",
    "ILR application help",
    "British citizenship application",
    "fixed fee immigration advice",
  ],
  alternates: { canonical: "/services/immigration" },
  robots: "index, follow",
};

const TRUST_POINTS = [
  {
    icon: ShieldCheck,
    title: "IAA regulated",
    text: `Reference ${IAA.referenceNumber}`,
  },
  { icon: PoundSterling, title: "Fixed fees", text: "Published upfront" },
  {
    icon: MapPin,
    title: "Online or in person",
    text: "129 Whitechapel Road, London",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Brave Education UK: Immigration Services",
  url: `${SITE_URL}/services/immigration`,
  description:
    "IAA-regulated UK immigration advice and fixed-fee visa, settlement and citizenship applications.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "129 Whitechapel Road",
    addressLocality: "London",
    postalCode: "E1 1DT",
    addressCountry: "GB",
  },
  areaServed: "GB",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Immigration services",
    itemListElement: Object.values(SERVICES).map((service) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: service.name },
      price: service.fee,
      priceCurrency: "GBP",
    })),
  },
};

const page = () => {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <ImmigrationHero
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "Immigration" },
        ]}
        eyebrow="Regulated by the Immigration Advice Authority"
        title="UK Immigration Advice You Can Trust"
        intro="Fixed-fee help with UK visas, settlement and citizenship from an IAA-regulated adviser. Meet us online or at our office in Whitechapel, London."
        actions={
          <>
            <Link
              href={bookingHref(assessment.id)}
              data-cta="book-consultation-30min-hero"
              className={ctaPrimary}
            >
              {assessment.cta}
            </Link>
            <Link href={FEES_PATH} className={ctaSecondary}>
              View our fees
            </Link>
          </>
        }
      />

      <section aria-label="Why choose us" className="px-5 pb-16">
        <ul className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-px overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-200">
          {TRUST_POINTS.map(({ icon: Icon, title, text }) => (
            <li
              key={title}
              className="flex flex-col items-center gap-2 bg-white px-4 py-6 text-center"
            >
              <Icon size={22} className="text-primary" aria-hidden="true" />
              <span className="font-semibold text-zinc-900">{title}</span>
              <span className="text-sm text-slate-600">{text}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="px-5 pb-16">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            eyebrow="Our services"
            title="How we can help"
            intro="Choose an area to see what's included, what you'll need and our fixed fee."
          />
          <CategoryCards />

          <Link
            href={SELF_SPONSORSHIP_PATH}
            className="group mt-6 flex flex-col gap-4 rounded-2xl border border-zinc-200 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-xl sm:flex-row sm:items-center sm:justify-between focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-primary/50"
          >
            <div className="flex items-center gap-4">
              <span className="grid size-12 shrink-0 place-content-center rounded-xl bg-gradient-to-br from-red-50 to-indigo-100">
                <Building2
                  size={24}
                  className="text-[#221e52]"
                  aria-hidden="true"
                />
              </span>
              <div>
                <h3 className="font-josefin-sans text-xl font-semibold text-zinc-900 group-hover:text-primary transition-colors">
                  Self-Sponsorship
                </h3>
                <p className="mt-1 text-sm text-slate-600">
                  Own and run a UK company? See how it could sponsor your own
                  Skilled Worker visa.
                </p>
              </div>
            </div>
            <ArrowUpRight
              size={18}
              className="shrink-0 text-slate-400 transition-colors group-hover:text-primary"
              aria-hidden="true"
            />
          </Link>
        </div>
      </section>

      <section className="px-5 py-16 bg-slate-50">
        <SectionHeading
          eyebrow="Find your service"
          title="Not sure which visa you need?"
          intro="Answer a few quick questions and we'll point you in the right direction."
        />
        <ServiceFinder />
      </section>

      <section className="px-5 py-16">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            eyebrow="How it works"
            title="From First Call to Decision"
          />
          <ProcessSteps />
        </div>
      </section>

      <section className="px-5 py-16 bg-slate-50">
        <SectionHeading
          eyebrow="Start here"
          title="Book a consultation"
          intro="Talk your situation through with a regulated adviser before you commit to an application."
        />
        <ConsultationCards />
      </section>

      <section className="px-5 py-16">
        <SectionHeading eyebrow="FAQ" title="Common questions" />
        <FaqList items={HUB_FAQS} />
      </section>

      <BookingBand />
      <RegulatedNotice />
    </div>
  );
};

export default page;
