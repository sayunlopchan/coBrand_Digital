import React, { useEffect, useRef } from "react";
import Icon1 from "../../assets/image/shapes/Icon1";
import Icon2 from "../../assets/image/shapes/Icon2";
import Icon3 from "../../assets/image/shapes/Icon3";

import laptopboy from "../../assets/image/company/optimize-bg-2.webp";
import icon1 from "../../assets/image/company/optimize-shape-2.png";
import icon2 from "../../assets/image/company/optimize-shape.png";
import Counter from "../../Components/Counter";

import overlay1 from "../../assets/image/shapes/counter-shape-4-4.png";
import overlay2 from "../../assets/image/shapes/counter-shape-4-3.png";
import Medal from "../../assets/image/icons/medal";
import Smile from "../../assets/image/icons/Smile";
import People from "../../assets/image/icons/People";

const MoreDetails = ({ darkMode }) => {
  const gridRef = useRef(null);
  const icon1Ref = useRef(null);
  const icon2Ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            icon1Ref.current.classList.add("translate-up");
            icon2Ref.current.classList.add("translate-down");
          } else {
            icon1Ref.current.classList.remove("translate-up");
            icon2Ref.current.classList.remove("translate-down");
          }
        });
      },
      { threshold: 0.5 }
    );

    if (gridRef.current) {
      observer.observe(gridRef.current);
    }

    return () => {
      if (gridRef.current) {
        observer.unobserve(gridRef.current);
      }
    };
  }, []);

  return (
    <div className=" my-[100px] py-10  ">
      {/* lady */}
      <div className="lg:grid lg:grid-cols-6 place-items-center justify-items-center">
        <div className="col-span-3 ">
          {/* blob image  */}
          <div className="blobImg mx-auto w-full h-[400px]  md:h-[500px] md:w-[500px]"></div>
        </div>

        <div className="col-span-3">
          <div className="lg:grid lg:grid-rows-2 place-items-center justify-items-center">
            <div>
              <span className="gradient-Text font-bold text-lg ">
                Let us do the work
              </span>
              <h1 className="font-bold text-4xl lg:text-5xl p-2">
                How we do It
              </h1>
            </div>

            <div>
              <div className="flex gap-5">
                <div className="relative">
                  <Icon1 />
                  <p className="absolute top-2 left-3 text-white font-bold">
                    01
                  </p>
                </div>
                <h2 className="font-bold text-lg">
                  Data & Information Collection
                </h2>
              </div>

              <div className="px-16 pb-5 text-sm text-gray-600">
                <p>
                  We keep the process simple, Through Clear Communication we
                  gather required data & infomation about your ideas, goals,
                  ideals, etc.
                </p>
              </div>
            </div>

            <div className="lg:ml-20">
              <div className="flex gap-5">
                <div className="relative">
                  <Icon2 />
                  <p className="absolute top-2 left-3 text-white font-bold">
                    02
                  </p>
                </div>
                <h2 className="font-bold text-lg">
                  Data & Information Collection
                </h2>
              </div>

              <div className="px-16 pb-5 text-sm text-gray-600">
                <p>
                  We keep the process simple, Through Clear Communication we
                  gather required data & infomation about your ideas, goals,
                  ideals, etc.
                </p>
              </div>
            </div>

            <div className="lg:ml-10">
              <div className="flex gap-5">
                <div className="relative">
                  <Icon3 />
                  <p className="absolute top-2 left-3 text-white font-bold">
                    03
                  </p>
                </div>
                <h2 className="font-bold text-lg">
                  Data & Information Collection
                </h2>
              </div>

              <div className="px-16 text-sm text-gray-600">
                <p>
                  We keep the process simple, Through Clear Communication we
                  gather required data & infomation about your ideas, goals,
                  ideals, etc.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* man */}
      <div ref={gridRef} className="lg:grid grid-cols-2 py-[100px] px-10  ">
        <div className="mt-10 space-y-5 ">
          <span className="gradient-Text font-semibold">
            Looking for best results?
          </span>
          <h1 className="text-2xl md:text-5xl font-bold">
            Best Digital Partner For Your Brand
          </h1>
          <p className="text-sm ">
            As an emerging digital marketing agency of Nepal, We come with
            unique ideas and content that relates with ever changing audience
            behavior.
          </p>

          <div className={`flex flex-col gap-10 items-center md:items-start text-sm font-semibold ${darkMode ? 'text-white' : 'text-black'}`}>

            <div className="w-[100%] space-y-1">
              <p>Social Media Marketing </p>
              <div className="progress-bar ">
                <div className="juice bg-[#A44CEE] w-[95%]">
                  <span className="border-[#A44CEE]">95</span>
                </div>
              </div>
            </div>


            <div className="w-[100%] space-y-1">
              <p>Graphic Design </p>
              <div className="progress-bar">
                <div className="juice bg-blue-500 w-[80%]">
                  <span className="border-blue-500">80</span>
                </div>
              </div>
            </div>


            <div className="w-[100%] space-y-1">
              <p> Web Development</p>
              <div className="progress-bar">
                <div className="juice bg-red-500 w-[85%]">
                  <span className="border-red-500">85</span>
                </div>
              </div>

            </div>

          </div>
        </div>

        <div className="relative">
          <img
            ref={icon1Ref}
            src={icon1}
            alt="hover icon"
            className="absolute top-44 transition-transform duration-500 w-[100px] md:w-[200px]"
          />
          <img
            ref={icon2Ref}
            src={icon2}
            alt="hover icon"
            className="absolute top-24 right-0 shadow-2xl w-[80px] md:w-[100px] transition-transform duration-500"
          />
          <img src={laptopboy} alt="" className="mx-auto" />
        </div>
      </div>


      {/* counter */}
      <div>
        <div className="relative flex justify-center py-10 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 overflow-hidden lg:w-[70vw] mx-auto px-2 rounded-2xl">
          <img
            src={overlay1}
            alt="overlays"
            className="absolute inset-0 object-cover mix-blend-overlay"
          />
          <img
            src={overlay2}
            alt="overlays"
            className="absolute bg-blend-overlay  indent-0 top-0 right-0"
          />

          <div className="grid grid-cols-3 place-items-center lg:gap-16 mx-auto text-white w-full">
            <div className="flex gap-3 items-center">
              <Medal />
              <div>
                <Counter number={200} />
                <p className="text-sm">Successful Projects</p>
              </div>
            </div>

            <div className="flex gap-3 items-center">
              <Smile />
              <div>
                <Counter number={50} />
                <p className="text-sm">Happy Customers</p>
              </div>
            </div>

            <div className="flex gap-3 items-center">
              <People />
              <div>
                <Counter number={8} />
                <p className="text-sm">Team Members</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default MoreDetails;
