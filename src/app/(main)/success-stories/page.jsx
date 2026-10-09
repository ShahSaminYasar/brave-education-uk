import * as motion from "motion/react-client";
import Link from "next/link";
import { ArrowUpRight, Award, CalendarCheck, Globe, TrendingUp } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/button";
import SuccessStoriesSections from "./SuccessStoriesSections";

export const metadata = {
  title: "Success Stories",
  description:
    "Real outcomes from Brave Education UK students: English course passes, university admissions and UK immigration success stories.",
  keywords: [
    "Brave Education UK success stories",
    "student success stories",
    "university admission success",
    "immigration success stories UK",
  ],
  robots: "index, follow",
};

const STATS = [
  { icon: Award, value: "500+", label: "Success Stories" },
  { icon: TrendingUp, value: "94%", label: "Success Rate" },
  { icon: Globe, value: "10+", label: "Countries" },
  { icon: CalendarCheck, value: "5+", label: "Years of Experience" },
];

const page = () => {
  return (
    <main>
      <div
        style={{
          background:
            "linear-gradient(182deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 70%, rgba(255, 255, 255, 1) 100%), url(/page_bg_2.jpg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <motion.section
          initial={{ filter: "blur(5px)", scale: 0.98, opacity: 0.7 }}
          animate={{ filter: "blur(0px)", scale: 1, opacity: 1 }}
          transition={{ delay: 0.05, duration: 0.15, ease: "linear" }}
          className="py-[100px] w-full max-w-6xl mx-auto px-5 flex flex-col gap-3 items-center justify-center min-h-screen"
        >
          <div className="w-fit bg-gradient-to-br from-purple-600 via-pink-600 to-purple-600 bg-clip-text">
            <SectionTitle
              subtext={"Real Students, Real Outcomes"}
              text={"Success Stories"}
              align="center"
              style={{ color: "transparent" }}
              animate={false}
            />
          </div>

          <p className="para block text-center w-full max-w-md mx-auto">
            Hear from students who passed their English course, secured
            university admission, or achieved their UK immigration goal with our
            support.
          </p>

          <div className="w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            {STATS.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-1 rounded-2xl border border-zinc-200 bg-white/60 backdrop-blur-sm px-4 py-6 shadow-sm"
              >
                <Icon size={22} className="text-primary mb-1" aria-hidden="true" />
                <span className="font-poppins text-2xl md:text-3xl font-bold text-zinc-900">
                  {value}
                </span>
                <span className="text-xs md:text-sm text-slate-600 text-center">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </motion.section>
      </div>

      <SuccessStoriesSections />

      <div className="px-5 py-16">
        <section className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-br from-[#261a75] via-[#14094f] to-[#221e52] px-6 py-12 md:px-12 text-center text-white shadow-2xl shadow-[#261a75]/25">
          <h2 className="font-josefin-sans text-3xl md:text-4xl font-semibold">
            Ready to Write Your Own Success Story?
          </h2>
          <p className="mt-3 text-white/80 max-w-xl mx-auto">
            Book a free counselling session and let our team guide you towards
            your education, university or immigration goals.
          </p>
          <div className="mt-8 flex items-center justify-center">
            <Link href={"/appointment"}>
              <Button
                variant={"secondary"}
                className={"border-2 border-white/70 text-[#180d5d] bg-white"}
              >
                Book a Free Counselling <ArrowUpRight />
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
};

export default page;
