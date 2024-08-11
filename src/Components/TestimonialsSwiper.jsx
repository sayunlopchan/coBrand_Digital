import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

// react icons
import { FaStar } from "react-icons/fa";

const TestimonialSwiper = ({ data }) => {
  return (
    <div className="my-10">
      {/* <h1 className="gradient-Text font-semibold w-screen
      ]">Testimonials</h1> */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
      >

        {data.map((item, idx) => (
          <SwiperSlide key={idx} className="p-1">
            <div className="space-y-2">
              <div className="h-fill text-sm md:text-md lg:text-lg">
                <p className="row-span-3">{item.review}</p>
              </div>

              <div className="p-2 flex">
                <div>
                  < img src={item.img} alt={item.name} className="rounded-xl p-1" />
                </div>

                <div className="my-auto">
                  <div className="flex">
                    <FaStar color="gold" size={20} />
                    <FaStar color="gold" size={20} />
                    <FaStar color="gold" size={20} />
                    <FaStar color="gold" size={20} />
                    <FaStar color="gold" size={20} />
                  </div>
                  <h1>
                    <strong>{item.name}</strong>
                  </h1>
                  <h3 className="text-sm">{item.brand}</h3>
                </div>

              </div>
            </div>

          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialSwiper;
