import Lottie from 'lottie-react';
import React from 'react'
import { TypeAnimation } from 'react-type-animation';

import chart from '../../assets/animation/chart.json'
import circleOrb from '../../assets/animation/circleOrb.json'


import rocket from '../../assets/image/3d Vector icons/rocket.png'
import influencer_marketing from '../../assets/image/icons/influencer-marketing.png'


const HomeBanner = ({ darkMode }) => {
  return (
    <div className='grid lg:grid-rows-none lg:grid-cols-5 pt-5'>
      <Lottie animationData={chart} className='absolute opacity-50' />

      <section className='lg:col-span-3 flex flex-col justify-center items-center '>
        <div className='px-10'>

          <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold   md:py-4'>Digital marketing</h1>
          <TypeAnimation
            className=' text-3xl font-bold md:text-7xl  md:font-semibold md:py-4'
            sequence={[
              'agency',
              1000,
              'analysis',
              1000,
              'value',
              1000,
            ]}
            wrapper="span"
            speed={70}
            style={{
              display: 'inline-block',
              background: 'linear-gradient(to right, purple,  pink)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
            repeat={Infinity}
          />

          <span className='text-2xl md:text-4xl md:py-4 font-bold md:font-semibold '>
            In Nepal
          </span>
          <h2 className={`py-5 text-sm md:text-lg w-[80vw] md:w-[52vw] ${darkMode ? 'text-gray-500' : ''}`}>Helping Brands, Improving Performance: Cobrand Digital Pvt Ltd.
            <br />
            Your Spark in the Digital Universe!
          </h2>
        </div>
        <button className='py-2 px-4 border-2 border-blue-700 rounded-xl hover:scale-90 duration-300'>contact us</button>


      </section>

      <section className='relative lg:col-span-2 m-auto'>
        <Lottie animationData={circleOrb} />
        {/* <img src={rocket} alt="" className='rocket' />
        <img src={influencer_marketing} alt="" className='influencer-marketing' />
        <img src={influencer_marketing} alt="" className='web-development' /> */}
      </section>

    </div>
  )
}

export default HomeBanner