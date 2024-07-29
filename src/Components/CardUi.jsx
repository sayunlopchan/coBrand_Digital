import React from 'react'
import { NavLink } from 'react-router-dom';


const CardUi = ({ data }) => {

  return (
    <div className='flex flex-wrap justify-center p-5 '>
      {data.map((item, idx) => {
        return (
          <div
            key={idx}
            className='relative  flex flex-col items-center w-96 h-[300px] pt-8 hover:shadow-lg transition-shadow duration-700 group'
          >
            <div
              className='absolute border rounded-full h-[150px] w-[150px] transition-transform duration-300 group-hover:scale-110 flex items-center justify-center'
              style={{ backgroundColor: item.color }}
            >
              <img src={item.image} alt={item.name} className='w-24 transition-transform duration-300 group-hover:translate-y-[-20px]' />
            </div>
            <div className='flex flex-col justify-center items-center h-[100px] w-full absolute bottom-0 px-5'>
              <span className='text-lg text-gray-800'>{item.name}</span>
              <NavLink className='text-lg font-semibold hover:text-blue-500 transition duration-700'>{item.description}</NavLink>
            </div>
          </div>
        )
      })}
    </div>

  )
}

export default CardUi;