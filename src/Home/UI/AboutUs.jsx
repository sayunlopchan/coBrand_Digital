import React from "react";
import company1 from "../../assets/image/company/company-1.jpg";
import company2 from "../../assets/image/company/company-2.jpg";
import company3 from "../../assets/image/company/company-3.jpg";

import { useNavigate } from "react-router-dom";

const AboutUs = ({ darkMode }) => {
  const nav = useNavigate();

  return (
    <div className=" mb-[100px]">
      <h1 className="text-center font-bold text-xl md:text-5xl ">About us</h1>

      <div className="lg:grid lg:grid-cols-5 ">
        <section className="lg:col-span-3 ">
          <div className="relative px-10 md:p-10">
            <img src={company1} alt="company-1" className="w-full border-2 " />
            <img
              src={company2}
              alt="company-2"
              className="absolute w-[50px] md:w-[120px] bottom-10 left-5 border-2"
            />
            <img
              src={company3}
              alt="company-3"
              className="absolute w-[80px] md:w-[170px] bottom-10 right-5 border-2"
            />
          </div>
        </section>

        <section className="lg:col-span-2 py-10 ">
          <div className="gradient-Text">
            <h2 className="text-3xl font-semibold">What are we?</h2>
          </div>
          <div>
            <p className={`${darkMode ? "text-gray-500" : "text-gray-600"}`}>
              <strong
                className={`${
                  darkMode ? "text-gray-50" : "text-gray-900"
                } text-lg`}
              >
                CoBrand Digital
              </strong>{" "}
              is a dynamic agency dedicated to accelerating your business's
              success in the digital landscape. We specialize in driving digital
              growth through tailored strategies and cutting-edge solutions. Our
              comprehensive training programs cover essential skills including
              web design and development, graphic design, content creation,
              social media management, and photography/videography. Whether
              you're looking to enhance your online presence or upskill your
              team, CoBrand Digital is your partner in navigating and thriving
              in the digital world.
            </p>

            <button
              onClick={() => nav("about")}
              className="my-5 py-2 px-4 border-2 border-blue-700 rounded-xl hover:scale-90 duration-300"
            >
              Read more..
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
