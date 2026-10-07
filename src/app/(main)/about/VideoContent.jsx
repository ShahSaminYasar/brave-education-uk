"use client";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Pause, Play } from "lucide-react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import { useRef, useState } from "react";
import ReactPlayer from "react-player";
import { DEFAULT_GENERAL_SETTINGS } from "@/lib/contactDefaults";

const VideoContent = ({
  videoUrl = DEFAULT_GENERAL_SETTINGS.introVideoUrl,
}) => {
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
    [0.4, 1, 1.1, 1.2, 2],
  );

  const y = useTransform(scrollYProgress, [0, 0.44], [200, 0]);

  return (
    <div className="relative min-h-[250vh]">
      {/* Content Section */}
      <div className="bg-white h-screen w-full sticky top-0 flex items-center justify-center px-5 py-20">
        <div className="w-full max-w-6xl mx-auto hidden lg:block">
          <ScrollReveal
            baseRotation={0}
            style={{ fontSize: "20px", fontWeight: "400" }}
          >
            Founded in 2021 with dual operations in London and Sylhet, Brave
            Education UK Limited is a British Council and ICEF-certified
            educational consultancy and an IAA-regulated immigration practice.
            We specialize in connecting ambitious students with top-tier
            universities worldwide, delivering tailored admissions support
            across high-demand fields including Medicine, Business, IT, Law, and
            Engineering. To ensure students are fully prepared for international
            study, we also provide structured English language training programs
            from foundational to advanced proficiency. Beyond academic
            placement, Brave Education offers authorized UK immigration advice
            and visa application services. From securing initial Student Visas
            and transitioning to Graduate or Skilled Worker routes, to handling
            family, visitor, and settlement applications, our regulated advisers
            provide compliant, end-to-end legal guidance at every stage of our
            clients' academic and professional journeys in the UK.
          </ScrollReveal>
        </div>
        <div className="w-full max-w-6xl mx-auto block lg:hidden">
          <ScrollReveal
            baseRotation={0}
            style={{ fontSize: "14px", fontWeight: "400" }}
          >
            Founded in 2021 with dual operations in London and Sylhet, Brave
            Education UK Limited is a British Council and ICEF-certified
            educational consultancy and an IAA-regulated immigration practice.
            We specialize in connecting ambitious students with top-tier
            universities worldwide, delivering tailored admissions support
            across high-demand fields including Medicine, Business, IT, Law, and
            Engineering. To ensure students are fully prepared for international
            study, we also provide structured English language training programs
            from foundational to advanced proficiency. Beyond academic
            placement, Brave Education offers authorized UK immigration advice
            and visa application services. From securing initial Student Visas
            and transitioning to Graduate or Skilled Worker routes, to handling
            family, visitor, and settlement applications, our regulated advisers
            provide compliant, end-to-end legal guidance at every stage of our
            clients' academic and professional journeys in the UK.
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
              src={videoUrl}
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
    </div>
  );
};
export default VideoContent;
