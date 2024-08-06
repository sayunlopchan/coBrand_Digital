import React from "react";
import data from "../../assets/data/service_data";

const OurServices = ({ darkMode }) => {
  return (
    <section className="mb-[100px]">
      <div className="text-center">
        <span className="gradient-Text font-bold text-center ">
          Why Choose Us
        </span>
        <h1 className="font-bold text-6xl">Our Services</h1>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-2 pt-10">
        {data.map((item, idx) => {
          return (
            <div
              key={idx}
              className={`grid grid-rows-6 w-96 mx-auto justify-items-center h-[380px]`}
            >
              <div className="relative row-span-2 my-auto rounded-full flex justify-center">
                <img src={item.bg_img} alt="bg-shape" className="absolute" />
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-[130px] relative z-10 "
                />
              </div>

              <div className="px-5 row-span-4">
                <h1 className="text-lg font-bold text-center">{item.name}</h1>
                <p
                  className={`text-md text-center ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default OurServices;
