import Lottie from 'lottie-react';
import React from 'react'
import { TypeAnimation } from 'react-type-animation';

//lottie animation
import chart from '../../assets/animation/chart.json'
import circleOrb from '../../assets/animation/circleOrb.json'

// icons
import icon1 from '../../assets/image/icons/code.png'
import icon2 from '../../assets/image/icons/ui.png'
import icon3 from '../../assets/image/icons/web-design.png'

const HomeBanner = ({ darkMode }) => {
  return (
    <div className='grid lg:grid-rows-none lg:grid-cols-5 pt-5'>

      <Lottie animationData={chart} className='absolute' />


      <section className=' lg:col-span-3 flex flex-col justify-center items-center '>
        <div className='relative z-10'>

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

      <section className='relative lg:col-span-2 m-auto bg-emerald-600'>
        <Lottie animationData={circleOrb} />

        <img src={icon1} alt="" width={40} className='absolute  top-[7vh] left-[17vw] very-sm-3xl:top-[17vh] very-sm-3xl:left-30 sm:top-[20vh] sm:left-[16vw] md:top-[20vh] md:left-[17vw] ' />

        <img src={icon2} alt="" width={40} className='absolute bottom-[9vh] left-[14vw] very-sm-3xl:bottom-[10vh] very-sm-3xl:left-[18vw] sm:bottom-[26vh] md:bottom-[18vh] md:left-[15vw]' />

        <img src={icon3} alt="" width={40} className='absolute top-[12vh] right-[10vw] very-sm-3xl:top-[18vh] very-sm-3xl:right-[16vw] sm:top-[28vh] md:top-[20vh] md:right-[16vw]' />
      </section>

    </div>
  )
}

export default HomeBanner