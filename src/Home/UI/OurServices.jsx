import React from 'react'
import data from '../../assets/data/service_data'


const OurServices = ({ darkMode }) => {
  return (
    <section>
      <h1 className='text-center font-bold text-2xl'>Our Services</h1>

      <div className='flex flex-wrap justify-center items-center gap-2 pt-10'>
        {data.map((item, idx) => {
          return (
            <div key={idx} className={`grid grid-rows-6 w-96 mx-auto justify-items-center rounded-md hover:shadow-md h-[380px] ${darkMode ? 'hover:shadow-gray-800' : ' bg-gray-50 hover:shadow-gray-200'} duration-300`}>

              <div className='row-span-2 my-auto'>
                <img src={item.image} alt={item.name} className='h-[130px]' />
              </div>

              <div className='px-5 row-span-4'>
                <h1 className='text-lg font-bold text-center'>{item.name}</h1>
                <p className={`text-md ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{item.description}</p>
              </div>

            </div>
          )
        })}
      </div>

    </section >
  )
}

export default OurServices


