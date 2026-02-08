"use client";
import { useEffect, useState } from "react";
import { BookCheck, Copy, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useAxios } from "@/hooks/useAxios";
import * as motion from "motion/react-client";
import CourseSwiper from "@/app/courses_back/CourseSwiper";
// import { Spinner } from "../ui/spinner";
import { Skeleton } from "../ui/skeleton";

const OfferSection = () => {
  const axios = useAxios();

  const [banner, setBanner] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const res = await axios.get("/banner?page=courses");
        const activeBanner = res?.data?.data?.find(
          (item) => item.active === true,
        );
        setBanner(activeBanner || null);
      } catch (error) {
        console.error("Banner fetch failed:", error);
        setBanner(null);
      } finally {
        setLoading(false);
      }
    };

    fetchBanner();
  }, []);

  const lightenColor = (hex, percent = 30) => {
    hex = hex.replace("#", "");

    const num = parseInt(hex, 16);
    const amt = Math.round(2.55 * percent);

    const r = Math.min(255, (num >> 16) + amt);
    const g = Math.min(255, ((num >> 8) & 0x00ff) + amt);
    const b = Math.min(255, (num & 0x0000ff) + amt);

    return `rgb(${r}, ${g}, ${b})`;
  };

  const themeColor = banner?.themeColor || "#2563eb";
  const lightColor = lightenColor(themeColor, 35);

  if (loading)
    return (
      <div className="min-h-screen w-full py-10 px-5 text-slate-900 bg-linear-to-br from-slate-300 via-slate-50 to-slate-300 flex items-center justify-center">
        <div className="w-full max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full flex flex-col gap-4 max-w-2xl">
            <Skeleton className={"w-[60%] h-[60px]"} />
            <Skeleton className={"w-[40%] h-[60px]"} />
            <Skeleton className={"w-[80%] h-[20px]"} />
            <Skeleton className={"w-[54%] h-[20px]"} />
            <Skeleton className={"w-[76%] h-[20px]"} />
            <Skeleton className={"w-[150px] mt-5 h-[40px]"} />
          </div>

          <Skeleton
            className={"w-full max-w-380px] aspect-square rounded-full"}
          />
        </div>
      </div>
    );

  if (!loading && !banner)
    return (
      <>
        {/* Title Section */}
        <motion.section
          className="pt-[100px] px-5 pb-20 min-h-screen flex flex-col justify-center items-center gap-8 mx-auto"
          style={{
            background: "url(/white-bg-2.jpg)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className="flex flex-col items-center justify-center gap-6 w-full max-w-3xl mx-auto">
            <motion.div
              initial={{ filter: "blur(5px)", scale: 0.98, opacity: 0.7 }}
              whileInView={{ filter: "blur(0px)", scale: 1, opacity: 1 }}
              transition={{ delay: 0.05, duration: 0.15, ease: "linear" }}
              viewport={{ margin: "400px 0px -30% 0px" }}
              className="w-fit bg-gradient-to-br from-purple-600 via-pink-600 to-purple-600 bg-clip-text"
            >
              <h2 className="text-[40px] lg:text-5xl 2xl:text-6xl block text-center text-zinc-900 font-[800]">
                Courses We <span className="text-transparent">Offer</span>
              </h2>
            </motion.div>

            <motion.p
              initial={{ filter: "blur(5px)", scale: 0.98, opacity: 0.7 }}
              whileInView={{ filter: "blur(0px)", scale: 1, opacity: 1 }}
              transition={{ delay: 0.05, duration: 0.15, ease: "linear" }}
              viewport={{ margin: "400px 0px -30% 0px" }}
              className="para block text-center"
              style={{ fontWeight: 400 }}
            >
              A language course is a structured program of study designed to
              teach individuals a specific language.Language courses can cover
              various aspects of language learning, including grammar,
              vocabulary, pronunciation, cultural nuances, and practical
            </motion.p>
          </div>

          <motion.div
            initial={{ filter: "blur(5px)", scale: 0.98, opacity: 0.7 }}
            whileInView={{ filter: "blur(0px)", scale: 1, opacity: 1 }}
            transition={{ delay: 0.05, duration: 0.15, ease: "linear" }}
            viewport={{ margin: "400px 0px -30% 0px" }}
            className="bg-white p-2 border border-zinc-300 shadow-sm rounded-2xl w-full max-w-md mx-auto"
          >
            <div className="md:ml-auto w-full bg-[#0b006b] rounded-2xl overflow-hidden aspect-[10/7]">
              <CourseSwiper />
            </div>
          </motion.div>

          {/* <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-5 left-1/2 transform -translate-x-1/2"
          >
            <div className="w-6 h-9 border-2 border-gray-300 rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-gray-300 rounded-full mt-2"
              />
            </div>
          </motion.div> */}
        </motion.section>
      </>
    );

  return (
    <section
      className="bg-white px-5 py-20 pt-[100px] md:pt-[100px] md:py-12 min-h-[90vh] md:min-h-[90vh] flex items-center justify-center fade"
      style={{
        backgroundImage: `url(${banner?.bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full max-w-5xl mx-auto flex flex-col gap-8 md:grid md:grid-cols-7 items-center justify-center">
        {/* Text Section */}
        <div className="font-josefin-sans text-sm font-medium text-white col-span-3 flex flex-col items-center md:items-start gap-3 relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold text-center md:text-left mb-3">
            {banner?.title}
          </h2>

          <p>{banner?.description}</p>

          {banner?.keyPoints?.map((point, i) => (
            <p key={i}>
              <ShieldCheck size={17} className="inline mr-1" />
              {point}
            </p>
          ))}

          {banner?.badge && (
            <button
              onClick={() =>
                window.navigator.clipboard.writeText(banner?.badge?.copyText)
              }
              className="group px-3 py-1 bg-white text-xs font-semibold rounded-2xl my-4"
              style={{
                color: banner?.themeColor,
              }}
            >
              <Copy
                size={12}
                className="inline-block mr-2 mb-1 group-active:scale-90 transition"
              />
              {banner?.badge?.displayText}
            </button>
          )}

          {banner?.button?.text && (
            <Link
              href={banner?.button?.link || "#all_courses"}
              style={{
                backgroundImage: `linear-gradient(90deg, ${themeColor}, ${lightColor}, ${themeColor})`,
              }}
              className="px-6 py-3 rounded-full shadow-lg hover:shadow-2xl font-semibold text-sm flex items-center gap-2 transition-all"
            >
              <BookCheck size={16} />
              {banner?.button?.text}
            </Link>
          )}
        </div>

        {/* Image Section */}
        {banner?.hero && (
          <Image
            src={banner?.hero}
            width={1000}
            height={1000}
            alt={banner?.title}
            className="w-full h-fit object-contain col-span-4 -mt-[100px] md:mt-0"
          />
        )}
      </div>
    </section>
  );
};

export default OfferSection;
