import React from 'react';
import { IoSunny } from "react-icons/io5";
import { IoIosMoon } from "react-icons/io";

const ThemeMode = ({ darkMode, setDarkMode }) => {
  // Toggle function with rotation animation
  const handleToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <label htmlFor="toggle" className="flex items-center cursor-pointer">
      <div className="relative">
        <input
          id="toggle"
          type="checkbox"
          className="sr-only"
          checked={darkMode}
          onChange={handleToggle}
        />
        <div className={`block w-14 h-14 rounded-full duration-300`}>
          <div
            className={`dot w-6 h-6 rounded-full duration-700`}
          >
            {darkMode ? (
              <IoIosMoon size={40} color='white' className={`transition-transform duration-500 ${darkMode ? 'icon-rotate' : ''}`} />
            ) : (
              <IoSunny size={40} color='orange' className={`transition-transform duration-500 ${!darkMode ? 'icon-rotate' : ''}`} />
            )}
          </div>
        </div>
      </div>
    </label>
  );
}

export default ThemeMode;
