import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

const SwiperUi = ({ data }) => {
  return (
    <div className="my-10 relative">
      <h1 className="text-center py-5 text-lg font-bold md:text-2xl">
        We have Worked with:
      </h1>

      <Swiper
        modules={[Navigation, Autoplay]}
        slidesPerView={3}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
      >
        {data.map((item, idx) => (
          <SwiperSlide
            key={idx}
            className="flex justify-center items-center py-10"
          >
            <div className="bg-gray-600">
              <img src={item.image} alt={item.name} />
            </div>
          </SwiperSlide>
        ))}
        {/* Custom navigation buttons */}
        <div className="hidden lg:block custom-prev"></div>
        <div className="hidden lg:block custom-next"></div>
      </Swiper>
    </div>
  );
};

export default SwiperUi;
