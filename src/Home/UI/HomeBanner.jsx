import Lottie from 'lottie-react';
import React from 'react'
import { TypeAnimation } from 'react-type-animation';

import chart from '../../assets/animation/chart.json'
import circleOrb from '../../assets/animation/circleOrb.json'
import rocket from '../../assets/image/3d Vector icons/rocket.png'
import influencer_marketing from '../../assets/image/icons/influencer-marketing.png'


const HomeBanner = ({ darkMode }) => {
  return (
    <div className='lg:grid lg:grid-cols-5'>
      <Lottie animationData={chart} className='absolute opacity-50' />
      <div className='col-span-3 flex justify-center sm:flex-none sm:justify-normal px-7 mt-10 z-10'>
        <div className=''>
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
          <h2 className={`py-5 text-sm md:text-lg w-[80vw] md:w-[52vw] ${darkMode ? 'text-gray-500' : ''}`}>Helping Brands, Improving Performance: Cobrand Digital Pvt Ltd Your Spark in the Digital Universe!
          </h2>
        </div>
      </div>

      <div className='relative col-span-2 bg-green-300'>

        <Lottie animationData={circleOrb} />
        <img src={rocket} alt="" className='rocket' />
        <img src={influencer_marketing} alt="" className='influencer-marketing' />
        <img src={influencer_marketing} alt="" className='absolute w-[30px] sm:w-[60px] top-[50vh] left-[20vw] sm:top-[70vh] sm:right-[25vw] md:top-[96vh] md:right-[20vw] lg:top-[48vh] lg:left-[10vw]' />
      </div>

    </div>
  )
}

export default HomeBanner