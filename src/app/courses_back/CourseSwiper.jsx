"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

const CourseSwiper = () => {
  return (
    <Swiper
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      className="w-full h-full [&_.swiper-slide]:flex [&_.swiper-slide]:items-center [&_.swiper-slide]:justify-center"
    >
      <SwiperSlide>
        <Image
          src={"/assets/images/uk_classroom_filled.jpg"}
          width={600}
          height={400}
          alt="Brave Education"
          className="w-full h-full object-cover"
        />
      </SwiperSlide>
    </Swiper>
  );
};
export default CourseSwiper;
