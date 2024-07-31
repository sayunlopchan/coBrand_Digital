import React from 'react'
import { NavLink } from 'react-router-dom';


const CardUi = ({ data, darkMode }) => {

  return (
    <div className='flex flex-wrap justify-center p-5 '>
      {data.map((item, idx) => {
        return (
          <div
            key={idx}
            className={`relative flex flex-col items-center w-96 h-[300px] pt-8 duration-300 group hover:shadow-md ${darkMode ? 'hover:shadow-gray-50' : 'hover:shadow-gray-500'}`}
          >
            <div
              className='absolute border rounded-full h-[150px] w-[150px] transition-transform duration-300 group-hover:scale-110 flex items-center justify-center'
              style={{ backgroundColor: item.color }}
            >
              <img src={item.image} alt={item.name} className='w-24 transition-transform duration-300 group-hover:translate-y-[-20px]' />
            </div>
            <div className='flex flex-col justify-center items-center h-[100px] w-full absolute bottom-0 px-5'>
              <span className={`text-lg font-bold  ${darkMode ? 'text-gray-500' : 'text-gray-800'}`}>{item.name}</span>
              <NavLink className='text-md hover:text-blue-500 transition '>{item.description}</NavLink>
            </div>
          </div>
        )
      })}
    </div>

  )
}

export default CardUi;