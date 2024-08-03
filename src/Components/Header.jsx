import React from 'react'
import logo from '../assets/image/logo/cobrand-primary.png'
import darkLogo from '../assets/image/logo/cobrand-secondary.png'
import { NavLink } from 'react-router-dom'
import Drawer from './Drawer';
import ThemeMode from './ThemeMode';

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <div className={`flex justify-between items-center p-2 sticky top-0 z-50 ${darkMode ? 'bg-gray-900 shadow-sm shadow-gray-800' : 'shadow-md bg-white text-black'}`}>
      <div className='flex items-center'>

        {/* Logo */}
        <NavLink to='/' className='w-[200px]'>
          {darkMode ?
            <img src={darkLogo} alt='CoBrand secondary logo' />
            :
            <img src={logo} alt='CoBrand primary logo' />
          }
        </NavLink>

        {/* Nav */}
        <nav className='space-x-4 hidden md:block'>
          <NavLink to='/' className={({ isActive }) => isActive ? 'text-blue-500' : ''}>Home</NavLink>
          <NavLink to='about' className={({ isActive }) => isActive ? 'text-blue-500' : ''}>About</NavLink>
          <NavLink to='service' className={({ isActive }) => isActive ? 'text-blue-500' : ''}>Service</NavLink>
          <NavLink to='contact' className={({ isActive }) => isActive ? 'text-blue-500' : ''}>Contact</NavLink>
        </nav>
      </div>
      {/* Theme Toggle */}
      <span className='hidden md:block'>
        <ThemeMode darkMode={darkMode} setDarkMode={setDarkMode} />
      </span>


      {/* Drawer */}
      <div className='md:hidden'>

        {/* toggleBtn */}
        <Drawer darkMode={darkMode} />
      </div>
    </div>
  )
}

export default Header;
