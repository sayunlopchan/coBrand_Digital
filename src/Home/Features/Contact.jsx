import React from 'react'
import mail from '../../assets/image/contact-icons/mail.svg'
import telephone from '../../assets/image/contact-icons/telephone.svg'
import arrow from '../../assets/image/contact-icons/arroe.svg'
import { NavLink } from 'react-router-dom'

import { FaLocationDot } from "react-icons/fa6";
import Accordian from '../../Components/Accordian'






const Contact = ({ darkMode }) => {
  return (
    <div>

      <div className='lg:grid lg:grid-cols-2 py-10'>
        <div className='space-y-5 p-10 '>
          <h1 className='text-5xl font-bold'>Get In Touch</h1>
          <p className='text-gray-500 text-lg'>If you need help with digital marketing or have any question regrading our company or service, you can directly contact us or visit our office</p>

          <NavLink to='#' className={`flex justify-between p-4 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
            <div className='flex gap-4'>
              <img src={mail} alt="mail" />
              <span className='text-sm md:text-md text-gray-400'>contact@cobrand.com.np</span>
            </div>
            <img src={arrow} alt="arrow" />
          </NavLink>

          <NavLink to='#' className={`flex justify-between p-4 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
            <div href='' className='flex gap-4'>
              <img src={telephone} alt="" />
              <span className='text-sm text-gray-400'>+9779847032260</span>
            </div>
            <img src={arrow} alt="" />
          </NavLink>

          <NavLink to='#' className={`flex justify-between p-4 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
            <div className='flex gap-4'>
              <img src={telephone} alt="" />
              <span className='text-sm text-gray-400'>+9779866578037</span>
            </div>
            <img src={arrow} alt="" />
          </NavLink>
        </div>

        <form action="" className={`space-y-2 p-10 rounded-lg shadow-lg ${darkMode ? ' shadow-gray-800 text-black bg-gray-800' : ''}`}>
          <h1 className={`text-xl font-bold text-center ${darkMode ? ' text-white' : 'text-black'}`}>Contct us</h1>
          <div>
            <input type="text" placeholder='Full Name' className='bg-white rounded-md border-2 w-full p-3' />
          </div>
          <div>
            <input type="email" placeholder='Email' className='bg-white rounded-md border-2 w-full p-3' />
          </div>
          <div>
            <input type="tel" placeholder='Phone Number' className='bg-white border-2 rounded-md w-full p-3' />
          </div>
          <div>
            <textarea name="" id="" placeholder='Write us Message' className='bg-white rounded-md border-2 w-full min-h-[200px] max-h-[200px] p-3'></textarea>
          </div>
          <div className='flex justify-center'>
            <button className=' px-10 py-4 rounded-lg bg-blue-500 text-white font-bold hover:scale-90'>Send Messgae</button>
          </div>
        </form>
      </div>

      <div className='lg:grid lg:grid-cols-2 p-10 flex flex-col justify-center items-center'>
        <section className='space-y-5 py-5'>
          <div>
            <span className='text-sm text-gray-400'>Our Office</span>
            <h1 className='text-3xl font-bold'>Visit our office to know more about us</h1>
          </div>

          <FaLocationDot size={30} />

          <div className='space-y-4'>
            <h2 className='text-2xl font-semibold'>Nepal</h2>

            <div className='text-gray-400'>
              <p>Siddharthanagar - 09, Bhairahawa</p>
              <p>Rupandehi</p>
            </div>
          </div>
        </section>


        <section>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3538.4000503366747!2d83.4524294743311!3d27.519027976291092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48c91b103b2e71fd%3A0x619e0f7f7ca77354!2sCoBrand%20Digital!5e0!3m2!1sen!2snp!4v1722337453868!5m2!1sen!2snp" allowFullScreen="" loading="lazy" className='w-full h-[400px]' referrerPolicy="no-referrer-when-downgrade"></iframe>
        </section>
      </div>



      {/*FAQ */}
      <Accordian darkMode={darkMode} />

    </div >
  )
}

export default Contact