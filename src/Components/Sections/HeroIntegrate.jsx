import React from "react";
import { HeroIntegrateData } from "../../Data/data";
import icon1 from "../../assets/Intregrate/icon1.svg";
import icon2 from "../../assets/Intregrate/icon2.svg";

const HeroIntegrate = () => {
  const { title, description } = HeroIntegrateData;
  return (
    <div className="bg-secondary-clr p100-section overflow-hidden">
      <div className="Wrapper text-center relative">
        <img src={icon1} alt="icon1" className="absolute   left-0 top-[20%]" />
        <img src={icon2} alt="icon1" className="absolute right-0 top-12" />
        <h1 className="relative z-40 primary-clr fw-600 md:text-5xl text-3xl m-auto max-w-[800px]">
          {title}
        </h1>
        <p className="relative z-40 color7 m-auto max-w-[500px] py-6 leading-7 fw-500">
          {description}
        </p>
        <form
          action=""
          className="flex justify-center pt-8 max-w-[500px] m-auto"
        >
          <div className="flex border border-[#3B424D] rounded-2xl">
            <input
              type="text"
              placeholder="Entre app name"
              required
              className="bg-transparent focus:outline-none placeholder:text-[#59606B]  p-4 "
            />
            <input
              type="submit"
              value="Request now"
              className="bg-color3 cursor-pointer primary-clr py-4 px-4 fw-500 text-md rounded-2xl hover:bg-[#466ef0a2] duration-300"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default HeroIntegrate;