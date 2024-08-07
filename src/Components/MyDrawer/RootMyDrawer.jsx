import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

// images
import logo from "../../assets/image/logo/cobrand-primary.png";
import darkLogo from "../../assets/image/logo/cobrand-secondary.png";

//darkMode btn
import ThemeMode from "../ThemeMode";

// react icon
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

// social media icons
import socialIcon1 from "../../assets/image/socialmedia-icons/facebook.svg";
import socialIcon2 from "../../assets/image/socialmedia-icons/instagram.svg";
import socialIcon3 from "../../assets/image/socialmedia-icons/whatsapp.svg";
import socialIcon4 from "../../assets/image/socialmedia-icons/viber.svg";
import socialIcon5 from "../../assets/image/socialmedia-icons/linkedin.svg";

const RootMyDrawer = ({ darkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const drawerRef = useRef(null);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (drawerRef.current && !drawerRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const handleScroll = () => {
    if (window.scrollY < 400) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  return (
    <div className="relative">
      {/* Button to toggle the drawer */}
      <div onClick={toggleDrawer} className="p-2 hover:cursor-pointer">
        <RxHamburgerMenu size={30} />
      </div>

      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md z-40 h-[100vh]"></div>
      )}

      {/* Drawer */}
      <div
        ref={drawerRef}
        className={`fixed top-0 right-0 h-[100vh] w-[70vw] sm:w-[300px] md:w-[70vw] bg-gray-900 text-white transform transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* logo */}
        <div className="w-[200px] flex items-center gap-4 p-2">
          {darkMode ? (
            <img src={darkLogo} alt="coBrand primary logo" />
          ) : (
            <img src={logo} alt="coBrand primary logo" />
          )}
          <ThemeMode darkMode={darkMode} />
        </div>

        {/* Sidebar content here */}
        <div className={`${darkMode ? "text-gray-500" : ""}`}>
          <NavLink
            to="/"
            className="block hover:bg-gray-700 py-2 px-4 border-b duration-500"
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className="block hover:bg-gray-700 py-2 px-4 border-b duration-500"
          >
            About us
          </NavLink>

          <NavLink
            to="/service"
            className="block hover:bg-gray-700 py-2 px-4 border-b duration-500"
          >
            Service
          </NavLink>

          <NavLink
            to="/contact"
            className="block hover:bg-gray-700 py-2 px-4 border-b duration-500"
          >
            Contact us
          </NavLink>
        </div>

        {/* social links */}
        <div className="text-center space-y-3">
          <h1>Follow us </h1>
          <div className="flex justify-center gap-3">
            <NavLink to="https://www.facebook.com/CoBrand.np">
              <img src={socialIcon1} alt="facebook" width={30} />
            </NavLink>
            <NavLink to="https://www.instagram.com/cobrand.np">
              <img src={socialIcon2} alt="instagram" width={30} />
            </NavLink>
            <NavLink to="">
              <img src={socialIcon3} alt="whatsapp" width={30} />
            </NavLink>
            <NavLink to="">
              <img src={socialIcon4} alt="viber" width={30} />
            </NavLink>
            <NavLink to="">
              <img src={socialIcon5} alt="kinkedin" width={30} />
            </NavLink>
          </div>
        </div>
        {/* close button */}
        <div
          onClick={toggleDrawer}
          className="flex justify-center mt-10 text-2xl"
        >
          <IoClose size={40} />
        </div>
      </div>
    </div>
  );
};

export default RootMyDrawer;
