import React from "react";
import { FeaturesSectionData } from "../../Data/data";
import { AiOutlineCheck } from "react-icons/ai";

const FeaturesSection = () => {
  const { PlanFeatures } = FeaturesSectionData;
  return (
    <div className="bg-primary-clr p100-section">
      <div className="Wrapper">
        <h1 className="fw-500 text-5xl items-center secondary-clr leading-3">
          Features
        </h1>
        <div className="flex gap-8 flex-wrap">
          <div className="bg-orange-500 p-2 basis-[700px] ">
            <span>1</span>
          </div>
          <div className="flex gap-8 justify-between basis-[500px]">
            <div className="bg-orange-500 p-2 basis-[200px]">
              <span>2</span>
            </div>
            <div className="bg-orange-500 p-2 basis-[200px]">
              <span>3</span>
            </div>
            <div className="bg-orange-500 p-2 basis-[200px]">
              <span>4</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
