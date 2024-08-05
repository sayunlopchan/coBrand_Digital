import React, { useEffect, useRef } from "react";
import Icon1 from "../../assets/image/shapes/Icon1";
import Icon2 from "../../assets/image/shapes/Icon2";
import Icon3 from "../../assets/image/shapes/Icon3";

import laptopboy from "../../assets/image/company/optimize-bg-2.webp";
import icon1 from "../../assets/image/company/optimize-shape-2.png";
import icon2 from "../../assets/image/company/optimize-shape.png";

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
    <div className="pt-10 space-y-28">
      <div className="lg:grid lg:grid-cols-6 place-items-center justify-items-center">
        <div className="col-span-3 ">
          <div className="blobImg mx-auto"></div>
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

      <div ref={gridRef} className="lg:grid grid-cols-2 p-10">
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
          <div>{/* hbhv */}</div>
        </div>
        <div className="relative">
          <img
            ref={icon1Ref}
            src={icon1}
            alt=""
            className="absolute top-44 transition-transform duration-500"
          />
          <img
            ref={icon2Ref}
            src={icon2}
            alt=""
            className="absolute top-24 right-0 shadow-2xl w-[100px] transition-transform duration-500"
          />
          <img src={laptopboy} alt="" className="mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default MoreDetails;
