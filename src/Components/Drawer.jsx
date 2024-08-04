import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { NavLink } from 'react-router-dom';

import logo from '../assets/image/logo/cobrand-primary.png'
import darkLogo from '../assets/image/logo/cobrand-secondary.png'
import ThemeMode from './ThemeMode';



// social media icons
import socialIcon1 from '../assets/image/socialmedia-icons/facebook.svg'
import socialIcon2 from '../assets/image/socialmedia-icons/instagram.svg'
import socialIcon3 from '../assets/image/socialmedia-icons/whatsapp.svg'
import socialIcon4 from '../assets/image/socialmedia-icons/viber.svg'
import socialIcon5 from '../assets/image/socialmedia-icons/linkedin.svg'
import socialIcon6 from '../assets/image/socialmedia-icons/threads.svg'





const Drawer = ({ darkMode }) => {
  return (
    <div className="drawer drawer-end z-10">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">
        {/* Page content here */}
        <label htmlFor="my-drawer-4">
          <RxHamburgerMenu size={30} />
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>

        <nav className="menu bg-base-200 text-base-content min-h-full w-80 p-4 space-y-3">
          <div className='w-[200px] flex items-center'>
            {darkMode ?
              <img src={darkLogo} alt='coBrand primary logo' />
              :
              <img src={logo} alt='coBrand primary logo' />
            }
            <ThemeMode darkMode={darkMode} />
          </div>

          {/* Sidebar content here */}
          <NavLink to='/' className='block hover:bg-gray-700 py-2 px-4 border-b duration-500'>
            Home
          </NavLink>

          <NavLink to='about' className='block hover:bg-gray-700 py-2 px-4 border-b duration-500'>
            About us
          </NavLink>

          <NavLink to='service' className='block hover:bg-gray-700 py-2 px-4 border-b duration-500'>
            Service
          </NavLink>

          <NavLink to='contact' className='block hover:bg-gray-700 py-2 px-4 border-b duration-500'>
            Contact us
          </NavLink>

          <div className='px-4 space-y-3'>
            <h1>Follow us </h1>
            <div className='flex gap-3'>
              <NavLink to='https://www.facebook.com/CoBrand.np'>
                <img src={socialIcon1} alt="facebook" width={30} />
              </NavLink>
              <NavLink to='https://www.instagram.com/cobrand.np'>
                <img src={socialIcon2} alt="instagram" width={30} />
              </NavLink>
              <NavLink to=''>
                <img src={socialIcon3} alt="whatsapp" width={30} />
              </NavLink>
              <NavLink to=''>
                <img src={socialIcon4} alt="viber" width={30} />
              </NavLink>
              <NavLink to=''>
                <img src={socialIcon5} alt="kinkedin" width={30} />
              </NavLink>
              <NavLink to=''>
                <img src={socialIcon6} alt="threads" width={30} />
              </NavLink>
            </div>
          </div>
        </nav>
      </div>

    </div >
  )
}

export default Drawer