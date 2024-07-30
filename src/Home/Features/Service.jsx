import React from 'react'
import { NavLink } from 'react-router-dom'
import img from '../../assets/image/company/breadcrumb-bg-1.jpg'

const Services = ({ darkMode }) => {
  return (
    <div className='relative'>

      <div className="bg-[url('../../assest/image/company/breadcrumb-bg-1.jpg')] bg-cover absolute w-full h-[60vh] -top-[140px]">
        <div className=' w-full h-[60vh] bg-black opacity-75'>
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

      <div className='bg-white text-center font-bold text-lg '>
        <h1 className='text-2xl font-bold'>Check Our Courses</h1>
      </div>



    </div >
  )
}

export default Services