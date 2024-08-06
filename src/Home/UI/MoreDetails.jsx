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
    <div className=" my-[100px] py-10 space-y-28 ">
      {/* lady */}
      <div className="lg:grid lg:grid-cols-6 place-items-center justify-items-center">
        <div className="col-span-3 ">
          <div className="blobImg mx-auto w-[200px] md:w-[400px]"></div>
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
                  <p className="absolute top-2 left-3">01</p>
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
                  <p className="absolute top-2 left-3">02</p>
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
                  <p className="absolute top-2 left-3">03</p>
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
      <div ref={gridRef} className="lg:grid grid-cols-2 py-[100px]">
        <div className="mt-10 space-y-5">
          <span className="gradient-Text font-semibold">
            Looking for best results?
          </span>
          <h1 className="text-5xl font-bold">
            Best Digital Partner For Your Brand
          </h1>
          <p className="text-sm text-gray-500">
            As an emerging digital marketing agency of Nepal, We come with
            unique ideas and content that relates with ever changing audience
            behavior.
          </p>

          <div className="flex flex-col gap-10 text-sm text-gray-500">
            <div>
              <p>Social Media Marketing </p>
              <progress
                className="w-[390px] rounded-full h-3"
                max={100}
                value={90}
              />
            </div>
            <div>
              <p>Graphic Design </p>
              <progress
                className="w-[390px] rounded-full h-3"
                max={100}
                value={85}
              />
            </div>
            <div>
              <p> Web Development</p>
              <progress
                className="w-[390px] rounded-full h-3"
                max={100}
                value={80}
              />
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
