import React from 'react'
import company1 from '../../assets/image/company/company-1.jpg'
import company2 from '../../assets/image/company/company-2.jpg'
import company3 from '../../assets/image/company/company-3.jpg'
import company4 from '../../assets/image/company/company-4.jpg'

import secondary_logo from '../../assets/image/logo/cobrand-primary.png'
const AboutUs = ({ darkMode }) => {
  return (
    <div>

      <h1 className='text-center font-bold text-lg md:text-4xl'>About us</h1>

      <div className='grid grid-rows-2 lg:grid-rows-none lg:grid-cols-5'>
        <section className='lg:col-span-3'>
          <div className='relative p-10'>
            <img src={company1} alt="company-1" className=' w-full border-2 ' />
            <img src={company2} alt="company-2" className='absolute w-[80px] md:w-[120px] bottom-10 left-5 border-2' />
            <img src={company3} alt="company-3" className='absolute w-[80px] md:w-[170px] bottom-10 right-5 border-2' />
          </div>
        </section>

        <section className='lg:col-span-2 px-10'>
          <img src={secondary_logo} alt="primary-logo" className='w-[400px] mx-auto' />

          <h2 className='text-lg font-bold underline underline-offset-8 py-2'>Who we are?</h2>
          <p className={`${darkMode ? 'text-gray-500' : ''}`}>
            <strong>CoBrand Digital</strong> is a dynamic agency dedicated to accelerating your business's success in the digital landscape. We specialize in driving digital growth through tailored strategies and cutting-edge solutions. Our comprehensive training programs cover essential skills including web design and development, graphic design, content creation, social media management, and photography/videography. Whether you're looking to enhance your online presence or upskill your team, CoBrand Digital is your partner in navigating and thriving in the digital world.</p>
        </section>
      </div >

    </div >
  )
}

export default AboutUs