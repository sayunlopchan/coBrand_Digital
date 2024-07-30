import React from 'react'
import { NavLink } from 'react-router-dom'
// import img from '../../assets/image/company/breadcrumbBg.jpg'
import CardUi from '../../Components/CardUi'

import data from '../../assets/data/courses_data'
import seoImg from '../../assets/image/company/seo-5-bg-1.webp'
import optimizeImg from '../../assets/image/company/optimize-shape.png'




const Services = ({ darkMode }) => {
  return (
    <div className='relative'>

      <div className='breadcrumb-bg absolute w-full h-[60vh] -top-[140px]'>
        <div className='w-full h-[60vh] bg-black opacity-75'>
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
        <div className={`absolute -top-8 w-[70vw] h-full rounded-3xl ${darkMode ? 'bg-gray-900 shadow-gray-500' : 'bg-white'} shadow-md pb-2 px-1 md:p-5`}>
          <div className='flex justify-center items-center space-x-5 p-6 '>
            <h1 className='text-gray-500 text-sm md:text-md lg:text-lg'>WHAT</h1>
            <hr className='h-20 bg-gray-400 p-[1px]' />
            <h1 className=' font-bold text-sm md:text-md lg:text-3xl'>Growth, not just reach with Cobrand Digital.</h1>
          </div>
          <p className='text-gray-700 text-sm md:text-md lg:text-lg'>Dominate Nepal's digital market with targeted campaigns, engaging content, creative idea & Local SEO. We help businesses of all sizes climb the online mount everest and reach new heights. Ready to scale? Claim your peak in Nepal's digital landscape with our expert support. </p>

        </div>
      </div >

      <div className='p-10'>

        <div className='lg:grid lg:grid-cols-2 '>
          <div className='relative mx-auto py-10'>
            <img src={seoImg} alt="img" className='w-full md:w-[400px] lg:w-[400px]' />
            <img src={optimizeImg} alt="img" className={`absolute w-[100px] top-0 shadow-sm ${darkMode ? '' : ''}`} />

          </div>

          <div className='space-y-5 flex flex-col items-center'>
            <span className='text-gray-500'>Best SMM results?</span>
            <h1 className=' text-3xl lg:text-6xl font-bold'>
              Optimize your
              social media</h1>
            <ul className='space-y-5'>
              <li>
                <h4>Know Your Audience & Goals</h4>
                <p>Define their demographics, interests, and online behavior.</p>
              </li>
              <li>
                <h4>Creative & Compelling Content</h4>
                <p>Be Authentic & Consistent,Always Focus on value.</p>
              </li>
              <li>
                <h4>Engage & Analyze</h4>
                <p>Social media is a two-way street! Actively engage with your followers</p>
              </li>

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