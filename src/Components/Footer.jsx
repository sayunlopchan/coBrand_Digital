import React from "react";
import { NavLink } from "react-router-dom";
import Logo from '../assets/image/logo/cobrand-primary.png'



const Footer = ({ darkMode }) => {
  return (
    <div className={`${darkMode ? 'border-t-2' : 'bg-blue-500 text-white'}`}>
      <div className="grid grid-cols-1 grid-rows-3  md:grid-cols-3 md:grid-rows-none gap-7 px-16 pt-10 md:mb-32 items-center">
        <div>
          <img src={Logo} alt="" className=" h-16" />
          <p className="text-md">
            <strong>Cobrand Digital</strong> is the leading firm providing various digital
            marketing services in Nepal to enhance businesses online presence.
          </p>
          <button>Connect With us</button>
        </div>
        <div>
          <h1 className="text-lg md:text-2xl font-bold ">Services</h1>
          <nav>
            <ul className="list-disc">
              <li className="hover:underline">
                <NavLink>Web Design & Development</NavLink>
              </li>
              <li className="hover:underline">
                <NavLink>Graphic Design</NavLink>
              </li>
              <li className="hover:underline">
                <NavLink>Social Media Marketing</NavLink>
              </li>
              <li className="hover:underline">
                <NavLink>Influencer Marketing</NavLink>
              </li>
              <li className="hover:underline">
                <NavLink>Photography & Videography</NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <h1 className="text-lg font-bold md:text-2xl">Our Social Media</h1>
          <nav>
            <ul className="list-disc">
              <li className="hover:underline">
                <NavLink>facebook</NavLink>
              </li>
              <li className="hover:underline">
                <NavLink>Instagram</NavLink>
              </li>
              <li className="hover:underline">
                <NavLink>Whatsapp</NavLink>
              </li>
              <li className="hover:underline">
                <NavLink>Linkden</NavLink>
              </li>
              <li className="hover:underline">
                <NavLink>Viber</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="flex justify-center items-center p-4">
        <p className="text-center bg-white text-gray-700 py-4 md:py-5 rounded-full text-sm md:text-md w-full">
          © 2024{" "}
          <span className="font-semibold text-blue-500">
            Cobrand Digital Pvt. Ltd.{" "}
          </span>
          | All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;