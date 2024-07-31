import React from 'react'
import { NavLink } from 'react-router-dom'
import CardUi from '../../Components/CardUi'

import data from '../../assets/data/courses_data'
import seoImg from '../../assets/image/company/seo-5-bg-1.webp'
import tab from '../../assets/image/company/optimize-shape.png'
import tab1 from '../../assets/image/company/tab-5-bg-5.png'



import womenImage from '../../assets/image/company/cta-inner-bg-1.png'

// animation
import bg_animation from '../../assets/animation/bg-Animation - 1722427834753.json'
import wavy_bg_animation from '../../assets/animation/wavy-bg-Animation - 1722427854867.json'





import { FaCheckCircle } from "react-icons/fa";
import Lottie from 'lottie-react'



const Services = ({ darkMode }) => {
  return (
    <div className='relative'>

      <div className='breadcrumb-bg absolute w-full h-500px -top-[140px]'>
        <div className='w-full h-[400px] bg-black opacity-75'>
        </div>
      </div>

      <nav className=' relative text-center text-white mb-[50px] md:mb-[100px] '>
        <h1 className=' text-lg md:text-[90px] font-bold md:mt-9'>Services</h1>
        <div className='space-x-2 text-sm text-gray-200 md:mt-9'>
          <NavLink to='/' className='hover:text-blue-500 duration-300'>Home</NavLink>
          <span>|</span>
          <NavLink to='#'>Service</NavLink>
        </div>
      </nav>

      <div className='flex items-center justify-center border-b-2 relative pb-96 '>
        <div className={`absolute -top-8 w-[80vw] px-10 rounded-3xl ${darkMode ? 'bg-gray-900 shadow-gray-500' : 'bg-white'} shadow-md`}>
          <div className='flex items-center space-x-5 py-5 '>
            <h1 className='text-gray-500 text-sm md:text-md lg:text-lg'>WHAT</h1>
            <hr className='h-20 bg-gray-400 p-[1px]' />
            <h1 className='font-bold text-sm md:text-md lg:text-3xl'>Growth, not just reach with Cobrand Digital.</h1>
          </div>
          <div className='h-[260px] md:px-16'>
            <p className='text-gray-700 text-[14px] sm:text-sm md:text-md lg:text-lg'>Dominate Nepal's digital market with targeted campaigns, engaging content, creative idea & Local SEO. We help businesses of all sizes climb the online mount everest and reach new heights. Ready to scale? Claim your peak in Nepal's digital landscape with our expert support. </p>
          </div>
        </div>
      </div >

      <div className='p-10'>

        <div className='md:grid md:grid-cols-2 '>
          <div className='relative mx-auto py-10'>
            <img src={seoImg} alt="img" className='w-full md:w-[400px] lg:w-[400px]' />
            <img src={tab} alt="img" className={`absolute h-[60px] w-[80px] md:w-[110px] top-10 ${darkMode ? 'shadow-gray-400' : 'shadow-gray-600 '}`} />
            <img src={tab1} alt="img" className={`absolute h-[100px] bottom-10 right-0 shadow-lg rounded-lg ${darkMode ? 'shadow-gray-400' : 'shadow-gray-600 '}`} />

          </div>

          <div className='flex flex-col items-center gap-5'>

            <div>
              <span className='text-gray-500 flex justify-center'>Best SMM results?</span>
              <h1 className=' text-3xl lg:text-6xl font-bold px-10'>
                Optimize your social media</h1>
            </div>

            <div className='space-y-5 p-2 font-bold text-sm md:text-md lg:text-lg '>

              <ul className='grid grid-cols-6 items-center'>
                <FaCheckCircle color='green' size={24} className='mx-auto' />
                <li className='col-span-5'>
                  <h4>Know Your Audience & Goals</h4>
                  <p className={`text-[12px] md:text-sm font-semibold ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Define their demographics, interests, and online behavior.</p>
                </li>
              </ul>

              <ul className='grid grid-cols-6 items-center '>
                <FaCheckCircle color='green' size={24} className='mx-auto' />
                <li className='col-span-5'>
                  <h4>Creative & Compelling Content</h4>
                  <p className={`text-[12px] md:text-sm font-semibold ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Be Authentic & Consistent,Always Focus on value.</p>
                </li>
              </ul>

              <ul className='grid grid-cols-6 items-center'>
                <FaCheckCircle color='green' size={24} className='mx-auto' />
                <li className='col-span-5'>
                  <h4>Engage & Analyze</h4>
                  <p className={`text-[12px] md:text-sm font-semibold ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Social media is a two-way street! Actively engage with your followers</p>
                </li>
              </ul>
            </div>

            <button className='p-3 border-2 border-blue-600 hover:bg-blue-600 hover:text-white duration-300 rounded-lg'>Get Your Social Media Optimized</button>
          </div>
        </div>



      </div>

      <div>
        <h1 className='text-center text-2xl font-bold'>Check Our Courses</h1>
        <CardUi data={data} darkMode={darkMode} />
      </div>


      <div className='lg:grid lg:grid-cols-2  relative '>

        <Lottie animationData={bg_animation} className='absolute' />

        <div className='flex flex-col items-center gap-8 md:py-16'>

          <h1 className='relative text-lg md:text-5xl font-bold text-center  z-10'>Grow your business today </h1>

          <p className={`relative z-0 text-sm md:text-lg text-center px-10 font-semibold ${darkMode ? 'text-gray-400' : ''}`}>Being one of the emerging digital marketing agency of Nepal, Our mission is to grow every businesses in digital landscape.</p>

          <button className='px-8 py-2 mt-10 bg-blue-500 font-bold border-2 border-blue-500 rounded-lg text-white hover:text-black hover:bg-white relative z-10'>Get in Touch</button>
        </div>


        <div className='relative '>
          <img src={womenImage} alt="women img" className='mx-auto' />
        </div>
      </div>
    </div >
  )
}

export default Services