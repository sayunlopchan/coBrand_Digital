import React from 'react'
import { NavLink } from 'react-router-dom'
import CardUi from '../../Components/CardUi'

import data from '../../assets/data/courses_data'
import seoImg from '../../assets/image/company/seo-5-bg-1.webp'
import tab from '../../assets/image/company/optimize-shape.png'
import tab1 from '../../assets/image/company/tab-5-bg-5.png'


import { FaCheckCircle } from "react-icons/fa";



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

        <div className='lg:grid lg:grid-cols-2 '>
          <div className='relative mx-auto py-10'>
            <img src={seoImg} alt="img" className='w-full md:w-[400px] lg:w-[400px]' />
            <img src={tab} alt="img" className={`absolute h-[80px] w-[140px] top-10 ${darkMode ? 'shadow-gray-400' : 'shadow-gray-600 '}`} />
            <img src={tab1} alt="img" className={`absolute h-[100px] bottom-10 right-0 shadow-lg rounded-lg ${darkMode ? 'shadow-gray-400' : 'shadow-gray-600 '}`} />

          </div>

          <div className='space-y-5 flex flex-col items-center'>
            <span className='text-gray-500'>Best SMM results?</span>
            <h1 className=' text-3xl lg:text-6xl font-bold px-10'>
              Optimize your
              social media</h1>
            <ul className='font-bold flex gap-4'>

              <div className='pt-3 space-y-10'>
                <FaCheckCircle color='green' size={23} />
                <FaCheckCircle color='green' size={23} />
                <FaCheckCircle color='green' size={23} />
              </div>

              <div className='space-y-5'>
                <li>
                  <h4>Know Your Audience & Goals</h4>
                  <p className={`text-sm font-semibold ${darkMode ? 'text-gray-400' : 'text-gray-800'}`}>Define their demographics, interests, and online behavior.</p>
                </li>
                <li>
                  <h4>Creative & Compelling Content</h4>
                  <p className={`text-sm font-semibold ${darkMode ? 'text-gray-400' : 'text-gray-800'}`}>Be Authentic & Consistent,Always Focus on value.</p>
                </li>
                <li>
                  <h4>Engage & Analyze</h4>
                  <p className={`text-sm font-semibold ${darkMode ? 'text-gray-400' : 'text-gray-800'}`}>Social media is a two-way street! Actively engage with your followers</p>
                </li>
              </div>
            </ul>
          </div>
        </div>



      </div>

      <div>
        <h1 className='text-center text-2xl font-bold'>Check Our Courses</h1>
        <CardUi data={data} darkMode={darkMode} />
      </div>

    </div >
  )
}

export default Services