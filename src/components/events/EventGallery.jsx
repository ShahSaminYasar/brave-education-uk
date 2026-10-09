"use client";
import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

/**
 * Deliberately its own "use client" component taking only a plain array of
 * image URL strings as props. The Autoplay plugin instance (an object full
 * of closures) must be created HERE, client-side - instantiating it in the
 * server-rendered detail page and passing it down as a prop would try to
 * serialize functions across the Server->Client boundary and crash the
 * whole page render, not just the gallery.
 */
const EventGallery = ({ images }) => {
  const [selected, setSelected] = useState(null);

  if (!images?.length) return null;

  return (
    <>
      <Carousel
        plugins={[
          Autoplay({
            delay: 3200,
            stopOnFocusIn: false,
            stopOnInteraction: false,
            stopOnLastSnap: false,
            stopOnMouseEnter: false,
          }),
        ]}
        opts={{ align: "center" }}
        className="w-full max-w-5xl mx-auto"
      >
        <CarouselContent>
          {images.map((src, index) => (
            <CarouselItem key={`${src}-${index}`} className="md:basis-1/2 lg:basis-1/3">
              <button
                type="button"
                onClick={() => setSelected(src)}
                className="block w-full aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer relative"
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      {/* Lightbox - mirrors components/gallery/GallerySlider.jsx's existing
          pattern: dark/blurred backdrop, click-backdrop-to-close via
          stopPropagation on the inner image, X button top-right. */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
            onClick={() => setSelected(null)}
          >
            <button
              className="absolute top-4 right-4 text-white bg-black/40 hover:bg-black/60 rounded-full aspect-square block w-9 h-9 grid place-content-center cursor-pointer"
              onClick={() => setSelected(null)}
            >
              <X size={18} />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-3xl w-full aspect-[4/3]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selected}
                alt=""
                fill
                sizes="90vw"
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default EventGallery;
