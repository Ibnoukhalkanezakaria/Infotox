import React from "react";
import { HeroBlogData } from "../../Data/data";
import icon1 from "../../assets/Blog/icon1.svg";
import icon2 from "../../assets/Blog/icon2.svg";

const HeroBlog = () => {
  const { title, description } = HeroBlogData;
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
      </div>
    </div>
  );
};

export default HeroBlog;
