"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import SectionTitle from "@/components/ui/SectionTitle";
import { useSuccessStories } from "@/hooks/useSuccessStories";
import { Award, Badge, Play, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
import Autoplay from "embla-carousel-autoplay";

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
        const progress = (animation.currentTime % 15000) / 15000;

        let newIndex;
        if (progress < 0.19) {
          // Card 1: 0% - 19%
          newIndex = 0;
        } else if (progress < 0.38) {
          // Card 2: 19% - 38%
          newIndex = 1;
        } else if (progress < 0.57) {
          // Card 3: 38% - 57%
          newIndex = 2;
        } else if (progress < 0.76) {
          // Card 4: 57% - 76%
          newIndex = 3;
        } else {
          // Card 5: 76% - 100%
          newIndex = 4;
        }

        setActiveIndex(newIndex);
      }
    };

    const interval = setInterval(updateActiveCard, 50);
    updateActiveCard();

    return () => clearInterval(interval);
  }, []);

  const items = useSuccessStories();

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
          {/* <div className="w-full overflow-x-hidden -mt-20 py-20 relative">
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
          </div> */}

          <Carousel
            plugins={[
              Autoplay({
                delay: 2800,
                stopOnFocusIn: false,
                stopOnInteraction: false,
                stopOnLastSnap: false,
                stopOnMouseEnter: false,
              }),
            ]}
            opts={{
              align: "center",
            }}
            className="w-full"
          >
            <CarouselContent>
              {[...items]?.map((item, index) => (
                <CarouselItem
                  key={index}
                  className={"md:basis-1/2 lg:basis-1/3"}
                >
                  <div className="p-1">
                    <div
                      className="w-full flex items-center justify-center max-w-[300px] rounded-2xl aspect-[9/15] mx-auto"
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
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
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
