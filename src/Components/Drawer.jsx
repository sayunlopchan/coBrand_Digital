import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { NavLink } from 'react-router-dom';

import logo from '../assets/image/logo/cobrand-primary.png'
import darkLogo from '../assets/image/logo/cobrand-secondary.png'

const Drawer = ({ darkMode }) => {
  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label htmlFor="my-drawer-4">
          <RxHamburgerMenu size={30} />
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>

        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4 space-y-3">
          <div className='w-[200px]'>
            {darkMode ?
              <img src={darkLogo} alt='coBrand primary logo' />
              :
              <img src={logo} alt='coBrand primary logo' />
            }
          </div>
          {/* Sidebar content here */}
          <NavLink to='/' className='block hover:bg-gray-700 py-2 px-4 border-b duration-500'>
            <span className={({ isActive }) => isActive ? 'text-blue-500' : ''}>Home</span>
          </NavLink>

          <NavLink to='service' className='block hover:bg-gray-700 py-2 px-4 border-b duration-500'>
            <span className={({ isActive }) => isActive ? 'text-blue-500' : ''}>Service</span>
          </NavLink>

          <NavLink to='courses' className='block hover:bg-gray-700 py-2 px-4 border-b duration-500'>
            <span className={({ isActive }) => isActive ? 'text-blue-500' : ''}>Courses</span>
          </NavLink>

          <NavLink to='about' className='block hover:bg-gray-700 py-2 px-4 border-b duration-500'>
            <span className={({ isActive }) => isActive ? 'text-blue-500' : ''}>About us</span>
          </NavLink>

          <NavLink to='context' className='block hover:bg-gray-700 py-2 px-4 border-b duration-500'>
            <span className={({ isActive }) => isActive ? 'text-blue-500' : ''}>Contect us</span>
          </NavLink>

        </ul>
      </div>
    </div >
  )
}

export default Drawer