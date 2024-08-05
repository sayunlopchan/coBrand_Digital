import React from "react";
import { IoSunny } from "react-icons/io5";
import { IoIosMoon } from "react-icons/io";

const ThemeMode = ({ darkMode, setDarkMode }) => {
  return (
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
          className={`dot absolute left-1 top-1  w-6 h-6 rounded-full transition duration-700 ${
            darkMode ? "transform translate-x-full bg-black" : "bg-white"
          }`}
        >
          {darkMode ? (
            <IoIosMoon color="white" size={20} className="mx-auto mt-[2px]" />
          ) : (
            <IoSunny color="orange" size={20} className="mx-auto mt-[2px]" />
          )}
        </div>
      </div>
    </label>
  );
};

export default ThemeMode;
