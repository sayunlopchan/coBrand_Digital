import React from "react";
import logo from "../assets/image/logo/cobrand-primary.png";
import darkLogo from "../assets/image/logo/cobrand-secondary.png";
import { NavLink } from "react-router-dom";

import ThemeMode from "./ThemeMode";
import RootMyDrawer from "./MyDrawer/RootMyDrawer";

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <div
      className={`flex justify-between items-center py-1 px-10 ${
        darkMode
          ? "bg-gray-900 shadow-sm shadow-gray-800"
          : "shadow-md bg-white text-black"
      }`}
    >
      {/* Logo */}
      <NavLink to="/" className="w-[200px]">
        {darkMode ? (
          <img src={darkLogo} alt="CoBrand secondary logo" />
        ) : (
          <img src={logo} alt="CoBrand primary logo" />
        )}
      </NavLink>

      {/* Nav */}
      <nav className="space-x-4 hidden md:block">
        <NavLink
          to="/"
          className={`({ isActive }) => (isActive ? "text-blue-500" : "")`}
        >
          Home
        </NavLink>
        <NavLink
          to="about"
          className={({ isActive }) => (isActive ? "text-blue-500" : "")}
        >
          About
        </NavLink>
        <NavLink
          to="service"
          className={({ isActive }) => (isActive ? "text-blue-500" : "")}
        >
          Service
        </NavLink>
        <NavLink
          to="contact"
          className={({ isActive }) => (isActive ? "text-blue-500" : "")}
        >
          Contact
        </NavLink>

        {/* btn */}
        <button className="font-bold text-white text-lg px-10 py-2 rounded-full bg-blue-400 hover:bg-purple-500 duration-150">
          Message
        </button>
      </nav>

      {/* Theme Toggle */}
      <span className="hidden">
        {" "}
        {/*hidden because i dont know why the btn in rootlayout dont work unless i add this here lol */}
        <ThemeMode darkMode={darkMode} setDarkMode={setDarkMode} />
      </span>

      {/* Drawer */}
      <div className="md:hidden">
        <RootMyDrawer darkMode={darkMode} />
      </div>
    </div>
  );
};

export default Header;
