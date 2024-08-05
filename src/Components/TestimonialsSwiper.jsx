import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const TestimonialSwiper = ({ data }) => {
  return (
    <div className="my-10">
      <Swiper slidesPerView={1} spaceBetween={30}>
        {data.map((item, idx) => (
          <SwiperSlide key={idx} className="flex flex-col">
            <div className="grid grid-rows-5 h-[250px]">
              <p className="row-span-3">{item.review}</p>

              <div>
                <img src={item.img} alt={item.name} />
                <h1>
                  <strong>{item.name}</strong>
                </h1>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialSwiper;
