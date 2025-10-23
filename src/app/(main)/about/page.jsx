"use client";
import AboutPageCounters from "@/components/AboutPageCounters";
import AboutPageMissionVision from "@/components/AboutPageMissionVision";
import Map from "@/components/Map";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionTitle from "@/components/ui/SectionTitle";
import { Pause, Play } from "lucide-react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import { useRef, useState } from "react";
import ReactPlayer from "react-player";

const page = () => {
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

  const y = useTransform(scrollYProgress, [0, 0.44], [200, 0]);

  return (
    <main
      style={{
        background:
          "linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0) 80%, rgba(0, 0, 0, 1) 100%), url(/page_bg.jpg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <motion.section
        initial={{ filter: "blur(5px)", scale: 0.98, opacity: 0.7 }}
        animate={{ filter: "blur(0px)", scale: 1, opacity: 1 }}
        transition={{ delay: 0.05, duration: 0.15, ease: "linear" }}
        className="py-[100px] px-5 flex items-center justify-center min-h-[100vh]"
      >
        <SectionTitle
          text={"ABOUT US"}
          style={{
            fontSize: "70px",
            fontWeight: "800",
            color: "#fff",
          }}
          align="center"
          animate={false}
        />
      </motion.section>

      <div className="relative min-h-[250vh]">
        {/* Video Section */}
        <div
          ref={videoSectionRef}
          className="w-[100%] min-h-[150vh] relative bg-[#000]"
        >
          <section className="w-full overflow-x-hidden min-h-screen flex items-center justify-center section sticky top-0">
            <motion.div
              className="w-full max-w-4xl aspect-[9/16] md:aspect-video rounded-2xl overflow-hidden mx-auto origin-center relative group"
              style={{
                scale: scale,
                y: y,
              }}
            >
              <ReactPlayer
                src="/assets/videos/about_section_video.mp4"
                width="100%"
                height="100%"
                playing={playing}
                loop={true}
                controls={false}
                playsinline={true}
                style={{
                  pointerEvents: "none",
                  scale: 1.06,
                }}
              />

              <div
                className={`absolute top-0 left-0 w-full h-full flex items-center justify-center ${
                  playing ? "opacity-0" : "opacity-100"
                } duration-100`}
                style={{
                  background:
                    "url(/assets/videos/about_section_video_thumbnail.jpg)",
                  backgroundSize: "cover",
                }}
              >
                <button
                  onClick={() => setPlaying((prev) => !prev)}
                  className="text-white cursor-pointer"
                >
                  {playing ? <Pause size={80} /> : <Play size={80} />}
                </button>
              </div>
            </motion.div>
          </section>
        </div>

        {/* Content Section */}
        <div className="bg-white h-screen w-full sticky top-0 flex items-center justify-center px-5 py-20">
          <div className="w-full max-w-6xl mx-auto">
            <ScrollReveal baseRotation={0} style={{ fontSize: "30px" }}>
              Brave Education UK Limited, founded in 2021 and based in London
              and Sylhet, is a British Council–certified global agency
              specializing in recruiting students for top universities
              worldwide. With a strong record of successful enrollments and
              satisfied students, we offer tailored support across fields like
              Medicine, Business, IT, Law, and Engineering.
            </ScrollReveal>
          </div>
        </div>
      </div>

      <AboutPageCounters />

      <AboutPageMissionVision />

      <Map />
    </main>
  );
};
export default page;
