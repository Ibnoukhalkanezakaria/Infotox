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
        <div className="flex flex-row gap-6 py-6">
          <div className="basis-1/2">
            <span className="fw-600 text-xl secondary-clr ">Plan Features</span>
          </div>
          <div className="basis-1/4">
            <span className="fw-600 text-xl secondary-clr ">Plan Features</span>
          </div>
          <div className="basis-1/4">
            <span className="fw-600 text-xl secondary-clr ">Plan Features</span>
          </div>
          <div className="basis-1/4">
            <span className="fw-600 text-xl secondary-clr ">Plan Features</span>
          </div>
        </div>
        <hr />
        <div className="pt-10">
          {PlanFeatures.map((item, i) => {
            const { Professional, Premium, Entreprise, name } = item;
            return (
              <div key={i} className="flex flex-row gap-6">
                <div className="basis-1/2">
                  <span className="pt-4 pb-10 block fw-400 text-xl secondary-clr">
                    {name}
                  </span>
                </div>
                <div className="basis-1/4 pl-[70px]">
                  {Professional ? (
                    <AiOutlineCheck className="bg-[#FEF4E2] color4 rounded-full p-1 text-3xl" />
                  ) : (
                    ""
                  )}
                </div>
                <div className="basis-1/4 pl-[70px]">
                  {Premium ? (
                    <AiOutlineCheck className="bg-[#FEF4E2] color4 rounded-full p-1 text-3xl" />
                  ) : (
                    ""
                  )}
                </div>
                <div className="basis-1/4 pl-[70px]">
                  {Entreprise ? (
                    <AiOutlineCheck className="bg-[#FEF4E2] color4 rounded-full p-1 text-3xl" />
                  ) : (
                    ""
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
