import Lottie from "lottie-react";
import { TypeAnimation } from "react-type-animation";

//lottie animation
import chart from "../../assets/animation/chart.json";
import circleOrb from "../../assets/animation/circleOrb.json";

// icons
import icon1 from "../../assets/image/icons/code.png";
import icon2 from "../../assets/image/icons/ui.png";
import icon3 from "../../assets/image/icons/web-design.png";

// social media icons
import socialIcon1 from "../../assets/image/socialmedia-icons/facebook.svg";
import socialIcon2 from "../../assets/image/socialmedia-icons/instagram.svg";
import socialIcon3 from "../../assets/image/socialmedia-icons/whatsapp.svg";
import socialIcon4 from "../../assets/image/socialmedia-icons/viber.svg";

import tele from "../../assets/image/contact-icons/tele.svg";
import { NavLink } from "react-router-dom";
import StaticHeader from "../../Components/StaticHeader";

const HomeBanner = ({ darkMode }) => {
  return (
    <div className="mb-[100px]">
      <StaticHeader darkMode={darkMode} />
      <div className=" lg:grid lg:grid-cols-5">
        <Lottie animationData={chart} className="absolute opacity-30" />

        <section className=" lg:col-span-3 flex flex-col justify-center gap-10 ">
          <div className="relative z-10">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold   md:py-4">
              Digital marketing
            </h1>
            <TypeAnimation
              className=" text-3xl font-bold md:text-7xl  md:font-semibold md:py-4"
              sequence={["agency", 1000, "analysis", 1000, "value", 1000]}
              wrapper="span"
              speed={70}
              style={{
                display: "inline-block",
                background: "linear-gradient(to right, purple,  pink)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              repeat={Infinity}
            />

            <span className="text-2xl md:text-4xl md:py-4 font-bold md:font-semibold ">
              In Nepal
            </span>
            <h2
              className={`py-5 text-sm md:text-lg w-[80vw] md:w-[52vw] ${
                darkMode ? "text-gray-500" : ""
              }`}
            >
              Helping Brands, Improving Performance: Cobrand Digital Pvt Ltd.
              <br />
              Your Spark in the Digital Universe!
            </h2>
          </div>

          <div className="flex gap-10">
            <div className="flex gap-5">
              <img src={tele} alt="telephone icon" />
              <div>
                <span className="text-sm text-gray-500">Got Questions?</span>
                <br />
                <span>+9779847032260</span>
              </div>
            </div>

            <button className="py-2 px-4 border-2 border-blue-700 rounded-xl hover:scale-90 duration-300">
              contact us
            </button>
          </div>
        </section>

        <div className="relative lg:col-span-2 mx-auto hidden lg:block ">
          <Lottie animationData={circleOrb} />

          <img
            src={icon1}
            alt=""
            width={40}
            className="absolute  top-28 left-24 animate-rotate-scale-wave-1"
          />

          <img
            src={icon2}
            alt=""
            width={40}
            className="absolute bottom-32 left-32 animate-rotate-scale-wave-2"
          />

          <img
            src={icon3}
            alt=""
            width={40}
            className="absolute top-32 right-14 animate-rotate-scale-wave-3"
          />
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-center font-bold text-xl md:2xl">
          Get connected with us
        </h2>
        <div className="flex justify-center gap-6 p-4">
          <NavLink to="#">
            <img
              src={socialIcon1}
              alt="facebook icon"
              width={40}
              className="cursor-pointer hover:-translate-y-2 hover:duration-200"
            />
          </NavLink>
          <NavLink to="#">
            <img
              src={socialIcon2}
              alt="facebook icon"
              width={40}
              className="cursor-pointer hover:-translate-y-2 hover:duration-200"
            />
          </NavLink>
          <NavLink to="#">
            <img
              src={socialIcon3}
              alt="facebook icon"
              width={40}
              className="cursor-pointer hover:-translate-y-2 hover:duration-200"
            />
          </NavLink>
          <NavLink to="#">
            <img
              src={socialIcon4}
              alt="facebook icon"
              width={40}
              className="cursor-pointer hover:-translate-y-2 hover:duration-200"
            />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
