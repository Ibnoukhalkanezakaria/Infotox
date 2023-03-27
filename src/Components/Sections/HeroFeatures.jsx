import React from "react";
import { HeroFeaturesData } from "../../Data/data";
import PrimaryButton from "../Buttons/PrimaryButton";
import icon1 from "../../assets/Features/icon1.svg";
import icon2 from "../../assets/Features/icon2.svg";

import { Link } from "react-router-dom";

const HeroFeatures = () => {
  const { title, description } = HeroFeaturesData;
  return (
    <div className="bg-secondary-clr p100-section overflow-hidden">
      <div className="Wrapper text-center relative">
        <img src={icon1} alt="icon1" className="absolute right-0 top-12" />
        <img src={icon2} alt="icon1" className="absolute left-0 top-[20%]" />
        <h1 className="relative z-40 primary-clr fw-600 md:text-5xl text-3xl m-auto max-w-[800px]">
          {title}
        </h1>
        <p className="relative z-40 color7 m-auto max-w-[500px] py-6 leading-7 fw-500">
          {description}
        </p>
        <Link to="/pricing">
          <PrimaryButton className="mt-4 mb-14">
            Get started for free
          </PrimaryButton>
        </Link>
      </div>
    </div>
  );
};

export default HeroFeatures;
