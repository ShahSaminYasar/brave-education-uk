"use client";
import { useState } from "react";
import { useImages } from "@/hooks/useImages";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

const GallerySlider = () => {
  const images = useImages() || [];
  const [selectedImg, setSelectedImg] = useState(null);

  // Split images into 3 rows
  const rowSize = Math.ceil(images?.length / 3);
  const rows = [
    images.slice(0, rowSize),
    images.slice(rowSize, rowSize * 2),
    images.slice(rowSize * 2),
  ];

  return (
    <div className="flex flex-col gap-4 w-full max-w-7xl mx-auto overflow-hidden rounded-2xl py-3 md:hidden">
      {rows?.map((rowImages, rowIndex) => (
        <div key={rowIndex} className="flex overflow-hidden">
          <motion.div
            className="flex gap-4 flex-nowrap"
            animate={{
              x: rowIndex % 2 === 0 ? ["0%", "-50%"] : ["-50%", "0%"],
            }}
            transition={{
              duration: rowImages?.length * 3,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {[...rowImages, ...rowImages].map((img, idx) => (
              <div
                key={`${img.src}-${rowIndex}-${idx}`}
                className="w-[150px] aspect-[9/11] shrink-0 cursor-pointer overflow-hidden rounded-[20px]"
                onClick={() => setSelectedImg(img)}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </motion.div>
        </div>
      ))}

      {/* Image Popup/Modal */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-white/70 backdrop-blur-[2px] p-4"
            onClick={() => setSelectedImg(null)}
          >
            <button
              className="absolute top-4 right-4 text-white bg-black/40 hover:bg-black/40 rounded-full aspect-square block w-9 h-9 place-content-center"
              onClick={() => setSelectedImg(null)}
            >
              ✕
            </button>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-[340px] aspect-[9/11] overflow-hidden rounded-[20px]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImg.src}
                alt={selectedImg.alt}
                width={800}
                height={1000}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GallerySlider;
