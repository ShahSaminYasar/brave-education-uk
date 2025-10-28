"use client";
import { useRef, useEffect, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const Sketch = ({ containerRef }) => {
  const canvasRef = useRef(null);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const totalFrames = 137;
  const [loadingProgress, setLoadingProgress] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const currentFrame = useTransform(scrollYProgress, [0, 1], [1, totalFrames]);

  useEffect(() => {
    const loadImages = async () => {
      setIsLoading(true);
      setLoadingProgress(0);

      const imagePromises = [];
      const loadedImages = [];

      for (let i = 1; i <= totalFrames; i++) {
        const frameNumber = String(i).padStart(4, "0");
        const img = new Image();

        const promise = new Promise((resolve) => {
          img.onload = () => {
            setLoadingProgress((prev) => prev + 100 / totalFrames);
            resolve();
          };
          img.src = `/assets/images/sketch-frames/frame_${frameNumber}.jpeg`;
        });

        imagePromises.push(promise);
        loadedImages.push(img);
      }

      await Promise.all(imagePromises);
      setImages(loadedImages);
      setIsLoading(false);
    };

    const loadedImages = [];
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
    <div className="w-full bg-white h-[50vh] md:h-screen flex items-center justify-center">
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
  );
};

export default Sketch;
