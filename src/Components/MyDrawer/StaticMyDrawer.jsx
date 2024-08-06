import React from "react";
import { Drawer, IconButton } from "@material-tailwind/react";

import { RxHamburgerMenu } from "react-icons/rx";

import logo from "../../assets/image/logo/cobrand-primary.png";
import darkLogo from "../../assets/image/logo/cobrand-secondary.png";
import ThemeMode from "../ThemeMode";

// social media icons
import socialIcon1 from "../../assets/image/socialmedia-icons/facebook.svg";
import socialIcon2 from "../../assets/image/socialmedia-icons/instagram.svg";
import socialIcon3 from "../../assets/image/socialmedia-icons/whatsapp.svg";
import socialIcon4 from "../../assets/image/socialmedia-icons/viber.svg";
import socialIcon5 from "../../assets/image/socialmedia-icons/linkedin.svg";
import { NavLink } from "react-router-dom";

const StaticMyDrawer = ({ darkMode }) => {
  const [open, setOpen] = React.useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <>
      <React.Fragment>
        <div onClick={openDrawer} className="hover:cursor-pointer">
          <RxHamburgerMenu size={30} />
        </div>
        <Drawer
          placement="right"
          open={open}
          onClose={closeDrawer}
          className={`p-4 ${darkMode ? "bg-gray-900" : ""}`}
        >
          <div className="mb-6 flex items-center justify-between">
            <div className="w-[200px] flex items-center ">
              {darkMode ? (
                <img src={darkLogo} alt="coBrand primary logo" />
              ) : (
                <img src={logo} alt="coBrand primary logo" />
              )}
              <ThemeMode darkMode={darkMode} />
            </div>
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
          {/* close */}
          <div className="flex justify-center absolute bottom-10 left-32">
            <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </IconButton>
          </div>
        </Drawer>
      </React.Fragment>
    </>
  );
};

export default StaticMyDrawer;
