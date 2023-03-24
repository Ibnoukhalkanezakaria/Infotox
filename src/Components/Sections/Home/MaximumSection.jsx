import React from "react";
import image1 from "../../../assets/Shipping/image1.svg";
import { MaximumSectionData } from "../../../Data/data";
import { AiOutlineCheck } from "react-icons/ai";

const MaximumSection = () => {
  const { options } = MaximumSectionData;
  return (
    <div className="bg-secondary-clr p50-section">
      <div className="Wrapper2 grid md:grid-cols-2 items-center grid-cols-1 p100-section gap-8 ">
        <div className="text-left">
          <h2 className="primary-clr fw-600 text-5xl leading-[80px] max-w-[500px]">
            Get maximum growth with us
          </h2>
          <p className="text-[#949AA6] leading-7 pt-8 pb-8 max-w-[450px]">
            The journey of your package from the warehouse to your customer's
            doorstep is the most overwhelming aspect of the entire selling cycle
            – Make it easy with Infonux.
          </p>
          {options.map((item, i) => {
            const { option } = item;
            return (
              <div key={i} className="pb-4 flex items-center gap-4">
                <AiOutlineCheck className="bg-[#3E434D] primary-clr rounded-full p-1 text-3xl" />
                <p className="text-[#949AA6] text-lg">{option}</p>
              </div>
            );
          })}
        </div>
        <div className="">
          <img src={image1} alt="image" />
        </div>
      </div>
    </div>
  );
};

export default MaximumSection;
