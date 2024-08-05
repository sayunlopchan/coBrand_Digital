import React from "react";

import logo from "../assets/image/logo/cobrand-primary.png";
import darkLogo from "../assets/image/logo/cobrand-secondary.png";

import { NavLink } from "react-router-dom";
import Drawer from "./Drawer";
import ThemeMode from "./ThemeMode";

const StaticHeader = ({ darkMode, setDarkMode }) => {
  return (
    <div className={`flex justify-between items-center p-2`}>
      {/* Logo */}
      <NavLink to="/" className="w-[200px]">
        {darkMode ? (
          <img src={darkLogo} alt="CoBrand secondary logo" />
        ) : (
          <img src={logo} alt="CoBrand primary logo" />
        )}
      </NavLink>

      {/* links */}
      <nav className="space-x-4 hidden md:block">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "text-blue-500" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "text-blue-500" : "")}
        >
          About
        </NavLink>
        <NavLink
          to="/service"
          className={({ isActive }) => (isActive ? "text-blue-500" : "")}
        >
          Service
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "text-blue-500" : "")}
        >
          Contact
        </NavLink>

        {/* btn */}
        <button className="font-bold text-white text-lg px-10 py-2 rounded-full bg-blue-400 hover:bg-purple-500 duration-150">
          Message
        </button>
      </nav>
      <span className="hidden">
        <ThemeMode darkMode={darkMode} setDarkMode={setDarkMode} />
      </span>
      {/* Drawer */}
      <div className="md:hidden">
        <Drawer darkMode={darkMode} />
      </div>
    </div>
  );
};

export default StaticHeader;
