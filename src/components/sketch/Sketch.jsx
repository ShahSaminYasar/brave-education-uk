"use client";
import { useRef, useEffect, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const Sketch = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const totalFrames = 137;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const currentFrame = useTransform(scrollYProgress, [0, 1], [1, totalFrames]);

  // Load all images
  useEffect(() => {
    const loadImages = async () => {
      const loadedImages = [];

      for (let i = 1; i <= totalFrames; i++) {
        const frameNumber = String(i).padStart(4, "0");
        const img = new Image();
        img.src = `/assets/images/sketch-frames/frame_${frameNumber}.jpeg`;

        await new Promise((resolve) => {
          img.onload = resolve;
        });

        loadedImages.push(img);
      }

      setImages(loadedImages);
      setIsLoading(false);
    };

    loadImages();
  }, [totalFrames]);

  // Update canvas when frame changes
  useEffect(() => {
    const unsubscribe = currentFrame.on("change", (latestFrame) => {
      if (!images.length || !canvasRef.current) return;

      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      const frameIndex = Math.round(latestFrame) - 1;

      if (images[frameIndex]) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(images[frameIndex], 0, 0, canvas.width, canvas.height);
      }
    });

    return () => unsubscribe();
  }, [currentFrame, images]);

  return (
    <section ref={containerRef} className="w-full h-[600vh] relative bg-white">
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <div className="w-full max-w-6xl mx-auto aspect-video rounded-2xl">
          {isLoading && <div className="text-black">Loading frames...</div>}
          <canvas
            ref={canvasRef}
            width={1280}
            height={720}
            className="max-w-full max-h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Sketch;
