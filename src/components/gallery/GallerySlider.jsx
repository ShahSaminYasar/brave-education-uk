import { useImages } from "@/hooks/useImages";
import Image from "next/image";

const GallerySlider = () => {
  const images = useImages();

  return (
    <div className="flex flex-col gap-1 w-full max-w-7xl mx-auto overflow-x-hidden rounded-2xl gallery-marquee-container md:hidden">
      <div className="w-full overflow-x-hidden flex flex-row flex-nowrap gap-0 relative">
        <div className="flex flex-row gap-1 pr-1 shrink-0 gallery-marquee">
          {images?.map((img, id) => (
            <div
              key={`${img?.src}_${id}_1`}
              className="w-[300px] aspect-[9/11] rounded-none shrink-0"
            >
              <Image
                src={img?.src}
                alt={img?.alt}
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        <div
          aria-hidden
          className="flex flex-row gap-1 pr-1 shrink-0 gallery-marquee"
        >
          {images?.map((img, id) => (
            <div
              key={`${img?.src}_${id}_2`}
              className="w-[300px] aspect-[9/11] rounded-none shrink-0"
            >
              <Image
                src={img?.src}
                alt={img?.alt}
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default GallerySlider;
