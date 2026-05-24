import Image from "next/image";
import SectionTitle from "../ui/SectionTitle";
import * as motion from "motion/react-client";
import IASBadge from "../IASBadge";

const logos = [
  {
    src: "/assets/images/accreditations/tcl.jpg",
    alt: "Trinity College London",
  },
  {
    src: "/assets/images/accreditations/bbcci.jpg",
    alt: "British Bangladesh Chamber of Commerce & Industry",
  },
  {
    src: "/assets/images/accreditations/british_council.jpg",
    alt: "British Council IELTS",
  },
  {
    src: "/assets/images/accreditations/ccot.jpg",
    alt: "Chartered College of Teaching",
  },
  { src: "/assets/images/accreditations/idp.jpg", alt: "IDP" },
  {
    src: "/assets/images/accreditations/ukrlp.jpg",
    alt: "UK Register of Learning Providers",
  },
  { src: "/assets/images/accreditations/bc.jpg", alt: "British Council" },
  {
    src: "/assets/images/accreditations/eaie.jpg",
    alt: "European Association for International Education",
  },
];

const AccreditationsSection = () => {
  return (
    <div className="bg-white px-[20px] pt-[90px] pb-0">
      <section className="w-full max-w-6xl mx-auto">
        <SectionTitle
          text={"Accreditations"}
          subtext={"Certified excellence you can trust"}
          align="center"
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ margin: "700px 0px -10% 0px" }}
          className="relative mx-auto mt-10 mb-4 w-full max-w-sm"
        >
          {/* Subtle glow ring */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-100 via-indigo-50 to-white blur-xl opacity-80 -z-10 scale-105" />

          <div className="relative flex flex-col items-center gap-4 rounded-2xl border border-blue-100 bg-gradient-to-b from-blue-50 to-white px-10 py-8 shadow-xl shadow-blue-100/60">
            {/* Badge */}
            <IASBadge />

            {/* Descriptor */}
            <p className="text-center text-xs text-slate-500 leading-relaxed max-w-[220px]">
              ICEF-accredited agency - meeting the highest global standards in
              international education.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ margin: "700px 0px -30% 0px" }}
          className="w-full max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-px items-center justify-center flex-wrap mt-10 border border-slate-100 rounded-xl p-0 overflow-hidden bg-slate-100 shadow-xl mb-7 shadow-black/5"
        >
          {logos?.map((logo, index) => (
            <div
              key={`logo_${index}`}
              className="bg-white w-full h-full flex justify-center items-center p-6"
            >
              <Image
                src={logo?.src}
                width={200}
                height={200}
                alt={logo?.alt}
                className="w-full max-w-[140px] md:max-w-[160px] xl:max-w-[200px]"
              />
            </div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};
export default AccreditationsSection;
