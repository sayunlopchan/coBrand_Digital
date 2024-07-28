import React from 'react'
import logo from '../assets/image/logo/cobrand-primary.png'
import darkLogo from '../assets/image/logo/cobrand-secondary.png'
import { NavLink } from 'react-router-dom'
import { IoSunny } from "react-icons/io5";
import { IoIosMoon } from "react-icons/io";
import Drawer from './Drawer';


const Header = ({ darkMode, setDarkMode }) => {
  return (
    <div className={`flex justify-between items-center p-2 ${darkMode ? 'shadow-sm shadow-gray-800' : 'shadow-md'}`}>

      {/* Logo */}
      <NavLink to='/' className='w-[200px]'>
        {darkMode ?
          <img src={darkLogo} alt='coBrand primary logo' />
          :
          <img src={logo} alt='coBrand primary logo' />
        }
      </NavLink>

      {/* Nav */}
      <nav className='space-x-4 hidden md:block'>
        <NavLink to='/' className={({ isActive }) => isActive ? 'text-blue-500' : ''}>Home</NavLink>
        <NavLink to='service' className={({ isActive }) => isActive ? 'text-blue-500' : ''}>Service</NavLink>
        <NavLink to='courses' className={({ isActive }) => isActive ? 'text-blue-500' : ''}>Courses</NavLink>
        <NavLink to='about' className={({ isActive }) => isActive ? 'text-blue-500' : ''}>About</NavLink>
      </nav>

      {/* Theme Toggle */}
      <div className='hidden md:block'>
        <label htmlFor="toggle" className="flex items-center cursor-pointer">
          <div className="relative">
            <input
              id="toggle"
              type="checkbox"
              className="sr-only"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
            <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
            <div
              className={`dot absolute left-1 top-1  w-6 h-6 rounded-full transition duration-700 ${darkMode ? "transform translate-x-full bg-black" : "bg-yellow-500"
                }`}
            >
              {
                darkMode ? '' : <IoSunny color='white' size={20} className='mx-auto mt-[2px]' />
              }
              {
                !darkMode ? '' : <IoIosMoon size={20} color='white' className='mx-auto mt-[2px]' />
              }
            </div>
          </div>
        </label>

      </div>

      {/* Drawer */}
      <div className='md:hidden'>
        <Drawer darkMode={darkMode} />
      </div>
    </div>
  )
}

export default Header