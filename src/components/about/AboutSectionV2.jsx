"use client";
import { useRef, useState } from "react";
import ReactPlayer from "react-player";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import { ArrowUpRight, Pause, Play } from "lucide-react";
import { Button } from "../ui/button";
import ScrollReveal from "../ui/ScrollReveal";
import SectionTitle from "../ui/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import { useMainContext } from "@/hooks/useMainContext";
import Link from "next/link";

const AboutSectionV2 = () => {
  const { siteLoaded, setSiteLoaded } = useMainContext();

  // Refs
  const videoSectionRef = useRef(null);

  // States
  const [playing, setPlaying] = useState(false);

  const { scrollYProgress } = useScroll({
    target: videoSectionRef,
    offset: ["start end", "end start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.12 || latest > 0.85) {
      setPlaying(false);
    }
  });

  // Use uniform scale to maintain aspect ratio
  const scale = useTransform(
    scrollYProgress,
    [0, 0.38, 0.73, 0.83, 1],
    [0.4, 1, 1.1, 1.2, 2]
  );

  const opacity = useTransform(scrollYProgress, [0, 0.7, 0.9], [1, 1, 0]);

  const y = useTransform(scrollYProgress, [0, 0.44], [200, 0]);

  return (
    <>
      {/* Video Section */}
      <div ref={videoSectionRef} className="w-[100%] min-h-[150vh] relative">
        <section className="w-full overflow-hidden min-h-screen flex items-center justify-center section sticky top-0">
          <motion.div
            className="w-full max-w-4xl aspect-[9/16] md:aspect-video rounded-2xl overflow-hidden mx-auto origin-center relative group"
            style={{
              scale: scale,
              y: y,
              opacity: opacity,
            }}
          >
            <ReactPlayer
              // src="/assets/videos/about_section_video.mp4"
              src="https://vimeo.com/1131962110?share=copy&fl=sv&fe=ci"
              width="100%"
              height="100%"
              playing={playing}
              loop={true}
              muted={false}
              controls={true}
              playsInline={true}
              style={{
                pointerEvents: playing ? "all" : "none",
                scale: 1.06,
              }}
            />

            <div
              className={`absolute top-0 left-0 w-full h-full block md:hidden ${
                playing
                  ? "opacity-0 pointer-events-none"
                  : "pointer-events-auto opacity-100"
              } duration-100`}
              style={{
                background:
                  "url(/assets/videos/about_section_video_thumbnail_portrait.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }}
            ></div>

            <div
              className={`absolute top-0 left-0 w-full h-full hidden md:block ${
                playing
                  ? "opacity-0 pointer-events-none"
                  : "pointer-events-auto opacity-100"
              } duration-100`}
              style={{
                background:
                  "url(/assets/videos/about_section_video_thumbnail.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }}
            ></div>

            <button
              onClick={() => setPlaying((prev) => !prev)}
              className={`text-white cursor-pointer absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                playing ? "opacity-0" : "opacity-100"
              } group-hover:opacity-100`}
            >
              {playing ? <Pause size={80} /> : <Play size={80} />}
            </button>
          </motion.div>
        </section>
      </div>

      <div className="bg-transparent w-full sticky top-0 md:about-content-bg">
        <section className="w-full min-h-screen max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 section">
          <div className="md:bg-transparent p-5 pt-0 md:p-0 rounded-2xl flex flex-col items-start justify-center gap-3">
            <SectionTitle text={"Who Are We?"} align="left" />

            <ScrollReveal
              baseOpacity={0}
              enableBlur={true}
              baseRotation={5}
              blurStrength={10}
              textClassName="para mb-1"
            >
              At Brave Education UK, we help students and professionals achieve
              their dreams of studying, working, and settling abroad. Our
              services cover everything from choosing the right study program
              and applying for a visa, to preparing for English tests and even
              setting up your company in the UK.
            </ScrollReveal>

            <ScrollReveal
              baseOpacity={0}
              enableBlur={true}
              baseRotation={5}
              blurStrength={10}
              textClassName="para"
            >
              We focus on making the whole process simple, transparent, and
              stress-free, so you always know what to expect. Whether you are
              planning to study, build a career, or explore new opportunities,
              we’re here to guide you step by step.
            </ScrollReveal>

            <Link href="/services">
              <Button animatedEntry={true} className={"mt-2"}>
                Our Services <ArrowUpRight />
              </Button>
            </Link>
          </div>

          <div className="md:ml-auto h-full bg-[#0b006b] rounded-2xl overflow-hidden border-[8px] border-white max-h-[500px] aspect-[12/9] md:aspect-[9/12] hidden md:block">
            <Swiper
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              className="w-full h-full [&_.swiper-slide]:flex [&_.swiper-slide]:items-center [&_.swiper-slide]:justify-center"
            >
              <SwiperSlide>
                <Image
                  src={"/assets/images/uk_consultation.jpg"}
                  width={600}
                  height={400}
                  alt="Brave Education"
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={"/assets/images/uk_classroom_2.jpg"}
                  width={600}
                  height={400}
                  alt="Brave Education"
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={"/assets/images/uk_office.jpg"}
                  width={600}
                  height={400}
                  alt="Brave Education"
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </section>
      </div>
    </>
  );
};
export default AboutSectionV2;
