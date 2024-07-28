import Lottie from 'lottie-react';
import React from 'react'
import { TypeAnimation } from 'react-type-animation';

import chart from '../../assets/animation/chart.json'
import circleOrb from '../../assets/animation/circleOrb.json'
import idea from '../../assets/image/3d Vector icons/idea.png'
import rocket from '../../assets/image/3d Vector icons/rocket.png'

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

      <div className='relative col-span-2'>

        <Lottie animationData={circleOrb} />
        <img src={idea} alt="" className='absolute w-[60px] top-[48vh] left-[13vh] md:bottom-[60vh] md:left-[18vw] lg:top-[26vw] lg:left-[8vw] animate-scale-wave-slow' />
        <img src={rocket} alt="" className='absolute w-[60px] top-[15vh] right-[20vw] md:top-[30vh] md:right-[30vw] lg:top-32 lg:right-24 animate-rotate-scale-wave' />
      </div>

    </div>
  )
}

export default HomeBanner