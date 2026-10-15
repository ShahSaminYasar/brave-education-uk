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
import { getSuccessStoryAlt } from "@/lib/successStories";
import { ArrowUpRight, Award, Badge, Play, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import Autoplay from "embla-carousel-autoplay";
import { Spinner } from "@/components/ui/spinner";

const LATEST_COUNT = 10;

const SuccessStories = () => {
  const [activeVideoLink, setActiveVideoLink] = useState("");
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getSetItems = async () => {
      const successStories = await useSuccessStories();
      setItems(successStories.slice(0, LATEST_COUNT));
      setLoading(false);
    };

    getSetItems();
  }, []);

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

          {loading && (
            <div className="min-h-[70vh] w-full grid place-content-center bg-white">
              <Spinner />
            </div>
          )}

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
            className="w-full max-w-[83%] mx-auto"
          >
            <CarouselContent>
              {[...items]?.map((item, index) => (
                <CarouselItem
                  key={index}
                  className={"md:basis-1/2 lg:basis-1/3"}
                >
                  <div className="p-1">
                    <div className="relative w-full flex items-center justify-center max-w-[300px] rounded-2xl aspect-[9/15] mx-auto overflow-hidden">
                      {item?.image && (
                        <img
                          src={item.image}
                          alt={getSuccessStoryAlt(item)}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      )}

                      {item?.video ? (
                        <button
                          className="relative cursor-pointer"
                          onClick={() => setActiveVideoLink(item?.video)}
                        >
                          <Play size={70} className="text-white" />
                        </button>
                      ) : (
                        <span
                          aria-hidden
                          className="relative block w-[70px] aspect-square"
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

          <Link
            href="/success-stories"
            className="inline-flex items-center gap-1.5 rounded-3xl border-2 border-[#180d5d] px-6 py-2.5 text-sm font-medium text-[#180d5d] bg-white transition-all hover:scale-[103%]"
          >
            View all success stories <ArrowUpRight size={16} />
          </Link>
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
