import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import required modules
import { Navigation, Pagination } from 'swiper/modules';

const SwiperUi = ({ data }) => {
  return (
    <div className='my-10'>
      <h1 className='text-center py-5 text-lg font-bold md:text-2xl'>We have Worked with:</h1>

      <Swiper
        slidesPerView={3}
        spaceBetween={30} // Optional: Adds space between slides
        navigation // Enable navigation buttons
        pagination={{ clickable: true }} // Enable pagination and make it clickable
        modules={[Navigation, Pagination]} // Pass the modules
      >
        {data.map((item, idx) => (
          <SwiperSlide key={idx} className='flex justify-center items-center py-10'>
            <img src={item.image} alt={item.name} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperUi;
