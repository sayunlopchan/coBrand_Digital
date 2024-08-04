import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';






const SwiperUi2 = ({ data }) => {
  return (
    <div className='my-10'>
      <h1 className='text-center py-5 text-lg font-bold md:text-2xl'>Testimonials</h1>

      <Swiper
        slidesPerView={1}
        spaceBetween={30} // Optional: Adds space between slides
      >
        {data.map((item, idx) => (
          <SwiperSlide key={idx} className='flex justify-center items-center py-10'>
            <p>{item.review}</p>
            <img src={item.img} alt={item.name} />
            <h1>{item.name}</h1>
          </SwiperSlide>
        ))}

      </Swiper>
    </div >
  );
};

export default SwiperUi2;
