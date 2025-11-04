"use client";
import SectionTitle from "@/components/ui/SectionTitle";
import { Award, Badge, Flower, Play, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";

const SuccessStories = () => {
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeVideoLink, setActiveVideoLink] = useState("");

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const updateActiveCard = () => {
      const animation = carousel.getAnimations()[0];
      if (animation) {
        const progress = (animation.currentTime % 9000) / 9000; // 9s duration

        let newIndex;
        if (progress < 0.33) {
          // Card 1: 0% - 33%
          newIndex = 0;
        } else if (progress < 0.66) {
          // Card 2: 33% - 66%
          newIndex = 1;
        } else {
          // Card 3: 66% - 100%
          newIndex = 2;
        }

        setActiveIndex(newIndex);
      }
    };

    // Update frequently for smooth transitions
    const interval = setInterval(updateActiveCard, 50);
    updateActiveCard(); // Initial call

    return () => clearInterval(interval);
  }, []);

  const items = [
    {
      image: "/assets/videos/about_section_video_thumbnail_portrait.jpg",
      video: "https://youtube.com/shorts/tGiQTBK__Zw?si=XgcHP9vfgPbuq8pw",
    },
    {
      image: "/assets/videos/about_section_video_thumbnail_portrait.jpg",
    },
    {
      image: "/assets/videos/about_section_video_thumbnail_portrait.jpg",
      video: "https://youtube.com/shorts/OWPvNi0npXk?si=WcpGVPBd6SLT5XO9",
    },
  ];

  return (
    <>
      <div className="bg-white bg-[radial-gradient(#0000001a_1px,#ffffff_1px)] bg-[size:12px_12px] section w-full">
        <section className="w-full max-w-6xl mx-auto flex flex-col items-center justify-center gap-10 relative">
          <Award
            size={130}
            className="text-yellow-400 rotate-[-20deg] opacity-30 absolute top-20 -left-20"
          />
          <Badge
            size={130}
            className="text-cyan-400 rotate-[-20deg] opacity-30 absolute -bottom-20 right-10"
          />

          <SectionTitle
            text={"Success Stories"}
            subtext={"Hear from our successful students"}
            align="center"
            animate={false}
          />

          {/* Review Videos Carousel */}
          <div className="w-full overflow-x-hidden -mt-20 py-20 relative">
            <div
              ref={carouselRef}
              className="w-full whitespace-nowrap mx-auto animate-success-carousel relative left-1/2"
            >
              {[...items]?.map((item, index) => (
                <div
                  key={`${index}_${item?.image}`}
                  className={`success_carousel_item w-[280px] inline-flex items-center justify-around flex-col mx-10 max-w-sm aspect-[9/16] rounded-2xl overflow-hidden transition-all duration-150 ease-in relative ${
                    activeIndex === index ? "active shadow-2xl" : "shadow-none"
                  }`}
                  style={{
                    backgroundImage: `url(${item?.image})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }}
                >
                  {item?.video ? (
                    <button
                      className="cursor-pointer"
                      onClick={() => setActiveVideoLink(item?.video)}
                    >
                      <Play size={70} className="text-white" />
                    </button>
                  ) : (
                    <span
                      aria-hidden
                      className="block w-[70px] aspect-square"
                    ></span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Video Player */}
      <AnimatePresence>
        {activeVideoLink && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 right-0 bottom-0 w-full h-full bg-white bg-[radial-gradient(#0000001a_1px,#ffffff_1px)] bg-[size:12px_12px] p-8 flex items-center justify-center flex-col z-[999]"
          >
            <div
              className="bg-transparent absolute top-0 left-0 w-full h-full bottom-0 right-0"
              onClick={() => setActiveVideoLink("")}
            ></div>
            <div className="relative">
              <div className="w-full aspect-[9/16] max-w-md mx-auto rounded-xl overflow-hidden">
                <ReactPlayer
                  // src="/assets/videos/about_section_video.mp4"
                  src={activeVideoLink}
                  width="100%"
                  height="100%"
                  loop={true}
                  controls={true}
                  playsInline={true}
                  autoPlay={true}
                />
              </div>

              <button
                onClick={() => setActiveVideoLink("")}
                className="text-slate-800 cursor-pointer bg-white/50 aspect-square rounded-full p-2 absolute -top-5 -right-10"
              >
                <X size={15} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
export default SuccessStories;
