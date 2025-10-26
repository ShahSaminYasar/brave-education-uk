import Image from "next/image";

const GallerySlider = () => {
  const images = [
    {
      src: "/assets/images/graduates/0.jpg",
      alt: "Graduate image",
    },
    {
      src: "/assets/images/graduates/1.jpg",
      alt: "Graduate image",
    },
    {
      src: "/assets/images/graduates/2.jpg",
      alt: "Graduate image",
    },
    {
      src: "/assets/images/graduates/3.jpg",
      alt: "Graduate image",
    },
    {
      src: "/assets/images/graduates/4.jpg",
      alt: "Graduate image",
    },
    {
      src: "/assets/images/graduates/5.jpg",
      alt: "Graduate image",
    },
    {
      src: "/assets/images/graduates/6.jpg",
      alt: "Graduate image",
    },
    {
      src: "/assets/images/graduates/7.jpg",
      alt: "Graduate image",
    },
    {
      src: "/assets/images/graduates/8.jpg",
      alt: "Graduate image",
    },
    {
      src: "/assets/images/graduates/9.jpg",
      alt: "Graduate image",
    },
    {
      src: "/assets/images/graduates/10.jpg",
      alt: "Graduate image",
    },
    {
      src: "/assets/images/graduates/11.jpg",
      alt: "Graduate image",
    },
    {
      src: "/assets/images/graduates/12.jpg",
      alt: "Graduate image",
    },
    {
      src: "/assets/images/graduates/13.jpg",
      alt: "Graduate image",
    },
    {
      src: "/assets/images/graduates/14.jpg",
      alt: "Graduate image",
    },
    {
      src: "/assets/images/graduates/15.jpg",
      alt: "Graduate image",
    },
    {
      src: "/assets/images/graduates/16.jpg",
      alt: "Graduate image",
    },
    {
      src: "/assets/images/graduates/17.jpg",
      alt: "Graduate image",
    },
    {
      src: "/assets/images/graduates/18.jpg",
      alt: "Graduate image",
    },
    {
      src: "/assets/images/graduates/19.jpg",
      alt: "Graduate image",
    },
    {
      src: "/assets/images/graduates/20.jpg",
      alt: "Graduate image",
    },
    {
      src: "/assets/images/graduates/21.jpg",
      alt: "Graduate image",
    },
    {
      src: "/assets/images/graduates/22.jpg",
      alt: "Graduate image",
    },
    {
      src: "/assets/images/graduates/23.jpg",
      alt: "Graduate image",
    },
    {
      src: "/assets/images/graduates/24.jpg",
      alt: "Graduate image",
    },
    {
      src: "/assets/images/graduates/25.jpg",
      alt: "Graduate image",
    },
    {
      src: "/assets/images/graduates/26.jpg",
      alt: "Graduate image",
    },
    {
      src: "/assets/images/graduates/27.jpg",
      alt: "Graduate image",
    },
    {
      src: "/assets/images/graduates/28.jpg",
      alt: "Graduate image",
    },
    {
      src: "/assets/images/graduates/29.jpg",
      alt: "Graduate image",
    },
    {
      src: "/assets/images/graduates/30.jpg",
      alt: "Graduate image",
    },
    {
      src: "/assets/images/graduates/31.jpg",
      alt: "Graduate image",
    },
    {
      src: "/assets/images/graduates/32.jpg",
      alt: "Graduate image",
    },
    {
      src: "/assets/images/graduates/33.jpg",
      alt: "Graduate image",
    },
    {
      src: "/assets/images/graduates/34.jpg",
      alt: "Graduate image",
    },
    {
      src: "/assets/images/graduates/35.jpg",
      alt: "Graduate image",
    },
    {
      src: "/assets/images/graduates/36.jpg",
      alt: "Graduate image",
    },
    {
      src: "/assets/images/graduates/37.jpg",
      alt: "Graduate image",
    },
    {
      src: "/assets/images/graduates/38.jpg",
      alt: "Graduate image",
    },
    {
      src: "/assets/images/graduates/39.jpg",
      alt: "Graduate image",
    },
    {
      src: "/assets/images/graduates/40.jpg",
      alt: "Graduate image",
    },
    {
      src: "/assets/images/graduates/41.jpg",
      alt: "Graduate image",
    },
    {
      src: "/assets/images/graduates/42.jpg",
      alt: "Graduate image",
    },
    {
      src: "/assets/images/graduates/43.jpg",
      alt: "Graduate image",
    },
    {
      src: "/assets/images/graduates/44.jpg",
      alt: "Graduate image",
    },
  ];

  return (
    <div className="flex flex-col gap-1 w-full max-w-7xl mx-auto overflow-x-hidden rounded-2xl gallery-marquee-container">
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
