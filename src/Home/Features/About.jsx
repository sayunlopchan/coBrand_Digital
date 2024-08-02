import React from 'react'
import { NavLink } from 'react-router-dom'
import img1 from '../../assets/image/company/about-inner-1.jpg'
import mission from '../../assets/image/company/mission.jpg'
import secondary_logo from '../../assets/image/logo/cobrand-primary.png'

import team from '../../assets/data/team_data'



const About = ({ darkMode }) => {
  return (
    <div>
      <div className='lg:grid lg:grid-cols-2 p-10'>

        <div>
          <h1 className='text-2xl lg:text-6xl font-bold'>About us</h1>
          <div className='space-x-2'>
            <NavLink to='/' className={'hover:text-blue-500 text-sm'}>Home</NavLink>
            <span>|</span>
            <NavLink className={'text-sm'}>About us</NavLink>
          </div>
          <img src={img1} alt="img" />
        </div>

        <div className='flex flex-col items-center lg:px-10'>
          <img src={secondary_logo} alt="primary-logo" className='w-[400px] mx-auto' />

          <p className={`text-gray-400`}>
            <strong>CoBrand Digital</strong> is a dynamic agency dedicated to accelerating your business's success in the digital landscape. We specialize in driving digital growth through tailored strategies and cutting-edge solutions. Our comprehensive training programs cover essential skills including web design and development, graphic design, content creation, social media management, and photography/videography. Whether you're looking to enhance your online presence or upskill your team, CoBrand Digital is your partner in navigating and thriving in the digital world.</p>
        </div>

        <div className='pt-10'>

          <div className=' p-5'>
            <h2 className='text-2xl font-semibold'>Our mission</h2>
            <p className='text-gray-400'>
              At Cobrand Digital Pvt. Ltd., We are dedicated to transform businesses into digital success stories. Our mission is to be the driving force behind your online success, leveraging cutting-edge digital marketing strategies tailored to the unique needs of your business.
            </p>
          </div>

          <div className=' p-5'>
            <h2 className='text-2xl font-semibold'>Our purpose</h2>
            <p className='text-gray-400'>We are on a quest to be the perfect digital partner that businesses needs. Upgrade Your Brands with our dynamic blend of focus on seamless user experiences, enhanced functionality, and unwavering support.</p>
          </div>
        </div>

        <div className='pt-10'>
          <img src={mission} alt="mission" />
        </div>
      </div>

      <div className='py-10'>

        <h1 className='text-center text-2xl font-bold m-10'>Meet our eam of experts</h1>


        <div className='flex gap-10 flex-wrap justify-center'>
          {team.map((person, idx) => {
            return <div key={idx} className='text-center '>
              <div className='w-[300px] bg-blue-400 rounded-full overflow-hidden flex justify-center'>
                <img src={person.img} alt={person.name} />
              </div>
              <h4 className='font-bold text-lg'>{person.name}</h4>
              <p className='text-gray-500 text-md'>{person.about}</p>
              <div className='space-x-1 text-[12px] text-gray-500'>
                <NavLink className={'underline underline-offset-2 hover:text-blue-500'}>Facebook</NavLink>
                <NavLink className={'underline underline-offset-2 hover:text-blue-500'}>Instagram</NavLink>
                <NavLink className={'underline underline-offset-2 hover:text-blue-500'}>Linkedin</NavLink>
              </div>
            </div>
          })}
        </div>
      </div>






    </div >
  )
}

export default About