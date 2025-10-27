"use client";
import AboutPageCounters from "@/components/about/AboutPageCounters";
import AboutPageMissionVision from "@/components/about/AboutPageMissionVision";
import Map from "@/components/Map";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionTitle from "@/components/ui/SectionTitle";
import { Pause, Play } from "lucide-react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";

const page = () => {
  // Refs
  const videoSectionRef = useRef(null);

  // States
  const [playing, setPlaying] = useState(false);
  const [videoSectionOverlayVisible, setVideoSectionOverlayVisible] =
    useState(false);

  const { scrollYProgress } = useScroll({
    target: videoSectionRef,
    offset: ["start end", "end start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.12 || latest > 0.85) {
      setPlaying(false);
    }
    if (latest > 0.85) {
      setVideoSectionOverlayVisible(true);
    } else {
      if (videoSectionOverlayVisible) {
        setVideoSectionOverlayVisible(false);
      }
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
          "linear-gradient(182deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 70%, rgba(255, 255, 255, 1) 100%), url(/white-bg.jpg)",
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
        className="py-[100px] w-full max-w-6xl mx-auto px-5 flex flex-col gap-3 items-center justify-center min-h-[100vh]"
      >
        <div className="w-fit bg-gradient-to-br from-purple-600 via-pink-600 to-purple-600 bg-clip-text">
          <SectionTitle
            subtext={"About"}
            text={"Brave Education"}
            align="center"
            style={{
              fontSize: "50px",
              fontWeight: "800",
              color: "transparent",
            }}
            animate={false}
          />
        </div>

        <p className="para block text-center w-full max-w-md mx-auto">
          Redefining learning for a brave new world. Where curiosity meets
          courage, and education becomes an adventure.
        </p>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-9 border-2 border-gray-300 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-gray-300 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </motion.section>

      <div className="relative min-h-[250vh]">
        {/* Content Section */}
        <div className="bg-white h-screen w-full sticky top-0 flex items-center justify-center px-5 py-20">
          <div className="w-full max-w-6xl mx-auto hidden lg:block">
            <ScrollReveal
              baseRotation={0}
              style={{ fontSize: "30px", fontWeight: "400" }}
            >
              Brave Education UK Limited, founded in 2021 and based in London
              and Sylhet, is a British Council–certified student consultancy
              specializing in recruiting students for top universities
              worldwide. With a strong record of successful enrollments and
              satisfied students, we offer tailored support across fields like
              Medicine, Business, IT, Law, and Engineering. In addition to this,
              we offer a range of language courses.
            </ScrollReveal>
          </div>
          <div className="w-full max-w-6xl mx-auto block lg:hidden">
            <ScrollReveal
              baseRotation={0}
              style={{ fontSize: "22", fontWeight: "400" }}
            >
              Brave Education UK Limited, founded in 2021 and based in London
              and Sylhet, is a British Council–certified global agency
              specializing in recruiting students for top universities
              worldwide. With a strong record of successful enrollments and
              satisfied students, we offer tailored support across fields like
              Medicine, Business, IT, Law, and Engineering.
            </ScrollReveal>
          </div>
        </div>

        {/* Video Section */}
        <div
          ref={videoSectionRef}
          className="w-[100%] min-h-[150vh] relative"
          style={{
            background: "url(/white-bg-2.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <section className="w-full overflow-hidden min-h-screen flex items-center justify-center section sticky top-0">
            <AnimatePresence>
              {videoSectionOverlayVisible && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent  to-[#08093f] z-10"
                ></motion.div>
              )}
            </AnimatePresence>

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
                className={`absolute top-0 left-0 w-full h-full block md:hidden ${
                  playing ? "opacity-0" : "opacity-100"
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
                  playing ? "opacity-0" : "opacity-100"
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
      </div>

      <AboutPageCounters />

      <AboutPageMissionVision />

      <Map />
    </main>
  );
};
export default page;
