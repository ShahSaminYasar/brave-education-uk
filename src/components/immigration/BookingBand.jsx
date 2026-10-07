import Link from "next/link";
import { CONSULTATIONS, bookingHref, formatFee } from "@/lib/immigration";
import { ctaOnDark, ctaOutlineOnDark } from "./styles";

const BookingBand = ({ title = "Not sure where to start?" }) => {
  const [quick, assessment] = CONSULTATIONS;

  return (
    <div className="px-5 py-16">
      <section className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-br from-[#261a75] via-[#14094f] to-[#221e52] px-6 py-12 md:px-12 text-center text-white shadow-2xl shadow-[#261a75]/25">
        <h2 className="font-josefin-sans text-3xl md:text-4xl font-semibold text-balance">
          {title}
        </h2>
        <p className="mt-3 text-white/80 max-w-xl mx-auto text-pretty">
          Speak to a regulated adviser. Book a {quick.label} or a{" "}
          {assessment.label}.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href={bookingHref(assessment.id)}
            data-cta={`book-consultation-${assessment.id}`}
            className={ctaOnDark}
          >
            {assessment.cta} ({formatFee(assessment.price)})
          </Link>
          <Link
            href={bookingHref(quick.id)}
            data-cta={`book-consultation-${quick.id}`}
            className={ctaOutlineOnDark}
          >
            {quick.cta} ({formatFee(quick.price)})
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BookingBand;
