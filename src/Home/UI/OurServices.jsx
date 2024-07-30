import React from 'react'
import data from '../../assets/data/service_data'
import { NavLink } from 'react-router-dom'


const OurServices = ({ darkMode }) => {
  return (
    <section>
      <h1 className='text-center font-bold text-2xl'>Our Services</h1>

      <div className='flex flex-wrap justify-center items-center gap-2 pt-10'>
        {data.map((item, idx) => {
          return (
            <div key={idx} className={`flex flex-col items-center w-96 rounded-md hover:shadow-md border border-gray-500 py-4 h-[380px] ${darkMode ? 'hover:shadow-white' : ' bg-gray-50 hover:shadow-gray-600'} duration-300`}>

              <div className='h-[100px]'>
                <img src={item.image} alt={item.name} className='w-24' />
              </div>
              <div className='px-5 h-[240px]'>
                <h1 className='text-lg font-bold text-center'>{item.name}</h1>
                <p className={`text-md ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{item.description}</p>

              </div>
              <div className='h-[40px]'>
                <NavLink className='underline underline-offset-4 hover:text-gray-500 duration-300'>read more</NavLink>
              </div>

            </div>
          )
        })}
      </div>

    </section >
  )
}

export default OurServices


