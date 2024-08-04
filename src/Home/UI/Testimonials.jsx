import React from 'react'
import SwiperUi2 from '../../Components/TestimonialsSwiper'
import data2 from '../../assets/data/Testimonials_data'
import Lottie from 'react-lottie-player'
// import cricle from '../../assets/animation/circles.json'
import cricle from '../../assets/animation/media.json'

const Testimonials = () => {
  return (
    <div className='lg:grid lg:grid-cols-2'>
      <section className=''>
        <Lottie animationData={cricle} />
      </section>
      <article className=''>
        <SwiperUi2 data={data2} />
      </article>
    </div>
  )
}

export default Testimonials