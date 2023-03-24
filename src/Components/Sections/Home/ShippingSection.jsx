import React from "react";
import { ShippingSectionData } from "../../../Data/data";

const ShippingSection = () => {
  const { title, description } = ShippingSectionData;
  return (
    <div className="bg-primary-clr p120-section">
      <div className="Wrapper text-center">
        <h1 className="secondary-clr fw-600 md:text-5xl text-3xl m-auto max-w-[700px]">
          {title}
        </h1>
        <p className="color8 m-auto max-w-[500px] py-6 leading-7 fw-500">
          {description}
        </p>
        <div className="grid grid-cols-2">
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default ShippingSection;
