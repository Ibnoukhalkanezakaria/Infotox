import React from "react";
import { HeroPricingData } from "../../Data/data";

const HeroPricing = () => {
  const { title, description } = HeroPricingData;
  return (
    <div className="bg-secondary-clr p100-section overflow-hidden">
      <div className="Wrapper text-center relative">
        <h1 className="relative z-40 primary-clr fw-600 md:text-5xl text-3xl m-auto max-w-[800px]">
          {title}
        </h1>
        <p className="pb-[50px] relative z-40 color7 m-auto max-w-[500px] py-6 leading-7 fw-500">
          {description}
        </p>
      </div>
    </div>
  );
};

export default HeroPricing;
